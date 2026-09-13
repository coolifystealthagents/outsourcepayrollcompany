const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const sourcePath = path.join(root, 'app', 'fleet-content.ts');
const route = '/research/philippines-payroll-control-metric-denominators';
const canonical = `https://outsourcepayrollcompany.com${route}`;
const artifactPath = path.join(root, '.next', 'server', 'app', 'research', 'philippines-payroll-control-metric-denominators.html');
const sitemapPath = path.join(root, '.next', 'server', 'app', 'sitemap.xml.body');
const source = fs.readFileSync(sourcePath, 'utf8');
const artifact = fs.readFileSync(artifactPath, 'utf8');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const start = source.indexOf("slug:'philippines-payroll-control-metric-denominators'");
const end = source.indexOf("slug:'philippines-payroll-reconciliation-false-positive-analysis'", start);
if (start < 0 || end < 0 || end <= start) throw new Error('Could not isolate the control-metric research record.');
const record = source.slice(start, end);
const requiredSource = [
  "updated:'2026-09-13'",
  "heading:'Prepare a review-ready payroll report'",
  "href:'/services/payroll-reporting'",
  'Your authorized payroll owner decides what the report means, approves corrections, and releases payroll action.',
];
for (const value of requiredSource) if (!record.includes(value)) throw new Error(`Missing source contract: ${value}`);
const mainStart = artifact.indexOf('<main');
const mainEnd = artifact.indexOf('</main>', mainStart);
if (mainStart < 0 || mainEnd < 0) throw new Error('Could not isolate the emitted route main.');
const main = artifact.slice(mainStart, mainEnd + '</main>'.length);
const requiredMain = [
  '<h1>Philippines payroll control metric denominators</h1>',
  'Prepare a review-ready payroll report',
  'Your authorized payroll owner decides what the report means, approves corrections, and releases payroll action.',
  'Updated <time dateTime="2026-09-13">September 13, 2026</time>',
];
for (const value of requiredMain) if (!main.includes(value)) throw new Error(`Missing emitted main contract: ${value}`);
if ((main.match(/href="\/services\/payroll-reporting"/g) || []).length !== 1) throw new Error('Expected exactly one Payroll Reporting link in the route-local main.');
if (!artifact.includes(`<link rel="canonical" href="${canonical}"/>`)) throw new Error('Missing canonical tag.');
if (!artifact.includes('<meta property="article:modified_time" content="2026-09-13"/>')) throw new Error('Missing Open Graph modified date.');
if (!artifact.includes('"dateModified":"2026-09-13"')) throw new Error('Missing Article dateModified.');
if ((sitemap.match(new RegExp(`<loc>${canonical}</loc>`, 'g')) || []).length !== 1) throw new Error('Expected exactly one canonical sitemap entry.');
if (sitemap.includes('<lastmod>')) throw new Error('Unexpected sitemap lastmod; this repository contract omits it.');
console.log('control-metric handoff source and generated artifact checks passed');
