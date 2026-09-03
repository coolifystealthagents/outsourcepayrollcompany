import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [contentSource, rendererSource] = await Promise.all([
  readFile(new URL('../app/fleet-content.ts', import.meta.url), 'utf8'),
  readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8'),
]);

test('reconciliation false-positive research owns a bounded timesheet handoff', () => {
  const slug = 'philippines-payroll-reconciliation-false-positive-analysis';
  const start = contentSource.lastIndexOf(`{slug:'${slug}'`);
  const end = contentSource.indexOf('\n  {slug:', start + 1);
  assert.ok(start >= 0 && end > start, 'target research record is present and bounded');
  const record = contentSource.slice(start, end);

  assert.match(record, /heading:'Prepare timesheet exceptions for owner review'/);
  assert.match(record, /href:'\/services\/timesheet-reconciliation'/);
  assert.match(record, /cta:'Review timesheet reconciliation support'/);
  assert.match(record, /line up approved time records with the exception list before cut-off/);
  assert.match(record, /authorized payroll owner decides disputed hours and approves the final payroll result/);
});

test('research renderer keeps data-owned service handoffs inside the article', () => {
  assert.match(rendererSource, /post\.serviceHandoff/);
  assert.match(rendererSource, /href=\{post\.serviceHandoff\.href\}/);
  assert.match(rendererSource, /<article className="section article-shell publisher-article">/);
});
