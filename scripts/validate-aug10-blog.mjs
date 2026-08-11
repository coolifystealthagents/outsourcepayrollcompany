import fs from 'node:fs';
import assert from 'node:assert/strict';

const manifestPath = '.paperclip/aug10-2026/blog.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/publisherArticles.ts', 'utf8');
const route = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const listing = fs.readFileSync('app/data.ts', 'utf8');
assert.equal(manifest.schemaVersion, 1);
assert.equal(manifest.contract, 'sites3-aug10-public-date-v6');
assert.ok(manifest.entries.length >= 22);
assert.equal(new Set(manifest.entries.map((entry) => entry.slug)).size, manifest.entries.length);
for (const entry of manifest.entries) {
  assert.match(entry.route, /^\/blog\/[a-z0-9-]+$/);
  assert.equal(entry.sourcePath, 'app/publisherArticles.ts');
  assert.match(source, new RegExp("\\['" + entry.slug + "',"));
  assert.equal(entry.sourceDateField, 'published');
  assert.equal(entry.sourceDate, '2026-08-10');
  assert.equal(entry.renderedDate, '2026-08-10');
}
assert.match(source, /published: '2026-08-10'/);
assert.match(route, /datePublished/);
assert.match(route, /dateTime=\{post\.published\}/);
assert.match(listing, /\.\.\.thirdPublisherBlogPosts/);
console.log(`PASS: ${manifest.entries.length} August 10 blog entries, source and render gates satisfied`);
