export const fleetServices = [
  {
    "slug": "payroll-data-entry",
    "title": "Payroll Data Entry",
    "summary": "Payroll Data Entry delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "payroll data entry queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "timesheet-reconciliation",
    "title": "Timesheet Reconciliation",
    "summary": "Timesheet Reconciliation delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "timesheet reconciliation queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "payroll-preparation",
    "title": "Payroll Preparation",
    "summary": "Payroll Preparation delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "payroll preparation queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "benefits-deduction-administration",
    "title": "Benefits Deduction Administration",
    "summary": "Benefits Deduction Administration delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "benefits deduction administration queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "new-hire-payroll-setup",
    "title": "New Hire Payroll Setup",
    "summary": "New Hire Payroll Setup delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "new hire payroll setup queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "payroll-query-support",
    "title": "Payroll Query Support",
    "summary": "Payroll Query Support delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "payroll query support queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "leave-balance-administration",
    "title": "Leave Balance Administration",
    "summary": "Leave Balance Administration delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "leave balance administration queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "payroll-reporting",
    "title": "Payroll Reporting",
    "summary": "Payroll Reporting delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "payroll reporting queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "contractor-payment-administration",
    "title": "Contractor Payment Administration",
    "summary": "Contractor Payment Administration delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "contractor payment administration queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "year-end-payroll-preparation",
    "title": "Year-End Payroll Preparation",
    "summary": "Year-End Payroll Preparation delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "year-end payroll preparation queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  }
] as const;
export type ResearchPost = {slug:string;title:string;excerpt:string;published:string;stat:string;takeaways:readonly string[];sections:readonly {heading:string;body:string}[];sources:readonly {label:string;url:string}[];faq:readonly {question:string;answer:string}[]};
const researchSources = [
  {label:'Philippine Statistics Authority labor-force statistics',url:'https://psa.gov.ph/statistics/labor-force-survey'},
  {label:'Bangko Sentral ng Pilipinas e-payments measurement',url:'https://www.bsp.gov.ph/PaymentAndSettlement/2024_Report_on_E-payments_Measurement.pdf'},
  {label:'National Privacy Commission, Data Privacy Act',url:'https://privacy.gov.ph/data-privacy-act/'},
  {label:'Bureau of Internal Revenue tax resources',url:'https://www.bir.gov.ph/'},
  {label:'Department of Labor and Employment',url:'https://www.dole.gov.ph/'},
  {label:'Philippine Development Plan 2023–2028',url:'https://pdp.depdev.gov.ph/'},
  {label:'Department of Information and Communications Technology',url:'https://dict.gov.ph/'},
  {label:'Official Gazette of the Republic of the Philippines',url:'https://www.officialgazette.gov.ph/'},
  {label:'International Labour Organization Philippines',url:'https://www.ilo.org/manila'},
  {label:'World Bank Philippines overview',url:'https://www.worldbank.org/en/country/philippines/overview'}
] as const;
const topics = [
  ['philippines-payroll-calendar-controls','Philippines payroll calendar controls','A research-led control framework for coordinating payroll cutoffs, approvals, and exception queues.','2025 annual labor statistics estimated a 95.8% employment rate in the Philippines.','A reliable calendar turns a recurring deadline into a visible operating system.'],
  ['philippines-payroll-input-checklist','Philippines payroll input checklist','How teams can reduce avoidable payroll rework with a dated, owner-based input checklist.','The PSA estimated 49.01 million employed Filipinos in 2025.','Input quality is primarily a handoff and ownership problem, not a spreadsheet problem.'],
  ['philippines-payroll-approval-workflow','Philippines payroll approval workflow','A practical study of maker-checker approvals for distributed payroll operations.','BSP reported that digital payments reached 57.4% of retail transaction volume in 2024.','Digital approvals should make accountability clearer while preserving a human exception path.'],
  ['philippines-payroll-data-retention','Philippines payroll data retention','A source-based planning guide for retaining payroll records without keeping everything forever.','The Data Privacy Act is administered by an independent National Privacy Commission.','Retention needs a purpose, an owner, and a deletion or review date.'],
  ['philippines-payroll-access-review','Philippines payroll access review','How to run a recurring access review for payroll tools, exports, and shared folders.','NPC guidance covers the processing and security of personal information in the Philippines.','Access reviews work when they compare real permissions with current job responsibilities.'],
  ['philippines-payroll-reconciliation-queue','Philippines payroll reconciliation queue','A research-informed queue design for reconciling payroll inputs, outputs, and bank records.','BSP measured 5,756.5 million total retail payment transactions in its 2024 report.','A reconciliation queue should separate matching work from judgment calls and escalations.'],
  ['philippines-payroll-remote-handoff','Philippines payroll remote handoff','The evidence-first handoff pattern for cross-border payroll work and time-zone coverage.','PSA reported a 64.1% labor-force participation rate for 2025.','A good remote handoff states what changed, what is blocked, and who approves the next move.'],
  ['philippines-payroll-exception-log','Philippines payroll exception log','How an exception log turns recurring payroll surprises into measurable process improvements.','PSA reported 2.14 million unemployed people in the 2025 labor force estimate.','Exceptions become useful data only when categories and resolution owners stay consistent.'],
  ['philippines-payroll-vendor-oversight','Philippines payroll vendor oversight','A compact oversight model for reviewing an outsourced payroll work lane.','NPC publishes guidance and advisories for organizations processing personal data.','Vendor oversight should test evidence of controls, not rely on service promises.'],
  ['philippines-payroll-month-end-close','Philippines payroll month-end close','A month-end close sequence that aligns payroll evidence, sign-off, and reporting.','The 2025 PSA labor-force estimate covered 51.16 million people in the labor force.','Close routines are strongest when every report has a source, reviewer, and timestamp.']
] as const;
const sharedBody = (focus:string, stat:string) => [
  `${focus} This article treats payroll operations as a controlled workflow: inputs arrive, a named owner checks them, an approver resolves exceptions, and evidence is retained for the next review.`,
  `The headline measure for this brief is ${stat} It is a context signal, not a promise about an individual worker or provider.`,
  'The first design question is scope. Define which records enter the work lane, which actions are allowed, and which decisions remain with the client-side approver. A short written scope prevents silent expansion.',
  'The second question is timing. Put the cutoff, review window, escalation deadline, and final sign-off on one calendar. Use dates and time zones explicitly, then record when each handoff happened.',
  'The third question is evidence. A checklist, exception note, approval record, and reconciliation result should be easy to locate. Evidence should explain the decision without requiring a private conversation to reconstruct it.',
  'A useful control is maker-checker separation. The person preparing or changing an item should not be the only person approving the result. Small teams can use a rotating reviewer, provided the review is recorded.',
  'Data minimization matters in every payroll lane. Give each role only the fields and systems needed for its task, restrict exports, and review access after role or client changes.',
  'Measure the process with a few stable indicators: on-time completion, returned inputs, unresolved exceptions, approval age, and reconciliation variance. Trends are more useful than a single perfect-looking day.',
  'The operating recommendation is to pilot the workflow on one pay cycle, sample the evidence, and adjust the checklist before expanding it. A pilot exposes ambiguous ownership while the cost of correction is still low.',
  'This is operational research, not tax or legal advice. Confirm jurisdiction-specific obligations with the relevant authority and qualified counsel before changing a payroll process.'
];
export const researchPosts: readonly ResearchPost[] = topics.map(([slug,title,excerpt,stat,focus], index) => ({
  slug,title,excerpt,published:'2026-08-07',stat,
  takeaways:[focus,'Make every cutoff and approval visible to the people who own it.','Keep source records and exception evidence together.'],
  sections:[{heading:'What the evidence says',body:sharedBody(focus,stat).slice(0,3).join(' ')},{heading:'Control design',body:sharedBody(focus,stat).slice(3,7).join(' ')},{heading:'Implementation sequence',body:sharedBody(focus,stat).slice(7).join(' ')}],
  sources:researchSources,
  faq:[{question:'Is this a payroll compliance opinion?',answer:'No. It is a workflow research brief; verify legal, tax, and employment requirements with the relevant authority.'},{question:'How should a team start?',answer:'Pilot one cycle with a named preparer, reviewer, approver, and evidence folder before expanding the lane.'}],
  related:[topics[(index+1)%topics.length][0],topics[(index+2)%topics.length][0],topics[(index+3)%topics.length][0]]
} as ResearchPost & {related:readonly string[]}));
export const publicTiers = [
  {name:'Executive Assistants', price:'$10/hour', detail:'Philippines-based support for structured executive and administrative work.'},
  {name:'Senior Assistants', price:'$15/hour', detail:'Experienced Philippines-based support for specialized workflows and coordination.'},
  {name:'C-Suite / Operations', price:'$18/hour', detail:'Philippines-based operational support for complex work lanes and leadership follow-through.'},
] as const;
