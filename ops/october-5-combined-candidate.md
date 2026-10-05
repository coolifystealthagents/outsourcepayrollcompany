# October 5 combined release candidate

Status: validated locally and held before the sole production push.

## Scope

- Repository: `coolifystealthagents/outsourcepayrollcompany`
- Production branch: `main`
- Integration branch: `routine/blog-2026-10-05`
- Baseline: `9ff483eb34937ae2e655b36be02ac18c72c60c09`
- Blog source commit: `b5f1ffd7750bc912c9648a220a7274b67a0cdd94`
- Research handoff source: `eb8741b8c318743f47526daf3379e16a87ff1709`
- Dedicated deployment application: `vikzsmt3maxniqw8po0yd3rh`
- Configured site timezone: UTC

The candidate contains exactly 12 new Blog routes and 5 new Research routes. It does not include a production push or deployment.

## Validation results

- Locked dependency audit: passed, zero vulnerabilities.
- TypeScript: passed.
- Repository tests: 10/10 passed.
- Clean production build: passed with the existing Autoprefixer `start`/`flex-start` warning.
- Blog rendered audit: passed for all 12 independently written routes; paragraph-only body counts are 1,130, 1,085, 1,175, 1,023, 1,005, 1,001, 970, 969, 965, 949, 997, and 963.
- Blog maximum pairwise five-word-shingle overlap: 13.9434%.
- Research shared methodology and limitations sequences were removed. Final independently written paragraph-only counts are 1,287, 1,229, 1,203, 1,207, and 1,200; maximum pairwise five-word-shingle overlap is 10.1266%.
- Exact originality audit against all 17 current routes and 637 prior rendered Blog/Research routes: zero repeated substantive paragraphs of at least 50 words, zero repeated non-shell headings, and zero repeated adjacent narrative-heading sequences.
- Combined local HTTP audit: 17/17 routes passed full title, provisional UTC date, canonical, complete body, content hash, image HTTP response, image MIME and signature decode, contextual internal destinations, family index, and sitemap checks.
- Durable evidence: `ops/october-5-combined-local-http-audit.json`, `ops/october-5-independent-writing-audit.json`, and the family manifests under `.paperclip/daily-content/2026-10-05/`.

## Release hold

The visible and structured date is prepared as October 5, 2026. This remains provisional until immediately before the sole push. If the browser operator cannot deploy and complete first-publication verification during October 5 UTC, the integrator must update every Blog and Research date surface and both manifests to the actual UTC first-publication date, rebuild, and rerun all combined checks before pushing.

Do not push until the browser operator confirms deployment and date readiness. After the one combined non-force push, report the exact full SHA and stop production mutations. The browser operator then checks SHA history, selects that exact SHA in Coolify3, and deploys only if no active or successful exact-SHA deployment exists.
