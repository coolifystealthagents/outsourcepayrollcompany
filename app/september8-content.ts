const DATE = '2026-09-08';

const blogSources = [
  { name: 'NIST Zero Trust Architecture, SP 800-207', url: 'https://csrc.nist.gov/pubs/sp/800/207/final', note: 'Official guidance for explicit verification and least-privilege access.' },
  { name: 'Philippine National Privacy Commission: Data Privacy Act', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Official privacy-law text; obtain qualified advice for specific obligations.' },
  { name: 'CISA phishing guidance', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing', note: 'Official guidance for recognizing and reporting suspicious requests.' },
];

const blogSeeds = [
  ['payroll-new-hire-first-cycle-proof', 'Give every new hire a first-payroll proof record', 'Connect the approved hire packet to the first expected payroll result with a compact proof record.', 'new-hire first-cycle proof', 'scheduled cutoff, source arrival, review start, approval time, provider receipt, and output check', '/blog-heroes/aug21-payroll-cutoff-evidence-window.png'],
  ['payroll-termination-final-cycle-handoff', 'Build a careful final-cycle handoff for departing employees', 'Keep the confirmed departure separate from decisions about final pay, benefits, access, and legal treatment.', 'departure-cycle handoff', 'worker IDs, entity, source links, effective dates, prior values, and an owner decision', '/blog-heroes/aug21-repair-payroll-record-conflict-register.png'],
  ['payroll-garnishment-notice-intake-boundary', 'Set a safe intake boundary for payroll garnishment notices', 'Route sensitive notices intact and on time without asking support staff to interpret legal instructions.', 'garnishment notice intake', 'request origin, covered workers, amount source, effective cycle, approval, and output reference', '/blog-heroes/payroll-approval-evidence-packet.png'],
  ['payroll-off-cycle-request-decision-packet', 'Turn an off-cycle payroll request into a decision-ready packet', 'Show why an extra payroll run is requested, what supports it, and which owner must decide.', 'off-cycle request packet', 'authorized status record, effective date, cycle question, benefit dependency, and decision owner', '/blog-heroes/aug21-repair-payroll-absence-continuity-runbook.png'],
  ['payroll-pto-balance-source-mismatch', 'Investigate a PTO balance mismatch without guessing the answer', 'Compare policy-owned sources, approved leave, payroll output, and adjustment history before escalation.', 'PTO balance mismatch', 'request time, independent contact path, verification result, approver, change reference, and output review', '/blog-heroes/payroll-sensitive-request-verification.png'],
  ['payroll-shift-differential-input-control', 'Control shift-differential inputs before they enter payroll', 'Make eligible hours, approved schedules, rate authority, and exceptions separately reviewable.', 'shift-differential input control', 'original period, authorized basis, owner calculation, approval, target cycle, and reconciliation result', '/blog-heroes/payroll-cycle-closeout-review.png'],
  ['payroll-multi-entity-worker-allocation-check', 'Check multi-entity worker allocations before payroll cutoff', 'Use an explicit allocation source and totals check when a worker spans entities or cost centers.', 'multi-entity allocation check', 'document type, delivery status, verified contact route, source link, deadline, and owner', '/blog-heroes/employee-payroll-question-intake.png'],
  ['payroll-benefit-arrears-followup-register', 'Track benefit arrears without burying the next payroll action', 'Keep the source notice, owner decision, scheduled handling, communication, and verification together.', 'benefit arrears register', 'file ID, version, creator, approval, transmission time, provider status, and superseded marker', '/blog-heroes/payroll-provider-rejection-response.png'],
  ['payroll-pay-group-transfer-checklist', 'Use a pay-group transfer checklist when payroll calendars change', 'Make the last old-group cycle and first new-group cycle visible before assuming the transfer is complete.', 'pay-group transfer checklist', 'authorized instruction, category, effective date, affected cycle, conflict status, and decision owner', '/blog-heroes/payroll-employee-change-effective-date.png'],
  ['payroll-manual-check-reconciliation-trail', 'Keep a reconciliation trail for manual payroll checks', 'Link an approved manual check to payment evidence and later payroll-ledger treatment.', 'manual-check reconciliation', 'original payment reference, provider status, disposition, replacement status, communication owner, and reconciliation date', '/blog-heroes/aug21-payroll-exception-aging-review.png'],
  ['payroll-address-change-tax-routing', 'Route payroll address changes without making tax assumptions', 'Capture an authorized address update and surface tax-jurisdiction questions to the qualified owner.', 'address-change routing', 'original approval and version, revised source, changed fields, receipt time, affected cycle, and disposition', '/blog-heroes/payroll-timesheet-source-check.png'],
  ['payroll-provider-incident-status-brief', 'Write a payroll provider incident brief people can actually use', 'Separate confirmed incident facts, exposed deadlines, workarounds, decisions, and recovery checks.', 'provider incident brief', 'item ID, current evidence, unresolved question, risk note, next owner, due date, and closure proof', '/blog-heroes/payroll-cycle-closeout-ledger.png'],
] as const;

export const september8BlogPosts = blogSeeds.map(([slug, title, excerpt], index) => ({ slug, title, excerpt, minutes: 10, published: DATE, batchIndex: index }));

export const september8BlogDetails = Object.fromEntries(blogSeeds.map(([slug, title, excerpt, subject, evidence, image], index) => [slug, {
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
    keyword: title.toLowerCase(), marker: `opc-20260908-blog-${index + 1}`, published: DATE, image,
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
  ['philippines-payroll-new-hire-first-output-study', 'Philippines payroll new-hire first-output evidence study', 'Where does elapsed time accumulate between a review-ready payroll input and an authorized decision?', 'The protocol separates preparation, waiting, returned, approved, and verification intervals.', '/research-heroes/philippines-payroll-deadline-slack-research.png', 'new-hire first-output evidence'],
  ['philippines-payroll-off-cycle-request-study', 'Philippines payroll off-cycle request evidence study', 'Which evidence distinguishes a new timesheet version from an unrecorded overwrite after cutoff?', 'The sample pairs frozen source versions, approval events, changed fields, receipt times, and output states.', '/research-heroes/philippines-payroll-duplicate-time-entry-detection-study.png', 'off-cycle request evidence'],
  ['philippines-payroll-pay-group-transfer-study', 'Philippines payroll pay-group transfer continuity study', 'Can records show that payment-detail changes followed an independent verification path?', 'The method tests request, verification, approval, system change, and output-review evidence.', '/research-heroes/philippines-payroll-approval-authority-boundary-research.png', 'pay-group transfer continuity'],
  ['philippines-payroll-manual-payment-study', 'Philippines payroll manual-payment reconciliation study', 'Can reviewers reconstruct which payroll file was approved, transmitted, rejected, corrected, and accepted?', 'Each case is evaluated against a predeclared file-state model and immutable identifiers.', '/research-heroes/philippines-payroll-source-output-bridge-study.png', 'manual-payment reconciliation'],
  ['philippines-payroll-provider-incident-study', 'Philippines payroll provider incident brief study', 'Which unresolved payroll items remain traceable from cycle close through final disposition?', 'The design follows named items across later cycles and reports missing, superseded, resolved, and open states.', '/research-heroes/philippines-payroll-exception-cohort-research.png', 'provider incident brief'],
] as const;

const faq = [
  { question: 'Does this research determine the correct payroll treatment?', answer: 'No. It evaluates operating evidence and workflow states. Authorized payroll owners and qualified advisers decide treatment.' },
  { question: 'Can the findings be generalized to every employer?', answer: 'No. Systems, policies, providers, populations, and sample quality differ. Repeat the method with local definitions.' },
  { question: 'What can outsourced payroll support do?', answer: 'Support can prepare extracts, maintain evidence links, run documented comparisons, and surface exceptions for owner review.' },
];

export const september8ResearchPosts = researchSeeds.map(([slug, title, question, stat, image, subject], index) => ({
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
