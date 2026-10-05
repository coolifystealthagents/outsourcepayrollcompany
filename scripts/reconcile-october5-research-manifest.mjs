import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const path = '.paperclip/daily-content/2026-10-05/research.json';
const manifest = JSON.parse(readFileSync(path, 'utf8'));
const decode = (value) => value
  .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]*>/g, ' ').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&')
  .replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const words = (value) => value.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) ?? [];
const renderedBodies = new Map();
manifest.entries = manifest.entries.map((entry) => {
  const html = readFileSync(`.next/server/app/research/${entry.slug}.html`, 'utf8');
  const article = html.match(/<article[^>]*>[\s\S]*?<\/article>/)?.[0];
  if (!article) throw new Error(`Missing complete rendered article for ${entry.slug}`);
  const body = [...article.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((match) => decode(match[1])).filter(Boolean).join('\n');
  renderedBodies.set(entry.slug, body);
  return { ...entry, renderedBodyWords: words(body).length, contentHash: createHash('sha256').update(body).digest('hex') };
});
const shingles = (value) => {
  const tokens = words(value);
  const result = new Set();
  for (let index = 0; index <= tokens.length - 5; index += 1) result.add(tokens.slice(index, index + 5).join(' '));
  return result;
};
let maximumOverlap = { overlap: 0, first: null, second: null, common: 0, denominator: 0 };
for (let left = 0; left < manifest.entries.length; left += 1) for (let right = left + 1; right < manifest.entries.length; right += 1) {
  const first = shingles(renderedBodies.get(manifest.entries[left].slug));
  const second = shingles(renderedBodies.get(manifest.entries[right].slug));
  let commonCount = 0;
  for (const shingle of first) if (second.has(shingle)) commonCount += 1;
  const denominator = Math.min(first.size, second.size);
  const overlap = denominator ? commonCount / denominator : 0;
  if (overlap > maximumOverlap.overlap) maximumOverlap = { overlap, first: manifest.entries[left].slug, second: manifest.entries[right].slug, common: commonCount, denominator };
}
manifest.status = 'integrator_revalidated_local_candidate';
manifest.validation.integratorParagraphBodyCounts = manifest.entries.map(({ slug, renderedBodyWords }) => ({ slug, renderedBodyWords }));
manifest.validation.integratorHashMethod = 'SHA-256 of complete rendered article paragraph text after HTML normalization';
manifest.validation.maximumPairwiseFiveWordShingleJaccard = maximumOverlap.overlap;
manifest.validation.maximumOverlapPair = [maximumOverlap.first, maximumOverlap.second];
writeFileSync(path, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(manifest.entries.map(({ slug, renderedBodyWords, contentHash }) => ({ slug, renderedBodyWords, contentHash })));
