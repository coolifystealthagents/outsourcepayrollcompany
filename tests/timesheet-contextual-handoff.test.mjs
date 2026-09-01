import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [dataSource, articleSource, publisherSource] = await Promise.all([
  readFile(new URL('../app/data.ts', import.meta.url), 'utf8'),
  readFile(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../app/publisherArticles.ts', import.meta.url), 'utf8'),
]);

test('timesheet follow-up guide owns a contextual reconciliation handoff', () => {
  assert.match(dataSource, /contextualLink\?: \{ heading: string; body: string; href: string; label: string \}/);
  const start = publisherSource.indexOf("additionalPublisherBlogDetails['timesheet-follow-up-workflow']");
  assert.ok(start >= 0, 'timesheet follow-up handoff record is present');
  const record = publisherSource.slice(start, publisherSource.indexOf('\n};', start) + 3);
  assert.match(record, /heading: 'Reconcile hours before the payroll handoff'/);
  assert.match(record, /href: '\/services\/timesheet-reconciliation'/);
  assert.match(record, /label: 'See timesheet reconciliation support'/);
  assert.match(record, /authorized payroll owner resolves disputed hours and approves the final result/);
});

test('blog renderer keeps a data-owned contextual handoff inside the article', () => {
  assert.match(articleSource, /detail\.contextualLink/);
  assert.match(articleSource, /className="guide-block article-contextual-link"/);
  assert.match(articleSource, /href=\{detail\.contextualLink\.href\}/);
});
