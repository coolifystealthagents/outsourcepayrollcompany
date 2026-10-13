import fs from 'node:fs';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';

const BASE='f44d6f59dd3f42fc970305c8056bfe9fa6abb6ea';
const DATE='2026-10-13';
const errors=[];
const ok=(condition,message)=>{if(!condition)errors.push(message)};
const parse=(file,name)=>{
  const text=fs.readFileSync(file,'utf8');
  const match=text.match(new RegExp(`export const ${name}=([\\s\\S]*?) as const;`));
  if(!match)throw new Error(`Cannot parse ${name}`);
  return JSON.parse(match[1]);
};
const normalize=value=>value.replace(/\s+/g,' ').trim().toLowerCase().replace(/[^a-z0-9]+/g,' ');
const paragraphs=new Map();
const addParagraph=(slug,value)=>{
  const normalized=normalize(value);
  if(normalized.length<160)return;
  ok(!paragraphs.has(normalized),`duplicate substantive prose ${slug}/${paragraphs.get(normalized)}`);
  paragraphs.set(normalized,slug);
};

const manifest=JSON.parse(fs.readFileSync('publishing/2026-10-13/manifest.json','utf8'));
const blog=parse('app/october13-blog.ts','october13BlogPosts');
const blogDetails=parse('app/october13-blog.ts','october13BlogDetails');
const research=parse('app/october13-research.ts','october13ResearchPosts');
ok(blog.length===12,`Blog count ${blog.length}`);
ok(research.length===5,`Research count ${research.length}`);
ok(manifest.articles.length===17,`manifest count ${manifest.articles.length}`);
ok(manifest.baseSha===BASE,'immutable base mismatch');

const titles=new Set(),slugs=new Set(),thumbPaths=new Set(),thumbHashes=new Set();
for(const post of blog){
  ok(post.published===DATE,`Blog date ${post.slug}`);
  ok(!/(oct(?:ober)?\\s*13|2026-10-13)/i.test(post.title),`date in Blog title ${post.slug}`);
  ok(!titles.has(post.title),`duplicate title ${post.title}`); titles.add(post.title);
  ok(!slugs.has(post.slug),`duplicate slug ${post.slug}`); slugs.add(post.slug);
  const detail=blogDetails[post.slug]; ok(Boolean(detail),`missing Blog detail ${post.slug}`); if(!detail)continue;
  ok(detail.sections.length>=5&&detail.sources.length>=3&&detail.publication.related.length>=3,`Blog system depth ${post.slug}`);
  ok(detail.rich?.published===DATE&&detail.rich?.image===`/oct13-heroes/${post.slug}.webp`,`Blog visible date/image ${post.slug}`);
  const body=detail.sections.flatMap(section=>section.paragraphs);
  ok(body.join(' ').split(/\s+/).length>=1300,`thin Blog ${post.slug}`);
  body.forEach(value=>addParagraph(post.slug,value));
}
for(const post of research){
  ok(post.published===DATE,`Research date ${post.slug}`);
  ok(!/(oct(?:ober)?\\s*13|2026-10-13)/i.test(post.title),`date in Research title ${post.slug}`);
  ok(!titles.has(post.title),`duplicate title ${post.title}`); titles.add(post.title);
  ok(!slugs.has(post.slug),`duplicate slug ${post.slug}`); slugs.add(post.slug);
  ok(post.sections.length>=6&&post.related.length>=3,`Research system depth ${post.slug}`);
  ok(post.sources.length===10&&post.sources.every(source=>source.url.startsWith('https://')),`Research sources ${post.slug}`);
  ok(post.image===`/oct13-heroes/${post.slug}.webp`,`Research image ${post.slug}`);
  const body=post.sections.map(section=>section.body);
  ok(body.join(' ').split(/\s+/).length>=1800,`thin Research ${post.slug}`);
  body.forEach(value=>addParagraph(post.slug,value));
}

