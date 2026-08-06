#!/usr/bin/env node

/**
 * Separate, fail-closed hand-off from the daily Blog routine to Coolify.
 *
 * The Blog routine owns content validation and its single production-branch
 * push. This routine consumes the resulting batch manifest and is the only
 * place allowed to inspect the global Coolify queue or submit a deployment.
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const batchPath = resolve(process.env.DAILY_BLOG_BATCH_FILE || "ops/daily-blog-batch.json");
const statePath = resolve(process.env.DEPLOYMENT_STATE_FILE || "ops/.batched-coolify-deployment-state.json");
const timestampUtc = new Date().toISOString();
const requiredConfig = ["COOLIFY_API_URL", "COOLIFY_API_TOKEN", "COOLIFY_APPLICATION_UUID"];

const readJson = (file) => {
  try { return JSON.parse(readFileSync(file, "utf8")); } catch { return null; }
};
const writeState = (record) => {
  const previous = readJson(statePath) || {};
  writeFileSync(statePath, `${JSON.stringify({ ...previous, ...record }, null, 2)}\n`, { mode: 0o600 });
};
const finish = (outcome, details = {}) => {
  const record = { outcome, timestampUtc, ...details };
  writeState(record);
  // Never include environment values or API response bodies in routine output.
  console.log(JSON.stringify(record));
};
const git = (args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
const normalize = (value) => String(value ?? "").trim().toLowerCase().replace(/[\s-]+/g, "_");
const items = (payload) => Array.isArray(payload) ? payload :
  (payload?.data || payload?.deployments || payload?.items || []);
const shaOf = (item) => item?.commit_sha || item?.commit || item?.git_commit_sha || item?.git_commit || null;
const uuidOf = (item) => item?.deployment_uuid || item?.uuid || item?.id || null;
const active = new Set(["queued", "pending", "in_progress", "running", "building", "deploying"]);
const successful = new Set(["success", "succeeded", "finished", "completed"]);

const api = async (path, options = {}) => {
  const response = await fetch(`${process.env.COOLIFY_API_URL.replace(/\/$/, "")}${path}`, {
    ...options,
    headers: { Accept: "application/json", Authorization: `Bearer ${process.env.COOLIFY_API_TOKEN}`, ...(options.headers || {}) },
  });
  const body = await response.json().catch(() => null);
  if (!response.ok) throw new Error(`Coolify request failed with HTTP ${response.status}`);
  return body;
};

const manifest = readJson(batchPath);
const tasks = manifest?.tasks;
const complete = manifest?.status === "completed" && manifest?.validated === true &&
  Array.isArray(tasks) && tasks.length > 0 && tasks.every((task) =>
    task.status === "completed" && task.validated === true && task.imagesComplete === true &&
    task.metadataComplete === true && task.linksComplete === true && task.ctaComplete === true);

if (!existsSync(batchPath) || !complete) {
  finish("SKIPPED_INCOMPLETE", { reason: "required daily Blog batch is missing or lacks complete validation evidence" });
} else {
  const state = readJson(statePath) || {};
  const commitSha = manifest.commitSha || manifest.sha || state.batchSha || git(["rev-parse", "HEAD"]);
  const missing = requiredConfig.filter((key) => !process.env[key]);
  if (missing.length) {
    finish("DEPLOYMENT_FAILED", { reason: "protected Coolify configuration is unavailable", missingConfig: missing });
  } else {
    try {
      const deployments = items(await api("/api/v1/deployments"));
      const sameCommit = deployments.filter((item) => shaOf(item) === commitSha);
      const existing = sameCommit.find((item) => active.has(normalize(item.status)) || successful.has(normalize(item.status)));
      if (existing && successful.has(normalize(existing.status))) {
        finish("ALREADY_DEPLOYED", { commitSha, deploymentUuid: uuidOf(existing), deploymentStatus: normalize(existing.status) });
      } else if (existing) {
        finish(normalize(existing.status) === "queued" ? "DEPLOYMENT_ALREADY_PENDING" : "DEPLOYMENT_IN_PROGRESS", {
          commitSha, deploymentUuid: uuidOf(existing), deploymentStatus: normalize(existing.status),
        });
      } else if (state.batchSha === commitSha && state.deploymentUuid && state.acceptedStatus) {
        // A prior accepted request must be reconciled by SHA/UUID, never retried blindly.
        finish("DEPLOYMENT_IN_PROGRESS", { commitSha, deploymentUuid: state.deploymentUuid, deploymentStatus: state.acceptedStatus });
      } else {
        const queuedCount = deployments.filter((item) => normalize(item.status) === "queued").length;
        if (queuedCount >= 3) {
          finish("SKIPPED_COOLIFY_QUEUE", { commitSha, observedQueuedCount: queuedCount });
        } else {
          const accepted = await api("/api/v1/deploy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ uuid: process.env.COOLIFY_APPLICATION_UUID, force: false }),
          });
          const deploymentUuid = uuidOf(accepted) || uuidOf(accepted?.data) || uuidOf(accepted?.deployments?.[0]);
          if (!deploymentUuid) throw new Error("accepted response did not contain a deployment UUID");
          finish("DEPLOYMENT_SUBMITTED", {
            websiteDomain: process.env.COOLIFY_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "",
            paperclipProject: process.env.PAPERCLIP_PROJECT || "Onboarding",
            applicationUuid: process.env.COOLIFY_APPLICATION_UUID,
            commitSha, deploymentUuid, triggerTimeUtc: timestampUtc,
            acceptedStatus: "accepted", observedQueuedCount: queuedCount,
          });
        }
      }
    } catch {
      finish("DEPLOYMENT_FAILED", { commitSha, reason: "Coolify response was unavailable or uncertain; no blind retry attempted" });
    }
  }
}

