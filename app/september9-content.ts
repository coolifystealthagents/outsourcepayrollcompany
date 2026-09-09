const DATE = '2026-09-09';

const blogSources = [
  { name: 'NIST Zero Trust Architecture, SP 800-207', url: 'https://csrc.nist.gov/pubs/sp/800/207/final', note: 'Official guidance for explicit verification and least-privilege access.' },
  { name: 'Philippine National Privacy Commission: Data Privacy Act', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Official privacy-law text; obtain qualified advice for specific obligations.' },
  { name: 'CISA phishing guidance', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing', note: 'Official guidance for recognizing and reporting suspicious requests.' },
];

const blogSeeds = [
  ['payroll-returned-bank-file-recovery', 'Recover a returned payroll bank file without losing the evidence trail', 'A rejected bank file needs a controlled recovery record, not a hurried overwrite.', 'returned bank file recovery', 'submission ID, rejection code, frozen file version, correction authority, resubmission ID, and settlement check', '/blog-heroes/aug21-payroll-cutoff-evidence-window.png'],
  ['payroll-variable-pay-source-register', 'Build a source register for commissions and variable pay', 'Tie every variable-pay instruction to its calculation source, earning period, owner, and approval.', 'variable-pay source register', 'worker ID, earning period, calculation version, policy owner, approval, and payroll output', '/blog-heroes/aug21-repair-payroll-record-conflict-register.png'],
  ['payroll-court-order-receipt-log', 'Log payroll court orders without interpreting them in the inbox', 'Protect deadlines and document custody while qualified owners decide what the order requires.', 'court-order receipt log', 'received time, delivery channel, covered identity, sealed source, deadline, and qualified owner', '/blog-heroes/payroll-approval-evidence-packet.png'],
  ['payroll-retro-pay-period-map', 'Map retroactive pay across the periods it actually affects', 'Separate the source correction, affected periods, approved method, and later output verification.', 'retro-pay period map', 'original period, source change, effective date, calculation owner, target cycle, and reconciliation', '/blog-heroes/aug21-repair-payroll-absence-continuity-runbook.png'],
  ['payroll-time-zone-cutoff-board', 'Run a payroll cutoff board across time zones', 'Translate cutoffs once, preserve the source zone, and show who can act in each review window.', 'time-zone cutoff board', 'source deadline, source zone, converted zone, business-day rule, owner availability, and escalation time', '/blog-heroes/payroll-sensitive-request-verification.png'],
  ['payroll-deduction-cap-review-queue', 'Prepare a deduction-cap review queue without making the decision', 'Surface potentially constrained deductions with source evidence for a qualified owner.', 'deduction-cap review queue', 'deduction source, period totals, rule reference, conflict flag, owner, and disposition', '/blog-heroes/payroll-cycle-closeout-review.png'],
  ['payroll-name-change-identity-bridge', 'Bridge an employee name change across payroll records', 'Link old and new identifiers so an authorized update does not look like a duplicate worker.', 'name-change identity bridge', 'authorized request, prior identifier, new identifier, effective date, system status, and output match', '/blog-heroes/employee-payroll-question-intake.png'],
  ['payroll-unclaimed-payment-followup', 'Track an unclaimed payroll payment through final disposition', 'Keep contact attempts, protected payment evidence, owner decisions, and resolution connected.', 'unclaimed-payment follow-up', 'payment reference, confirmed status, contact log, decision owner, next date, and final evidence', '/blog-heroes/payroll-provider-rejection-response.png'],
  ['payroll-third-party-file-receipt', 'Prove receipt of a payroll file sent to a third party', 'Distinguish secure transmission, provider receipt, processing, and final acceptance.', 'third-party file receipt', 'file ID, version, sender, secure channel, receipt event, and processing status', '/blog-heroes/payroll-employee-change-effective-date.png'],
  ['payroll-manager-delegation-window', 'Set a temporary payroll approval delegation window', 'Document who may act, which decisions they may take, the dates, and how authority returns.', 'approval delegation window', 'delegator, delegate, decision scope, start, expiry, exceptions, and return confirmation', '/blog-heroes/aug21-payroll-exception-aging-review.png'],
  ['payroll-small-balance-writeoff-routing', 'Route small payroll balance questions without an automatic write-off', 'A low amount can still need policy, accounting, payroll, or legal review before disposition.', 'small-balance routing', 'balance source, affected period, prior action, threshold reference, owner, and approved outcome', '/blog-heroes/payroll-timesheet-source-check.png'],
  ['payroll-parallel-run-difference-log', 'Keep a useful difference log during a parallel payroll run', 'Record field-level differences, likely causes, decisions, and retest evidence before migration.', 'parallel-run difference log', 'old-system value, new-system value, transformation rule, cause, owner decision, and retest result', '/blog-heroes/payroll-cycle-closeout-ledger.png'],
] as const;

export const september9BlogPosts = blogSeeds.map(([slug, title, excerpt], index) => ({ slug, title, excerpt, minutes: 10, published: DATE, batchIndex: index }));

export const september9BlogDetails = Object.fromEntries(blogSeeds.map(([slug, title, excerpt, subject, evidence, image], index) => [slug, {
  takeaways: [`Define the ${subject} population before anyone changes a payroll record.`, `Link every status to source evidence and a named owner.`, 'Keep preparation separate from consequential approval and release.'],
  readinessRows: [
    { area: 'Scope', ready: `The ${subject} population and payroll period are named.`, ownerCheck: 'Confirm inclusions, exclusions, and deadline.' },
    { area: 'Evidence', ready: `The record includes ${evidence}.`, ownerCheck: 'Resolve missing or conflicting authority.' },
    { area: 'Close', ready: 'The expected output and follow-up date are written down.', ownerCheck: 'Verify the final disposition against source evidence.' },
  ],
  sections: [
    { heading: `Start the ${subject} record with a precise boundary`, paragraphs: [`Open one restricted record for the event and name the entity, pay group, payroll period, source, received time, and responsible owner. For this ${subject} workflow, collect ${evidence}. A Philippines-based payroll support specialist can assemble and maintain the record, but should not infer missing approval or decide pay, tax, legal, benefit, banking, or employment treatment.`] },
    { heading: 'Preserve the source and current state', paragraphs: [`Keep the original request, the current payroll value, and every later version linked rather than overwriting them. Record what is known, what conflicts, and what remains unavailable. Use protected system references instead of copying sensitive values into email or a general tracker. This creates a reviewable history for ${subject} without turning the queue into another payroll database.`] },
    { heading: 'Give the owner a decision-ready question', paragraphs: [`State the exact decision required, the affected records, the cutoff, and the consequence of waiting. Separate questions when different owners control different parts of the case. Support may compare records and prepare the packet; the authorized owner approves the disposition. A ticket assignment, chat reaction, or provider receipt is status evidence, not approval.`] },
    { heading: 'Verify the result at the correct stage', paragraphs: [`After an authorized action, compare the next payroll or provider output with the approved instruction. Check the affected record and a small set of surrounding control totals so an intended change does not hide an unrelated one. Keep the case open if payment confirmation, employee communication, a later-cycle reversal, or another dependency remains outstanding.`] },
    { heading: 'Close with a reusable control note', paragraphs: [`Record the final source, approver, action, output version, reviewer, completion time, and any limitation. Review whether the ${subject} case arose from unclear intake, access, timing, source quality, or provider handling. Change the routine only when the evidence supports a specific improvement, and retain final payroll authority with the company-designated owner.`] },
  ],
  roleBrief: ['Role: bounded payroll preparation and evidence support', `Workflow: ${title}`, 'Access: named account and least privilege', 'Stop rule: escalate consequential decisions', 'Close: verify output against the approved source'],
  faqs: [
    { question: `Can outsourced support approve a ${subject} action?`, answer: 'No. Support can collect evidence, compare records, maintain status, and route a decision. An authorized owner must approve consequential action.' },
    { question: 'What belongs in the working record?', answer: `Keep the minimum review evidence: ${evidence}. Link to protected sources instead of duplicating sensitive data.` },
    { question: 'When is the case complete?', answer: 'Close only after the authorized disposition appears in the expected output and every required follow-up has an owner and date.' },
  ],
  sources: blogSources,
  rich: {
    keyword: title.toLowerCase(), marker: `opc-20260909-blog-${index + 1}`, published: DATE, image,
    directAnswer: [excerpt, `Treat ${subject} as a controlled evidence path, not an informal exception.`], stats: [],
    quote: { text: 'Verify identity, authority, source, and output at each sensitive payroll handoff.', attribution: 'Outsource Payroll Company operating principle', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
    chart: { title, description: 'Source, review, decision, verification, and close.', methods: 'Illustrative operating model; it does not report measured performance.' },
    graphic: { title: 'Controlled payroll path', description: 'A five-stage evidence workflow.', steps: ['Source', 'Review', 'Decide', 'Verify', 'Close'] },
    banners: [], internalLinks: [{ href: '/services/payroll-preparation', label: 'Payroll preparation support' }, { href: '/services/payroll-reporting', label: 'Payroll reporting support' }, { href: '/blog', label: 'Payroll operations guides' }],
  },
}]));

const researchSources = [
  { label: 'Philippine Statistics Authority, Labor Force Survey', url: 'https://psa.gov.ph/statistics/labor-force-survey' },
  { label: 'Department of Labor and Employment, Philippines', url: 'https://www.dole.gov.ph/' },
  { label: 'National Privacy Commission, Data Privacy Act', url: 'https://privacy.gov.ph/data-privacy-act/' },
  { label: 'NIST, Security and Privacy Controls for Information Systems and Organizations', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final' },
];

const researchSeeds = [
  ['philippines-payroll-bank-file-rejection-cohort', 'Philippines payroll bank-file rejection cohort study', 'At which documented state do returned bank files most often lose traceability?', 'A predeclared cohort follows original, rejected, corrected, resubmitted, and settled file states.', '/research-heroes/philippines-payroll-deadline-slack-research.png', 'bank-file rejection traceability'],
  ['philippines-payroll-variable-pay-lineage-study', 'Philippines variable-pay source lineage study', 'Can a reviewer connect each variable-pay output to its calculation and approval source?', 'The protocol tests lineage across source, calculation, review, approval, and output versions.', '/research-heroes/philippines-payroll-duplicate-time-entry-detection-study.png', 'variable-pay source lineage'],
  ['philippines-payroll-cross-timezone-cutoff-study', 'Philippines payroll cross-time-zone cutoff study', 'How much usable owner-review time remains after time-zone and availability constraints?', 'The design separates nominal duration from observable review availability and response gaps.', '/research-heroes/philippines-payroll-approval-authority-boundary-research.png', 'cross-time-zone cutoff slack'],
  ['philippines-payroll-identity-change-linkage-study', 'Philippines payroll identity-change linkage study', 'Which evidence prevents an authorized identity change from becoming an omission or duplicate?', 'The sample tests old-to-new identifier bridges across source, system, and output populations.', '/research-heroes/philippines-payroll-source-output-bridge-study.png', 'identity-change record linkage'],
  ['philippines-payroll-parallel-run-variance-study', 'Philippines payroll parallel-run variance classification study', 'Can reviewers classify migration differences consistently before a new payroll system goes live?', 'Two reviewers apply predeclared variance states and preserve disagreements for analysis.', '/research-heroes/philippines-payroll-exception-cohort-research.png', 'parallel-run variance classification'],
] as const;

const faq = [
  { question: 'Does this research determine the correct payroll treatment?', answer: 'No. It evaluates operating evidence and workflow states. Authorized payroll owners and qualified advisers decide treatment.' },
  { question: 'Can the findings be generalized to every employer?', answer: 'No. Systems, policies, providers, populations, and sample quality differ. Repeat the method with local definitions.' },
  { question: 'What can outsourced payroll support do?', answer: 'Support can prepare extracts, maintain evidence links, run documented comparisons, and surface exceptions for owner review.' },
];

export const september9ResearchPosts = researchSeeds.map(([slug, title, question, stat, image, subject], index) => ({
  slug, title, excerpt: `Research question: ${question}`, published: DATE, order: 800 + index, stat, image,
  takeaways: [`Define ${subject} states before selecting cases.`, 'Report counts, elapsed time, missing evidence, and unresolved cases separately.', 'Treat association as an operating signal, not proof of cause or correct payroll treatment.'],
  sections: [
    { heading: 'Research question, unit, and evidence boundary', body: `This study examines ${subject} in a Philippines-based payroll support lane. The unit is one dated case tied to an employing entity, pay group, payroll period, source record, owner, and observable output. Evidence is limited to authorized workflow records and de-identified fields needed for the test. The study does not calculate entitlement, interpret employment or tax law, validate a private provider's internal system, or estimate the performance of an individual worker.` },
    { heading: 'Build a bounded and reproducible sample', body: `Freeze the eligible population before reviewing outcomes. Include at least three comparable payroll cycles and record exclusions, missing records, system changes, holidays, and provider changes. Select routine and exception cases using written criteria, then preserve source versions and extraction timestamps. A convenience sample may reveal failure modes but cannot establish a population rate. If the denominator is small or incomplete, publish counts and case timelines rather than a percentage that implies unsupported precision.` },
    { heading: 'Classify states before inspecting results', body: `Write the state definitions in advance: complete, incomplete, conflicting, superseded, unresolved, and out of scope. Require evidence for every transition and have a second reviewer repeat a sample. Record disagreement instead of forcing consensus. For ${subject}, compare the expected event sequence with the timestamps and versions actually observed. A later matching total does not prove the intermediate controls worked, and an acknowledgement does not prove that the intended payroll output changed.` },
    { heading: 'Analyze timing, breakpoints, and competing explanations', body: `Measure elapsed time only between comparable timestamps and retain the original time zones. Identify the first missing or inconsistent state, then test alternative explanations such as late source receipt, incomplete approval, unavailable reviewer, access failure, provider processing, or weak logging. Describe associations without claiming causality. Separate evidence-quality findings from operational findings, because missing timestamps can make a stable process look fast or a delayed process impossible to measure.` },
    { heading: 'Limitations and evidence-led conclusion', body: `The sample may omit rare events, seasonal workload, overwritten system history, or decisions held in restricted channels. Public sources provide labor, privacy, and control context but do not establish an employer's private workflow or a universal benchmark. The evidence-led conclusion is to use transparent state definitions, versioned sources, bounded samples, independent review, and explicit unresolved categories. Repeat the test after a targeted control change before attributing improvement to that change.` },
  ],
  sources: researchSources, faq,
  related: ['philippines-payroll-reconciliation-evidence', 'philippines-payroll-source-validation', 'philippines-payroll-control-testing'],
  serviceHandoff: { heading: 'Apply the method to a payroll support lane', body: 'A scoped support team can maintain the case register and prepare the comparison while the payroll owner defines decisions and approves corrections.', href: '/services/payroll-reporting', cta: 'Review payroll reporting support' },
}));
