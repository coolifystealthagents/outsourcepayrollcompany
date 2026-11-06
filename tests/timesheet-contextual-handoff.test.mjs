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

test('new-hire document checklist owns a bounded payroll-setup handoff', () => {
  const start = publisherSource.indexOf("additionalPublisherBlogDetails['new-hire-payroll-document-checklist']");
  assert.ok(start >= 0, 'new-hire setup handoff record is present');
  const record = publisherSource.slice(start, publisherSource.indexOf('\n};', start) + 3);
  assert.match(record, /heading: 'Prepare new-hire records before payroll setup'/);
  assert.match(record, /href: '\/services\/new-hire-payroll-setup'/);
  assert.match(record, /label: 'See new-hire payroll setup support'/);
  assert.match(record, /authorized payroll owner decides whether the record is complete, approves payroll setup, and resolves employment-status questions/);
  assert.doesNotMatch(record, /support specialist may approve payroll setup/);
});

test('payroll inbox triage owns a bounded payroll-query handoff', () => {
  const start = publisherSource.indexOf("additionalPublisherBlogDetails['payroll-inbox-triage']");
  assert.ok(start >= 0, 'payroll inbox triage handoff record is present');
  const record = publisherSource.slice(start, publisherSource.indexOf('\n};', start) + 3);
  assert.match(record, /heading: 'Route payroll inbox questions for review'/);
  assert.match(record, /href: '\/services\/payroll-query-support'/);
  assert.match(record, /label: 'Review payroll query support'/);
  assert.match(record, /sort the approved message, source record, and open question into a review-ready queue/);
  assert.match(record, /authorized payroll owner decides the answer, any correction, and any effect on pay, tax, banking, benefits, or employment/);
  assert.doesNotMatch(record, /support specialist decides the answer/);
});

test('payroll QA exception log owns a bounded payroll-reporting handoff', () => {
  const start = publisherSource.indexOf("additionalPublisherBlogDetails['payroll-qa-exception-log']");
  assert.ok(start >= 0, 'payroll reporting handoff record is present');
  const record = publisherSource.slice(start, publisherSource.indexOf('\n};', start) + 3);
  assert.match(record, /heading: 'Turn the exception log into a review-ready report'/);
  assert.match(record, /href: '\/services\/payroll-reporting'/);
  assert.match(record, /label: 'Review payroll reporting support'/);
  assert.match(record, /group duplicate entries, late approvals, and unusual changes with their source records/);
  assert.match(record, /authorized payroll owner decides whether an exception changes pay, tax, benefits, banking, or the final payroll result/);
  assert.doesNotMatch(record, /support specialist decides whether an exception changes pay/);
});

test('blog renderer keeps a data-owned contextual handoff inside the article', () => {
  assert.match(articleSource, /detail\.contextualLink/);
  assert.match(articleSource, /className="guide-block article-contextual-link"/);
  assert.match(articleSource, /href=\{detail\.contextualLink\.href\}/);
});
