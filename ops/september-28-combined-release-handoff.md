# September 28 combined release handoff

This file is the durable coordination record for OUTAAAAAAAAAA-72. The cycle label is September 28, 2026. It is not a publication date.

## Confirmed release boundary

- Repository: `coolifystealthagents/outsourcepayrollcompany`
- Production branch: `main`
- Remote baseline at run start: `c8d829bdb2f0fc64a36f5bd2d585a04148e476a8`
- Blog worktree: `blog-publish-2026-09-28`
- Blog branch: `routine/blog-2026-09-28`
- Research issue: `OUTAAAAAAAAAA-71`
- Required package: exactly 12 new Blog articles and exactly 5 new Research articles
- Sole deployment owner: Browser Operator
- Coolify application: `vikzsmt3maxniqw8po0yd3rh`

No category-only push, deployment request, or public-live claim is authorized. Blog must receive the Research local commit SHA, worktree path, inventory, manifest, and validation evidence before it can assemble the combined head.

## Blog inventory

The exact 12-slug inventory is recorded in `.paperclip/daily-content/2026-09-28/blog.json`. All 12 slugs were checked against the repository application sources, durable manifests, and ledgers at baseline. No exact slug collision was found.

The topics concentrate on provider selection, contracting, implementation, migration, operating resilience, and accountability. These are buyer decisions that connect directly to the site's payroll operations support and contact paths.

## Open gates

- Draft and editorially review all 12 Blog articles.
- Receive the exact five-article Research handoff from OUTAAAAAAAAAA-71.
- Set the truthful publication date immediately before the single push using the site's configured local timezone.
- Run body-only word counts and five-word-shingle overlap audits separately for Blog and Research.
- Validate sources, hashes, canonicals, images, internal links, indexes, sitemap output, type checks, tests, and a clean combined production build.
- Fetch and rebase onto the newest remote `main`, then make one non-force combined push.
- Report the pushed SHA to the Browser Operator and stop production mutations.

## Rendered-body audit

After the clean combined build, run `node scripts/audit-rendered-content.mjs` with both manifest paths. The audit reads each rendered article, removes scripts, navigation, CTA/banner blocks, and source appendices, then reports body-only word counts and the maximum pairwise five-word-shingle Jaccard score separately for Blog and Research. It fails below 900 Blog words, below 1,200 Research words, at 50% or greater overlap, or when an audited family count differs from its manifest requirement.

At the latest inspection, `research-publish-2026-09-28` exists on `routine/research-2026-09-28` at the shared baseline and contains uncommitted Research drafting. Blog must not modify or cherry-pick that work until OUTAAAAAAAAAA-71 supplies its committed handoff.
