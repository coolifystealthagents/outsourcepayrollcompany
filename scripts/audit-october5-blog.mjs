import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const source = readFileSync('app/october5-blog.ts', 'utf8');
const slugs = [...source.matchAll(/\{slug:'([^']+)'/g)].map((match) => match[1]);
if (slugs.length !== 12 || new Set(slugs).size !== 12) throw new Error(`Expected 12 unique slugs, found ${slugs.length}`);

const decode = (value) => value
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]*>/g, ' ')
  .replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&')
  .replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const words = (value) => value.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) ?? [];
const shingles = (value) => {
  const tokens = words(value);
  const result = new Set();
  for (let index = 0; index <= tokens.length - 5; index += 1) result.add(tokens.slice(index, index + 5).join(' '));
  return result;
};
const imageCheck = (path) => {
  const local = `public${path}`;
  if (!existsSync(local)) return { path, exists: false, mime: null, signature: null };
  const bytes = readFileSync(local);
  const hex = bytes.subarray(0, 12).toString('hex');
  const png = hex.startsWith('89504e470d0a1a0a');
  const jpeg = hex.startsWith('ffd8ff');
  const webp = bytes.subarray(0, 4).toString('ascii') === 'RIFF' && bytes.subarray(8, 12).toString('ascii') === 'WEBP';
  return { path, exists: true, mime: png ? 'image/png' : jpeg ? 'image/jpeg' : webp ? 'image/webp' : 'unknown', signature: hex, decodableSignature: png || jpeg || webp };
};
const routeExists = (href) => href === '/contact' || existsSync(`.next/server/app${href}.html`) || existsSync(`.next/server/app${href}/page.js`);

const articles = slugs.map((slug) => {
  const htmlPath = `.next/server/app/blog/${slug}.html`;
  if (!existsSync(htmlPath)) throw new Error(`Missing rendered route ${htmlPath}`);
  const html = readFileSync(htmlPath, 'utf8');
  const article = html.match(/<article class="container guide-article[\s\S]*?<\/article>/)?.[0];
  if (!article) throw new Error(`Missing complete article element for ${slug}`);
  const paragraphs = [...article.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((match) => decode(match[1])).filter(Boolean);
  const body = paragraphs.join('\n');
  const title = decode(article.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '');
  const published = article.match(/<time dateTime="([^"]+)"/)?.[1] ?? null;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? null;
  const image = article.match(/<img class="article-hero-image" src="([^"]+)"/)?.[1] ?? null;
  const links = [...article.matchAll(/href="(\/[^"]+)"/g)].map((match) => match[1]).filter((href) => !href.startsWith('/blog/') || href !== `/blog/${slug}`);
  return {
    slug, title, published, canonical, paragraphCount: paragraphs.length,
    bodyWords: words(body).length,
    bodySha256: createHash('sha256').update(body).digest('hex'),
    markerPresent: html.includes(`opc-20261005-${slug}`),
    sourceBodyRendered: body.length > 0,
    image: image ? imageCheck(image) : null,
    internalLinks: [...new Set(links)].map((href) => ({ href, destinationExists: routeExists(href) })),
    body,
  };
});

let maximum = { overlap: 0, first: null, second: null, common: 0, denominator: 0 };
for (let left = 0; left < articles.length; left += 1) {
  for (let right = left + 1; right < articles.length; right += 1) {
    const first = shingles(articles[left].body);
    const second = shingles(articles[right].body);
    let common = 0;
    for (const shingle of first) if (second.has(shingle)) common += 1;
    const denominator = Math.min(first.size, second.size);
    const overlap = denominator ? common / denominator : 0;
    if (overlap > maximum.overlap) maximum = { overlap, first: articles[left].slug, second: articles[right].slug, common, denominator };
  }
}

const compact = articles.map(({ body, ...article }) => article);
const failures = compact.flatMap((article) => [
  ...(article.bodyWords < 900 ? [`${article.slug}: bodyWords ${article.bodyWords}`] : []),
  ...(!article.title ? [`${article.slug}: missing title`] : []),
  ...(article.published !== '2026-10-05' ? [`${article.slug}: provisional date mismatch ${article.published}`] : []),
  ...(article.canonical !== `https://outsourcepayrollcompany.com/blog/${article.slug}` ? [`${article.slug}: canonical mismatch`] : []),
  ...(!article.markerPresent ? [`${article.slug}: missing marker`] : []),
  ...(!article.image?.exists || !article.image?.decodableSignature ? [`${article.slug}: image signature failure`] : []),
  ...article.internalLinks.filter((link) => !link.destinationExists).map((link) => `${article.slug}: missing internal destination ${link.href}`),
]);
if (maximum.overlap >= 0.5) failures.push(`Maximum shingle overlap ${(maximum.overlap * 100).toFixed(2)}%`);

const report = {
  cycleLabel: '2026-10-05', family: 'blog', generatedAt: new Date().toISOString(),
  requiredCount: 12, renderedCount: compact.length,
  provisionalPublicationDate: '2026-10-05', publicationDateReconciliationRequiredBeforePush: true,
  maximumPairwiseFiveWordShingleOverlap: maximum,
  articles: compact, failures,
  status: failures.length ? 'failed' : 'passed',
};
mkdirSync('ops', { recursive: true });
writeFileSync('ops/october-5-blog-rendered-audit.json', `${JSON.stringify(report, null, 2)}\n`);
mkdirSync('.paperclip/daily-content/2026-10-05', { recursive: true });
writeFileSync('.paperclip/daily-content/2026-10-05/blog.json', `${JSON.stringify({
  cycleLabel: '2026-10-05',
  family: 'blog',
  state: 'draft-validated-awaiting-research-integration-and-date-reconciliation',
  publicDomain: 'https://outsourcepayrollcompany.com',
  repository: 'coolifystealthagents/outsourcepayrollcompany',
  productionBranch: 'main',
  draftBranch: 'routine/blog-2026-10-05',
  configuredSiteTimezone: 'UTC',
  requiredCount: 12,
  articleCount: compact.length,
  provisionalPublicationDate: '2026-10-05',
  publicationDateRule: 'Replace the provisional date with each route actual first-publication date in UTC immediately before the sole combined push.',
  sources: [
    'https://www.irs.gov/publications/p15',
    'https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping',
    'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final',
    'https://privacy.gov.ph/data-privacy-act/',
  ],
  articles: compact.map((article) => ({
    family: 'blog', slug: article.slug, title: article.title,
    bodyWords: article.bodyWords, contentHash: article.bodySha256,
    draftPublicationDate: article.published,
    liveUrl: `https://outsourcepayrollcompany.com/blog/${article.slug}`,
    publicationStatus: 'not-pushed-not-live',
  })),
  audit: { path: 'ops/october-5-blog-rendered-audit.json', status: report.status, maximumPairwiseFiveWordShingleOverlap: maximum.overlap },
}, null, 2)}\n`);
console.log(JSON.stringify({ status: report.status, failures, bodyWords: compact.map(({ slug, bodyWords }) => ({ slug, bodyWords })), maximum }, null, 2));
if (failures.length) process.exitCode = 1;
