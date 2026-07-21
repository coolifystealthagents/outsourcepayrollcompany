import { Header, Footer, JsonLd } from '../components';
import { site } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Plan support for payroll prep, timesheet follow-up, employee changes, inbox triage, and provider handoffs.',
};

const planningPoints = [
  'Which pay-period tasks are late or hard to track?',
  'Who approves pay, tax, bank, benefit, and termination changes?',
  'Which payroll, HR, time, and document systems hold the work?',
  'What access can the assistant start with?',
  'What should be checked before the payroll owner reviews the file?',
];

export default function Contact() {
  const siteUrl = `https://${String(site.domain).toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
      ] },
    ],
  };

  return <>
    <Header />
    <main className="section">
      <JsonLd data={schema} />
      <div className="container two">
        <div>
          <p className="eyebrow">Payroll support intake</p>
          <h1>Plan your first payroll handoff.</h1>
          <p className="lead">Tell us what slows down each pay cycle. We will use your notes to map tasks, access limits, owner checks, and a small first handoff.</p>
          <div className="card">
            <h2>What to include</h2>
            <ul className="list">{planningPoints.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <p className="callout"><b>Keep final approval in-house.</b> A support assistant can prepare records and flag gaps. Your payroll owner or provider should approve and submit payroll.</p>
        </div>
        <form className="card" action="/thank-you">
          <label>Name<br /><input required name="name" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>Email<br /><input required name="email" type="email" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>Company / website<br /><input name="company" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>What payroll work needs support?<br /><textarea name="tasks" rows={6} style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>Where does the pay cycle get stuck?<br /><select name="concern" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }}>
            <option>Missing timesheets or approvals</option>
            <option>Employee changes and records</option>
            <option>Payroll inbox questions</option>
            <option>Provider handoff and cut-off</option>
            <option>Checks, reports, and issue logs</option>
          </select></label>
          <button className="btn payroll-primary" type="submit">Plan my payroll support</button>
        </form>
      </div>
    </main>
    <Footer />
  </>;
}
