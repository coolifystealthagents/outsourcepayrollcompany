import {notFound} from 'next/navigation';
import {Header,Footer,CTA,JsonLd} from '../../components';
import {fleetServices} from '../../fleet-content';
import {site,services as legacyServices} from '../../data';

const getService=(slug:string)=>{
  const current=fleetServices.find(x=>x.slug===slug);
  if(current)return current;
  const legacy=legacyServices.find(x=>x.slug===slug);
  return legacy?{
    slug:legacy.slug,
    title:legacy.title,
    summary:`${legacy.desc} ${legacy.buyerProblem}`,
    tasks:legacy.bestTasks,
    controls:legacy.controls,
    launch:legacy.launchPlan,
  }:undefined;
};

export function generateStaticParams(){
  return [...fleetServices,...legacyServices].map(s=>({slug:s.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const service=getService(slug);
  if(!service)return {};
  const canonical=`https://${site.domain.toLowerCase()}/services/${service.slug}`;
  return {title:service.title,description:service.summary,alternates:{canonical}};
}

export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const service=getService(slug);
  if(!service)notFound();
  const url=`https://${site.domain.toLowerCase()}/services/${service.slug}`;
  return <><Header/><main className="fleet-main"><JsonLd data={{'@context':'https://schema.org','@type':'Service',name:service.title,description:service.summary,url,areaServed:'Philippines'}}/><section className="fleet-hero"><div className="container"><p className="eyebrow">Philippines service</p><h1>{service.title}</h1><p className="lead">{service.summary}</p><a className="btn primary" href="/contact">Discuss this service</a></div></section><section className="section"><div className="container fleet-detail-grid"><article><h2>Work this role can support</h2><ul>{service.tasks.map(x=><li key={x}>{x}</li>)}</ul></article><article><h2>Controls to set first</h2><ul>{service.controls.map(x=><li key={x}>{x}</li>)}</ul></article><article><h2>Practical launch plan</h2><ol>{service.launch.map(x=><li key={x}>{x}</li>)}</ol></article></div></section><CTA/></main><Footer/></>;
}
