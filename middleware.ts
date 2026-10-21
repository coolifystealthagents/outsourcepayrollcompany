import { NextRequest, NextResponse } from 'next/server';

const productionHost='outsourcepayrollcompany.com';
const allowedHosts=new Set([productionHost,`www.${productionHost}`]);
const firstForwarded=(value:string|null)=>value?.split(',')[0]?.trim().toLowerCase()||'';
const normalizedHost=(value:string|null)=>firstForwarded(value).replace(/:\d+$/,'');

export function middleware(request:NextRequest){
  const host=normalizedHost(request.headers.get('x-forwarded-host'))||normalizedHost(request.headers.get('host'));
  if(!allowedHosts.has(host))return NextResponse.next();
  const cfVisitor=request.headers.get('cf-visitor')||'';
  const visitorProtocol=/"scheme"\s*:\s*"([^"]+)"/i.exec(cfVisitor)?.[1]?.toLowerCase()||'';
  const protocol=firstForwarded(request.headers.get('x-forwarded-proto'))||visitorProtocol||request.nextUrl.protocol.replace(':','').toLowerCase();
  if(host===`www.${productionHost}`||protocol==='http'){
    const canonical=request.nextUrl.clone();
    canonical.protocol='https:';
    canonical.host=productionHost;
    canonical.port='';
    return NextResponse.redirect(canonical,308);
  }
  const response=NextResponse.next();
  response.headers.set('x-content-type-options','nosniff');
  return response;
}

export const config={matcher:['/((?!_next/static|_next/image|favicon.ico).*)']};
