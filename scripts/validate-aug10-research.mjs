import fs from 'node:fs';
import {execFileSync} from 'node:child_process';

const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/research.json', 'utf8'));
const source = fs.readFileSync('app/fleet-content.ts', 'utf8');
const article = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const index = fs.readFileSync('app/research/page.tsx', 'utf8');
if (manifest.entries.length !== 14 || manifest.entries.length < manifest.minimum) throw new Error('accepted count must be exactly 14 and meet minimum');
const slugs = new Set();
for (const entry of manifest.entries) {
  if (slugs.has(entry.slug) || entry.route !== `/research/${entry.slug}`) throw new Error(`invalid route or duplicate: ${entry.slug}`);
  slugs.add(entry.slug);
  if (entry.sourcePath !== 'app/fleet-content.ts' || !fs.existsSync(entry.sourcePath)) throw new Error(`missing source: ${entry.slug}`);
  if (entry.sourceDateField !== 'published' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') throw new Error(`wrong date: ${entry.slug}`);
  if (!entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) throw new Error(`rendered fields incomplete: ${entry.slug}`);
  const sourceLine = source.split('\n').find(line => line.includes(`'${entry.slug}'`));
  if (!sourceLine || !sourceLine.includes("'2026-08-10'")) throw new Error(`explicit source date missing: ${entry.slug}`);
  const parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:${entry.sourcePath}`], {encoding:'utf8'});
  const introduced = execFileSync('git', ['show', `${entry.introducedByCommit}:${entry.sourcePath}`], {encoding:'utf8'});
  const parentLine = parent.split('\n').find(line => line.includes(`'${entry.slug}'`));
  const introducedLine = introduced.split('\n').find(line => line.includes(`'${entry.slug}'`));
  if (!parentLine || parentLine.includes("'2026-08-10'") || !introducedLine || !introducedLine.includes("'2026-08-10'")) throw new Error(`date provenance failed: ${entry.slug}`);
}
if (!article.includes('datePublished:post.published') || !article.includes('post.published}')) throw new Error('rendered date wiring missing');
if (!article.includes('mainEntityOfPage')) throw new Error('canonical metadata missing');
if (!index.includes('sort((a,b)=>b.published.localeCompare(a.published))')) throw new Error('index is not newest-first');
console.log(`PASS: ${manifest.entries.length} research entries, source/rendered dates, provenance, canonical wiring, sitemap-compatible routes, and newest-first index`);
