import {ContactExperience} from '../inner-pages';
import {Header,Footer} from '../components';
import StandardContactForm from './StandardContactForm';
export const metadata={title:'Contact Us',description:"Let\u2019s take the rush out of payroll.",alternates:{canonical:'/contact-us'}};
export default function Contact(){return <><Header/><main id="main-content"><ContactExperience><StandardContactForm/></ContactExperience></main><Footer/></>}
