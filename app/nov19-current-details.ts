// Generated from the 2026-11-19 content batch.
export const nov19CurrentBlogDetails = {
  "outsourcepayrollcompany-test-payroll-proration-rules-for-mid-period-hires-and-leaves": {
    "takeaways": [
      "Write the proration method down before a mid-period event forces the question.",
      "Test hires, leaves, and terminations at the edges of the pay period, not only the middle.",
      "Reconcile salary, deductions, benefits, and employer taxes after proration, not just gross pay.",
      "Keep the worked examples as a regression set for the next payroll configuration change.",
      "Give the employee a plain explanation of the calculation before the first short or partial check."
    ],
    "readinessRows": [
      {
        "area": "Written rule",
        "ready": "the proration method, rounding, and approval date are documented",
        "ownerCheck": "payroll owner confirms the policy matches current practice"
      },
      {
        "area": "System setting",
        "ready": "the configuration is captured with a dated screenshot",
        "ownerCheck": "provider explains the order of operations"
      },
      {
        "area": "Edge cases",
        "ready": "hire, leave, and termination dates are tested at period boundaries",
        "ownerCheck": "reviewer compares hand and system results"
      },
      {
        "area": "Deduction treatment",
        "ready": "fixed and percentage deductions have a written rule",
        "ownerCheck": "benefits and payroll owners agree"
      },
      {
        "area": "Employee notice",
        "ready": "a plain explanation is ready for any partial check",
        "ownerCheck": "manager confirms the message before payday"
      }
    ],
    "sections": [
      {
        "heading": "Define the proration rule before the first paycheck",
        "paragraphs": [
          "Write down how the payroll system prorates salary when a hire, a leave, or a termination lands in the middle of a pay period. State whether the calculation uses calendar days, scheduled workdays, or paid hours. Name the owner who approves the method and the date it took effect. A written rule keeps two administrators from producing different answers for the same dates.",
          "Compare the written rule with the configuration in the payroll system. Ask the provider to show the setting, the rounding step, and the order of operations for one sample employee. If the system default differs from the policy, record the override and the person who owns it. Keep a screenshot with the date, because a portal update can quietly change a default.",
          "Read the offer letter and the employee handbook for a promise that conflicts with the calculation. A sentence that guarantees a full week of salary for a partial week can override an internal rule. Resolve the conflict with the owner before the employee starts work. A correction after the first short paycheck costs more time than a clear sentence at hiring."
        ]
      },
      {
        "heading": "Compare the written rule with the payroll configuration",
        "paragraphs": [
          "Choose four dates that test the edges of the rule instead of the easy middle. Use a hire on the first workday, a hire on the last workday, a leave that starts midweek, and a termination on a payday. Calculate each result by hand from the written policy. Keep the worked examples with the test record so another reviewer can repeat the math.",
          "Enter the same four cases in a test payroll or a sandbox copy of the live company. Compare the system result with the hand calculation at the salary line, the deduction lines, and the employer tax lines. A match at salary with a difference in deductions still signals a problem. Record every variance with the field, the expected value, and the actual value.",
          "Ask the provider how it handles a mid-period rate change combined with a mid-period leave. Two changes in one period can expose an order-of-operations error that a single change hides. Request the calculation logic in writing rather than accepting a verbal explanation from a support agent. Add the case to the regression set for the next configuration change. Record the provider's answer in the test file so a later administrator can see which logic was tested."
        ]
      },
      {
        "heading": "Test four employee scenarios against real dates",
        "paragraphs": [
          "Build a hire scenario where the employee starts on a Monday after the pay period began. Confirm the salary, the benefit deduction, and the employer contribution for the partial period. Check whether the system charges a full monthly benefit premium or a prorated amount. The answer should match the plan rule and the written payroll policy, not an assumption. Confirm the salary, the benefit premium, and the employer contribution before you compare the total to the policy.",
          "Build a leave scenario where unpaid leave begins after two days in the period. Confirm that the system reduces salary and keeps the benefit deduction consistent with the plan and the employer policy. Check whether a paid leave balance is applied before the unpaid calculation. A missing balance can turn a protected leave into an accidental deduction. Confirm whether the system applies a paid leave balance before the unpaid calculation.",
          "Build a termination scenario with a final check that includes unused leave and a partial salary period. Confirm the final pay date, the proration math, and the deduction order. Check whether the system deducts a full benefit premium from a partial final check. Document the result and the owner approval before the check is released. Check the final pay date against the state or contract timing rule before releasing the check."
        ]
      },
      {
        "heading": "Check deductions, benefits, and overtime after proration",
        "paragraphs": [
          "Review each deduction line after the salary changes. A fixed deduction such as a loan payment may exceed the prorated pay, while a percentage deduction will move with the salary. Decide in advance whether the system should skip, cap, or carry the deduction. Record the choice and the employee notice for each option. Confirm whether the skipped amount carries forward or disappears, and record the answer.",
          "Check overtime and other premium pay when the employee worked before or after the partial period. A proration rule that reduces the base salary should not reduce overtime already earned on hours worked. Ask the provider to show how regular rate and overtime are calculated for the stub. Compare the result with the timekeeping export. Ask the provider to show the regular rate used for the overtime line, not just the final amount.",
          "Test the employer tax lines as well as the employee deductions. A partial period can change taxable wages, but it should not create a negative or duplicated tax line. Reconcile the payroll register to the funding request before release. A clean employee check can still hide an employer tax error that appears at quarter end. Confirm that the tax lines use the prorated wages and that no prior-period wage was duplicated."
        ]
      },
      {
        "heading": "Record the result and recheck after a policy change",
        "paragraphs": [
          "Save the test cases, the expected results, the actual results, and the reviewer name in one folder. Note the payroll configuration version and the date of the test. A future administrator should be able to rerun the same cases without rebuilding the logic. The record also shows an auditor that the employer checked the rule before using it. Include the configuration version so a later change can be compared with the tested baseline.",
          "Add a rerun trigger to the payroll calendar for any change to salary, benefit, or deduction configuration. A provider release, a new plan, or a policy edit can alter proration without a visible announcement. Rerun the four cases and compare the new output with the saved baseline. Investigate any difference before the next live payroll. Set the rerun date on the calendar and assign the person who will compare the results.",
          "Tell the employee how the calculation works when a partial period is expected. Use a short example with the dates, the daily rate, and the deduction treatment. Give the employee a contact for questions before payday. A clear explanation prevents a routine calculation from becoming a dispute. Send the example before the pay date and keep a copy with the payroll record."
        ]
      }
    ],
    "roleBrief": [
      "Role: Payroll proration test coordinator",
      "First task lane: assemble the written rule, system settings, and four edge-case calculations",
      "Tools: Payroll sandbox, pay policy, offer letters, benefit plan rules, test workbook",
      "Access: Read-only payroll configuration and employee records, write access to the test workbook",
      "Daily output: Completed test cases, variance list, and dated screenshots",
      "Stop rules: No live payroll change or employee payment adjustment without the payroll owner",
      "Owner review: Payroll owner approves the rule and any correction before the next run"
    ],
    "faqs": [
      {
        "question": "Does a salary employee have to be paid for a partial period?",
        "answer": "The answer depends on the employment agreement, the pay practice, and applicable law. The operational task is to follow the written policy consistently and document the calculation. Ask qualified advice for the legal question rather than letting the payroll system decide by default."
      },
      {
        "question": "Should benefits be prorated with salary?",
        "answer": "Plan documents and employer policy control benefit deductions, not the salary proration rule. Check each plan separately and record the treatment. A salary proration test that ignores benefits will miss a common source of employee questions."
      },
      {
        "question": "How often should the test be rerun?",
        "answer": "Rerun after any payroll configuration release, benefit plan change, or written policy edit. A quarterly rerun is a reasonable backstop for a stable setup. Keep the prior baseline so a difference is visible immediately."
      }
    ],
    "sources": [
      {
        "name": "DOL Wage and Hour Division, Hours Worked Fact Sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked",
        "note": "Explains what counts as compensable hours for payroll calculations."
      },
      {
        "name": "DOL Wage and Hour Division, FLSA Recordkeeping Fact Sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "note": "Describes payroll records employers must keep."
      },
      {
        "name": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Employer tax guidance covering wages and withholding."
      },
      {
        "name": "SBA, Pay taxes",
        "url": "https://www.sba.gov/business-guide/manage-your-business/pay-taxes",
        "note": "Small-business overview of payroll tax responsibilities."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://csrc.nist.gov/pubs/sp/800/207/final",
      "related": [
        "outsourcepayrollcompany-plan-payroll-coverage-for-a-holiday-shortened-workweek",
        "outsourcepayrollcompany-reconcile-imported-payroll-hours-against-the-timekeeping-export",
        "outsourcepayrollcompany-open-enrollment-deduction-effective-date-accuracy"
      ]
    }
  },
  "outsourcepayrollcompany-control-manual-payroll-adjustments-with-a-numbered-register": {
    "takeaways": [
      "Number every manual adjustment before anyone edits a payroll record.",
      "Require a reason code, a source document, and the employee or pay period affected.",
      "Separate the person who prepares an adjustment from the person who approves it.",
      "Reconcile the register to the payroll register after every run and review trends monthly.",
      "Close the loop with the employee when an adjustment changes net pay."
    ],
    "readinessRows": [
      {
        "area": "Register",
        "ready": "every manual change has a unique number and a required field set",
        "ownerCheck": "payroll owner reviews the layout before use"
      },
      {
        "area": "Support",
        "ready": "a document or record is attached to each entry",
        "ownerCheck": "reviewer checks the amount and dates"
      },
      {
        "area": "Separation",
        "ready": "preparer and approver are different named people",
        "ownerCheck": "owner confirms system roles match the register"
      },
      {
        "area": "Reconciliation",
        "ready": "posted changes are matched to register entries after each run",
        "ownerCheck": "reviewer signs the run reconciliation"
      },
      {
        "area": "Monthly review",
        "ready": "counts by reason and owner are reviewed with actions",
        "ownerCheck": "payroll owner accepts the action list"
      }
    ],
    "sections": [
      {
        "heading": "Open a register entry before touching the payroll record",
        "paragraphs": [
          "Create the register entry before an administrator changes a payroll record. The entry needs a unique number, the pay period, the employee or group, the field to change, and the reason. A number issued in advance makes an unregistered edit easier to spot. It also gives the reviewer a stable reference for questions. A pre-numbered form that assigns the next number automatically prevents a verbal request from skipping the log.",
          "Use one register for every manual change, including a missing hours line, a rate correction, a deduction reversal, and a retroactive payment. Small changes are the easiest to leave undocumented. A single register removes the argument that a particular edit was too minor to record. The log becomes the payroll team's memory when staff change. Review the register weekly so a missing number is found while the pay period is still open.",
          "Store the register outside the payroll system in a controlled workbook or ticketing queue. The register should survive a provider outage and remain readable without a login. Keep the payroll system as the system of record for the transaction, not for the explanation. The two records should point to each other by number. Back up the register on the same schedule as the payroll records it describes."
        ]
      },
      {
        "heading": "Require a reason code and a supporting document",
        "paragraphs": [
          "Define a short list of reason codes that maps to the payroll process, such as missed hours, rate error, duplicate deduction, or retroactive approval. Require the preparer to choose one code rather than writing a free-text explanation alone. The code makes later analysis possible. Free text can still carry the detail the reviewer needs. Keep the reason list short enough that a preparer can choose without guessing and specific enough to support analysis.",
          "Attach the document that supports the change, such as a signed timesheet, an approval email, a corrected offer letter, or a benefit election record. A register entry without support is a claim, not evidence. Check that the document covers the amount and the dates in the request. If the document is missing, hold the adjustment until it arrives. A document that covers a different amount or period is not support, even when it mentions the same employee.",
          "Record who requested the change and who verified the source. Those roles may be the same person for a routine correction, but the names must still appear. A reviewer should be able to see the chain without searching a mailbox. The register is only useful when a stranger can follow it. Record the time of the request as well, because a late request may need a different approval path."
        ]
      },
      {
        "heading": "Cap who can enter and approve the same adjustment",
        "paragraphs": [
          "Separate the preparer role from the approver role in the payroll system and in the register. The person who enters a manual adjustment should not be the person who releases it. If the team is too small for a full split, name a second reviewer who checks the entry before the run. A shared login defeats the control even when the names differ.",
          "Set a value threshold that requires a higher approval. A small correction may need one reviewer, while a retroactive payment or a large deduction reversal needs the payroll owner. Write the thresholds down and apply them by amount and by risk. A high-value exception with no extra approval is a finding, not a shortcut. A threshold that exists only in a team meeting is not a control, so publish it with the register.",
          "Give the approver enough time to review before the payroll cutoff. A last-minute approval is often a signature without a check. Set a cut-off for manual entries that is earlier than the payroll release time. The buffer protects the reviewer and the employees who depend on the run. Publish the cutoff in the payroll calendar and remind preparers before the deadline."
        ]
      },
      {
        "heading": "Reconcile the register to the payroll register after each run",
        "paragraphs": [
          "After the payroll run, compare the total value and count of manual adjustments with the changes visible in the payroll register. Match each entry by number and confirm the amount posted to the intended employee and period. Investigate any posted adjustment with no register entry. Investigate any register entry that did not post. Save the reconciliation next to the register so the next reviewer sees the match and the open items.",
          "Check the direction of each change, not only the total. A positive and a negative adjustment can net to zero while hiding two separate errors. Review the affected tax lines and the general ledger coding as well. A manual change that reaches net pay but misses the ledger creates a reconciliation problem later. Check that the general ledger account matches the reason code and the cost center.",
          "Record the reconciliation result and the reviewer in the register. Note any item that remains open and the date it will be resolved. A closed run with an unexplained difference is not closed. The next reviewer should see the open item without reading a separate email thread. An open item needs an owner and a date, not just a note that it will be handled later."
        ]
      },
      {
        "heading": "Review the register monthly for patterns and repeat causes",
        "paragraphs": [
          "Count adjustments by reason code, department, preparer, and pay period. A cluster of missed hours in one team points to a timekeeping handoff problem. A cluster of rate errors points to a hire or change process problem. The count is more useful than a single dramatic correction. Review the trend with the payroll owner before the next monthly close, not after quarter end.",
          "Look for repeat adjustments on the same employee or the same field. A recurring correction may mean the source system is wrong, not the payroll entry. Fix the source when the pattern is clear. Continuing to correct the output leaves the cause in place. Assign the source fix to the team that owns the data, with a date for the correction.",
          "Report the monthly summary to the payroll owner with the top cause, the value, and the action. Keep the report short enough to read before the next run. A register that is never reviewed becomes a filing cabinet. The review is what turns the log into a control. End the report with one decision the owner can make before the next run."
        ]
      }
    ],
    "roleBrief": [
      "Role: Manual payroll adjustment register coordinator",
      "First task lane: issue entry numbers, collect support, and prepare the post-run match",
      "Tools: Adjustment register, payroll register, ticketing queue, document repository",
      "Access: Write access to the register, read-only payroll reports, no release authority",
      "Daily output: Numbered entries, missing-support list, and post-run variance report",
      "Stop rules: No payroll edit, reversal, or release without the named approver",
      "Owner review: Payroll owner approves thresholds and every high-value adjustment"
    ],
    "faqs": [
      {
        "question": "Is a manual adjustment always a control failure?",
        "answer": "No. Some corrections are legitimate and necessary, such as a missed approved timesheet. The control question is whether the change was authorized, supported, and reviewed before release. An unregistered adjustment is the failure, not the existence of manual work."
      },
      {
        "question": "Can the same person prepare and approve in a small company?",
        "answer": "A small team may need a compensating review by the owner or a second manager. Document the exception and the check that replaced the separation. A second signature from the same person is not an independent approval."
      },
      {
        "question": "What should the register contain at minimum?",
        "answer": "Use a number, date, pay period, employee or group, field changed, old value, new value, reason code, support reference, preparer, approver, and posting result. Add a closure date for any open item."
      }
    ],
    "sources": [
      {
        "name": "NIST Special Publication 800-53 Revision 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog covering audit logging and separation of duties."
      },
      {
        "name": "NIST Zero Trust Architecture, SP 800-207",
        "url": "https://csrc.nist.gov/pubs/sp/800/207/final",
        "note": "Access design principles including least privilege."
      },
      {
        "name": "DOL Wage and Hour Division, FLSA Recordkeeping Fact Sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "note": "Payroll records employers must maintain."
      },
      {
        "name": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Employer wage and withholding record guidance."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://csrc.nist.gov/pubs/sp/800/207/final",
      "related": [
        "outsourcepayrollcompany-control-retroactive-pay-adjustments-with-a-two-key-review",
        "outsourcepayrollcompany-payroll-preparation-and-approval-separation-coverage",
        "outsourcepayrollcompany-keep-payroll-approval-evidence-when-a-manager-leaves-mid-cycle"
      ]
    }
  },
  "outsourcepayrollcompany-verify-payroll-deduction-limits-before-the-next-pay-run": {
    "takeaways": [
      "Separate voluntary deductions from legal withholding and judgment orders.",
      "Calculate the protected wage floor before testing the deduction order.",
      "Check the order of multiple claims when a new deduction starts.",
      "Document any cap, skip, or carry-forward decision with the employee notice.",
      "Rerun the check whenever a claim, rate, or pay amount changes."
    ],
    "readinessRows": [
      {
        "area": "Deduction inventory",
        "ready": "every code has a label, source document, and owner",
        "ownerCheck": "payroll owner approves the mapping"
      },
      {
        "area": "Protected floor",
        "ready": "the current rule is applied for each work location",
        "ownerCheck": "reviewer records the rule and date"
      },
      {
        "area": "Priority order",
        "ready": "the system order is documented and tested with multiple claims",
        "ownerCheck": "owner confirms the order with qualified advice"
      },
      {
        "area": "Employee notice",
        "ready": "a written notice is ready before the first affected check",
        "ownerCheck": "manager reviews the wording"
      },
      {
        "area": "Remittance",
        "ready": "withheld amounts reconcile to payments sent",
        "ownerCheck": "reviewer matches case number and date"
      }
    ],
    "sections": [
      {
        "heading": "Separate voluntary deductions from legal withholding",
        "paragraphs": [
          "List every deduction on the employee's check and label it as voluntary, benefit, tax, or legal order. A gym membership and a child support order do not follow the same rules. The label decides which limit applies and who can change the amount. A mixed list invites a wrong comparison. Use the same labels in the test log so the reviewer can see which limit was applied.",
          "Read the order or election document for the exact amount, the start date, and the duration. A garnishment may state a maximum percentage rather than a fixed sum. A benefit election may allow a midyear change only for a qualifying event. Record the source and the date instead of relying on a payroll note. Store a copy with the deduction record so the amount can be explained after the employee leaves.",
          "Ask the payroll provider which deduction codes map to each label. A code that looks voluntary in the portal may be treated as a legal order in the calculation. Test the mapping with one employee before the next live run. A mislabeled code can defeat a correct limit. Test one code at a time and record the result before moving to the next code."
        ]
      },
      {
        "heading": "Calculate the protected wage floor for each employee",
        "paragraphs": [
          "Calculate the amount the employee must keep after legally required deductions. Use the applicable federal, state, and local rule for the employee's work location. Do not assume one state's formula applies to a remote worker in another state. Record the rule, the source, and the date used. Include the employee's work location and filing status in the calculation record so the cap can be reproduced.",
          "Compare the proposed deduction with the protected floor before adding other voluntary items. A voluntary deduction cannot cure an over-ordered legal withholding. If the legal deduction alone exceeds the limit, escalate to the payroll owner and qualified advice. Do not silently reduce a court order without authority. Escalate the case with the order, the pay figure, and the calculated floor attached.",
          "Recalculate when the employee's pay changes because the floor moves with the amount. A bonus, a raise, or a partial period can change the maximum. A test that uses last month's pay may pass while the current run would fail. Use the current run's gross pay and hours. Use the gross pay and hours from the current run, not a projection."
        ]
      },
      {
        "heading": "Test the order of deductions when several claims exist",
        "paragraphs": [
          "List the order the payroll system applies when more than one deduction competes for the same check. Tax withholding, a legal order, a benefit premium, and a voluntary loan may each have a priority. The order can change the amount that reaches the employee even when every individual amount is correct. Document the order and who approved it. Confirm the order with the payroll owner and record the source of the priority rule.",
          "Build a test case with two legal orders and one voluntary deduction. Compare the system result with a hand calculation that follows the priority rule. Check the employee net pay, the remittance amounts, and the year-to-date totals. A correct total with a wrong allocation still creates a compliance problem. Check the remittance for each order separately so a correct net pay does not hide a wrong allocation.",
          "Check what the system does when the available pay cannot cover every claim. It may cap the last item, skip it, or carry a balance. Each behavior needs a written rule and an employee notice. An automatic skip without a record looks like a missed deduction later. Tell the employee which item was skipped and when the withheld amount will be collected."
        ]
      },
      {
        "heading": "Check that a new garnishment does not break an existing cap",
        "paragraphs": [
          "When a new order arrives, rerun the full deduction stack instead of adding it to the prior result. The new order may change the protected amount or the priority of an older claim. Check the effective date on the order and the first pay period it covers. A backdated order can require a correction in a closed period. Look back at the prior period to see whether the new order should have applied earlier.",
          "Notify the employee in writing before the first affected check when the law or policy requires notice. State the order, the amount, the effective date, and the contact for questions. Keep a copy of the notice with the deduction record. A surprise deduction generates a dispute that takes more time than the notice. Keep the notice with the order and the payroll record so the sequence is clear.",
          "Confirm the remittance destination and timing for each legal order. A deduction that is withheld but not remitted on time creates a separate problem. Reconcile the withheld amount to the payment after the run. Close the loop with the case number and the date sent. Assign one owner to confirm the payment posted, close the case, and file the confirmation with the deduction record."
        ]
      },
      {
        "heading": "Document the exception and tell the employee what changed",
        "paragraphs": [
          "Record every case where the system capped, skipped, or altered a deduction. Include the reason, the employee, the pay period, the amount, and the approver. An exception without a record is indistinguishable from an error. The record also supports the next reviewer who sees the same employee. Review the exception with the payroll owner before the next run and decide whether a pattern exists.",
          "Give the employee a short explanation of the change in net pay. Use plain language and avoid legal conclusions the employer cannot support. Point to the order or election document and the payroll contact. Offer a correction path if the employee believes the amount is wrong. Invite the employee to ask before the next payday rather than after the deduction repeats.",
          "Review the deduction setup after the run for drift. A rate change, a new order, or a plan update can leave an old amount active. Compare active deductions with the source documents each quarter. A small recurring error is easier to fix before it becomes a back-pay dispute. Add the check to the monthly payroll review so a stale setup is caught before it compounds."
        ]
      }
    ],
    "roleBrief": [
      "Role: Payroll deduction limit verification coordinator",
      "First task lane: inventory deduction codes, collect source documents, and prepare the cap test",
      "Tools: Payroll deduction register, order documents, state rule matrix, remittance log",
      "Access: Read-only deduction and pay records, write access to the test log only",
      "Daily output: Capped or skipped deduction list, missing documents, and employee notice drafts",
      "Stop rules: No change to a legal order, deduction amount, or remittance without the payroll owner",
      "Owner review: Payroll owner and qualified adviser approve any exception or correction"
    ],
    "faqs": [
      {
        "question": "Can an employee waive the protection on a garnishment?",
        "answer": "That is a legal question that depends on the order and the jurisdiction. Payroll should not accept a waiver without qualified advice. Record the request and escalate rather than changing the deduction on an informal note."
      },
      {
        "question": "What if two orders together exceed the limit?",
        "answer": "Follow the priority rule for the jurisdiction and document the allocation. Do not reduce a legal order without authority. Escalate to the payroll owner and qualified advice when the claims cannot all be satisfied."
      },
      {
        "question": "Do voluntary deductions count toward the cap?",
        "answer": "The rule varies by deduction type and jurisdiction, so label each item before calculating. A voluntary deduction is generally easier to reduce than a legal order. Confirm the treatment with the applicable rule and qualified advice."
      }
    ],
    "sources": [
      {
        "name": "DOL Wage and Hour Division, Wage Garnishment Law Fact Sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/30-cppa",
        "note": "Federal limits on garnishment of earnings under Title III."
      },
      {
        "name": "DOL Wage and Hour Division, Deductions from Wages Fact Sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/16-flsa-wage-deductions",
        "note": "Explains permitted and prohibited deductions under the FLSA."
      },
      {
        "name": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Employer guidance on withholding and payroll deductions."
      },
      {
        "name": "IRS Publication 15-A",
        "url": "https://www.irs.gov/publications/p15a",
        "note": "Supplemental employer tax guidance including fringe benefits."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://csrc.nist.gov/pubs/sp/800/207/final",
      "related": [
        "outsourcepayrollcompany-test-garnishment-deduction-priority-before-the-next-run",
        "outsourcepayrollcompany-garnishment-priority-verification-before-withholding",
        "outsourcepayrollcompany-prepare-a-garnishment-handoff-packet-before-payroll-runs"
      ]
    }
  },
  "outsourcepayrollcompany-reconcile-payroll-headcount-against-benefits-enrollment-before-open-enrollment": {
    "takeaways": [
      "Build the comparison from paid employees and active enrollments, not from one system report.",
      "Explain every person who appears on only one list before the deduction run.",
      "Match deduction amounts and effective dates to the plan election.",
      "Use a dated sign-off from payroll and benefits owners to close the reconciliation.",
      "Repeat the check after open enrollment and after any acquisition or reorg."
    ],
    "readinessRows": [
      {
        "area": "Source files",
        "ready": "payroll roster and enrollment file are frozen with a timestamp",
        "ownerCheck": "payroll and benefits owners confirm the extract"
      },
      {
        "area": "Common key",
        "ready": "employee number is used for matching",
        "ownerCheck": "reviewer checks duplicates and rehires"
      },
      {
        "area": "Exception log",
        "ready": "every one-sided record has a reason and an owner",
        "ownerCheck": "both owners review the list"
      },
      {
        "area": "Amount test",
        "ready": "deduction and employer share match the election",
        "ownerCheck": "benefits owner samples each tier"
      },
      {
        "area": "Sign-off",
        "ready": "a dated memo closes the reconciliation",
        "ownerCheck": "payroll owner accepts open items and dates"
      }
    ],
    "sections": [
      {
        "heading": "Build one list of people paid and people enrolled",
        "paragraphs": [
          "Pull the payroll roster for the most recent completed pay run and the benefits enrollment file for the same date. Include employee number, legal name, work location, employment status, and the plan or coverage level. Use a common key such as employee number rather than a name. A name-only match creates false differences and missed duplicates. Save the two source files with the workbook so the match can be rebuilt.",
          "Add employees who were paid but have no enrollment record and employees who are enrolled but have no pay in the period. Each group needs a reason, not just a count. A leave, a termination, or a late hire can explain a legitimate gap. The reconciliation is finished only when every exception has an owner. Give each exception a status of open, resolved, or accepted with a reason.",
          "Freeze both files at a stated time and record the source and extraction date. A report pulled after a mid-day change can differ from the payroll that actually ran. Save the source files with the reconciliation. A later reviewer should be able to rebuild the comparison. Record who froze the files and when, because a later change can explain a difference."
        ]
      },
      {
        "heading": "Explain every person who appears on only one list",
        "paragraphs": [
          "For a paid employee with no enrollment, check the hire date, the waiting period, and the election status. Confirm whether the person waived coverage or missed the enrollment window. A waived employee may still need a deduction for another plan. Record the reason and the supporting document. Keep the waiver or enrollment confirmation with the exception record so the decision can be reviewed later.",
          "For an enrolled employee with no pay, check the termination date, the leave status, and the last payroll period. Confirm whether the deduction should stop, continue under a leave rule, or be refunded. A deduction taken after the final check may need a correction. Do not assume the enrollment file is right because it is newer. Check whether the final check should include a deduction or a refund before closing the record.",
          "Send the exception list to the benefits owner and the payroll owner together. A single owner cannot resolve a mismatch that spans both systems. Set a due date before the next deduction run. Record the decision and the person who approved it. Set the meeting before the next deduction run, send the list in advance, record who attended, and name the decision date."
        ]
      },
      {
        "heading": "Match deduction amounts to the plan election",
        "paragraphs": [
          "Compare the per-period deduction with the plan election and the employer contribution. Check the coverage tier, the plan year, and the payroll frequency. A monthly premium deducted from a biweekly check needs a conversion rule. Confirm the rule and the rounding before comparing totals. Confirm the payroll frequency and the plan year before converting a monthly premium, because both change the per-check amount.",
          "Test one employee at each coverage tier and one employee with a midyear change. Confirm the deduction, the employer share, and the effective date. A correct employee amount with a wrong employer share still misstates the cost. Include the general ledger account in the check when the plan is self-insured. Check the employer cost in the general ledger, not only the employee deduction.",
          "Look for a deduction that started before the election was approved or continued after a waiver. Check the payroll system's effective-date logic with a real example. A date field can be right in the enrollment file and wrong in the payroll code. Test the result, not the source alone. Compare the election date with the payroll effective date and record any gap."
        ]
      },
      {
        "heading": "Check effective dates for new hires and status changes",
        "paragraphs": [
          "Compare the hire date, the benefit effective date, and the first deduction date. A waiting period can make these three dates different on purpose. Confirm the plan rule and the employee communication. An early deduction is harder to reverse than a late one. Confirm whether the waiting period was applied in both systems and document the expected first deduction date.",
          "Check status changes such as a move from part-time to full-time or a location transfer. A status change can alter eligibility, the plan option, or the employer contribution. Confirm that the change was approved and that the payroll deduction follows the new status. Look for a change entered in one system and not the other. Check the new status in the payroll roster before the next deduction cycle.",
          "Review open enrollment elections after the file is final. Confirm that the election reached payroll before the first deduction cycle. A confirmation number from the benefits platform is not proof that payroll received the change. Match the actual deduction in the test run. Match the election confirmation to the first payroll deduction rather than the platform status, which can update before payroll does."
        ]
      },
      {
        "heading": "Close the reconciliation with owners and a dated sign-off",
        "paragraphs": [
          "Write a short close memo with the counts, the exceptions, the decisions, and the open items. Name the payroll owner and the benefits owner who reviewed it. Include the date and the source file versions. A memo turns a working spreadsheet into an auditable record. Include the open-item count and the amount at risk so the owner can prioritize the cleanup.",
          "Set a follow-up date for any exception that could not be resolved before the run. Track it in the same log until it closes. Do not let an open item disappear when the next pay period starts. A recurring exception is a process problem, not a one-time error. Reopen the log at the follow-up date and record the result even when the item is still open.",
          "Repeat the reconciliation after open enrollment and after any acquisition, reorganization, or payroll provider change. Those events move people and plans at the same time. A clean prior month does not prove the current file is aligned. The check is cheap compared with a retroactive deduction cleanup. Schedule the next reconciliation at the close of the first pay period after the change."
        ]
      }
    ],
    "roleBrief": [
      "Role: Payroll and benefits reconciliation coordinator",
      "First task lane: freeze the two files, match on employee number, and build the exception log",
      "Tools: Payroll roster, benefits enrollment export, plan summary, reconciliation workbook",
      "Access: Read-only payroll and enrollment data, write access to the reconciliation workbook",
      "Daily output: Matched counts, one-sided records, and missing documentation list",
      "Stop rules: No deduction change, refund, or retroactive enrollment without the benefits owner",
      "Owner review: Payroll and benefits owners sign the close memo before the next deduction run"
    ],
    "faqs": [
      {
        "question": "Which file is the source of truth for benefits?",
        "answer": "The plan election and the benefits system usually hold the election, while payroll holds the deduction actually taken. The reconciliation compares both rather than declaring one correct. The plan document and the employer policy decide the expected result."
      },
      {
        "question": "How do we handle an employee on unpaid leave?",
        "answer": "Check the plan rule and the employer policy for continuation, termination, or reinstatement of coverage. Record the decision and the expected deduction. Do not let a payroll default decide coverage without an owner review."
      },
      {
        "question": "How often should headcount and enrollment be reconciled?",
        "answer": "Run it before open enrollment, after open enrollment, and after any major workforce change. A monthly sample between those events catches drift earlier. The full comparison is most valuable when the deduction file is about to change."
      }
    ],
    "sources": [
      {
        "name": "IRS Publication 15-B, Employer's Tax Guide to Fringe Benefits",
        "url": "https://www.irs.gov/publications/p15b",
        "note": "Employer treatment of benefit deductions and contributions."
      },
      {
        "name": "IRS, Affordable Care Act tax provisions for employers",
        "url": "https://www.irs.gov/affordable-care-act/employers",
        "note": "Employer reporting and coverage responsibilities."
      },
      {
        "name": "IRS, Employer Shared Responsibility Provisions",
        "url": "https://www.irs.gov/affordable-care-act/employers/employer-shared-responsibility-provisions",
        "note": "Coverage and affordability rules for applicable large employers."
      },
      {
        "name": "DOL Employee Benefits Security Administration",
        "url": "https://www.dol.gov/agencies/ebsa",
        "note": "Federal employee benefit plan guidance and publications."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://csrc.nist.gov/pubs/sp/800/207/final",
      "related": [
        "outsourcepayrollcompany-open-enrollment-deduction-effective-date-accuracy",
        "outsourcepayrollcompany-benefit-deduction-reconciliation-handoff-evidence",
        "outsourcepayrollcompany-reconcile-labor-distribution-before-the-general-ledger-closes"
      ]
    }
  },
  "outsourcepayrollcompany-check-payroll-tax-registrations-before-adding-a-work-location": {
    "takeaways": [
      "Confirm the legal employer and the actual work location before ordering registrations.",
      "List every state and local account the new location triggers.",
      "Test the first payroll for the new jurisdiction with a dated change packet.",
      "Give the payroll provider the registration evidence and the effective date in writing.",
      "Review the account list after the first filing to catch a missed notice."
    ],
    "readinessRows": [
      {
        "area": "Legal entity",
        "ready": "the paying entity and tax identification are confirmed",
        "ownerCheck": "finance owner matches the entity record"
      },
      {
        "area": "Work location",
        "ready": "the address and start date are documented",
        "ownerCheck": "HR confirms where the work is performed"
      },
      {
        "area": "Registrations",
        "ready": "withholding, unemployment, and local accounts are active",
        "ownerCheck": "payroll owner checks each confirmation"
      },
      {
        "area": "Tax profile",
        "ready": "the provider loaded the location and account numbers",
        "ownerCheck": "reviewer compares the provider list with the state notices"
      },
      {
        "area": "First filing",
        "ready": "the first return and payment are scheduled and owned",
        "ownerCheck": "owner confirms posting after the filing"
      }
    ],
    "sections": [
      {
        "heading": "Confirm the legal employer and the new work location",
        "paragraphs": [
          "Identify the legal entity that will pay the employee and the physical location where the work is performed. A new office in another state can create accounts even when the headquarters has not moved. A remote employee can create a location obligation based on where the work is done. Record the address and the start date before ordering any registration.",
          "Check whether the location is a new permanent establishment, a temporary project, or a home office. The facts affect withholding, unemployment insurance, and local taxes. Do not rely on a manager's description alone. Ask for the address, the lease or client site, and the employee's work schedule. Record the address source, such as a lease or a client site letter, with the location facts.",
          "Confirm the entity name, address, and tax identification number that will appear on the registration. A mismatch with the payroll provider's records can delay the first filing. Update the legal entity record before the registration is submitted. The registration and the payroll account should agree from day one. Update the entity record before the registration so the agency and the provider see the same name."
        ]
      },
      {
        "heading": "List every registration the location triggers",
        "paragraphs": [
          "Build a checklist for state income tax withholding, state unemployment insurance, local withholding, and any required new-hire reporting. Add sales tax or business licenses only when the location creates that obligation. The payroll checklist should stay focused on payroll accounts. A broad business checklist can hide the items payroll needs before the first run. Separate the payroll checklist from the broader business license list so the payroll items stay visible.",
          "Use the state tax agency directory and the state unemployment office as the starting points. Confirm the registration portal, the required documents, and the processing time for each account. A state may issue a withholding account quickly and an unemployment account slowly. Start early enough that both are active before the first pay date. Confirm the processing time with the agency and put the expected date on the location plan.",
          "Record the account number, the effective date, and the filing frequency for each registration. A new account often defaults to a frequency that does not match the payroll calendar. Confirm the first return and deposit dates. Put them on the payroll calendar before the first run. Check the filing frequency and the deposit schedule for each new account, then add both dates to the payroll calendar."
        ]
      },
      {
        "heading": "Test the first payroll for the new jurisdiction",
        "paragraphs": [
          "Run a test calculation for one employee at the new location before the live payroll. Check the state withholding, the local tax, the unemployment wage base, and the employer contributions. Confirm the work location code maps to the correct tax profile. A correct address with a wrong location code still produces the wrong withholding. Compare the state withholding with the employee's certificate and the state formula.",
          "Compare the test result with the registration and the employee's withholding certificate. Check that the state form and the federal form are both on file. A missing state form can default the withholding to a rate the employee did not choose. Hold the first live run until the forms and the profile agree. Confirm the new bank debit and ledger coding before the first filing.",
          "Review the funding request and the general ledger coding for the new location. A new state account may need a new bank debit or a separate filing path. Confirm the money leaves the right account and reaches the right agency. A payroll that calculates correctly but funds the wrong account is still a failure. Send the packet before the first pay date and ask for a written confirmation of receipt."
        ]
      },
      {
        "heading": "Give the payroll provider a written change packet",
        "paragraphs": [
          "Prepare a packet with the legal entity, the location address, the registration numbers, the effective date, and the employee list. Include the state forms and the contact for each agency. Send it through a tracked channel and keep the acknowledgement. A verbal notice to a support agent is not a change record. Compare the provider's account list with the agency confirmations before the first live run.",
          "Ask the provider to confirm the tax profile, the filing frequency, and the first return date in writing. Check that the provider loaded the accounts under the correct entity. A provider can create a duplicate account when the entity name differs from the registration. Reconcile the provider's account list with the state confirmations. Assign the go-live check to a named person and record the date it was completed.",
          "Set an internal go-live check before the first payroll that includes the new location. Confirm the employee is active, the tax profile is loaded, and the first filing is scheduled. Assign an owner for the first return. The owner should see the acknowledgement, not just the request. Keep the agency acknowledgement with the registration record and note any penalty or notice."
        ]
      },
      {
        "heading": "Review the account list after the first filing",
        "paragraphs": [
          "After the first return, compare the filed amount with the payroll register and the registration. Confirm the agency received the payment and posted it to the correct account. Check the next filing date and the deposit schedule. A first filing that posts late can create a penalty before the process is stable. Check the notice against the registration log before assuming the provider handled it.",
          "Look for notices from a state or locality that was not on the checklist. A new employee address or a temporary work site can create an obligation that the original review missed. Add the notice to the registration log and assign an owner. Do not ignore an unfamiliar notice because the payroll provider did not mention it. Review the register at each location change and at least once a year.",
          "Update the registration register with the account status, the first filing result, and the next review date. Review the register before any new location or remote hire. The list becomes the employer's map of where it runs payroll. A current map prevents a repeat of the same registration gap. Add the new account and the first filing result to the register before closing the project."
        ]
      }
    ],
    "roleBrief": [
      "Role: Payroll registration coordinator",
      "First task lane: assemble the location facts, registration checklist, and provider change packet",
      "Tools: State tax agency directory, registration confirmations, payroll tax profile, filing calendar",
      "Access: Read-only entity and payroll records, write access to the registration tracker",
      "Daily output: Open registration list, missing documents, and first-filing dates",
      "Stop rules: No registration submission, tax profile change, or payment without the finance owner",
      "Owner review: Finance and payroll owners approve the location go-live and first filing"
    ],
    "faqs": [
      {
        "question": "Does one remote employee create a state payroll account?",
        "answer": "It can, depending on the state, the work performed, and the employer's presence. The operational step is to document the work location and check the state rules. Ask qualified advice before deciding that no registration is needed."
      },
      {
        "question": "Can we use the headquarters account for a new state?",
        "answer": "A state withholding or unemployment account is generally specific to the state and the legal employer. Using the wrong account can cause a rejected filing or a penalty. Confirm the requirement with the state agency or a qualified adviser."
      },
      {
        "question": "How early should registrations start?",
        "answer": "Start before the first pay date and allow for agency processing time, which varies by state and account type. Build the lead time into the location plan. A registration that arrives after the first payroll creates a correction and a possible penalty."
      }
    ],
    "sources": [
      {
        "name": "IRS, State government websites",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/state-government-websites",
        "note": "Directory of state tax agencies and filing resources."
      },
      {
        "name": "SBA, Pay taxes",
        "url": "https://www.sba.gov/business-guide/manage-your-business/pay-taxes",
        "note": "Small-business guide to federal, state, and local tax obligations."
      },
      {
        "name": "Federation of Tax Administrators, State tax agencies",
        "url": "https://www.taxadmin.org/state-tax-agencies",
        "note": "Links to each state's tax administration."
      },
      {
        "name": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Employer withholding, deposit, and filing guidance."
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
      "externalLink": "https://csrc.nist.gov/pubs/sp/800/207/final",
      "related": [
        "outsourcepayrollcompany-payroll-entity-change-readiness-evidence",
        "outsourcepayrollcompany-remote-work-state-withholding-review-coverage",
        "outsourcepayrollcompany-payroll-filing-calendar-exception-review"
      ]
    }
  }
};
