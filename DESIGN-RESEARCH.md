# Design research: Outsource Payroll Company

Date: 2026-07-21  
Search intent: `small business payroll outsourcing company`

## Five current direct competitors

### 1. Paychex — https://www.paychex.com/payroll

Paychex uses a navy and blue enterprise layout with an orange accent. Its desktop page has business-size paths, product screens, compliance copy, and a deep footer. In the inspected render, the hero's right side and several later media areas appeared empty. A cookie panel also competed with the sales actions. The repeated card grids make a very long page feel heavier than it needs to be.

### 2. ADP — https://www.adp.com/what-we-offer/payroll.aspx

ADP uses a clean split hero, a restrained red and navy palette, and a floating payroll interface over a human photo. The headline and two-button CTA pair are easy to scan. Client scale and a direct sales line do most of the trust work. A chat prompt and cookie notice crowded the inspected hero, and much of the lower capture appeared blank.

### 3. SurePayroll — https://www.surepayroll.com/payroll

SurePayroll has the boldest voice of the group. It uses a dark navy hero, mint buttons, warm small-business photography, and heavy display type. Large editorial chapter headings add energy between ordinary product sections. In the inspected render, a cookie panel covered part of the hero and some oversized text was clipped. The promo ticker and repeated offer copy add noise, but the page has a clear point of view.

### 4. Patriot Payroll — https://www.patriotsoftware.com/payroll/

Patriot puts product proof first. The hero combines a software screen, customer portrait, Trustpilot panel, and short video prompt. Purple, magenta, and lavender make the page distinct without hurting readability. The three-step payroll demonstration is useful. The page runs long, repeats its screenshot-and-checklist pattern, and had a few apparently empty media modules in the inspected capture.

### 5. Square Payroll — https://squareup.com/us/en/payroll

Square uses short copy, oversized type, rounded work photography, and one focused blue action color. Product task cards sit on workplace images. A black industry band breaks up the long white page and gives it strong rhythm. The page explains the service in layers: core outcome, product tasks, related tools, business fit, proof, and FAQs. A sales-booking overlay obscured part of the inspected hero, and the proof arrived later than it should for a payroll buyer.

## Selected inspiration

**Winner: Square Payroll.**

Square had the clearest hierarchy and the best balance of real work, product detail, and calm spacing. Its strongest pattern is the task-state card placed over a relevant workplace photo. The dark middle band also gives the page a useful change of pace.

## Original direction

The new homepage is not a Square clone. It uses a payroll operations desk instead of a software sales page:

- A cream and navy palette with a cobalt action color and safety green status labels.
- A locally stored office-team photo with a custom pay-period checklist overlay. The approved image shows five people working on laptops in a shared office, which is a better match for a Philippines payroll support team than the former single-person image. The photo does not claim anyone's nationality.
- A short direct hero focused on payroll preparation, not payroll software.
- Philippines-only positioning throughout the homepage and supporting routes. Every talent reference now names Filipino talent or the Philippines.
- Four support lanes driven by the site's existing service routes.
- A dark approval-boundary section that separates assistant work from payroll-owner decisions.
- A three-step first-cycle handoff instead of a product setup demo.
- One repeated CTA: `Plan my payroll support`.
- No public pricing, client counts, testimonials, invented ratings, unsupported savings ranges, or performance claims. Unused legacy data with those claims was removed from visitor-facing source.

The layout, wording, cards, control-desk visual, service framing, and color system are original to this site. No competitor assets, brand copy, logos, or proprietary interface screens were used.

Hero image source: Unsplash image `photo-1521737604893-d14cc237f11d`, downloaded from `https://images.unsplash.com/photo-1521737604893-d14cc237f11d` and stored locally as `public/payroll-operations-team.jpg`. Usage terms: https://unsplash.com/license. The final crop and payroll checklist overlay are original to this site.

## Content and SEO preservation

The redesign keeps the existing service, blog, contact, privacy, terms, cancellation, robots, and sitemap routes. The footer legal links and copyright remain in place. The homepage now has WebPage, Service, and HowTo JSON-LD. The exact search phrase appears naturally in the page context, while the visible copy speaks to payroll buyers instead of repeating a keyword. The staffing model is Philippines-only; no other recruiting region is offered or implied.

## Humanizer pass

All homepage marketing copy was checked against the Humanizer pattern list.

Removed or avoided:

- Generic staffing language that could fit any niche.
- Vague phrases such as `premium staffing match`, `managed launch plan`, and `make the hire feel human`.
- The old rule-of-three proof strip and unsupported savings range.
- Em dashes, inflated claims, fake authority language, and robotic sentence fragments.
- `Not just X, but Y` constructions, corporate filler, and repeated synonyms.
- Public price prompts and copy that could imply the assistant approves payroll.

Final copy uses short sentences, named payroll tasks, clear owner boundaries, and direct CTA wording. Legal policy text was not changed.

## Visual QA checklist

- Confirm the hero H1 and `payroll-runbook-2026` marker belong to this repo before route QA.
- Check that the task-state overlay does not cover the photo subject at desktop or mobile widths.
- Confirm all four service cards retain their existing URLs.
- Confirm the same CTA wording and `/contact` destination in the header, hero, process section, and final band.
- Verify the footer, privacy, terms, cancellation, blog, robots, and sitemap routes.
- Scan for old-brand terms, public pricing, unfinished filler, joined words, and obvious AI copy.
