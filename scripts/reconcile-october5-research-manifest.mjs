import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const path = '.paperclip/daily-content/2026-10-05/research.json';
const manifest = JSON.parse(readFileSync(path, 'utf8'));
const decode = (value) => value
  .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]*>/g, ' ').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&')
  .replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const words = (value) => value.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) ?? [];
manifest.entries = manifest.entries.map((entry) => {
  const html = readFileSync(`.next/server/app/research/${entry.slug}.html`, 'utf8');
  const article = html.match(/<article[^>]*>[\s\S]*?<\/article>/)?.[0];
  if (!article) throw new Error(`Missing complete rendered article for ${entry.slug}`);
  const body = [...article.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((match) => decode(match[1])).filter(Boolean).join('\n');
  return { ...entry, renderedBodyWords: words(body).length, contentHash: createHash('sha256').update(body).digest('hex') };
});
manifest.status = 'integrator_revalidated_local_candidate';
manifest.validation.integratorParagraphBodyCounts = manifest.entries.map(({ slug, renderedBodyWords }) => ({ slug, renderedBodyWords }));
manifest.validation.integratorHashMethod = 'SHA-256 of complete rendered article paragraph text after HTML normalization';
writeFileSync(path, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(manifest.entries.map(({ slug, renderedBodyWords, contentHash }) => ({ slug, renderedBodyWords, contentHash })));

