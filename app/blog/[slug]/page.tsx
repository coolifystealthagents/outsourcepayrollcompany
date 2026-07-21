import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

const siteUrl = 'https://outsourcepayrollcompany.com';

const basicGuides: Record<string, {
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
}> = {
  'outsource-payroll-company-tasks-to-outsource': {
    intro: 'The best first tasks repeat every pay cycle, follow a clear example, and leave a record for your payroll owner to check.',
    sections: [
      {
        heading: 'Start with missing inputs',
        paragraphs: ['A Filipino payroll assistant can chase timesheets, manager approvals, PTO notes, and employee-change forms. Put every missing item in one tracker with a due date and owner. The assistant prepares the list; your payroll owner decides what happens when an item is late or disputed.'],
      },
      {
        heading: 'Hand off sorting before decisions',
        paragraphs: ['Payroll inboxes contain both routine requests and sensitive questions. Approved status replies, document requests, ticket tags, and routing are reasonable support tasks. Questions about pay amounts, taxes, garnishments, benefits, bank details, or terminations should go straight to an authorized owner.'],
      },
      {
        heading: 'Keep risky work with the owner',
        paragraphs: ['Do not use an outsourced support role to approve final payroll, change pay rates, decide deductions, or alter bank details alone. Give the Filipino payroll assistant the least access needed for the first task and add permissions only when a real need appears.'],
        bullets: ['Good first lane: timesheet follow-up and a missing-item report', 'Good first lane: employee-change log preparation', 'Keep in-house: final payroll approval and provider submission'],
      },
    ],
  },
  'outsource-payroll-company-provider-questions': {
    intro: 'A useful provider call should make clear who does the work and which decisions stay with you. It should also spell out the access the role needs.',
    sections: [
      {
        heading: 'Ask who handles the payroll queue',
        paragraphs: ['Ask whether the person assigned to your account is a Filipino payroll support worker based in the Philippines, who trains them, and who covers absences. Request a plain explanation of the hiring and supervision process rather than a broad promise about talent quality.'],
      },
      {
        heading: 'Walk through one pay cycle',
        paragraphs: ['Bring a real example of a late timesheet, an employee change, or a payroll inbox question. Ask the provider to explain who collects the record, who checks it, who contacts the manager, and who approves the final action. If the answer skips the owner approval step, keep asking.'],
        bullets: ['Which systems will the Filipino payroll worker use?', 'How are access changes logged and removed?', 'Which questions must go to our payroll owner?', 'What does the provider review before each handoff?'],
      },
      {
        heading: 'Ask how the provider handles problems',
        paragraphs: ['Payroll support needs a clear path for mistakes, absences, and urgent questions near cut-off. Ask who receives an escalation, how the issue is recorded, and how access is closed if the assignment ends. Get these answers in writing before sharing employee data.'],
      },
    ],
  },
  'outsource-payroll-company-onboarding-checklist': {
    intro: 'Use the first pay cycle to teach one narrow handoff. Do not begin by moving the whole payroll process.',
    sections: [
      {
        heading: 'Before the first login',
        paragraphs: ['Choose the first task, name the payroll owner, and write the stop rules. Create a named account for the Filipino payroll assistant, turn on multifactor authentication, and limit access to the systems and folders needed for that task.'],
        bullets: ['One written task with a due date', 'Two or three approved examples', 'A named owner and backup owner', 'A list of changes the assistant may not approve'],
      },
      {
        heading: 'During the first pay cycle',
        paragraphs: ['Have the assistant update one tracker with source links, missing items, owners, and due dates. The payroll owner should review exceptions before anything goes to the payroll provider. Correct the checklist when a question exposes a missing rule.'],
      },
      {
        heading: 'After payroll closes',
        paragraphs: ['Review what arrived late, what required an owner decision, and which permissions were never used. Remove unneeded access. Keep the first task only if the output is easy to inspect, then decide whether another payroll admin task is ready to move.'],
      },
    ],
  },
};

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
  const basicGuide = basicGuides[post.slug];
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
                <p>Use this table before a provider or Filipino payroll support worker receives access.</p>
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
          ) : basicGuide ? (
            <>
              <aside className="guide-callout"><h2>The short answer</h2><p>{basicGuide.intro}</p></aside>
              {basicGuide.sections.map((section) => <section className="guide-block" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>)}
            </>
          ) : (
            <div className="card guide-block"><p>This payroll guide is not available.</p></div>
          )}
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
