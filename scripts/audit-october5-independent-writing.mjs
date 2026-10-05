import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const blogManifest = JSON.parse(readFileSync('.paperclip/daily-content/2026-10-05/blog.json', 'utf8'));
const researchManifest = JSON.parse(readFileSync('.paperclip/daily-content/2026-10-05/research.json', 'utf8'));
const current = new Set([
  ...blogManifest.articles.map((entry) => `blog/${entry.slug}`),
  ...researchManifest.entries.map((entry) => `research/${entry.slug}`),
]);
const decode = (value) => value.replace(/<[^>]*>/g, ' ').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const normalize = (value) => decode(value).toLowerCase().replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
const wordCount = (value) => value.split(/\s+/).filter(Boolean).length;
const shellHeadings = new Set([
  'the short answer', 'what to keep in the plan', 'payroll handoff readiness check', 'sources', 'frequently asked questions',
  'turn the decision into a checked first cycle', 'related articles', 'payroll support role brief', 'keep planning',
  'questions from payroll buyers', 'what should the first pilot include', 'how is progress reviewed',
  'who owns benefit deduction handoff control', 'who owns payroll general ledger handoff reconciliation',
  'who owns payroll filing amendment change control', 'who owns payroll overpayment case coordination',
  'who owns retroactive pay request preparation', 'who owns employee work location change intake',
  'who owns bonus and commission input signoff', 'who owns off cycle payroll request control',
  'who owns paystub access support routing', 'who owns payroll provider subprocessor oversight',
  'who owns termination and final pay packet preparation', 'who owns returned payroll payment case handling',
  'apply the protocol to a bounded support lane', 'related research', 'research sources', 'research questions',
  'does this research decide legal tax wage banking privacy or employment treatment', 'what can outsourced payroll support do', 'how should a buyer pilot',
  'research finding', 'methodology', 'key takeaways', 'faqs',
]);
const narrativeHeadings = (record) => record.headings.filter((heading) => !shellHeadings.has(heading));
const records = [];
for (const family of ['blog', 'research']) {
  const root = `.next/server/app/${family}`;
  for (const name of readdirSync(root).filter((entry) => entry.endsWith('.html'))) {
    const slug = name.slice(0, -5);
    const key = `${family}/${slug}`;
    const html = readFileSync(`${root}/${name}`, 'utf8');
    const article = html.match(/<article[^>]*>[\s\S]*?<\/article>/)?.[0];
    if (!article) continue;
    const paragraphs = [...article.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
      .map((match) => ({ original: decode(match[1]), normalized: normalize(match[1]) }))
      .filter((paragraph) => wordCount(paragraph.normalized) >= 50);
    const headings = [...article.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g)].map((match) => normalize(match[1])).filter(Boolean);
    records.push({ key, current: current.has(key), paragraphs, headings });
  }
}

const paragraphOwners = new Map();
for (const record of records) for (const paragraph of record.paragraphs) {
  const owners = paragraphOwners.get(paragraph.normalized) ?? [];
  owners.push({ key: record.key, current: record.current, text: paragraph.original });
  paragraphOwners.set(paragraph.normalized, owners);
}
const repeatedParagraphs = [...paragraphOwners.values()].filter((owners) => owners.length > 1 && owners.some((owner) => owner.current));

const currentRecords = records.filter((record) => record.current);
const repeatedHeadings = [];
for (let left = 0; left < currentRecords.length; left += 1) {
  for (let right = left + 1; right < currentRecords.length; right += 1) {
    const shared = narrativeHeadings(currentRecords[left]).filter((heading) => narrativeHeadings(currentRecords[right]).includes(heading));
    if (shared.length) repeatedHeadings.push({ first: currentRecords[left].key, second: currentRecords[right].key, shared });
  }
}

const exactHeadingSequences = [];
for (const record of currentRecords) {
  const narrative = narrativeHeadings(record);
  for (let index = 0; index < narrative.length - 1; index += 1) {
    const pair = `${narrative[index]} >>> ${narrative[index + 1]}`;
    for (const other of currentRecords) {
      if (other.key <= record.key) continue;
      const otherNarrative = narrativeHeadings(other);
      for (let otherIndex = 0; otherIndex < otherNarrative.length - 1; otherIndex += 1) {
        if (pair === `${otherNarrative[otherIndex]} >>> ${otherNarrative[otherIndex + 1]}`) exactHeadingSequences.push({ first: record.key, second: other.key, pair });
      }
    }
  }
}

const report = {
  cycleLabel: '2026-10-05', generatedAt: new Date().toISOString(),
  currentRouteCount: currentRecords.length, priorCorpusRouteCount: records.length - currentRecords.length,
  minimumParagraphWordsForExactReuseAudit: 50,
  exactRepeatedSubstantiveParagraphs: repeatedParagraphs,
  repeatedNonShellHeadingsAcrossCurrentRoutes: repeatedHeadings,
  exactRepeatedAdjacentHeadingSequences: exactHeadingSequences,
  status: repeatedParagraphs.length || repeatedHeadings.length || exactHeadingSequences.length ? 'failed' : 'passed',
};
writeFileSync('ops/october-5-independent-writing-audit.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ status: report.status, currentRouteCount: report.currentRouteCount, priorCorpusRouteCount: report.priorCorpusRouteCount, repeatedParagraphs: repeatedParagraphs.length, repeatedHeadings: repeatedHeadings.length, repeatedHeadingSequences: exactHeadingSequences.length }, null, 2));
if (report.status !== 'passed') process.exitCode = 1;
