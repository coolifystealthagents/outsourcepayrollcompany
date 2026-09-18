const DATE = '2026-09-18';

const sources = [
  { label: "Internal Revenue Service — Publication 15 (2026), Employer's Tax Guide (checked September 18, 2026)", url: 'https://www.irs.gov/publications/p15' },
  { label: 'U.S. Department of Labor — Fact Sheet #21: Recordkeeping Requirements under the FLSA (checked September 18, 2026)', url: 'https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping' },
  { label: 'National Institute of Standards and Technology — SP 800-53 Rev. 5, Security and Privacy Controls (checked September 18, 2026)', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final' },
  { label: 'Philippine National Privacy Commission — Data Privacy Act of 2012 (checked September 18, 2026)', url: 'https://privacy.gov.ph/data-privacy-act/' },
];

const studies = [
  {
    slug: 'payroll-source-timestamp-integrity-study',
    title: 'Payroll source timestamp integrity study',
    question: 'How often can a payroll input be tied to a stable source version and a comparable business timestamp before cutoff?',
    subject: 'source-timestamp integrity',
    unit: 'one payroll input field for one worker in one pay period',
    states: 'verified before cutoff, verified after cutoff, timestamp ambiguous, source version missing, superseded, excluded, or unresolved',
    service: '/services/payroll-data-entry',
    cta: 'Review payroll data-entry support',
    operational: 'This study serves teams deciding whether repeatable payroll data-entry preparation can move to a support lane without losing the evidence needed for owner review.',
    image: '/research-heroes/philippines-payroll-source-output-bridge-study.png',
  },
  {
    slug: 'payroll-authorization-matrix-drift-study',
    title: 'Payroll authorization matrix drift study',
    question: 'Where do actual payroll approvals diverge from the named authority, scope, and validity window in the current approval matrix?',
    subject: 'authorization-matrix drift',
    unit: 'one consequential payroll approval applied to one action',
    states: 'matched authority, stale authority, scope mismatch, expired delegation, substituted with evidence, emergency exception, or unresolved',
    service: '/services/payroll-preparation',
    cta: 'Review payroll preparation support',
    operational: 'This study helps a buyer test whether preparation and approval are meaningfully separated before a payroll-preparation lane is outsourced.',
    image: '/research-heroes/philippines-payroll-approval-authority-boundary-research.png',
  },
  {
    slug: 'payroll-support-extract-minimization-study',
    title: 'Payroll support extract minimization study',
    question: 'How much nonessential payroll data appears in working extracts used for outsourced preparation, reconciliation, and follow-up?',
    subject: 'support-extract minimization',
    unit: 'one data field in one working payroll extract for one declared task',
    states: 'necessary, conditionally necessary, masked, tokenized, unnecessary, prohibited by local rule, or unresolved',
    service: '/services/timesheet-reconciliation',
    cta: 'Review timesheet reconciliation support',
    operational: 'This study gives buyers a practical way to reduce exposed fields before granting a support team access to reconciliation work.',
    image: '/research-heroes/payroll-export-minimization-and-review-research.png',
  },
  {
    slug: 'payroll-correction-handoff-loss-study',
    title: 'Payroll correction handoff loss study',
    question: 'At which handoff do approved payroll corrections most often lose a source link, owner, effective period, or output confirmation?',
    subject: 'correction-handoff loss',
    unit: 'one approved payroll correction crossing one declared handoff',
    states: 'complete, source link missing, owner missing, effective period ambiguous, receipt unconfirmed, output unmatched, or unresolved',
    service: '/services/payroll-reporting',
    cta: 'Review payroll reporting support',
    operational: 'This study supports a decision about using an outsourced reporting lane to maintain correction evidence while the payroll owner retains approval.',
    image: '/research-heroes/philippines-payroll-correction-lineage-review.png',
  },
  {
    slug: 'payroll-employee-case-closure-evidence-study',
    title: 'Payroll employee case closure evidence study',
    question: 'When a payroll question is marked closed, what evidence shows that the employee received an authorized answer and that any promised action reached output?',
    subject: 'employee-case closure evidence',
    unit: 'one payroll employee-support case marked closed',
    states: 'answer delivered, action verified, answer and action verified, pending dependency, closed without evidence, reopened, or unresolved',
    service: '/services/payroll-query-support',
    cta: 'Review payroll query support',
    operational: 'This study helps buyers distinguish safe inbox coordination from payroll judgment when evaluating employee-support help.',
    image: '/research-heroes/philippines-payroll-query-cohort-research.png',
  },
] as const;

const commonSections = (study: typeof studies[number]) => [
  {
    heading: 'Decision context and research question',
    body: `The research question is: ${study.question} The decision is not whether an outsourced assistant should exercise payroll authority. The decision is whether a bounded support lane can prepare reliable evidence, expose exceptions early, and leave consequential choices with a named company owner. ${study.operational} The unit of analysis is ${study.unit}. Each unit must identify the applicable entity, pay period, source system, observed time, reviewer, and expected output. A record that cannot be connected to that minimum frame remains unresolved; it is not silently treated as a pass. The protocol studies workflow evidence, not worker quality. It does not calculate wages, determine tax or legal treatment, override provider rules, or infer facts that are absent from source records. That boundary matters because clean administration can support a decision, but it cannot supply the authority for the decision itself.`,
  },
  {
    heading: 'Prospective design and eligible population',
    body: `Write the protocol before inspecting outcomes. Define the observation window, payroll calendars, covered entities, systems, event types, and cutoff rules. Freeze the eligible population using a dated query or export and retain its field definitions. Include every eligible ${study.unit} during the window, or document a reproducible sample with a fixed seed and inclusion rule. Do not select only successful or unusually difficult cases. Record exclusions individually with a reason such as test record, duplicate case, inaccessible source, or event outside the window. Use at least three ordinary payroll cycles when event volume permits; for rare events, publish the full dated case series and avoid rate claims. Stratify only on attributes declared in advance, such as entity, input channel, cycle phase, or support lane. Do not stratify by protected characteristics. Preserve changes in systems, providers, policies, staffing, holidays, and payroll calendars because they can change both the case mix and the observed result.`,
  },
  {
    heading: 'Evidence collection and privacy controls',
    body: `Build a field-level data dictionary before extraction. For each field, name the source, purpose, allowed values, timestamp meaning, time zone, retention rule, and person permitted to resolve a conflict. Prefer stable case identifiers over names and protected references over copied bank, tax, identity, health, or legal-document details. Collect the minimum data needed to reproduce the classification. Keep the frozen population, source evidence, reviewer worksheet, and published aggregate separate. Restrict working files to named accounts, record access, and remove temporary access after review. Never move credentials or full sensitive values into a research table. If evidence must remain in a controlled system, store a durable reference and record what the reviewer was allowed to observe. The privacy review should be completed by the organization’s designated owner; this protocol does not declare a particular processing activity lawful. Any suspected exposure follows the company’s incident path rather than being investigated in an open research file.`,
  },
  {
    heading: 'Classification rules and review procedure',
    body: `Classify each unit as ${study.states}. Turn each state into a short decision rule with one positive example, one negative example, and a stop condition. Reviewers must not fill an evidence gap from memory, a familiar email address, a matching total, or a later clean output. A later output may be supporting evidence, but it does not prove every earlier control occurred. Use the business timestamp defined by the source, retain its time zone, and distinguish event time from extraction time and review time. When two authoritative records disagree, keep both and route the conflict to the named owner. A second reviewer should independently repeat at least ten percent of units or ten units, whichever is larger when the population allows. Publish the agreement count and every adjudicated disagreement. If a reviewer participated in the underlying case, flag that fact and assign the independent check to someone else where practical.`,
  },
  {
    heading: 'Measures and analysis plan',
    body: `Report the frozen denominator first. Then report counts and percentages for every state, including unresolved and excluded records. For elapsed-time measures, publish the median, range, observation count, and the exact start and stop events; do not combine incomparable clocks. Show results by predeclared operational groups only when each group is large enough to avoid exposing a person or single unusual case. A useful process measure is the share of eligible units with all mandatory evidence available by the applicable cutoff. A useful quality measure is the share whose classification survives independent review. Neither measure is a service promise or a universal benchmark. Compare cycles descriptively and resist causal language. If an intervention occurs, preserve the before-and-after case definitions and disclose other simultaneous changes. Small samples should be shown as counts, not dressed up as precise rates. Missingness is a result: publish which fields were absent and whether absence prevented classification.`,
  },
  {
    heading: 'Competing explanations and uncertainty',
    body: `An observed gap may reflect more than the support lane. Plausible explanations include late manager input, provider processing time, source-system latency, time-zone conversion, a policy change, emergency authority, calendar compression, changed case mix, unavailable owners, restricted evidence, overwritten history, or an extraction defect. Record which alternatives were tested and which could not be tested. Association between a workflow feature and a clean close does not prove that feature caused the result. Conversely, one exception does not prove a control is ineffective. The study can identify where evidence becomes unavailable or inconsistent; it cannot determine the legally correct payment, deduction, tax, benefit, employment, privacy, banking, or records outcome. Those determinations belong to qualified advisers and designated company owners. Conclusions should use bounded language such as observed, associated, consistent with, or not verifiable. State uncertainty beside the headline result rather than hiding it in a footnote.`,
  },
  {
    heading: 'Interpretation for an outsourced payroll support decision',
    body: `Use the result to design a narrow work lane. Support may assemble the eligible population, maintain evidence links, apply written rules, prepare exception lists, and confirm whether an owner-approved action appears in an observable output. Support should not approve pay, choose tax treatment, interpret a court order, change a bank destination, decide a disputed employee outcome, or suppress an unresolved record. Before launch, name the payroll owner, backup owner, response window, access boundary, and stop rule. Test one representative cycle and review every exception before expanding scope. A strong result does not eliminate owner review; it shows where preparation is sufficiently observable to make that review more consistent. A weak or indeterminate result is also useful because it identifies prerequisites such as better source timestamps, current authority records, safer extracts, receipt evidence, or clearer closure definitions. Re-run the same protocol after a declared process change instead of changing the measure to make performance look better.`,
  },
  {
    heading: 'Limitations, reproducibility, and publication rule',
    body: `This is a protocol, not a report of measured company performance. It supplies no invented sample, result, benchmark, testimonial, or provider comparison. Local systems may not retain historical versions, and restricted records may prevent independent verification. Seasonal work, acquisitions, provider migrations, unusual off-cycle activity, and owner absence can make one window unrepresentative. The cited public sources provide payroll-recordkeeping, security-control, and privacy context; they do not prove a private workflow, prescribe this study design, or replace local policy and qualified advice. To reproduce the work, retain the protocol version, population query, extraction time, data dictionary, classification guide, reviewer assignments, disagreement log, aggregate calculation, and publication date. Publish changes to definitions before the next observation window. Do not backfill a missing control merely to close a case. The defensible conclusion is limited to the declared population, period, records, and rules available at review time.`,
  },
  {
    heading: 'Evidence-led conclusion',
    body: `For ${study.subject}, the useful finding is a transparent distribution of evidence states, not a single decorative score. A buyer should be able to see what was eligible, what was observable by cutoff, what remained unresolved, which disagreements were adjudicated, and which dependencies still belong to a payroll owner or provider. If the evidence trail is repeatable, a support team can maintain it as part of a controlled payroll operations service. If it is not repeatable, the organization should repair the source, authority, access, or handoff design before widening outsourced scope. This conclusion is an operational inference from the protocol and the cited context, not a factual claim about Outsource Payroll Company clients or results.`,
  },
  {
    heading: 'References and source-check record',
    body: 'The numbered links below identify each source title, publisher, URL, and the date it was checked. The IRS and Department of Labor sources provide U.S. payroll and recordkeeping context. NIST supplies general security and privacy control language. The Philippine National Privacy Commission supplies the Philippine privacy-law source. Readers should confirm that each source remains current and should use qualified advisers for obligations that depend on jurisdiction, contract, workforce, or facts. No cited source endorses this protocol or the company.'
  },
];

const faq = [
  { question: 'Does the study decide whether a payroll action is correct?', answer: 'No. It tests the availability and consistency of workflow evidence. Authorized owners and qualified advisers decide payroll, tax, legal, privacy, benefit, employment, banking, and records treatment.' },
  { question: 'Can a Philippines-based payroll support specialist run the review?', answer: 'A specialist can prepare the population, maintain links, apply written classifications, and surface disagreements within approved access. A company-designated owner sets the rules and approves consequential action.' },
  { question: 'What should a buyer ask to see before outsourcing this lane?', answer: 'Ask for the field definitions, owner map, access boundary, stop rules, sample review method, exception path, output check, and retention rule. Test them on one representative payroll cycle.' },
];

export const september18ResearchPosts = studies.map((study, index) => ({
  slug: study.slug,
  title: study.title,
  excerpt: `Research protocol: ${study.question}`,
  published: DATE,
  order: 1000 + index,
  stat: `One ${study.unit} is the predeclared unit of analysis; no measured result is asserted.`,
  image: study.image,
  takeaways: [
    `Define ${study.subject} states before extracting cases.`,
    'Report the complete denominator, missing evidence, disagreements, and unresolved records.',
    'Use findings to bound support work; keep consequential payroll decisions with named owners.',
  ],
  sections: commonSections(study),
  sources,
  faq,
  related: ['philippines-payroll-reconciliation-evidence', 'philippines-payroll-source-validation', 'philippines-payroll-control-testing'],
  serviceHandoff: {
    heading: 'Apply this protocol to a bounded support lane',
    body: study.operational,
    href: study.service,
    cta: study.cta,
  },
}));
