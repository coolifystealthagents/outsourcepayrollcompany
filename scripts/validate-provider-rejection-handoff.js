const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'app', 'fleet-content.ts'), 'utf8');
const route = '/research/philippines-payroll-provider-rejection-patterns';
const target = '/services/payroll-query-support';
const canonical = `https://outsourcepayrollcompany.com${route}`;
const artifact = fs.readFileSync(path.join(root, '.next', 'server', 'app', 'research', 'philippines-payroll-provider-rejection-patterns.html'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, '.next', 'server', 'app', 'sitemap.xml.body'), 'utf8');

const start = source.indexOf("slug:'philippines-payroll-provider-rejection-patterns'");
const end = source.indexOf("slug:'philippines-payroll-cross-border-time-window'", start);
if (start < 0 || end <= start) throw new Error('Could not isolate the provider-rejection research record.');
const record = source.slice(start, end);
for (const marker of [
  "updated:'2026-09-30'",
  "heading:'Prepare a provider rejection case for review'",
  'A Philippines-based payroll specialist can sort the provider message, source record, and open question into a review-ready case.',
  'Your authorized payroll owner decides correction values, resubmission, and any effect on pay, tax, banking, or employment.',
  "cta:'Review payroll query support'",
  "href:'/services/payroll-query-support'",
]) {
  if (!record.includes(marker)) throw new Error(`Missing source contract: ${marker}`);
}

const mainStart = artifact.indexOf('<main');
const mainEnd = artifact.indexOf('</main>', mainStart);
if (mainStart < 0 || mainEnd < 0) throw new Error('Could not isolate route-local main.');
const main = artifact.slice(mainStart, mainEnd + '</main>'.length);
for (const marker of [
  '<h1>Philippines payroll provider rejection patterns</h1>',
  'Prepare a provider rejection case for review',
  'A Philippines-based payroll specialist can sort the provider message, source record, and open question into a review-ready case.',
  'Your authorized payroll owner decides correction values, resubmission, and any effect on pay, tax, banking, or employment.',
  'Updated <time dateTime="2026-09-30">September 30, 2026</time>',
]) {
  if (!main.includes(marker)) throw new Error(`Missing emitted route-local contract: ${marker}`);
}
if ((main.match(/href="\/services\/payroll-query-support"/g) || []).length !== 1) {
  throw new Error('Expected exactly one Payroll Query Support link in the route-local main.');
}
if (!artifact.includes(`<link rel="canonical" href="${canonical}"/>`)) throw new Error('Missing canonical tag.');
if (!artifact.includes('<meta property="article:modified_time" content="2026-09-30"/>')) throw new Error('Missing Open Graph modified date.');
if (!artifact.includes('"datePublished":"2026-08-13"')) throw new Error('Missing Article datePublished.');
if (!artifact.includes('"dateModified":"2026-09-30"')) throw new Error('Missing Article dateModified.');
if ((sitemap.match(new RegExp(`<loc>${canonical}</loc>`, 'g')) || []).length !== 1) throw new Error('Expected one source sitemap location.');
if ((sitemap.match(/<loc>https:\/\/outsourcepayrollcompany\.com\/services\/payroll-query-support<\/loc>/g) || []).length !== 1) throw new Error('Expected one target sitemap location.');
if (sitemap.includes('<lastmod>')) throw new Error('Unexpected sitemap lastmod; this repository contract omits it.');

console.log('provider-rejection handoff source and generated artifact checks passed');
