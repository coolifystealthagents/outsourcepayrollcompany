#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const buildRoot = path.resolve('.next/server/app');
const families = ['blog', 'research'];
const currentCycle = '2026-10-02';
const priorCycle = '2026-09-28';
const decode = (value = '') => value.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(Number.parseInt(n, 16)));
const plain = (html) => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const words = (value) => value.toLowerCase().match(/[a-z0-9]+(?:['-][a-z0-9]+)*/g) || [];
const setNgrams = (tokens, size) => new Set(tokens.slice(0, Math.max(0, tokens.length - size + 1))
  .map((_, index) => tokens.slice(index, index + size).join(' ')));
const scores = (left, right) => {
  let intersection = 0;
  for (const value of left) if (right.has(value)) intersection += 1;
  const union = left.size + right.size - intersection;
  return { jaccard: union ? intersection / union : 0, overlap: Math.min(left.size, right.size) ? intersection / Math.min(left.size, right.size) : 0 };
};
const renderedFile = (family, slug) => {
  const candidates = [path.join(buildRoot, family, slug, 'index.html'), path.join(buildRoot, family, `${slug}.html`)];
  const found = candidates.find(fs.existsSync);
  if (!found) throw new Error(`Missing rendered route ${family}/${slug}`);
  return found;
};
function article(family, slug) {
  const html = fs.readFileSync(renderedFile(family, slug), 'utf8');
  let body = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1] || '';
  for (const tag of ['script', 'style', 'nav', 'aside', 'figure']) body = body.replace(new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, 'gi'), ' ');
  body = body.replace(/<section\b[^>]*class="[^"]*(?:banner|cta|source|citation)[^"]*"[^>]*>[\s\S]*?<\/section>/gi, ' ')
    .replace(/<h2\b[^>]*>\s*(?:Sources|References)\s*<\/h2>[\s\S]*$/i, ' ');
  const paragraphs = [...body.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => plain(match[1])).filter((value) => words(value).length >= 25);
  const headings = [...body.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/gi)].map((match) => plain(match[1]).toLowerCase());
  const bodyText = plain(body);
  return { slug, bodyWords: words(bodyText).length, shingles: setNgrams(words(bodyText), 5), paragraphs: new Set(paragraphs), headingBigrams: setNgrams(headings, 2) };
}

const result = { generatedAt: new Date().toISOString(), currentCycle, priorCycle, families: {}, passed: true };
for (const family of families) {
  const currentManifest = JSON.parse(fs.readFileSync(`.paperclip/daily-content/${currentCycle}/${family}.json`, 'utf8'));
  const priorManifest = JSON.parse(fs.readFileSync(`.paperclip/daily-content/${priorCycle}/${family}.json`, 'utf8'));
  const current = currentManifest.entries.map(({ slug }) => article(family, slug));
  const prior = priorManifest.entries.map(({ slug }) => article(family, slug));
  const paragraphFrequency = (articles) => {
    const frequency = new Map();
    for (const item of articles) for (const paragraph of item.paragraphs) frequency.set(paragraph, (frequency.get(paragraph) || 0) + 1);
    return frequency;
  };
  const currentFrequency = paragraphFrequency(current);
  const priorFrequency = paragraphFrequency(prior);
  const universalBoilerplate = new Set([...new Set([...currentFrequency.keys(), ...priorFrequency.keys()])]
    .filter((paragraph) => currentFrequency.has(paragraph) && priorFrequency.has(paragraph)
      && (currentFrequency.get(paragraph) === current.length || priorFrequency.get(paragraph) === prior.length)));
  let maximumBody = { jaccard: 0, overlap: 0, current: '', prior: '' };
  let maximumArguments = { score: 0, current: '', prior: '' };
  const repeatedParagraphs = [];
  for (const left of current) for (const right of prior) {
    const bodyScore = scores(left.shingles, right.shingles);
    if (bodyScore.jaccard > maximumBody.jaccard) maximumBody = { ...bodyScore, current: left.slug, prior: right.slug };
    const headingScore = scores(left.headingBigrams, right.headingBigrams).jaccard;
    if (headingScore > maximumArguments.score) maximumArguments = { score: headingScore, current: left.slug, prior: right.slug };
    for (const paragraph of left.paragraphs) if (right.paragraphs.has(paragraph) && !universalBoilerplate.has(paragraph)) {
      repeatedParagraphs.push({ current: left.slug, prior: right.slug, paragraph });
    }
  }
  const passed = maximumBody.jaccard < 0.5 && maximumBody.overlap < 0.5 && repeatedParagraphs.length === 0 && maximumArguments.score < 0.5;
  result.passed &&= passed;
  result.families[family] = {
    currentCount: current.length, priorCount: prior.length,
    maximumCrossCycleFiveWordShingleJaccard: Number(maximumBody.jaccard.toFixed(6)),
    maximumCrossCycleFiveWordShingleOverlapCoefficient: Number(maximumBody.overlap.toFixed(6)),
    maximumBodyPair: [maximumBody.current, maximumBody.prior],
    exactRepeatedSubstantiveParagraphCount: repeatedParagraphs.length,
    repeatedParagraphs,
    excludedUniversalRendererBoilerplate: [...universalBoilerplate],
    maximumOrderedHeadingBigramJaccard: Number(maximumArguments.score.toFixed(6)),
    maximumHeadingPair: [maximumArguments.current, maximumArguments.prior],
    passed,
  };
}
process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
process.exit(result.passed ? 0 : 1);
