export const publisherBlogPosts = [
  {
    slug: 'philippines-payroll-data-access-controls',
    title: 'Philippines payroll data access controls: a safe handoff guide',
    excerpt: 'Set clear access, review, and stop rules before a Philippines-based payroll support specialist handles employee records.',
    minutes: 14,
  },
] as const;

export const publisherBlogDetails = {
  'philippines-payroll-data-access-controls': {
    takeaways: [
      'Give each Philippines-based payroll support specialist a named account instead of a shared login.',
      'Keep bank-detail changes, disputed pay, deductions, and final payroll approval with an authorized owner.',
      'Let the specialist prepare records and flag exceptions, then require a second person to approve sensitive actions.',
      'Remove access as soon as a task or assignment ends, and keep a dated record of the removal.',
    ],
    readinessRows: [
      { area: 'Time records', ready: 'The specialist can collect approved files and list missing entries.', ownerCheck: 'A manager decides disputed or late hours.' },
      { area: 'Employee changes', ready: 'Every request has a source record, date, and named requester.', ownerCheck: 'An authorized owner approves the change before entry.' },
      { area: 'Bank details', ready: 'The specialist may route a request without opening or changing the destination.', ownerCheck: 'Two authorized people verify and approve the change.' },
      { area: 'Payroll files', ready: 'Folders have named access, clear labels, and a retention rule.', ownerCheck: 'The payroll owner reviews access and old files each pay cycle.' },
      { area: 'Final submission', ready: 'The prep checklist is complete and every exception has an owner.', ownerCheck: 'The payroll owner or provider gives final approval.' },
    ],
    sections: [
      {
        heading: 'Treat payroll access as a short list, not a job title',
        paragraphs: [
          'A job title does not tell you which records a person needs. Write a short task list for the Philippines-based specialist, then match each task to the smallest folder, screen, or report that supports it. If the first task is chasing missing time records, the person does not need permission to approve final payroll or change an employee bank destination.',
          'This split makes training easier because the worker can see where the job stops. It also gives the payroll owner a simple review question: did the person use only the access listed for this pay cycle? If the answer is unclear, narrow the task before you add another permission.',
        ],
        bullets: [
          'Collect: request missing time records and manager approvals.',
          'Prepare: organize employee-change requests with source links.',
          'Flag: list duplicates, missing fields, and unusual changes.',
          'Stop: send pay disputes, deductions, bank changes, and final approval to the owner.',
        ],
      },
      {
        heading: 'Use one named account for each person',
        paragraphs: [
          'Shared logins make a payroll trail hard to read. Give the specialist a named account, turn on multifactor authentication, and record the day access starts. The account should show who opened a file or prepared a change, while the owner account shows who approved it.',
          'CISA says MFA adds a second identity check when someone logs in. It also notes that a stolen password alone will not meet that second step. MFA does not fix a broad permission set, so use it together with limited access and a named reviewer.',
        ],
      },
      {
        heading: 'Put a second person between preparation and approval',
        paragraphs: [
          'The Philippines-based specialist can prepare an employee change without being the person who approves it. For a sensitive request, the worker should link the original request, note what changed, and send the item to an authorized owner. The owner checks the source before the change reaches the final payroll file.',
          'Bank-detail requests need an even firmer stop rule because an email account can be copied or taken over. The FBI recorded $3,046,598,558 in reported Business Email Compromise losses in its 2025 IC3 report. That number covers reported U.S. complaints across many settings, not Philippines payroll work, but it explains why an emailed bank request should never move straight to approval.',
        ],
        bullets: [
          'Do not approve a bank change from the request email alone.',
          'Verify the request through a known channel already on file.',
          'Record who prepared the item and who approved it.',
          'Pause the change when the source, timing, or requester does not match.',
        ],
      },
      {
        heading: 'Keep the company responsible for outsourced records',
        paragraphs: [
          'The Philippine Data Privacy Act does not make accountability disappear when another party processes personal information. Section 21 says the personal information controller remains responsible for information under its control or custody, including information transferred to a third party for processing. The same section calls for contractual or other reasonable means to provide a comparable level of protection.',
          'Turn that legal duty into a working file. List the task, system, access owner, reviewer, retention rule, and removal date for each payroll lane handled in the Philippines. Have your privacy, legal, or payroll adviser check the plan against the countries and employees your company covers.',
        ],
      },
      {
        heading: 'Review outside access like any other vendor link',
        paragraphs: [
          'The 2025 Verizon Data Breach Investigations Report analyzed 22,052 security incidents and 12,195 confirmed breaches from 139 countries. It found that breaches involving a third party doubled from 15% to 30%. These are global breach findings rather than a measure of payroll specialists in the Philippines, but they support regular checks on any outside account that can reach company data.',
          'Verizon also reported a 94-day median time to fix leaked secrets found in a GitHub repository. A payroll team should not wait for a yearly review to notice an old login or copied credential. Check active accounts after every pay cycle during the first month, then set a review schedule that matches the risk and the length of the assignment.',
        ],
      },
      {
        heading: 'Close the lane without leaving an account behind',
        paragraphs: [
          'Offboarding starts before the assignment ends. Keep a list of the payroll system, timekeeping tool, file store, help desk, email group, and password manager entry connected to the role. Name the person who will remove each item and the person who will confirm the removal.',
          'On the final day, disable the named account, move unfinished work to the payroll owner, and record the time of each change. Ask the owner to open the access report and confirm that no active session or shared folder remains. Keep that record with the role file instead of leaving the proof in a chat thread.',
        ],
      },
    ],
    roleBrief: [
      'Role: Philippines-based payroll preparation and access-controlled follow-up support',
      'First lane: collect time records and prepare a missing-item list',
      'Named systems: write down every approved tool and folder',
      'Access owner: name the person who grants and removes permissions',
      'Payroll owner: name the person who reviews exceptions and gives final approval',
      'Second check: require a separate approval for bank details and other sensitive changes',
      'Daily output: a dated tracker with source links, missing items, and owner decisions',
      'Stop rule: pause when the request source, approval, or system permission is unclear',
    ],
    faqs: [
      { question: 'What payroll data should a Philippines-based specialist see first?', answer: 'Start with the smallest record set needed for one task, such as approved time files or a missing-item tracker. Do not open the whole employee file when the task only needs a status and a source link.' },
      { question: 'Can the specialist change employee bank details?', answer: 'The safer role is to route and prepare the request, not approve or complete it alone. Use a known verification channel and require an authorized second person before any sensitive change moves forward.' },
      { question: 'Does MFA replace limited system access?', answer: 'No. MFA adds another login check, while limited access controls what the account can reach after login. Use both, then review the account record during the first pay cycles.' },
      { question: 'Who is responsible for personal information sent to an outside team?', answer: 'The Philippine Data Privacy Act says a personal information controller remains accountable for information under its control or custody, including information sent to a third party for processing. Ask qualified counsel how that duty applies to your company and workers.' },
      { question: 'What should happen when the assignment ends?', answer: 'Disable the named account, transfer open work to the owner, remove group and folder access, and record who confirmed each step. Do this on the final day rather than waiting for the next general access review.' },
    ],
    sources: [
      { name: 'Verizon: 2025 Data Breach Investigations Report', url: 'https://www.verizon.com/business/resources/reports/2025-dbir-data-breach-investigations-report.pdf', note: 'Published in 2025. Supports the incident and breach counts, third-party comparison, 139-country context, and 94-day leaked-secret finding.' },
      { name: 'FBI Internet Crime Complaint Center: 2025 Annual Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf', note: 'Published in 2026 for reporting year 2025. Supports the reported Business Email Compromise loss figure and its complaint-based limits.' },
      { name: 'NIST: Zero Trust Architecture, SP 800-207', url: 'https://www.nist.gov/publications/zero-trust-architecture', note: 'Published in August 2020. Supports the quoted zero-trust rule and the need to avoid trust based only on location or ownership.' },
      { name: 'Philippine National Privacy Commission: Data Privacy Act of 2012', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Official text of Republic Act No. 10173. Section 21 covers accountability when information is transferred to a third party for processing.' },
      { name: 'CISA: Turn on multifactor authentication', url: 'https://www.cisa.gov/secure-our-world/turn-mfa', note: 'Official account-security guidance. Supports the explanation of MFA as a second identity check after a password.' },
    ],
    rich: {
      keyword: 'Philippines payroll data access controls',
      marker: 'opc-ph-payroll-access-20260725',
      published: '2026-07-25',
      directAnswer: [
        'Philippines payroll data access controls should let a support specialist prepare records without giving that person final control over pay. Use a named account, limited folders, multifactor authentication, and a separate owner for sensitive changes and final approval.',
        'Start with one task and one pay cycle. Record what the specialist can see, what they can prepare, which requests must stop, and who removes access when the work ends.',
      ],
      stats: [
        { value: '22,052', label: 'security incidents reviewed', note: 'Verizon 2025 DBIR global dataset' },
        { value: '12,195', label: 'confirmed data breaches', note: 'Verizon 2025 DBIR global dataset' },
        { value: '30%', label: 'breaches with a third party involved', note: 'Up from 15% in the prior comparison' },
        { value: '94 days', label: 'median time to fix leaked secrets', note: 'Finding reported in the 2025 DBIR' },
      ],
      quote: {
        text: 'Zero trust assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location (i.e., local area networks versus the internet) or based on asset ownership (enterprise or personally owned).',
        attribution: 'Scott Rose, Oliver Borchert, Stu Mitchell, and Sean Connelly, NIST SP 800-207, August 2020',
        url: 'https://www.nist.gov/publications/zero-trust-architecture',
      },
      chart: {
        title: 'Breaches involving a third party',
        description: 'A bar chart comparing 15 percent in the prior Verizon comparison with 30 percent in the 2025 report.',
        methods: 'Methods note: The bars copy the two percentages stated in the 2025 Verizon DBIR summary. Verizon made the comparison; we did not recalculate it from raw incident files. The report covers global breaches and does not measure Philippines payroll teams.',
      },
      graphic: {
        title: 'A four-stop payroll access path',
        description: 'A process graphic showing limited access, preparation, owner review, and final action.',
        steps: ['Limited access', 'Prepare record', 'Owner review', 'Final action'],
      },
      banners: [
        { eyebrow: 'First pay cycle', heading: 'Map one safe payroll lane', text: 'Choose one repeat task, name its owner, and write the stop rules before access begins.', href: '/services/operations-support', label: 'See payroll operations support' },
        { eyebrow: 'Owner review', heading: 'Give exceptions a clear destination', text: 'Build a short report that shows missing records and sensitive changes without handing over approval.', href: '/services/reporting-and-qa', label: 'See reporting and QA support' },
        { eyebrow: 'Next step', heading: 'Plan the first login and final sign-out', text: 'Use the onboarding guide to set examples, access limits, and removal checks for the assignment.', href: '/blog', label: 'Read the onboarding checklist' },
      ],
      internalLinks: [
        { href: '/services/admin-support', label: 'Payroll admin support in the Philippines' },
        { href: '/services/customer-support', label: 'Payroll employee support in the Philippines' },
        { href: '/blog/outsource-payroll-company-planning', label: 'How to plan outsourced payroll support' },
        { href: '/contact', label: 'Discuss a Philippines payroll support role' },
      ],
    },
  },
};

// Daily Blog batch selected target: 20. These are distinct, reusable operating guides
// generated from the site's payroll-support services and kept separate from Research.
const batchTopics = [
  ['payroll-cutoff-checklist', 'Payroll cutoff checklist for a smoother handoff', 'A practical checklist for collecting approvals, checking exceptions, and giving a payroll owner a clean handoff before cutoff.'],
  ['timesheet-follow-up-workflow', 'Timesheet follow-up workflow for payroll teams', 'Set up a repeatable workflow for missing hours, manager reminders, exception notes, and owner review.'],
  ['payroll-employee-change-log', 'How to build a payroll employee-change log', 'Use a dated change log to prepare new-hire, address, leave, and termination requests without losing approval history.'],
  ['payroll-inbox-triage', 'Payroll inbox triage: a safe daily routine', 'Sort payroll messages by urgency, source, and owner so routine follow-up moves quickly and sensitive questions stop safely.'],
  ['payroll-provider-handoff-template', 'Payroll provider handoff template for each pay cycle', 'Create a concise handoff packet with source records, open exceptions, deadlines, and a named approver.'],
  ['payroll-missing-data-report', 'Payroll missing-data report: what to track', 'Track missing inputs by employee, owner, due date, and source so the payroll team can resolve gaps before cutoff.'],
  ['new-hire-payroll-document-checklist', 'New-hire payroll document checklist', 'Organize onboarding records and approval steps before a new employee reaches the payroll system.'],
  ['termination-payroll-handoff', 'Termination payroll handoff: a controlled process', 'Coordinate termination records, final-pay questions, access removal, and owner approval in one controlled workflow.'],
  ['payroll-qa-exception-log', 'Payroll QA exception log: a simple operating guide', 'Build an exception log that makes duplicate entries, late approvals, and unusual changes easy to review.'],
  ['payroll-calendar-management', 'Payroll calendar management for growing teams', 'Keep cutoff dates, reminders, approval windows, and backup owners visible across every payroll cycle.'],
  ['payroll-document-naming-standard', 'Payroll document naming standards that reduce rework', 'Use consistent names and folders so payroll support teams can locate the right record without creating duplicate files.'],
  ['payroll-access-review-checklist', 'Payroll access review checklist for outside support', 'Review named accounts, folders, permissions, and removal dates before and after an outsourced payroll assignment.'],
  ['payroll-backup-owner-plan', 'Payroll backup owner plan for absences and deadlines', 'Define backup ownership, escalation timing, and safe stop rules before a payroll owner is unavailable.'],
  ['payroll-approval-tracker', 'Payroll approval tracker: fields and review rules', 'Design an approval tracker that shows what is ready, what is blocked, and who can authorize the next step.'],
  ['payroll-payslip-request-routing', 'Payroll payslip request routing guide', 'Handle common payslip and document requests with approved replies, clear routing, and a record of resolution.'],
  ['payroll-benefits-deduction-handoff', 'Benefits and deduction handoff controls', 'Prepare benefits and deduction inputs for review while keeping final decisions with the authorized payroll owner.'],
  ['payroll-reconciliation-workflow', 'Payroll reconciliation workflow before approval', 'Compare source records, employee changes, and provider outputs with a repeatable reconciliation checklist.'],
  ['payroll-task-sop-template', 'Payroll task SOP template for support teams', 'Turn a recurring payroll task into a clear SOP with inputs, steps, quality checks, stop rules, and escalation paths.'],
  ['payroll-error-correction-log', 'Payroll error correction log: document the fix', 'Record payroll corrections with the source issue, owner decision, action taken, and follow-up check.'],
  ['payroll-outsourcing-first-cycle', 'Your first outsourced payroll support cycle', 'Start with one narrow lane, supervise the first cycle, and expand only after the handoff is easy to inspect.'],
] as const;

// Second daily Blog batch. Each topic is a separate search-intent lane and is
// intentionally distinct from the first batch and from Research content.
const secondBatchTopics = [
  ['payroll-cutoff-escalation-rules', 'Payroll cutoff escalation rules for late inputs', 'Set response windows and escalation rules for missing approvals, late timesheets, and unresolved payroll exceptions.'],
  ['payroll-manager-reminder-sequence', 'Payroll manager reminder sequence that gets answers', 'Build a short reminder sequence that records outreach, protects sensitive details, and routes unanswered items.'],
  ['payroll-employee-master-file-review', 'Employee master file review before payroll', 'Review employee records for missing fields, conflicting changes, and owner approvals before a pay run begins.'],
  ['payroll-offcycle-request-intake', 'Off-cycle payroll request intake guide', 'Triage off-cycle requests with a source record, reason, deadline, approval path, and clear stop rules.'],
  ['payroll-duplicate-input-check', 'Payroll duplicate input check for support teams', 'Spot repeated hours, duplicate bonuses, and copied employee changes before they enter a provider handoff.'],
  ['payroll-pay-period-status-report', 'Pay-period status report template', 'Create a compact status report showing complete items, open exceptions, owners, and the next decision.'],
  ['payroll-shared-mailbox-ownership', 'Payroll shared mailbox ownership guide', 'Assign queue ownership, safe reply rules, and escalation paths for a shared payroll inbox.'],
  ['payroll-approval-evidence-packet', 'Payroll approval evidence packet checklist', 'Assemble source records, change notes, reviewer names, and approval dates into one inspectable packet.'],
  ['payroll-file-transfer-checklist', 'Payroll file transfer checklist for outside support', 'Prepare a controlled file transfer with approved locations, access limits, naming rules, and receipt confirmation.'],
  ['payroll-late-timesheet-escalation', 'Late timesheet escalation workflow', 'Handle late timesheets with timed reminders, manager ownership, exception notes, and a final payroll-owner decision.'],
  ['payroll-new-hire-start-date-check', 'New hire start-date check for payroll', 'Confirm start dates, required documents, manager approval, and payroll timing before an employee is added.'],
  ['payroll-leaver-checklist-support', 'Leaver checklist for payroll support teams', 'Coordinate final records, outstanding changes, access removal, and owner review when an employee leaves.'],
  ['payroll-sensitive-change-verification', 'Sensitive payroll change verification steps', 'Verify pay, banking, tax, and employment changes through approved sources before preparation or routing.'],
  ['payroll-provider-question-log', 'Payroll provider question log template', 'Track provider questions with source context, requested answer, owner, deadline, and resolution evidence.'],
  ['payroll-cycle-retrospective-template', 'Payroll cycle retrospective template', 'Review late inputs, repeat exceptions, unclear ownership, and access gaps after each pay cycle.'],
  ['payroll-record-retention-checklist', 'Payroll record retention checklist for support work', 'Keep the records needed for payroll operations while avoiding unnecessary copies and uncontrolled storage.'],
  ['payroll-backlog-prioritization', 'Payroll backlog prioritization for busy cycles', 'Prioritize payroll work by cutoff impact, sensitivity, owner availability, and the next safe action.'],
  ['payroll-quality-sample-review', 'Payroll quality sample review guide', 'Use a repeatable sample review to check source links, reply accuracy, approvals, and exception handling.'],
  ['payroll-absence-coverage-handoff', 'Payroll absence coverage handoff plan', 'Prepare a temporary coverage plan with task limits, current status, backup ownership, and escalation contacts.'],
  ['payroll-vendor-onboarding-records', 'Payroll vendor onboarding records checklist', 'Organize vendor onboarding records, access approvals, operating examples, and first-cycle review checkpoints.'],
] as const;

const secondPublisherBlogPosts = secondBatchTopics.map(([slug, title, excerpt]) => ({ slug, title, excerpt, minutes: 9 })) as ReadonlyArray<{ slug: string; title: string; excerpt: string; minutes: number }>;

const secondPublisherBlogDetails = Object.fromEntries(secondBatchTopics.map(([slug, title]) => {
  const subject = title.replace(/:.*$/, '');
  return [slug, {
    takeaways: [
      `Give ${subject.toLowerCase()} a named owner, deadline, and visible status.`,
      'Keep preparation separate from approval for pay, tax, banking, benefits, and employment-status decisions.',
      'Review the completed cycle with the payroll owner before expanding the work lane.',
    ],
    readinessRows: [
      { area: 'Inputs', ready: 'Required records and examples are listed in one approved location.', ownerCheck: 'The owner confirms what is complete and what is missing.' },
      { area: 'Ownership', ready: 'Every item has an owner, backup, due date, and response window.', ownerCheck: 'The owner resolves blocked or sensitive items.' },
      { area: 'Evidence', ready: 'Exceptions link to source records and show the next action.', ownerCheck: 'An authorized owner reviews the evidence before action.' },
      { area: 'Handoff', ready: 'The final checklist has a date, status, and named recipient.', ownerCheck: 'The payroll owner signs off before submission.' },
    ],
    sections: [
      { heading: `Define the finish line for ${subject.toLowerCase()}`, paragraphs: [
        `Start by describing what a complete ${subject.toLowerCase()} looks like at the end of one pay cycle. Name the input, expected output, and person who checks it. A short definition gives a support specialist a reliable target instead of a broad instruction.`,
        'Keep examples in an approved folder and link to the source record rather than copying sensitive payroll data into extra tools.',
      ] },
      { heading: 'Separate preparation from approval', paragraphs: [
        'A Philippines-based payroll support specialist can collect records, prepare a tracker, send an approved reminder, and flag an exception. The payroll owner should decide disputed hours, pay changes, tax questions, deductions, bank details, and final submission.',
        'Use a named account and the smallest access needed for the first task. Turn on multifactor authentication, avoid shared credentials, and record who grants and removes access.',
      ], bullets: ['Collect and organize source records.', 'Flag missing or conflicting information.', 'Route sensitive decisions to the authorized owner.', 'Record the owner decision and date.'] },
      { heading: 'Run the workflow on one complete cycle', paragraphs: [
        'Test the workflow on one complete cycle before adding another task. The owner should review exceptions at a predictable time and answer blocked items before the cutoff window narrows.',
        'After payroll closes, note late inputs, unclear instructions, duplicate work, and permissions that were not needed. Update the SOP while the examples are still fresh.',
      ] },
      { heading: 'Use a compact quality check', paragraphs: [
        'Before handoff, check that each item has a source, owner, status, and next action. Compare the final list against the previous cycle so missing changes or duplicate entries stand out.',
        'Do not treat an empty exception list as proof that the work is correct. Confirm the source population, date range, and approval record before closing the task.',
      ] },
      { heading: 'Close the cycle and improve the next one', paragraphs: [
        'Send one dated handoff note that names completed work, open exceptions, owner decisions, and the next deadline. Keep it short enough that a manager can review it without reconstructing the whole conversation.',
        'Review the output with the payroll owner, remove unneeded access, and retain only the records the company needs. Expand the lane only when the first routine is consistent and easy to inspect.',
      ] },
    ],
    roleBrief: ['Role: Philippines-based payroll preparation and follow-up support', 'Daily output: a dated tracker with source links and owner decisions', 'Access: named account with only task-specific permissions', 'Stop rule: pause when approval, source, or system access is unclear', 'Escalation: send sensitive payroll decisions to the authorized owner'],
    faqs: [
      { question: `What should a support specialist do first with ${subject.toLowerCase()}?`, answer: 'Start with one repeatable preparation task, two good examples, and a named reviewer. Keep the first cycle narrow enough to inspect every item.' },
      { question: 'Which decisions should stay with the payroll owner?', answer: 'Keep disputed pay, taxes, deductions, bank details, employment status, and final submission with the authorized payroll owner or provider.' },
      { question: 'How do we know the routine is ready to expand?', answer: 'Expand after a full cycle has clean source links, fewer late follow-ups, clear exception ownership, and no unexplained access or approval gaps.' },
    ],
    sources: [
      { name: 'CISA: Turn on multifactor authentication', url: 'https://www.cisa.gov/secure-our-world/turn-mfa', note: 'Official guidance supporting multifactor authentication as an account protection control.' },
      { name: 'IRS: Publication 15, Employer Tax Guide', url: 'https://www.irs.gov/publications/p15', note: 'Official employer payroll guidance. Consult a qualified adviser for rules that apply to your company.' },
      { name: 'NIST: Zero Trust Architecture, SP 800-207', url: 'https://www.nist.gov/publications/zero-trust-architecture', note: 'Official guidance supporting explicit verification and least-privilege access.' },
    ],
  }];
})) as Record<string, (typeof publisherBlogDetails)[keyof typeof publisherBlogDetails]>;

export { secondPublisherBlogPosts, secondPublisherBlogDetails };

// Daily Blog batch selected target: 23. Each topic is a separate operating
// question and is screened against the existing Blog and Research slugs.
const thirdBatchTopics = [
  ['payroll-calendar-risk-review', 'Payroll calendar risk review before each pay cycle', 'Review cutoff risk, owner coverage, and unresolved inputs before a busy payroll cycle starts.'],
  ['payroll-input-source-register', 'Payroll input source register for clean handoffs', 'Track where each payroll input comes from, who owns it, and how its receipt is confirmed.'],
  ['payroll-manager-approval-matrix', 'Payroll manager approval matrix: who decides what', 'Map routine preparation, sensitive changes, and final approvals to named decision owners.'],
  ['payroll-correction-request-intake', 'Payroll correction request intake workflow', 'Capture the source issue, impact, approval path, and follow-up check for payroll corrections.'],
  ['payroll-payroll-owner-daily-review', 'Payroll owner daily review routine', 'Give a payroll owner a short daily review that surfaces exceptions before the cutoff narrows.'],
  ['payroll-support-queue-aging', 'Payroll support queue aging guide', 'Use age, cutoff impact, sensitivity, and owner response to prioritize an open payroll queue.'],
  ['payroll-approval-deadline-map', 'Payroll approval deadline map', 'Turn a pay calendar into visible approval windows with reminders, backups, and escalation points.'],
  ['payroll-document-receipt-log', 'Payroll document receipt log template', 'Confirm which payroll documents arrived, from whom, when, and whether the file is ready for review.'],
  ['payroll-payroll-handoff-quality-score', 'Payroll handoff quality scorecard', 'Review source links, completeness, exception ownership, and approval evidence in each provider handoff.'],
  ['payroll-employee-query-escalation', 'Payroll employee query escalation guide', 'Route employee payroll questions with approved responses, sensitivity checks, and owner escalation.'],
  ['payroll-access-request-intake', 'Payroll access request intake checklist', 'Review the task, system, duration, owner, and removal date before outside support receives access.'],
  ['payroll-first-cycle-review-agenda', 'First outsourced payroll cycle review agenda', 'Use a focused review agenda to assess the first support cycle before expanding the work.'],
  ['payroll-pay-period-close-checklist', 'Pay-period close checklist for payroll support', 'Close a pay period by confirming open items, owner decisions, evidence, and retention steps.'],
  ['payroll-urgent-request-triage', 'Urgent payroll request triage rules', 'Separate true cutoff risks from routine requests while keeping sensitive decisions with the owner.'],
  ['payroll-payroll-workflow-exceptions', 'Payroll workflow exception categories', 'Classify missing, conflicting, late, sensitive, and duplicate inputs so each exception gets the right next step.'],
  ['payroll-backup-contact-register', 'Payroll backup contact register', 'Keep backup owners, escalation contacts, coverage windows, and safe stop rules ready for absences.'],
  ['payroll-approval-reminder-log', 'Payroll approval reminder log', 'Record reminders without exposing unnecessary employee details or losing the final owner decision.'],
  ['payroll-provider-handoff-review', 'Payroll provider handoff review checklist', 'Check the handoff packet against the pay calendar, source records, open exceptions, and approval evidence.'],
  ['payroll-workflow-change-control', 'Payroll workflow change control guide', 'Document changes to a payroll routine, its reason, approver, effective date, and review result.'],
  ['payroll-sensitive-file-sharing', 'Sensitive payroll file sharing controls', 'Use approved locations, named access, receipt confirmation, and removal checks for payroll files.'],
  ['payroll-cycle-owner-scorecard', 'Payroll cycle owner scorecard', 'Measure a payroll cycle by timeliness, evidence quality, exception closure, and clear ownership.'],
  ['payroll-sop-review-calendar', 'Payroll SOP review calendar', 'Schedule practical SOP reviews after cycle changes, recurring exceptions, and access updates.'],
  ['payroll-outsourced-support-boundaries', 'Outsourced payroll support boundaries to document', 'Define preparation, routing, approval, and stop rules before an outside support lane begins.'],
] as const;

const thirdPublisherBlogPosts = thirdBatchTopics.map(([slug, title, excerpt]) => ({ slug, title, excerpt, minutes: 9, published: '2026-08-10' as const })) as ReadonlyArray<{ slug: string; title: string; excerpt: string; minutes: number; published: string }>;
const thirdPublisherBlogDetails = Object.fromEntries(thirdBatchTopics.map(([slug, title]) => {
  const subject = title.replace(/:.*$/, '').toLowerCase();
  return [slug, {
    takeaways: [`Give ${subject} a named owner, deadline, and visible status.`, 'Keep preparation separate from approval for pay, tax, banking, benefits, and employment-status decisions.', 'Close each cycle with evidence that another person can inspect.'],
    readinessRows: [
      { area: 'Inputs', ready: 'Required records and examples are listed in one approved location.', ownerCheck: 'The owner confirms what is complete and what is missing.' },
      { area: 'Ownership', ready: 'Every item has an owner, backup, due date, and response window.', ownerCheck: 'The owner resolves blocked or sensitive items.' },
      { area: 'Evidence', ready: 'Exceptions link to source records and show the next action.', ownerCheck: 'An authorized owner reviews the evidence before action.' },
      { area: 'Handoff', ready: 'The final checklist has a date, status, and named recipient.', ownerCheck: 'The payroll owner signs off before submission.' },
    ],
    sections: [
      { heading: `Define the finish line for ${subject}`, paragraphs: [`Start by describing what a complete ${subject} looks like at the end of one pay cycle. Name the input, expected output, and person who checks it.`, 'Keep examples in an approved folder and link to the source record rather than copying sensitive payroll data into extra tools.'] },
      { heading: 'Separate preparation from approval', paragraphs: ['A Philippines-based payroll support specialist can collect records, prepare a tracker, send an approved reminder, and flag an exception. The payroll owner should decide disputed hours, pay changes, tax questions, deductions, bank details, and final submission.', 'Use a named account and the smallest access needed for the first task. Turn on multifactor authentication, avoid shared credentials, and record who grants and removes access.'], bullets: ['Collect and organize source records.', 'Flag missing or conflicting information.', 'Route sensitive decisions to the authorized owner.', 'Record the owner decision and date.'] },
      { heading: 'Run the workflow on one complete cycle', paragraphs: ['Test the workflow on one complete cycle before adding another task. The owner should review exceptions at a predictable time and answer blocked items before the cutoff window narrows.', 'After payroll closes, note late inputs, unclear instructions, duplicate work, and permissions that were not needed. Update the SOP while the examples are still fresh.'] },
      { heading: 'Use a compact quality check', paragraphs: ['Before handoff, check that each item has a source, owner, status, and next action. Compare the final list against the previous cycle so missing changes or duplicate entries stand out.', 'Do not treat an empty exception list as proof that the work is correct. Confirm the source population, date range, and approval record before closing the task.'] },
      { heading: 'Close the cycle and improve the next one', paragraphs: ['Send one dated handoff note that names completed work, open exceptions, owner decisions, and the next deadline. Keep it short enough that a manager can review it without reconstructing the whole conversation.', 'Review the output with the payroll owner, remove unneeded access, and retain only the records the company needs. Expand the lane only when the first routine is consistent and easy to inspect.'] },
    ],
    roleBrief: ['Role: Philippines-based payroll preparation and follow-up support', 'Daily output: a dated tracker with source links and owner decisions', 'Access: named account with only task-specific permissions', 'Stop rule: pause when approval, source, or system access is unclear', 'Escalation: send sensitive payroll decisions to the authorized owner'],
    faqs: [
      { question: `What should a support specialist do first with ${subject}?`, answer: 'Start with one repeatable preparation task, two good examples, and a named reviewer. Keep the first cycle narrow enough to inspect every item.' },
      { question: 'Which decisions should stay with the payroll owner?', answer: 'Keep disputed pay, taxes, deductions, bank details, employment status, and final submission with the authorized payroll owner or provider.' },
      { question: 'How do we know the routine is ready to expand?', answer: 'Expand after a full cycle has clean source links, fewer late follow-ups, clear exception ownership, and no unexplained access or approval gaps.' },
    ],
    sources: [
      { name: 'CISA: Turn on multifactor authentication', url: 'https://www.cisa.gov/secure-our-world/turn-mfa', note: 'Official account-security guidance supporting multifactor authentication.' },
      { name: 'NIST: Zero Trust Architecture, SP 800-207', url: 'https://www.nist.gov/publications/zero-trust-architecture', note: 'Official guidance supporting explicit verification and least-privilege access.' },
      { name: 'IRS: Publication 15, Employer Tax Guide', url: 'https://www.irs.gov/publications/p15', note: 'Official employer payroll guidance; consult a qualified adviser for rules that apply to your company.' },
    ],
    publication: { internalLinks: ['/services/operations-support', '/services/reporting-and-qa'], externalLink: 'https://www.nist.gov/publications/zero-trust-architecture', related: ['payroll-cutoff-checklist', 'payroll-reconciliation-workflow', 'payroll-outsourcing-first-cycle'] },
  }];
})) as Record<string, (typeof publisherBlogDetails)[keyof typeof publisherBlogDetails] & { publication: { internalLinks: string[]; externalLink: string; related: string[] } }>;

export { thirdPublisherBlogPosts, thirdPublisherBlogDetails };

export const additionalPublisherBlogPosts = batchTopics.map(([slug, title, excerpt]) => ({ slug, title, excerpt, minutes: 9 })) as ReadonlyArray<{ slug: string; title: string; excerpt: string; minutes: number }>;

export const additionalPublisherBlogDetails = Object.fromEntries(batchTopics.map(([slug, title]) => {
  const subject = title.replace(/:.*$/, '');
  return [slug, {
    takeaways: [
      `Give ${subject.toLowerCase()} a named owner, a due date, and a visible status.`,
      'Keep preparation separate from approval for pay, tax, banking, benefits, and employment-status decisions.',
      'Use the first full pay cycle to test the checklist, then fix gaps before expanding the work lane.',
    ],
    readinessRows: [
      { area: 'Inputs', ready: 'Required records and examples are listed in one approved location.', ownerCheck: 'The owner confirms what is complete and what is missing.' },
      { area: 'Ownership', ready: 'Every task has a person and a backup with a response time.', ownerCheck: 'The owner resolves blocked or sensitive items.' },
      { area: 'Review', ready: 'Exceptions link to source records and show the next action.', ownerCheck: 'An authorized owner reviews the exception before action.' },
      { area: 'Handoff', ready: 'The final checklist has a date, status, and clear recipient.', ownerCheck: 'The payroll owner signs off before submission.' },
    ],
    sections: [
      { heading: `Define the finish line for ${subject.toLowerCase()}`, paragraphs: [
        `Start by describing what a complete ${subject.toLowerCase()} looks like at the end of one pay cycle. Name the input, the expected output, and the person who checks it. A short definition gives a support specialist a reliable target instead of a broad instruction.`,
        'Write the finish line beside two or three good examples. Keep the examples in an approved folder and link to the source record rather than copying sensitive payroll data into extra tools.',
      ] },
      { heading: 'Put preparation and approval in separate lanes', paragraphs: [
        'A Philippines-based payroll support specialist can collect records, prepare a tracker, send an approved reminder, and flag an exception. The payroll owner should decide disputed hours, pay changes, tax questions, deductions, bank details, and final submission.',
        'Use a named account and the smallest access needed for the first task. Turn on multifactor authentication, avoid shared credentials, and record who grants and removes access.',
      ], bullets: ['Collect and organize source records.', 'Flag missing or conflicting information.', 'Route sensitive decisions to the authorized owner.', 'Record the owner decision and date.'] },
      { heading: 'Run the routine on one pay cycle', paragraphs: [
        'Test the workflow on one complete cycle before adding another task. The owner should review the tracker at a predictable time each workday and answer blocked items before the cutoff window narrows.',
        'After payroll closes, note late inputs, unclear instructions, duplicate work, and permissions that were not needed. Update the SOP while the examples are still fresh.',
      ] },
      { heading: 'Use a compact quality check', paragraphs: [
        'Before handoff, check that each item has a source, owner, status, and next action. Compare the final list against the previous cycle so missing changes or duplicate entries stand out.',
        'Do not treat an empty exception list as proof that the work is correct. Confirm the source population, the date range, and the approval record before closing the task.',
      ] },
      { heading: 'Close the cycle and improve the next one', paragraphs: [
        'Send one dated handoff note that names completed work, open exceptions, owner decisions, and the next deadline. Keep it short enough that a manager can review it without reconstructing the whole conversation.',
        'Review the output with the payroll owner, remove unused access, and retain only the records your company needs. Expand the lane only when the first routine is consistent and easy to inspect.',
      ] },
    ],
    roleBrief: ['Role: Philippines-based payroll preparation and follow-up support', 'Daily output: a dated tracker with source links and owner decisions', 'Access: named account with only task-specific permissions', 'Stop rule: pause when approval, source, or system access is unclear', 'Escalation: send sensitive payroll decisions to the authorized owner'],
    faqs: [
      { question: `What should a support specialist do first with ${subject.toLowerCase()}?`, answer: 'Start with one repeatable preparation task, two good examples, and a named reviewer. Keep the first cycle narrow enough to inspect every item.' },
      { question: 'Which decisions should stay with the payroll owner?', answer: 'Keep disputed pay, taxes, deductions, bank details, employment status, and final submission with the authorized payroll owner or provider.' },
      { question: 'How do we know the routine is ready to expand?', answer: 'Expand after a full cycle has clean source links, fewer late follow-ups, clear exception ownership, and no unexplained access or approval gaps.' },
    ],
    sources: [
      { name: 'CISA: Turn on multifactor authentication', url: 'https://www.cisa.gov/secure-our-world/turn-mfa', note: 'Official guidance supporting multifactor authentication as an account protection control.' },
      { name: 'IRS: Publication 15, Employer Tax Guide', url: 'https://www.irs.gov/publications/p15', note: 'Official employer payroll guidance. Consult a qualified adviser for rules that apply to your company.' },
      { name: 'NIST: Zero Trust Architecture, SP 800-207', url: 'https://www.nist.gov/publications/zero-trust-architecture', note: 'Official guidance supporting explicit verification and least-privilege access.' },
    ],
  }];
})) as Record<string, (typeof publisherBlogDetails)[keyof typeof publisherBlogDetails]>;
