// Generated from the 2026-11-22 content batch.
export const nov22CurrentBlogDetails = {
  "outsourcepayrollcompany-reconcile-a-payroll-funding-transfer-before-the-pay-date": {
    "takeaways": [
      "Lock the payroll register before calculating the funding amount.",
      "Compare the funding request with the net pay, the taxes, and the fees separately.",
      "Confirm the bank debit cleared before the pay date, not after.",
      "Reconcile the employee deposits to the register on the pay date.",
      "Record any shortfall, the correction, and the owner."
    ],
    "readinessRows": [
      {
        "area": "Register locked",
        "ready": "payroll register approved after the final edit",
        "ownerCheck": "payroll owner signs the register"
      },
      {
        "area": "Funding amount",
        "ready": "net pay, taxes, and fees match the register",
        "ownerCheck": "reviewer recalculates the total"
      },
      {
        "area": "Bank debit",
        "ready": "debit scheduled and confirmed by the bank",
        "ownerCheck": "treasury checks the account"
      },
      {
        "area": "Employee deposits",
        "ready": "deposits reconcile to the register",
        "ownerCheck": "payroll owner reviews the exception list"
      },
      {
        "area": "Record",
        "ready": "funding, debit, and deposits are stored together",
        "ownerCheck": "owner files the reconciliation"
      }
    ],
    "sections": [
      {
        "heading": "Lock the register first",
        "paragraphs": [
          "A funding transfer calculated from an open payroll register will change when the register changes. Lock the register after the final edit and record the version or hash. Calculate the funding amount from that locked version. If an edit is required after the lock, recalculate the funding and record the reason. The bank should never receive a total that the payroll team cannot reproduce.",
          "Separate the pay groups if they have different pay dates or bank accounts. A single transfer that mixes groups can obscure a shortfall in one group. Record the group, the pay date, and the account. The reconciliation should show each group separately before the total."
        ],
        "checks": []
      },
      {
        "heading": "Build the funding amount from its parts",
        "paragraphs": [
          "Calculate the net pay, the employee taxes, the employer taxes, and the fees as separate lines. A total that is only compared with a prior period can hide a rate change or a new deduction. Record the source of each line and the person who prepared it. The reviewer should be able to recalculate the total from the parts.",
          "Check the tax deposit schedule against the pay date. A funding transfer that covers net pay but not the tax deposit can leave the client with a penalty. Record the deposit due date and the amount. If the tax is funded separately, say so and reconcile both accounts."
        ],
        "checks": []
      },
      {
        "heading": "Confirm the bank debit",
        "paragraphs": [
          "Confirm that the debit is scheduled for the correct account and amount before the pay date. A debit that clears late can delay employee deposits. Record the bank reference and the time of confirmation. If the debit fails, notify the client immediately and agree the alternative.",
          "Check the account balance and the available credit before the debit. A client with a sweep or a zero-balance account may need a manual transfer. Record the funding method and the contact who confirmed it. The payroll team should not assume the money is available because the request was sent."
        ],
        "checks": []
      },
      {
        "heading": "Reconcile the employee deposits",
        "paragraphs": [
          "On the pay date, compare the employee deposits with the register. Look for a missing deposit, a partial deposit, or a deposit to a closed account. Record each exception and the action taken. A deposit failure can become a compliance issue, so the follow-up should have a deadline.",
          "Check the tax deposits and the fee debits as well. A reconciliation that covers only employee pay can miss a failed tax transfer. Record the confirmation for each account. The payroll is complete when every movement matches the register."
        ],
        "checks": []
      },
      {
        "heading": "Record and review the reconciliation",
        "paragraphs": [
          "Store the locked register, the funding request, the bank confirmation, and the deposit reconciliation together. Record the date and the owner. A later reviewer should be able to follow the money from the register to the employee. The record is the evidence that the payroll was funded as intended.",
          "Review the exceptions each period and look for a pattern. A recurring shortfall in one client may indicate a timing or account issue. A recurring deposit failure may indicate bad employee data. Fix one cause and measure the next run."
        ],
        "checks": []
      }
    ],
    "roleBrief": "A Philippines-based payroll support specialist can prepare the reconciliation, maintain the evidence pack, and flag exceptions. Your payroll owner approves the calculation, the filing, and any correction.",
    "faqs": [
      {
        "question": "Who owns the final payroll decision?",
        "answer": "The client-side payroll owner approves the register, the funding, and any correction. The support team prepares the evidence and the exception list."
      },
      {
        "question": "What evidence should be kept?",
        "answer": "Keep the locked register, the bank confirmation, the reconciliation, and the exception record with the pay run."
      },
      {
        "question": "When should the control be reviewed?",
        "answer": "Review it after each close and each quarter, and whenever the bank, provider, or payroll system changes."
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
        "outsourcepayrollcompany-payroll-funding-reconciliation-timeliness-review",
        "outsourcepayrollcompany-direct-deposit-change-verification-coverage-review",
        "outsourcepayrollcompany-payroll-close-exception-aging-review"
      ]
    }
  },
  "outsourcepayrollcompany-review-a-garnishment-withholding-order-for-a-remote-employee": {
    "takeaways": [
      "Log the order on the day it arrives and verify the issuing court or agency.",
      "Confirm the employee, the employer, and the work state before calculating.",
      "Apply the correct disposable earnings limit and the order priority.",
      "Send the required notices and record the date.",
      "Reconcile the withheld amount to the remittance each pay period."
    ],
    "readinessRows": [
      {
        "area": "Order logged",
        "ready": "order, envelope, and date received are stored",
        "ownerCheck": "payroll owner stamps the receipt"
      },
      {
        "area": "Validity",
        "ready": "issuing authority and case number verified",
        "ownerCheck": "compliance reviews the order"
      },
      {
        "area": "Employee match",
        "ready": "name, address, and SSN match the payroll record",
        "ownerCheck": "payroll compares the identifiers"
      },
      {
        "area": "Calculation",
        "ready": "disposable earnings and priority are documented",
        "ownerCheck": "reviewer recalculates the withholding"
      },
      {
        "area": "Remittance",
        "ready": "withheld amount and payment reference agree",
        "ownerCheck": "owner reconciles each pay period"
      }
    ],
    "sections": [
      {
        "heading": "Log the order when it arrives",
        "paragraphs": [
          "Record the date the order arrived, the channel, and the person who received it. A delay in logging can make a timely response look late. Store the order and the envelope or transmission with the case. The date received is often the start of the response clock.",
          "Read the order for the employee name, the employer, the case number, and the amount or percentage. If the order names a different employer, do not apply it without confirming the relationship. Record the discrepancy and route it to the compliance owner. A wrong employer match can expose the client to a claim."
        ],
        "checks": []
      },
      {
        "heading": "Verify the issuing authority",
        "paragraphs": [
          "Confirm the court or agency that issued the order and the contact for questions. A document that looks official can still be invalid or superseded. Record the verification method and the person who checked it. If the order is an administrative withholding order, confirm the agency's process.",
          "Check the order's effective date and any deadline for the employer response. A garnishment that starts on a future pay date should not be deducted early. Record the start and end dates. The payroll calendar should reflect the order, not the date it was opened."
        ],
        "checks": []
      },
      {
        "heading": "Match the employee and the work state",
        "paragraphs": [
          "Match the employee by more than a name. Use the address, the identifier, and the payroll record. A remote employee may live in a different state from the employer, and the garnishment rules can depend on the work state. Record the basis for the jurisdiction and the source. Do not apply the headquarters rule by default.",
          "Check whether the employee has another active garnishment or a support order. The priority and the maximum withholding may change when orders overlap. Record the other case and the priority rule. The compliance owner should confirm the order of withholding before the calculation."
        ],
        "checks": []
      },
      {
        "heading": "Calculate the withholding",
        "paragraphs": [
          "Calculate disposable earnings and apply the limit that governs the order. Keep the calculation with the order, including the gross pay, the required deductions, and the exempt amount. A calculation that cannot be reproduced is hard to defend. Record the reviewer and the date.",
          "Apply the order priority and the maximum. If the employee's pay changes, recalculate rather than using the prior amount. Record the change and the reason. The payroll system should hold the order as a rule, not a fixed deduction that drifts."
        ],
        "checks": []
      },
      {
        "heading": "Notify and remit",
        "paragraphs": [
          "Send the notices the order requires, including the employee notice and the employer response. Record the date and the method. A missing notice can delay the garnishment and create a compliance problem. Keep a copy with the case.",
          "Remit the withheld amount to the correct authority by the required date. Reconcile the withheld amount to the remittance each pay period. Record the payment reference. If the remittance fails, correct it before the next payroll and document the fix."
        ],
        "checks": []
      },
      {
        "heading": "Close and review the case",
        "paragraphs": [
          "Close the case when the order is satisfied or terminated and the final remittance is confirmed. Record the closing date and the evidence. Do not keep deducting after the order ends. The employee should receive the final notice the order requires.",
          "Review the garnishment cases each quarter for late responses, calculation errors, and missing remittances. A pattern points to a training or system gap. Fix one cause and measure the next quarter."
        ],
        "checks": []
      }
    ],
    "roleBrief": "A Philippines-based payroll support specialist can prepare the reconciliation, maintain the evidence pack, and flag exceptions. Your payroll owner approves the calculation, the filing, and any correction.",
    "faqs": [
      {
        "question": "Who owns the final payroll decision?",
        "answer": "The client-side payroll owner approves the register, the funding, and any correction. The support team prepares the evidence and the exception list."
      },
      {
        "question": "What evidence should be kept?",
        "answer": "Keep the locked register, the bank confirmation, the reconciliation, and the exception record with the pay run."
      },
      {
        "question": "When should the control be reviewed?",
        "answer": "Review it after each close and each quarter, and whenever the bank, provider, or payroll system changes."
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
        "outsourcepayrollcompany-payroll-funding-reconciliation-timeliness-review",
        "outsourcepayrollcompany-direct-deposit-change-verification-coverage-review",
        "outsourcepayrollcompany-payroll-close-exception-aging-review"
      ]
    }
  },
  "outsourcepayrollcompany-set-a-pay-card-funding-buffer-for-a-small-payroll-client": {
    "takeaways": [
      "Confirm the card provider's settlement time and cut-off before the first run.",
      "Fund the card account before the provider's cut-off, not the pay date.",
      "Keep a buffer sized to one pay period's card load and fees.",
      "Reconcile the card loads to the payroll register after settlement.",
      "Name the person who can add funds if a transfer fails."
    ],
    "readinessRows": [
      {
        "area": "Provider terms",
        "ready": "settlement time and cut-off are documented",
        "ownerCheck": "payroll owner confirms with the provider"
      },
      {
        "area": "Funding schedule",
        "ready": "transfer date is before the cut-off",
        "ownerCheck": "treasury checks the calendar"
      },
      {
        "area": "Buffer",
        "ready": "buffer covers one pay period and fees",
        "ownerCheck": "client owner approves the amount"
      },
      {
        "area": "Reconciliation",
        "ready": "card loads match the register",
        "ownerCheck": "payroll reviews the settlement report"
      },
      {
        "area": "Escalation",
        "ready": "a named person can add funds",
        "ownerCheck": "client confirms the contact"
      }
    ],
    "sections": [
      {
        "heading": "Confirm the provider terms",
        "paragraphs": [
          "Ask the card provider for the settlement time, the cut-off, the fee schedule, and the failed-transfer process. A provider that settles in one day needs a different schedule from one that settles in three. Record the terms and the date they were confirmed. The payroll calendar should reflect the provider's clock, not only the client's pay date.",
          "Check whether the provider requires a prefunded account or extends credit. A credit arrangement may have a limit and a fee. Record the limit and the person who monitors it. The client should know what happens if the limit is reached during a busy payroll."
        ],
        "checks": []
      },
      {
        "heading": "Set the funding schedule",
        "paragraphs": [
          "Work backward from the pay date to the provider cut-off and the bank transfer time. Put the transfer date on the payroll calendar with an owner. A transfer sent on the pay date may settle after employees expect funds. Record the schedule and the confirmation for each run.",
          "Account for weekends and bank holidays in both the client's and the provider's location. A Friday pay date with a Monday holiday may need an earlier transfer. Record the adjusted date and the reason. The schedule should be reviewed each quarter."
        ],
        "checks": []
      },
      {
        "heading": "Size the buffer",
        "paragraphs": [
          "Keep a buffer that covers at least one pay period's card load and the provider fees. The buffer protects employees if a transfer is delayed or a late adjustment increases the load. Record the buffer amount, the owner, and the review date. The client should approve the amount in writing.",
          "Do not use the buffer as operating cash for the client. A buffer that is swept or spent will not be there when it is needed. Record the account and the restriction. The payroll team should confirm the balance before each run."
        ],
        "checks": []
      },
      {
        "heading": "Reconcile the card loads",
        "paragraphs": [
          "After settlement, compare the card loads with the payroll register. Look for an employee who did not receive a load, a duplicate load, or a fee that was not expected. Record each exception and the correction. A card load that fails may need a reissue or a manual payment.",
          "Reconcile the provider fees to the agreement. A fee that changes without notice can erode the buffer. Record the fee and the period. The client should see the total cost of the program, not only the payroll amount."
        ],
        "checks": []
      },
      {
        "heading": "Plan the escalation",
        "paragraphs": [
          "Name the person who can add funds or approve an emergency transfer if the scheduled transfer fails. Record the contact and the authority. A payroll team that cannot reach anyone during a bank delay will miss the pay date. Test the contact before the first run.",
          "Write the employee communication for a delayed card load. State what happened, when the funds are expected, and whom to contact. Record the message and the approval. A clear message reduces the support load and the risk of a complaint."
        ],
        "checks": []
      },
      {
        "heading": "Review the program",
        "paragraphs": [
          "Review the funding schedule, the buffer, the fees, and the exceptions each quarter. A change in the provider, the client's bank, or the payroll volume may require a new buffer. Record the review and the approval. The program should be predictable for the employee and the client.",
          "Compare the card program with the alternatives the client offers. A card may be the right choice for an unbanked employee and the wrong default for everyone. Record the employee choice and the disclosure. The payroll team should not decide the payment method for the employee."
        ],
        "checks": []
      }
    ],
    "roleBrief": "A Philippines-based payroll support specialist can prepare the reconciliation, maintain the evidence pack, and flag exceptions. Your payroll owner approves the calculation, the filing, and any correction.",
    "faqs": [
      {
        "question": "Who owns the final payroll decision?",
        "answer": "The client-side payroll owner approves the register, the funding, and any correction. The support team prepares the evidence and the exception list."
      },
      {
        "question": "What evidence should be kept?",
        "answer": "Keep the locked register, the bank confirmation, the reconciliation, and the exception record with the pay run."
      },
      {
        "question": "When should the control be reviewed?",
        "answer": "Review it after each close and each quarter, and whenever the bank, provider, or payroll system changes."
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
        "outsourcepayrollcompany-payroll-funding-reconciliation-timeliness-review",
        "outsourcepayrollcompany-direct-deposit-change-verification-coverage-review",
        "outsourcepayrollcompany-payroll-close-exception-aging-review"
      ]
    }
  },
  "outsourcepayrollcompany-write-a-payroll-close-checklist-for-a-multi-state-client": {
    "takeaways": [
      "List every state where the client has employees and the basis for the withholding.",
      "Confirm the registration and the account number for each state.",
      "Reconcile the state withholding to the payroll register.",
      "Check the filing calendar for each state and the federal return.",
      "Record the close evidence and the open items."
    ],
    "readinessRows": [
      {
        "area": "State list",
        "ready": "every work state and employee count is listed",
        "ownerCheck": "HR and payroll confirm the list"
      },
      {
        "area": "Registrations",
        "ready": "each state account is active",
        "ownerCheck": "compliance checks the portal"
      },
      {
        "area": "Withholding",
        "ready": "state tax matches the register",
        "ownerCheck": "reviewer recalculates a sample"
      },
      {
        "area": "Filings",
        "ready": "each return is filed or scheduled",
        "ownerCheck": "owner checks the confirmation"
      },
      {
        "area": "Close record",
        "ready": "filings, payments, and open items are stored",
        "ownerCheck": "client owner signs the close"
      }
    ],
    "sections": [
      {
        "heading": "Build the state list",
        "paragraphs": [
          "List every state where an employee works, not only where the client has an office. A remote employee can create a withholding obligation in the work state. Record the employee count, the work location, and the basis for the withholding. Review the list with the client before the close.",
          "Check for a state where the client registered but no longer has employees. A dormant account may still require a zero return or a closure. Record the status and the action. The list should be current, not a copy of last year's registrations."
        ],
        "checks": []
      },
      {
        "heading": "Confirm the registrations",
        "paragraphs": [
          "Confirm the account number, the filing frequency, and the portal access for each state. A registration that was never activated can reject a payment. Record the confirmation and the date. The payroll team should know who can access each portal.",
          "Check the state's new-hire and withholding requirements against the client's activity. A state may require a registration before the first paycheck. Record the requirement and the source. Do not assume that a federal employer identification number covers the state obligation."
        ],
        "checks": []
      },
      {
        "heading": "Reconcile the withholding",
        "paragraphs": [
          "Compare the state withholding in the payroll register with the amount funded and the amount filed. A difference can come from a rate change, a new employee, or a correction. Record the variance and the explanation. The reviewer should test a sample of employees in each state.",
          "Check the local tax if the state or city requires it. A local withholding that is missing can create a penalty for the employer and a surprise for the employee. Record the local rule and the employee count. The close should include the local returns in the calendar."
        ],
        "checks": []
      },
      {
        "heading": "Check the filing calendar",
        "paragraphs": [
          "List the federal and state filing dates for the quarter, including the payment dates. A return filed on time with a late payment can still incur a penalty. Record the date, the amount, and the confirmation. The calendar should include the person responsible for each filing.",
          "Account for a state holiday or a portal outage. A filing that depends on a single day should have a backup plan. Record the alternative and the contact. The close should not fail because a portal was unavailable on the last day."
        ],
        "checks": []
      },
      {
        "heading": "Record the close evidence",
        "paragraphs": [
          "Store the register, the state reconciliations, the filed returns, the payment confirmations, and the open items together. Record the close date and the owner. A later reviewer should be able to see what was filed and what remains open. The record is the basis for the next quarter.",
          "List the open items with an owner and a date. A registration that is pending or a notice that needs a response should not be buried in an email. Record the follow-up and the risk. The client should see the open items before the close is signed."
        ],
        "checks": []
      },
      {
        "heading": "Review the close",
        "paragraphs": [
          "Review the variances and the late items with the client and the payroll team. A recurring issue in one state may need a registration or a process fix. Record the finding and the change. The close should improve the next quarter.",
          "Check the checklist itself. If a step is always skipped, remove it or make it easier. If a step catches a real error, keep it. The checklist should be short enough to use and specific enough to matter."
        ],
        "checks": []
      }
    ],
    "roleBrief": "A Philippines-based payroll support specialist can prepare the reconciliation, maintain the evidence pack, and flag exceptions. Your payroll owner approves the calculation, the filing, and any correction.",
    "faqs": [
      {
        "question": "Who owns the final payroll decision?",
        "answer": "The client-side payroll owner approves the register, the funding, and any correction. The support team prepares the evidence and the exception list."
      },
      {
        "question": "What evidence should be kept?",
        "answer": "Keep the locked register, the bank confirmation, the reconciliation, and the exception record with the pay run."
      },
      {
        "question": "When should the control be reviewed?",
        "answer": "Review it after each close and each quarter, and whenever the bank, provider, or payroll system changes."
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
        "outsourcepayrollcompany-payroll-funding-reconciliation-timeliness-review",
        "outsourcepayrollcompany-direct-deposit-change-verification-coverage-review",
        "outsourcepayrollcompany-payroll-close-exception-aging-review"
      ]
    }
  },
  "outsourcepayrollcompany-audit-a-direct-deposit-change-request-before-the-next-run": {
    "takeaways": [
      "Verify the employee through an independent channel before changing bank details.",
      "Compare the request with the prior account and flag a full replacement.",
      "Confirm the account ownership with the employee or a voided check.",
      "Apply the change after the current run unless the employee confirms the timing.",
      "Record the verification, the approver, and the effective date."
    ],
    "readinessRows": [
      {
        "area": "Request logged",
        "ready": "request, channel, and date are stored",
        "ownerCheck": "payroll stamps the receipt"
      },
      {
        "area": "Identity",
        "ready": "employee verified through an independent channel",
        "ownerCheck": "payroll records the method"
      },
      {
        "area": "Account",
        "ready": "account ownership and routing number confirmed",
        "ownerCheck": "reviewer checks the document"
      },
      {
        "area": "Effective date",
        "ready": "change applies to the agreed pay period",
        "ownerCheck": "payroll confirms with the employee"
      },
      {
        "area": "Record",
        "ready": "verification and approval are stored with the change",
        "ownerCheck": "owner signs the audit"
      }
    ],
    "sections": [
      {
        "heading": "Log the request and the channel",
        "paragraphs": [
          "Record the date, the channel, and the person who received the request. A change that arrives by email is not verified by the email address alone. Store the original message and any attachment. The log is the start of the audit trail.",
          "Check whether the request came from the employee's known contact or a new one. A new phone number or email is a risk signal, not proof of fraud. Record the difference and the verification step. The payroll team should not process a change from an unverified channel."
        ],
        "checks": []
      },
      {
        "heading": "Verify the employee independently",
        "paragraphs": [
          "Call the employee at a number already on file, not the number in the request. Ask them to confirm the last four digits of the account and the reason for the change. Record the time and the person who spoke. A call-back to a known number is a strong control against a fraudulent request.",
          "If the employee cannot be reached, hold the change and tell them why. Do not process the change because the pay date is close. Record the hold and the follow-up. A delayed deposit is easier to fix than a fraudulent one."
        ],
        "checks": []
      },
      {
        "heading": "Verify the account",
        "paragraphs": [
          "Ask for a voided check or a bank statement that shows the employee's name and the account. Compare the routing and account numbers with the request. Record the document and the date. A screenshot of a banking app may be edited, so treat it as weaker evidence.",
          "Check the routing number against the bank's published directory. A routing number that does not match the bank name is a warning. Record the check and the result. The payroll team should not guess which number is correct."
        ],
        "checks": []
      },
      {
        "heading": "Set the effective date",
        "paragraphs": [
          "Apply the change after the current payroll run unless the employee confirms that the current run should use the new account. Record the employee's choice and the date. A change applied mid-cycle can split a deposit or fail after the run closes.",
          "Tell the employee when the change takes effect and what to expect on the next pay date. Record the message. If the old account is closed, confirm how the employee will receive the current pay. The communication should prevent a failed deposit."
        ],
        "checks": []
      },
      {
        "heading": "Record the verification and approval",
        "paragraphs": [
          "Store the verification method, the approver, and the effective date with the change. Record the old account and the new account, with only the last four digits visible in the general record. A reviewer should be able to see that the process was followed without exposing the full number.",
          "Check the payroll system after the change to confirm the employee record and the prenote if one is required. Record the confirmation. A change that is approved but not applied is still an open item."
        ],
        "checks": []
      },
      {
        "heading": "Review the changes each month",
        "paragraphs": [
          "Review the direct deposit changes for patterns, such as multiple changes to one account or a cluster from one device. A pattern may indicate a fraud attempt or a training gap. Record the finding and the action. Do not accuse an employee without evidence.",
          "Check the audit against the actual deposits. A change that was verified but produced a failed deposit may need a different account check. Record the outcome and update the checklist. The control should improve with each cycle."
        ],
        "checks": []
      }
    ],
    "roleBrief": "A Philippines-based payroll support specialist can prepare the reconciliation, maintain the evidence pack, and flag exceptions. Your payroll owner approves the calculation, the filing, and any correction.",
    "faqs": [
      {
        "question": "Who owns the final payroll decision?",
        "answer": "The client-side payroll owner approves the register, the funding, and any correction. The support team prepares the evidence and the exception list."
      },
      {
        "question": "What evidence should be kept?",
        "answer": "Keep the locked register, the bank confirmation, the reconciliation, and the exception record with the pay run."
      },
      {
        "question": "When should the control be reviewed?",
        "answer": "Review it after each close and each quarter, and whenever the bank, provider, or payroll system changes."
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
        "outsourcepayrollcompany-payroll-funding-reconciliation-timeliness-review",
        "outsourcepayrollcompany-direct-deposit-change-verification-coverage-review",
        "outsourcepayrollcompany-payroll-close-exception-aging-review"
      ]
    }
  }
};
