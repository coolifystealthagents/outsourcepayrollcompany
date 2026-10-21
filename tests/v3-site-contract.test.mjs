import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => existsSync(join(root, path)) ? readFileSync(join(root, path), 'utf8') : '';

const components = read('app/components.tsx');
const home = read('app/page.tsx');
const services = read('app/services/page.tsx');
const serviceDetail = read('app/services/[slug]/page.tsx');
const contact = read('app/contact-us/page.tsx');
const contactForm = read('app/contact-us/StandardContactForm.tsx');
const reviews = read('app/reviews.ts');
const booking = read('app/booking-components.tsx');
const blog = read('app/blog/[slug]/page.tsx');
const research = read('app/research/[slug]/page.tsx');
const datedArticles = read('app/aug19-content.tsx');
const comparisonArticle = read('app/blog/top-25-payroll-hr-outsourcing-companies/page.tsx');
const css = read('app/globals.css');
const contactCss = read('app/contact-us/contact.css');
const contactApi = read('app/api/contact/route.ts');

const visibleSources = [components, home, services, serviceDetail, contact, booking, blog, research];

test('global header and footer expose required attribution and exact navigation', () => {
  assert.match(components, /Powered by StealthAgents/g);
  assert.match(components, /href="#page-content"/);
  assert.match(components, /id="page-content"/);
  assert.ok((components.match(/Powered by StealthAgents/g) || []).length >= 2);
  assert.match(components, /href="\/contact-us"[^>]*>Contact Us/);
  assert.doesNotMatch(components, /href="\/contact"[^>]*>Contact Us/);
  assert.match(components, /stealth-agents-logo-black\.png/);
  assert.match(css, /\.fleet-nav\s*\{[^}]*position:sticky[^}]*top:0/s);
});

test('approved StealthAgents review collection has at least ten unique records', () => {
  const names = [...reviews.matchAll(/name:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  const quotes = [...reviews.matchAll(/quote:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  assert.ok(names.length >= 10, `found ${names.length} review names`);
  assert.equal(new Set(names).size, names.length);
  assert.equal(new Set(quotes).size, quotes.length);
  assert.match(reviews, /https:\/\/stealthagents\.com\/our-clients/);
  assert.match(booking, /StealthAgents reviews/);
  assert.doesNotMatch(booking, /Pause testimonials|Play testimonials|previous|next|pagination/i);
  assert.match(css, /grid-auto-flow:column|display:flex/);
});

test('contact route follows the mandated conversion and parent-brand structure', () => {
  assert.match(contact, /<StandardContactForm/);
  assert.match(contact, /<TestimonialsRail contact\s*\/>/);
  assert.match(contact, /team-bacolod\.jpg/);
  assert.match(contact, /<ParentBrand\s*\/>/);
  assert.match(components, /stealth-agents-logo-black\.png/);
  assert.match(contact, /Official team, Bacolod/);
  assert.ok(contact.indexOf('team-bacolod.jpg') > contact.indexOf('</section>'));
  assert.doesNotMatch(contact, /go\.oncehub\.com/);
  assert.match(read('app/thank-you/page.tsx'), /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
  assert.ok(existsSync(join(root, 'app/thanks-whats-next/page.tsx')));
  for (const field of ['firstName','lastName','email','phoneLocal','company','website','companySize','positions','source','referralSpecify','message','consent']) {
    assert.match(contactForm, new RegExp(`name=["']${field}["']`), `preserves ${field}`);
  }
  assert.match(contactForm, /aria-label="Country code"/);
  assert.match(contactForm, /action=\{endpoint\}/);
  assert.match(contactForm, /method="post"/);
  assert.match(contactApi, /if\(!lengthHeader\)return errorPage\(411\)/);
  assert.match(contactApi, /referralSpecify/);
});

test('uniform subsidiary identity and required recovery routes exist', () => {
  assert.equal(read('app/icon.svg'), read('public/logo.svg'));
  assert.ok(existsSync(join(root, 'app/about/page.tsx')));
  assert.ok(existsSync(join(root, 'app/not-found.tsx')));
  assert.ok(existsSync(join(root, 'design-registry.json')));
});

test('service index and every shared detail template are substantial and visual', () => {
  assert.doesNotMatch(services, /padStart\(2/);
  assert.match(services, /service-hero/);
  assert.match(serviceDetail, /service-hero/);
  for (const heading of ['Who this service is for', 'Inputs required', 'Deliverables', 'Quality controls', 'Decision boundaries', 'Common starting scenarios', 'Frequently asked questions', 'Related services']) {
    assert.match(serviceDetail, new RegExp(heading));
  }
  assert.match(css, /grid-template-columns:repeat\(4/);
});

test('every article renderer provides complete sticky TOCs and useful sidebars', () => {
  for (const source of [blog, research, datedArticles, comparisonArticle]) {
    assert.match(source, /ArticleToc/);
    assert.match(source, /article-layout/);
    assert.match(source, /Related/);
  }
  assert.match(datedArticles, /filter\(part=>part\.startsWith\('## '\)\)/);
  assert.match(datedArticles, /id=\{`section-\$\{\+\+headingIndex\}`\}/);
  for (const id of ['company-list','method','questions','buyer-checklist','next-step']) {
    assert.match(comparisonArticle, new RegExp(`id=["']${id}["']`));
  }
  assert.match(css, /\.article-sidebar\s*\{[^}]*position:sticky/s);
  assert.match(css, /aria-current/);
  assert.match(css, /scroll-margin-top:104px/);
  assert.match(datedArticles, /main id="main-content"/);
  assert.match(comparisonArticle, /main id="main-content"/);
});

test('commercial templates contain no decorative padded labels or forbidden punctuation', () => {
  for (const source of visibleSources) {
    assert.doesNotMatch(source, /['"`]0[1-9]['"`]/);
    assert.doesNotMatch(source, /[—–]/);
  }
});

test('canonical redirect and production security policy are configured', () => {
  assert.ok(existsSync(join(root, 'middleware.ts')));
  const middleware = read('middleware.ts');
  assert.match(middleware, /CF-Visitor|cf-visitor/);
  assert.match(middleware, /outsourcepayrollcompany\.com/);
  assert.match(middleware, /x-forwarded-host/);
  assert.match(middleware, /split\(','\)/);
  assert.match(middleware, /replace\(\/:\\d\+\$\//);
  assert.match(middleware, /const protocol=visitorProtocol\|\|originalProtocol\|\|forwardedProtocol/);
  assert.match(middleware, /x-original-proto/);
  assert.match(middleware, /308/);
  const config = read('next.config.mjs');
  for (const header of ['Strict-Transport-Security', 'Content-Security-Policy', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
    assert.match(config, new RegExp(header));
  }
});

test('official first-party brand assets are present locally', () => {
  for (const asset of ['public/stealth-agents-logo-black.png', 'public/team-bacolod.jpg']) {
    assert.ok(existsSync(join(root, asset)), `${asset} missing`);
  }
});
