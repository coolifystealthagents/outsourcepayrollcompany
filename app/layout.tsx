import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcepayrollcompany.com'), title: { default: 'Outsource Payroll Company | Offshore outsourcing guides', template: '%s | Outsource Payroll Company' }, description: 'Stealth Agents-style guides for outsource payroll company: pricing, services, onboarding, and provider questions.', openGraph: { title: 'Outsource Payroll Company', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcepayrollcompany.com', siteName: 'Outsource Payroll Company', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
