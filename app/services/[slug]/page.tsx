import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

const siteUrl = 'https://outsourcepayrollcompany.com';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service?.title || 'Payroll outsourcing service',
    description: service?.desc,
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const serviceUrl = `${siteUrl}/services/${service.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${serviceUrl}#webpage`,
        name: service.title,
        url: serviceUrl,
        description: service.desc,
        mainEntity: { '@id': `${serviceUrl}#service` },
        hasPart: [
          { '@id': `${serviceUrl}#launch-plan` },
          { '@id': `${serviceUrl}#faq` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: service.title,
        serviceType: 'Filipino payroll outsourcing support',
        provider: {
          '@type': 'Organization',
          name: site.brand,
          url: siteUrl,
        },
        areaServed: 'Philippines',
        description: service.desc,
      },
      {
        '@type': 'HowTo',
        '@id': `${serviceUrl}#launch-plan`,
        name: `How to start ${service.title.toLowerCase()}`,
        step: service.launchPlan.map((item, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: item,
          text: item,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${serviceUrl}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.desc}</p>
              <p>{service.buyerProblem}</p>
              <a className="btn" href="/contact">Plan this role</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt={site.alt} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cards">
            <div className="card">
              <h2>Best payroll tasks</h2>
              <ul>
                {service.bestTasks.map((task) => <li key={task}>{task}</li>)}
              </ul>
            </div>
            <div className="card">
              <h2>Guardrails</h2>
              <ul>
                {service.controls.map((control) => <li key={control}>{control}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container two">
            <div>
              <p className="eyebrow">First pay cycle</p>
              <h2>Start with one narrow handoff.</h2>
              <p>Give your Filipino payroll assistant a checklist, a few real examples, and a clear stop rule for anything sensitive. Keep the payroll owner close during that first cycle.</p>
            </div>
            <div className="card">
              <ol>
                {service.launchPlan.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">Buyer questions</p>
            <h2>Payroll outsourcing FAQ</h2>
            <div className="cards">
              {service.faqs.map((faq) => (
                <div className="card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
