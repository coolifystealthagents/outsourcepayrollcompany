const DATE = '2026-09-22';

const sources = [
  { label: "Internal Revenue Service — Publication 15 (2026), Employer's Tax Guide (checked September 22, 2026)", url: 'https://www.irs.gov/publications/p15' },
  { label: 'U.S. Department of Labor — Fact Sheet #21: Recordkeeping Requirements under the FLSA (checked September 22, 2026)', url: 'https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping' },
  { label: 'National Institute of Standards and Technology — SP 800-53 Rev. 5, Security and Privacy Controls (checked September 22, 2026)', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final' },
  { label: 'Philippine National Privacy Commission — Data Privacy Act of 2012 (checked September 22, 2026)', url: 'https://privacy.gov.ph/data-privacy-act/' },
] as const;

const studies = [
  {
    slug: 'payroll-event-sequence-integrity-study',
    title: 'Payroll event sequence integrity study',
    question: 'Can a payroll reviewer reconstruct the order of source receipt, preparation, approval, transmission, and confirmation without relying on file-modified times or memory?',
    subject: 'event-sequence integrity',
    unit: 'one payroll-bound change that passes through at least three recorded workflow events',
    states: 'sequence verified, simultaneous events explained, clock basis inconsistent, event overwritten, approval out of order, confirmation detached, or unresolved',
    service: '/services/payroll-preparation',
    cta: 'Review payroll preparation support',
    decision: 'whether a preparation lane produces an evidence chronology strong enough for an owner to distinguish a timely approval from a later reconstruction',
    evidence: 'source event identifier, business timestamp, recorded time zone or offset, system-recorded time, actor, prior state, resulting state, approval reference, transmission receipt, and output confirmation',
    image: '/research-heroes/philippines-payroll-deadline-review-slack-study.png',
  },
  {
    slug: 'payroll-source-definition-change-detection-study',
    title: 'Payroll source definition change detection study',
    question: 'When a payroll source changes a field name, allowed value, meaning, or effective-date rule, how often does the working process detect the change before output review?',
    subject: 'source-definition change detection',
    unit: 'one payroll source field used in a recurring preparation or reconciliation rule',
    states: 'definition unchanged, change detected before use, change detected after use, mapping ambiguous, undocumented local override, retired field still used, or unresolved',
    service: '/services/payroll-data-entry',
    cta: 'Review payroll data-entry support',
    decision: 'whether repetitive data-entry support can remain bounded when the meaning of an input changes even though the file still opens and validates technically',
    evidence: 'source-system name, field identifier, prior definition, current definition, allowed values, effective date, transformation rule, test case, owner decision, and first affected payroll period',
    image: '/research-heroes/philippines-payroll-source-output-bridge-study.png',
  },
  {
    slug: 'payroll-approval-replay-detection-study',
    title: 'Payroll approval replay detection study',
    question: 'Can a payroll workflow detect when evidence of a valid earlier approval is copied, forwarded, or attached to a materially different population, period, amount, or instruction?',
    subject: 'approval-replay detection',
    unit: 'one approval artifact presented as authority for one payroll action',
    states: 'approval bound to action, exact authorized retry, period mismatch, population mismatch, amount or instruction changed, artifact unverifiable, or unresolved',
    service: '/services/payroll-preparation',
    cta: 'Review payroll preparation support',
    decision: 'whether maker-checker evidence proves the action under review rather than merely showing that an authorized person approved something similar at another time',
    evidence: 'approval identifier, approver, authority scope, creation time, validity window, bound population or content hash, amount or instruction, requested action, retry reason, and resulting output',
    image: '/research-heroes/philippines-payroll-approval-authority-boundary-research.png',
  },
  {
    slug: 'payroll-exception-owner-transfer-study',
    title: 'Payroll exception owner transfer study',
    question: 'When responsibility for an unresolved payroll exception changes, does the transfer preserve the decision question, evidence, deadline, authority boundary, and next action?',
    subject: 'exception-owner transfer',
    unit: 'one unresolved payroll exception reassigned from one named owner to another',
    states: 'accepted complete, accepted with declared gap, returned incomplete, silently reassigned, deadline lost, authority unclear, or unresolved',
    service: '/services/payroll-reporting',
    cta: 'Review payroll reporting support',
    decision: 'whether an outsourced reporting lane can keep an exception visible through absence, escalation, or organizational change without converting coordination into unauthorized judgment',
    evidence: 'exception identifier, affected period and population, source links, decision question, prior owner, receiving owner, transfer time, acceptance evidence, deadline, authority limit, and next review point',
    image: '/research-heroes/philippines-payroll-transition-exit-evidence-research.png',
  },
  {
    slug: 'payroll-output-confirmation-gap-study',
    title: 'Payroll output confirmation gap study',
    question: 'How often is a prepared or approved payroll action treated as complete before an independent output shows the intended population, period, and value?',
    subject: 'output-confirmation gaps',
    unit: 'one owner-approved payroll action expected to appear in a defined downstream output',
    states: 'output matched, output partially matched, output delayed within window, wrong population or period, conflicting output, no observable confirmation, or unresolved',
    service: '/services/payroll-reporting',
    cta: 'Review payroll reporting support',
    decision: 'whether a reporting support lane can close the loop between an owner-approved instruction and an observable result without claiming that transmission or provider acceptance proves payment',
    evidence: 'approved action identifier, source period, expected population and field, output source and version, observation time, matching rule, variance, exception owner, and final disposition',
    image: '/research-heroes/philippines-payroll-correction-lineage-review.png',
  },
] as const;

export type ResearchStudyFrame = {
  slug:string; title:string; question:string; subject:string; unit:string; states:string;
  service:string; cta:string; decision:string; evidence:string; image:string;
};

export const sectionsFor = (study: ResearchStudyFrame) => [
  {
    heading: 'Decision context and research question',
    body: `This protocol asks: ${study.question} The buyer decision is ${study.decision}. The unit of analysis is ${study.unit}. Treat each unit as eligible only when the protocol can identify the employer or operating entity, payroll period, source system, expected result, and accountable owner. The research does not assess an individual worker's performance and does not assume that a missing record proves a missing action. It tests whether the evidence available to a reviewer supports a reproducible classification. Outsourced support may gather records and apply a written classification, but it must not determine wages, taxes, benefits, employment status, privacy law, banking treatment, or disputed entitlement. Those decisions remain with designated owners and qualified advisers. A record that lacks the minimum frame stays unresolved rather than being converted into a favorable state.`,
  },
  {
    heading: 'Prospective population and observation window',
    body: `Write and approve the study plan before viewing outcomes. Define the covered entities, pay groups, calendars, systems, support lanes, event types, and observation dates. Freeze the eligible population with a dated system query, export, or consecutively numbered register. For this study, collect ${study.evidence}. Include every eligible unit in at least three ordinary payroll cycles where volume permits. If volume is too large, use a reproducible random sample with a stored seed and sample every high-risk exception under a rule declared in advance. If volume is too small, publish a dated case series and avoid percentages that imply precision. Record exclusions one by one, including duplicates, tests, events outside the window, inaccessible controlled records, and units that never entered the declared workflow. Do not remove an awkward case merely because its evidence cannot be reconciled. Changes in provider, system, policy, personnel, holiday calendar, or time zone belong in the observation log because they can alter the apparent result.`,
  },
  {
    heading: 'Source collection, time basis, and privacy',
    body: `Create a data dictionary that names every source, field, allowed value, timestamp meaning, time zone, extraction method, retention purpose, and person allowed to resolve a conflict. Keep business-event time separate from system-write time, extraction time, review time, and publication time. Where the source supplies an offset, preserve it; where it does not, record the documented system zone and do not infer one from the reviewer's location. Prefer stable event and case identifiers to names. Store controlled links instead of copying tax identifiers, bank details, health information, court documents, or full payroll exports into the research file. Working evidence should be accessible only to named participants for the declared task, and temporary access should be reviewed after the study. The organization's privacy owner must decide lawful use, retention, disclosure, and disposition. This protocol does not make those legal determinations. Suspected exposure follows the established incident route, not an open analysis worksheet.`,
  },
  {
    heading: 'Classification and independent review',
    body: `Classify each unit as ${study.states}. Before review begins, turn every state into a short decision rule with required evidence, one positive example, one counterexample, and a stop condition. Reviewers must not fill a missing source link from memory, a familiar sender, a plausible total, or a later clean output. A matching downstream value may support a conclusion, but it does not retroactively prove the timing, authority, or population of an earlier action. Retain conflicting records and route them to the named owner rather than selecting the most convenient version. A second reviewer should independently repeat at least ten percent of eligible units or ten units, whichever is larger when the population permits. Report the initial agreement count, the disputed classifications, and the rule used for adjudication. A reviewer who performed the underlying work should not conduct the independent check where another qualified reviewer is available.`,
  },
  {
    heading: 'Measures and analysis plan',
    body: `Publish the frozen denominator before any rate. Report counts and percentages for all states, including excluded and unresolved units. The principal process measure is the share of eligible units classified without inference by the applicable review deadline. The principal evidence-quality measure is the share whose state survives independent review. Report missing fields by type because a missing owner, source, clock basis, or output has a different operational remedy. For elapsed time, publish the median, range, observation count, start event, stop event, and time-zone rule. Use cycle, system, input channel, or support lane as comparison groups only when declared in advance and large enough to avoid exposing a person. Do not publish a service promise or universal benchmark from one organization's results. Describe cycle differences without causal language. If a new control begins during the window, preserve the pre-change units, state the implementation date, and disclose other changes that may explain the difference.`,
  },
  {
    heading: 'Competing explanations and falsification checks',
    body: `A gap can arise from several mechanisms: late source input, clock drift, a changed field definition, provider latency, overwritten history, duplicate transmission, emergency delegation, calendar compression, inaccessible evidence, reviewer error, or an extraction defect. List the alternatives relevant to each state and record which were tested. Try to falsify a clean classification by tracing it back to the authoritative source and forward to the expected output. Try to falsify a gap classification by locating an approved alternate source or documented exception path. Do not treat absence from a research extract as proof that the event never occurred. Conversely, do not treat a later matching total as proof that every control was timely and authorized. A correlation between cleaner evidence and fewer exceptions does not show that the evidence practice caused the outcome. The study identifies observability and workflow boundaries; it cannot establish the legally correct payroll result or assign fault.`,
  },
  {
    heading: 'Interpretation for outsourced payroll support',
    body: `Translate results into a narrow operating lane. Support may freeze a population, maintain the evidence register, apply approved state definitions, surface conflicts, prepare a reviewer packet, and confirm whether an owner-approved action appears in a defined output. Support should stop when authority, source meaning, population, time basis, or expected output is unclear. It should not approve pay, select tax treatment, interpret an employment agreement or court instruction, change a bank destination, or close a disputed case. Before launch, name the accountable payroll owner, backup owner, response window, access boundary, acceptance rule, and escalation point. Pilot the lane for one representative cycle and inspect every exception before adding volume. A high evidence-completeness rate supports repeatable preparation; it does not remove owner review. A low or indeterminate rate identifies prerequisites to repair before outsourcing more work.`,
  },
  {
    heading: 'Limitations and reproducibility record',
    body: `This article is a research protocol, not a report of measured client or company performance. It invents no sample size, benchmark, provider result, customer outcome, or testimonial. Some systems do not retain prior versions or expose exact event time, and privacy or security restrictions may prevent an independent reviewer from seeing the underlying record. A short window can overrepresent a provider migration, off-cycle run, owner absence, acquisition, or seasonal deadline. The IRS and Department of Labor sources offer U.S. employer and recordkeeping context; NIST supplies general security and audit-control context; the Philippine National Privacy Commission supplies Philippine privacy-law context. None prescribes this protocol or proves a private workflow. Reproduction requires the protocol version, population query, data dictionary, extraction time, classification guide, reviewer assignment, disagreement log, calculation file, and declared publication date. Keep later methodology changes separate rather than silently editing the earlier study frame.`,
  },
  {
    heading: 'Evidence-led conclusion',
    body: `For ${study.subject}, the decision-grade output is a transparent distribution of evidence states, not a decorative score. A reader should be able to see what was eligible, what was verifiable by the declared deadline, what remained unresolved, which source conflicts were retained, how reviewers disagreed, and which decisions still belonged to an authorized owner. If the evidence trail is repeatable, an outsourced support team can maintain the register and prepare exceptions within a controlled lane. If it is not repeatable, the organization should repair its source definitions, event records, approval binding, ownership transfer, or output check before widening scope. That is an operational inference from the proposed method and cited public context, not a claim about Outsource Payroll Company customers, employees, or results.`,
  },
  {
    heading: 'References and source-check record',
    body: 'The numbered references below state each source title, publisher, URL, and checked date. IRS Publication 15 describes employer responsibilities and current 2026 federal employment-tax context. Department of Labor Fact Sheet #21 describes required payroll and hours records under the U.S. FLSA. NIST SP 800-53 provides general controls for audit records, timestamps, access, and information protection. The Philippine Data Privacy Act supplies the local privacy-law source. These materials are authoritative within their stated scope, but they do not endorse this company or replace employer-specific advice. Readers should recheck source currency and consult the relevant authority or qualified adviser for obligations tied to jurisdiction and facts.',
  },
] as const;

const faq = [
  { question: 'Does this protocol determine whether a payroll result is legally correct?', answer: 'No. It tests evidence and workflow states. Authorized company owners and qualified advisers decide pay, tax, employment, privacy, banking, benefit, and records treatment.' },
  { question: 'What work can a Philippines-based payroll support specialist perform?', answer: 'Within approved access, a specialist can assemble the population, maintain source links, apply written classifications, prepare exceptions, and check a defined output. Consequential decisions stay with the designated owner.' },
  { question: 'What should a buyer require before outsourcing this work?', answer: 'Require a source map, data definitions, named owners, access limits, stop rules, independent review, exception acceptance, output evidence, and a retention or disposition rule. Test them on one full cycle.' },
] as const;

export const september22ResearchPosts = studies.map((study, index) => ({
  slug: study.slug,
  title: study.title,
  excerpt: `Research protocol: ${study.question}`,
  published: DATE,
  order: 1100 + index,
  stat: `One ${study.unit} is the predeclared unit; no measured result is asserted.`,
  image: study.image,
  takeaways: [
    `Define ${study.subject} states before extracting the population.`,
    'Publish missing evidence, disagreements, and unresolved units alongside successful classifications.',
    'Use the finding to bound support work while named owners retain consequential decisions.',
  ],
  sections: sectionsFor(study),
  sources,
  faq,
  related: ['payroll-source-timestamp-integrity-study', 'payroll-authorization-matrix-drift-study', 'payroll-correction-handoff-loss-study'],
  serviceHandoff: {
    heading: 'Apply the protocol to a bounded support lane',
    body: `Use the study to test ${study.decision}. Start with one representative cycle, preserve the source trail, and route every authority or interpretation question to the named owner.`,
    href: study.service,
    cta: study.cta,
  },
}));
