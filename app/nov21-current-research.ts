// Generated from the 2026-11-21 content batch.
export const nov21CurrentResearchPosts = [
  {
    "slug": "outsourcepayrollcompany-state-new-hire-reporting-timeliness-review",
    "title": "State new-hire reporting timeliness review",
    "excerpt": "A review design for testing whether every new hire reaches the state directory on time, with a traceable employer, employee, and submission record.",
    "published": "2026-11-21",
    "updated": "2026-11-21",
    "order": 9951,
    "image": "/daily21/outsourcepayrollcompany/outsourcepayrollcompany-state-new-hire-reporting-timeliness-review.webp",
    "stat": "Three timestamps checked per new-hire report.",
    "takeaways": [
      "Build the population from payroll starts and rehires, not from the state acknowledgment file.",
      "Test the employer, the reporting state, and the employee record together.",
      "Measure the gap between the hire date and the accepted submission.",
      "Keep rejected reports in the population until a corrected report is accepted.",
      "Classify findings by the days late and whether a garnishment or benefit match was affected."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "body": "This review asks whether each reportable new hire reached the correct state directory within the required window and whether the employer can evidence the submission. The scope covers full-time, part-time, and rehired employees for each legal entity. The design tests the reporting process, not whether a particular state has jurisdiction over the employer. Record the review period, the states covered, and the owner who approved the scope before the sample is drawn."
      },
      {
        "heading": "Population and unit",
        "body": "Build the population from payroll start dates, HR hire records, and rehire events. Include employees who started and left within the review period, because a short tenure does not remove the reporting duty. The unit is one employee hire and one required state submission. A population drawn only from the state confirmation file will miss every report that was never filed. List the source system and extraction date for each hire record."
      },
      {
        "heading": "Reportable employee definition",
        "body": "Confirm the state definition of a new hire and the reporting trigger. Most states require a report after the employee is hired and starts work, but the exact event and deadline vary. Read the state guide rather than applying one national rule. Record the definition used for the review and the date it was checked. A worker who is excluded under one state rule may be reportable under another."
      },
      {
        "heading": "Employer identity and reporting state",
        "body": "Confirm the legal entity and the state where the employee works. A parent company report cannot stand in for a subsidiary employer when the state requires the hiring entity. Compare the employer identification number on the report with the payroll and registration records. A report filed under the wrong entity can be rejected or matched to the wrong account. Record both the entity and the work state on the same review line."
      },
      {
        "heading": "Required data fields",
        "body": "Check the employee name, address, Social Security number, and hire date against the payroll record. Confirm the employer name, address, and identification number on the submission. A missing field can cause a rejection that is not visible in the payroll system. Test one report with a recent address change and one with a hyphenated name. The report should match the source record at the time of filing."
      },
      {
        "heading": "Submission route",
        "body": "Identify the portal, file format, and confirmation method used for each state. A direct upload, a provider batch, and a paper form have different evidence. Record who submits each route and what confirmation the state returns. A screen capture without a confirmation number is weak evidence. The route should be documented for the person who covers an absence. Name a backup submitter for each route."
      },
      {
        "heading": "Timeliness measurement",
        "body": "Measure the days between the hire date and the accepted submission, not the date the file was prepared. Record the state deadline and the internal deadline separately. A report prepared on time but accepted late is still a late report. Use the state acknowledgment or portal status as the stop event. Report the median and the longest delay by state and by submitter."
      },
      {
        "heading": "Rehires and transfers",
        "body": "Test employees who return after a break in service and employees who transfer between entities. A rehire can require a new report even when the person worked for the company before. A transfer can change the hiring entity and the reporting state. Compare the HR event with the payroll start date. A missing rehire report is a common gap because the employee already has a record."
      },
      {
        "heading": "Multi-state and remote employees",
        "body": "Review employees who live in one state and work in another. The reporting state may follow the work location, the employer's location, or the employee's residence depending on the state rule. Record the basis for the choice and the source. A default to the headquarters state can miss the state where the employee actually works. Test at least one remote hire in the sample."
      },
      {
        "heading": "Contractors and exclusions",
        "body": "Separate employees from independent contractors and confirm the state rule for each. A state may require a report for a contractor who is paid through payroll or who meets a specific test. Do not assume a contractor is excluded because the payment is reported on a 1099. Record the classification and the supporting agreement. Ask the state or a qualified adviser when the rule is unclear."
      },
      {
        "heading": "Provider responsibility",
        "body": "Confirm which party submits the report when a payroll provider or professional employer organization handles onboarding. The contract should say who files, who receives the rejection, and who corrects the data. A provider that files late still leaves the employer exposed. Test one provider-submitted hire and keep the acknowledgment. The employer should be able to produce the confirmation without asking the provider."
      },
      {
        "heading": "Duplicates and rejected reports",
        "body": "Check for duplicate reports created by a rehire, a name change, or a resubmission. A duplicate can confuse the state match and obscure the original acceptance. Keep rejected reports in the population until a corrected report is accepted. Record the rejection reason, the correction, and the new confirmation. A rejected report that is never resubmitted is an open finding. Keep the rejection reason in the same file."
      },
      {
        "heading": "Correction path",
        "body": "Define how a wrong name, number, or hire date is corrected with the state. The correction may require a new report, an amendment, or a direct contact with the directory. Record the original report, the correction request, and the state response together. Do not delete the original confirmation from the file. A correction that lacks a new acknowledgment is not complete."
      },
      {
        "heading": "Evidence retention",
        "body": "Store the submission file, the confirmation, and the source hire record for the required period. Keep the evidence by employer and state so a later request can be answered quickly. A confirmation held only in an email inbox is not a reliable record. Label the file with the hire date and the report date. The retention period should follow the state rule and the company policy."
      },
      {
        "heading": "Access and privacy",
        "body": "Limit access to new-hire reports because they contain names, addresses, and Social Security numbers. Give support staff a masked view unless the task requires the full field. Keep the crosswalk between the internal employee key and the report in an approved system. Remove temporary files after the submission is confirmed. A shared drive with open access is a privacy finding."
      },
      {
        "heading": "Hire date source",
        "body": "Confirm the hire date used on the report with the HR record and the first day worked. A delayed start or a pre-hire orientation can shift the date the state expects. Record the source field and the person who can change it. Test one employee whose start date moved after the offer. The reviewer should compare the two dates before the report is filed."
      },
      {
        "heading": "State directory changes",
        "body": "Check whether the state changed its portal, file format, or required fields during the review period. A format change can reject a batch that was valid last quarter. Record the notice date and the new test submission. Keep the old confirmation for the same employee so the transition is traceable. Test one submission after the change is announced and keep the result with the old confirmation."
      },
      {
        "heading": "Sampling",
        "body": "Sample hires across states, entities, start dates, and submission routes. Include at least one rehire, one remote employee, and one rejected report. Compare the sample with the full population to see what was missed. Record the selection rule so another reviewer can repeat the work. A sample of only clean reports cannot show whether the control works. Document why a sampled hire was excluded from the test."
      },
      {
        "heading": "Findings and severity",
        "body": "Classify each finding by the days late, the number of reports affected, and whether the state rejected or lost the report. A missing report for an employee with a garnishment order is more severe than a one-day delay. Tie each finding to a hire, a state, and a named owner. Rank the exposure by the number of employees and the length of the delay."
      },
      {
        "heading": "Limitations",
        "body": "The review depends on hire records and state acknowledgments that may be incomplete or corrected after the fact. A state portal can change its confirmation format, and a provider may not share the raw submission. The design measures timeliness and evidence, not legal compliance. State these limits and separate what was observed from what could not be tested. A missing acknowledgment is a finding about evidence, not proof that no report was filed."
      },
      {
        "heading": "Conclusion",
        "body": "Use the review to confirm that every reportable hire reaches the correct state on time and that the employer can prove it. Repair the intake, the submitter, or the correction path before the next hire. Rerun the check after a state change, a provider change, or a new entity. The control is a current reporting map, not a one-time cleanup. Set the next review date and the event that will force an earlier rerun."
      }
    ],
    "sources": [
      {
        "label": "SSA, Employer Responsibilities",
        "url": "https://www.ssa.gov/employer/"
      },
      {
        "label": "HHS Administration for Children and Families, New Hire Reporting",
        "url": "https://www.acf.hhs.gov/css/employers/new-hire-reporting"
      },
      {
        "label": "DOL Wage and Hour Division, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "label": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15"
      }
    ],
    "faq": [
      {
        "question": "Is new-hire reporting the same in every state?",
        "answer": "No. The deadline, the required fields, and the submission route vary by state. Some states require reporting within days of the hire, while others allow a longer window. Read the state guide for each work location. Record the rule used for the review."
      },
      {
        "question": "Does a rehire need a new report?",
        "answer": "Many states require a new report when a former employee returns, even if the person already has a record. Check the state rule and the break-in-service definition. Compare the rehire event with the payroll start date. A missing rehire report is a common finding."
      },
      {
        "question": "What if the provider filed the report?",
        "answer": "The employer still needs the confirmation and a way to correct a rejected report. The contract should name the submitter and the correction owner. Test one provider submission and keep the acknowledgment. A provider promise without a record is not evidence."
      }
    ],
    "related": [
      "outsourcepayrollcompany-multi-state-payroll-tax-registration-coverage-review",
      "outsourcepayrollcompany-payroll-name-and-social-security-number-match-review",
      "outsourcepayrollcompany-year-end-w-2-and-1099-nec-reconciliation-review"
    ],
    "serviceHandoff": {
      "heading": "Prepare a new-hire reporting evidence pack",
      "body": "A Philippines-based payroll support specialist can build the hire population, collect state confirmations, and prepare the timeliness report for owner review. The specialist can also maintain the rejection and correction log. Your payroll owner still approves the filing route and any contact with a state agency.",
      "cta": "Review payroll reporting support",
      "href": "/services/reporting-and-qa"
    }
  },
  {
    "slug": "outsourcepayrollcompany-payroll-name-and-social-security-number-match-review",
    "title": "Payroll name and Social Security number match review",
    "excerpt": "A review design for testing whether payroll identity data matches Social Security records before tax filings, with a controlled exception and correction path.",
    "published": "2026-11-21",
    "updated": "2026-11-21",
    "order": 9952,
    "image": "/daily21/outsourcepayrollcompany/outsourcepayrollcompany-payroll-name-and-social-security-number-match-review.webp",
    "stat": "Four identity fields tested per employee record.",
    "takeaways": [
      "Build the population from active and terminated employees with payroll in the period.",
      "Test the name and number against an authoritative source before the filing deadline.",
      "Separate a formatting difference from an identity mismatch.",
      "Keep duplicate employee records in the population until they are merged or closed.",
      "Classify findings by whether a return was rejected or a wage record was misposted."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "body": "This review asks whether the employer can evidence that each payroll record carries the correct legal name and Social Security number. The scope covers employees with wages in the review period, including terminated employees who still need a W-2. The design tests identity data and the correction path, not the employee's eligibility to work. Record the review period, the entities covered, and the systems used for verification."
      },
      {
        "heading": "Population and unit",
        "body": "Build the population from the payroll register, the HR master file, and the prior year W-2 list. Include employees who were hired, terminated, or rehired during the period. The unit is one employee identity record. A population built only from active employees will miss a terminated worker whose W-2 was rejected. List the source file and extraction date for each record."
      },
      {
        "heading": "Authoritative employee record",
        "body": "Identify the system of record for the legal name and number. A self-service profile, a paper form, and a tax notice can disagree. Record which source the payroll team treats as authoritative and who can change it. A change made in one system without the others creates a mismatch. Test one record that was updated during the year. Record the last update date for the field."
      },
      {
        "heading": "Verification channels",
        "body": "Use the Social Security Administration's verification service or the agency's published process for the review. Record the date, the response, and the person who checked it. A verification response is evidence of a match at a point in time, not a permanent status. Do not store full numbers in an unprotected working file. Keep the result with the employee record."
      },
      {
        "heading": "Match keys beyond the number",
        "body": "Compare the legal name, the date of birth where available, and the employee identifier. A correct number with a misspelled name can still be rejected. A name change after marriage or a legal order needs a new source document. Test a hyphenated name and a suffix such as Junior. A match on the number alone is not enough for a clean review."
      },
      {
        "heading": "Exception categories",
        "body": "Separate a formatting difference from a true mismatch and a duplicate record. A missing digit, a transposed number, and an extra space have different fixes. A number that belongs to another person is a serious exception. Record the category, the evidence, and the owner for each exception. A generic error label hides the action required. Count each category separately in the report."
      },
      {
        "heading": "Name change handling",
        "body": "Confirm that a legal name change reached payroll before the next tax filing. The employee should provide a new Social Security card or an official document. Update the name in payroll, HR, and the provider system. Keep the source document with the change record. A name change applied to only one system creates a later rejection. Check the provider copy on the same day."
      },
      {
        "heading": "Duplicate identity",
        "body": "Search for employees who appear twice under different identifiers or name spellings. A rehire, a transfer, or a manual entry can create a second record. Compare the number, the name, and the bank destination. Merge or close the duplicate under an approved procedure. A duplicate that receives two W-2s is a finding even when the total pay is correct. Keep both records until the merge is approved."
      },
      {
        "heading": "Tax filing dependency",
        "body": "Check whether an unresolved mismatch will affect the next W-2, 941, or state return. A rejected W-2 can delay the employee's filing and create a penalty. Record the filing deadline and the correction window. Escalate a mismatch that cannot be resolved before the deadline. A late correction is better than no correction, but it still needs an owner. The filing owner should see the exception before the deadline."
      },
      {
        "heading": "Correction path",
        "body": "Define how a corrected W-2 or a revised payroll record is issued. Keep the original form, the correction request, and the new form together. Explain the change to the employee in plain language. Do not overwrite the original file. A correction that only changes the payroll system leaves the tax record wrong. A new form should reference the original in the file."
      },
      {
        "heading": "Provider and new-hire reporting",
        "body": "Check whether the payroll provider or a new-hire reporting vendor uses the same identity data. A mismatch can cause a rejected new-hire report as well as a rejected W-2. Test one provider record against the employer master. Record the correction and the confirmation. A provider that fixes its own copy may not fix the state filing. Confirm the state acknowledgment after the provider fix."
      },
      {
        "heading": "Access and privacy",
        "body": "Restrict access to full Social Security numbers and identity documents. Give support staff a masked value and an internal employee key. Keep the verification result in an approved system, not a shared spreadsheet. Remove temporary files after the correction is confirmed. A privacy lapse is a separate finding from a data mismatch. Review access to the file after the correction is closed."
      },
      {
        "heading": "Recertification cadence",
        "body": "Set a review cadence that matches the payroll and filing calendar. Test new hires before the first payroll, and test the full population before year-end. Rerun the check after a name change, a rehire, or a system migration. Record the date and the reviewer. A one-time cleanup does not prevent the next mismatch. Add the check to the first payroll of each quarter."
      },
      {
        "heading": "Evidence retention",
        "body": "Store the verification result, the exception record, and the correction evidence for the required period. Keep the evidence by employee and tax year. A confirmation that lives only in a portal session is not a record. Label the file with the review date and the source. The retention period should follow the tax and company rules. A reviewer should be able to find the record by employee identifier."
      },
      {
        "heading": "Employee self-service updates",
        "body": "Review how an employee change flows from self-service to payroll and the provider. A name or number update entered in one system can leave the others unchanged. Require a source document and a confirmation before the record is used for a filing. Test one self-service change during the period. Keep the confirmation and the source document with the employee record."
      },
      {
        "heading": "Termination and final form",
        "body": "Confirm that a terminated employee's identity data is checked before the final W-2 is issued. A wrong name or number is harder to correct after the employee leaves. Record the last known contact and the delivery method. Keep the final form and the verification together. Record the delivery method, the date the form was sent, and the confirmation that the employee received it."
      },
      {
        "heading": "Vendor data exchange",
        "body": "Map every file that carries the name and number between HR, payroll, and the provider. A field that is truncated in a fixed-width file can create a false mismatch. Test the file layout after a vendor change. Record the field length and the validation rule. Keep the layout version with the test result so the next vendor change can be compared."
      },
      {
        "heading": "Metric and reporting",
        "body": "Report the number of records tested, the exceptions by category, and the days to correction. A count of mismatches without an age measure hides a backlog. Show the trend by entity and source system. Give the owner a short list of records still open. Include the oldest open exception, its owner, and the next review date so the report leads to a decision rather than a count."
      },
      {
        "heading": "Owner escalation",
        "body": "Name the person who decides a disputed identity record and the backup who covers an absence. A support specialist can prepare the evidence but should not choose the legal name. Record the escalation date and the decision. A record that waits for an unavailable owner misses the filing. The decision should name the source document used and the date the record was corrected."
      },
      {
        "heading": "Sampling",
        "body": "Sample across entities, hire dates, and employment status. Include at least one new hire, one terminated employee, one name change, and one duplicate. Compare the sample with the full population. Record the selection rule so another reviewer can repeat the work. A sample of only clean records cannot show whether the control works. Include one record that was corrected during the period."
      },
      {
        "heading": "Findings and severity",
        "body": "Classify each finding by whether a tax form was rejected, whether wages were misposted, and how many periods are affected. A duplicate record that produced two W-2s is more severe than a formatting difference caught before filing. Tie each finding to an employee, a form, and a named owner. Rank the exposure by the filing deadline. Show the affected tax year beside each finding."
      },
      {
        "heading": "Limitations",
        "body": "The review depends on verification responses and source documents that may be delayed or incomplete. A name can change after the check, and a provider may correct its record without telling the employer. The design measures identity evidence, not legal status or tax liability. State these limits and separate observed mismatches from missing records. A missing response is not proof that the number is wrong."
      },
      {
        "heading": "Conclusion",
        "body": "Use the review to confirm that payroll identity data matches an authoritative source before each filing. Repair the source record, the provider copy, and the tax form together. Rerun the check after a hire, a name change, or a system change. The control is a current identity record, not a year-end scramble. Set the next review date and the event that will force an earlier rerun."
      }
    ],
    "sources": [
      {
        "label": "SSA, Employer Responsibilities",
        "url": "https://www.ssa.gov/employer/"
      },
      {
        "label": "IRS, About Form W-2",
        "url": "https://www.irs.gov/forms-pubs/about-form-w-2"
      },
      {
        "label": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15"
      },
      {
        "label": "DOL Wage and Hour Division, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      }
    ],
    "faq": [
      {
        "question": "Is a name mismatch the same as a wrong number?",
        "answer": "No. A misspelled name can often be fixed with a corrected record, while a number that belongs to another person is a serious identity exception. Separate the categories before assigning a correction. Keep the source document for each change. A generic error code hides the action required."
      },
      {
        "question": "How often should the match be tested?",
        "answer": "Test new hires before the first payroll and the full population before year-end. Rerun after a name change, a rehire, or a system migration. Record the date and the reviewer. A one-time cleanup does not prevent the next mismatch."
      },
      {
        "question": "Can a provider fix the record for us?",
        "answer": "The provider can update its copy, but the employer still owns the tax filing and the employee record. Confirm that the correction reached payroll and the state filing. Keep the confirmation. A provider fix that stops at its portal leaves the employer exposed."
      }
    ],
    "related": [
      "outsourcepayrollcompany-state-new-hire-reporting-timeliness-review",
      "outsourcepayrollcompany-year-end-w-2-and-1099-nec-reconciliation-review",
      "outsourcepayrollcompany-payroll-retention-index-retrieval-test"
    ],
    "serviceHandoff": {
      "heading": "Prepare an identity match evidence pack",
      "body": "A Philippines-based payroll support specialist can build the employee population, run the verification queue, and prepare the exception list for owner review. The specialist can also maintain the correction log and the source-document index. Your payroll and tax owners still approve any change to an employee identity record or tax form.",
      "cta": "Review payroll reporting support",
      "href": "/services/reporting-and-qa"
    }
  },
  {
    "slug": "outsourcepayrollcompany-401-k-deferral-remittance-timing-review",
    "title": "401(k) deferral remittance timing review",
    "excerpt": "A review design for testing whether employee deferrals leave payroll and reach the plan within the required window, with a traceable deposit and correction record.",
    "published": "2026-11-21",
    "updated": "2026-11-21",
    "order": 9953,
    "image": "/daily21/outsourcepayrollcompany/outsourcepayrollcompany-401-k-deferral-remittance-timing-review.webp",
    "stat": "Three dates compared for every deferral deposit.",
    "takeaways": [
      "Build the population from payroll deferrals, not from the plan statement.",
      "Measure from the date the amount was withheld from pay, not the pay date alone.",
      "Test the small-plan safe harbor separately from the general rule.",
      "Reconcile each deposit to the plan recordkeeper and the payroll register.",
      "Classify findings by the days late and whether lost earnings were calculated."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "body": "This review asks whether employee deferrals were withheld, funded, and credited to the plan within the applicable deadline. The scope covers elective deferrals, loan repayments, and any employer contribution transmitted with payroll. The unit is one payroll deposit for one plan and pay period. The design tests timing and evidence, not the plan's investment performance. Record the plan year, the pay groups, and the recordkeeper before the sample is drawn."
      },
      {
        "heading": "Population and unit",
        "body": "Build the population from payroll deduction lines and the plan recordkeeper's contribution file. Include zero deposits for a pay period when deferrals were expected. The unit is one remittance from payroll to the plan. A population built from the recordkeeper alone will miss a payroll deduction that was never sent. List the source report and extraction date for each pay period."
      },
      {
        "heading": "Plan document and payroll calendar",
        "body": "Read the plan document and the payroll calendar together. The document defines the plan year and the remittance obligation, while the calendar defines the pay date and the payroll close. Record the plan's definition of compensation and the effective date of any change. A plan amendment can change the timing rule without changing the payroll system. Keep the document version with the review file."
      },
      {
        "heading": "Deposit definition and outside time",
        "body": "Identify the date the amount was withheld from the employee's pay. For a plan that can reasonably segregate the amount, the outer limit is generally the earliest date the amount can be segregated from the employer's general assets. For a small plan, a safe harbor may extend the period. Read the current rule and the plan document before measuring. Record the basis used for each plan."
      },
      {
        "heading": "Small-plan safe harbor",
        "body": "Confirm whether the plan qualifies for the small-plan deposit rule and whether the employer elected it. The safe harbor is not available to every plan, and the conditions must be documented. A plan that relies on the safe harbor still needs a timely deposit within the stated period. Record the eligibility facts and the plan's election. Do not apply the rule from memory."
      },
      {
        "heading": "Timing measurement",
        "body": "Measure the days between the withholding date and the date the plan recordkeeper credited the deposit. Use the recordkeeper's transaction date rather than the bank debit date. A deposit initiated on time but credited late is still a late contribution. Report the median, the longest delay, and the number of deposits outside the limit. Separate a weekend or holiday effect from a process delay."
      },
      {
        "heading": "Funding path",
        "body": "Trace the money from the payroll register to the bank debit and the plan account. A payroll provider may use a separate funding account or a sweep. Confirm that the amount leaves the correct account and reaches the plan trust. Record the bank reference and the recordkeeper confirmation on the same line. A funding delay at the bank is still a plan timing issue."
      },
      {
        "heading": "Reconciliation to the plan recordkeeper",
        "body": "Compare the payroll deferral total with the recordkeeper's contribution file by employee and pay period. A total that matches can still hide a misallocated employee. Test one employee with a deferral change and one with a loan repayment. Record the difference and the correction. A reconciliation that stops at the total is not enough. Keep the employee-level file with the reconciliation."
      },
      {
        "heading": "Loan repayments",
        "body": "Treat a loan repayment as a plan contribution with its own timing and allocation. Check that the repayment amount, the loan number, and the employee match the recordkeeper. A missed repayment can become a deemed distribution. Record the correction and the plan administrator's decision. Do not net a loan repayment against a deferral without a documented rule. The plan administrator should confirm the loan terms."
      },
      {
        "heading": "Deferral change effective dates",
        "body": "Test a deferral rate change from the payroll effective date to the first affected pay period. A change entered after the payroll close can be applied to the wrong check. Record the election date, the payroll effective date, and the first deduction. A late start creates a correction and a possible missed match. Keep the employee election with the payroll record."
      },
      {
        "heading": "Corrections and lost earnings",
        "body": "Define how a late deposit is corrected and how lost earnings are calculated. The plan administrator and a qualified adviser should approve the method. Record the principal, the earnings, and the date the correction reaches the plan. Keep the employee notice if one is required. A correction that returns the principal without earnings is incomplete. The correction should reference the original deposit date."
      },
      {
        "heading": "Provider responsibility",
        "body": "Confirm which party moves the money and which party confirms the plan credit. A payroll provider, a recordkeeper, and a third-party administrator may each hold part of the evidence. The contract should name the timing owner and the escalation path. Test one late deposit and follow the notification. The employer remains responsible even when a vendor performs the task. Keep the vendor contacts and the escalation path with the file."
      },
      {
        "heading": "Evidence retention",
        "body": "Store the payroll register, the bank debit, the recordkeeper confirmation, and the reconciliation for the required period. Keep the evidence by plan year and pay period. A confirmation held only in a vendor portal is hard to retrieve after a change. Label the file with the plan and the deposit date. The retention period should follow the plan and company rules."
      },
      {
        "heading": "Participant notice",
        "body": "Confirm how the plan tells participants about a late or corrected deposit. A notice may be required by the plan or the correction method. Record the notice date, the recipient, and the content. A correction that reaches the plan but not the participant is incomplete. Keep the notice, the recipient list, and the delivery date with the correction record for the plan year."
      },
      {
        "heading": "Employer match and true-up",
        "body": "Check the employer match and any true-up against the plan formula and the payroll deferral. A match deposited with the deferral can still be wrong if the compensation definition differs. Record the formula, the payroll period, and the deposit. Test one employee who reached the match limit. Record the result for each pay period in the plan file so the match can be rebuilt."
      },
      {
        "heading": "Plan audit trail",
        "body": "Keep the plan document, the payroll deduction, the bank debit, and the recordkeeper credit in one trace. An auditor should be able to follow a single contribution from pay to plan. Record the reviewer and the date. A trace that stops at the bank cannot prove the plan received the money. The reviewer should sign the trace before the file is closed."
      },
      {
        "heading": "Vendor transition",
        "body": "Test the first payroll after a recordkeeper or payroll provider change. A new file layout can delay the deposit even when the payroll is correct. Record the cutover date and the first confirmation. Keep the last file from the old vendor for comparison. Keep a parallel file for the first two cycles so a missing employee is visible before the plan notice arrives."
      },
      {
        "heading": "Metric and reporting",
        "body": "Report the number of deposits, the days from withholding to plan credit, and the count outside the limit. Show the longest delay and the amount affected. A median alone can hide a small set of very late deposits. Give the plan administrator the open correction list. Include the oldest open correction and the participant count so the plan owner can set the next action."
      },
      {
        "heading": "Sampling",
        "body": "Sample deposits across pay groups, months, and deposit methods. Include at least one late deposit, one loan repayment, and one deferral change. Compare the sample with the full population. Record the selection rule so another reviewer can repeat the work. A sample of only clean deposits cannot show whether the control works. Include one deposit that was corrected after the plan credit."
      },
      {
        "heading": "Findings and severity",
        "body": "Classify each finding by the days late, the amount affected, and whether lost earnings were calculated. A late deposit for many employees is more severe than a single small deposit. Tie each finding to a pay period, a plan, and a named owner. Rank the exposure by the number of participants and the length of the delay. Show the affected participants beside each finding."
      },
      {
        "heading": "Limitations",
        "body": "The review depends on payroll and recordkeeper dates that may use different time zones or cutoffs. A plan can change its recordkeeper, and a vendor may not retain the original confirmation. The design measures timing and evidence, not legal compliance. State these limits and separate observed delays from missing records. A missing confirmation is not proof that the deposit was late."
      },
      {
        "heading": "Conclusion",
        "body": "Use the review to confirm that deferrals leave payroll and reach the plan within the applicable window. Repair the funding path, the recordkeeper file, or the correction process before the next payroll. Rerun the measure after a provider change or a plan amendment. The control is a traceable deposit, not a vendor promise. Set the next review date and the trigger for an earlier rerun."
      }
    ],
    "sources": [
      {
        "label": "DOL Employee Benefits Security Administration",
        "url": "https://www.dol.gov/agencies/ebsa"
      },
      {
        "label": "eCFR, 29 CFR Part 2510",
        "url": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2510"
      },
      {
        "label": "IRS, 401(k) Plan Overview",
        "url": "https://www.irs.gov/retirement-plans/plan-sponsor/401k-plan-overview"
      },
      {
        "label": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15"
      }
    ],
    "faq": [
      {
        "question": "When must deferrals be deposited?",
        "answer": "The deadline depends on the plan and the facts. A small plan may qualify for a safe harbor, while other plans generally must deposit as soon as the amount can reasonably be segregated. Read the plan document and the current rule. Record the basis used for each deposit."
      },
      {
        "question": "Does the pay date start the clock?",
        "answer": "The clock generally starts when the amount is withheld from pay, not when the payroll file is approved. A pay date can be later than the withholding date. Use the payroll record to establish the start. Record both dates in the review."
      },
      {
        "question": "What if a deposit was late?",
        "answer": "The plan administrator should correct the deposit and calculate lost earnings under an approved method. Keep the principal, earnings, and confirmation together. Notify the employee when required. A correction without earnings is incomplete."
      }
    ],
    "related": [
      "outsourcepayrollcompany-payroll-deposit-frequency-lookback-review",
      "outsourcepayrollcompany-payroll-deduction-limit-compliance-review",
      "outsourcepayrollcompany-time-to-pay-measurement-and-audit-trail-review"
    ],
    "serviceHandoff": {
      "heading": "Prepare a deferral remittance evidence pack",
      "body": "A Philippines-based payroll support specialist can assemble the payroll deduction file, the bank debit, the recordkeeper confirmation, and the timing report for owner review. The specialist can also maintain the late-deposit and correction log. Your plan administrator and payroll owner still approve any correction and the lost-earnings method.",
      "cta": "Review payroll reporting support",
      "href": "/services/reporting-and-qa"
    }
  },
  {
    "slug": "outsourcepayrollcompany-payroll-wage-statement-content-review",
    "title": "Payroll wage statement content review",
    "excerpt": "A review design for testing whether each pay statement shows the elements the applicable state requires, with a readable and retrievable record for every pay period.",
    "published": "2026-11-21",
    "updated": "2026-11-21",
    "order": 9954,
    "image": "/daily21/outsourcepayrollcompany/outsourcepayrollcompany-payroll-wage-statement-content-review.webp",
    "stat": "Five required elements checked per pay statement.",
    "takeaways": [
      "Build the jurisdiction list from work locations, not from the payroll system default.",
      "Test the statement content against the state rule for each pay period.",
      "Check rates, hours, deductions, and net pay against the payroll register.",
      "Confirm that electronic delivery has a valid consent and a retrievable copy.",
      "Classify findings by whether the employee could verify the calculation."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "body": "This review asks whether each pay statement contains the information the applicable state requires and whether the employer can produce a copy. The scope covers statements for every pay group and work location in the review period. The unit is one employee statement for one pay period. The design tests content and delivery, not the accuracy of the underlying wage rate. Record the jurisdictions and the review period before the sample is drawn."
      },
      {
        "heading": "Population and unit",
        "body": "Build the population from the payroll register and the statement delivery log. Include terminated employees and employees on leave who received pay. The unit is one statement for one employee and pay period. A population built only from active employees will miss a final statement that was never delivered. List the source file and extraction date for each pay group."
      },
      {
        "heading": "Jurisdiction inventory",
        "body": "List every state and local jurisdiction where an employee worked during the period. A remote employee can bring a statement rule from a state the payroll system does not treat as primary. Compare the list with the payroll tax profile and the work location file. Record the basis for each jurisdiction. A default to the headquarters state can miss a required element."
      },
      {
        "heading": "Required elements baseline",
        "body": "Collect the state requirement for each jurisdiction in the sample. Common elements include the employer name and address, the employee name, the pay period, the pay date, gross wages, deductions, and net pay. Some states add rate, hours, or leave balance. Record the citation and the date the rule was checked. Do not rely on a template from another state."
      },
      {
        "heading": "Rates and hours",
        "body": "Check that the statement shows the rate and hours for each pay type when the state requires them. A salary employee may still need overtime hours and a regular rate. A bonus or a shift differential needs its own line or a clear description. Compare the statement with the payroll register line by line. A correct net pay can still hide a missing rate."
      },
      {
        "heading": "Deductions and additions",
        "body": "List each deduction and addition with a description the employee can understand. A code such as a three-letter abbreviation may satisfy the system but not the state rule. Check the order and the total against the register. A deduction that is not described can become a dispute. Test one voluntary deduction and one legal order. Name the source of each voluntary deduction."
      },
      {
        "heading": "Employer identity and pay period",
        "body": "Confirm the legal employer name and address on the statement. A parent brand or a product name may not match the entity that paid the employee. Check the pay period start and end dates and the pay date. A statement that shows only a check date can fail a state rule. Record the entity and the period on the review line."
      },
      {
        "heading": "Net pay and payment method",
        "body": "Compare the net pay on the statement with the payroll register and the bank or card record. Show the payment method and the last four digits of the account where required. A split deposit needs a clear allocation. A pay card needs the fee disclosure that the state requires. Test one split deposit and one card payment. Keep the bank or card reference with the statement sample."
      },
      {
        "heading": "Delivery and access",
        "body": "Confirm how the employee receives the statement and how long it remains available. A portal that requires a current employee login can lock out a terminated worker. Test the retrieval path as the employee would use it. Keep a sample statement from the same system the employee sees. A printed copy from an administrator view is not proof of employee access."
      },
      {
        "heading": "Electronic consent and language",
        "body": "Check that electronic delivery has the consent the state requires and that the employee can withdraw it. Confirm the statement is readable on a phone and that the language matches the employee's election where required. A consent buried in an onboarding packet may not satisfy the rule. Record the consent date and the delivery method. Keep the consent record with the delivery log."
      },
      {
        "heading": "Correction path",
        "body": "Define how a wrong statement is corrected and how the employee is notified. Keep the original statement, the correction, and the notice together. A corrected statement should show the same period and the changed element. Do not overwrite the original file. A correction that only fixes the payroll system leaves the employee with the wrong document. The employee should receive the corrected statement."
      },
      {
        "heading": "Record retention",
        "body": "Store a copy of each statement and the delivery evidence for the required period. Keep the record by employee, entity, and pay period. A statement held only in a vendor portal is hard to retrieve after a provider change. Label the file with the pay date and the statement version. The retention period should follow the state and company rules."
      },
      {
        "heading": "Provider configuration",
        "body": "Compare the provider's statement template with the state requirement for each jurisdiction. A template that works in one state can omit a required element in another. Request a sample for each pay group after a configuration change. Record the template version and the approval. A provider default is not a compliance decision. Keep the approval date with the template version."
      },
      {
        "heading": "Leave balances and accruals",
        "body": "Check whether the state requires a leave balance or accrual on the statement. A balance that is wrong can mislead the employee even when the pay is correct. Compare the statement with the leave system. Record the source and the as-of date. Record the review date and the owner who confirmed the requirement. The statement should show the as-of date."
      },
      {
        "heading": "Tips and commissions",
        "body": "Show tip and commission income in a way the employee can trace to the source record. A combined line can hide a missing tip credit or a commission adjustment. Test one employee with both. Record the source report and the pay period. Keep the source report with the statement sample so a later reviewer can repeat the trace. The employee should be able to match the total to the source report."
      },
      {
        "heading": "Language and accessibility",
        "body": "Confirm that the statement is readable on the device the employee uses. A small font or a scanned image can fail an accessibility requirement. Test the portal on a phone and with a screen reader where required. Record the result and the fix. Record the device, the browser, and the date of the test. Keep the test result with the template change."
      },
      {
        "heading": "Employee acknowledgment",
        "body": "Decide whether the state or the company requires an acknowledgment of receipt. An electronic view without a record may not prove delivery. Keep the acknowledgment or the access log. Test one employee who withdrew consent. Record the date and the method. Name the owner who can change the delivery method. Record the withdrawal date and the new delivery method in the employee file."
      },
      {
        "heading": "Rate change disclosure",
        "body": "Check how a pay rate change is shown on the first statement after the change. A new rate without an effective date can confuse the employee. Record the old rate, the new rate, and the period. Test one promotion and one annual increase. Keep the approved change record with the first statement. The statement should show the effective date of the new rate."
      },
      {
        "heading": "Metric and reporting",
        "body": "Report the number of statements sampled, the missing elements by jurisdiction, and the correction time. A count without a jurisdiction split hides a template that works in one state only. Show the trend by pay group. Give the payroll owner the open template changes. Include the oldest open template fix and the owner responsible for it. Show the count by jurisdiction and by pay group."
      },
      {
        "heading": "Sampling",
        "body": "Sample statements across states, pay groups, and employment status. Include at least one terminated employee, one remote employee, and one electronic statement. Compare the sample with the full population. Record the selection rule so another reviewer can repeat the work. A sample of only current employees cannot show whether final statements are delivered. Include one statement from a terminated employee."
      },
      {
        "heading": "Findings and severity",
        "body": "Classify each finding by whether the employee could verify the calculation and whether the state requires the missing element. A missing deduction description is more serious than a formatting difference. Tie each finding to a statement, a jurisdiction, and a named owner. Rank the exposure by the number of employees and pay periods. Show the missing element and the citation beside each finding."
      },
      {
        "heading": "Limitations",
        "body": "The review depends on state rules and statement samples that may change during the period. A provider can update a template without notifying the employer, and an employee may not report a delivery problem. The design measures content and access, not the accuracy of every wage calculation. State these limits and separate observed gaps from missing records. State the review date for each state rule used."
      },
      {
        "heading": "Conclusion",
        "body": "Use the review to confirm that each pay statement shows the required elements and that the employee can retrieve it. Repair the template, the delivery path, or the source data before the next payroll. Rerun the check after a state change, a provider change, or a new pay group. The control is a current statement template, not a one-time sample. Set the next review date and the event that will force an earlier rerun."
      }
    ],
    "sources": [
      {
        "label": "DOL Wage and Hour Division, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "label": "DOL Wage and Hour Division, Fact Sheet 21",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "label": "IRS, Employment Tax Recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping"
      },
      {
        "label": "DOL Wage and Hour Division, State Payday Requirements",
        "url": "https://www.dol.gov/agencies/whd/state/payday"
      }
    ],
    "faq": [
      {
        "question": "Is a pay stub required in every state?",
        "answer": "Most states require some form of wage statement, but the content and delivery rules vary. Some states require a written or electronic statement with every payment. Check the rule for each work location. Record the citation and the review date."
      },
      {
        "question": "Can the statement be delivered electronically?",
        "answer": "Electronic delivery is allowed in many states when the employee consents and can access and print the statement. Confirm the consent and the retrieval path. A portal that locks out a terminated employee can fail the requirement. Keep a sample of what the employee sees."
      },
      {
        "question": "What if the statement is missing an element?",
        "answer": "Correct the template and issue a corrected statement where the state requires it. Keep the original and the correction together. Notify the employee if the change affects their ability to verify pay. Assign an owner to the template change."
      }
    ],
    "related": [
      "outsourcepayrollcompany-payroll-records-retention-schedule-adherence",
      "outsourcepayrollcompany-payslip-dispute-resolution-evidence-quality",
      "outsourcepayrollcompany-payroll-retention-index-retrieval-test"
    ],
    "serviceHandoff": {
      "heading": "Prepare a wage statement evidence pack",
      "body": "A Philippines-based payroll support specialist can collect statement samples, build the jurisdiction checklist, and prepare the content test for owner review. The specialist can also maintain the delivery and correction log. Your payroll owner and counsel still decide the required content and any correction.",
      "cta": "Review payroll reporting support",
      "href": "/services/reporting-and-qa"
    }
  },
  {
    "slug": "outsourcepayrollcompany-payroll-deposit-frequency-lookback-review",
    "title": "Payroll deposit frequency lookback review",
    "excerpt": "A review design for testing whether the employer's federal deposit schedule matches the lookback period, with a traceable calculation and a controlled change path.",
    "published": "2026-11-21",
    "updated": "2026-11-21",
    "order": 9955,
    "image": "/daily21/outsourcepayrollcompany/outsourcepayrollcompany-payroll-deposit-frequency-lookback-review.webp",
    "stat": "Four quarters of deposit history checked per employer.",
    "takeaways": [
      "Rebuild the lookback total from the quarterly returns, not from the bank statement.",
      "Confirm the deposit schedule for each entity and tax period.",
      "Test the first deposit after a schedule change, not only the notice.",
      "Check that the provider configuration matches the IRS notice.",
      "Classify findings by the number of deposits late and the penalty exposure."
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "body": "This review asks whether each employer determined its federal deposit schedule from the correct lookback period and applied that schedule to every payroll. The scope covers federal income tax, Social Security, and Medicare deposits for the review year. The unit is one legal entity and one deposit period. The design tests the schedule determination and the operating evidence, not the employer's overall tax liability. Record the entities, the tax year, and the source returns before the sample is drawn."
      },
      {
        "heading": "Population and unit",
        "body": "Build the population from the quarterly returns and the deposit confirmations for each entity. Include entities with no taxable wages in a quarter when they still filed a return. The unit is one entity and one deposit period. A population built from the bank statement will miss a deposit made from another account. List the source return and the confirmation for each period."
      },
      {
        "heading": "Lookback period",
        "body": "Identify the four-quarter lookback period that applies to the current year. The period usually runs from July through June of the prior year, but a new employer or a successor can follow a different rule. Record the exact quarters and the return amounts used. A lookback built from the calendar year is a common error. Keep the calculation with the schedule notice."
      },
      {
        "heading": "Threshold measurement",
        "body": "Add the employment tax reported for the lookback period and compare it with the applicable threshold. Use the total tax reported on the quarterly returns, not the amount deposited. A credit or an adjustment can change the total. Record the arithmetic and the source line for each quarter. A threshold decision made from memory is not evidence. Keep the arithmetic in the review workbook."
      },
      {
        "heading": "Deposit schedule assignment",
        "body": "Confirm whether the employer is a monthly or semiweekly depositor for the period. Record the IRS notice, the calculation, and the effective date. A new employer may start as a monthly depositor regardless of the lookback total. A successor employer can inherit a schedule. Compare the assignment with the payroll system configuration. Compare the assignment with the prior year notice."
      },
      {
        "heading": "New employer rules",
        "body": "Test the first year of a new entity separately from an established employer. A new employer generally starts as a monthly depositor, but the rule depends on the facts and the IRS guidance. Record the entity start date and the first return. A new entity that uses the parent's semiweekly schedule may deposit late. Confirm the schedule before the first payroll."
      },
      {
        "heading": "Calendar and holidays",
        "body": "Map each deposit due date to the payroll calendar and the federal holiday schedule. A semiweekly deposit can be due within days of the pay date, and a holiday can move the deadline. Record the legal due date and the internal release date. A deposit prepared on the due date can miss the cutoff. Build the calendar before the quarter begins."
      },
      {
        "heading": "EFTPS and confirmation",
        "body": "Confirm that each deposit was submitted through the electronic payment system and that the confirmation was retained. Compare the confirmation amount and date with the payroll register. A bank debit without an EFTPS acknowledgment is not proof of a timely deposit. Record the confirmation number and the settlement date. Store the evidence with the return. Store the confirmation with the quarterly return."
      },
      {
        "heading": "State deposit schedules",
        "body": "Review state withholding and unemployment deposits separately from the federal schedule. A state can set a different frequency and a different threshold. Record the state rule and the provider configuration for each account. A federal schedule does not carry over to a state account. Test one state deposit in the sample. Test one state account that uses a different frequency from the federal schedule."
      },
      {
        "heading": "Midyear changes",
        "body": "Test what happens when the lookback total crosses a threshold or the IRS changes the schedule. Confirm that the new schedule starts on the effective date and that the provider applied it. Record the notice, the change ticket, and the first deposit under the new schedule. A late configuration change can create a penalty before anyone notices. Keep the old and new confirmations side by side."
      },
      {
        "heading": "Provider configuration",
        "body": "Compare the provider's deposit schedule with the IRS notice and the payroll calendar. A provider can default to a schedule that fits most clients but not this entity. Request a written confirmation after any change. Test one payroll after the change. A provider setting that is not documented is an open item. Keep the written confirmation with the payroll calendar."
      },
      {
        "heading": "Penalty and notice review",
        "body": "Check how an IRS deposit notice reaches the payroll team and who owns the response. A penalty notice can reveal a schedule error before the next return. Record the notice date, the response deadline, and the person assigned. A notice that sits in a general mailbox can become a second penalty. Escalate a notice with a short response window. Record the penalty amount and the correction owner."
      },
      {
        "heading": "Evidence retention",
        "body": "Store the lookback calculation, the schedule notice, the deposit confirmations, and the reconciliation for the required period. Keep the evidence by entity and tax year. A confirmation held only in the provider portal is hard to retrieve after a change. Label the file with the tax period and the schedule. The retention period should follow the tax and company rules."
      },
      {
        "heading": "Successor employer rules",
        "body": "Test an entity that acquired a business or inherited a payroll. A successor can inherit the predecessor's deposit schedule and lookback history. Record the acquisition date and the IRS guidance used. Compare the first deposit with the inherited schedule. If the history is incomplete, document the assumption and ask the IRS or a qualified adviser. Keep the acquisition agreement with the schedule evidence."
      },
      {
        "heading": "Trust fund exposure",
        "body": "Explain why an unremitted withholding amount is not just a late payment. The tax is held for the government, and a repeated delay can expose the responsible person. Record the escalation to the tax owner. Keep the penalty notice with the deposit evidence. A pattern of late deposits should trigger a control review, not only a payment. The tax owner should see the notice within one business day."
      },
      {
        "heading": "Deposit method and cutoffs",
        "body": "Confirm whether the employer uses EFTPS, a provider batch, or a same-day payment method. Each method has a different cutoff and confirmation. Record the method for each entity and pay group. Test one deposit near a holiday. Record the cutoff time in the payroll calendar for each method. The calendar should show the cutoff in local time for each method."
      },
      {
        "heading": "Quarterly reconciliation",
        "body": "Reconcile the deposits for the quarter with the amount reported on the return. A schedule error often appears as a small balance before it becomes a penalty. Record the difference and the owner. Complete the reconciliation before the return is signed. Keep the reconciliation with the return and the deposit confirmations. The reviewer should sign the reconciliation before the return."
      },
      {
        "heading": "Penalty abatement file",
        "body": "Build a file that explains a late deposit and the correction taken. Include the due date, the payment date, the cause, and the control change. A request for relief needs the same evidence as the review. Record the submission and the response. The file should show what changed so the same late deposit does not recur. Keep the agency response with the original notice."
      },
      {
        "heading": "Metric and reporting",
        "body": "Report the number of deposits reviewed, the late count, and the days from due date to confirmation. Show the result by entity and schedule. A monthly average can hide a semiweekly problem. Give the tax owner the open notice list. Include the next due date and the owner who will confirm the deposit. Show the result by entity and by deposit schedule."
      },
      {
        "heading": "Sampling",
        "body": "Sample deposits across entities, quarters, and schedules. Include at least one semiweekly period, one holiday period, and one deposit after a schedule change. Compare the sample with the full population. Record the selection rule so another reviewer can repeat the work. A sample of only monthly deposits cannot show whether the semiweekly control works. Include one deposit made near a federal holiday."
      },
      {
        "heading": "Findings and severity",
        "body": "Classify each finding by the number of deposits late, the amount of tax affected, and whether a penalty notice was received. A wrong schedule for an entity with large payroll is more severe than a single late deposit. Tie each finding to an entity, a period, and a named owner. Rank the exposure by the number of pay dates and the tax amount."
      },
      {
        "heading": "Limitations",
        "body": "The review depends on returns and confirmations that may be amended or delayed. An IRS notice can arrive after the review period, and a provider may change a setting without notice. The design measures schedule evidence, not the final tax liability. State these limits and separate observed errors from missing records. A missing confirmation is not proof that a deposit was late."
      },
      {
        "heading": "Conclusion",
        "body": "Use the review to confirm that each entity's deposit schedule matches its lookback period and that the provider applied it. Repair the calculation, the configuration, or the calendar before the next payroll. Rerun the check after a new entity, a threshold change, or a provider change. The control is a current schedule, not a prior-year assumption. Set the next review date and the event that will force an earlier rerun."
      }
    ],
    "sources": [
      {
        "label": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15"
      },
      {
        "label": "IRS, Employment Tax Due Dates",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-due-dates"
      },
      {
        "label": "IRS, EFTPS",
        "url": "https://www.irs.gov/payments/eftps-the-electronic-federal-tax-payment-system"
      },
      {
        "label": "DOL, Unemployment Insurance",
        "url": "https://www.dol.gov/general/topic/unemployment-insurance"
      }
    ],
    "faq": [
      {
        "question": "How is the deposit schedule determined?",
        "answer": "The IRS uses the employment tax reported during a four-quarter lookback period to assign a monthly or semiweekly schedule. A new employer can start with a different rule. Confirm the calculation and the notice. Record the source returns for each quarter."
      },
      {
        "question": "Does a schedule change apply immediately?",
        "answer": "The notice states the effective date, and the provider must apply it from that date. Test the first deposit under the new schedule. A setting changed after the effective date can create a late deposit."
      },
      {
        "question": "What if the provider uses the wrong schedule?",
        "answer": "Document the notice, the provider ticket, and the first corrected deposit. Ask the provider to confirm the setting in writing. Keep the penalty notice and the response together. The employer remains responsible for the deposit."
      }
    ],
    "related": [
      "outsourcepayrollcompany-year-end-w-2-and-1099-nec-reconciliation-review",
      "outsourcepayrollcompany-payroll-tax-registration-coverage-review",
      "outsourcepayrollcompany-multi-state-payroll-tax-registration-coverage-review"
    ],
    "serviceHandoff": {
      "heading": "Prepare a deposit schedule evidence pack",
      "body": "A Philippines-based payroll support specialist can rebuild the lookback calculation, collect deposit confirmations, and prepare the schedule comparison for owner review. The specialist can also maintain the notice and change log. Your payroll and tax owners still approve the schedule and any response to the IRS.",
      "cta": "Review payroll reporting support",
      "href": "/services/reporting-and-qa"
    }
  }
];
