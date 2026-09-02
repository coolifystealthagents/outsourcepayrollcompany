const DATE = '2026-09-02';

const blogTopics = [
  ['payroll-pre-cutoff-readiness-huddle', 'Payroll pre-cutoff readiness huddle for distributed teams', 'Run a 15-minute readiness huddle that names missing inputs, blocked decisions, owner availability, and the exact handoff time.', 'The huddle closes when every exception has a next action and decision owner.', 'readiness'],
  ['payroll-effective-date-conflict-queue', 'Payroll effective-date conflict queue for employee changes', 'Separate employee changes whose request, approval, and effective dates disagree so they cannot silently enter the pay run.', 'The payroll owner resolves which authorized date governs before entry.', 'effective dates'],
  ['payroll-variable-pay-evidence-pack', 'Payroll variable-pay evidence pack for bonuses and commissions', 'Bundle the approved plan, covered period, calculation source, currency, amount, and approver for each variable-pay input.', 'Unsupported totals return to the compensation owner instead of being reverse-engineered by payroll support.', 'variable pay'],
  ['payroll-retroactive-change-review', 'Payroll retroactive change review before calculation', 'Review late-effective changes in a dedicated lane that records affected periods, source authority, dependencies, and owner disposition.', 'Support staff identify affected records but do not decide entitlement or treatment.', 'retroactive changes'],
  ['payroll-payment-file-release-checkpoint', 'Payroll payment-file release checkpoint with dual control', 'Place a documented checkpoint between an approved payroll result and release of the payment file.', 'A preparer confirms the population and totals; a separately authorized owner confirms destination and release.', 'payment release'],
  ['payroll-returned-payment-case-log', 'Payroll returned-payment case log for controlled follow-up', 'Track each returned payment from provider notice through identity-safe contact, corrected instruction, approval, and resolution.', 'Never replace bank details from an unverified reply to the return notice.', 'returned payments'],
  ['payroll-leave-input-boundary-map', 'Payroll leave-input boundary map across HR and payroll', 'Map which leave facts come from HR, which payroll fields are prepared, and which policy or entitlement questions require an owner.', 'The map prevents support staff from turning incomplete leave records into pay decisions.', 'leave inputs'],
  ['payroll-garnishment-order-intake-boundary', 'Payroll garnishment-order intake boundary and escalation path', 'Use a restricted intake lane that records receipt, source, jurisdiction, deadline, and specialist owner without interpreting the order.', 'Legal, tax, and withholding decisions remain with qualified authorized owners.', 'garnishment intake'],
  ['payroll-multi-entity-population-check', 'Payroll multi-entity population check before provider handoff', 'Reconcile expected employees by legal entity and pay group before reviewing amounts or sending provider files.', 'Unexplained transfers, additions, and omissions stop the handoff until an owner resolves membership.', 'multi-entity population'],
  ['payroll-provider-response-acceptance-test', 'Payroll provider response acceptance test for open queries', 'Test whether a provider reply answers the original question, covers every affected record, and identifies any follow-up action.', 'A reply closes only when evidence and owner acceptance are recorded.', 'provider responses'],
  ['payroll-cycle-close-evidence-index', 'Payroll cycle-close evidence index for faster review', 'Create one index linking the final population, approvals, exception outcomes, provider receipt, reconciliation, and release evidence.', 'The index points to approved records rather than copying sensitive payroll data into a new file.', 'cycle-close evidence'],
  ['payroll-continuity-tabletop-exercise', 'Payroll continuity tabletop exercise for a missed owner handoff', 'Rehearse a realistic owner absence before cutoff and test backup authority, access, evidence, communications, and stop rules.', 'The exercise records gaps without using live employee changes or bypassing approval controls.', 'continuity testing'],
] as const;

