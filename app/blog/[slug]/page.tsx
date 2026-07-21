import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

const siteUrl = 'https://outsourcepayrollcompany.com';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  const canonical = `${siteUrl}/blog/${slug}`;

  return {
    title: post?.title || 'Payroll guide',
    description: post?.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post?.title || 'Payroll guide',
      description: post?.excerpt,
      url: canonical,
      siteName: site.brand,
      type: 'article',
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const detail = blogDetails[post.slug];
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      '@id': `${postUrl}#article`,
      headline: post.title,
      description: post.excerpt,
      url: postUrl,
      mainEntityOfPage: { '@id': `${postUrl}#webpage` },
      author: { '@type': 'Organization', name: site.brand, url: siteUrl },
      publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
      ...(detail ? {
        citation: detail.sources.map((source) => source.url),
        hasPart: detail.sections.map((section, index) => ({
          '@type': 'WebPageElement',
          '@id': `${postUrl}#section-${index + 1}`,
          name: section.heading,
        })),
      } : {}),
    },
    {
      '@type': 'WebPage',
      '@id': `${postUrl}#webpage`,
      name: post.title,
      description: post.excerpt,
      url: postUrl,
      mainEntity: { '@id': `${postUrl}#article` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
      ],
    },
  ];

  if (detail) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${postUrl}#faq`,
      mainEntity: detail.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  const schema = { '@context': 'https://schema.org', '@graph': graph };

  return (
    <>
      <Header />
      <main className="section guide-page">
        <JsonLd data={schema} />
        <article className="container guide-article">
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>

          {detail ? (
            <>
              <aside className="guide-callout" aria-labelledby="takeaways-heading">
                <h2 id="takeaways-heading">What to keep in the plan</h2>
                <ul>{detail.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
              </aside>

              <section className="guide-block" aria-labelledby="readiness-heading">
                <h2 id="readiness-heading">Payroll handoff readiness check</h2>
                <p>Use this table before a provider or support worker receives access.</p>
                <div className="guide-table-wrap">
                  <table className="guide-table">
                    <thead><tr><th>Work area</th><th>Ready to hand off when</th><th>Owner check</th></tr></thead>
                    <tbody>{detail.readinessRows.map((row) => <tr key={row.area}><th scope="row">{row.area}</th><td>{row.ready}</td><td>{row.ownerCheck}</td></tr>)}</tbody>
                  </table>
                </div>
              </section>

              {detail.sections.map((section, index) => (
                <section className="guide-block" id={`section-${index + 1}`} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                </section>
              ))}

              <section className="guide-brief" aria-labelledby="brief-heading">
                <p className="eyebrow">Copy-ready brief</p>
                <h2 id="brief-heading">Payroll support role brief</h2>
                <p>Replace the tool names and owner details, then use this list in a provider call or job brief.</p>
                <ul>{detail.roleBrief.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>

              <section className="guide-block" id="faq">
                <h2>Questions from payroll buyers</h2>
                <div className="guide-faqs">{detail.faqs.map((faq) => <div className="card" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</div>
              </section>

              <section className="guide-sources" aria-labelledby="sources-heading">
                <h2 id="sources-heading">Sources</h2>
                <ul>{detail.sources.map((source) => <li key={source.url}><a href={source.url} rel="noreferrer">{source.name}</a><span>{source.note}</span></li>)}</ul>
              </section>
            </>
          ) : (
            <div className="card guide-block">
              <h2>The short answer</h2>
              <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
              <h2>What to prepare</h2>
              <ul><li>Task examples and sample replies</li><li>Tool access and permission rules</li><li>Daily output target</li><li>Escalation rules for anything sensitive</li></ul>
              <h2>Questions to ask</h2>
              <ul><li>Who screens the worker?</li><li>Who checks quality?</li><li>What happens if fit is poor?</li><li>How are passwords and customer data handled?</li></ul>
            </div>
          )}
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