for(const article of manifest.articles){
  ok(article.publicationDate===DATE,`manifest date ${article.slug}`);
  ok(article.title===([...blog,...research].find(post=>post.slug===article.slug)?.title),`manifest title ${article.slug}`);
  ok(!thumbPaths.has(article.thumbnailPath),`duplicate thumbnail path ${article.slug}`); thumbPaths.add(article.thumbnailPath);
  ok(fs.existsSync(article.thumbnailPath),`missing thumbnail ${article.slug}`);
  if(fs.existsSync(article.thumbnailPath)){
    const bytes=fs.readFileSync(article.thumbnailPath),hash=crypto.createHash('sha256').update(bytes).digest('hex');
    ok(bytes.subarray(0,4).toString()==='RIFF',`non-WebP ${article.slug}`);
    ok(!thumbHashes.has(hash),`duplicate thumbnail bytes ${article.slug}`); thumbHashes.add(hash);
    ok(bytes.includes(Buffer.from(article.title)),`thumbnail metadata title ${article.slug}`);
    const check=spawnSync('python3',['-c','from PIL import Image; import sys; im=Image.open(sys.argv[1]); print(f"{im.width}x{im.height}|{im.format}|{im.getexif().get(270)}")',article.thumbnailPath],{encoding:'utf8'});
    ok(check.status===0&&check.stdout.trim()===`1200x630|WEBP|${article.title}`,`thumbnail dimensions/title ${article.slug}`);
  }
  const absent=spawnSync('git',['cat-file','-e',`${BASE}:${article.thumbnailPath}`]);
  ok(absent.status!==0,`pre-existing thumbnail collision ${article.slug}`);
}
ok(thumbHashes.size===17,`unique thumbnail hashes ${thumbHashes.size}`);

for(const file of ['app/october13-blog.ts','app/october13-research.ts','publishing/2026-10-13/manifest.json','publishing/2026-10-13/validate_batch.mjs']){
  const absent=spawnSync('git',['cat-file','-e',`${BASE}:${file}`]);
  ok(absent.status!==0,`pre-existing batch path ${file}`);
}
const data=fs.readFileSync('app/data.ts','utf8'),fleet=fs.readFileSync('app/fleet-content.ts','utf8');
ok(data.includes("from './october13-blog'")&&data.includes('...october13BlogPosts')&&data.includes('...october13BlogDetails'),'Blog registry');
ok(fleet.includes("from './october13-research'")&&fleet.includes('unshift(...october13ResearchPosts)'),'Research registry');
const blogRoute=spawnSync('git',['show',`${BASE}:app/blog/[slug]/page.tsx`],{encoding:'utf8'}).stdout;
const researchRoute=spawnSync('git',['show',`${BASE}:app/research/[slug]/page.tsx`],{encoding:'utf8'}).stdout;
const blogIndex=fs.readFileSync('app/blog/blog-listing.tsx','utf8'),researchIndex=fs.readFileSync('app/research/page.tsx','utf8');
ok(blogRoute.includes('Related articles')&&blogRoute.includes('article-published'),'Blog route/sidebar/date');
ok(researchRoute.includes('Related research')&&researchRoute.includes('Published:'),'Research route/sidebar/date');
ok(blogIndex.includes('blogPosts')&&blogIndex.includes('formatDate'),'Blog index/date');
ok(researchIndex.includes('researchPosts')&&researchIndex.includes('formatDate'),'Research index/date');

const baseFiles=['app/data.ts','app/fleet-content.ts','app/october12-blog.ts','app/october12-research.ts'];
const baseText=baseFiles.map(file=>spawnSync('git',['show',`${BASE}:${file}`],{encoding:'utf8',maxBuffer:64*1024*1024}).stdout).join('\n');
const normalizedBase=normalize(baseText);
for(const [paragraph,slug] of paragraphs)ok(!normalizedBase.includes(paragraph),`new/existing duplicate ${slug}`);
for(const post of [...blog,...research]){
  ok(!baseText.includes(`"${post.slug}"`)&&!baseText.includes(`'${post.slug}'`),`pre-existing slug ${post.slug}`);
  ok(!baseText.includes(post.title),`pre-existing title ${post.title}`);
}

if(errors.length){console.error(`FAIL (${errors.length})\\n- ${errors.join('\\n- ')}`);process.exit(1)}
console.log('PASS: 12 Blog + 5 Research; visible October 13 dates, date-free titles, 10 authoritative HTTPS sources per Research, 17 unique exact-title 1200x630 WebPs, distinct Blog/Research registries/routes/indexes/sidebars/related content, immutable-base collision protection, and zero within/cross-corpus duplicate substantive paragraphs.');
