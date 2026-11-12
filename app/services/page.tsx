import {ServicesExperience} from '../refresh-experience';
import {Header,Footer} from '../components';
export const metadata={title:'Services',description:"Build support around the pay cycle you actually run. Choose a focused workflow, give it clear inputs, and keep exceptions visible before the cutoff.",alternates:{canonical:'/services'}};
export default function Page(){return <><Header/><main id="main-content"><ServicesExperience/></main><Footer/></>}
