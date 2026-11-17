// Generated from the 2026-11-17 content batch.
export const nov17CurrentBlogDetails = {
  "outsourcepayrollcompany-reconcile-imported-payroll-hours-against-the-timekeeping-export": {
    "takeaways": [
      "Freeze the timekeeping export before comparison and record the exact file version.",
      "Match employee totals and earning-code totals separately so offsetting errors cannot hide.",
      "Give every difference a named cause, owner, and correction before re-importing.",
      "Re-import once from the corrected source and keep the before-and-after trace.",
      "Close with a signed note that a reviewer can repeat without opening the source system."
    ],
    "readinessRows": [
      {
        "area": "Export version",
        "ready": "the file name, run time, and hash are recorded",
        "ownerCheck": "payroll owner confirms the export is the final version"
      },
      {
        "area": "Employee match",
        "ready": "every employee in the export appears once in the import",
        "ownerCheck": "preparer checks headcount and employee identifiers"
      },
      {
        "area": "Earning-code match",
        "ready": "regular, overtime, and other hours reconcile separately",
        "ownerCheck": "reviewer compares code totals, not just gross hours"
      },
      {
        "area": "Difference log",
        "ready": "every variance has a cause, owner, and correction",
        "ownerCheck": "owner approves each correction before re-import"
      },
      {
        "area": "Close note",
        "ready": "before-and-after totals and the reviewer name are stored",
        "ownerCheck": "owner signs the reconciliation note"
      }
    ],
    "sections": [
      {
        "heading": "Freeze the export before comparing totals",
        "paragraphs": [
          "An import reconciliation starts with a stable file. Ask the timekeeping owner to confirm the export is final, then record the file name, run time, and row count in the reconciliation note. Save a read-only copy in the payroll evidence folder so the comparison can be repeated later. If the source system can still change the file, the comparison has no fixed baseline. Freeze first, then compare.",
          "Treat a late correction as a new export rather than an edit to the old one. Give the replacement file a new version label and keep both versions in the folder. Note why the first export was replaced and who requested the change. A reviewer should be able to see which file fed the payroll import. An unlabeled overwrite destroys the audit trail before the work begins."
        ]
      },
      {
        "heading": "Match employees and earning codes separately",
        "paragraphs": [
          "Compare headcount before comparing dollars or hours. Confirm that every employee in the export appears once in the import and that no employee appears twice. Check employee identifiers rather than names, since duplicate names are common. Record any employee who was added, removed, or left inactive between the export and the import. A headcount difference explains many downstream variances.",
          "Reconcile each earning code on its own instead of comparing gross hours. Regular, overtime, holiday, sick, and bonus hours can offset each other and produce a total that looks correct. Compare code by code and flag any code that appears in one file but not the other. Ask whether a missing code is a mapping problem or a genuine zero. Code-level matching finds errors that a gross total hides."
        ]
      },
      {
        "heading": "Give every difference a named cause",
        "paragraphs": [
          "A variance without a cause is an open item, not a rounding issue. Write the employee, period, code, export value, import value, and difference in one line. Name the likely cause, such as a mapping rule, a duplicate row, a late edit, or an unsupported earning code. Assign the person who will confirm or correct it. Keep the line open until the cause is proven, not just explained.",
          "Separate timing differences from true errors. A shift that crosses the pay period boundary may belong to the next run, while a missing overtime code is usually a mapping defect. Ask the timekeeping owner to confirm boundary rules in writing. Do not net a timing difference against an unrelated error to make the total match. Each explanation should stand on its own."
        ]
      },
      {
        "heading": "Correct the source, then re-import once",
        "paragraphs": [
          "Fix the export or the mapping rule before running the import again. A manual adjustment inside payroll hides the source defect and creates a second record to reconcile. Document the correction in the source system or the mapping table, then produce a fresh export. Re-import from that file and keep the prior import result for comparison. One controlled re-import is easier to review than several small patches.",
          "Re-run the same employee and code checks after the correction. Confirm that the fix changed the intended rows and did not create a new difference elsewhere. Compare the before-and-after totals and record the delta. If the correction touches a live pay run, ask the payroll owner to approve the new file before release. A second import without a second check repeats the original risk."
        ]
      },
      {
        "heading": "Close with a repeatable reconciliation note",
        "paragraphs": [
          "Close the reconciliation only when the export, the import, and the payroll register agree. State the file versions, the employee count, the code totals, and every resolved difference. Name the preparer and the reviewer and record the date of the check. Store the note with the register and the source files. A reader should be able to repeat the comparison without asking for context.",
          "Add one control change if the same cause appears twice. A recurring mapping error needs a rule update, not another manual fix. A late export needs a cutoff reminder on the timekeeping calendar. Assign the change to a role and set a review date. The reconciliation closes one cycle, while the change protects the next one."
        ]
      }
    ],
    "roleBrief": [
      "Role: Payroll hours import reconciler",
      "First task lane: Compare the frozen timekeeping export with the payroll import and log differences",
      "Tools: Timekeeping export, payroll import report, register, reconciliation tracker, evidence folder",
      "Access: Read-only access to timekeeping and payroll, write access to the tracker only",
      "Daily output: Employee and code match report, open difference list, and correction notes",
      "Stop rules: No manual pay adjustment, no re-import, and no rate change without the payroll owner",
      "Owner review: Payroll owner approves corrections and signs the close note"
    ],
    "faqs": [
      {
        "question": "Can we reconcile after the payroll run is approved?",
        "answer": "Reconcile before approval, because a correction after release becomes an off-cycle adjustment. If the run is already approved, document the gap and treat the fix as a separate controlled event."
      },
      {
        "question": "What if the timekeeping system cannot produce a stable export?",
        "answer": "Record the export time and row count, then ask the system owner to lock the period. If the file can still change, label each version and compare the version that actually fed payroll."
      },
      {
        "question": "How many differences should trigger a full re-check?",
        "answer": "Any difference in employee count or in a paid earning code deserves a full re-check. A small number of explained timing differences can close with a note and reviewer approval."
      }
    ],
    "sources": [
      {
        "name": "DOL Wage and Hour Division, FLSA Recordkeeping Fact Sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "note": "Employers must keep payroll records that show hours worked and wages paid."
      },
      {
        "name": "DOL Wage and Hour Division, Hours Worked Fact Sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked",
        "note": "Defines hours worked and the records that support pay calculations."
      },
      {
        "name": "NIST Special Publication 800-53 Revision 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for protecting payroll records and system activity."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Practical guidance on payroll, recordkeeping, and small-business operations."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/payroll-query-support"
      ],
      "externalLink": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
      "related": [
        "outsourcepayrollcompany-standardize-payroll-attachment-names-before-the-next-audit-request",
        "outsourcepayrollcompany-control-payroll-access-requests-with-a-weekly-review-queue",
        "outsourcepayrollcompany-turn-payroll-bank-returns-into-a-same-day-exception-route"
      ]
    }
  },
  "outsourcepayrollcompany-assign-payroll-tax-notice-ownership-before-the-response-clock-runs": {
    "takeaways": [
      "Log every notice with the agency, tax period, amount, and printed response date.",
      "Name a primary owner and a backup before the first response is drafted.",
      "Match the notice type to a documented response path and evidence set.",
      "Keep proof of mailing or portal submission with the notice record.",
      "Review closed notices each month for repeat causes and missing penalties."
    ],
    "readinessRows": [
      {
        "area": "Notice log",
        "ready": "agency, period, amount, and deadline are recorded",
        "ownerCheck": "payroll owner reviews the log weekly"
      },
      {
        "area": "Named owner",
        "ready": "one primary and one backup are assigned",
        "ownerCheck": "owner accepts the assignment in writing"
      },
      {
        "area": "Response path",
        "ready": "the notice type links to a documented procedure",
        "ownerCheck": "tax owner approves the path before drafting"
      },
      {
        "area": "Submission proof",
        "ready": "confirmation, tracking, or portal receipt is stored",
        "ownerCheck": "reviewer checks proof before closing"
      },
      {
        "area": "Pattern review",
        "ready": "closed notices are grouped by cause each month",
        "ownerCheck": "payroll owner accepts the control fix"
      }
    ],
    "sections": [
      {
        "heading": "Log the notice on the day it arrives",
        "paragraphs": [
          "Open a notice record as soon as the letter, email, or portal alert arrives. Record the agency, the notice number, the tax period, the amount, and the response date printed on the document. Save the original file or a scan with the record, not just a summary. Note who received it and where it was found, because portal notices often reach a shared inbox. A notice that sits in an inbox for a week has already lost part of its response window.",
          "Separate a notice from a routine statement before assigning work. A notice usually names an action, a deadline, and a consequence, while a statement may only report a balance. Read the entire document and identify the specific request. If the notice includes several issues, split them into separate lines with their own owners. One record with one deadline hides the item that needs attention first."
        ]
      },
      {
        "heading": "Name a primary owner and a backup",
        "paragraphs": [
          "Assign one person who owns the response from intake to closure. Choose someone with the authority to pull payroll records, contact the provider, and approve a filing correction. Name a backup who can act when the owner is unavailable, and record both names in the notice log. A shared mailbox is not an owner because no one is accountable for the deadline. The owner should confirm the assignment in writing.",
          "Give the owner enough time and access to do the work. Check that the person can reach prior filings, payment confirmations, and the payroll system of record. If the owner must request access after the notice arrives, the response clock is already running against them. Record any access gap as a finding and set a date to close it. Ownership without access is only a label."
        ]
      },
      {
        "heading": "Choose the response path by notice type",
        "paragraphs": [
          "Match the notice to a documented response path instead of starting from scratch. A balance-due notice needs a payment or dispute path, while a missing-return notice needs a filing history and a corrected submission. A penalty notice may require a reasonable-cause statement with supporting records. Write the type and the chosen path in the record before drafting the response. The path tells the owner which evidence to collect.",
          "Use the agency instructions on the notice for the response channel and format. Some notices require a portal upload, some require a mailed response, and some accept an online form. Record the channel and any confirmation number the agency provides. Do not send a response through a channel the notice does not authorize. A correct answer sent to the wrong place still counts as late."
        ]
      },
      {
        "heading": "Track the deadline and the proof of response",
        "paragraphs": [
          "Put the response date on the payroll calendar with an earlier internal deadline. Set reminders at ten days and three days before the external date so a missing record does not become a surprise. Record the date the response was sent, the method, and the person who sent it. Save the confirmation, tracking number, or portal receipt with the notice. The proof is what protects the company if the agency says nothing arrived.",
          "Check the agency account after submission to confirm the response was accepted. A portal receipt proves submission, not acceptance, so look for a status change or an acknowledgement. If the notice requires payment, record the payment date and the confirmation separately. Follow up before the deadline passes rather than after it. A closed notice should show both the response and the agency receipt."
        ]
      },
      {
        "heading": "Review closed notices for repeat causes",
        "paragraphs": [
          "Review closed notices each month and group them by cause. A repeated missing-return notice may point to a filing calendar gap, while repeated penalty notices may point to a late payment process. Count the notices by agency, period, and owner. Look for the same root cause appearing under different notice numbers. The pattern is more useful than the individual resolution.",
          "Turn each repeat cause into one control change with a named owner. Update the filing calendar, add a payment confirmation check, or fix the address and contact record the agency uses. Set a review date to confirm the change reduced the notices. Keep the closed notice record linked to the change. The response closes one notice, while the pattern review protects the next filing cycle."
        ]
      }
    ],
    "roleBrief": [
      "Role: Payroll tax notice coordinator",
      "First task lane: Log incoming notices and assemble the response evidence for tax owner review",
      "Tools: Notice log, payroll system, filing history, payment confirmations, agency portal",
      "Access: Read-only payroll and filing records, write access to the notice log only",
      "Daily output: Notice intake entries, deadline list, and missing evidence notes",
      "Stop rules: No agency response, payment, or amended return without the tax owner",
      "Owner review: Tax owner approves the response and accepts the pattern review"
    ],
    "faqs": [
      {
        "question": "Can the payroll provider respond to a notice on our behalf?",
        "answer": "The provider can prepare a response when the contract assigns that duty, but the employer still owns the outcome. Confirm the provider contact, the response deadline, and the evidence the employer must supply. Keep a copy of every response in the employer file."
      },
      {
        "question": "What if the notice arrives after the deadline printed on it?",
        "answer": "Record the actual receipt date and contact the agency using the channel shown on the notice. Ask for the correct response path and document the conversation. Do not assume the deadline has passed without confirming the agency position."
      },
      {
        "question": "Should every notice go to the tax owner?",
        "answer": "Every notice should be logged centrally, but only the ones that need a tax decision must reach the tax owner. Routine confirmations can close with a reviewer note. Keep the routing rule in the notice procedure so the decision is consistent."
      }
    ],
    "sources": [
      {
        "name": "IRS: Letters and notices",
        "url": "https://www.irs.gov/letters-notices",
        "note": "Explains how the IRS contacts taxpayers and what a notice generally requires."
      },
      {
        "name": "IRS Publication 15, Circular E",
        "url": "https://www.irs.gov/publications/p15",
        "note": "Employer tax guide covering deposits, filing, and correction procedures."
      },
      {
        "name": "IRS: Recordkeeping for employers",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "note": "Describes employment tax records employers should keep and how long to retain them."
      },
      {
        "name": "NIST Special Publication 800-53 Revision 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for audit records, incident handling, and access enforcement."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/payroll-query-support"
      ],
      "externalLink": "https://www.irs.gov/letters-notices",
      "related": [
        "outsourcepayrollcompany-payroll-filing-calendar-exception-review",
        "outsourcepayrollcompany-standardize-payroll-attachment-names-before-the-next-audit-request",
        "outsourcepayrollcompany-control-payroll-access-requests-with-a-weekly-review-queue"
      ]
    }
  },
  "outsourcepayrollcompany-set-a-payroll-roster-change-freeze-before-quarter-close": {
    "takeaways": [
      "Choose the freeze date by working backward from the final payroll run and roster report.",
      "Publish which changes can still move and who can approve an exception.",
      "Route every late request through one approver with a written record.",
      "Build the roster and change log before the freeze takes effect.",
      "Release the freeze only after a reviewer reads the final change log."
    ],
    "readinessRows": [
      {
        "area": "Freeze date",
        "ready": "the payroll and reporting dates are agreed and published",
        "ownerCheck": "payroll owner confirms the date with finance"
      },
      {
        "area": "Exception list",
        "ready": "allowed late changes and approvers are documented",
        "ownerCheck": "owner accepts the exception rules"
      },
      {
        "area": "Change log",
        "ready": "every late change has a reason and approval reference",
        "ownerCheck": "reviewer checks the log before close"
      },
      {
        "area": "Roster evidence",
        "ready": "payroll and HR headcount reconcile with explanations",
        "ownerCheck": "payroll owner signs the roster"
      },
      {
        "area": "Release note",
        "ready": "release time and authorizing person are recorded",
        "ownerCheck": "reporting owner accepts the final roster"
      }
    ],
    "sections": [
      {
        "heading": "Set the freeze date from the payroll calendar",
        "paragraphs": [
          "Choose the freeze date by working backward from the payroll and reporting deadlines, not from convenience. Identify the last pay period included in the quarter, the final payroll run, and the date the roster report must be final. Add time for the reviewer to resolve exceptions before the report leaves the team. Publish the date with the quarter-close calendar so managers see it early. A freeze announced on the day it starts will be treated as a suggestion.",
          "Distinguish the payroll freeze from the HR system freeze. Payroll may need to stop new changes earlier because the register and the quarter report must agree. HR may continue processing records that do not affect the closed period. Write both dates and the reason for the difference in one note. Managers who understand the purpose are less likely to route around the freeze."
        ]
      },
      {
        "heading": "List the changes that can still move",
        "paragraphs": [
          "Name the changes that may still be processed during the freeze and who can approve them. A court-ordered garnishment, a death benefit, or a correction to an earlier period may need a defined exception path. A routine new hire or a discretionary pay change can usually wait for the next cycle. Publish the list with examples so managers do not have to guess. An unwritten exception becomes a negotiation at the worst moment.",
          "Separate a correction to a closed period from a change in the current period. A closed-period correction needs a prior-period adjustment and a clear approval trail. A current-period change may still fit if it reaches payroll before the final run. Record the period and the reason beside every exception. The same request can be routine or risky depending on which period it touches."
        ]
      },
      {
        "heading": "Route every exception to one approver",
        "paragraphs": [
          "Give the freeze one approver and one backup so requests do not split across managers. The approver should see the payroll impact, the reporting impact, and the reason for the late change. Require the request in writing with the employee, period, amount, and effective date. Record the decision and the time it was made. A verbal approval near the deadline is difficult to defend later.",
          "Set a response standard for exception requests, such as one business day. Tell requesters what information is required before the approver will review the request. Decline incomplete requests with a specific reason and the next available cycle. Keep a short log of declined and approved requests for the quarter review. The log shows whether the freeze is working or being bypassed."
        ]
      },
      {
        "heading": "Build the roster evidence before the close",
        "paragraphs": [
          "Prepare the roster evidence before the freeze takes effect. Capture the active employee list, the terminations, the new hires, and the pay changes for the quarter. Reconcile the headcount in the payroll system to the HR system and explain every difference. Save the reports with the date and the person who ran them. A roster report produced after the close is harder to defend.",
          "Keep a change log beside the roster so a reviewer can trace each movement. Show the employee, the change type, the effective date, and the approval reference. Mark any change that landed during the freeze and link it to its exception approval. Confirm that terminated employees received their final pay under the applicable rules. The roster and the log should tell the same story."
        ]
      },
      {
        "heading": "Release the freeze with a reviewed change log",
        "paragraphs": [
          "Release the freeze only after the reviewer has read the change log and the final roster. Confirm that every late change has an approval and that no unapproved change entered the period. Record the release time and the person who authorized it. Send the final roster to the reporting owner with the change log attached. A release without a review is just the end of the calendar.",
          "Review the freeze after the quarter closes and note what arrived late. If the same manager or system caused most exceptions, fix the upstream reminder rather than tightening the freeze. If the approver was the bottleneck, add a backup or a clearer rule. Keep the notes with the quarter-close file. The next freeze should start with fewer exceptions than this one."
        ]
      }
    ],
    "roleBrief": [
      "Role: Quarter-close payroll roster coordinator",
      "First task lane: Publish the freeze calendar and maintain the change log for owner review",
      "Tools: Payroll register, HR roster, quarter-close calendar, change log, exception tracker",
      "Access: Read-only payroll and HR records, write access to the change log only",
      "Daily output: Exception log updates and a list of unresolved roster differences",
      "Stop rules: No roster edit, no pay change, and no exception approval without the payroll owner",
      "Owner review: Payroll owner signs the final roster and accepts the change log"
    ],
    "faqs": [
      {
        "question": "Does a freeze stop all new hires from being paid?",
        "answer": "A freeze protects the quarter report, not the next payroll cycle. A new hire whose first pay date falls in the next period can usually proceed through the normal setup. If the person must be paid in the closed period, record it as an exception with approval."
      },
      {
        "question": "What if a termination arrives during the freeze?",
        "answer": "A termination may need immediate processing for final pay, so route it through the exception approver. Record the effective date and the final-pay calculation. Update the roster and the change log together rather than waiting for the release."
      },
      {
        "question": "How long should the freeze last?",
        "answer": "Keep the freeze as short as the reporting and payroll deadlines allow. A freeze that lasts for weeks invites workarounds. Publish the start, the release date, and the reviewer who can end it early if the work finishes."
      }
    ],
    "sources": [
      {
        "name": "DOL Wage and Hour Division, FLSA Recordkeeping Fact Sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "note": "Payroll records must support the wages paid and the periods worked."
      },
      {
        "name": "IRS: Recordkeeping for employers",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "note": "Employment tax records should be retained and organized for review."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Guidance on payroll, hiring, and small-business recordkeeping."
      },
      {
        "name": "NIST Special Publication 800-53 Revision 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for change management and audit records."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/reporting-and-qa"
      ],
      "externalLink": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
      "related": [
        "outsourcepayrollcompany-prepare-a-year-end-payroll-audit-sample-before-the-auditor-asks",
        "outsourcepayrollcompany-payroll-vendor-invoice-reconciliation-evidence-review",
        "outsourcepayrollcompany-close-a-payroll-month-with-an-exception-aging-report"
      ]
    }
  },
  "outsourcepayrollcompany-name-a-payroll-backup-owner-for-every-approval-step": {
    "takeaways": [
      "List every payroll approval step, the person who performs it, and the evidence it leaves.",
      "Choose backups for authority and payroll knowledge rather than seniority alone.",
      "Write a handoff note with the system, criteria, exceptions, and escalation contact.",
      "Test the backup on a live but low-risk cycle, including the final approval.",
      "Revisit the coverage map whenever a primary owner or system changes."
    ],
    "readinessRows": [
      {
        "area": "Step map",
        "ready": "each approval step has a primary owner and evidence trail",
        "ownerCheck": "payroll owner reviews the map each quarter"
      },
      {
        "area": "Backup criteria",
        "ready": "the backup has the authority and training to approve",
        "ownerCheck": "system owner confirms access before testing"
      },
      {
        "area": "Handoff note",
        "ready": "system, criteria, and escalation path are written",
        "ownerCheck": "primary and backup both review the note"
      },
      {
        "area": "Live test",
        "ready": "the backup completed one real approval without help",
        "ownerCheck": "payroll owner accepts the test result"
      },
      {
        "area": "Coverage review",
        "ready": "role changes and tests are recorded with dates",
        "ownerCheck": "owner signs the quarterly review"
      }
    ],
    "sections": [
      {
        "heading": "Map every approval step to a primary owner",
        "paragraphs": [
          "List each payroll approval step and the person who currently performs it. Include timesheet approval, pay-rate changes, deduction setup, register review, funding release, and provider submission. Record the system where the approval happens and the evidence it leaves. A step that depends on one person’s inbox is a single point of failure even if the policy names a role. The map should show the real path, not the designed one.",
          "Mark the steps that can stop payroll if the owner is unavailable. A register approval near the release window is more critical than a routine report review. Note the notice required to activate a backup and the access the backup needs. Keep the map short enough to review each quarter. The goal is to see where coverage is thin before an absence exposes it."
        ]
      },
      {
        "heading": "Choose backups by authority, not seniority",
        "paragraphs": [
          "Choose a backup who has the authority and knowledge to approve the step, not simply the most senior person available. A senior leader without payroll context may sign quickly and challenge nothing. A peer who understands the register can catch an error before release. Record why the person is qualified and what training they have completed. Authority should follow competence and role, not title alone.",
          "Give the backup the same written limits as the primary owner. State the amount, the change types, and the situations that must escalate. A backup with unlimited authority creates a new risk, while a backup with no authority cannot help. Confirm that the person can access the system before an emergency. An approval right that exists only on paper will fail when the primary is on leave."
        ]
      },
      {
        "heading": "Write the handoff before it is needed",
        "paragraphs": [
          "Write a short handoff note for each critical step. Include the system, the report, the approval criteria, the common exceptions, and the person to call for help. State the trigger for activating the backup and the expected response time. Keep the note where the backup can find it without asking the primary. A handoff written during an outage is usually incomplete.",
          "Test the note with the backup before the next payroll cycle. Ask the backup to follow it and mark every step that required outside help. Update the note with the missing link, password process, or report name. Store the current version in one location and remove old copies. The note is useful only if it matches the system the backup will actually use."
        ]
      },
      {
        "heading": "Test the backup on a low-risk cycle",
        "paragraphs": [
          "Run one planned test where the backup performs the step while the primary observes. Choose a cycle with normal volume and no unusual deadline pressure. Let the backup complete the approval and record the evidence, then review the result together. A test that stops before the actual approval does not prove the backup can release payroll. The test should include the uncomfortable final click.",
          "Record what the backup found confusing or slow. A missing report permission, an unclear threshold, or a provider contact that only the primary knows will appear during the test. Fix those gaps before the next absence. Set a repeat test date for the backup and for the primary’s refresher. One successful test is evidence, not a permanent guarantee."
        ]
      },
      {
        "heading": "Review coverage when a role changes",
        "paragraphs": [
          "Revisit the backup map whenever a primary owner changes role, leaves, or takes extended leave. Check that the new primary has the same authority and that the backup still meets the criteria. Remove access from the former owner on the same day the role changes. Update the handoff note and the approval matrix together. A coverage map that is not updated becomes a list of former employees.",
          "Review the map each quarter with the payroll owner and the system owner. Look for steps with one trained person, backups who have never tested, and approvals that depend on a shared login. Assign one fix per review and set a date. Keep the review note with the payroll continuity file. Coverage improves through repeated checks, not through a single planning meeting."
        ]
      }
    ],
    "roleBrief": [
      "Role: Payroll approval coverage coordinator",
      "First task lane: Maintain the approval-step map, backup list, and handoff notes",
      "Tools: Approval matrix, payroll system roles, handoff notes, test log, continuity file",
      "Access: Read-only role and approval reports, write access to the coverage map only",
      "Daily output: Updated coverage map entries and test follow-up notes",
      "Stop rules: No permission grant, no approval on behalf of an owner, and no access removal without the system owner",
      "Owner review: Payroll and system owners accept the coverage map each quarter"
    ],
    "faqs": [
      {
        "question": "Can one backup cover several approval steps?",
        "answer": "One person can cover several steps when the workload and the access allow it. Check that the backup is not also the only reviewer for the same cycle. Record the steps covered and the time required. A backup who is overloaded will delay the release even when the authority exists."
      },
      {
        "question": "What if the backup is in a different time zone?",
        "answer": "A different time zone can work when the approval window is documented and the backup can act during the release period. Test the handoff at the actual release time, not at a convenient hour. Record the coverage hours and the escalation contact for gaps."
      },
      {
        "question": "How often should we test a backup?",
        "answer": "Test each critical backup at least once a year and after any system or role change. A backup who has never completed the approval is still a plan. Keep the test note with the coverage map so the next reviewer can see what was verified."
      }
    ],
    "sources": [
      {
        "name": "NIST Special Publication 800-53 Revision 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for separation of duties and account management."
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Framework for governing access and maintaining resilience across roles."
      },
      {
        "name": "CISA Cyber Essentials",
        "url": "https://www.cisa.gov/cyber-essentials",
        "note": "Practical account, access, and continuity guidance for small organizations."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Guidance on payroll operations and small-business continuity."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/payroll-query-support"
      ],
      "externalLink": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
      "related": [
        "outsourcepayrollcompany-control-payroll-access-requests-with-a-weekly-review-queue",
        "outsourcepayrollcompany-separate-payroll-preparation-from-approval-authority",
        "outsourcepayrollcompany-payroll-control-self-assessment-scoring-review"
      ]
    }
  },
  "outsourcepayrollcompany-keep-payroll-approval-evidence-when-a-manager-leaves-mid-cycle": {
    "takeaways": [
      "Export every pending approval that feeds the current payroll cycle.",
      "Transfer authority in writing and confirm the systems and provider received it.",
      "Rebuild the approval trail without overwriting the former manager record.",
      "Tell the provider and affected employees who now handles payroll questions.",
      "Add a standing deputy rule so the next departure is a routine handoff."
    ],
    "readinessRows": [
      {
        "area": "Pending list",
        "ready": "every open approval is exported with employee, period, and amount",
        "ownerCheck": "payroll owner reviews the list before access changes"
      },
      {
        "area": "Authority record",
        "ready": "the new approver, scope, and effective date are written",
        "ownerCheck": "payroll owner signs the transfer"
      },
      {
        "area": "Approval trail",
        "ready": "each item shows who approved it and what they reviewed",
        "ownerCheck": "reviewer checks the trail against the register"
      },
      {
        "area": "Notice",
        "ready": "provider and employees have the new contact",
        "ownerCheck": "payroll owner confirms the provider acknowledgement"
      },
      {
        "area": "Deputy rule",
        "ready": "a standing backup is named for every approval role",
        "ownerCheck": "owner reviews the rule each quarter"
      }
    ],
    "sections": [
      {
        "heading": "Capture the manager pending approvals",
        "paragraphs": [
          "Start with the manager’s open items in every system that feeds payroll. Export pending timesheets, leave requests, pay-rate changes, and expense or bonus approvals. Record the employee, the period, the amount, and the date the item was submitted. Note which items have a hard payroll deadline. A departure that is known in advance still leaves a surprising number of open approvals.",
          "Ask the manager, or the person handling the transition, to identify anything not captured in a system. Side conversations, verbal promises, and draft changes can sit outside the queue. Write each item down with the source and the current status. Do not treat an undocumented promise as approved pay. The goal is a complete list before authority changes hands."
        ]
      },
      {
        "heading": "Transfer authority with a written record",
        "paragraphs": [
          "Name the person who will approve the pending items and the scope of that authority. State whether the person can approve all items or only those below a threshold. Record the effective date and the systems where the access changes. Tell the payroll provider and the system administrator the same information. An authority transfer that exists only in an email to one person will not reach the systems that matter.",
          "Remove the departed manager approval access at the right time. Keep read access only if an investigation or handover requires it, and set an end date. Confirm that delegated approvals in the payroll system are reassigned rather than shared. Check that email rules and notifications now reach the new approver. Access that remains after a departure is a control gap, even when no one uses it."
        ]
      },
      {
        "heading": "Rebuild the approval trail for the cycle",
        "paragraphs": [
          "For each pending item, record who approved it, when, and on what evidence. If the former manager already approved an item, keep the original record and add a note explaining the transition. If the new approver decides the item, show the information they reviewed. Do not overwrite the former manager’s name with the new one. The trail should show the actual sequence of decisions.",
          "Check that the payroll register reflects the approved items and nothing else. Compare the pending list with the register and explain each item that did not flow through. A request that was withdrawn needs a note, not a silent removal. Have the new approver sign the reconciliation for the cycle. The signature confirms the transfer, not just the numbers."
        ]
      },
      {
        "heading": "Tell the provider and the affected employees",
        "paragraphs": [
          "Notify the payroll provider before the next submission if the approval contact changes. Give the provider the new name, the scope, and the effective date in writing. Update the provider contact record and ask for confirmation. A provider that keeps emailing the former manager will slow every approval. The handoff is complete only when the provider can reach the right person.",
          "Tell employees who normally raise payroll questions where to go. Update the intranet, the pay slip message, and the HR contact page if those channels name the manager. Keep the message short and specific about the change. Employees should not have to guess whether a request was lost in the transition. Clear routing reduces duplicate requests during the cycle."
        ]
      },
      {
        "heading": "Close the gap with a standing deputy rule",
        "paragraphs": [
          "Write a standing rule that names a deputy for every approval role, not only during a departure. State the trigger, the deputy limits, and the evidence required. Keep the rule with the payroll continuity file and review it each quarter. A deputy rule turns an emergency into a known process. It also makes the primary owner document the work before someone else must step in.",
          "Review the transition after the cycle closes and note what was missing. If pending items were hard to find, add a weekly approval export to the manager’s checklist. If access took too long, pre-approve the deputy role. Assign each fix to a role and set a review date. The next departure should be a routine handoff rather than a payroll scramble."
        ]
      }
    ],
    "roleBrief": [
      "Role: Payroll approval transition coordinator",
      "First task lane: Build the pending approval list and document the authority transfer",
      "Tools: Payroll system, timekeeping approvals, provider contact record, handoff checklist",
      "Access: Read-only approval history, write access to the transition log only",
      "Daily output: Pending item list, new approver confirmation, and provider notice draft",
      "Stop rules: No approval decision, no access change, and no provider instruction without the payroll owner",
      "Owner review: Payroll owner signs the authority transfer and the cycle reconciliation"
    ],
    "faqs": [
      {
        "question": "Can the new manager approve items the old manager started?",
        "answer": "The new manager can approve when the authority transfer names that scope and the payroll system reflects it. Record the items already approved by the former manager separately. Do not reassign a decision that was already made without a note explaining why."
      },
      {
        "question": "What if the departure is immediate and no handover happens?",
        "answer": "Use the access and approval records as the source of truth for what was pending. Contact the provider for the current submission status. Have the payroll owner name an interim approver in writing before the next release. Treat the gap as an incident and review it after the cycle."
      },
      {
        "question": "Should the former manager keep read access?",
        "answer": "Keep read access only when an investigation, audit, or defined handover requires it. Set an end date and record who approved it. Remove the access when the reason ends. A former manager with open access can still see payroll data long after the role changed."
      }
    ],
    "sources": [
      {
        "name": "NIST Special Publication 800-53 Revision 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for access removal, separation of duties, and audit records."
      },
      {
        "name": "CISA Cyber Essentials",
        "url": "https://www.cisa.gov/cyber-essentials",
        "note": "Practical offboarding and account access guidance for small organizations."
      },
      {
        "name": "DOL Wage and Hour Division, FLSA Recordkeeping Fact Sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "note": "Payroll records must support the wages paid and the approvals behind them."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Guidance on payroll operations and small-business recordkeeping."
      }
    ],
    "publication": {
      "internalLinks": [
        "/services/operations-support",
        "/services/payroll-query-support"
      ],
      "externalLink": "https://www.cisa.gov/cyber-essentials",
      "related": [
        "outsourcepayrollcompany-control-payroll-access-requests-with-a-weekly-review-queue",
        "outsourcepayrollcompany-handle-payroll-overpayment-recovery-with-a-written-case",
        "outsourcepayrollcompany-plan-payroll-coverage-for-a-holiday-shortened-workweek"
      ]
    }
  }
};
