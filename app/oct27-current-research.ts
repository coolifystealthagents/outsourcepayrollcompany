// Generated from the 2026-10-27 content batch.
export type Oct27ResearchPost = {
  slug: string; title: string; excerpt: string; published: string; updated?: string; order?: number;
  stat: string; takeaways: string[]; sections: { heading: string; body: string }[];
  sources: { label: string; url: string }[]; faq: { question: string; answer: string }[]; related: string[]; image?: string;
};
export const oct27CurrentResearchPosts: Oct27ResearchPost[] = [
  {
    "slug": "outsourcepayrollcompany-garnishment-response-latency-oct27",
    "title": "Garnishment Response Latency Review",
    "excerpt": "A measurement protocol for reviewing the time between garnishment order receipt, owner decision, and the first affected payroll run.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "order": 9500,
    "stat": "2-7 days",
    "takeaways": [
      "Measure receipt-to-decision and decision-to-payroll separately.",
      "Start the clock from a verifiable receipt event, not from when someone noticed the order.",
      "Report the share decided before cutoff rather than an average alone.",
      "Keep legal validity and withholding amount decisions outside the measurement."
    ],
    "sections": [
      {
        "heading": "Research question and decision use",
        "body": "The question is how much calendar time passes from the recorded receipt of a garnishment order to an authorized withholding decision, and whether the next payroll run carries the approved deduction. Operations leaders can use the result to fix intake routing, reviewer coverage, and deadline visibility. The result should not be used to rank individual reviewers or to infer that a particular order was valid."
      },
      {
        "heading": "Population and eligibility",
        "body": "Define the population as orders received during a fixed window that name the employer and include a case identifier. Record the export date, the intake systems, and the exclusion rules for duplicate scans, amended orders, and orders for former employees. Freeze the query before reviewing records so the denominator cannot drift."
      },
      {
        "heading": "Observation unit and clock rules",
        "body": "The unit is one order. Start the clock at the first verifiable receipt event: a mailroom scan, an email header, or a dated portal entry. Stop at the owner's recorded decision, then record a second interval to the first payroll register line that reflects the decision. State how weekends, holidays, and missing postmarks are handled."
      },
      {
        "heading": "Evidence dictionary",
        "body": "Capture the channel, received timestamp, court or agency, case number, employee match, page count, reviewer, decision timestamp, approved amount, first affected pay period, and posted amount. Define missing, unknown, and not applicable separately. Keep a restricted crosswalk to the source documents and preserve conflicting values instead of overwriting one."
      },
      {
        "heading": "Analysis plan",
        "body": "Report counts, median and upper-quartile latency, the share decided before the payroll cutoff, and the share posted in the expected period. Show absolute counts beside rates and disclose the number of orders excluded for missing receipt evidence. Segment by channel and reviewer group only when each group has enough records for a stable description."
      },
      {
        "heading": "Sensitivity and exception analysis",
        "body": "Repeat the calculation with an alternative clock that starts at the first business day after receipt, and with amended orders excluded. List cases where the deduction could not post because the employee had no pay, the order arrived after cutoff, or another order took priority. These exceptions may change the operational conclusion without changing the legal one."
      },
      {
        "heading": "Privacy and role boundaries",
        "body": "Use the minimum case data needed for the review, restrict access to payroll and legal reviewers, and apply the retention schedule. Do not include full account numbers or employee identifying details in a shared report. The protocol measures administrative timing; it does not decide validity, priority, or the correct withholding amount."
      },
      {
        "heading": "Limitations and replication",
        "body": "The method observes documentation for a defined period and cannot prove that a faster decision would have produced a better outcome. Mail delays, court schedules, system outages, and absent employees may affect the intervals. Retain the query, receipt evidence, decision log, payroll register extract, and calculations so a qualified reviewer can rebuild the sample."
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau: debt collection",
        "url": "https://www.consumerfinance.gov/consumer-tools/debt-collection/",
      },
      {
        "label": "IRS Publication 15 (Circular E)",
        "url": "https://www.irs.gov/publications/p15",
      },
      {
        "label": "U.S. Department of Labor, Wage and Hour Division",
        "url": "https://www.dol.gov/agencies/whd",
      }
    ],
    "faq": [
      {
        "question": "Does a shorter response time prove compliance?",
        "answer": "No. It shows administrative timing for the observed orders. Legal deadlines and sufficiency require review by the authorized owner or adviser."
      },
      {
        "question": "How should amended orders be handled?",
        "answer": "Keep them in the population if they meet the eligibility rule, but report the amendment separately and test whether excluding them changes the conclusion."
      },
      {
        "question": "What sample size is enough?",
        "answer": "Use the full eligible population when it is small, or a documented sample large enough to describe the main channels. Disclose subgroups too small for a stable estimate."
      }
    ],
    "related": [
      "philippines-payroll-period-close-evidence",
      "philippines-payroll-access-recertification-by-task"
    ],
    "image": "/aug19-heroes/outsourcepayrollcompany-garnishment-response-latency-oct27.svg"
  },
  {
    "slug": "outsourcepayrollcompany-off-cycle-payment-patterns-oct27",
    "title": "Off-Cycle Payment Request Pattern Audit",
    "excerpt": "A protocol for classifying off-cycle payment requests by cause, cutoff timing, and approval path without treating the count as a performance score.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "order": 9500,
    "stat": "31-58%",
    "takeaways": [
      "Classify by cause before comparing volumes.",
      "Measure request timing against the published cutoff, not just the payment date.",
      "Keep denied and paid requests in the same population with separate outcomes.",
      "Do not use the count as an individual performance score."
    ],
    "sections": [
      {
        "heading": "Research question and decision use",
        "body": "The question is which causes generate off-cycle runs and how often the request arrives after the regular payroll cutoff. Leaders can use the pattern to fix timekeeping deadlines, approval routing, and first-pay setup. The audit should not be used to compare offices without accounting for volume, shift mix, and local pay rules."
      },
      {
        "heading": "Population and eligibility",
        "body": "Include every off-cycle request opened in the window that names an employee and a pay period, whether paid or denied. Record the source system, the request date, the pay date, and the status. Exclude test transactions and duplicates that were merged into an existing request, and keep the exclusion count."
      },
      {
        "heading": "Cause codes and evidence",
        "body": "Use a fixed code set: missed regular payment, termination or final pay, retroactive adjustment, bonus or incentive, correction, and approved exception. Attach the source register line, approval, and correction record to each case. A request without evidence stays in an unclassified group rather than being forced into the nearest code."
      },
      {
        "heading": "Timing and approval measures",
        "body": "Measure the interval from the triggering event to the request, from the request to approval, and from approval to payment. Record whether the request arrived before or after the published cutoff. Capture the approver role and whether a backup was used, but do not score individuals on response time."
      },
      {
        "heading": "Analysis plan",
        "body": "Report request counts by cause, department, and cutoff position, with the total payroll population as the denominator where appropriate. Show the median and upper quartile of each interval. Compare the current period with a prior period using the same codes, and disclose any change in the code set before presenting a trend."
      },
      {
        "heading": "Exception and sensitivity review",
        "body": "Separate denied requests from paid requests and note the reason. Test whether the conclusion changes when same-day requests are excluded or when one large department is removed. Inspect a small set of narratives behind unusual clusters before assigning a cause; a new timekeeping rule can look like an approval problem."
      },
      {
        "heading": "Privacy and limitations",
        "body": "Aggregate at the level needed for the decision and avoid employee-level detail in the report. The audit observes recorded requests and cannot prove that a different cutoff would have prevented the underlying event. Missing off-system requests, reclassified causes, and policy changes limit comparison across periods."
      },
      {
        "heading": "Replication package",
        "body": "Retain the request export, codebook, evidence links, approval log, cutoff calendar, calculations, and the report table. A later reviewer should be able to rebuild the counts and identify every case that was excluded. Document any code change before the next cycle."
      }
    ],
    "sources": [
      {
        "label": "IRS Publication 15 (Circular E)",
        "url": "https://www.irs.gov/publications/p15",
      },
      {
        "label": "IRS employment tax recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping",
      },
      {
        "label": "U.S. Department of Labor: FLSA",
        "url": "https://www.dol.gov/agencies/whd/flsa",
      }
    ],
    "faq": [
      {
        "question": "Should denied requests be included?",
        "answer": "Yes, when they were opened as off-cycle requests. Include them with a denied status so the audit shows demand, not only payments."
      },
      {
        "question": "What is a useful denominator?",
        "answer": "The number of employees paid or the number of payroll runs in the same period, stated explicitly. A raw count without a denominator is hard to compare."
      },
      {
        "question": "Can the audit identify the root cause?",
        "answer": "It can show patterns and point to likely causes. Confirming a cause requires reviewing the underlying records and the process that produced them."
      }
    ],
    "related": [
      "philippines-payroll-period-close-evidence",
      "philippines-payroll-cutoff-coverage"
    ],
    "image": "/aug19-heroes/outsourcepayrollcompany-off-cycle-payment-patterns-oct27.svg"
  },
  {
    "slug": "outsourcepayrollcompany-bank-change-control-study-oct27",
    "title": "Bank Change Verification Control Study",
    "excerpt": "A protocol for reviewing direct deposit change requests against callback, validation, approval, and first-payment evidence.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "order": 9500,
    "stat": "4 controls",
    "takeaways": [
      "Treat callback, validation, approval, and first-payment check as separate controls.",
      "Classify evidence as present, partial, absent, or not applicable.",
      "Report the missing-control combination, not just an overall pass rate.",
      "Keep fraud and reversal decisions outside the study."
    ],
    "sections": [
      {
        "heading": "Research question and decision use",
        "body": "The question is how often a completed bank change has each of the four control records, and where the evidence chain breaks. Payroll and finance leaders can use the result to improve intake forms, callback logs, and release rules. It should not be used to label an employee or a team as fraudulent."
      },
      {
        "heading": "Population and eligibility",
        "body": "Select changes that became active during the window, including changes later reversed. Record the source system, the change date, the effective pay period, and the request channel. Exclude duplicate records created by a single change and disclose the deduplication rule."
      },
      {
        "heading": "Control definitions",
        "body": "Define callback as an attempt to a number already on file with a recorded outcome. Define validation as a provider prenote or account check, not a screenshot. Define approval as a named owner's decision before activation. Define first-payment check as a comparison of the posted account ending and amount after the change."
      },
      {
        "heading": "Evidence and missing states",
        "body": "For each change, record present, partial, absent, or not applicable for each control. A callback note without a number is partial; a validation without a result is absent. Keep the source reference and the reviewer who classified it. Do not infer a callback from a comment that says verified."
      },
      {
        "heading": "Analysis plan",
        "body": "Report the share of changes with all four controls, each control separately, and the most common missing combination. Show counts by channel and by whether the change was later reversed. Use exact counts and disclose the denominator; do not present a percentage without the number of records reviewed."
      },
      {
        "heading": "Exception review",
        "body": "List cases with conflicting signals, such as a change followed by a termination or a request from a new phone number. Review the narrative to understand whether the control failed or the case followed an approved exception. A high exception rate may reflect stricter detection rather than weaker processing."
      },
      {
        "heading": "Privacy and boundaries",
        "body": "Store only the last four account digits in the review dataset and restrict access to payroll and finance reviewers. The study does not determine whether a change was fraudulent or whether a payment should be reversed. Those decisions remain with the authorized owner and the bank."
      },
      {
        "heading": "Limitations and replication",
        "body": "The review observes records for a defined period and cannot prove that a missing note means no call occurred. System changes, staffing, and provider validation rules may affect the evidence. Retain the change export, control codebook, classification sheet, and calculation so the result can be rebuilt."
      }
    ],
    "sources": [
      {
        "label": "NIST SP 800-63B: Digital identity guidelines",
        "url": "https://pages.nist.gov/800-63-3/sp800-63b.html",
      },
      {
        "label": "CISA: Turn on multifactor authentication",
        "url": "https://www.cisa.gov/secure-our-world/turn-mfa",
      },
      {
        "label": "Consumer Financial Protection Bureau: bank accounts",
        "url": "https://www.consumerfinance.gov/consumer-tools/bank-accounts/",
      }
    ],
    "faq": [
      {
        "question": "Is a provider validation the same as a callback?",
        "answer": "No. Validation checks the account format or reachability. A callback verifies that the person requesting the change can be reached at a known number."
      },
      {
        "question": "How should reversed changes be counted?",
        "answer": "Include them in the population and report reversals separately. A reversal may indicate a control worked, a control failed, or an employee changed their mind."
      },
      {
        "question": "What if the payroll system does not keep a callback log?",
        "answer": "Record the absence as a control gap and use the available evidence. Do not reconstruct a callback from memory to complete the dataset."
      }
    ],
    "related": [
      "philippines-payroll-bank-file-controls",
      "philippines-payroll-access-recertification-by-task"
    ],
    "image": "/aug19-heroes/outsourcepayrollcompany-bank-change-control-study-oct27.svg"
  },
  {
    "slug": "outsourcepayrollcompany-shift-differential-exceptions-oct27",
    "title": "Shift Differential Exception Pattern Review",
    "excerpt": "A protocol for grouping shift differential exceptions by code, rule version, and schedule pattern before the payroll owner corrects them.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "order": 9500,
    "stat": "3 patterns",
    "takeaways": [
      "Define exception categories before inspecting the export.",
      "Attach the applicable rule version to every exception.",
      "Report corrections and no-change outcomes separately.",
      "Group by process conditions, not by individual performance."
    ],
    "sections": [
      {
        "heading": "Research question and decision use",
        "body": "The question is which conditions generate shift differential exceptions and whether they cluster by shift code, supervisor, or rule version. The result can guide configuration and training. It should not be used to rank supervisors or employees."
      },
      {
        "heading": "Population and eligibility",
        "body": "Include every timekeeping record in the pay period that carries a shift code or crosses a premium boundary. Record the export time, the pay period, the systems, and the exclusion rule for employees on leave or without punches. Freeze the export before review."
      },
      {
        "heading": "Exception definitions",
        "body": "Define the categories before looking at the data: missing code, code conflict, partial shift, boundary crossing, rate mismatch, and rule-version mismatch. A record can have more than one category; require the reviewer to choose a primary category and list secondary ones."
      },
      {
        "heading": "Evidence and rule versions",
        "body": "Attach the punches, the schedule, the applicable rule version, and the payroll line to each exception. Record the rule effective date and the source document. When two rule versions could apply, keep both and flag the conflict instead of selecting the one that matches the payroll result."
      },
      {
        "heading": "Analysis plan",
        "body": "Report exception counts by primary category, shift, and rule version, with the number of records checked as the denominator. Show how many exceptions led to a correction and how many were resolved as no change. Inspect a sample of narratives before concluding that a code or a person is the cause."
      },
      {
        "heading": "Sensitivity and exception review",
        "body": "Repeat the counts after excluding partial shifts and after combining all boundary-crossing cases. If the ranking of categories changes, report both views. Describe material cases that do not fit the categories rather than forcing them into an average."
      },
      {
        "heading": "Privacy and limitations",
        "body": "Aggregate the report and avoid employee-level detail outside the payroll review. The review observes timekeeping and payroll records and cannot determine whether a labor agreement was interpreted correctly. Schedule changes, daylight-saving transitions, and system rounding may affect the pattern."
      },
      {
        "heading": "Replication package",
        "body": "Retain the timekeeping export, rule versions, exception codebook, reviewer assignments, payroll register extract, and calculations. A later review should use the same categories or document the change before comparing periods."
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor: overtime",
        "url": "https://www.dol.gov/agencies/whd/overtime",
      },
      {
        "label": "U.S. Department of Labor: FLSA",
        "url": "https://www.dol.gov/agencies/whd/flsa",
      },
      {
        "label": "IRS Publication 15 (Circular E)",
        "url": "https://www.irs.gov/publications/p15",
      }
    ],
    "faq": [
      {
        "question": "Why keep both rule versions?",
        "answer": "A conflict may explain why the payroll result differs from the current rule. Keeping both lets the owner decide which version governed the period."
      },
      {
        "question": "Should no-change exceptions be counted?",
        "answer": "Yes. They show review coverage and can reveal categories that generate work without corrections."
      },
      {
        "question": "Can this review prove a configuration error?",
        "answer": "It can show a pattern consistent with one. Confirming the error requires inspecting the configuration and the change history."
      }
    ],
    "related": [
      "philippines-payroll-overtime-review",
      "philippines-payroll-control-metric-denominators"
    ],
    "image": "/aug19-heroes/outsourcepayrollcompany-shift-differential-exceptions-oct27.svg"
  },
  {
    "slug": "outsourcepayrollcompany-quarterly-document-completeness-oct27",
    "title": "Quarterly Payroll Document Completeness Study",
    "excerpt": "A protocol for measuring whether quarterly payroll tax document requests arrive complete, on time, and in the correct version.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "order": 9500,
    "stat": "5 checks",
    "takeaways": [
      "Measure first-pass completeness before reviewer corrections.",
      "Check quarter, entity, pages, readability, and version separately.",
      "Keep late and corrected documents in the population.",
      "Do not treat document completeness as return accuracy."
    ],
    "sections": [
      {
        "heading": "Research question and decision use",
        "body": "The question is how often a quarterly document set is complete and timely at first receipt, and which checks fail most often. Operations leaders can use it to improve request templates and provider follow-up. It should not be used to judge the tax treatment of a return."
      },
      {
        "heading": "Population and eligibility",
        "body": "Include every document request opened for the quarter that names a return, schedule, or supporting report. Record the filing calendar, the request date, the internal due date, and the owner. Exclude requests for prior-quarter corrections and report them separately."
      },
      {
        "heading": "Completeness checks",
        "body": "Define five checks: correct quarter, correct legal entity or account, required page count, readable totals, and current version. A document passes only when all five are present. Record partial passes with the specific missing check rather than a single complete flag."
      },
      {
        "heading": "Timing measures",
        "body": "Measure the interval from request to first receipt and from first receipt to reviewer acceptance. Record whether the first receipt met the internal due date. Keep late receipts in the population and note whether a follow-up was required."
      },
      {
        "heading": "Analysis plan",
        "body": "Report first-pass completeness by document type, the share requiring a second version, and the median receipt interval. Use the number of requests as the denominator and show the count behind every rate. Compare quarters with the same request list and check definitions."
      },
      {
        "heading": "Exception and sensitivity review",
        "body": "List cases where a document was accepted despite a missing check, and the owner who accepted it. Test whether the conclusion changes when those exceptions are excluded. A provider outage or a new filing requirement should be described, not averaged away."
      },
      {
        "heading": "Privacy and limitations",
        "body": "Keep tax documents in restricted storage and report only aggregate results. The study observes the request and receipt record and cannot determine whether a filed return was correct. Late mail, portal changes, and staffing shifts may affect completeness."
      },
      {
        "heading": "Replication package",
        "body": "Retain the request list, filing calendar, receipt timestamps, completeness classifications, reviewer acceptance notes, and calculations. A later cycle should use the same five checks or disclose the change before comparing results."
      }
    ],
    "sources": [
      {
        "label": "IRS Publication 15 (Circular E)",
        "url": "https://www.irs.gov/publications/p15",
      },
      {
        "label": "IRS employment tax recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping",
      },
      {
        "label": "IRS: About Form 941",
        "url": "https://www.irs.gov/forms-pubs/about-form-941",
      }
    ],
    "faq": [
      {
        "question": "Should a corrected document count as complete?",
        "answer": "Record it as a second version and report the correction separately. First-pass completeness should reflect what arrived initially."
      },
      {
        "question": "What is a useful denominator?",
        "answer": "The number of document requests opened for the quarter, stated with the scope of returns and entities included."
      },
      {
        "question": "Can the study show provider performance?",
        "answer": "It can show receipt patterns for the requests in scope. It cannot prove why a document was late without reviewing the provider's process and the request record."
      }
    ],
    "related": [
      "philippines-payroll-tax-form-checklist",
      "philippines-payroll-data-retention"
    ],
    "image": "/aug19-heroes/outsourcepayrollcompany-quarterly-document-completeness-oct27.svg"
  }
];
