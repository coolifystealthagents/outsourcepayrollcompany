import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const base = process.env.OCTOBER5_AUDIT_BASE ?? 'http://127.0.0.1:3105';
const blog = JSON.parse(readFileSync('.paperclip/daily-content/2026-10-05/blog.json', 'utf8'));
const research = JSON.parse(readFileSync('.paperclip/daily-content/2026-10-05/research.json', 'utf8'));
const inputs = [
  ...blog.articles.map((entry) => ({ family: 'blog', slug: entry.slug, minimumWords: 900, expectedHash: entry.contentHash })),
  ...research.entries.map((entry) => ({ family: 'research', slug: entry.slug, minimumWords: 1200, expectedHash: entry.contentHash })),
];
if (inputs.length !== 17) throw new Error(`Expected 17 combined routes, found ${inputs.length}`);

const decode = (value) => value
  .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]*>/g, ' ').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&')
  .replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const wordCount = (value) => (value.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) ?? []).length;
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const imageSignature = (bytes) => {
  const hex = Buffer.from(bytes).subarray(0, 12).toString('hex');
  const png = hex.startsWith('89504e470d0a1a0a');
  const jpeg = hex.startsWith('ffd8ff');
  const webp = Buffer.from(bytes).subarray(0, 4).toString('ascii') === 'RIFF' && Buffer.from(bytes).subarray(8, 12).toString('ascii') === 'WEBP';
  const svg = Buffer.from(bytes).subarray(0, 300).toString('utf8').includes('<svg');
  return { hex, decoded: png || jpeg || webp || svg, detected: png ? 'image/png' : jpeg ? 'image/jpeg' : webp ? 'image/webp' : svg ? 'image/svg+xml' : 'unknown' };
};

const blogIndex = await fetch(`${base}/blog`).then(async (response) => ({ status: response.status, text: await response.text() }));
const researchIndex = await fetch(`${base}/research`).then(async (response) => ({ status: response.status, text: await response.text() }));
const sitemap = await fetch(`${base}/sitemap.xml`).then(async (response) => ({ status: response.status, type: response.headers.get('content-type'), text: await response.text() }));

const routes = [];
const failures = [];
for (const input of inputs) {
  const path = `/${input.family}/${input.slug}`;
  const response = await fetch(`${base}${path}`);
  const html = await response.text();
  const article = html.match(/<article[^>]*>[\s\S]*?<\/article>/)?.[0] ?? '';
  const paragraphs = [...article.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((match) => decode(match[1])).filter(Boolean);
  const body = paragraphs.join('\n');
  const title = decode(article.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '');
  const date = article.match(/<time dateTime="([^"]+)"/)?.[1] ?? null;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? null;
  const imagePath = article.match(/<img[^>]+(?:class="[^"]*(?:article-hero-image|research-hero)[^"]*"[^>]+src="([^"]+)"|src="([^"]+)"[^>]+class="[^"]*(?:article-hero-image|research-hero)[^"]*")/)?.slice(1).find(Boolean)
    ?? article.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null;
  let image = null;
  if (imagePath) {
    const imageResponse = await fetch(`${base}${imagePath}`);
    const bytes = await imageResponse.arrayBuffer();
    image = { path: imagePath, status: imageResponse.status, contentType: imageResponse.headers.get('content-type'), ...imageSignature(bytes) };
  }
  const links = [...new Set([...article.matchAll(/href="(\/[^"]+)"/g)].map((match) => match[1]))];
  const linkChecks = [];
  for (const href of links) {
    const linkResponse = await fetch(`${base}${href}`, { redirect: 'manual' });
    linkChecks.push({ href, status: linkResponse.status });
  }
  const actualHash = sha256(body);
  const record = {
    ...input, path, status: response.status, contentType: response.headers.get('content-type'),
    title, date, canonical, paragraphCount: paragraphs.length, bodyWords: wordCount(body),
    renderedBodySha256: actualHash, expectedHashMatches: actualHash === input.expectedHash,
    image, links: linkChecks,
    indexPresent: (input.family === 'blog' ? blogIndex.text : researchIndex.text).includes(path),
    sitemapPresent: sitemap.text.includes(`https://outsourcepayrollcompany.com${path}`),
  };
  routes.push(record);
  if (record.status !== 200) failures.push(`${path}: HTTP ${record.status}`);
  if (!record.title) failures.push(`${path}: missing full title`);
  if (record.date !== '2026-10-05') failures.push(`${path}: provisional date ${record.date}`);
  if (record.canonical !== `https://outsourcepayrollcompany.com${path}`) failures.push(`${path}: canonical mismatch`);
  if (record.bodyWords < input.minimumWords) failures.push(`${path}: ${record.bodyWords} body words`);
  if (!record.image || record.image.status !== 200 || !record.image.decoded || !record.image.contentType?.startsWith('image/')) failures.push(`${path}: image response/signature failure`);
  if (!record.indexPresent) failures.push(`${path}: missing from family index`);
  if (!record.sitemapPresent) failures.push(`${path}: missing from sitemap`);
  for (const link of record.links) if (link.status !== 200) failures.push(`${path}: link ${link.href} returned ${link.status}`);
}

if (blogIndex.status !== 200) failures.push(`Blog index HTTP ${blogIndex.status}`);
if (researchIndex.status !== 200) failures.push(`Research index HTTP ${researchIndex.status}`);
if (sitemap.status !== 200 || !sitemap.type?.includes('xml')) failures.push(`Sitemap response ${sitemap.status} ${sitemap.type}`);
const hashMismatches = routes.filter((route) => !route.expectedHashMatches).map((route) => route.path);
const report = {
  cycleLabel: '2026-10-05', generatedAt: new Date().toISOString(), base,
  configuredSiteTimezone: 'UTC', requiredCount: 17, verifiedLocalCount: routes.length - new Set(failures.map((failure) => failure.split(':')[0])).size,
  sourceHashComparison: { mismatches: hashMismatches, note: 'Manifest hashes are compared with complete rendered paragraph bodies. Any mismatch must be reconciled before push.' },
  indexes: { blog: blogIndex.status, research: researchIndex.status, sitemap: { status: sitemap.status, contentType: sitemap.type } },
  routes, failures, status: failures.length ? 'failed' : 'passed',
  releaseState: 'local-only; production push and live verification not performed',
};
mkdirSync('ops', { recursive: true });
writeFileSync('ops/october-5-combined-local-http-audit.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ status: report.status, failures, hashMismatches, routes: routes.map(({ path, bodyWords, image, indexPresent, sitemapPresent }) => ({ path, bodyWords, image: image && { status: image.status, contentType: image.contentType, detected: image.detected }, indexPresent, sitemapPresent })) }, null, 2));
if (failures.length) process.exitCode = 1;

