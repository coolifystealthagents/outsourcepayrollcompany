export const site = {
  domain: 'OutsourcePayrollCompany.com',
  slug: 'outsourcepayrollcompany',
  brand: 'Outsource Payroll Company',
  primary: 'outsource payroll company',
  audience: 'companies comparing payroll outsourcing support and admin help',
  angle: 'payroll prep, timesheets, employee changes, vendor handoffs, and controls',
  style: 'Payroll compliance ledger',
  dark: '#102416',
  color: '#15803d',
  accent: '#0ea5e9',
  heroImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
  serviceImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  alt: 'payroll specialist reviewing timesheets and reports',
  badge: 'Payroll ops',
} as const;

export const services = [
  {
    slug: 'operations-support',
    title: 'Payroll operations support',
    desc: 'Remote payroll operations help for timesheet chasing, employee-change logs, pay-period checklists, and payroll-provider handoffs.',
    buyerProblem: 'Your payroll provider can calculate checks, but your team still has to collect hours, chase approvals, log changes, and catch missing details before cut-off.',
    bestTasks: [
      'collect timesheets, PTO notes, bonus requests, and manager approvals before each payroll run',
      'keep a pay-period tracker with missing items, due dates, and owner names',
      'prepare employee-change packets for new hires, terminations, address updates, and direct-deposit changes',
      'send clean handoff notes to the payroll provider or internal payroll owner',
    ],
    controls: [
      'the offshore assistant prepares payroll data but does not approve pay, change bank details alone, or submit final payroll',
      'payroll owners review a cut-off checklist before any file goes to the provider',
      'sensitive employee files stay in approved systems with role-based access',
    ],
    launchPlan: [
      'pick one payroll cycle and list every item that slows the team down',
      'build a cut-off tracker with columns for employee, item, owner, status, and approval',
      'run a two-week pilot where the assistant prepares the tracker and the payroll owner checks it daily',
      'keep only the tasks that reduce late edits or manager follow-up time',
    ],
    faqs: [
      { question: 'Can an offshore assistant run payroll?', answer: 'No. Treat the role as payroll prep and follow-up support. A payroll owner or provider should approve final pay, tax, benefits, and banking actions.' },
      { question: 'What should we hand off first?', answer: 'Start with timesheet chasing, missing approval lists, employee-change logs, and provider notes. These tasks are repeatable and easy to review.' },
      { question: 'How do we protect payroll data?', answer: 'Use limited accounts, named access, audit logs, and a rule that bank, pay-rate, tax, and termination changes need owner approval.' },
    ],
  },
  {
    slug: 'customer-support',
    title: 'Payroll employee support',
    desc: 'Payroll inbox and employee-support help for status replies, document requests, paystub routing, and issue triage.',
    buyerProblem: 'Payroll questions pile up fast. Many are simple status or document requests, but a few need a payroll owner. The trick is sorting them safely.',
    bestTasks: [
      'sort payroll inbox messages by paystub, PTO, tax form, direct deposit, benefits, or manager approval need',
      'send approved replies for common questions about timing, documents, and next steps',
      'log employee issues with date, person, topic, system link, and payroll-owner decision needed',
      'route urgent or sensitive questions to the right owner without guessing',
    ],
    controls: [
      'assistants use approved reply templates and do not promise payroll outcomes',
      'pay disputes, tax questions, garnishments, benefits, and bank changes go to the payroll owner',
      'weekly QA checks compare replies against the approved answer bank',
    ],
    launchPlan: [
      'pull the last 30 payroll questions and group them by topic',
      'write safe reply templates for the five most common questions',
      'give the assistant an escalation list for anything involving pay amount, taxes, legal notices, or bank details',
      'review the inbox log twice a week until the reply quality is steady',
    ],
    faqs: [
      { question: 'Can the assistant answer employee pay questions?', answer: 'They can send approved status replies and collect details. Pay amount, tax, garnishment, and policy answers should come from the payroll owner.' },
      { question: 'What inbox work is safe to outsource?', answer: 'Document routing, missing-detail requests, ticket tagging, follow-up reminders, and status updates are good first tasks.' },
      { question: 'How do we avoid bad answers?', answer: 'Use a short answer bank, require escalation for sensitive topics, and review a sample of replies each week.' },
    ],
  },
  {
    slug: 'admin-support',
    title: 'Payroll admin support',
    desc: 'Back-office payroll admin help for file naming, records cleanup, onboarding documents, and recurring HR/payroll reminders.',
    buyerProblem: 'Payroll admin work is usually small, repeated, and easy to delay. When it slips, payroll day turns into a scramble.',
    bestTasks: [
      'rename and file onboarding, tax, direct-deposit, and policy documents in the approved system',
      'maintain payroll calendars with cut-off dates, reminders, and manager approval windows',
      'prepare new-hire and termination checklists for payroll-owner review',
      'reconcile employee lists across HR, scheduling, and payroll systems for missing records',
    ],
    controls: [
      'assistants organize and flag records but do not make pay-rate, tax, or employment-status decisions',
      'the payroll owner approves final new-hire and termination packets',
      'access starts with view or upload rights before any broader permissions are added',
    ],
    launchPlan: [
      'choose one messy admin lane, such as new-hire packets or document filing',
      'show three good examples and three bad examples so the assistant can spot gaps',
      'set a daily missing-record report during the first pay cycle',
      'add more admin tasks only after the first lane is clean for two weeks',
    ],
    faqs: [
      { question: 'Is payroll admin a full payroll role?', answer: 'No. It is support work around files, checklists, reminders, and records. Keep final payroll decisions with the payroll owner.' },
      { question: 'What makes this work a good offshore fit?', answer: 'The work repeats each pay period, has examples, and can be checked with a simple list.' },
      { question: 'How much access should we give first?', answer: 'Start with the least access needed. Add permissions only after the assistant proves they can follow the process.' },
    ],
  },
  {
    slug: 'reporting-and-qa',
    title: 'Payroll reporting and QA support',
    desc: 'Payroll reporting support for exception logs, missing-data checks, approval reports, and post-run cleanup.',
    buyerProblem: 'Small payroll errors often come from missing inputs, late approvals, and weak review notes. A clear QA log catches more of that before payroll closes.',
    bestTasks: [
      'build exception reports for missing hours, duplicate entries, late approvals, and unusual changes',
      'prepare a pre-payroll QA checklist for the payroll owner',
      'track post-run issues by root cause, owner, and fix date',
      'summarize weekly payroll admin trends for managers',
    ],
    controls: [
      'assistants flag exceptions but do not decide final pay corrections',
      'every QA report links back to the source record or manager approval',
      'sensitive reports use approved folders and named reviewers only',
    ],
    launchPlan: [
      'pick three payroll mistakes or delays you want to prevent',
      'turn those into a one-page QA checklist with examples',
      'have the assistant prepare the report before cut-off while the owner reviews the exceptions',
      'compare the first two cycles and remove checks that do not catch real problems',
    ],
    faqs: [
      { question: 'Can reporting support replace payroll review?', answer: 'No. It helps the payroll owner see issues sooner. The owner still approves pay changes and final payroll.' },
      { question: 'Which reports should we start with?', answer: 'Start with missing hours, late approvals, duplicate entries, and employee changes since the last run.' },
      { question: 'How do we know the assistant is helping?', answer: 'Track fewer late edits, fewer manager chases, cleaner handoff notes, and faster payroll-owner review.' },
    ],
  },
] as const;

