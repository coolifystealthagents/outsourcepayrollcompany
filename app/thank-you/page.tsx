import { Header, Footer } from '../components';

export default function Thanks() {
  return <>
    <Header />
    <main className="section">
      <div className="container">
        <p className="eyebrow">Request received</p>
        <h1>Thanks. Your payroll support notes are in.</h1>
        <p className="lead">We will use the details you shared to understand the task, access, and owner checks you need. Your request may be shared with a staffing team or service partner that recruits and hires only in the Philippines.</p>
        <a className="btn payroll-primary" href="/">Back to payroll support</a>
      </div>
    </main>
    <Footer />
  </>;
}
