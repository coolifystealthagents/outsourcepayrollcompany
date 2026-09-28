#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(process.argv.slice(2).map((arg) => {
  const [key, ...value] = arg.replace(/^--/, '').split('=');
  return [key, value.join('=')];
}));

const buildRoot = path.resolve(args.build || '.next/server/app');
const reports = [
  { family: 'blog', manifest: args.blog, minimum: 900 },
  { family: 'research', manifest: args.research, minimum: 1200 },
].filter(({ manifest }) => manifest);

if (!reports.length) {
  console.error('Usage: node scripts/audit-rendered-content.mjs --blog=path/to/blog.json --research=path/to/research.json [--build=.next/server/app] [--out=report.json]');
  process.exit(2);
}

const decode = (value) => value
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
  .replace(/&#x([0-9a-f]+);/gi, (_, number) => String.fromCodePoint(Number.parseInt(number, 16)));

const stripElement = (html, tag) => html.replace(new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, 'gi'), ' ');

function articleBody(html) {
  const match = html.match(/<article\b[^>]*class="[^"]*(?:guide-article|publisher-article)[^"]*"[^>]*>([\s\S]*?)<\/article>/i)
    || html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i);
  if (!match) throw new Error('Rendered page has no article element');

  let body = match[1];
  for (const tag of ['script', 'style', 'nav', 'aside', 'figure']) body = stripElement(body, tag);
  body = body.replace(/<section\b[^>]*class="[^"]*(?:banner|cta|source|citation)[^"]*"[^>]*>[\s\S]*?<\/section>/gi, ' ');
  body = body.replace(/<h2\b[^>]*>\s*(?:Sources|References)\s*<\/h2>[\s\S]*$/i, ' ');
  body = body.replace(/<[^>]+>/g, ' ');
  return decode(body).replace(/\s+/g, ' ').trim();
}

const words = (text) => text.toLowerCase().match(/[a-z0-9]+(?:['-][a-z0-9]+)*/g) || [];

function shingles(tokens, size = 5) {
  const result = new Set();
  for (let index = 0; index <= tokens.length - size; index += 1) {
    result.add(tokens.slice(index, index + size).join(' '));
  }
  return result;
}

function jaccard(left, right) {
  let intersection = 0;
  for (const value of left) if (right.has(value)) intersection += 1;
  const union = left.size + right.size - intersection;
  return union ? intersection / union : 0;
}

function renderedFile(family, slug) {
  const candidates = [
    path.join(buildRoot, family, slug, 'index.html'),
    path.join(buildRoot, family, `${slug}.html`),
    path.join(buildRoot, family, slug, 'page.html'),
  ];
  const found = candidates.find((candidate) => fs.existsSync(candidate));
  if (!found) throw new Error(`No rendered HTML found for /${family}/${slug}`);
  return found;
}

const result = { generatedAt: new Date().toISOString(), buildRoot, families: {}, passed: true };

for (const report of reports) {
  const manifestPath = path.resolve(report.manifest);
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (!Array.isArray(manifest.entries)) throw new Error(`${manifestPath} has no entries array`);

  const entries = manifest.entries.map((entry) => {
    const file = renderedFile(report.family, entry.slug);
    const body = articleBody(fs.readFileSync(file, 'utf8'));
    const tokens = words(body);
    return { slug: entry.slug, file, wordCount: tokens.length, tokens, shingles: shingles(tokens) };
  });

  let maximum = { score: 0, slugs: [] };
  for (let left = 0; left < entries.length; left += 1) {
    for (let right = left + 1; right < entries.length; right += 1) {
      const score = jaccard(entries[left].shingles, entries[right].shingles);
      if (score > maximum.score) maximum = { score, slugs: [entries[left].slug, entries[right].slug] };
    }
  }

  const depthFailures = entries.filter(({ wordCount }) => wordCount < report.minimum).map(({ slug, wordCount }) => ({ slug, wordCount }));
  const overlapFailure = maximum.score >= 0.5;
  const passed = entries.length === manifest.requiredCount && !depthFailures.length && !overlapFailure;
  result.passed &&= passed;
  result.families[report.family] = {
    manifest: manifestPath,
    requiredCount: manifest.requiredCount,
    auditedCount: entries.length,
    minimumBodyWords: report.minimum,
    wordCounts: Object.fromEntries(entries.map(({ slug, wordCount }) => [slug, wordCount])),
    maximumPairwiseFiveWordShingleJaccard: Number(maximum.score.toFixed(6)),
    maximumOverlapPair: maximum.slugs,
    depthFailures,
    overlapFailure,
    passed,
  };
}

const output = `${JSON.stringify(result, null, 2)}\n`;
if (args.out) fs.writeFileSync(path.resolve(args.out), output);
process.stdout.write(output);
process.exit(result.passed ? 0 : 1);
