import {notFound} from 'next/navigation';
import {Header,Footer} from '../../components';
import {researchPosts} from '../../fleet-content';

const publicationDateFormatter=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const formatPublicationDate=(value:string)=>publicationDateFormatter.format(new Date(`${value}T00:00:00Z`));

export function generateStaticParams(){return researchPosts.map(p=>({slug:p.slug}))}
export function generateMetadata({params}:{params:Promise<{slug:string}>}){return params.then(({slug})=>{const p=researchPosts.find(x=>x.slug===slug);return p?{title:p.title,description:p.excerpt}:{}})}

export default async function ResearchArticle({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const post=researchPosts.find(p=>p.slug===slug); if(!post)notFound();
  const related=(post as typeof post & {related:readonly string[]}).related;
  const schema={'@context':'https://schema.org','@type':'Article',headline:post.title,datePublished:post.published,description:post.excerpt,author:{'@type':'Organization',name:'Outsource Payroll Company'},mainEntityOfPage:`https://outsourcepayrollcompany.com/research/${post.slug}`};
  return <><Header/><main className="fleet-main"><article className="section article-shell publisher-article">
    <p className="eyebrow">Research brief · <time dateTime={post.published}>{formatPublicationDate(post.published)}</time></p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p>
    <div className="article-direct-answer"><h2>Research finding</h2><p>{post.takeaways[0]}</p></div>
    <div className="article-stat-grid"><div className="article-stat"><strong>{post.stat.split(' ')[0]}</strong><span>Headline measure</span><small>See the numbered sources below.</small></div></div>
    <section><h2>Methodology</h2><p>This brief triangulates the headline measure against official Philippine government, regulatory, development, and labor sources. It translates the evidence into an operating control and separates context from recommendations.</p><table><caption>Key stats and interpretation</caption><thead><tr><th>Measure</th><th>Interpretation</th></tr></thead><tbody><tr><td>{post.stat}</td><td>Context signal for planning; not a promise about an individual worker or provider.</td></tr><tr><td>{post.sources.length} source records</td><td>Primary source links are listed and numbered below for review.</td></tr></tbody></table></section>
    <section><h2>Key takeaways</h2><ul>{post.takeaways.map(x=><li key={x}>{x}</li>)}</ul></section>
    {post.sections.map(s=><section key={s.heading}><h2>{s.heading}</h2>{s.body.split('. ').map((p,i)=><p key={i}>{p}{p.endsWith('.')?'':'.'}</p>)}</section>)}
    <section className="guide-sources"><h2>Sources</h2><ol>{post.sources.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></li>)}</ol></section>
    <section><h2>FAQs</h2>{post.faq.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}</section>
    <p>For adjacent operating context, see <a href="/services/payroll-preparation">Payroll Preparation</a> and <a href="/blog">the payroll operations guide library</a>.</p>
    <section className="article-related"><h2>Related research</h2><ul>{related.map(r=>{const p=researchPosts.find(x=>x.slug===r);return p?<li key={r}><a href={`/research/${r}`}>{p.title}</a></li>:null})}</ul></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </article></main><Footer/></>
}
