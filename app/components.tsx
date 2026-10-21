import * as data from './data';
import { HeaderNav } from './header-nav';

const site=(data as any).site||{};
const domain=site.domain||'OutsourcePayrollCompany.com';
const year=new Date().getFullYear();

export function JsonLd({data}:{data:any}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}

export function LogoMark(){return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="Outsource Payroll Company"/><span className="logo-name">{site.brand||'Outsource Payroll Company'}</span></span>}

export function ParentBrand({ compact = false }: { compact?: boolean }) {
  return <a className={`parent-brand${compact ? ' parent-brand-compact' : ''}`} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="Powered by StealthAgents, visit Stealth Agents">
    <span>Powered by StealthAgents</span><img src="/stealth-agents-logo-black.png" width="149" height="50" alt="Stealth Agents" />
  </a>;
}

export function Header(_props: { hidePricing?: boolean } = {}){return <><header className="nav fleet-nav"><a className="skip-link" href="#page-content">Skip to content</a><div className="nav-inner"><a className="logo" href="/" aria-label="Outsource Payroll Company home"><LogoMark/></a><HeaderNav/><ParentBrand compact/></div></header><span id="page-content" className="skip-target" tabIndex={-1}/></>}

export function Footer(_props: { hidePricing?: boolean } = {}){return <footer className="footer legit-footer"><div className="footer-grid"><div><a className="footer-logo" href="/"><LogoMark/></a><p>{site.brand||'Outsource Payroll Company'} helps businesses plan work for Philippines-based specialists with clear scopes and approval paths.</p><ParentBrand/></div><div><h3>Explore</h3><div className="footer-links"><a href="/services">Services</a><a href="/blog">Blog</a><a href="/research">Research</a></div></div><div><h3>Company</h3><div className="footer-links"><a href="/about">About</a><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a><a href="/cancellation-policy">Cancellation Policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand||'Outsource Payroll Company'}. All rights reserved.</span><span>{domain}</span></div></footer>}

export function CTA(){return <section className="final-cta"><div className="container"><p className="eyebrow">Philippines staffing</p><h2>Build a clearer work lane.</h2><p>Share the role, tools, schedule, and approval needs. We will use those details to shape a practical Philippines staffing request.</p><a className="btn primary" href="/contact-us">Contact Us</a></div></section>}
