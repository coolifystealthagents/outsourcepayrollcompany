# Payroll topic and internal-link ledger

This ledger maps the existing Philippines payroll service routes to existing supporting pages. It is a planning record for reader-useful body links, not a claim that a link alone will improve rankings. Each future edit must confirm the destination, the source paragraph, and the rendered link before release.

## Service-led pillars

| Service route | Buyer question | Supporting page to inspect first | Intended body-link decision point | Status |
| --- | --- | --- | --- | --- |
| `/services/payroll-data-entry` | Can a Philippines-based specialist prepare approved payroll records without owning payroll decisions? | `/research/philippines-payroll-earnings-code-governance` | After the paragraph that separates organizing approved records from deciding a classification | Delivered locally: exactly one matching route-local link. Do not add a duplicate. |
| `/services/timesheet-reconciliation` | How can a team find missing or conflicting hours before cutoff? | `/blog/timesheet-follow-up-workflow` | When the reader needs a repeatable follow-up lane and an owner for disputed hours | Delivered locally: exactly one matching route-local link. Do not add a duplicate. |
| `/services/payroll-preparation` | What must be checked before payroll goes to final review? | `/research/philippines-payroll-preparation-reconciliation` | After the source-population and approved-input explanation | Delivered locally: exactly one matching route-local link. Do not add a duplicate. |
| `/services/benefits-deduction-administration` | How should approved benefits and deductions be prepared for review? | `/blog/payroll-benefits-deduction-handoff` | When the article separates preparation from the owner decision | Verified absent in the current built source. Review the typed route-data ownership and reader intent before any rendered handoff. |
| `/services/new-hire-payroll-setup` | Which new-hire records need a checked handoff before payroll setup? | `/blog/new-hire-payroll-document-checklist` | When the checklist moves from collecting documents to owner approval | Verified absent in the current built source. Review the typed route-data ownership and reader intent before any rendered handoff. |
| `/services/payroll-query-support` | Which employee questions can a support specialist route and which must stop? | `/blog/payroll-inbox-triage` | When the article explains routing sensitive pay, tax, or bank questions | Verified absent in the current built source. Review the typed route-data ownership and reader intent before any rendered handoff. |
| `/services/leave-balance-administration` | How can a team review leave records before they affect a pay period? | `/research/philippines-payroll-leave-accrual-evidence` | After the discussion of approved adjustments and the payroll-period review | Delivered locally: exactly one matching route-local link. Do not add a duplicate. |
| `/services/payroll-reporting` | What should an exception report show a payroll owner before approval? | `/blog/payroll-qa-exception-log` | When the reader needs a report of duplicates, late approvals, and unusual changes | Verified absent in the current built source. Review the typed route-data ownership and reader intent before any rendered handoff. |
| `/services/contractor-payment-administration` | How should contractor payment inputs be checked before a controlled handoff? | `/research/philippines-payroll-source-record-versioning` | After the source-version explanation, if the article names contractor payment inputs | Verified absent in the current built source. Review topical fit and typed route-data ownership before any rendered handoff. |
| `/services/year-end-payroll-preparation` | What evidence helps a payroll owner prepare year-end records for review? | `/research/philippines-payroll-review-evidence-retention` | After the retention-purpose discussion, if the source page names year-end preparation | Verified absent in the current built source. Review topical fit and typed route-data ownership before any rendered handoff. |

## Reconciled execution order

1. Do not reopen the four delivered pairs. Their route-local links are already present in the current production build.
2. Before selecting any verified-absent row, inspect its typed content record and the source paragraph. Confirm that the service is the reader's immediate next task rather than a generic promotion.
3. Make one rendered handoff only in a later clean-baseline run. Use a short, original sentence that keeps tax, pay, banking, benefits, and final approval decisions with the authorized owner.
4. Build and inspect the changed route, its service destination, Article freshness where supported, and both sitemap entries. The repository's batched deployment routine, not this source-only planning release, owns Coolify and live verification.

## 2026-10-09 artifact reconciliation

A fresh 726-page production build checked all ten rows above against their exact source and destination artifacts. Each route has one H1, one self-canonical URL, and a sitemap location. Payroll Data Entry, Timesheet Reconciliation, Payroll Preparation, and Leave Balance Administration each appear exactly once in the matching source route-local `<main>`. The other six target hrefs are absent from their matching source `<main>` and remain review candidates, not approved copy changes. This sitemap intentionally has no `<lastmod>` values.

## Guardrails

- All destinations above are confirmed static service routes from `app/fleet-content.ts` and the production build generated in this run.
- The service page describes Philippines-based support. It does not authorize tax, pay, banking, benefits, or final approval decisions.
- A research page can supply context and a link path. Its sources and methodology must remain separate from client-specific payroll advice.
