import type { Metadata } from "next";
import { Footer, Header } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact a Payroll Outsourcing Team | Outsource Payroll Company",
  description: "Book a free consultation to plan secure, accountable outsourced payroll support with clear review and approval boundaries.",
  alternates: { canonical: "/contact-us" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact a Payroll Outsourcing Team",
    description: "Plan a dependable payroll operations desk with clear controls, ownership, and escalation paths.",
    url: "https://outsourcepayrollcompany.com/contact-us",
    type: "website",
  },
};

const workflows = [
  ["Payroll input coordination", "Collect approved hours, leave, benefits, and employee changes into a review-ready payroll input queue."],
  ["Exception tracking", "Document missing records, rejected entries, and cutoff risks with a named owner and escalation date."],
  ["Employee query routing", "Triage payroll questions, preserve the source record, and route decisions to the authorized payroll owner."],
  ["Cycle closeout support", "Organize reconciliations, evidence, and follow-up notes so every pay cycle ends with a clear audit trail."],
];

const consultationTopics = [
  ["Source control", "Which system owns hours, employee changes, and approved payroll instructions?"],
  ["Approval boundaries", "Who reviews inputs, authorizes changes, and releases payroll?"],
  ["Cutoff discipline", "What must arrive before each deadline, and how are late exceptions handled?"],
];

export default function ContactUsPage() {
  return <>
    <Header />
    <main className="trusted-contact">
      <section className="tc-hero">
        <div className="container tc-hero-grid">
          <div className="tc-copy">
            <p className="tc-kicker">Payroll support with accountable controls</p>
            <h1>Build a payroll operations desk your team can trust.</h1>
            <p className="tc-lead">Tell us where payroll inputs, employee changes, provider handoffs, or exception queues slow the cycle down. We’ll help scope dedicated support while your authorized team retains review and release control.</p>
            <div className="tc-proof-row"><span>35+ industries</span><span>Control-first scoping</span><span>Free consultation</span></div>
            <a className="tc-text-link" href="#payroll-plan">See what we plan together →</a>
          </div>
          <div>
            <StandardContactForm endpoint="/api/contact" encoding="form" />
            <p className="tc-privacy">Your details are used only to respond to this consultation request. Please do not include payroll records or sensitive employee data.</p>
          </div>
        </div>
      </section>

      <section className="tc-strip" aria-label="Consultation outcomes"><div className="container tc-strip-grid"><strong>A practical first call</strong><span>✓ Workflow map</span><span>✓ Access boundaries</span><span>✓ Approval owners</span><span>✓ Launch plan</span></div></section>

      <section className="tc-section" id="payroll-plan"><div className="container">
        <div className="tc-section-head"><div><p className="tc-kicker">Where support fits</p><h2>Delegate the workflow. Keep payroll authority clear.</h2></div><p>The strongest outsourced payroll roles start with approved source inputs, visible exception queues, and unmistakable escalation rules.</p></div>
        <div className="tc-card-grid">{workflows.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="tc-inline-cta"><strong>Know which payroll queue needs help?</strong><a href="#contactPageForm">Discuss it with our team</a></div>
      </div></section>

      <section className="tc-principles"><div className="container"><p className="tc-kicker">What a useful consultation covers</p><h2>Start with decisions, safeguards, and the real work.</h2><div className="tc-topic-grid">{consultationTopics.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Capability checklist</p><h2>Make every handoff reviewable.</h2><p>We map the conditions that help dedicated payroll support stay accurate, secure, and easy for your internal owner to supervise.</p></div><ul><li>Payroll calendars and cutoff windows</li><li>Systems, roles, and least-privilege access</li><li>Employee change evidence requirements</li><li>Exception owners and escalation timing</li><li>Provider handoff and rejection tracking</li><li>Cycle closeout and review scorecards</li></ul></div></section>

      <section className="tc-why"><div className="container tc-why-grid"><img src="/payroll-operations-team.jpg" width="1200" height="800" alt="Payroll operations specialists coordinating a controlled pay-cycle workflow" /><div><p className="tc-kicker">Why Stealth Agents</p><h2>Dedicated talent, shaped around your payroll process.</h2><p>We help define the responsibilities, tools, schedule, training plan, and review cadence before work begins. Your payroll owner keeps authority while the support desk keeps inputs, queues, and follow-ups moving.</p><a href="https://go.oncehub.com/StealthAgentsTeam" rel="noopener noreferrer">Book a call with the team →</a></div></div></section>

      <section className="tc-about"><div className="container tc-about-grid"><div><p className="tc-kicker">Backed by broad operational experience</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p></div><a href="https://stealthagents.com" rel="noopener noreferrer">Powered by StealthAgents</a></div></section>

      <section className="container tc-final"><div><p className="tc-kicker">Ready to reduce payroll friction?</p><h2>Plan support your payroll owner can confidently review.</h2><p>Share the queue, systems, deadlines, and approval rules. We’ll help define the role and next steps.</p></div><a href="#contactPageForm">Book My Free Consultation</a></section>
    </main>
    <Footer />
  </>;
}
