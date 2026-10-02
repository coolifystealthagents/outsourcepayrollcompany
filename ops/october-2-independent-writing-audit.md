# October 2 independent-writing audit

Audit target: exact pushed commit `64f7bd39f3d7e2ff3c1e91c68f22b3d4451f3bfa` on `main`. The remote and local SHA matched before inspection. No deployment or additional push was performed.

## Verdict

**FAIL.** The 12 Blog articles and 5 Research articles meet the earlier word-count and five-word Jaccard gates, but they do not meet the stricter independent-writing requirement. The previous 0.491955 Blog and 0.486814 Research Jaccard scores are insufficient evidence because both families reuse substantive paragraphs and a common argument sequence.

## Blog findings

- Rendered body-only word counts, after removing site navigation, scripts, figures, banners, CTA blocks, and source appendices: 2307, 2357, 2329, 2408, 2448, 2428, 2536, 2432, 2577, 2432, 2467, 2487.
- Eight exact substantive paragraphs occur in all 12 articles.
- Examples repeated 12 times include the 54-word authoritative-sources paragraph beginning “Use authoritative sources for changeable recordkeeping…”, the 56-word decision-record paragraph beginning “The record should connect the original question…”, and the 50-word data-handling paragraph beginning “Store payroll, tax, identity, banking…”.
- All 12 use the same semantic 17-step article sequence: bounded decision; handoff scenario; topic comparison; field inspection; authority boundary; decision record; data protection; pilot; measures; owner exercise; accountable handoff, followed by the same supporting modules. Topic substitution in headings does not make the sequence independent.
- Worst raw five-word pair: `payroll-provider-escalation-design` / `payroll-provider-invoice-reconciliation`; Jaccard 0.491955, overlap coefficient 0.664674.
- After exact repeated substantive paragraphs are removed, the worst pair is `payroll-outsourcing-transition-governance` / `payroll-provider-escalation-design`; Jaccard 0.354218, overlap coefficient 0.523373.
- The articles contain topic-specific fields, scenarios, failure modes, and lenses, but the repeated reasoning path and near-identical operational conclusions dominate too much of the presentation. Blog therefore fails independent structure and argumentation.

## Research findings

- Rendered body-only word counts under the same exclusions: 2238, 2197, 2167, 2143, 2167.
- Twelve exact substantive paragraphs occur in all 5 studies.
- Examples repeated five times include the 28-word triangulation paragraph beginning “This brief triangulates the headline measure…”, the 25-word eligibility-unit paragraph beginning “Treat each unit as eligible only…”, and the 27-word authority-boundary paragraph beginning “Outsourced support may gather records…”.
- All 5 share the same methodology sequence: decision context; prospective population; source/time/privacy; classification and independent review; competing explanations; limitations/reproducibility; evidence-led conclusion; reference record.
- Worst raw five-word pair: `payroll-benefit-deduction-interface-study` / `payroll-provider-assurance-evidence-study`; Jaccard 0.486814, overlap coefficient 0.657996.
- Removing all exact repeated substantive paragraphs leaves only 225–389 topic-specific words per study. The worst remaining pair has Jaccard 0.033898 and overlap coefficient 0.070000, showing that the unique fragments differ but are not independently substantive enough.
- Research therefore fails independent methodology, reasoning depth, and standalone substantive-body depth.

## Required correction

Rewrite locally from topic-specific outlines. Each article must independently choose its section order, evidence path, worked example, failure analysis, decision consequences, and conclusion. Reusable site chrome, CTA, source formatting, and legal boundary notices may remain, but they must be excluded from word counts and originality calculations. Do not add filler to dilute similarity. Rebuild and repeat exact-paragraph, semantic-sequence, body-depth, Jaccard, overlap-coefficient, route, metadata, image, index, and sitemap checks before any replacement push is proposed.

Production deployment remains on hold. The existing pushed SHA must not be deployed as the October 2 release.
