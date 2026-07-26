#!/usr/bin/env python3
"""Deterministic DOM-only gate for the strict payroll publisher article."""
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

SLUG = "philippines-payroll-data-access-controls"
KEYWORD = "Philippines payroll data access controls"
MARKER = "opc-ph-payroll-access-20260725"
EXPECTED_TITLE = "Philippines payroll data access controls: a safe handoff guide | Outsource Payroll Company"
EXPECTED_QUOTE = (
    "Zero trust assumes there is no implicit trust granted to assets or user accounts "
    "based solely on their physical or network location (i.e., local area networks "
    "versus the internet) or based on asset ownership (enterprise or personally owned)."
)


@dataclass
class Node:
    tag: str
    attrs: dict[str, str]
    parent: "Node | None" = None
    children: list["Node"] = field(default_factory=list)
    chunks: list[str] = field(default_factory=list)

    @property
    def classes(self) -> set[str]:
        return set(self.attrs.get("class", "").split())

    def text(self) -> str:
        parts = list(self.chunks)
        for child in self.children:
            if child.tag not in {"script", "style", "noscript"}:
                parts.append(child.text())
        return re.sub(r"\s+", " ", " ".join(parts)).strip()

    def walk(self):
        yield self
        for child in self.children:
            yield from child.walk()


class DOM(HTMLParser):
    void = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("document", {})
        self.stack = [self.root]
        self.json_ld: list[object] = []

    def handle_starttag(self, tag, attrs):
        node = Node(tag, {key: value or "" for key, value in attrs}, self.stack[-1])
        self.stack[-1].children.append(node)
        if tag not in self.void:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in self.void:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                node = self.stack[index]
                if tag == "script" and node.attrs.get("type") == "application/ld+json":
                    raw = "".join(node.chunks).strip()
                    if raw:
                        self.json_ld.append(json.loads(raw))
                del self.stack[index:]
                return

    def handle_data(self, data):
        self.stack[-1].chunks.append(data)


def schema_types(values: list[object]) -> set[str]:
    found: set[str] = set()
    def walk(value):
        if isinstance(value, dict):
            current = value.get("@type")
            if isinstance(current, str):
                found.add(current)
            elif isinstance(current, list):
                found.update(x for x in current if isinstance(x, str))
            for child in value.values():
                walk(child)
        elif isinstance(value, list):
            for child in value:
                walk(child)
    walk(values)
    return found


