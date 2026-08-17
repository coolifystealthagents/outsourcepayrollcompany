# Payroll topic and internal-link ledger

This ledger maps the existing Philippines payroll service routes to existing supporting pages. It is a planning record for reader-useful body links, not a claim that a link alone will improve rankings. Each future edit must confirm the destination, the source paragraph, and the rendered link before release.

## Service-led pillars

| Service route | Buyer question | Supporting page to inspect first | Intended body-link decision point | Status |
| --- | --- | --- | --- | --- |
| `/services/payroll-data-entry` | Can a Philippines-based specialist prepare approved payroll records without owning payroll decisions? | `/research/philippines-payroll-earnings-code-governance` | After the paragraph that separates organizing approved records from deciding a classification | Ready for source audit |
| `/services/timesheet-reconciliation` | How can a team find missing or conflicting hours before cutoff? | `/blog/timesheet-follow-up-workflow` | When the reader needs a repeatable follow-up lane and an owner for disputed hours | Ready for source audit |
| `/services/payroll-preparation` | What must be checked before payroll goes to final review? | `/research/philippines-payroll-preparation-reconciliation` | After the source-population and approved-input explanation | Ready for source audit |
| `/services/benefits-deduction-administration` | How should approved benefits and deductions be prepared for review? | `/blog/payroll-benefits-deduction-handoff` | When the article separates preparation from the owner decision | Ready for source audit |
| `/services/new-hire-payroll-setup` | Which new-hire records need a checked handoff before payroll setup? | `/blog/new-hire-payroll-document-checklist` | When the checklist moves from collecting documents to owner approval | Ready for source audit |
| `/services/payroll-query-support` | Which employee questions can a support specialist route and which must stop? | `/blog/payroll-inbox-triage` | When the article explains routing sensitive pay, tax, or bank questions | Ready for source audit |
| `/services/leave-balance-administration` | How can a team review leave records before they affect a pay period? | `/research/philippines-payroll-leave-accrual-evidence` | After the discussion of approved adjustments and the payroll-period review | Ready for source audit |
| `/services/payroll-reporting` | What should an exception report show a payroll owner before approval? | `/blog/payroll-qa-exception-log` | When the reader needs a report of duplicates, late approvals, and unusual changes | Ready for source audit |
| `/services/contractor-payment-administration` | How should contractor payment inputs be checked before a controlled handoff? | `/research/philippines-payroll-source-record-versioning` | After the source-version explanation, if the article names contractor payment inputs | Conditional: verify topical fit first |
| `/services/year-end-payroll-preparation` | What evidence helps a payroll owner prepare year-end records for review? | `/research/philippines-payroll-review-evidence-retention` | After the retention-purpose discussion, if the source page names year-end preparation | Conditional: verify topical fit first |

## Execution order

1. Inspect the built `/research/philippines-payroll-earnings-code-governance` route. If its rendered body does not already link to `/services/payroll-data-entry`, add one short sentence at the classification-to-preparation boundary. Do not use a footer or related-card link as a substitute.
2. Build and inspect that route. Confirm the service URL is present, the source phrase reads naturally, and no competing generic service link replaces it.
3. Release only that one public change through the established GitHub and Coolify path, then verify the exact marker on apex and `www`.
4. Move to the next row only on a later run. Keep Organization authorship unless this site adds a real, on-site individual author record.

## Guardrails

- All destinations above are confirmed static service routes from `app/fleet-content.ts` and the production build generated in this run.
- The service page describes Philippines-based support. It does not authorize tax, pay, banking, benefits, or final approval decisions.
- A research page can supply context and a link path. Its sources and methodology must remain separate from client-specific payroll advice.
