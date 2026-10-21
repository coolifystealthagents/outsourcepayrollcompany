'use client';

import { useEffect, useState } from 'react';

export type TocEntry = { id: string; label: string };

export function ArticleToc({ entries, relatedHref, relatedLabel = 'Related services' }: { entries: TocEntry[]; relatedHref: string; relatedLabel?: string }) {
  const [active, setActive] = useState(entries[0]?.id || '');
  useEffect(() => {
    const nodes = entries.map((entry) => document.getElementById(entry.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((records) => {
      const visible = records.filter((record) => record.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-18% 0px -68% 0px' });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [entries]);

  const links = <ol>{entries.map((entry) => <li key={entry.id}><a href={`#${entry.id}`} aria-current={active === entry.id ? 'location' : undefined}>{entry.label}</a></li>)}</ol>;
  return <aside className="article-sidebar" aria-label="Article navigation">
    <details className="article-toc-mobile"><summary>Table of contents</summary>{links}</details>
    <div className="article-toc-desktop"><h2>Table of contents</h2>{links}<div className="article-sidebar-support"><h3>{relatedLabel}</h3><p>Connect this guidance to a practical, reviewable payroll support lane.</p><a href={relatedHref}>Explore the next step</a></div></div>
  </aside>;
}
