import { Header, Footer, JsonLd } from './components';
import { services, blogPosts, site } from './data';

const supportLanes = services.slice(0, 4);
const guides = blogPosts.slice(0, 3);

const checkpoints = [
  { label: 'Hours', detail: 'Missing entries are listed before cut-off.', state: 'Review' },
  { label: 'Changes', detail: 'New hires, exits, and pay updates have an owner.', state: 'Assigned' },
  { label: 'Approvals', detail: 'Final decisions stay with your payroll lead.', state: 'Protected' },
];

const steps = [
  { number: '01', title: 'Pick one pay cycle', body: 'Show us where hours, changes, and approvals get stuck.' },
  { number: '02', title: 'Set the stop signs', body: 'Your Filipino payroll assistant gets clear rules for access, money changes, and escalation.' },
  { number: '03', title: 'Run a checked handoff', body: 'Your Filipino payroll assistant prepares the tracker. Your payroll owner reviews and submits.' },
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Outsource Payroll Company',
        url: 'https://outsourcepayrollcompany.com',
        description: 'Filipino payroll support for timesheets, employee changes, payroll inboxes, handoffs, and pre-payroll checks.',
        mainEntity: { '@id': 'https://outsourcepayrollcompany.com/#service' },
      },
      {
        '@type': 'Service',
        '@id': 'https://outsourcepayrollcompany.com/#service',
        name: 'Filipino payroll support',
        serviceType: 'Payroll administration support',
        provider: { '@type': 'Organization', name: site.brand, url: 'https://outsourcepayrollcompany.com' },
        areaServed: 'Philippines',
        description: 'Philippines-based support for payroll preparation, timesheet follow-up, employee change logs, exception tracking, and provider handoffs.',
      },
      {
        '@type': 'HowTo',
        name: 'How to hand off payroll admin support',
        step: steps.map((step) => ({ '@type': 'HowToStep', name: step.title, text: step.body })),
      },
    ],
  };

  return <>
    <Header />
    <main className="payroll-home payroll-runbook-2026" data-design="payroll-runbook-2026">
      <JsonLd data={schema} />

      <section className="payroll-hero">
        <div className="container payroll-hero-grid">
          <div className="payroll-hero-copy">
            <p className="payroll-kicker">Filipino payroll support</p>
            <h1>Payroll prep without the payday scramble.</h1>
            <p className="payroll-lead">Add a Filipino payroll assistant to chase timesheets, log employee changes, sort payroll questions, and prepare the handoff. Your payroll owner keeps final approval.</p>
            <ul className="payroll-bullets" aria-label="Payroll support tasks">
              <li>Keep pay-period inputs in one clear list</li>
              <li>Flag missing hours and manager approvals</li>
              <li>Route sensitive changes to the right owner</li>
              <li>Prepare clean notes for your payroll provider</li>
            </ul>
            <a className="btn payroll-primary" href="/contact">Plan my payroll support</a>
            <p className="payroll-tagline">Keep the handoff clear and cut-off day calmer.</p>
          </div>

          <div className="payroll-hero-visual" aria-label="Payroll operations control desk preview">
            <img src="/payroll-operations-team.jpg" alt="Office team working together on laptops" />
            <div className="payroll-desk-card">
              <div className="desk-card-head">
                <span>Pay-period desk</span>
                <b>Cut-off ready</b>
              </div>
              {checkpoints.map((item) => <div className="desk-row" key={item.label}>
                <span className="desk-check" aria-hidden="true">✓</span>
                <div><strong>{item.label}</strong><small>{item.detail}</small></div>
                <em>{item.state}</em>
              </div>)}
            </div>
            <div className="owner-chip"><span>Owner check</span><strong>Required before submission</strong></div>
          </div>
        </div>
      </section>

      <section className="payroll-lanes" id="tasks">
        <div className="container">
          <div className="payroll-section-head">
            <div><p className="payroll-kicker">Choose the first lane</p><h2>Hand off the work around payroll.</h2></div>
            <p>Start with one repeatable problem. Keep pay decisions, tax calls, and bank changes with the person who owns payroll.</p>
          </div>
          <div className="payroll-lane-grid">
            {supportLanes.map((service, index) => <a href={`/services/${service.slug}`} className="payroll-lane" key={service.slug}>
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <strong>See tasks and guardrails</strong>
            </a>)}
          </div>
        </div>
      </section>

      <section className="payroll-control-band">
        <div className="container control-band-grid">
          <div className="control-copy">
            <p className="payroll-kicker">Built around approval</p>
            <h2>Your Filipino payroll assistant prepares. Your payroll owner decides.</h2>
            <p>Payroll data is sensitive. Start with the least access needed. Require a named reviewer for pay, tax, bank, benefit, and termination changes.</p>
            <div className="source-links">
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" target="_blank" rel="noreferrer">IRS employment tax guide</a>
              <a href="https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" target="_blank" rel="noreferrer">NIST access-control guidance</a>
            </div>
          </div>
          <div className="control-list">
            <article><span>Filipino payroll assistant</span><h3>Collect and prepare</h3><p>Hours, change notes, missing items, inbox tags, and exception lists.</p></article>
            <article><span>Payroll owner</span><h3>Review and approve</h3><p>Pay changes, tax treatment, bank details, final files, and provider submission.</p></article>
          </div>
        </div>
      </section>

      <section className="payroll-steps">
        <div className="container">
          <div className="payroll-section-head compact"><div><p className="payroll-kicker">A small first handoff</p><h2>Test it on one pay cycle.</h2></div></div>
          <div className="step-track">
            {steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}
          </div>
          <a className="btn payroll-primary" href="/contact">Plan my payroll support</a>
        </div>
      </section>

      <section className="payroll-guides">
        <div className="container">
          <div className="guide-intro"><p className="payroll-kicker">Payroll handoff guides</p><h2>Read before you add access.</h2></div>
          <div className="guide-list">
            {guides.map((post) => <a href={`/blog/${post.slug}`} key={post.slug}>
              <span>{post.minutes} min read</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </a>)}
          </div>
        </div>
      </section>

      <section className="payroll-final">
        <div className="container payroll-final-inner">
          <div><p className="payroll-kicker">Start with the messy part</p><h2>Tell us what slows down payroll day.</h2><p>We will help you map a support lane, owner checks, and a first-cycle handoff.</p></div>
          <a className="btn payroll-primary light" href="/contact">Plan my payroll support</a>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
