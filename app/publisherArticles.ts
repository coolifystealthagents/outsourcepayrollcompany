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
        { eyebrow: 'Next step', heading: 'Plan the first login and final sign-out', text: 'Use the onboarding guide to set examples, access limits, and removal checks for the assignment.', href: '/blog/outsource-payroll-company-onboarding-checklist', label: 'Read the onboarding checklist' },
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
