# v2.4 content routines

This repository is the production source for `OutsourcePayrollCompany.com`.

Only the two routines in `recurring-routines.json` are authorized. Each run must use protected GitHub and Gemini secret injection, pass the applicable validators and build, commit the complete batch, push to `origin/main`, and record the SHA, branch, pushed files, push result, and validation result.

The GitHub push is the terminal state. Do not call Coolify, trigger or monitor deployment, or verify live pages from these routines. Do not add alternatives, GSC, SEO pulse, audit, sitemap-digest, recovery, deployment, CRO, documentation, or chat-status routines.
