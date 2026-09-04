const DATE = '2026-09-04';

const blogSources = [
  { name: 'NIST Zero Trust Architecture, SP 800-207', url: 'https://csrc.nist.gov/pubs/sp/800/207/final', note: 'Official guidance for explicit verification and least-privilege access.' },
  { name: 'Philippine National Privacy Commission: Data Privacy Act', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Official privacy-law text; obtain qualified advice for specific obligations.' },
  { name: 'CISA phishing guidance', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing', note: 'Official guidance for recognizing and reporting suspicious requests.' },
];

const blogSeeds = [
  ['payroll-returned-payment-evidence-lane', 'A returned-payment evidence lane for payroll support', 'Separate a bank return from the payroll calculation and route the next decision with a complete evidence trail.', 'returned payment', 'bank return notice, payment-file reference, provider status, and verified employee contact path', '/blog-heroes/provider-rejection-correction-log.png'],
  ['payroll-new-hire-first-cycle-readiness', 'New-hire readiness checks before the first payroll cycle', 'Confirm identity, employment records, timing, and system status before a new worker enters payroll preparation.', 'new-hire readiness', 'approved hire record, effective date, pay group, required forms, and system identifiers', '/blog-heroes/payroll-input-control-map.png'],
  ['payroll-termination-input-boundary', 'A controlled intake boundary for payroll termination records', 'Keep termination-related inputs traceable while authorized owners retain every employment and pay decision.', 'termination intake', 'authorized request, effective date, final-cycle scope, benefit dependencies, and owner decision', '/blog-heroes/payroll-employee-change-effective-date.png'],
  ['payroll-garnishment-document-routing', 'Routing payroll garnishment documents without making legal judgments', 'Log, restrict, and escalate sensitive withholding documents without letting support staff interpret the instruction.', 'garnishment routing', 'receipt timestamp, issuing source, affected record, response deadline, and qualified owner', '/blog-heroes/sensitive-payroll-request-routing.png'],
  ['payroll-off-cycle-request-register', 'Building an off-cycle payroll request register', 'Give urgent payroll requests a visible queue without allowing urgency to replace approval or reconciliation.', 'off-cycle request', 'request source, business reason, affected population, deadline, approval, and later reconciliation', '/blog-heroes/payroll-exception-aging-review.png'],
  ['payroll-multi-entity-worker-match', 'Matching worker records across multiple payroll entities', 'Prevent a familiar name or identifier from sending an input to the wrong entity or pay group.', 'multi-entity worker match', 'stable worker identifier, employing entity, pay group, effective period, and source-system record', '/blog-heroes/payroll-record-authority-index.png'],
  ['payroll-inbox-identity-verification', 'Identity verification for sensitive payroll inbox requests', 'Use an independent verification path before acting on messages involving bank, tax, or personal records.', 'inbox identity verification', 'requester identity, authority, approved callback channel, requested change, and decision owner', '/blog-heroes/payroll-sensitive-request-verification.png'],
  ['payroll-prior-period-correction-queue', 'Managing a prior-period payroll correction queue', 'Keep old-period corrections distinct from current-cycle inputs and track every downstream dependency.', 'prior-period correction', 'original period, source discrepancy, approval, intended correction cycle, and follow-up output', '/blog-heroes/payroll-cycle-closeout-ledger.png'],
  ['payroll-provider-portal-access-review', 'Reviewing payroll provider portal access before cutoff', 'Check named accounts, assigned roles, backup coverage, and expired access before the payroll deadline arrives.', 'provider portal access', 'account owner, role, last review, required task, backup user, and removal date', '/blog-heroes/payroll-access-review-cycle.png'],
  ['payroll-employee-master-change-diff', 'A field-by-field diff for employee master-data changes', 'Compare approved employee changes with the payroll master record without overwriting the prior state.', 'employee master-data change', 'old value, proposed value, effective date, source approval, entry status, and output confirmation', '/blog-heroes/payroll-record-source-register.png'],
  ['payroll-unapproved-hours-quarantine', 'A quarantine lane for unapproved payroll hours', 'Keep incomplete time records visible and out of ready-to-process files until the correct owner responds.', 'unapproved hours', 'worker, period, source timesheet, missing approval, cutoff, and escalation owner', '/blog-heroes/payroll-timesheet-source-check.png'],
  ['payroll-cycle-control-total-check', 'Control-total checks between payroll preparation and provider output', 'Use population counts and categorized totals to find omissions or unexpected movement before close.', 'control-total check', 'input count, output count, categorized totals, excluded records, variances, and reviewer disposition', '/blog-heroes/payroll-handoff-qa-scorecard.png'],
] as const;

export const september4BlogPosts = blogSeeds.map(([slug, title, excerpt], index) => ({ slug, title, excerpt, minutes: 10, published: DATE, batchIndex: index }));

export const september4BlogDetails = Object.fromEntries(blogSeeds.map(([slug, title, excerpt, subject, evidence, image], index) => [slug, {
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
    keyword: title.toLowerCase(), marker: `opc-20260904-blog-${index + 1}`, published: DATE, image,
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
  ['philippines-payroll-cutoff-exception-recovery-study', 'Philippines payroll cutoff exception recovery study', 'Which recorded interventions restore review time after an input misses the payroll cutoff?', 'Each case traces planned cutoff, actual receipt, owner decision, provider handoff, and verified output.', '/research-heroes/philippines-payroll-deadline-slack-research.png', 'cutoff exception'],
  ['philippines-payroll-master-data-drift-sampling-study', 'Philippines payroll master-data drift sampling study', 'How can a bounded sample expose differences between approved employee changes and the active payroll record?', 'The protocol compares a frozen change register with a stratified sample of active payroll fields.', '/research-heroes/philippines-payroll-source-output-bridge-study.png', 'master-data drift'],
  ['philippines-payroll-provider-receipt-reliability-study', 'Philippines payroll provider receipt reliability study', 'What does a provider acknowledgement prove, and which later evidence is required to confirm processing?', 'Receipt, validation, processing, output, and exception timestamps are assessed as separate states.', '/research-heroes/payroll-provider-rejection-traceability-study.png', 'provider receipt'],
  ['philippines-payroll-access-removal-lag-study', 'Philippines payroll access-removal lag study', 'How long do payroll permissions remain active after a role, assignment, or coverage window ends?', 'The study measures elapsed time from authorized end event to verified removal across named payroll systems.', '/research-heroes/philippines-payroll-access-governance-research.png', 'access-removal lag'],
  ['philippines-payroll-exception-reopen-rate-study', 'Philippines payroll exception reopen-rate study', 'Which closed payroll exceptions return because required evidence or later-cycle follow-up was missing?', 'Closed cases are rechecked against defined completion evidence and the next observable payroll output.', '/research-heroes/philippines-payroll-exception-cohort-research.png', 'exception reopening'],
] as const;

const faq = [
  { question: 'Does this research determine the correct payroll treatment?', answer: 'No. It evaluates operating evidence and workflow states. Authorized payroll owners and qualified advisers decide treatment.' },
  { question: 'Can the findings be generalized to every employer?', answer: 'No. Systems, policies, providers, populations, and sample quality differ. Repeat the method with local definitions.' },
  { question: 'What can outsourced payroll support do?', answer: 'Support can prepare extracts, maintain evidence links, run documented comparisons, and surface exceptions for owner review.' },
];

export const september4ResearchPosts = researchSeeds.map(([slug, title, question, stat, image, subject], index) => ({
  slug, title, excerpt: `Research question: ${question}`, published: DATE, order: 600 + index, stat, image,
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
