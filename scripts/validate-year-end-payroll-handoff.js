const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'app', 'fleet-content.ts'), 'utf8');
const route = '/research/philippines-payroll-tax-form-checklist';
const target = '/services/year-end-payroll-preparation';
const canonical = `https://outsourcepayrollcompany.com${route}`;
const artifact = fs.readFileSync(path.join(root, '.next', 'server', 'app', 'research', 'philippines-payroll-tax-form-checklist.html'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, '.next', 'server', 'app', 'sitemap.xml.body'), 'utf8');

const sourceMarkers = [
  "'philippines-payroll-tax-form-checklist': {",
  "heading:'Prepare year-end payroll evidence for review'",
  "A Philippines-based specialist can organize approved tax-form records, note missing evidence, and prepare the year-end handoff.",
  'Your authorized payroll owner decides tax treatment and approves any submission.',
  "cta:'Review year-end payroll preparation support'",
  "href:'/services/year-end-payroll-preparation'",
  "updated:legacyResearchHandoffs[slug] ? '2026-09-15' : undefined",
  'serviceHandoff:legacyResearchHandoffs[slug]',
];
for (const marker of sourceMarkers) {
  if (!source.includes(marker)) throw new Error(`Missing source handoff contract: ${marker}`);
}

const mainStart = artifact.indexOf('<main');
const mainEnd = artifact.indexOf('</main>', mainStart);
if (mainStart < 0 || mainEnd < 0) throw new Error('Could not isolate route-local main.');
const main = artifact.slice(mainStart, mainEnd + '</main>'.length);
for (const marker of [
  '<h1>Philippines payroll tax form checklist</h1>',
  'Prepare year-end payroll evidence for review',
  'A Philippines-based specialist can organize approved tax-form records, note missing evidence, and prepare the year-end handoff.',
  'Your authorized payroll owner decides tax treatment and approves any submission.',
  'Updated <time dateTime="2026-09-15">September 15, 2026</time>',
]) {
  if (!main.includes(marker)) throw new Error(`Missing emitted route-local contract: ${marker}`);
}
if ((main.match(/href="\/services\/year-end-payroll-preparation"/g) || []).length !== 1) {
  throw new Error('Expected exactly one route-local Year-End Payroll Preparation link.');
}
if (!artifact.includes(`<link rel="canonical" href="${canonical}"/>`)) throw new Error('Missing canonical tag.');
if (!artifact.includes('<meta property="article:modified_time" content="2026-09-15"/>')) throw new Error('Missing Open Graph modified date.');
if (!artifact.includes('"datePublished":"2026-08-10"')) throw new Error('Missing Article datePublished.');
if (!artifact.includes('"dateModified":"2026-09-15"')) throw new Error('Missing Article dateModified.');
if ((sitemap.match(new RegExp(`<loc>${canonical}</loc>`, 'g')) || []).length !== 1) throw new Error('Expected one source sitemap location.');
if ((sitemap.match(/<loc>https:\/\/outsourcepayrollcompany\.com\/services\/year-end-payroll-preparation<\/loc>/g) || []).length !== 1) throw new Error('Expected one target sitemap location.');
if (sitemap.includes('<lastmod>')) throw new Error('Unexpected sitemap lastmod; this repository contract omits it.');

console.log('year-end payroll handoff source and generated artifact checks passed');
