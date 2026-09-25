import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(
  new URL('../app/fleet-content.ts', import.meta.url),
  'utf8',
);

test('the three recoverable August 13 research records are part of the route inventory', () => {
  assert.match(source, /const august13RecoveredResearchPosts: readonly ResearchPost\[\]/);
  assert.match(source, /\.\.\.august13RecoveredResearchPosts/);

  for (const slug of [
    'philippines-payroll-provider-rejection-patterns',
    'philippines-payroll-leave-accrual-evidence',
    'philippines-payroll-remittance-source-matching',
  ]) {
    assert.match(source, new RegExp(`'${slug}'`));
  }
});
