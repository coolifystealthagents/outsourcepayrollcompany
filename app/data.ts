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
    title: 'Outsource Payroll Company: What does it plan?',
    excerpt: 'A plain-English guide to staffing details, scope, and hidden planning.',
    minutes: 6,
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
