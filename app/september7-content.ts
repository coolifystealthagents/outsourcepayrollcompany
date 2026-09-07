const DATE = '2026-09-07';

const blogSources = [
  { name: 'NIST Zero Trust Architecture, SP 800-207', url: 'https://csrc.nist.gov/pubs/sp/800/207/final', note: 'Official guidance for explicit verification and least-privilege access.' },
  { name: 'Philippine National Privacy Commission: Data Privacy Act', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Official privacy-law text; obtain qualified advice for specific obligations.' },
  { name: 'CISA phishing guidance', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing', note: 'Official guidance for recognizing and reporting suspicious requests.' },
];

const blogSeeds = [
  ['payroll-cutoff-evidence-clock', 'Build a payroll cutoff evidence clock that survives handoffs', 'Turn a vague deadline into a visible sequence of source, review, approval, and provider timestamps.', 'cutoff evidence clock', 'scheduled cutoff, source arrival, review start, approval time, provider receipt, and output check', '/blog-heroes/aug21-payroll-cutoff-evidence-window.png'],
  ['payroll-duplicate-worker-record-check', 'How to investigate a suspected duplicate worker record before payroll', 'Compare stable identifiers and record history without merging profiles or changing pay on an assumption.', 'duplicate worker investigation', 'worker IDs, entity, source links, effective dates, prior values, and an owner decision', '/blog-heroes/aug21-repair-payroll-record-conflict-register.png'],
  ['payroll-bonus-approval-lineage', 'Keep bonus approval lineage intact from request to payroll output', 'Give every bonus input a traceable path without treating a forwarded message as final authority.', 'bonus approval lineage', 'request origin, covered workers, amount source, effective cycle, approval, and output reference', '/blog-heroes/payroll-approval-evidence-packet.png'],
  ['payroll-leave-return-status-handoff', 'A safer payroll handoff when an employee returns from leave', 'Separate the confirmed return event from decisions about pay, benefits, deductions, or employment status.', 'return-from-leave handoff', 'authorized status record, effective date, cycle question, benefit dependency, and decision owner', '/blog-heroes/aug21-repair-payroll-absence-continuity-runbook.png'],
  ['payroll-direct-deposit-change-verification-log', 'Create a verification log for direct-deposit change requests', 'Document independent identity checks and approval before a sensitive banking request reaches payroll.', 'direct-deposit change verification', 'request time, independent contact path, verification result, approver, change reference, and output review', '/blog-heroes/payroll-sensitive-request-verification.png'],
  ['payroll-retroactive-pay-input-packet', 'What belongs in a retroactive-pay input packet', 'Organize period, source, calculation ownership, approval, and later-cycle checks around a retroactive request.', 'retroactive-pay input packet', 'original period, authorized basis, owner calculation, approval, target cycle, and reconciliation result', '/blog-heroes/payroll-cycle-closeout-review.png'],
  ['payroll-tax-form-delivery-exception-queue', 'Run a privacy-aware queue for payroll tax-form delivery exceptions', 'Track delivery problems with minimum necessary data while qualified owners handle tax and identity decisions.', 'tax-form delivery exception', 'document type, delivery status, verified contact route, source link, deadline, and owner', '/blog-heroes/employee-payroll-question-intake.png'],
  ['payroll-provider-file-version-register', 'Stop payroll file confusion with a provider version register', 'Make submitted, rejected, corrected, and accepted file states distinguishable before release.', 'provider file version register', 'file ID, version, creator, approval, transmission time, provider status, and superseded marker', '/blog-heroes/payroll-provider-rejection-response.png'],
  ['payroll-deduction-change-effective-date-check', 'Check effective dates before routing payroll deduction changes', 'Place source authority and timing beside each deduction request without interpreting the underlying rule.', 'deduction effective-date check', 'authorized instruction, category, effective date, affected cycle, conflict status, and decision owner', '/blog-heroes/payroll-employee-change-effective-date.png'],
  ['payroll-payment-reversal-followup-board', 'A follow-up board for payroll payment reversals', 'Keep reversal, replacement, communication, and reconciliation obligations visible as separate states.', 'payment reversal follow-up', 'original payment reference, provider status, disposition, replacement status, communication owner, and reconciliation date', '/blog-heroes/aug21-payroll-exception-aging-review.png'],
  ['payroll-timesheet-late-change-diff', 'Use a late-change diff when an approved timesheet moves after cutoff', 'Preserve both versions and show exactly what changed before anyone decides how payroll should respond.', 'late timesheet change diff', 'original approval and version, revised source, changed fields, receipt time, affected cycle, and disposition', '/blog-heroes/payroll-timesheet-source-check.png'],
  ['payroll-closeout-open-item-rollforward', 'Roll unresolved payroll items forward without losing accountability', 'Close the cycle honestly by separating completed controls from items that still require evidence.', 'open-item rollforward', 'item ID, current evidence, unresolved question, risk note, next owner, due date, and closure proof', '/blog-heroes/payroll-cycle-closeout-ledger.png'],
] as const;

export const september7BlogPosts = blogSeeds.map(([slug, title, excerpt], index) => ({ slug, title, excerpt, minutes: 10, published: DATE, batchIndex: index }));

export const september7BlogDetails = Object.fromEntries(blogSeeds.map(([slug, title, excerpt, subject, evidence, image], index) => [slug, {
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
    keyword: title.toLowerCase(), marker: `opc-20260907-blog-${index + 1}`, published: DATE, image,
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
  ['philippines-payroll-approval-latency-cohort-study', 'Philippines payroll approval latency cohort study', 'Where does elapsed time accumulate between a review-ready payroll input and an authorized decision?', 'The protocol separates preparation, waiting, returned, approved, and verification intervals.', '/research-heroes/philippines-payroll-deadline-slack-research.png', 'approval latency'],
  ['philippines-payroll-late-timesheet-change-study', 'Philippines payroll late-timesheet change study', 'Which evidence distinguishes a new timesheet version from an unrecorded overwrite after cutoff?', 'The sample pairs frozen source versions, approval events, changed fields, receipt times, and output states.', '/research-heroes/philippines-payroll-duplicate-time-entry-detection-study.png', 'late timesheet change'],
  ['philippines-payroll-bank-change-verification-study', 'Philippines payroll bank-change verification study', 'Can records show that payment-detail changes followed an independent verification path?', 'The method tests request, verification, approval, system change, and output-review evidence.', '/research-heroes/philippines-payroll-approval-authority-boundary-research.png', 'bank-change verification'],
  ['philippines-payroll-file-version-control-study', 'Philippines payroll file version-control study', 'Can reviewers reconstruct which payroll file was approved, transmitted, rejected, corrected, and accepted?', 'Each case is evaluated against a predeclared file-state model and immutable identifiers.', '/research-heroes/philippines-payroll-source-output-bridge-study.png', 'file version control'],
  ['philippines-payroll-open-item-rollforward-study', 'Philippines payroll open-item rollforward study', 'Which unresolved payroll items remain traceable from cycle close through final disposition?', 'The design follows named items across later cycles and reports missing, superseded, resolved, and open states.', '/research-heroes/philippines-payroll-exception-cohort-research.png', 'open-item rollforward'],
] as const;

const faq = [
  { question: 'Does this research determine the correct payroll treatment?', answer: 'No. It evaluates operating evidence and workflow states. Authorized payroll owners and qualified advisers decide treatment.' },
  { question: 'Can the findings be generalized to every employer?', answer: 'No. Systems, policies, providers, populations, and sample quality differ. Repeat the method with local definitions.' },
  { question: 'What can outsourced payroll support do?', answer: 'Support can prepare extracts, maintain evidence links, run documented comparisons, and surface exceptions for owner review.' },
];

export const september7ResearchPosts = researchSeeds.map(([slug, title, question, stat, image, subject], index) => ({
  slug, title, excerpt: `Research question: ${question}`, published: DATE, order: 700 + index, stat, image,
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
