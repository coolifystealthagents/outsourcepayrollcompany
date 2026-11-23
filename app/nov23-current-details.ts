// Generated from the 2026-11-23 content batch.
export const nov23CurrentBlogDetails = {
  "outsourcepayrollcompany-reconcile-a-payroll-advance-repayment-schedule-before-the-next-run": {
    "takeaways": [
      "Read the signed advance agreement before the first repayment is scheduled.",
      "Build the schedule from the agreement and the pay calendar, not a round number.",
      "Apply each repayment after mandatory withholdings and within the legal limit.",
      "Pause the schedule when pay, status, or work state changes.",
      "Reconcile the ledger to payroll each period and close the balance with evidence."
    ],
    "readinessRows": [
      {
        "area": "Agreement",
        "ready": "signed amount, schedule, and recovery rule are stored",
        "ownerCheck": "payroll owner confirms the terms"
      },
      {
        "area": "Schedule",
        "ready": "each expected deduction and the final date are listed",
        "ownerCheck": "reviewer checks the math"
      },
      {
        "area": "Deduction limit",
        "ready": "repayment fits after mandatory withholdings",
        "ownerCheck": "payroll checks the legal limit"
      },
      {
        "area": "Status change",
        "ready": "pay, leave, or entity change updates the schedule",
        "ownerCheck": "owner approves the new plan"
      },
      {
        "area": "Closure",
        "ready": "final repayment and zero balance are confirmed",
        "ownerCheck": "reviewer signs the closure"
      }
    ],
    "sections": [
      {
        "heading": "Read the signed advance agreement",
        "paragraphs": [
          "Read the signed advance agreement before the first repayment is scheduled. The agreement should state the amount, the repayment period, the deduction frequency, and any limit tied to the employee's pay. Record the date the employee signed it and the person who approved the advance. A verbal agreement or a chat message is not enough to support a payroll deduction.",
          "Check that the agreement describes what happens if the employee leaves before the balance is repaid. Some programs recover the remaining balance from final pay, and some do not. Record the rule and the state where the employee works. The payroll team should not invent a recovery method after the employee has gone."
        ],
        "checks": []
      },
      {
        "heading": "Build the repayment schedule",
        "paragraphs": [
          "Build the schedule from the agreement and the pay calendar rather than from a round number. Divide the balance across the stated number of pay periods and record the expected deduction for each one. If the employee is paid weekly and the agreement sets a monthly cap, convert the cap to the pay frequency. Record the conversion and the reviewer who checked it.",
          "Set a final repayment date and a final expected balance. A schedule that ends on an estimated date can leave a small balance open for months. Record the last deduction and the expected zero balance. The reviewer should compare the schedule with the agreement before the first run."
        ],
        "checks": []
      },
      {
        "heading": "Check the deduction each run",
        "paragraphs": [
          "Check each repayment against the schedule and the employee's remaining balance. A deduction that is larger than the agreement allows is a finding even if the employee asked for it. Record the gross pay, the required withholdings, and the net available. The repayment should be applied after the mandatory deductions and within any legal limit.",
          "Compare the payroll register with the advance ledger before release. Look for a missed repayment, a duplicate repayment, and a manual adjustment without a reference. Record the difference and the correction. A silent adjustment can make the ledger and the payroll disagree for months."
        ],
        "checks": []
      },
      {
        "heading": "Handle a pay or status change",
        "paragraphs": [
          "Pause the schedule when the employee's pay, status, or work state changes. A leave of absence, a reduction in hours, or a move to a new entity can change the amount that may be withheld. Record the change and the new schedule. The payroll team should not continue a deduction that the agreement no longer supports.",
          "Review the schedule when the employee gives notice. Final pay rules differ by state, and a recovery from final wages may need a written authorization. Record the decision and route it to the payroll owner. The support team prepares the evidence but does not decide the legal recovery."
        ],
        "checks": []
      },
      {
        "heading": "Keep the ledger and the payroll in step",
        "paragraphs": [
          "Keep one advance ledger with the employee, the original amount, the repayments, and the balance. Reconcile the ledger to the payroll register each period. Record the reviewer and the date. A ledger that is updated only at quarter end cannot catch a missed deduction in time.",
          "Store the agreement, the schedule, the payroll evidence, and the closing record together. Record the employee and the case reference without exposing bank details. A later reviewer should be able to rebuild the balance from the stored evidence. The record is the support for the deduction."
        ],
        "checks": []
      },
      {
        "heading": "Close the balance and review the program",
        "paragraphs": [
          "Close the advance when the final repayment is confirmed and the balance is zero. Send the employee a short statement that shows the original amount and the total repaid. Record the closing date and the reviewer. Do not keep a zero-balance case open in the active ledger.",
          "Review the advance program each quarter for missed deductions, early departures, and manual adjustments. A pattern in one department may point to a communication or approval gap. Record the finding and the change. The program should be simple enough for the employee to understand and for payroll to reconcile."
        ],
        "checks": []
      }
    ],
    "roleBrief": [
      "Prepare the agreement, schedule, and ledger evidence for owner review.",
      "Flag a missed, duplicate, or over-limit repayment before release.",
      "Maintain the change log and the source references for each adjustment.",
      "Prepare the correction for approval; do not approve your own work."
    ],
    "faqs": [
      {
        "question": "Who approves a payroll advance repayment?",
        "answer": "The client-side payroll owner approves the agreement and any change to the schedule. The support team prepares the ledger, checks the deduction, and flags exceptions."
      },
      {
        "question": "What if the employee wants a larger deduction?",
        "answer": "The deduction must still fit the agreement and the legal limit after mandatory withholdings. Record the request and have the owner approve any change in writing."
      },
      {
        "question": "When should the advance be reviewed?",
        "answer": "Every pay period for the balance, and each quarter for the program. Review again when pay, status, or work state changes."
      }
    ],
    "sources": [
      {
        "name": "IRS Publication 15 (Circular E)",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "IRS Publication 15-A",
        "url": "https://www.irs.gov/publications/p15a",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "DOL Wage and Hour Division, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "SSA, Employer Responsibilities",
        "url": "https://www.ssa.gov/employer/",
        "note": "Primary guidance used to frame the control."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/payroll-operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.irs.gov/publications/p15",
      "related": [
        "outsourcepayrollcompany-payroll-hsa-contribution-remittance-timeliness-review",
        "outsourcepayrollcompany-payroll-on-call-pay-eligibility-coverage-review",
        "outsourcepayrollcompany-payroll-relocation-expense-substantiation-review"
      ]
    }
  },
  "outsourcepayrollcompany-verify-a-commission-statement-before-payroll-release": {
    "takeaways": [
      "Start with the plan version that was in force for the period.",
      "Tie each commission line to a booking and a close date.",
      "Recalculate a sample that includes the largest and split lines.",
      "Confirm the plan owner approved the final statement.",
      "Hold a disputed line instead of paying it twice."
    ],
    "readinessRows": [
      {
        "area": "Plan",
        "ready": "the approved plan version and effective date are stored",
        "ownerCheck": "plan owner confirms the version"
      },
      {
        "area": "Bookings",
        "ready": "each line ties to a booking and close date",
        "ownerCheck": "sales ops approves the tie-out"
      },
      {
        "area": "Calculation",
        "ready": "rate, quota, split, and accelerator are recalculated",
        "ownerCheck": "reviewer checks a sample"
      },
      {
        "area": "Approval",
        "ready": "the final statement is signed by the plan owner",
        "ownerCheck": "payroll confirms the signature"
      },
      {
        "area": "Handoff",
        "ready": "total, employee, period, and cost center agree",
        "ownerCheck": "payroll owner reviews the register"
      }
    ],
    "sections": [
      {
        "heading": "Start with the approved plan",
        "paragraphs": [
          "Start with the commission plan that was in force for the period being paid. The plan should define the eligible roles, the booking rules, the rate table, and the payment date. Record the plan version and the date it was approved. A statement calculated under last quarter's plan is a finding, even if the total looks reasonable.",
          "Check that the employee was eligible for the plan during the period. A new hire, a transfer, or a role change can change the plan or the proration. Record the effective date and the approval. The payroll team should not apply a plan change retroactively without a written decision."
        ],
        "checks": []
      },
      {
        "heading": "Tie the statement to the bookings",
        "paragraphs": [
          "Tie each commission line to the bookings or revenue record that supports it. Record the deal identifier, the close date, and the amount used in the calculation. A statement that cannot be traced to a booking is a finding. The reviewer should test a sample that includes the largest lines.",
          "Check the period cutoff for bookings near the end of the month. A deal that closed after the cutoff may belong in the next cycle. Record the cutoff rule and any exception. Paying a booking twice or in the wrong period creates a correction that is hard to reverse."
        ],
        "checks": []
      },
      {
        "heading": "Recalculate the statement",
        "paragraphs": [
          "Recalculate a sample of lines from the plan and the booking data. Check the rate, the quota attainment, the split, and any accelerator. Record the calculation and the reviewer. A statement produced by a single spreadsheet should be checked against the plan, not accepted because it balances to last month.",
          "Check the split when more than one person worked the deal. The split should match the approved credit record, not an email sent after the close. Record the split and the approver. A disputed split should be held before payroll release rather than corrected after payment."
        ],
        "checks": []
      },
      {
        "heading": "Confirm the approval before payroll",
        "paragraphs": [
          "Confirm that the plan owner approved the statement before it reached payroll. Record the approver, the date, and the version approved. A statement that changed after approval needs a new approval. The payroll team should not accept a late change from someone who is not the plan owner.",
          "Compare the approved total with the payroll register and the cost center. Record the employee, the amount, and the period. A total that matches but is posted to the wrong cost center is still a finding. The handoff should carry the approval reference into the payroll record."
        ],
        "checks": []
      },
      {
        "heading": "Handle a dispute without a double payment",
        "paragraphs": [
          "Hold a disputed line and pay the undisputed portion. Record the reason, the owner, and the expected resolution date. Do not pay the full statement and plan a correction later unless the plan owner approves the risk. A double payment is harder to recover than a short delay.",
          "Tell the employee what was held and when the review will finish. Record the message and the contact. A clear explanation reduces the chance that the employee raises a second dispute with payroll. The case should close with a written outcome."
        ],
        "checks": []
      },
      {
        "heading": "Keep the evidence for the next cycle",
        "paragraphs": [
          "Store the plan, the statement, the booking support, the approval, and the payroll evidence together. Record the period and the reviewer. A later audit should be able to follow one line from the booking to the deposit. The record also makes the next statement easier to prepare.",
          "Review the commission process each quarter for late statements, manual overrides, and split disputes. A recurring issue may point to a plan or data problem rather than a payroll error. Record the finding and the owner. Fix one cause and measure the next cycle."
        ],
        "checks": []
      }
    ],
    "roleBrief": [
      "Prepare the statement, booking tie-out, and approval evidence for review.",
      "Flag a missing booking, a plan mismatch, or a split dispute before release.",
      "Maintain the version log and the payroll handoff reference.",
      "Prepare the correction for approval; do not approve your own work."
    ],
    "faqs": [
      {
        "question": "Who approves a commission statement?",
        "answer": "The plan owner approves the statement for the period. Payroll confirms that the approved version matches the register before release."
      },
      {
        "question": "What if a booking closes after the cutoff?",
        "answer": "Apply the written cutoff rule and record the exception. The plan owner decides whether the line belongs in the current or next cycle."
      },
      {
        "question": "How should a split dispute be handled?",
        "answer": "Hold the disputed line, pay the undisputed amount, and route the decision to the plan owner. Record the outcome and the correction."
      }
    ],
    "sources": [
      {
        "name": "IRS Publication 15 (Circular E)",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "IRS Publication 15-A",
        "url": "https://www.irs.gov/publications/p15a",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "DOL Wage and Hour Division, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "SSA, Employer Responsibilities",
        "url": "https://www.ssa.gov/employer/",
        "note": "Primary guidance used to frame the control."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/payroll-operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.irs.gov/publications/p15",
      "related": [
        "outsourcepayrollcompany-payroll-on-call-pay-eligibility-coverage-review",
        "outsourcepayrollcompany-payroll-relocation-expense-substantiation-review",
        "outsourcepayrollcompany-payroll-minimum-wage-change-implementation-review"
      ]
    }
  },
  "outsourcepayrollcompany-reconcile-union-dues-deductions-before-remittance": {
    "takeaways": [
      "Confirm the agreement and the member authorization before withholding.",
      "Build the deduction from the dues schedule and the membership category.",
      "Reconcile the union roster to the payroll deduction file.",
      "Remit to the correct local with a roster the union can match.",
      "Close every change or dispute with written evidence."
    ],
    "readinessRows": [
      {
        "area": "Agreement",
        "ready": "dues amount, frequency, and local are documented",
        "ownerCheck": "labor relations confirms the terms"
      },
      {
        "area": "Authorization",
        "ready": "the member authorization matches the current local",
        "ownerCheck": "payroll checks the signed form"
      },
      {
        "area": "Roster",
        "ready": "union and payroll member lists agree",
        "ownerCheck": "reviewer signs the reconciliation"
      },
      {
        "area": "Remittance",
        "ready": "amount, local, and reference match the withholding",
        "ownerCheck": "treasury confirms the payment"
      },
      {
        "area": "Change record",
        "ready": "start, stop, and dispute decisions are stored",
        "ownerCheck": "owner reviews the case"
      }
    ],
    "sections": [
      {
        "heading": "Confirm the agreement and the authorization",
        "paragraphs": [
          "Confirm the collective bargaining agreement and the employee's written authorization before withholding union dues. The agreement should state the dues amount, the frequency, and the remittance schedule. Record the effective date and the union local. A deduction without a valid authorization is a finding.",
          "Check whether the authorization covers the current dues rate and the current local. A member who changed jobs or locals may need a new authorization. Record the change and the date. The payroll team should not rely on a roster that was never reconciled to the authorization file."
        ],
        "checks": []
      },
      {
        "heading": "Build the deduction from the agreement",
        "paragraphs": [
          "Build the deduction from the dues schedule and the employee's membership category. Record the base amount, any initiation fee, and any voluntary assessment separately. A single total hides a fee that should have ended. The reviewer should be able to rebuild the deduction from the agreement.",
          "Check the timing for a new hire and for an employee who leaves the unit. A deduction that starts or stops in the wrong period creates a credit or a balance. Record the effective date and the payroll period. The union roster and the payroll roster should agree on the start and stop dates."
        ],
        "checks": []
      },
      {
        "heading": "Reconcile the roster",
        "paragraphs": [
          "Reconcile the union roster with the payroll deduction file before remittance. Count the members, the non-members, and the employees on leave. Record the differences and the reason. A roster that is larger than the deduction file may mean a missed member or a terminated employee.",
          "Check the employee identifiers rather than the names alone. A duplicate name or a changed name can hide a missed deduction. Record the match method and the exceptions. The reconciliation should be signed before the payment is released."
        ],
        "checks": []
      },
      {
        "heading": "Remit to the correct local",
        "paragraphs": [
          "Remit to the local and the account named in the agreement. Record the payment date, the amount, and the reference. A payment to the wrong local can leave the member with an unpaid balance. The remittance should include a roster the union can match to its own records.",
          "Reconcile the remittance to the withheld total after the payment clears. Record any difference and the correction. A remittance that is short by one member is easier to fix before the next cycle. Keep the bank confirmation with the payroll evidence."
        ],
        "checks": []
      },
      {
        "heading": "Handle a change or a dispute",
        "paragraphs": [
          "Handle a dues change, a revocation, or a dispute through a written case. Record the request, the effective date, and the approver. Do not stop a deduction on a verbal request unless the agreement allows it. The payroll team should route the legal question to the client's counsel.",
          "Tell the employee what changed and when the next deduction will reflect it. Record the message and the date. A clear explanation prevents a repeat dispute. The case should close with the corrected payroll evidence."
        ],
        "checks": []
      },
      {
        "heading": "Review the remittance cycle",
        "paragraphs": [
          "Review the dues cycle each quarter for late remittances, roster differences, and unauthorized deductions. A recurring gap may point to a stale authorization file or a late new-hire feed. Record the finding and the owner. The review should improve the next remittance.",
          "Store the agreement, the authorization, the roster, the remittance, and the reconciliation together. Record the period and the reviewer. A later audit should be able to follow one member from the authorization to the union payment. The record is the support for the deduction."
        ],
        "checks": []
      }
    ],
    "roleBrief": [
      "Prepare the authorization, roster, and remittance evidence for review.",
      "Flag a missing authorization, roster difference, or late payment.",
      "Maintain the change log and the union contact record.",
      "Prepare the correction for approval; do not approve your own work."
    ],
    "faqs": [
      {
        "question": "Can dues be deducted without a signed authorization?",
        "answer": "The agreement and the law determine the requirement, but a missing authorization is a finding for review. The client's counsel decides the legal position."
      },
      {
        "question": "How often should the roster be reconciled?",
        "answer": "Before each remittance, with a full reconciliation each quarter. Reconcile again after a new hire, a transfer, or a termination."
      },
      {
        "question": "What if the employee disputes a deduction?",
        "answer": "Open a written case, record the request and the effective date, and route the decision to the client's owner. Continue or stop the deduction only on written direction."
      }
    ],
    "sources": [
      {
        "name": "IRS Publication 15 (Circular E)",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "IRS Publication 15-A",
        "url": "https://www.irs.gov/publications/p15a",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "DOL Wage and Hour Division, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "SSA, Employer Responsibilities",
        "url": "https://www.ssa.gov/employer/",
        "note": "Primary guidance used to frame the control."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/payroll-operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.irs.gov/publications/p15",
      "related": [
        "outsourcepayrollcompany-payroll-relocation-expense-substantiation-review",
        "outsourcepayrollcompany-payroll-minimum-wage-change-implementation-review",
        "outsourcepayrollcompany-payroll-fsa-contribution-forfeiture-review"
      ]
    }
  },
  "outsourcepayrollcompany-prepare-a-payroll-response-to-a-records-request": {
    "takeaways": [
      "Verify the requester and the authority before searching.",
      "Define the employee, period, and record type in writing.",
      "Redact data the request does not require.",
      "Route the draft to the client's legal or compliance owner.",
      "Log the delivery and keep the response index."
    ],
    "readinessRows": [
      {
        "area": "Requester",
        "ready": "identity, organization, and authority are recorded",
        "ownerCheck": "legal owner confirms the request"
      },
      {
        "area": "Scope",
        "ready": "employees, periods, and record types are listed",
        "ownerCheck": "owner approves the scope"
      },
      {
        "area": "Redaction",
        "ready": "unneeded sensitive fields are removed",
        "ownerCheck": "reviewer checks the redactions"
      },
      {
        "area": "Response",
        "ready": "records are complete, legible, and indexed",
        "ownerCheck": "legal owner signs the response"
      },
      {
        "area": "Delivery",
        "ready": "secure method and confirmation are stored",
        "ownerCheck": "owner closes the case"
      }
    ],
    "sections": [
      {
        "heading": "Verify the requester and the authority",
        "paragraphs": [
          "Verify who sent the request and what authority supports it. Record the name, the organization, the date received, and the legal basis stated in the request. A request from a former employee is different from a subpoena or an agency inquiry. The payroll team should not release records until the authority is confirmed.",
          "Route the request to the client's legal or compliance owner before preparing a response. Record the owner and the response deadline. The support team can assemble records but does not decide what the law requires. A written instruction from the owner should define the scope."
        ],
        "checks": []
      },
      {
        "heading": "Define the scope and the period",
        "paragraphs": [
          "Write down the employees, the pay periods, and the record types the request covers. Separate what was asked from what the payroll team can produce. Record any gap and the reason. A response that includes extra employees or periods can create an unnecessary privacy exposure.",
          "Check the request for a date range, an employee identifier, and a record type. If any element is missing, ask the requester in writing before searching. Record the clarification and the date. The search should be repeatable from the written scope."
        ],
        "checks": []
      },
      {
        "heading": "Protect sensitive data",
        "paragraphs": [
          "Redact data that the request does not require, such as full bank accounts, Social Security numbers, and medical information. Record the redaction rule and the reviewer. A payroll record contains more personal data than the average business file. The response should expose only what the authority requires.",
          "Use a secure delivery method and a named recipient. Record the delivery date, the method, and the confirmation. Do not send payroll records through an unapproved personal email or a shared link that never expires. The delivery evidence is part of the response record."
        ],
        "checks": []
      },
      {
        "heading": "Assemble the records",
        "paragraphs": [
          "Assemble the payroll register, the pay statements, the tax records, and the supporting approvals for the defined period. Record the source system and the extraction date. A record pulled from a report may differ from the system of record. The reviewer should confirm the version before release.",
          "Check that the records are legible and complete for the period. A missing page or a truncated export can force a second response. Record the page count or the file hash. The review should catch the gap before the records leave the payroll team."
        ],
        "checks": []
      },
      {
        "heading": "Route the response for review",
        "paragraphs": [
          "Send the draft response to the legal or compliance owner with a short index. Record the reviewer, the date, and any change requested. The owner should approve the scope and the redactions. A response sent without review may disclose more than the client intended.",
          "Keep the final response, the index, the delivery evidence, and the approval together. Record the case reference and the deadline. A later reviewer should be able to see what was sent and why. The record also supports the next request for the same employee."
        ],
        "checks": []
      },
      {
        "heading": "Log and learn from the request",
        "paragraphs": [
          "Log the request type, the time to assemble, and the time to respond. A pattern of requests for the same record may point to a retention or access problem. Record the finding and the owner. The log should not include the sensitive content itself.",
          "Review the process each year with the client's legal owner. A change in the payroll system or the record format may require a new search method. Record the update and the training. The response process should be ready before the next request arrives."
        ],
        "checks": []
      }
    ],
    "roleBrief": [
      "Prepare the search, index, and redaction evidence for owner review.",
      "Flag a missing authority, scope gap, or delivery risk before release.",
      "Maintain the request log and the source system references.",
      "Prepare the response for approval; do not decide the legal scope."
    ],
    "faqs": [
      {
        "question": "Can payroll respond directly to a subpoena?",
        "answer": "Route it to the client's legal owner first. The support team can assemble records, but the legal owner decides the response and the scope."
      },
      {
        "question": "What should be redacted?",
        "answer": "Remove data the request does not require, such as full bank accounts, Social Security numbers, and medical details. The legal owner confirms the rule."
      },
      {
        "question": "How should the response be delivered?",
        "answer": "Use an approved secure method with a named recipient. Record the delivery date, the method, and the confirmation."
      }
    ],
    "sources": [
      {
        "name": "IRS Publication 15 (Circular E)",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "IRS Publication 15-A",
        "url": "https://www.irs.gov/publications/p15a",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "DOL Wage and Hour Division, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "SSA, Employer Responsibilities",
        "url": "https://www.ssa.gov/employer/",
        "note": "Primary guidance used to frame the control."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/payroll-operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.irs.gov/publications/p15",
      "related": [
        "outsourcepayrollcompany-payroll-minimum-wage-change-implementation-review",
        "outsourcepayrollcompany-payroll-fsa-contribution-forfeiture-review",
        "outsourcepayrollcompany-payroll-hsa-contribution-remittance-timeliness-review"
      ]
    }
  },
  "outsourcepayrollcompany-close-payroll-for-a-seasonal-shutdown": {
    "takeaways": [
      "Set the shutdown calendar with the final pay and restart dates.",
      "Decide the final pay, leave, and holiday treatment before the register.",
      "Reconcile benefit deductions and arrears for the shutdown period.",
      "Confirm the final filings and the account status.",
      "Keep a restart record so returning employees are not set up twice."
    ],
    "readinessRows": [
      {
        "area": "Calendar",
        "ready": "last workday, final pay, and restart dates are set",
        "ownerCheck": "client confirms the calendar"
      },
      {
        "area": "Final pay",
        "ready": "leave, holiday, and allowance treatment is approved",
        "ownerCheck": "payroll owner signs the rule"
      },
      {
        "area": "Benefits",
        "ready": "deductions and arrears are reconciled",
        "ownerCheck": "benefits owner confirms the choice"
      },
      {
        "area": "Filings",
        "ready": "returns and account status are current",
        "ownerCheck": "tax owner reviews the filing list"
      },
      {
        "area": "Restart",
        "ready": "roster, rates, and setup are ready for the first run",
        "ownerCheck": "payroll owner tests the restart"
      }
    ],
    "sections": [
      {
        "heading": "Set the shutdown calendar",
        "paragraphs": [
          "Set the shutdown calendar before the last regular payroll of the season. Record the final workday, the final pay date, and the restart date. Check the state final pay rule if the shutdown ends the employment relationship. A shutdown that is treated as a temporary layoff has a different payroll path from a permanent separation.",
          "Share the calendar with the client, the timekeeping owner, and the payroll provider. Record who confirmed each date. A provider cut-off that falls during the shutdown needs a backup plan. The calendar should show the owner for each step, not only the date."
        ],
        "checks": []
      },
      {
        "heading": "Decide the final pay and leave treatment",
        "paragraphs": [
          "Decide how accrued leave, holiday pay, and any shutdown allowance will be paid. Record the policy and the employee groups covered. A shutdown is not a uniform event across every client and state. The payroll owner should approve the treatment before the final register is built.",
          "Check the final pay timing for employees who will not return. Record the pay date and the method. A final paycheck that misses the state deadline can create a penalty. The support team should flag the case rather than guess the rule."
        ],
        "checks": []
      },
      {
        "heading": "Handle benefit deductions and arrears",
        "paragraphs": [
          "Check the benefit deductions for the shutdown period. A premium that continues while pay stops can create an arrears balance. Record the deduction, the arrears, and the owner. The client should decide whether to continue, suspend, or catch up the deduction.",
          "Reconcile the benefit carrier invoice with the final payroll deduction. Record the difference and the correction. A carrier that expects a premium after the last payroll needs a direct billing arrangement. The handoff should name the person who will manage it."
        ],
        "checks": []
      },
      {
        "heading": "Prepare the final filings",
        "paragraphs": [
          "Prepare the final tax filings and the year-to-date records for the shutdown period. Record the filing frequency and the next due date. A seasonal employer may still need to file a zero return. The payroll team should confirm the requirement with the client's tax owner.",
          "Check the state unemployment and local accounts for the shutdown. A closed account may need a final report or a notice. Record the status and the confirmation. The shutdown record should show which accounts remain open and who monitors them."
        ],
        "checks": []
      },
      {
        "heading": "Keep the restart record",
        "paragraphs": [
          "Keep the employee roster, the pay rates, the benefit elections, and the direct deposit records for the restart. Record what changed during the shutdown. A returning employee should not need to repeat every setup step. The restart record should be checked before the first new payroll.",
          "Confirm the restart date with the client and the provider. Record the first pay period and the cut-off. A provider that archived the account may need a reactivation request. The calendar should include the reactivation lead time."
        ],
        "checks": []
      },
      {
        "heading": "Communicate and close",
        "paragraphs": [
          "Send employees a short notice that states the final pay date, the restart date, and whom to contact. Record the message and the approval. A clear notice reduces the questions that arrive during the shutdown. The payroll team should not promise a date the client has not approved.",
          "Close the shutdown file with the calendar, the final register, the filings, the benefit record, and the restart checklist. Record the owner and the review date. A later reviewer should be able to see how the season ended and how the restart was prepared."
        ],
        "checks": []
      }
    ],
    "roleBrief": [
      "Prepare the shutdown calendar, final register, and restart checklist.",
      "Flag a final pay, benefit, or filing risk before the last run.",
      "Maintain the open-item log and the owner for each follow-up.",
      "Prepare the correction for approval; do not approve your own work."
    ],
    "faqs": [
      {
        "question": "Is a seasonal shutdown a termination?",
        "answer": "It depends on the client's intent, the employment terms, and the state rules. The payroll owner and counsel decide, and the payroll record should show the treatment chosen."
      },
      {
        "question": "What happens to benefit deductions during the shutdown?",
        "answer": "The client decides whether to continue, suspend, or catch up the deduction. Record the choice, the arrears, and the person managing the carrier."
      },
      {
        "question": "What should be ready before the restart?",
        "answer": "The roster, pay rates, benefit elections, direct deposit records, and provider access should be checked. Test the first pay period before the employees return."
      }
    ],
    "sources": [
      {
        "name": "IRS Publication 15 (Circular E)",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "IRS Publication 15-A",
        "url": "https://www.irs.gov/publications/p15a",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "DOL Wage and Hour Division, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "Primary guidance used to frame the control."
      },
      {
        "name": "SSA, Employer Responsibilities",
        "url": "https://www.ssa.gov/employer/",
        "note": "Primary guidance used to frame the control."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/payroll-operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.irs.gov/publications/p15",
      "related": [
        "outsourcepayrollcompany-payroll-fsa-contribution-forfeiture-review",
        "outsourcepayrollcompany-payroll-hsa-contribution-remittance-timeliness-review",
        "outsourcepayrollcompany-payroll-on-call-pay-eligibility-coverage-review"
      ]
    }
  }
};