def sentence_count(text: str) -> int:
    # Protect common abbreviations, then split punctuation with optional quoted endings.
    protected = text.strip()
    for abbreviation in ("U.S.", "i.e.", "e.g."):
        protected = protected.replace(abbreviation, abbreviation.replace(".", "<DOT>"))
    return len([part for part in re.split(r"(?<=[.!?])[\"'”’]?\s+", protected) if part.strip()])


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--html", default=f".next/server/app/blog/{SLUG}.html")
    parser.add_argument("--sitemap", default=".next/server/app/sitemap.xml.body")
    args = parser.parse_args()

    html_path = Path(args.html)
    if not html_path.exists():
        raise SystemExit(f"missing built article: {html_path}")
    html = html_path.read_text(encoding="utf-8")
    dom = DOM()
    dom.feed(html)
    nodes = list(dom.root.walk())

    articles = [n for n in nodes if n.tag == "article" and "publisher-article" in n.classes]
    if len(articles) != 1:
        raise SystemExit(f"AUDIT_SELECTOR_MISMATCH article.publisher-article={len(articles)}")
    article = articles[0]
    article_nodes = list(article.walk())
    article_text = article.text()
    words = re.findall(r"\b[\w’'-]+\b", article_text)

    def count_tag(tag: str) -> int:
        return sum(n.tag == tag for n in article_nodes)

    def count_class(name: str) -> int:
        return sum(name in n.classes for n in article_nodes)

    h1s = [n.text() for n in article_nodes if n.tag == "h1"]
    titles = [n.text() for n in nodes if n.tag == "title" and n.parent and n.parent.tag == "head"]
    canonicals = [n.attrs.get("href", "") for n in nodes if n.tag == "link" and n.attrs.get("rel") == "canonical"]
    links = [n.attrs.get("href", "") for n in article_nodes if n.tag == "a" and n.attrs.get("href")]
    internal = [href for href in links if href.startswith("/")]
    external = [href for href in links if urlparse(href).scheme in {"http", "https"}]
    banners = [n for n in article_nodes if "article-banner" in n.classes]
    rotations = sorted(value for n in banners if (value := n.attrs.get("data-banner-rotation")))
    visuals = {n.attrs.get("data-visual") for n in article_nodes if "article-visual" in n.classes}
    sources = [n for n in article_nodes if n.tag == "section" and "guide-sources" in n.classes]
    source_items = []
    if len(sources) == 1:
        source_items = [n for n in sources[0].walk() if n.tag == "li"]

    # Narrative paragraph contract. Exempt the lead, quote, banners, and module microcopy.
    narrative_paragraphs: list[tuple[str, int]] = []
    for n in article_nodes:
        if n.tag != "p":
            continue
        ancestors = []
        parent = n.parent
        while parent and parent is not article:
            ancestors.extend(parent.classes)
            parent = parent.parent
        if any(name in ancestors for name in {"article-banner", "article-quote", "guide-brief"}):
            continue
        if "lead" in n.classes or "eyebrow" in n.classes:
            continue
        text = n.text()
        if text:
            narrative_paragraphs.append((text, sentence_count(text)))
    bad_paragraphs = [(text, count) for text, count in narrative_paragraphs if count < 2 or count > 3]

    forbidden_text = re.findall(r"(?i)\b(?:pricing|rates|tiers)\b", article_text)
    forbidden_hrefs = [href for href in links if "/pricing" in href.lower()]
    types = schema_types(dom.json_ld)
    expected_schema = {"Article", "FAQPage", "BreadcrumbList"}
    marker_count = sum(n.attrs.get("data-article-marker") == MARKER for n in nodes)
    methods_count = count_class("chart-methods")
    quote_count = article_text.count(EXPECTED_QUOTE)

    sitemap_candidates = [Path(args.sitemap), Path(".next/server/app/sitemap.xml.body"), Path(".next/server/app/sitemap.xml/route.body")]
    sitemap_path = next((p for p in sitemap_candidates if p.exists()), None)
    sitemap_text = sitemap_path.read_text() if sitemap_path else ""

    checks = {
        "word_range": 1500 <= len(words) <= 2000,
        "h1_exact_prefix": len(h1s) == 1 and h1s[0].startswith(KEYWORD),
        "title_exact": titles == [EXPECTED_TITLE],
        "canonical": canonicals == [f"https://outsourcepayrollcompany.com/blog/{SLUG}"],
        "marker_exact": marker_count == 1,
        "table_exact": count_tag("table") == 1,
        "svg_exact": count_tag("svg") == 2,
        "visual_identity": visuals == {"third-party-chart", "payroll-access-path"},
        "methods_note_exact": methods_count == 1,
        "banners_exact": len(banners) == 3 and rotations == ["1", "2", "3"],
        "sources_numbered": len(sources) == 1 and any(n.tag == "ol" for n in sources[0].walk()) and len(source_items) == 5,
        "internal_links": len(set(internal)) >= 3,
        "external_links": len(set(external)) >= 4,
        "exact_quote": quote_count == 1,
        "dated_stats": all(marker in article_text for marker in ["22,052", "12,195", "30%", "94 days", "$3,046,598,558"]),
        "paragraphs_2_to_3_sentences": not bad_paragraphs,
        "forbidden_text": not forbidden_text,
        "forbidden_hrefs": not forbidden_hrefs,
        "schema": expected_schema.issubset(types),
        "sitemap": f"/blog/{SLUG}" in sitemap_text,
    }
    result = {
        "article_root_words": len(words),
        "h1": h1s,
        "title": titles,
        "canonical": canonicals,
        "marker_count": marker_count,
        "paragraphs_checked": len(narrative_paragraphs),
        "bad_paragraphs": [{"sentences": count, "text": text[:180]} for text, count in bad_paragraphs],
        "banner_selector": ".article-banner",
        "banner_count": len(banners),
        "banner_rotations": rotations,
        "table_count": count_tag("table"),
        "svg_count": count_tag("svg"),
        "visuals": sorted(x for x in visuals if x),
        "methods_note_count": methods_count,
        "source_count": len(source_items),
        "internal_link_count": len(set(internal)),
        "external_link_count": len(set(external)),
        "forbidden_text": forbidden_text,
        "forbidden_hrefs": forbidden_hrefs,
        "schema_types": sorted(types),
        "sitemap_path": str(sitemap_path) if sitemap_path else None,
        "checks": checks,
    }
    print(json.dumps(result, indent=2))
    return 0 if all(checks.values()) else 1


if __name__ == "__main__":
    sys.exit(main())
