# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the public marketing and editorial copy across the homepage, central site data, service template, guide index and detail template, contact page, thank-you page, shared header, CTA, footer, and site metadata.

Reviewed files:

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`
- `app/layout.tsx`
- `app/globals.css` (copy-fit fixes only)

## What changed

- Replaced awkward keyword-first guide titles with titles that read like real payroll questions.
- Replaced the repeated fallback guide with separate copy for task selection, provider questions, and first-pay-cycle onboarding.
- Removed arbitrary pilot and sample sizes where a full pay cycle or recent question set is a more honest instruction.
- Rewrote a clipped promotional tagline and the shared CTA in direct payroll language.
- Replaced the generic payroll “pilot” heading with a narrower first-handoff instruction.
- Put the shared CTA inside the same section and container structure used by the rest of the site so detail-page copy does not sit against the viewport edge.
- Narrowed guide prose, balanced the provider-guide summary, removed excess CTA whitespace, and changed its action to the site's higher-contrast blue button after local visual review.
- Kept payroll decisions, tax questions, bank changes, and final approval with the buyer’s authorized payroll owner or provider.
- Kept all staffing language limited to Filipino talent recruited and hired in the Philippines.

## Final anti-AI pass

The remaining copy was checked for inflated claims, corporate filler, forced contrasts, em-dash chains, chatbot language, repeated template paragraphs, robotic fragments, and empty conclusions. The site now uses direct task examples, named approval boundaries, and plain buyer questions instead.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were excluded. Their legal meaning was not changed. No testimonials, statistics, credentials, client results, savings claims, or first-person stories were added. Route slugs, citations, schema types, SEO intent, and conversion paths were preserved.