const blogSources = [
  { name: 'NIST Zero Trust Architecture, SP 800-207', url: 'https://www.nist.gov/publications/zero-trust-architecture', note: 'Official guidance supporting explicit verification and least-privilege access.' },
  { name: 'CISA multifactor authentication guidance', url: 'https://www.cisa.gov/secure-our-world/turn-mfa', note: 'Official account-security guidance for protecting named accounts.' },
  { name: 'Philippine National Privacy Commission: Data Privacy Act', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Official text addressing accountability for personal information.' },
  { name: 'IRS Publication 15, Employer Tax Guide', url: 'https://www.irs.gov/publications/p15', note: 'Official U.S. payroll reference; requirements must be checked for the applicable jurisdiction.' },
];

export const september2BlogPosts = blogTopics.map(([slug, title, excerpt]) => ({ slug, title, excerpt, minutes: 11, published: DATE }));

export const september2BlogDetails = Object.fromEntries(blogTopics.map(([slug, title, method, boundary, lane], index) => [slug, {
  takeaways: [method, boundary, `Keep the ${lane} record tied to its source, period, and named owner.`],
  readinessRows: [
    { area: 'Scope', ready: `The ${lane} population and period are defined.`, ownerCheck: 'Confirm the entity, pay group, and cutoff.' },
    { area: 'Source', ready: 'Every item links to an approved source record.', ownerCheck: 'Resolve missing, conflicting, or superseded evidence.' },
    { area: 'Access', ready: 'Preparation uses a named account with task-specific access.', ownerCheck: 'Confirm the permission and review date.' },
    { area: 'Decision', ready: 'Exceptions show an owner and next action.', ownerCheck: 'Record the authorized disposition before release.' },
  ],
  sections: [
    { heading: `Define the ${lane} population`, paragraphs: [method, `For control S2-${index + 1}, write the included entities, pay groups, source systems, covered period, cutoff, and expected record count before preparation begins. A clear population keeps a clean sample from hiding an omitted group.`] },
    { heading: 'Preserve the source-to-decision trail', paragraphs: [`Create one row per ${lane} item with its source link, received time, effective period, preparer, status, and decision owner. Do not paste extra employee data into the tracker when a controlled link will do.`, `When two records disagree, retain both references and label the conflict. ${boundary}`], bullets: ['Use named accounts and controlled folders.', 'Record time zones on cutoff timestamps.', 'Keep missing evidence separate from rejected evidence.', 'Escalate rather than infer a sensitive decision.'] },
    { heading: `Review exceptions in the ${lane} lane`, paragraphs: [`Sort exceptions by worker impact, decision deadline, and control sensitivity. The queue should make the next decision visible without treating urgency as authority.`, `A Philippines-based payroll support specialist can assemble evidence, compare fields, and maintain status. The authorized payroll, HR, finance, legal, or provider owner decides items outside the documented preparation boundary.`] },
    { heading: 'Test completeness before release', paragraphs: [`Compare the prepared count with the expected population, then sample ordinary records and every high-impact exception back to original evidence. Confirm that exclusions have approved reasons and additions belong to the same period.`, `Control S2-${index + 1} is not complete merely because every row has a status. Confirm that each final status is supported by current evidence and an owner with the right authority.`] },
    { heading: 'Close the control without losing open work', paragraphs: [`Publish a dated handoff listing completed work, unresolved items, decisions, and the next deadline. Link the close note to approved evidence rather than creating another uncontrolled payroll dataset.`, `After the cycle, review late inputs, reopened cases, unnecessary access, and unclear instructions. Assign accepted improvements before the next cutoff and preserve the close record according to company policy.`] },
  ],
  roleBrief: [`Routine: ${title}`, `Control ID: S2-${index + 1}`, 'Output: dated evidence tracker and exception handoff', 'Access: named, task-limited account', 'Authority: final decisions stay with the authorized owner', `Stop rule: ${boundary}`],
  faqs: [
    { question: `Who should prepare the ${lane} record?`, answer: 'A trained payroll support specialist can collect sources, compare fields, and flag exceptions within a written scope. An authorized owner makes sensitive or final decisions.' },
    { question: 'What evidence proves this control ran?', answer: `Keep the defined population, source links, exception outcomes, named reviews, and dated handoff for control S2-${index + 1}.` },
    { question: 'Does this guide determine legal, tax, or employment treatment?', answer: 'No. Confirm applicable requirements and disputed treatment with the relevant authority or a qualified adviser.' },
  ],
  sources: blogSources,
  rich: {
    keyword: title.toLowerCase(), marker: `opc-20260902-blog-${index + 1}`, published: DATE,
    directAnswer: [method, `${boundary} Pilot the routine on one complete pay cycle before expanding its scope.`],
    stats: [{ value: `S2-${index + 1}`, label: 'distinct control ID', note: 'September 2, 2026 operating guide' }, { value: '1 cycle', label: 'minimum pilot', note: 'Review evidence before expansion' }],
    quote: { text: 'Verify the request, evidence, and authority at each sensitive handoff.', attribution: 'Outsource Payroll Company control principle', url: 'https://www.nist.gov/publications/zero-trust-architecture' },
    chart: { title: `${title}: evidence path`, description: `A four-stage view of the ${lane} control from source population through owner decision.`, methods: 'Illustrative operating model; it does not report measured performance.' },
    graphic: { title: `Control S2-${index + 1}`, description: `A traceable ${lane} workflow.`, steps: ['Define', 'Prepare', 'Review', 'Close'] },
    banners: [{ eyebrow: 'Next payroll cycle', heading: `Pilot the ${lane} control`, text: 'Start with one population, named owners, source evidence, and a written stop rule.', href: '/contact', label: 'Discuss payroll support' }],
    internalLinks: [{ href: '/services/payroll-data-entry', label: 'Payroll data-entry support' }, { href: '/services/payroll-reporting', label: 'Payroll reporting support' }, { href: '/research', label: 'Payroll operations research' }],
  },
}]));

const researchTopics = [
  ['philippines-payroll-exception-reopen-rate-study', 'Philippines payroll exception reopen-rate study', 'Reopened cases per 100 closed exceptions', 'Does a documented close test reduce payroll exceptions that return after an apparent resolution?', 'Classify why cases reopen and test whether source, decision, and downstream confirmation were present at closure.'],
  ['philippines-payroll-approval-latency-distribution', 'Philippines payroll approval latency distribution research', 'Median and 90th-percentile approval time', 'Where does usable payroll review time disappear between readiness and an authorized decision?', 'Measure the full distribution by input class and owner window instead of relying on one average.'],
  ['philippines-payroll-handoff-field-completeness-study', 'Philippines payroll handoff field-completeness study', 'Complete required fields per sampled handoff', 'Which missing handoff fields most often force payroll reviewers to reopen source systems or request clarification?', 'Sample comparable handoffs and record missing population, period, source, owner, and decision fields separately.'],
  ['philippines-payroll-access-removal-lag-analysis', 'Philippines payroll access-removal lag analysis', 'Hours from task end to verified removal', 'How quickly is payroll access removed after a role, task, or temporary coverage window ends?', 'Compare task-end evidence, disable time, session revocation, folder removal, and reviewer confirmation.'],
  ['philippines-payroll-cutoff-exception-concentration', 'Philippines payroll cutoff exception concentration research', 'Exception share by source and cutoff window', 'Are payroll cutoff exceptions broadly distributed or concentrated in a few sources, stages, or time windows?', 'Use concentration as a process-improvement signal while preserving the individual evidence and owner decision for each case.'],
] as const;

const researchSources = [
  { label: 'Philippine Statistics Authority, Labor Force Survey', url: 'https://psa.gov.ph/statistics/labor-force-survey' },
  { label: 'National Privacy Commission, Data Privacy Act', url: 'https://privacy.gov.ph/data-privacy-act/' },
  { label: 'Department of Labor and Employment, official resources', url: 'https://www.dole.gov.ph/' },
  { label: 'NIST Zero Trust Architecture, SP 800-207', url: 'https://www.nist.gov/publications/zero-trust-architecture' },
] as const;

export const september2ResearchPosts = researchTopics.map(([slug, title, stat, question, method], index) => ({
  slug, title, excerpt: question, published: DATE, stat,
  takeaways: [`Research question: ${question}`, `Method: ${method}`, `Control R2-${index + 1} requires a defined population, period, and decision boundary.`],
  sections: [
    { heading: 'Research question and unit of analysis', body: `${question} Control R2-${index + 1} uses one payroll case, handoff, approval, access event, or cutoff exception as its unit of analysis. Define the entity, pay group, period, systems, inclusion rule, and observation window before collecting results.` },
    { heading: 'Evidence collection method', body: `${method} Preserve source timestamps, state changes, named owners, exception reasons, and the final disposition. Distinguish missing evidence from a failed control and retain unresolved observations rather than forcing them into a completed category.` },
    { heading: 'Analysis and review protocol', body: `Report ${stat.toLowerCase()} by comparable cohort and pay period. Show the denominator, median where applicable, tail results, and unresolved records. Recheck a fixed sample against original sources, including ordinary records and every high-impact exception. A support specialist may prepare the analysis; an authorized owner validates interpretations and decisions.` },
    { heading: 'Interpretation, limits, and next test', body: `This operational study does not establish causation, legal compliance, or the correct treatment of any employee record. Results depend on local systems, definitions, calendars, and evidence quality. Pilot R2-${index + 1} for at least one complete cycle, document anomalies, and repeat with unchanged definitions before comparing trends.` },
  ],
  sources: researchSources,
  faq: [
    { question: 'Is this a compliance finding?', answer: 'No. It is an operational research design; applicable duties require review by the relevant authority or qualified adviser.' },
    { question: `What must be retained for R2-${index + 1}?`, answer: 'Keep the population definition, period, source evidence, calculation or classification rule, reviewer notes, unresolved cases, and dated owner decision.' },
  ],
  related: researchTopics.filter((_, relatedIndex) => relatedIndex !== index).slice(0, 3).map(([relatedSlug]) => relatedSlug),
}));
