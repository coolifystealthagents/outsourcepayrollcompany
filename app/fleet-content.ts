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
  ,['philippines-payroll-cutoff-risk-map','Philippines payroll cutoff risk map','A research-led method for ranking cutoff risks before they become payroll exceptions.','PSA reported a 64.1% labor-force participation rate for 2025.','Risk maps make deadline pressure visible before it reaches final approval.']
  ,['philippines-payroll-change-control','Philippines payroll change control','How to document payroll workflow changes with owners, evidence, and rollback decisions.','The National Privacy Commission oversees personal-information processing under the Data Privacy Act.','A small change record prevents operational drift from becoming an invisible control failure.']
  ,['philippines-payroll-joiner-mover-leaver-controls','Philippines payroll joiner mover leaver controls','A practical control sequence for payroll access when people join, change roles, or leave.','NPC guidance addresses organizational and technical measures for personal-information security.','Joiner, mover, and leaver events need one accountable owner and a dated evidence trail.']
  ,['philippines-payroll-timesheet-quality','Philippines payroll timesheet quality','A source-informed framework for checking timesheet completeness before payroll preparation.','PSA estimated 49.01 million employed Filipinos in 2025.','Timesheet quality improves when missing context is routed to a named reviewer early.']
  ,['philippines-payroll-bank-file-controls','Philippines payroll bank file controls','How to separate preparation, review, release, and confirmation for payroll bank files.','BSP reported that digital payments reached 57.4% of retail transaction volume in 2024.','Bank-file controls should make release authority and confirmation evidence unmistakable.']
  ,['philippines-payroll-forecast-variance','Philippines payroll forecast variance','A planning model for explaining payroll forecast variance without hiding operational uncertainty.','The 2025 PSA labor-force estimate covered 51.16 million people in the labor force.','Variance is useful when every movement has a source, category, and next action.']
  ,['philippines-payroll-audit-evidence-index','Philippines payroll audit evidence index','A compact indexing pattern for locating payroll approvals, exceptions, and reconciliations.','The Data Privacy Act establishes obligations for organizations processing personal information.','An evidence index reduces review time by connecting each control to its record.']
  ,['philippines-payroll-service-level-review','Philippines payroll service level review','How to review payroll service levels through outcomes, exceptions, and approval age.','The Philippine Development Plan 2023–2028 sets national development priorities and indicators.','Service-level review should test measurable outcomes instead of relying on broad assurances.']
  ,['philippines-payroll-contingency-runbook','Philippines payroll contingency runbook','A research-based outline for keeping payroll work controlled during an interruption.','DICT publishes national digital-policy and infrastructure resources relevant to continuity planning.','A contingency runbook is strongest when it names the trigger, owner, fallback, and approval path.']
  ,['philippines-payroll-knowledge-transfer','Philippines payroll knowledge transfer','A repeatable knowledge-transfer pattern for payroll workflows, exceptions, and source records.','The International Labour Organization provides labor and employment research for the Philippines.','Knowledge transfer becomes durable when it is demonstrated, observed, and recorded.']
  ,['philippines-payroll-control-testing','Philippines payroll control testing','A practical sampling approach for testing recurring payroll controls and documenting results.','The Philippine Development Plan 2023–2028 uses indicators to track national priorities.','Control testing is most useful when the sample, expected result, exception, and owner are explicit.']
  ,['philippines-payroll-approval-aging','Philippines payroll approval aging','How approval-age data helps payroll teams surface bottlenecks before a pay-cycle deadline.','The Philippine Development Plan 2023–2028 tracks progress through published indicators.','Approval age is a visible signal for deciding where a payroll queue needs attention.']
  ,['philippines-payroll-source-of-truth','Philippines payroll source of truth','A research-informed model for naming the authoritative record across payroll inputs and reports.','The Data Privacy Act applies to organizations processing personal information in the Philippines.','A source of truth is a governance decision supported by ownership and evidence.']
  ,['philippines-payroll-duplicate-payment-controls','Philippines payroll duplicate payment controls','A control framework for identifying duplicate or repeated payment instructions before release.','BSP reported 5,756.5 million retail payment transactions in its 2024 measurement.','Duplicate checks should be explicit, repeatable, and reviewed before release authority is used.']
  ,['philippines-payroll-missing-input-escalation','Philippines payroll missing input escalation','How to route missing payroll inputs with deadlines, owners, and documented escalation steps.','PSA estimated 49.01 million employed Filipinos in its 2025 labor-force statistics.','Missing inputs are manageable when escalation starts before the final preparation window.']
  ,['philippines-payroll-variance-thresholds','Philippines payroll variance thresholds','A practical way to define payroll variance thresholds without turning them into automatic approvals.','The Philippine Development Plan 2023–2028 publishes national planning indicators.','A threshold should trigger review, not replace a responsible person’s judgment.']
  ,['philippines-payroll-report-distribution','Philippines payroll report distribution','Evidence-led controls for deciding who receives payroll reports and how distribution is recorded.','The National Privacy Commission publishes guidance for organizations handling personal information.','Report distribution needs a recipient list, a delivery record, and a review path for changes.']
  ,['philippines-payroll-holiday-cutoff-planning','Philippines payroll holiday cutoff planning','How payroll teams can plan cutoffs around holidays, unavailable reviewers, and handoff windows.','The Department of Labor and Employment publishes Philippine labor resources and advisories.','Holiday planning turns calendar constraints into explicit decisions and backup ownership.']
  ,['philippines-payroll-reversal-controls','Philippines payroll reversal controls','A controlled sequence for documenting, reviewing, and approving payroll reversals or corrections.','BSP’s e-payments measurement provides national context for transaction controls.','A reversal needs a reason, evidence, reviewer, and clear separation from the original release.']
  ,['philippines-payroll-process-drift-review','Philippines payroll process drift review','A recurring review method for finding when payroll work no longer matches its approved procedure.','The International Labour Organization provides labor and employment research for the Philippines.','Process-drift review keeps operational reality aligned with documented control intent.']
  ,['philippines-payroll-reviewer-capacity','Philippines payroll reviewer capacity','How to plan reviewer capacity so payroll approvals remain timely during busy cycles.','PSA reported a 64.1% labor-force participation rate for 2025.','Reviewer capacity is a control input that should be planned before a queue becomes urgent.']
  ,['philippines-payroll-workpaper-standard','Philippines payroll workpaper standard','A practical standard for making payroll workpapers reviewable, comparable, and easy to retain.','The Data Privacy Act requires appropriate safeguards for personal information processing.','A consistent workpaper makes review quality visible without preserving unnecessary data.']
  ,['philippines-payroll-closeout-checklist','Philippines payroll closeout checklist','A closeout checklist for confirming payroll evidence, exceptions, and follow-up ownership.','BIR publishes official tax resources for Philippine taxpayers and organizations.','Closeout is the point where unresolved evidence becomes an owned next action.']
  ,['philippines-payroll-delegation-matrix','Philippines payroll delegation matrix','How a delegation matrix clarifies preparation, review, approval, and escalation authority.','DOLE publishes labor and employment resources relevant to Philippine workplaces.','Delegation works when authority is explicit, current, and matched to the task.']
  ,['philippines-payroll-control-library','Philippines payroll control library','A reusable way to catalog payroll controls, evidence, owners, and review frequency.','The Philippine Development Plan 2023–2028 organizes priorities through indicators and monitoring.','A control library turns scattered operating knowledge into a reviewable system.']
  ,['philippines-payroll-source-validation','Philippines payroll source validation','A research-led method for checking payroll source records before preparation begins.','The Data Privacy Act requires appropriate safeguards for personal information processing.','Source validation prevents downstream corrections by making completeness and authority visible at intake.']
  ,['philippines-payroll-approval-evidence','Philippines payroll approval evidence','How to make payroll approval evidence complete, dated, and easy to review.','The National Privacy Commission publishes guidance for organizations handling personal information.','Approval evidence is strongest when it links the decision, source, reviewer, and timestamp.']
  ,['philippines-payroll-offcycle-controls','Philippines payroll off-cycle controls','A controlled workflow for preparing and reviewing off-cycle payroll requests.','BIR publishes official tax resources for Philippine taxpayers and organizations.','Off-cycle work needs a separate reason, owner, review path, and reconciliation to the regular cycle.']
  ,['philippines-payroll-queue-prioritization','Philippines payroll queue prioritization','A practical research framework for ranking payroll work by deadline, risk, and dependency.','PSA labor-force statistics provide national context for Philippine employment planning.','Queue priority should reflect deadline and control risk, not just message arrival order.']
  ,['philippines-payroll-reconciliation-evidence','Philippines payroll reconciliation evidence','How to document the evidence behind payroll reconciliation results and exceptions.','BSP publishes national payment-system measurement and oversight resources.','A reconciliation result is reviewable when its population, comparison, variance, and owner are explicit.']
  ,['philippines-payroll-access-expiry','Philippines payroll access expiry','A source-informed control pattern for expiring temporary payroll access on time.','The National Privacy Commission addresses organizational and technical security measures.','Temporary access should have an owner, end date, removal proof, and a path for approved extension.']
  ,['philippines-payroll-approval-substitution','Philippines payroll approval substitution','How to manage backup payroll approvers without weakening accountability.','DOLE publishes labor and employment resources relevant to Philippine workplaces.','A substitute approver needs current authority, documented scope, and the same evidence standard as the primary owner.']
  ,['philippines-payroll-input-aging','Philippines payroll input aging','A research-led way to surface payroll inputs that are waiting too long for resolution.','The Philippine Development Plan 2023–2028 publishes national planning indicators.','Input age is an early warning signal that gives owners time to resolve gaps before cutoff.']
  ,['philippines-payroll-cycle-retrospective','Philippines payroll cycle retrospective','A repeatable retrospective for improving payroll routines after each completed cycle.','The International Labour Organization provides labor and employment research for the Philippines.','A useful retrospective turns exceptions and late work into one owned improvement for the next cycle.']
  ,['philippines-payroll-handoff-confidence','Philippines payroll handoff confidence','A research-informed way to assess whether a payroll handoff is ready for owner review.','The Philippine Development Plan 2023–2028 uses indicators to track national priorities.','Handoff confidence comes from complete evidence, clear ownership, and an explicit unresolved-work list.']
  ,['philippines-payroll-cutoff-coverage','Philippines payroll cutoff coverage','A research-led way to measure whether each payroll cutoff has complete owner and backup coverage.','DOLE publishes labor and employment resources relevant to Philippine workplaces.','Cutoff coverage is strongest when every critical step has a named owner, backup, and evidence location.']
  ,['philippines-payroll-employee-master-data','Philippines payroll employee master data','A control framework for reviewing employee master-data changes before they affect payroll.','The National Privacy Commission publishes guidance for organizations handling personal information.','Master-data changes need a source, reviewer, effective date, and traceable approval.']
  ,['philippines-payroll-overtime-review','Philippines payroll overtime review','How to route overtime records through evidence checks and responsible approval.','DOLE publishes official Philippine labor resources and advisories.','Overtime review is clearer when the hours, reason, approver, and pay-period impact are visible together.']
  ,['philippines-payroll-leave-balance-controls','Philippines payroll leave balance controls','A practical research brief for checking leave balances and adjustments before payroll close.','The International Labour Organization provides labor and employment research for the Philippines.','Leave adjustments should connect the request, balance calculation, reviewer, and effective period.']
  ,['philippines-payroll-tax-form-checklist','Philippines payroll tax form checklist','An evidence-first checklist for routing payroll tax-form preparation and review.','The Bureau of Internal Revenue publishes official Philippine tax resources.','Tax-form work needs a source record, preparation owner, reviewer, and explicit exception path.']
  ,['philippines-payroll-payment-confirmation','Philippines payroll payment confirmation','How to document payment confirmation without confusing release authority with settlement evidence.','BSP publishes national payment-system measurement and oversight resources.','Payment confirmation is a separate evidence step that should identify the file, date, result, and owner.']
  ,['philippines-payroll-employee-query-triage','Philippines payroll employee query triage','A research-informed triage model for routing payroll questions by urgency and evidence.','The Philippine Development Plan 2023–2028 organizes priorities through indicators and monitoring.','Query triage works when urgency, confidentiality, owner, and promised next action are explicit.']
  ,['philippines-payroll-backup-evidence','Philippines payroll backup evidence','A compact model for checking whether payroll records can be restored and reviewed when needed.','DICT publishes national digital-policy and infrastructure resources relevant to continuity planning.','Backup evidence should show scope, date, owner, restore test, and unresolved limitation.']
  ,['philippines-payroll-period-lock','Philippines payroll period lock','How to use a documented period lock to protect reviewed payroll results from silent changes.','The Data Privacy Act establishes obligations for organizations processing personal information.','A period lock needs a clear trigger, authorized override, reason, and post-change review.']
  ,['philippines-payroll-approval-routing','Philippines payroll approval routing','A practical routing pattern for sending payroll decisions to the right reviewer at the right time.','PSA labor-force statistics provide national context for Philippine employment planning.','Approval routing should use current ownership data and make stalled decisions visible early.']
  ,['philippines-payroll-reconciliation-aging','Philippines payroll reconciliation aging','A research-led method for surfacing reconciliations that remain unresolved too long.','BSP publishes national payment-system measurement and oversight resources.','Reconciliation age becomes actionable when each open item has a reason, owner, deadline, and escalation rule.']
  ,['philippines-payroll-data-quality-scorecard','Philippines payroll data quality scorecard','A scorecard for measuring payroll input completeness, timeliness, and correction effort.','The Philippine Development Plan 2023–2028 uses indicators to track national priorities.','A useful scorecard connects data-quality measures to owners and specific corrective actions.']
  ,['philippines-payroll-policy-exception-review','Philippines payroll policy exception review','How to review payroll exceptions against documented policy without turning policy into an automatic decision.','The Official Gazette publishes laws and issuances of the Republic of the Philippines.','Policy exceptions need a cited rule, business context, approving authority, and expiry or follow-up date.']
  ,['philippines-payroll-adjustment-evidence','Philippines payroll adjustment evidence','A research-informed record pattern for reviewing payroll adjustments before they enter a final result.','BIR publishes official tax resources for Philippine taxpayers and organizations.','An adjustment is reviewable when its reason, source, calculation, approver, and effective period are connected.']
  ,['philippines-payroll-cutoff-communication','Philippines payroll cutoff communication','A research-led framework for communicating payroll cutoffs, ownership, and unresolved decisions.','DOLE publishes labor and employment resources relevant to Philippine workplaces.','Cutoff communication works when every message names the deadline, owner, decision, and next evidence.']
  ,['philippines-payroll-approval-delegation','Philippines payroll approval delegation','How to document temporary payroll approval delegation without losing accountability.','The National Privacy Commission publishes guidance for organizations handling personal information.','Delegated approval should be time-bound, scoped, and recorded with the same evidence as routine approval.']
  ,['philippines-payroll-input-receipt','Philippines payroll input receipt controls','A practical research brief for confirming that payroll inputs arrived complete and from an approved source.','PSA labor-force statistics provide national context for Philippine employment planning.','Input receipt becomes dependable when the source, timestamp, completeness check, and owner are visible.']
  ,['philippines-payroll-variance-investigation','Philippines payroll variance investigation','A controlled method for investigating payroll variances before they become unexplained corrections.','BIR publishes official tax resources for Philippine taxpayers and organizations.','Variance investigation should connect the observed movement to source data, reviewer judgment, and corrective action.']
  ,['philippines-payroll-reporting-calendar','Philippines payroll reporting calendar','How to align payroll reporting dates, source ownership, and review windows across a recurring cycle.','The Philippine Development Plan 2023–2028 publishes national planning indicators.','A reporting calendar is useful when each report has a purpose, source, reviewer, and escalation date.']
  ,['philippines-payroll-sensitive-file-transfer','Philippines payroll sensitive file transfer','Evidence-first controls for transferring sensitive payroll files to an approved recipient.','The Data Privacy Act requires appropriate safeguards for personal information processing.','A sensitive transfer needs recipient verification, minimum necessary data, delivery evidence, and a defined retention point.']
  ,['philippines-payroll-rework-analysis','Philippines payroll rework analysis','A research-informed way to classify and reduce recurring payroll rework.','The International Labour Organization provides labor and employment research for the Philippines.','Rework analysis is actionable when each repeat issue has a category, source cause, owner, and prevention step.']
  ,['philippines-payroll-final-review-pack','Philippines payroll final review pack','How to assemble a concise final review pack for payroll approval and exception decisions.','The National Privacy Commission publishes guidance for organizations processing personal information.','A final review pack should show scope, source population, changes, exceptions, reconciliation, and approval authority.']
  ,['philippines-payroll-queue-handoff','Philippines payroll queue handoff','A repeatable handoff pattern for moving an open payroll queue between owners.','DICT publishes national digital-policy and infrastructure resources relevant to continuity planning.','Queue handoff is safe when open items retain their source, status, owner, deadline, and stop rule.']
  ,['philippines-payroll-access-exception','Philippines payroll access exception','A controlled review model for temporary payroll access exceptions and their expiry.','The National Privacy Commission addresses organizational and technical security measures.','An access exception should state the reason, scope, approver, end date, and removal evidence.']
  ,['philippines-payroll-cycle-readiness','Philippines payroll cycle readiness','A source-informed readiness review for confirming a payroll cycle can begin safely.','The Philippine Development Plan 2023–2028 uses indicators to track national priorities.','Cycle readiness is a decision supported by complete inputs, available reviewers, known risks, and a dated go/no-go owner.']
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
  slug,title,excerpt,published:index >= 35 ? '2026-08-10' : index >= 21 ? '2026-08-09' : '2026-08-07',stat,
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
