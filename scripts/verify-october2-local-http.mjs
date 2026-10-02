#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const base = process.env.VERIFY_BASE || 'http://127.0.0.1:3000';
const site = 'https://outsourcepayrollcompany.com';
const families = [
  { name: 'blog', manifest: '.paperclip/daily-content/2026-10-02/blog.json', minimum: 900 },
  { name: 'research', manifest: '.paperclip/daily-content/2026-10-02/research.json', minimum: 1200 },
];

const decode = (value = '') => value
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(Number.parseInt(n, 16)));
const text = (html) => decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const words = (value) => value.toLowerCase().match(/[a-z0-9]+(?:['-][a-z0-9]+)*/g) || [];
const attr = (html, pattern) => decode(html.match(pattern)?.[1] || '');

async function get(url) {
  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return { response, buffer, body: buffer.toString('utf8') };
}

const indexPages = Object.fromEntries(await Promise.all(families.map(async ({ name }) => [name, (await get(`${base}/${name}`)).body])));
const sitemap = (await get(`${base}/sitemap.xml`)).body;
const routes = [];

for (const family of families) {
  const manifest = JSON.parse(fs.readFileSync(path.resolve(family.manifest), 'utf8'));
  if (manifest.entries.length !== manifest.requiredCount) throw new Error(`${family.name} count mismatch`);
  for (const entry of manifest.entries) {
    const route = `/${family.name}/${entry.slug}`;
    const local = `${base}${route}`;
    const canonical = `${site}${route}`;
    const { response, body } = await get(local);
    const h1 = attr(body, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, '').trim();
    const title = attr(body, /<title>([\s\S]*?)<\/title>/i).replace(/<[^>]+>/g, '').trim();
    const renderedCanonical = attr(body, /<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i);
    const timeDate = attr(body, /<time\b[^>]*dateTime="([^"]+)"/i);
    const schemas = [...body.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
      .map((match) => JSON.parse(decode(match[1])));
    const articleSchema = schemas.flatMap((value) => value['@graph'] || [value]).find((value) => value['@type'] === 'Article');
    if (!articleSchema) throw new Error(`${route} lacks Article schema`);
    const article = body.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1] || '';
    const stripped = article.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
      .replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, ' ')
      .replace(/<aside\b[^>]*>[\s\S]*?<\/aside>/gi, ' ')
      .replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/gi, ' ')
      .replace(/<section\b[^>]*class="[^"]*(?:banner|cta|source|citation)[^"]*"[^>]*>[\s\S]*?<\/section>/gi, ' ')
      .replace(/<h2\b[^>]*>\s*(?:Sources|References)\s*<\/h2>[\s\S]*$/i, ' ');
    const bodyWords = words(text(stripped)).length;
    const imagePath = attr(article, /<img\b[^>]*src="([^"]+)"/i);
    const image = await get(`${base}${imagePath}`);
    const imageMeta = await sharp(image.buffer).metadata();
    const internalLinks = [...new Set([...article.matchAll(/href="([^"]+)"/g)].map((match) => decode(match[1]))
      .filter((href) => href.startsWith('/')))];
    const internalLinkResponses = await Promise.all(internalLinks.map(async (href) => {
      const response = await fetch(`${base}${href}`, { redirect: 'follow' });
      return { href, status: response.status, ok: response.ok };
    }));
    const schemaCanonical = typeof articleSchema.mainEntityOfPage === 'string'
      ? articleSchema.mainEntityOfPage
      : articleSchema.mainEntityOfPage?.['@id']?.replace(/#webpage$/, '');
    const checks = {
      status200: response.status === 200,
      titleMatchesH1: title.startsWith(h1) && articleSchema.headline === h1,
      fullBody: bodyWords >= family.minimum,
      dateMatches: timeDate === manifest.publicationDate && articleSchema.datePublished === manifest.publicationDate,
      canonicalMatches: renderedCanonical === canonical && schemaCanonical === canonical,
      imageMime: (image.response.headers.get('content-type') || '').startsWith('image/'),
      imageDecoded: Boolean(imageMeta.format && imageMeta.width && imageMeta.height),
      internalLinks: internalLinkResponses.every(({ ok }) => ok),
      indexEntry: indexPages[family.name].includes(`href="${route}"`),
      sitemapEntry: sitemap.includes(`<loc>${canonical}</loc>`),
    };
    routes.push({ family: family.name, slug: entry.slug, route, title: h1, bodyWords, datePublished: timeDate,
      canonical: renderedCanonical, image: imagePath, imageContentType: image.response.headers.get('content-type'),
      imageFormat: imageMeta.format, imageWidth: imageMeta.width, imageHeight: imageMeta.height, checks,
      internalLinkResponses,
      passed: Object.values(checks).every(Boolean) });
  }
}

const report = { generatedAt: new Date().toISOString(), base, siteTimezone: 'UTC', publicationDate: '2026-10-02',
  requiredCount: 17, checkedCount: routes.length, routes, passed: routes.length === 17 && routes.every(({ passed }) => passed) };
process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
process.exit(report.passed ? 0 : 1);
