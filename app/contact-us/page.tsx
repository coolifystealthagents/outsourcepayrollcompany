import type { Metadata } from 'next';
import { Footer, Header, ParentBrand } from '../components';
import { TestimonialsRail } from '../booking-components';
import StandardContactForm from './StandardContactForm';
import './contact.css';

export const metadata: Metadata = { title:'Contact a Payroll Outsourcing Team', description:'Book a free consultation to plan secure, accountable payroll support.', alternates:{canonical:'/contact-us'} };

export default function ContactUsPage(){return <><Header/><main id="main-content" className="trusted-contact">
  <section className="tc-hero"><div className="container tc-hero-grid">
    <div className="tc-copy"><p className="tc-kicker">Payroll support with accountable controls</p><h1>Build a payroll operations desk your team can trust.</h1><p className="tc-lead">Tell us where payroll inputs, employee changes, provider handoffs, or exception queues slow the cycle down. We help scope dedicated support while your authorized team retains review and release control.</p><TestimonialsRail contact/></div>
    <div><StandardContactForm/><p className="tc-privacy">Your details are used only to respond to this request. Do not include payroll records or sensitive employee data.</p></div>
  </div></section>
  <section className="parent-team-section"><div className="container parent-team-grid"><div className="parent-team-photo"><img src="/team-bacolod.jpg" width="953" height="540" alt="Stealth Agents team members collaborating in Bacolod"/><span>Official team, Bacolod</span></div><div><p className="tc-kicker">Meet the parent team</p><h2>Powered by StealthAgents</h2><p>Outsource Payroll Company is a specialist resource powered by Stealth Agents. The Bacolod team supports the recruitment, onboarding, account management, and operating discipline behind every staffing conversation.</p><ParentBrand/><a className="text-link" href="https://stealthagents.com/our-team" target="_blank" rel="noopener noreferrer">Meet the Stealth Agents team</a></div></div></section>
  <section className="tc-section"><div className="container"><p className="tc-kicker">A practical first call</p><h2>Start with decisions, safeguards, and the real work.</h2><div className="tc-topic-grid"><article><h3>Source control</h3><p>Name the systems that own hours, employee changes, and approved instructions.</p></article><article><h3>Approval boundaries</h3><p>Define who reviews inputs, authorizes changes, and releases payroll.</p></article><article><h3>Cutoff discipline</h3><p>Set arrival deadlines and a clear path for late exceptions.</p></article></div></div></section>
</main><Footer/></>}
