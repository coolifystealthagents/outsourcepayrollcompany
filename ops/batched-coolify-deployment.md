# Batched Coolify Deployment

This is a separate hand-off after Daily Blog Publishing. The content routines
still stop after their one validated push to `origin/main`; they never call
Coolify or verify live pages.

The deployment routine runs at `0 3,9,15,21 * * *` in UTC with
`skip_if_active`, `skip_missed`, and high priority. It consumes the validated
`ops/daily-blog-batch.json` manifest, checks the exact domain/repository/
production-branch/application mapping, and persists non-secret deployment
evidence in its protected runtime state.

Before a manual trigger it reconciles the SHA and deployment UUID, counts the
global `queued` deployments, emits `SKIPPED_COOLIFY_QUEUE` at three or more,
and submits at most one deployment when below the cap. Configuration is
restricted to protected `COOLIFY_API_URL`, `COOLIFY_API_TOKEN`, and
`COOLIFY_APPLICATION_UUID`; secret values are never logged or persisted.

Allowed outcomes are exactly those in `coolify-push-routine.md`:
`SKIPPED_INCOMPLETE`, `NO_NEW_CHANGES`, `ALREADY_DEPLOYED`,
`DEPLOYMENT_ALREADY_PENDING`, `SKIPPED_COOLIFY_QUEUE`,
`DEPLOYMENT_SUBMITTED`, `DEPLOYMENT_IN_PROGRESS`, `DEPLOYMENT_FAILED`, and
`LIVE_VERIFIED`.
