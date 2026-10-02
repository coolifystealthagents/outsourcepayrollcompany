# October 2 combined release: local candidate handoff

This is the durable local-candidate record for Blog issue OUTAAAAAAAAAA-74 and Research issue OUTAAAAAAAAAA-73. It is not a push, deployment record, live-verification claim, or approval verdict.

## Candidate identity

- Repository: `coolifystealthagents/outsourcepayrollcompany`
- Production branch: `main`
- Fetched production SHA: `64f7bd39f3d7e2ff3c1e91c68f22b3d4451f3bfa`
- Local branch: `rewrite/oct2-independent-writing`
- Literal-content source commit: `c3ec6282945f8794c55c212c93dd98c433babb86`
- Worktree: `/paperclip/instances/default/projects/179ca2a0-82eb-496f-856d-eff31c871da8/dac9382f-77f7-4b10-84a9-29ed3379f1f9/_default/blog-publish-2026-10-02`
- Research source commit retained in the manifest: `66fd81f7870cc7ea0681ff05afa9a992a5e2d147`
- Dedicated deployment application: `vikzsmt3maxniqw8po0yd3rh`
- Deployment owner: Browser Operator

The original literal-writing lineage is intact: `a869f8096d5135ae6d864283dac8606815b2d406` is an ancestor of the candidate. The September 28 helper `app/september28-blog.ts` remains byte-identical to production with SHA-256 `ac4260e134ca264c9179d38eef4ae474a78101c17ea6d1fc429993fd3591f8d9`. The production comparison contains only October 2 application and evidence files; no September 28 source was modified.

## Publication date plan

The site renders publication dates in UTC. The prepared local date is `2026-10-02`, which matches the current UTC date during candidate validation. Immediately before the sole authorized push, recheck UTC. If first public reachability and live verification will occur on another UTC calendar date, update all 17 source dates, visible dates, `datePublished`, manifests, content hashes, indexes, sitemap metadata, and release evidence together; then repeat the affected build and verification gates. The October 2 cycle label is not permission to backdate.

## Combined gates

- Exact inventory: 12 Blog and 5 Research routes.
- Locked install: `npm ci --include=dev` from `package-lock.json` passed. The runtime's `NODE_ENV=production` required explicit inclusion of declared dev dependencies for TypeScript.
- TypeScript: passed.
- Repository tests: 10/10 passed.
- Dedicated validators: employee-status, control-metric, year-end payroll, and provider-rejection handoffs passed.
- Clean production build: passed from a fresh `.next`; only the pre-existing Autoprefixer `start`/`flex-start` compatibility warning and workspace-root lockfile warning remain.
- Locked production dependency audit: 3 high and 1 critical advisory reported. No unbounded dependency mutation was performed in this content-only candidate.
- Blog rendered body counts: 1407, 1578, 1591, 1504, 1571, 1492, 1438, 1481, 1454, 1457, 1445, 1421.
- Blog maximum pairwise five-word-shingle Jaccard: `0.083430`.
- Research rendered body counts: 1654, 1411, 1374, 1340, 1350.
- Research maximum pairwise five-word-shingle Jaccard: `0.106950`.
- All 17 local HTTP routes passed HTTP status, title and Article schema headline, full-body minimum, UTC visible/schema date, canonical, image MIME, binary image decode and dimensions, family index entry, and sitemap entry.
- Bounded source checks returned HTTP 200 for IRS Publication 15, both NIST resources, and the Philippine National Privacy Commission page. The official U.S. Department of Labor fact-sheet URL returned HTTP 403 to the automated request; the limitation is recorded without claiming availability.
- Per-route evidence: `ops/october-2-local-http-verification.json`.
- Rendered originality and hash evidence: `ops/october-2-combined-rendered-audit.json`.
- Blog and Research manifests contain the current normalized rendered-body SHA-256 values.

## Production boundary

No production push or deployment was performed. Before the sole non-force push, fetch and safely rebase onto the newest `main`, preserve unrelated changes, reconcile the UTC publication date, rerun affected gates and the clean combined build, then report the exact pushed SHA and stop production mutations. The Browser Operator alone may save and deploy that exact SHA in Coolify application `vikzsmt3maxniqw8po0yd3rh`. Public completion still requires successful exact-SHA deployment evidence and live verification of all 17 routes and image responses.
