# October 2 combined release handoff

This is the durable release record for Blog issue OUTAAAAAAAAAA-74 and Research issue OUTAAAAAAAAAA-73. October 2 is the cycle label and, after the UTC check immediately before push, the intended first-publication date.

## Release identity

- Repository: `coolifystealthagents/outsourcepayrollcompany`
- Production branch: `main`
- Baseline and final pre-push remote SHA: `dd28da3fce95fab766efc07772c722fb788baa8b`
- Integration branch: `routine/blog-2026-10-02`
- Blog content commit: `c42f1d72111ec519108de52c9ce5748a360b491d`
- Research source commit: `66fd81f7870cc7ea0681ff05afa9a992a5e2d147`
- Research handoff commit: `b338566124536c006fbb69149eab282d0054a75f`
- Research integration commits: `8ba26a1594e7387e9ec44cad44f3c6924207892b`, `16592d986f2bc1df3bd9efbbf837f352aeb32c8f`
- Site timezone convention: UTC
- Dedicated deployment application: `vikzsmt3maxniqw8po0yd3rh`
- Deployment owner: Browser Operator

## Combined gates

- Exactly 12 new Blog routes and 5 new Research routes.
- TypeScript passed.
- Repository test suite passed: 10/10.
- Clean production build passed; only the pre-existing autoprefixer `flex-start` compatibility warning remains.
- All 17 rendered routes passed title/date/canonical/image-file/index/sitemap checks.
- Blog rendered body counts: 2307, 2357, 2329, 2408, 2448, 2428, 2536, 2432, 2577, 2432, 2467, 2487.
- Research rendered body counts: 2238, 2197, 2167, 2143, 2167.
- Blog maximum pairwise five-word-shingle Jaccard: 0.491955.
- Research maximum pairwise five-word-shingle Jaccard: 0.486814.
- Combined rendered audit: `ops/october-2-combined-rendered-audit.json`.
- Blog and Research manifests contain per-route content hashes and dates.

The Browser Operator must confirm the exact pushed SHA in Coolify Git Source and deploy only application `vikzsmt3maxniqw8po0yd3rh`. Blog must stop production mutations after its one non-force push. Public verification is not complete until all 17 routes, images, index entries, and sitemap entries pass live checks.
