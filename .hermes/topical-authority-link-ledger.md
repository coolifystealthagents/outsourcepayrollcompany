# Philippines payroll topical-authority link ledger

Status: source-only execution plan. This file maps existing routes from `app/fleet-content.ts` and `app/data.ts`. It does not publish a claim, create a route, or change live copy.

## Scope and reader paths

The service pages are the commercial pillars. Research briefs and practical payroll articles can support a service page only when a reader has reached the matching next task. Each future link must describe preparation or review work and must keep final payroll, tax, banking, benefits, and employment decisions with the authorized owner.

| Service pillar | Reader need | Confirmed support route to audit first | Link decision |
| --- | --- | --- | --- |
| `/services/payroll-data-entry` | Organize approved payroll records and flag gaps | `/research/philippines-payroll-access-recertification-by-task` | Delivered locally: one route-local link. Do not add a duplicate. |
| `/services/timesheet-reconciliation` | Check hours and identify missing or conflicting records before cut-off | `/research/philippines-payroll-reconciliation-false-positive-analysis` | Delivered locally: one route-local link. Do not add a duplicate. |
| `/services/payroll-preparation` | Prepare approved inputs and handoff notes for payroll review | `/research/philippines-payroll-period-close-evidence` | Delivered locally: one route-local link. Do not add a duplicate. |
| `/services/benefits-deduction-administration` | Organize approved benefit or deduction inputs for review | `/research/philippines-payroll-earnings-code-governance` | Verified absent in the generated route. Eligible for one future handoff that keeps classification and approval with the payroll owner. |
| `/services/new-hire-payroll-setup` | Prepare onboarding records and flag incomplete payroll inputs | `/research/philippines-payroll-employee-status-reconciliation` | Verified absent in the generated route. Eligible for one future handoff that does not imply authority to change employment status. |
| `/services/payroll-query-support` | Sort employee payroll questions and route sensitive cases | `/research/philippines-payroll-provider-rejection-patterns` | Blocked: the declared source is not in the current generated route or sitemap inventory. Repair route registration or choose another generated source before proposing a handoff. |
| `/services/leave-balance-administration` | Prepare leave records and surface missing source evidence | `/research/philippines-payroll-leave-accrual-evidence` | Blocked: the declared source is not in the current generated route or sitemap inventory. Repair route registration or choose another generated source before proposing a handoff. |
| `/services/payroll-reporting` | Prepare exception reports and review-ready payroll summaries | `/research/philippines-payroll-control-metric-denominators` | Verified absent in the generated route. Eligible for one future handoff that explains what the report can and cannot show. |
| `/services/contractor-payment-administration` | Prepare payment records and exception notes for owner review | `/research/philippines-payroll-remittance-source-matching` | Blocked: the declared source is not in the current generated route or sitemap inventory. Repair route registration or choose another generated source before proposing a handoff. |
| `/services/year-end-payroll-preparation` | Organize approved year-end payroll records for review | No route selected yet | Hold. Select a source only after a route-level audit shows a real reader question and an evidence fit. |

## Next executable candidate

Audit `/research/philippines-payroll-earnings-code-governance` for one handoff to `/services/benefits-deduction-administration`. It is an existing generated research route whose route-local main does not yet contain that service link. A suitable future handoff should say that a Philippines-based specialist can organize approved inputs and flag unclear records for review; the authorized payroll owner keeps classification and approval decisions.

## 2026-09-06 generated-route reconciliation

The production build checked all nine declared pairs against route-local `<main>` content, canonical tags, H1s, and the generated sitemap. Three pairs are delivered locally, three generated sources are present but have no target link, and three declared sources are not generated or listed in the sitemap. The sitemap includes each generated source route and intentionally supplies no `<lastmod>` fields.

## Release gates for each future handoff

1. Check the repository is clean and synchronized before editing.
2. Confirm the source route, target service slug, source title, and target H1 in typed data and generated output.
3. Search the source data and generated artifact for the target href before adding a new link. Do not create an equivalent duplicate.
4. Use original, Philippines-specific, plain-language copy in two or three complete sentences. Keep scope and owner boundaries visible.
5. Build and inspect the source artifact, canonical, schema date where the model supports it, and sitemap record. Parse sitemap entries by `<loc>`; this sitemap currently has no `<lastmod>` fields.
6. Follow `ops/recurring-routines.json`: this operator may validate, commit, and push source-only planning work, but must not call Coolify or claim public verification. The batched deployment routine owns live deployment and live checks.

## Evidence inventory

- Service source: `app/fleet-content.ts` (`fleetServices`)
- Existing core service source: `app/data.ts` (`services`)
- Research model and existing `serviceHandoff` fields: `app/fleet-content.ts` (`researchPosts`)
- Research renderer, Article schema, and rendered service-handoff module: `app/research/[slug]/page.tsx`
- Sitemap route inventory: `app/sitemap.xml/route.ts`
