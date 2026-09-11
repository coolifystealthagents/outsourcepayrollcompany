const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const artifactPath = path.join(root, '.next/server/app/research/philippines-payroll-employee-status-reconciliation.html');
const artifact = fs.readFileSync(artifactPath, 'utf8');
const sitemap = fs.readFileSync(path.join(root, '.next/server/app/sitemap.xml.body'), 'utf8');

const requiredSource = [
  "slug:'philippines-payroll-employee-status-reconciliation'",
  "heading:'Prepare the onboarding record'",
  "A Philippines-based payroll specialist can organize approved onboarding records and flag missing inputs for review.",
  "Your authorized payroll owner keeps employment-status and approval decisions.",
  "href:'/services/new-hire-payroll-setup'",
];
for (const marker of requiredSource) {
  if (!source.includes(marker)) throw new Error(`source handoff marker missing: ${marker}`);
}
if ((source.match(/slug:'philippines-payroll-employee-status-reconciliation'/g) || []).length !== 1) {
  throw new Error('target research record must occur exactly once');
}

const main = artifact.match(/<main[\s\S]*?<\/main>/)?.[0] || '';
if (!main) throw new Error('route-local main missing from generated artifact');
for (const marker of [
  'Philippines payroll employee-status reconciliation',
  'Prepare the onboarding record',
  'A Philippines-based payroll specialist can organize approved onboarding records and flag missing inputs for review.',
  'Your authorized payroll owner keeps employment-status and approval decisions.',
]) {
  if (!main.includes(marker)) throw new Error(`route-local marker missing: ${marker}`);
}
const targetHrefCount = (main.match(/href="\/services\/new-hire-payroll-setup"/g) || []).length;
if (targetHrefCount !== 1) throw new Error(`expected one route-local target href, found ${targetHrefCount}`);
if (!main.includes('<h1>Philippines payroll employee-status reconciliation</h1>')) throw new Error('expected route H1 missing');
if (!artifact.includes('https://outsourcepayrollcompany.com/research/philippines-payroll-employee-status-reconciliation')) throw new Error('canonical missing');
if (!sitemap.includes('<loc>https://outsourcepayrollcompany.com/research/philippines-payroll-employee-status-reconciliation</loc>')) throw new Error('canonical sitemap loc missing');
if (!sitemap.includes('<loc>https://outsourcepayrollcompany.com/services/new-hire-payroll-setup</loc>')) throw new Error('target service sitemap loc missing');

console.log('employee-status handoff source and generated artifact checks passed');
