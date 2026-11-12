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



export function CTA(){return <section className="final-cta"><div className="container"><p className="eyebrow">Philippines staffing</p><h2>Build a clearer work lane.</h2><p>Share the role, tools, schedule, and approval needs. We will use those details to shape a practical Philippines staffing request.</p><a className="btn primary" href="/contact-us">Contact Us</a></div></section>}

export {RefreshHeader as Header,RefreshFooter as Footer} from './refresh-experience';