export const blogPosts = [
  {
    slug: 'outsource-payroll-company-planning',
    title: 'How to plan outsourced payroll support',
    excerpt: 'Map payroll prep, approvals, access, and provider handoffs before you assign the work.',
    minutes: 10,
  },
  {
    slug: 'outsource-payroll-company-tasks-to-outsource',
    title: 'Outsource Payroll Company: What tasks should you outsource first?',
    excerpt: 'Start with recurring work that has examples and clear review rules.',
    minutes: 7,
  },
  {
    slug: 'outsource-payroll-company-provider-questions',
    title: 'Outsource Payroll Company: Questions to ask before hiring',
    excerpt: 'Use these questions before you sign with a provider or freelancer.',
    minutes: 8,
  },
  {
    slug: 'outsource-payroll-company-onboarding-checklist',
    title: 'Outsource Payroll Company: First week onboarding checklist',
    excerpt: 'A simple checklist for tools, SOPs, calls, QA, and reporting.',
    minutes: 9,
  },
] as const;

export const blogDetails: Record<string, {
  takeaways: string[];
  readinessRows: { area: string; ready: string; ownerCheck: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  roleBrief: string[];
  faqs: { question: string; answer: string }[];
  sources: { name: string; url: string; note: string }[];
}> = {
  'outsource-payroll-company-planning': {
    takeaways: [
      'Keep final payroll approval with a named payroll owner or provider.',
      'Hand off repeatable prep work before you hand off judgment calls.',
      'Give each worker only the system access needed for the assigned task.',
      'Test the plan on one pay cycle, then fix the gaps before adding more work.',
    ],
    readinessRows: [
      { area: 'Timesheets', ready: 'A standard file, deadline, and manager approval path exist.', ownerCheck: 'The payroll owner reviews missing or unusual hours.' },
      { area: 'Employee changes', ready: 'New hire, termination, rate, and bank changes use separate logged requests.', ownerCheck: 'An authorized owner approves each change before entry.' },
      { area: 'Payroll inbox', ready: 'Common questions have approved replies and a clear routing list.', ownerCheck: 'Pay disputes, tax, benefits, and garnishment questions are escalated.' },
      { area: 'Provider handoff', ready: 'The provider receives one clean checklist with links to source records.', ownerCheck: 'The owner signs off before the final submission.' },
    ],
    sections: [
      {
        heading: 'Start with the work around payroll',
        paragraphs: [
          'Payroll outsourcing can mean two different things. A payroll company may calculate wages, taxes, and checks. A support worker may collect the inputs, chase missing approvals, keep the change log clean, and prepare the handoff. Decide which kind of help you need before you compare providers.',
          'Most small teams should begin with the work around payroll. That includes timesheet follow-up, employee document checks, inbox sorting, calendar reminders, and exception reports. These jobs repeat each pay period and leave a record that the payroll owner can review. Final pay approval, tax choices, bank changes, garnishments, and termination decisions should stay with the authorized owner or payroll provider.',
        ],
      },
      {
        heading: 'Draw the approval line in writing',
        paragraphs: [
          'A vague job description is risky around payroll data. Write down what the support worker can prepare, what they can enter, and what they must stop and send to an owner. Use plain examples. For instance: "You may add an approved address change to the tracker. You may not change a bank account or pay rate without a second approval."',
          'Name the person who gives that approval. A shared inbox is not an owner. The worker needs a person, a backup person, and a response time for urgent items near payroll cut-off. This keeps a late question from turning into a guess.',
        ],
        bullets: [
          'The worker may collect and organize source records.',
          'The worker may flag missing data and send approved reminders.',
          'The payroll owner decides disputed hours, rates, deductions, and final corrections.',
          'The provider or authorized owner submits and approves the final payroll run.',
        ],
      },
      {
        heading: 'Build one pay-period control sheet',
        paragraphs: [
          'Use one tracker for the first handoff. It can be a protected spreadsheet or a task board inside an approved system. Add the employee or department, the item needed, its source, the manager who must approve it, the due date, and the current status. Link to the source record instead of copying sensitive data into extra tools.',
          'The tracker should show exceptions, not become a second payroll system. A missing-timesheet list is useful. A loose copy of every employee bank detail is not. The IRS keeps separate guidance on employment tax records, so ask your payroll or tax adviser which records your business must retain and where those records should live.',
        ],
      },
      {
        heading: 'Limit access before the first login',
        paragraphs: [
          'Payroll files contain names, addresses, pay data, tax details, and bank information. Start with the least access the worker needs. Use a named account, turn on multifactor authentication, and avoid sending passwords in chat or email. CISA recommends MFA because a stolen password alone is then not enough to enter the account.',
          'Split risky actions when the software allows it. One person can prepare a change, while the payroll owner approves it. Review the access list after the first pay cycle and remove anything the worker did not use. Keep an exit checklist too, even during a trial, so accounts can be closed without hunting through old messages.',
        ],
      },
      {
        heading: 'Run one cycle as a supervised test',
        paragraphs: [
          'Do not move every payroll task on day one. Pick one pay period and a small lane, such as timesheet follow-up plus the missing-approval report. Give the worker two or three good examples, the cut-off calendar, and the stop rules. The payroll owner should check the tracker each day during that first cycle.',
          'After payroll closes, review what arrived late, which questions needed an owner, and where the worker lacked a source or example. Fix those points in the checklist. Add another task only when the first lane is easy to review. The goal is a cleaner handoff with fewer surprises, not a quick transfer of every responsibility.',
        ],
      },
    ],
    roleBrief: [
      'Role: Payroll preparation and follow-up support',
      'First task lane: Collect timesheets and manager approvals, then prepare the missing-item report',
      'Tools: List the payroll, timekeeping, HR, file, and ticket systems the worker may use',
      'Access: Named account, MFA, least privilege, and no solo bank or pay-rate changes',
      'Daily output: Updated tracker with source links, missing items, owners, and due dates',
      'Stop rules: Escalate disputed hours, taxes, garnishments, benefits, terminations, bank changes, and final pay approval',
      'Owner review: Named payroll owner checks exceptions before provider handoff',
    ],
    faqs: [
      { question: 'What payroll work should we outsource first?', answer: 'Start with timesheet chasing, missing approval lists, employee-change logs, inbox sorting, and provider handoff notes. The work should repeat and be easy for an owner to check.' },
      { question: 'Can a remote support worker approve payroll?', answer: 'Keep final approval with your authorized payroll owner or provider. A support worker can prepare records and flag exceptions, but should not decide disputed pay, taxes, bank changes, or deductions.' },
      { question: 'How much system access should the worker get?', answer: 'Give the least access needed for the first task lane. Use a named account and MFA. Add permissions only when a real task requires them and an owner agrees.' },
      { question: 'How long should the first test run?', answer: 'Use one complete pay cycle. That gives the team a real deadline, real exceptions, and a clear review point without turning a suggested timeline into a promise.' },
    ],
    sources: [
      { name: 'IRS: Understanding employment taxes', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/understanding-employment-taxes', note: 'Overview of federal employment tax responsibilities for employers.' },
      { name: 'IRS: Employment tax recordkeeping', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping', note: 'IRS guidance on employment tax records and retention.' },
      { name: 'CISA: Turn on multifactor authentication', url: 'https://www.cisa.gov/secure-our-world/turn-mfa', note: 'Plain guidance on using MFA to protect accounts.' },
    ],
  },
};

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' },
] as const;

export const staffingOffer = {
  partner: 'payroll support team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'The support team can match remote staff to the tasks, schedule, tools, and review rules you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'The right support plan depends on the payroll tasks, schedule, systems, access limits, and owner checks. Share those details so the team can map a sensible first handoff.';
