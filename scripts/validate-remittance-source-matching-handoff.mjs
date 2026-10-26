import fs from 'node:fs';

const source = fs.readFileSync('app/fleet-content.ts', 'utf8');
const target = "slug:'philippines-payroll-remittance-source-matching'";
const start = source.indexOf(target);
const end = source.indexOf("\n  {slug:", start + target.length);
if (start < 0 || end < 0) throw new Error('remittance source-matching record was not found');

const record = source.slice(start, end);
for (const required of [
  "updated:'2026-10-07'",
  "heading:'Prepare contractor payment evidence for review'",
  "A Philippines-based payroll specialist can organize approved contractor payment records, remittance evidence, and open differences for review.",
  'Your authorized payroll owner decides tax treatment, payment release, correction, and filing action.',
  "cta:'Review contractor payment administration'",
  "href:'/services/contractor-payment-administration'",
]) {
  if (!record.includes(required)) throw new Error(`missing required remittance handoff contract: ${required}`);
}
for (const retired of ['/services/payroll-data-entry', 'automatically approve', 'automatic approval']) {
  if (record.includes(retired)) throw new Error(`retired or unsafe remittance handoff text remains: ${retired}`);
}

const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
for (const required of [
  'post.serviceHandoff&&<section',
  'id="service-handoff"',
  'className="article-direct-answer"',
  'href={post.serviceHandoff.href}',
  '{post.serviceHandoff.cta}',
]) {
  if (!renderer.includes(required)) {
    throw new Error(`research renderer does not retain the typed service-handoff contract: ${required}`);
  }
}
console.log('remittance source-matching handoff source contract passed');