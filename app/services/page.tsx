import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from '../components';
import { fleetServices } from '../fleet-content';

const baseUrl = 'https://outsourcepayrollcompany.com';
const pageUrl = `${baseUrl}/services`;
const description =
  'Compare Philippines payroll support services for data entry, timesheets, employee changes, reporting, and pay-cycle preparation.';

export const metadata: Metadata = {
  title: 'Philippines payroll support services',
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Philippines payroll support services',
    description,
    url: pageUrl,
    type: 'website',
  },
};

const serviceList = {
  '@type': 'ItemList',
  '@id': `${pageUrl}#service-list`,
  name: 'Philippines payroll support services',
  numberOfItems: fleetServices.length,
  itemListElement: fleetServices.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.title,
    url: `${pageUrl}/${service.slug}`,
  })),
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#page`,
      url: pageUrl,
      name: 'Philippines payroll support services',
      description,
      mainEntity: { '@id': `${pageUrl}#service-list` },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    serviceList,
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function Services() {
  return (
    <>
      <Header />
      <main className="fleet-main fleet-outsourcepayrollcompany">
        <JsonLd data={servicesSchema} />
        <section className="fleet-hero">
          <div className="container">
            <p className="eyebrow">Philippines-based services</p>
            <h1>Philippines payroll support, scoped around real work</h1>
            <p className="lead">
              Choose a focused service lane, then define the tools, examples, approvals, and reporting your Philippines-based specialist will use.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-card-grid">
            {fleetServices.map((service, index) => (
              <a className="fleet-card" href={`/services/${service.slug}`} key={service.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <b>View service →</b>
              </a>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
