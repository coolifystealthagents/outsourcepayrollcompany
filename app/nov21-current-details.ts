// Generated from the 2026-11-21 content batch.
export const nov21CurrentBlogDetails = {
  "outsourcepayrollcompany-file-the-bls-multiple-worksite-report-from-payroll-records": {
    "takeaways": [
      "Treat each physical location as an establishment and give it one named owner.",
      "Map payroll location codes to addresses and counties before the quarter closes.",
      "Allocate wages to the site where work was performed, not the headquarters address.",
      "Reconcile report totals with the payroll register and the state unemployment return.",
      "Save the filed report, confirmation, and correction history with the quarter."
    ],
    "readinessRows": [
      {
        "area": "Establishment list",
        "ready": "every active site has an address and county",
        "ownerCheck": "HR and finance confirm the site list"
      },
      {
        "area": "Payroll mapping",
        "ready": "each location code points to one establishment",
        "ownerCheck": "payroll owner reviews the crosswalk"
      },
      {
        "area": "Wage allocation",
        "ready": "site totals rebuild from the payroll register",
        "ownerCheck": "reviewer tests one pay period"
      },
      {
        "area": "Quarterly reconciliation",
        "ready": "differences to other returns are explained",
        "ownerCheck": "finance signs the reconciliation"
      },
      {
        "area": "Filing record",
        "ready": "submission and confirmation are stored",
        "ownerCheck": "owner checks the portal receipt"
      }
    ],
    "sections": [
      {
        "heading": "Confirm the reporting unit and coverage",
        "paragraphs": [
          "The Multiple Worksite Report asks a multi-location employer to report employment and wages for each establishment in a state. Start by listing every physical location that had payroll during the quarter, including offices, warehouses, and project sites. Treat the legal employer and the state as the outer boundary for each report. A location that opened or closed during the quarter still belongs on the list if it paid anyone.",
          "Match each establishment to the address and county used by the state unemployment insurance account. The worksite identifier on the report should connect to the same location in payroll and in the state account record. Do not use a headquarters address for a site that only stores equipment. A post office box is not an establishment, and a mailing address can hide the actual work location.",
          "Decide who owns the report before the quarter ends. Name a preparer, a reviewer, and a backup who can file if the primary owner is away. Record the state agency contact and the reporting portal in the procedure. An unowned quarterly report is usually late before anyone notices the deadline. Put the calendar reminder on the finance shared calendar, not only in the owner's personal task list."
        ]
      },
      {
        "heading": "Map payroll records to each worksite",
        "paragraphs": [
          "Export the payroll register with the employee, work location, pay period, gross wages, and employer contributions. Compare the location codes in payroll with the establishment list before allocating any amount. A code that maps to a closed office or a manager's home will distort the report. Fix the mapping in the source system rather than adjusting the report by hand.",
          "Assign each employee to the site where the work was actually performed during the pay period. A remote employee who reports to a branch may still need to be counted at the branch establishment under the state's instructions. Read the agency guidance for home-based and temporary staff before choosing a default. Record the rule and the date it was reviewed.",
          "Allocate wages by the pay period in which they were earned, not the date the report is prepared. A bonus paid in the quarter belongs with the establishment that employed the worker at payment. A correction from an earlier quarter needs its own line and an explanation. Keep the allocation workbook so a reviewer can rebuild every total. If a pay period straddles two quarters, split it using the agency's reporting rule and document the split.",
          "Reconcile the allocated total to the payroll register before submission. The sum of establishment wages should equal the reportable wages for the legal employer in that state. Investigate any difference instead of forcing the total to match. A plug figure destroys the audit trail and invites a follow-up question. A variance of even a few dollars can signal a duplicate establishment or a missing adjustment."
        ]
      },
      {
        "heading": "Reconcile before the filing window",
        "paragraphs": [
          "Compare the quarterly wage total with the federal return and the state unemployment return. The definitions may differ, so document why a gap exists rather than assuming an error. A common difference is a payment that is reportable for one filing and not the other. Keep the reconciliation beside the filed report. Write the reconciliation in the same workbook as the filing so the next reviewer does not rebuild it.",
          "Check the employment count for the pay period that includes the twelfth day of the month. Use the same definition the agency uses for the report, including part-time and temporary workers where required. A headcount taken from a badge system can differ from payroll. Reconcile the two counts and record the reason for any gap. The agency defines employment for the report, so a local definition borrowed from HR may not apply.",
          "File before the agency deadline and allow time for portal registration, file-format checks, and a rejected upload. Save the confirmation number, the submitted file, and the date. Send the confirmation to the finance owner who signs the quarterly package. A confirmation that lives only in one person's inbox is not a record. Store the confirmation with the quarter's payroll package and note the agency contact who can resolve a rejection.",
          "Review the report against the prior quarter for unusual swings in wages or headcount. A site that loses half its staff or doubles its payroll deserves a check before filing. Ask the location owner to explain a large change in writing. A plausible story without a source document stays open. Compare the same establishment across quarters and ask for the cause of a change above the review threshold."
        ]
      },
      {
        "heading": "Correct errors and keep the trail",
        "paragraphs": [
          "Correct a wrong establishment, wage total, or headcount through the agency's amendment process. Keep the original report, the correction request, and the agency response together. Do not overwrite the original file on the shared drive. A version history shows what changed and who approved it. The amendment log should show the original value, the corrected value, and the reason for the change.",
          "Notify the payroll owner and the finance contact when a correction changes a prior quarter. A revised report can affect unemployment experience or a state account review. Record the notice date and the person who received it. A silent correction leaves the next reviewer with an unexplained difference. Send the notice to the finance owner who signs the quarterly return, not only to the payroll preparer.",
          "Review the mapping and the report procedure after every correction. A repeated error usually points to a location code, an ownership gap, or a missing source file. Update the procedure and tell the people who prepare the next report. Set the next review date before closing the quarter. Add the correction cause to the next quarter's checklist so the same mapping gap is tested again.",
          "Keep the filed report and its support for the period required by the agency and the company records policy. Store it with the payroll quarter, not in a general finance folder. Label the file with the legal entity, state, and quarter. A record that cannot be found is treated as missing even when it was filed. A clear label and an index make the record retrievable by someone who did not prepare the report."
        ]
      }
    ],
    "roleBrief": [
      "Role: Multi-location payroll reporting coordinator",
      "First task lane: build the establishment list, payroll crosswalk, and quarterly reconciliation",
      "Tools: Payroll register, state unemployment account, worksite registry, agency reporting portal",
      "Access: Read-only payroll and account records, write access to the reporting workbook",
      "Daily output: Open mapping gaps, reconciliation differences, and filing dates",
      "Stop rules: No report submission or wage reallocation without the finance owner",
      "Owner review: Payroll and finance owners approve the filed report and any amendment"
    ],
    "faqs": [
      {
        "question": "Does every employee need a worksite code?",
        "answer": "Each employee should have a location that maps to a real establishment for reporting. A code that points to a closed office or a manager's home will distort the report. Build the crosswalk before the quarter closes and test one pay period. Fix the source mapping rather than editing the report."
      },
      {
        "question": "Can remote employees be assigned to headquarters?",
        "answer": "That depends on the state's instructions and where the work is performed. Some agencies allow an assigned reporting location, while others expect the actual worksite. Read the guidance and record the basis for the choice. Do not default to headquarters without a documented reason."
      },
      {
        "question": "What if the report total does not match the payroll register?",
        "answer": "Investigate the difference before filing and keep the reconciliation. A definition difference may explain the gap, but a plug figure will not survive an audit. Assign an owner to each open item and set a due date. File only after the difference is understood."
      }
    ],
    "sources": [
      {
        "name": "BLS, Quarterly Census of Employment and Wages",
        "url": "https://www.bls.gov/cew/",
        "note": "Program overview and employer reporting resources."
      },
      {
        "name": "BLS, Handbook of Methods",
        "url": "https://www.bls.gov/opub/hom/",
        "note": "Definitions and methods behind establishment data."
      },
      {
        "name": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Employer wage reporting and employment tax guidance."
      },
      {
        "name": "DOL, Unemployment Insurance",
        "url": "https://www.dol.gov/general/topic/unemployment-insurance",
        "note": "Federal overview of the unemployment insurance system."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.bls.gov/cew/",
      "related": [
        "outsourcepayrollcompany-register-state-payroll-accounts-before-the-first-remote-paycheck",
        "outsourcepayrollcompany-check-payroll-tax-registrations-before-adding-a-work-location",
        "outsourcepayrollcompany-reconcile-w-2-and-1099-nec-data-before-year-end-filing"
      ]
    }
  },
  "outsourcepayrollcompany-audit-tip-credit-records-before-the-next-payroll-run": {
    "takeaways": [
      "Confirm the tipped minimum wage and the maximum credit for each state.",
      "Keep the tip credit notice and the employee's hours in the same file.",
      "Reconcile reported tips with sales, payroll, and the tip pool.",
      "Treat a service charge under a written rule, never as an automatic tip.",
      "Correct a shortfall before the next payroll and record the adjustment."
    ],
    "readinessRows": [
      {
        "area": "Rate card",
        "ready": "each location has current state and federal rates",
        "ownerCheck": "payroll owner checks the effective date"
      },
      {
        "area": "Employee notice",
        "ready": "each tipped employee acknowledged the credit",
        "ownerCheck": "HR verifies the signed notice"
      },
      {
        "area": "Hours and tips",
        "ready": "source records support the reported amounts",
        "ownerCheck": "reviewer tests one pay period"
      },
      {
        "area": "Tip pool",
        "ready": "formula and recipients are documented",
        "ownerCheck": "manager and owner confirm the pool"
      },
      {
        "area": "Correction",
        "ready": "shortfalls are paid and recorded",
        "ownerCheck": "owner approves the make-up amount"
      }
    ],
    "sections": [
      {
        "heading": "Confirm the tip credit rules that apply",
        "paragraphs": [
          "A tip credit lets an employer count tips toward the minimum wage, but only when the state and federal rules allow it. Start with the state minimum wage, the tipped minimum, and the maximum credit for each location. Record the effective date of each rate. A rate that changed mid-quarter needs its own line in the audit. A rate that is missing or expired should stop the test until the payroll owner supplies the current schedule.",
          "Check that the employer gave each affected employee the required tip credit notice. The notice should state the cash wage, the credit claimed, and that the employer may not keep tips. Keep a signed or acknowledged copy with the payroll file. A general handbook page is not proof that a specific employee received the notice. Keep the notice with the employee's rate history so a later reviewer can connect the notice to the period.",
          "Confirm that the employee may keep all tips except through a valid pool or a lawful deduction. Review any chargeback, breakage fee, or card processing deduction with a qualified owner. A deduction that reduces tips below the required cash wage needs an immediate correction. Record the owner's decision and the employee notice. The employee should be told in writing how to report a concern about tips before the next pay period.",
          "Check the state rule for a higher cash wage or a credit that does not exist. Some states require the full minimum wage before tips, and a federal credit cannot override that rule. Use the state labor agency as the source, not a prior payroll setup. Document the choice for each location. Stamp the state citation and the review date on the rate card so a later change is visible."
        ]
      },
      {
        "heading": "Test the tip credit math against hours",
        "paragraphs": [
          "Rebuild the credit for a sample of employees from hours, cash wages, reported tips, and the applicable minimum. Compare the result with the payroll register line by line. A correct net pay can still hide a wrong credit. Test one slow week and one busy week for the same employee. Choose the sample from the payroll register, not from the manager's list of reliable employees.",
          "Check whether the system applies the credit to all hours, including overtime and training time. A credit tied to a rate can disappear when the employee works a different job for part of the shift. Review the rate history for each employee in the sample. A rate change without a new notice is a finding. Check the training rate separately, because a lower training wage may not support the same tip credit.",
          "Compare reported tips with the tip pool records and the point-of-sale report. An employee who reports less than the pool share may be subsidizing another worker or underreporting income. Ask the manager to explain a gap before adjusting payroll. Do not use a formula to invent unreported tips. If the point-of-sale total and the reported tips differ, keep both numbers and the manager's explanation.",
          "Calculate the shortfall when the cash wage plus tips falls below the required minimum. The employer must make up the difference, not carry it forward. Record the make-up amount, the pay period, and the employee. A recurring shortfall points to a rate, schedule, or pool design problem. The make-up should appear as a separate earnings line so the employee and the auditor can see it."
        ]
      },
      {
        "heading": "Reconcile tips, service charges, and payroll taxes",
        "paragraphs": [
          "Separate voluntary tips from service charges and other mandatory fees. A service charge is generally employer revenue unless the employer has a clear rule and the state treats it differently. Read the written policy before the audit begins. A label on a receipt is not enough to settle the treatment. Keep the policy, the receipt language, and the distribution record together for each service charge type.",
          "Check that reported tips flow into federal income tax, Social Security, and Medicare withholding. Compare the tip total on the payroll register with the amount reported to the IRS. A missing tip can create a later W-2 correction and a penalty. Record the reconciliation for the quarter. A tip correction that changes Social Security wages may also require a corrected W-2.",
          "Review the tip pool contribution and distribution for each pay period. The pool should have a written formula, an eligible group, and a record of who received what. A manager who keeps part of a pool needs documented authority and legal review. A pool that changes without notice is an exception. Record the pool participants, the hours, and the share for each period so the distribution can be rebuilt.",
          "Test one employee whose tips were reported late or corrected after the pay date. Confirm that the correction reached the tax returns and the employee's year-to-date totals. Record the correction path and the owner. A correction that only fixes the paycheck leaves the tax record wrong. Compare the year-to-date tip total before and after the correction to confirm the full effect."
        ]
      },
      {
        "heading": "Close the audit with a correction and a control",
        "paragraphs": [
          "List every finding with the employee, pay period, amount, and applicable rule. Separate a calculation error from a notice gap and a recordkeeping gap. Assign an owner and a due date to each item. A finding without an owner stays open. Rank each finding by the number of employees and pay periods it affects, then set the correction order. Keep the list with the correction evidence.",
          "Correct the current payroll and the prior period where the rule requires it. Recalculate the credit, the make-up amount, and the associated taxes. Give the employee a written explanation when pay changes. Keep the correction in the same file as the original transaction. The employee explanation should state the period, the amount, and the reason without exposing another worker's tips.",
          "Update the tip credit procedure with the rates, notice steps, pool rules, and review cadence. Add the sample test to the quarterly payroll checklist. Tell managers which questions must go to the payroll owner. Set the next audit date before the busy season begins. Include the notice check and the shortfall test in the first payroll review for every new location.",
          "Retain the notices, pool records, sales reports, and correction evidence for the required period. Store them where the payroll owner can retrieve them without asking the restaurant manager. A record held only at the site can disappear with a management change. The retention period should follow the longer of the state rule and the company policy, with the end date recorded."
        ]
      }
    ],
    "roleBrief": [
      "Role: Tipped-payroll compliance coordinator",
      "First task lane: gather rate cards, notices, hours, tips, and pool records for the audit sample",
      "Tools: Payroll register, point-of-sale reports, tip pool sheets, state labor guidance",
      "Access: Read-only payroll and sales reports, write access to the audit workbook",
      "Daily output: Sample results, shortfall list, and missing notices",
      "Stop rules: No rate change, deduction, or make-up payment without the payroll owner",
      "Owner review: Payroll and legal owners approve corrections and the revised procedure"
    ],
    "faqs": [
      {
        "question": "Does every state allow a tip credit?",
        "answer": "No. Some states require the full minimum wage before tips, and others set a higher cash wage. Check the state labor agency for each location. A federal credit does not override a stricter state rule. Record the basis for each rate."
      },
      {
        "question": "Is a service charge a tip?",
        "answer": "A mandatory service charge is generally not a voluntary tip under federal guidance. The employer must decide how it is distributed and disclosed under a written rule. Check state treatment before payroll applies a tip credit. Do not let a receipt label settle the question."
      },
      {
        "question": "What happens if tips do not reach the minimum?",
        "answer": "The employer must make up the difference for that pay period. Record the shortfall, the make-up amount, and the employee. A recurring gap points to a rate, schedule, or pool problem that needs an owner."
      }
    ],
    "sources": [
      {
        "name": "DOL Wage and Hour Division, Tipped Employees",
        "url": "https://www.dol.gov/agencies/whd/flsa/tipped-employees",
        "note": "Federal tip credit and tip ownership guidance."
      },
      {
        "name": "DOL Wage and Hour Division, Fact Sheet 15",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees",
        "note": "Summary of tip credit requirements under the FLSA."
      },
      {
        "name": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Tip reporting, withholding, and employment tax guidance."
      },
      {
        "name": "IRS Publication 15-A",
        "url": "https://www.irs.gov/publications/p15a",
        "note": "Supplemental employer tax guidance including tip reporting."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.dol.gov/agencies/whd/flsa/tipped-employees",
      "related": [
        "outsourcepayrollcompany-verify-payroll-deduction-limits-before-the-next-pay-run",
        "outsourcepayrollcompany-control-manual-payroll-adjustments-with-a-numbered-register",
        "outsourcepayrollcompany-reconcile-payroll-headcount-against-benefits-enrollment-before-open-enrollment"
      ]
    }
  },
  "outsourcepayrollcompany-withhold-taxes-on-equity-compensation-without-a-year-end-surprise": {
    "takeaways": [
      "Identify the taxable event and the withholding obligation before settlement.",
      "Choose the share or cash withholding method in writing and apply it consistently.",
      "Reconcile shares withheld with the payroll tax deposit and the broker record.",
      "Track cost basis and holding period for every vest or exercise lot.",
      "Test the W-2 and 1099 reporting before the year closes."
    ],
    "readinessRows": [
      {
        "area": "Award inventory",
        "ready": "each grant, vest, and exercise is listed",
        "ownerCheck": "HR and stock administrator confirm the population"
      },
      {
        "area": "Taxable event",
        "ready": "the event date and fair market value are recorded",
        "ownerCheck": "tax owner reviews the valuation source"
      },
      {
        "area": "Withholding method",
        "ready": "share or cash method is approved in writing",
        "ownerCheck": "payroll owner confirms the election"
      },
      {
        "area": "Deposit",
        "ready": "withheld tax matches the payroll deposit",
        "ownerCheck": "reviewer traces one settlement"
      },
      {
        "area": "Year-end reporting",
        "ready": "W-2 and 1099 lines reconcile to the lot file",
        "ownerCheck": "finance signs the reconciliation"
      }
    ],
    "sections": [
      {
        "heading": "Identify the taxable event and the valuation",
        "paragraphs": [
          "Equity compensation can create ordinary income at vest, at exercise, or at sale depending on the award type. List every grant and the event that triggers payroll tax before the first share settles. Record the event date, the number of shares, and the fair market value used. A missing event in the inventory becomes a missed withholding at year-end. Tie each event to the grant document so a later vest or exercise can be matched to the same award.",
          "Confirm the valuation source and the date the price was taken. A public company can use a market price, while a private company may rely on an appraisal or a plan formula. Keep the source document with the payroll file. A price copied from a summary without its source is not evidence. Record who supplied the price and whether the plan document allowed that source.",
          "Separate the income that belongs on the W-2 from the gain that belongs on a 1099 or a broker statement. An incentive stock option has a different reporting path from a nonqualified option or a restricted stock unit. Ask the tax owner to confirm the treatment before payroll runs. A generic equity code can hide the difference. Keep the form instruction with the award record so the reporting choice is repeatable.",
          "Check whether the employee is subject to withholding in more than one state during the award period. A remote worker or a transfer can split the income across jurisdictions. Record the work location for each vest or exercise. A single-state default can under-withhold the state where the work was performed. A transfer mid-year may require a split that follows the workdays, so record the dates and the allocation method."
        ]
      },
      {
        "heading": "Apply a written withholding method",
        "paragraphs": [
          "Decide whether the employer will withhold from shares, from cash wages, or through a sell-to-cover arrangement. Put the method in writing and apply it to every award of the same type. A method that changes by participant is hard to defend and harder to reconcile. The payroll owner should approve any exception before settlement. Document the employee's election and any plan limit on share withholding before the settlement date.",
          "Calculate the withholding using the supplemental wage rules that apply to the payment. Confirm the rate with the tax owner and record the calculation in the settlement file. A flat rate can under-withhold a large award, while an aggregate method can produce a different result. Do not let the broker choose the method without payroll approval. Keep the rate authority with the calculation, because a rate change during the year can change the result.",
          "Check that the shares withheld for taxes are valued on the same date and at the same price as the income event. A difference between the income price and the withholding price creates a cash shortfall or an over-withholding. Record both prices and the resulting adjustment. A share count that does not match the tax amount is an open item.",
          "Confirm that the remaining shares and cash reach the employee or the brokerage account. Reconcile the plan administrator's statement with the payroll register. A settlement that leaves shares in a suspense account needs an owner and a deadline. The employee should receive a clear statement of the income and the tax withheld. A share balance that remains unissued should be listed as an open item with the plan administrator."
        ]
      },
      {
        "heading": "Reconcile shares, cash, and tax deposits",
        "paragraphs": [
          "Trace one settlement from the award record to the payroll register, the tax deposit, and the broker statement. Check the share count, the income amount, the withholding, and the net shares delivered. A correct net share number can still hide a wrong income amount. Test both a vest and an exercise if the company uses both. Use the same event date across the award record, payroll, and broker statement so the trace stays intact.",
          "Compare the payroll tax deposit with the amount withheld on the equity payment. The deposit may combine equity and regular payroll, so use the provider's detail report rather than the bank total. A missing deposit appears as a tax liability before it appears as an employee complaint. Record the deposit date and the confirmation. If the deposit cannot be isolated, ask the provider for a tax detail report that names the equity payment.",
          "Review the employer tax share for Social Security and Medicare on the equity income. Confirm that the wage base and the additional Medicare threshold were applied to the combined wages. An equity payment can push an employee over a threshold mid-year. Reconcile the year-to-date wage total after each large award. Recheck the wage base after each award because a single large vest can cross a threshold for the year.",
          "Check the plan administrator's fee and any share rounding against the settlement statement. A fractional share is usually settled in cash, and that cash needs its own tax treatment. Record the rounding rule and the amount. A small difference repeated across many employees becomes a material reconciliation item. The plan administrator should confirm the rounding rule in writing before the next vesting date."
        ]
      },
      {
        "heading": "Close the year with lot-level evidence",
        "paragraphs": [
          "Build a lot file that links each grant, vest, exercise, and sale to the shares delivered. Record the cost basis, the holding period, and the reporting form for each lot. The payroll team may not own the broker records, but it needs the income and withholding portion. A lot file that stops at the vest cannot explain a later sale.",
          "Test the W-2 wages against the equity income in the payroll register. Investigate a difference caused by a prior-year adjustment, a refund, or a reclassification. Confirm that the Social Security and Medicare wages include the equity income where required. A W-2 that omits the award creates a correction and a penalty. A W-2 correction should include the reason and the affected box, not only a changed total.",
          "Check the 1099 reporting for any amount that did not run through payroll. A sale gain belongs on a broker statement, not on the W-2. A payment to a consultant may follow a different path from an employee award. Ask the tax owner to confirm each form before it is issued. The form instruction and the tax owner's note belong with the award file for the next reporting cycle.",
          "Keep the award agreements, valuation sources, settlement statements, and tax reconciliations together. Label the file by plan year and grant. Set a review date before the next vesting cycle. A clean year-end package makes the next audit a retrieval task rather than a reconstruction. Name the owner who will retrieve the file during an audit and the date of the next review."
        ]
      }
    ],
    "roleBrief": [
      "Role: Equity payroll reconciliation analyst",
      "First task lane: build the award inventory and trace settlements to payroll and tax deposits",
      "Tools: Stock plan records, payroll register, broker statements, tax deposit reports",
      "Access: Read-only award and payroll records, write access to the reconciliation workbook",
      "Daily output: Open settlements, withholding differences, and lot-file gaps",
      "Stop rules: No withholding election, share release, or tax correction without the payroll owner",
      "Owner review: Payroll and tax owners approve the method and the year-end reporting"
    ],
    "faqs": [
      {
        "question": "Is equity income always taxed at vest?",
        "answer": "Not always. The taxable event depends on the award type and the plan terms. Restricted stock units usually create income at vest, while options create income at exercise or sale. Confirm the event with the tax owner before payroll withholds. Record the event date and the valuation source."
      },
      {
        "question": "Can the broker decide how much tax to withhold?",
        "answer": "The broker can execute a method, but the employer remains responsible for the withholding decision. Put the method in writing and apply it consistently. Reconcile the broker statement with the payroll deposit. An unexplained difference stays open until an owner resolves it."
      },
      {
        "question": "What should be tested before year-end?",
        "answer": "Test the W-2 wages, the Social Security and Medicare wage base, the state allocation, and the 1099 reporting for non-payroll amounts. Trace at least one vest and one exercise. Keep the lot file with the reconciliation."
      }
    ],
    "sources": [
      {
        "name": "IRS, Topic 427, Stock Options",
        "url": "https://www.irs.gov/taxtopics/tc427",
        "note": "Federal treatment of statutory and nonstatutory stock options."
      },
      {
        "name": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Supplemental wage withholding and employment tax rules."
      },
      {
        "name": "IRS Publication 15-B",
        "url": "https://www.irs.gov/publications/p15b",
        "note": "Employer guide to fringe benefit and equity-related tax treatment."
      },
      {
        "name": "IRS, About Form W-2",
        "url": "https://www.irs.gov/forms-pubs/about-form-w-2",
        "note": "Wage reporting instructions and form overview."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.irs.gov/taxtopics/tc427",
      "related": [
        "outsourcepayrollcompany-reconcile-w-2-and-1099-nec-data-before-year-end-filing",
        "outsourcepayrollcompany-run-an-off-cycle-payroll-without-losing-the-audit-trail",
        "outsourcepayrollcompany-run-an-off-cycle-payroll-without-losing-the-audit-trail"
      ]
    }
  },
  "outsourcepayrollcompany-set-up-certified-payroll-for-a-prevailing-wage-project": {
    "takeaways": [
      "Confirm the wage determination and the contract clauses before the first payroll.",
      "Classify every worker by the work actually performed on the project.",
      "Pay the full fringe benefit or its cash equivalent and show the calculation.",
      "File each week, including weeks with no project work.",
      "Keep the statement of compliance and every correction together."
    ],
    "readinessRows": [
      {
        "area": "Contract coverage",
        "ready": "the wage determination and clauses are on file",
        "ownerCheck": "project manager confirms the contract"
      },
      {
        "area": "Classification",
        "ready": "each worker has a supported trade and rate",
        "ownerCheck": "superintendent reviews the duties"
      },
      {
        "area": "Fringe benefits",
        "ready": "the credit and cash equivalent are calculated",
        "ownerCheck": "payroll owner checks the plan cost"
      },
      {
        "area": "Weekly filing",
        "ready": "the report and statement are submitted",
        "ownerCheck": "compliance owner checks the receipt"
      },
      {
        "area": "Correction file",
        "ready": "amended reports and notices are retained",
        "ownerCheck": "owner approves each correction"
      }
    ],
    "sections": [
      {
        "heading": "Confirm the contract coverage and wage determination",
        "paragraphs": [
          "Start with the contract clause and the wage determination that applies to the project. Record the awarding agency, the contract number, and the effective date of the determination. A project can include several schedules or classifications, so read the whole document. A rate taken from an older project is not evidence for this contract. Keep the determination and the contract clause in the project file that the payroll team can reach.",
          "Check whether the contract is subject to federal Davis-Bacon requirements, a state prevailing-wage law, or both. The stricter requirement usually governs the rate and the filing. Record the basis for the choice with the contract citation. Ask the contracting agency to confirm an ambiguous scope before the first payroll. Record the agency's written answer with the contract file so a later reviewer can follow the same scope decision.",
          "Identify the payroll reporting portal and the required form for each agency. A federal project may use a different form and submission path from a state project. Register the company and each subcontractor before the first payroll. A portal account created after the work starts can delay the first certified report. Test the portal login and the file format before the first weekly report is due.",
          "Set the filing calendar from the contract and the agency instructions. Most certified payroll reports are due weekly, with a statement of compliance for each period. Put the due date on the payroll calendar with an internal deadline. A report prepared after the next payroll starts is already late. Add a backup preparer to the calendar so a vacation does not create a late filing."
        ]
      },
      {
        "heading": "Classify workers and build the rate card",
        "paragraphs": [
          "List every worker who performs work on the project, including apprentices, laborers, and equipment operators. Match each worker to the classification that describes the work actually performed. A job title from the company payroll system may not match the wage determination. Keep the classification decision and the supporting duties in the file. Have the superintendent sign the classification list so the duties and the rate are tied to the project record.",
          "Confirm the wage rate, the fringe benefit rate, and the overtime rule for each classification. Build a rate card that the payroll system can apply without a manual override. A rate card that lives only in a spreadsheet invites a wrong code at the next payroll. Review the card when the wage determination changes. Store the rate card version with each payroll so a later rate change does not rewrite history.",
          "Check the apprentice ratio and the registration requirement before assigning an apprentice rate. An apprentice who is not properly registered may need the full journeyman rate. Record the registration number and the ratio calculation. A rate that depends on a ratio needs a review each week as the crew changes. Keep the apprentice registration and the ratio calculation with the weekly report for the crew that worked.",
          "Verify that the payroll system carries the project, the classification, and the rate on every line. A worker who splits time between a covered project and a commercial job needs a clear allocation. Record the hours and the rate for each project. A blended rate hides the prevailing-wage portion and fails the certified report. The project code should be visible on the payroll register, not only on the timekeeping report."
        ]
      },
      {
        "heading": "Reconcile hours, fringes, and deductions",
        "paragraphs": [
          "Reconcile the certified hours with the timekeeping records and the payroll register. A daily or weekly total that differs from the source needs an explanation before the report is filed. Check overtime hours separately because the rate and the fringe treatment can differ. A correct gross pay can still contain the wrong hours. Keep the timekeeper's correction and the payroll adjustment together so the hours can be rebuilt.",
          "Show the fringe benefit credit and the cash equivalent for each worker. A bona fide plan contribution can count toward the fringe rate, but the calculation needs the plan cost and the covered hours. A cash payment in lieu of benefits must appear as wages. Do not let a generic benefit code stand in for the calculation. Attach the plan cost report or the cash payment record to the weekly file for each worker.",
          "Review deductions for the same limits that apply to any payroll. A deduction that reduces pay below the required prevailing wage needs an owner decision and a correction. Check the state rule and the contract before allowing a deduction. A tool or uniform charge can become a compliance finding. Ask the compliance owner to approve any deduction that touches prevailing-wage pay before it is taken.",
          "Compare the weekly certified total with the payroll register and the general ledger. Investigate a difference caused by a rate change, a missing employee, or a correction. Record the reviewer and the resolution. A report that cannot be tied to the payroll register is not a certified record. A difference that repeats across weeks may point to a rate card or a project code problem."
        ]
      },
      {
        "heading": "File weekly and correct with evidence",
        "paragraphs": [
          "Submit the certified payroll and the statement of compliance by the agency deadline. Keep the submitted file, the confirmation, and the date. File a report for a week with no project work when the agency requires it. A missing zero-week report is still a missing report. The statement of compliance should name the signer and the date, not only the company.",
          "Correct an error through an amended report that references the original submission. Explain the classification, rate, hour, or fringe change in plain language. Attach the source record that supports the correction. Do not replace the original file without keeping a copy. The amended report should state what changed and why so the agency can compare it with the original. Keep the amended form with the original.",
          "Notify the project manager and the payroll owner when a correction affects a prior week. A rate error may require a payment to the worker and a revised report to the agency. Record the payment and the notice. A correction that only changes the form leaves the worker underpaid. The worker payment should be reconciled to the amended report before the file is closed.",
          "Review the classification and rate card after every correction. A repeated error usually points to a missing trade, a wrong effective date, or a supervisor's estimate. Update the procedure and train the timekeeper. Set the next review before the next phase of work begins. Record the training date and the attendees so the next crew receives the same instruction. Record the training date in the project file."
        ]
      }
    ],
    "roleBrief": [
      "Role: Certified payroll compliance coordinator",
      "First task lane: assemble the contract documents, rate card, weekly reports, and correction file",
      "Tools: Wage determination, payroll register, timekeeping records, agency reporting portal",
      "Access: Read-only payroll and project records, write access to the compliance file",
      "Daily output: Classification gaps, rate exceptions, and weekly filing status",
      "Stop rules: No rate change, classification decision, or amendment without the compliance owner",
      "Owner review: Compliance and payroll owners approve the rate card and each correction"
    ],
    "faqs": [
      {
        "question": "Does every project require certified payroll?",
        "answer": "Only projects covered by a prevailing-wage law or a contract clause require it. Check the contract and the awarding agency before assuming coverage. A state project can have a different threshold from a federal one. Record the basis for the decision."
      },
      {
        "question": "Can a worker be paid one blended rate?",
        "answer": "A blended rate usually fails to show the required classification and fringe credit. Pay and report the covered work at the applicable rate. If a worker splits time, allocate the hours by project. Keep the allocation with the certified report."
      },
      {
        "question": "What if the weekly report is late?",
        "answer": "File the report as soon as the error is found and keep the explanation. A late report can trigger a withholding or a contract remedy. Notify the project manager and the payroll owner. Record the correction and the agency response."
      }
    ],
    "sources": [
      {
        "name": "DOL Wage and Hour Division, Davis-Bacon and Related Acts",
        "url": "https://www.dol.gov/agencies/whd/government-contracts/construction",
        "note": "Federal prevailing-wage requirements for construction contracts."
      },
      {
        "name": "SAM.gov, Wage Determinations",
        "url": "https://sam.gov/content/wage-determinations",
        "note": "Official federal wage determination lookup."
      },
      {
        "name": "DOL Wage and Hour Division, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "Recordkeeping requirements for covered employers."
      },
      {
        "name": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Payroll withholding and employment tax guidance."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.dol.gov/agencies/whd/government-contracts/construction",
      "related": [
        "outsourcepayrollcompany-control-manual-payroll-adjustments-with-a-numbered-register",
        "outsourcepayrollcompany-check-payroll-tax-registrations-before-adding-a-work-location",
        "outsourcepayrollcompany-run-an-off-cycle-payroll-without-losing-the-audit-trail"
      ]
    }
  },
  "outsourcepayrollcompany-prepare-payroll-records-for-a-workers-compensation-premium-audit": {
    "takeaways": [
      "Define the policy period and the payroll basis before the auditor arrives.",
      "Map every employee classification to the work actually performed.",
      "Reconcile overtime, bonuses, and expense payments with the policy rules.",
      "Keep subcontractor certificates and payroll records in the same packet.",
      "Answer auditor questions with a source document, not an estimate."
    ],
    "readinessRows": [
      {
        "area": "Policy period",
        "ready": "the audit dates and payroll basis are confirmed",
        "ownerCheck": "risk manager checks the policy"
      },
      {
        "area": "Classification",
        "ready": "each employee has a supported class code",
        "ownerCheck": "operations confirms the duties"
      },
      {
        "area": "Remuneration",
        "ready": "overtime and exclusions follow the policy",
        "ownerCheck": "payroll owner reviews the rules"
      },
      {
        "area": "Subcontractors",
        "ready": "certificates and payments are documented",
        "ownerCheck": "procurement confirms coverage"
      },
      {
        "area": "Audit packet",
        "ready": "every answer links to a source record",
        "ownerCheck": "finance signs the packet"
      }
    ],
    "sections": [
      {
        "heading": "Define the audit period and payroll basis",
        "paragraphs": [
          "A premium audit starts with the policy period and the payroll basis written in the policy. Record the effective dates, the states covered, and the class codes on the policy. Confirm whether the audit uses gross payroll, overtime, or another defined basis. A payroll total built on a different basis will not match the auditor's worksheet. Keep the policy declarations page and the audit notice together so the period and basis are easy to confirm.",
          "Identify every legal entity and pay group that employed workers during the period. A policy may cover one entity and exclude another, even when both share an office. List the entities before pulling payroll. A missing entity can turn into an uncovered exposure after the audit. If an entity is excluded, record the policy language and the reason before the auditor asks.",
          "Ask the insurer or broker for the audit worksheet and the class code list before the review begins. Compare the list with the company's payroll classifications. A code that no longer matches the work is a finding, not a paperwork detail. Resolve a disputed code with the underwriter before the auditor finalizes the premium. Save the insurer's class list with the company's comments so a disputed code has a written trail.",
          "Set an internal deadline ahead of the insurer's date. Allow time to pull payroll, reconcile totals, and answer follow-up questions. Name a primary contact and a backup who can speak to payroll and operations. An audit that depends on one person stalls when that person is unavailable. Send the auditor a single contact list with roles and backup names before the field visit."
        ]
      },
      {
        "heading": "Classify employees by actual duties",
        "paragraphs": [
          "Review each employee's actual duties rather than the payroll title. A worker called an office assistant may spend most of the day in a warehouse. A supervisor who regularly performs field work may belong in a field class. Record the duties, the location, and the percentage of time for each employee. Ask supervisors to confirm the duties in writing, especially for workers who split time between sites.",
          "Compare the class code with the state's approved classification and the insurer's description. A class code that is close but not correct can still change the premium. Ask the auditor to explain a proposed change before accepting it. Keep the explanation with the audit file. A class change should show the old code, the new code, the effective date, and the premium effect.",
          "Check the treatment of owners, officers, and family members. A policy often has a separate rule for each, and an exclusion may require a signed form. Confirm the treatment before the audit rather than after the premium is billed. Record the owner's decision and the effective date. Keep the signed exclusion or inclusion form with the policy, not in a separate HR file.",
          "Review employees who changed duties during the period. A promotion or a temporary assignment can move a worker into a different class. Split the payroll by the dates and the duties if the policy requires it. A single annual code can overstate or understate the premium. Split the payroll in the audit workbook and keep the source records for each period."
        ]
      },
      {
        "heading": "Reconcile remuneration and exclusions",
        "paragraphs": [
          "Pull the payroll register, the general ledger, and the quarterly tax returns for the period. Compare the total remuneration with the audit worksheet. A difference may come from a timing issue, a bonus, or an excluded payment. Record the reason for each difference rather than adjusting the total. Reconcile the general ledger to the payroll register before comparing either total with the worksheet.",
          "Check the policy's treatment of overtime, bonuses, commissions, and expense reimbursements. Some policies exclude overtime premium, while others include it. A reimbursement for business expenses may be excluded only when it is properly documented. Apply the written rule and keep the calculation. Document each exclusion with the policy provision, the payment type, and the supporting receipt. Keep the calculation with the audit workbook.",
          "Review payments to subcontractors separately from employee payroll. A subcontractor without a certificate of insurance can be treated as an employee for premium purposes. Collect the certificate, the agreement, and the payment record. A missing certificate is an exposure even when the work was legitimate. A certificate should show the coverage dates and the insurer, and it should be current for the work period.",
          "Confirm that the payroll totals reconcile to the general ledger and the tax returns. A difference that cannot be explained is likely to become an auditor question. Assign an owner and a due date to each open item. A clean reconciliation shortens the audit and reduces the chance of a estimated premium. Ask the auditor to identify any estimated item and the record needed to replace it with actual payroll."
        ]
      },
      {
        "heading": "Assemble the audit packet and answer questions",
        "paragraphs": [
          "Build an index that links each audit question to a source document. Include the policy, the payroll registers, the classification support, the subcontractor certificates, and the reconciliation. Number the pages and keep the index in the front. An auditor who can follow the index spends less time reconstructing the payroll. Use tabs or section numbers that match the auditor's questions so a request can be answered quickly.",
          "Prepare a short written explanation for every classification change or excluded payment. State the fact, the policy provision, and the source record. A verbal explanation that is not in the file disappears when the auditor writes the report. Keep the explanation consistent with the documents. Keep the explanation factual and short, and attach the record that supports each statement. Attach the record to the index.",
          "Review the auditor's draft before it becomes final. Check the payroll totals, the class assignments, and the experience modification inputs. Ask for the calculation behind a proposed adjustment. A premium change that cannot be explained deserves a written question. A written question to the auditor should state the item, the company position, and the supporting record. Keep the written question and the response together.",
          "Close the audit with a copy of the final report and the payment or credit notice. Record the next audit date and the owner who will maintain the packet. Update the classification list when a job or entity changes. A file that is only assembled at audit time will miss the next change. The final report and the next audit date belong in the same file as the policy and the reconciliation."
        ]
      }
    ],
    "roleBrief": [
      "Role: Workers' compensation audit coordinator",
      "First task lane: assemble policy, payroll, classification, and subcontractor evidence",
      "Tools: Insurance policy, payroll register, general ledger, certificate of insurance tracker",
      "Access: Read-only payroll and claims records, write access to the audit packet",
      "Daily output: Open classifications, reconciliation differences, and missing certificates",
      "Stop rules: No class change, exclusion, or premium settlement without the risk owner",
      "Owner review: Risk, finance, and payroll owners approve the audit packet and final report"
    ],
    "faqs": [
      {
        "question": "Is the audit based on gross payroll?",
        "answer": "The policy defines the payroll basis, and it may exclude some overtime or expense payments. Read the policy and the state rules before pulling totals. Reconcile the payroll register to the basis the auditor uses. Record each exclusion and its support."
      },
      {
        "question": "Can a subcontractor be excluded from premium?",
        "answer": "Only when the policy and the state rules allow it and the certificate and agreement are on file. A missing certificate can cause the payments to be treated as payroll. Collect the evidence before the audit. Ask the insurer to confirm the treatment."
      },
      {
        "question": "What happens if the payroll records do not reconcile?",
        "answer": "The auditor may estimate the premium, which is harder to challenge later. Assign an owner to each difference before the audit date. Keep the reconciliation and the source records together. A documented difference is easier to resolve than an unexplained total."
      }
    ],
    "sources": [
      {
        "name": "DOL Office of Workers' Compensation Programs",
        "url": "https://www.dol.gov/agencies/owcp",
        "note": "Federal workers' compensation program information and resources."
      },
      {
        "name": "BLS, Employer Costs for Employee Compensation",
        "url": "https://www.bls.gov/ect/",
        "note": "Data on employer compensation costs, including insurance."
      },
      {
        "name": "IRS, Employment Tax Recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping",
        "note": "Recordkeeping guidance for payroll and employment taxes."
      },
      {
        "name": "DOL Wage and Hour Division, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "Federal payroll recordkeeping requirements."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.dol.gov/agencies/owcp",
      "related": [
        "outsourcepayrollcompany-reconcile-payroll-headcount-against-benefits-enrollment-before-open-enrollment",
        "outsourcepayrollcompany-run-an-off-cycle-payroll-without-losing-the-audit-trail",
        "outsourcepayrollcompany-reconcile-w-2-and-1099-nec-data-before-year-end-filing"
      ]
    }
  }
};
