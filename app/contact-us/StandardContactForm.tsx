'use client';

import { FormEvent, useEffect, useState } from 'react';

type TrackerWindow = Window & { acrTracker?: { trackLead?: (payload: Record<string, unknown>) => void } };
const companySizes=['1-5','5-10','11-50','51-250','251-1k','1k+'];
const positions=['Just 1 Position','2-5 Positions','6-10 Positions','11-50 Positions','51-100 Positions','101-500 Positions','501-1,000 Positions','Over 1,000 Positions'];
const referrals=['Google','Email','LinkedIn','Reddit','X / Twitter','Referral','ChatGPT / AI','Outbound Outreach','Other'];
const countryCodes=[['US','+1'],['CA','+1'],['ID','+62'],['PH','+63'],['GB','+44'],['AU','+61'],['NZ','+64'],['SG','+65'],['IN','+91'],['AE','+971'],['MX','+52'],['BR','+55'],['ZA','+27'],['DE','+49'],['FR','+33']];

export default function StandardContactForm({ endpoint='/api/contact' }:{endpoint?:string}){
  const [status,setStatus]=useState('');
  const [submitting,setSubmitting]=useState(false);
  const [countryCode,setCountryCode]=useState('+1');
  const [referral,setReferral]=useState('');
  useEffect(()=>{const zone=Intl.DateTimeFormat().resolvedOptions().timeZone||'';const zones:Record<string,string>={'Asia/Jakarta':'+62','Asia/Makassar':'+62','Asia/Jayapura':'+62','Asia/Manila':'+63','Europe/London':'+44','Australia/Sydney':'+61','Australia/Melbourne':'+61','Pacific/Auckland':'+64','Asia/Singapore':'+65','Asia/Kolkata':'+91','Asia/Dubai':'+971'};if(zones[zone])setCountryCode(zones[zone])},[]);
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();if(submitting)return;const form=event.currentTarget;const data=new FormData(form);if(String(data.get('website_url')||'').trim())return;
    const first=String(data.get('firstName')||'').trim(),last=String(data.get('lastName')||'').trim();data.set('name',`${first} ${last}`.trim());data.set('phone',`${countryCode} ${String(data.get('phoneLocal')||'').trim()}`.trim());
    setSubmitting(true);setStatus('Sending...');
    try{const payload=Object.fromEntries(data);const response=await fetch(endpoint,{method:'POST',body:data});if(!response.ok)throw new Error('Request failed');try{(window as TrackerWindow).acrTracker?.trackLead?.(payload)}catch{}window.location.assign('/thank-you')}catch{setStatus('We could not send your request. Please try again.');setSubmitting(false)}
  }
  return <form id="contactPageForm" className="tc-form" action={endpoint} method="post" onSubmit={submit} aria-label="Free payroll support consultation">
    <input className="sa-hp" name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <div className="tc-form-head"><p>Free consultation</p><h2>Tell us about the payroll workflow</h2><span>All fields marked * are required.</span></div>
    <div className="tc-field-grid">
      <label>First name *<input name="firstName" autoComplete="given-name" required /></label>
      <label>Last name *<input name="lastName" autoComplete="family-name" required /></label>
      <label>Business email *<input type="email" name="email" autoComplete="email" required /><small>Not accepting personal email</small></label>
      <label>Phone number *<span className="sa-phone"><select name="countryCode" aria-label="Country code" value={countryCode} onChange={event=>setCountryCode(event.target.value)}>{countryCodes.map(([country,code],index)=><option value={code} key={`${country}-${code}-${index}`}>{country} {code}</option>)}</select><input name="phoneLocal" type="tel" required autoComplete="tel-national" /></span></label>
      <label>Company name *<input name="company" autoComplete="organization" required /></label>
      <label>Website / URL<input type="url" name="website" placeholder="https://" autoComplete="url" /></label>
      <label>Company size *<select name="companySize" required defaultValue=""><option value="" disabled>Select size</option>{companySizes.map(value=><option key={value}>{value}</option>)}</select></label>
      <label>How many positions to fill? *<select name="positions" required defaultValue=""><option value="" disabled>Select positions</option>{positions.map(value=><option key={value}>{value}</option>)}</select></label>
      <label>How did you hear about us? *<select name="source" required value={referral} onChange={event=>setReferral(event.target.value)}><option value="" disabled>Select source</option>{referrals.map(value=><option key={value}>{value}</option>)}</select></label>
      {referral==='Other'?<label>Please specify *<input name="referralSpecify" required /></label>:<div aria-hidden="true" />}
      <label className="tc-field-wide">Message<textarea name="message" rows={2} placeholder="Tasks, systems, schedule, and approval needs" /></label>
      <label className="tc-consent tc-field-wide"><input type="checkbox" name="consent" required />I agree to be contacted about this request. *</label>
      <button className="tc-submit tc-field-wide" type="submit" disabled={submitting}>{submitting?'Submitting...':'Book My Free Consultation'}</button>
      <p className="tc-form-status tc-field-wide" role="status" aria-live="polite">{status}</p>
    </div>
  </form>
}
