import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/publisherArticles.ts', import.meta.url), 'utf8');
const start = source.indexOf("additionalPublisherBlogDetails['payroll-benefits-deduction-handoff'].contextualLink = {");
const end = source.indexOf('\n};', start);

if (start < 0 || end < start) throw new Error('Missing data-owned benefits-deduction contextual handoff.');

const block = source.slice(start, end + 3);
for (const expected of [
  "href: '/services/benefits-deduction-administration'",
  "label: 'See benefits and deduction administration support'",
  'A Philippines-based payroll support specialist can organize approved benefit and deduction records, flag a mismatch, and prepare the handoff for review.',
  'The authorized payroll owner decides eligibility, policy treatment, deduction changes, and final payroll action.',
]) {
  if (!block.includes(expected)) throw new Error(`Missing durable benefits-deduction handoff contract: ${expected}`);
}

console.log('benefits-deduction handoff source contract passed');
