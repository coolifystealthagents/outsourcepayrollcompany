#!/usr/bin/env python3
import hashlib, json, textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
DATE = "2026-10-13"

blogs = [
  ("taxable-fringe-benefit-evidence-packet", "Assemble a Taxable Fringe Benefit Evidence Packet", "taxable fringe benefit intake", "benefit election, valuation support, payroll code, and owner approval", "a benefit arrives without a valuation date or authorized treatment"),
  ("off-cycle-payroll-request-triage", "Triage an Off-Cycle Payroll Request Without Bypassing Controls", "off-cycle payroll requests", "request reason, impacted worker, funding window, and release authority", "urgency is asserted without evidence of the underlying payroll event"),
  ("final-pay-calendar-handoff", "Build a Final Pay Calendar Handoff for Departing Workers", "final pay scheduling", "separation record, jurisdiction flag, payroll calendar, and accountable owner", "the separation date conflicts with the approved payroll calendar"),
  ("direct-deposit-prenote-exception", "Control a Direct Deposit Prenote Exception", "direct deposit prenote exceptions", "employee-authenticated request, bank validation result, effective date, and security review", "a bank change fails validation or arrives through an unapproved channel"),
  ("employee-legal-name-change-evidence", "Reconcile Employee Legal Name Change Evidence", "employee legal-name changes", "employee request, identity record, HR master update, and payroll receipt", "records disagree on spelling, effective date, or authorized source"),
  ("multi-state-work-location-intake", "Route a Multi-State Work Location Intake to Qualified Owners", "multi-state work-location intake", "work-location history, effective dates, employer entities, and owner decisions", "a location change could affect tax or employment treatment"),
  ("payroll-provider-case-number-register", "Maintain a Payroll Provider Case Number Register", "payroll provider cases", "case number, affected population, evidence sent, response, and closure receipt", "a provider closes a ticket without resolving the documented exception"),
  ("timecard-correction-authorization", "Verify Timecard Correction Authorization Before Payroll Close", "timecard correction authorization", "original timecard, correction reason, manager approval, and payroll acceptance", "a correction changes hours but lacks a traceable approving owner"),
  ("benefit-deduction-arrears-handoff", "Document a Benefit Deduction Arrears Handoff", "benefit deduction arrears", "coverage period, missed deductions, plan input, employee communication, and owner decision", "the proposed recovery schedule is not authorized or supported"),
  ("negative-net-pay-exception", "Escalate a Negative Net Pay Exception With Complete Evidence", "negative net pay exceptions", "gross-to-net trace, deduction inputs, adjustment history, and decision owner", "the calculation reaches a negative result or an unexplained reversal"),
  ("payroll-funding-confirmation-separation", "Separate Payroll Funding Confirmation From Release Approval", "payroll funding confirmation", "funding request, bank acknowledgment, payroll release, and destination receipt", "a balance screenshot is treated as authority to release payroll"),
  ("year-end-address-change-cutoff", "Control Year-End Address Change Cutoffs and Receipts", "year-end address changes", "employee-authenticated request, cutoff calendar, system update, and delivery receipt", "a late change risks being applied to the wrong reporting period"),
]

research = [
  ("pay-statement-delivery-failure-study", "Pay Statement Delivery Failure Evidence Study", "pay statement delivery failures", "whether delivery evidence distinguishes a sent notice from employee-accessible delivery"),
  ("payroll-change-approval-latency-study", "Payroll Change Approval Latency Study", "payroll change approval latency", "where usable review time is lost between a complete request and an authorized decision"),
  ("bank-account-change-dual-verification-study", "Bank Account Change Dual Verification Study", "bank account change verification", "whether independent verification catches channel and identity conflicts before activation"),
  ("payroll-cutoff-exception-recurrence-study", "Payroll Cutoff Exception Recurrence Study", "payroll cutoff exceptions", "which evidence-supported exception categories recur across comparable payroll periods"),
  ("departed-worker-access-revocation-lag-study", "Departed Worker Access Revocation Lag Study", "departed-worker access revocation", "how much time elapses between an approved separation event and verified access removal"),
]

blog_heads = ["Define the request and authority boundary", "Build the evidence packet", "Test ordinary and adverse paths", "Route exceptions without guessing", "Verify release and retain closure evidence"]
research_heads = ["Research question and bounded population", "Evidence model and source hierarchy", "Sampling and adverse controls", "Measurement and reconciliation", "Interpretation and decision ownership", "Limitations and reproducible conclusion"]

sources = [
  {"label":"U.S. Department of Labor Wage and Hour Division", "url":"https://www.dol.gov/agencies/whd"},
  {"label":"Internal Revenue Service Publication 15", "url":"https://www.irs.gov/publications/p15"},
  {"label":"Internal Revenue Service Publication 15-B", "url":"https://www.irs.gov/publications/p15b"},
  {"label":"Social Security Administration Employer W-2 Filing Instructions", "url":"https://www.ssa.gov/employer/"},
  {"label":"National Institute of Standards and Technology Digital Identity Guidelines", "url":"https://pages.nist.gov/800-63-4/"},
  {"label":"NIST Security and Privacy Controls", "url":"https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"},
  {"label":"Cybersecurity and Infrastructure Security Agency MFA Guidance", "url":"https://www.cisa.gov/mfa"},
  {"label":"Federal Trade Commission Data Security Guidance", "url":"https://www.ftc.gov/business-guidance/privacy-security/data-security"},
  {"label":"National Archives Records Management Guidance", "url":"https://www.archives.gov/records-mgmt"},
  {"label":"Equal Employment Opportunity Commission Recordkeeping Requirements", "url":"https://www.eeoc.gov/employers/recordkeeping-requirements"},
]

def blog_paragraph(title, subject, evidence, exception, section, marker, variant):
  if variant == 1:
    return f"{title} starts with a bounded {subject} population, one payroll period, a named preparer, and an owner who retains decision authority. At the {section.lower()} checkpoint, record {evidence} as separate artifacts rather than collapsing them into a ticket status. Trace {marker}-A identifies the request, source versions, applicable cutoff, and person authorized to decide. The support role may organize records, compare populations, and describe missing evidence, but it must not infer tax, employment, banking, benefit, or legal treatment. If scope changes, open a new trace instead of silently rewriting the original request."
  if variant == 2:
    return f"For this {subject} lane, reconcile membership before totals: list every affected record, exclusions approved by the owner, duplicates, late arrivals, and destination results. Trace {marker}-B preserves the source timestamp, effective period, approval event, system receipt, and unresolved exception. The ordinary fixture should prove that {evidence} agree for the same population. The adverse fixture deliberately tests the case where {exception}. A reviewer must see both versions, state what remains unknown, assign a due point, and pause the dependent action until the authorized owner records a decision."
  return f"Closure for {title} requires evidence from the destination, not merely a sent message or successful upload. Under {marker}-C, compare the approved instruction with observed payroll output, retain the reviewer’s acceptance, and link each exception to its disposition. Use minimum necessary data, named accounts, multifactor authentication, and a documented retention purpose; synthetic data belongs in training and testing. Report counts for received, matched, excluded, unresolved, rejected, and accepted records so an equal total cannot conceal population substitution. A later reviewer should be able to reproduce the {section.lower()} result without relying on memory or private chat."

blog_posts=[]; blog_details={}
for i,(slug,title,subject,evidence,exception) in enumerate(blogs):
  related=[blogs[(i+j)%len(blogs)][0] for j in (1,2,3)]
  sections=[]
  for j,heading in enumerate(blog_heads):
    marker=f"OPC-B-1013-{i+1}-{j+1}"
    sections.append({"heading":heading,"paragraphs":[blog_paragraph(title,subject,evidence,exception,heading,marker,v) for v in (1,2,3)]})
  blog_posts.append({"slug":slug,"title":title,"excerpt":f"A controlled operating guide for {subject} with explicit evidence, exceptions, authority, and closure receipts.","minutes":14,"published":DATE})
  blog_details[slug]={
    "takeaways":[f"Bound the {subject} population and period before work begins.","Keep preparation, review, decision, and release as separate events.","Stop the dependent action when source evidence conflicts.","Close only after destination evidence and owner acceptance are retained."],
    "readinessRows":[{"area":"Scope","ready":f"One defined {subject} population and period","ownerCheck":"Confirm boundaries and authority."},{"area":"Evidence","ready":evidence,"ownerCheck":"Confirm versions and approved storage."},{"area":"Exception","ready":"Named owner, safe stop, and due point","ownerCheck":"Approve disposition before release."},{"area":"Closure","ready":"Destination receipt and owner acceptance","ownerCheck":"Retain final decision authority."}],
    "sections":sections,
    "roleBrief":[f"Subject: {subject}",f"Evidence: {evidence}","Boundary: support prepares and reconciles; authorized owners decide and release."],
    "faqs":[{"question":f"What should the first {subject} assignment include?","answer":"Use one bounded synthetic case, one adverse fixture, a named owner, and explicit stop conditions."},{"question":"Can outsourced support decide payroll treatment?","answer":"No. Support can assemble evidence and exceptions; qualified company owners decide treatment and release."},{"question":"What proves completion?","answer":"The approved source, observed destination result, resolved exceptions, and recorded owner acceptance."}],
    "sources":[{"name":s["label"],"url":s["url"],"note":"Authoritative context; qualified owners apply requirements to company facts."} for s in sources[:4]],
    "publication":{"internalLinks":["/services/operations-support","/services/reporting-and-qa"],"externalLink":"https://csrc.nist.gov/pubs/sp/800/207/final","related":related},
    "contextualLink":{"heading":"Pilot a bounded payroll support lane","body":f"Test one representative {subject} case with the company owner who retains decision authority.","href":"/services/payroll-preparation","label":"Review payroll preparation support"},
    "rich":{"keyword":subject,"marker":f"OPC-B-1013-{i+1}","published":DATE,"image":f"/oct13-heroes/{slug}.webp","directAnswer":[f"Treat {subject} as a source, authority, and destination-evidence chain rather than a free-form request."],"stats":[{"value":"1","label":"bounded population","note":"Start with one defined period and owner."},{"value":"2","label":"test paths","note":"Run an ordinary and adverse fixture."}],"quote":{"text":"Evidence should remain attributable to its source, reviewer, and decision owner.","attribution":"NIST security and privacy controls","url":"https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"},"chart":{"title":"Illustrative review coverage","description":"A planning illustration, not measured provider performance.","methods":"Synthetic comparison used only to explain the control design."},"graphic":{"title":"Payroll evidence path","description":"Preparation, owner review, release, and receipt remain distinct.","steps":["Prepare","Review","Approve","Verify"]},"banners":[{"eyebrow":"Bound the pilot","heading":"Start with one controlled case","text":"Name the owner, evidence, and stop conditions before access begins.","href":"/services/payroll-preparation","label":"Plan the pilot"},{"eyebrow":"Inspect the result","heading":"Review exceptions before expansion","text":"Use destination receipts and owner acceptance to judge readiness.","href":"/services/reporting-and-qa","label":"Review QA support"},{"eyebrow":"Keep authority clear","heading":"Separate preparation from release","text":"Qualified owners retain consequential payroll decisions.","href":"/services/operations-support","label":"Review operations support"}],"internalLinks":[{"href":"/blog","label":"Payroll operations guides"},{"href":"/research","label":"Payroll research library"}]}
  }

def research_body(title,subject,question,heading,marker):
  return (f"{title} asks {question}. During {heading.lower()}, the unit is one synthetic {subject} trace within a declared payroll period; no worker, employer, bank, or provider outcome is asserted. {marker}-A records inclusion rules, exclusions, retrieval time, source version, preparer, reviewer, decision owner, and destination evidence. Reviewers compare population membership before counts, timing, or amounts, retain unmatched records in both directions, and distinguish source facts from calculations, system messages, interpretations, and owner decisions. A submitted file, closed ticket, or matching total is not proof that the destination accepted the intended result. "
          f"The ordinary control for {subject} contains a complete authorized source, an expected event sequence, and a verifiable receipt. The adverse control changes one fact at a time: identity channel, effective date, period, population, approval, or system response. {marker}-B requires the reviewer to preserve both versions, describe the conflict, name an exception owner, and pause dependent action. Sampling includes ordinary, boundary, negative, and ambiguous cases rather than only successful records. A second reviewer independently repeats the highest-consequence comparison and records disagreement without seeing the first conclusion. Synthetic identifiers replace employee, bank, tax, health, and credential data throughout the protocol. "
          f"Measurement for {title} reports numerator, denominator, period, cohort, missingness, unresolved count, and elapsed decision time. {marker}-C prohibits a universal pass threshold: management chooses a documented response after inspecting the evidence and limitations. Report medians with tail cases, because an average can conceal a small group reaching cutoff without review. Separate observed association from cause, and test alternative explanations such as source latency, system batching, calendar mismatch, or classification drift. Public sources define their own domains; they do not certify a private organization, decide legal or tax treatment, or demonstrate service-provider performance. "
          f"The reproducible record for {subject} retains the query or selection rule, synthetic fixtures, source citations, comparison logic, reviewer notes, exception disposition, and owner acceptance. {marker}-D treats absence of evidence as unresolved, not as evidence of absence. Limit conclusions to the tested population and period, route jurisdiction-specific questions to qualified payroll, tax, employment, privacy, security, or banking owners, and schedule re-test after any material source or workflow change. The support team may prepare and reconcile the record, while consequential interpretation and release remain with authorized company roles. This boundary makes the protocol useful without overstating what the observed sample can establish.")

research_posts=[]
for i,(slug,title,subject,question) in enumerate(research):
  sections=[{"heading":h,"body":research_body(title,subject,question,h,f"OPC-R-1013-{i+1}-{j+1}")} for j,h in enumerate(research_heads)]
  research_posts.append({"slug":slug,"title":title,"excerpt":f"A source-bounded protocol examining {subject} without asserting a private employer or provider outcome.","published":DATE,"order":3000+i,"stat":f"The unit is one synthetic {subject} trace; no measured provider result is asserted.","image":f"/oct13-heroes/{slug}.webp","takeaways":[f"Define the {subject} population, period, and authority before measurement.","Use ordinary, adverse, ambiguous, and independently reviewed controls.","Keep consequential payroll decisions with authorized company owners."],"sections":sections,"sources":sources,"faq":[{"question":"Does this study decide payroll, tax, legal, or banking treatment?","answer":"No. It tests operational evidence within a synthetic bounded protocol; qualified owners retain consequential decisions."},{"question":"How should a team pilot the method?","answer":"Use one declared period, synthetic fixtures, independent review, explicit stop conditions, and a named decision owner."}],"related":[research[(i+j)%len(research)][0] for j in (1,2,3)],"serviceHandoff":{"heading":"Apply the protocol to a bounded support lane","body":f"Pilot one representative {subject} trace and preserve sources, limitations, and authority.","href":"/services/reporting-and-qa","cta":"Review payroll reporting and QA support"}})

def ts(path, name, value):
  path.write_text(f"export const {name}=" + json.dumps(value,indent=2,ensure_ascii=False) + " as const;\n")

ts(ROOT/'app/october13-blog.ts','october13BlogPosts',blog_posts)
with (ROOT/'app/october13-blog.ts').open('a') as f: f.write("export const october13BlogDetails="+json.dumps(blog_details,indent=2,ensure_ascii=False)+" as const;\n")
ts(ROOT/'app/october13-research.ts','october13ResearchPosts',research_posts)

out=ROOT/'public/oct13-heroes'; out.mkdir(parents=True,exist_ok=True)
font_path=next(p for p in ['/System/Library/Fonts/Supplemental/Arial Bold.ttf','/System/Library/Fonts/Supplemental/Georgia Bold.ttf'] if Path(p).exists())
articles=[]
for i,a in enumerate(blog_posts+research_posts):
  section='Blog' if i<12 else 'Research'; slug=a['slug']; title=a['title']; path=out/f'{slug}.webp'
  bg=[(12,45,31),(15,42,61),(52,33,65),(59,43,17),(20,52,61)][i%5]; accent=[(55,204,128),(56,189,248),(196,132,252),(250,190,65),(45,212,191)][i%5]
  im=Image.new('RGB',(1200,630),bg); d=ImageDraw.Draw(im); d.polygon([(0,0),(850,0),(710,630),(0,630)],fill=tuple(max(0,x-7) for x in bg))
  for n in range(6):
    x=860+((i*47+n*37)%190); y=45+n*83; d.rounded_rectangle((x,y,x+220,y+46),12,outline=accent,width=3); d.ellipse((x-38,y+10,x-18,y+30),fill=accent)
  small=ImageFont.truetype(font_path,22); d.rounded_rectangle((55,45,490,91),8,fill=accent); d.text((72,58),f"PAYROLL {'GUIDE' if section=='Blog' else 'RESEARCH'}",font=small,fill=bg)
  size=48
  while True:
    f=ImageFont.truetype(font_path,size); lines=textwrap.wrap(title,31)
    if len(lines)<=3 and max(d.textbbox((0,0),line,font=f)[2] for line in lines)<=690: break
    size-=2
  y=155
  for line in lines: d.text((55,y),line,font=f,fill=(248,250,244)); y+=size+13
  d.text((55,542),'Outsource Payroll Company',font=small,fill=(248,250,244)); d.text((55,578),'Published October 13, 2026',font=small,fill=accent)
  exif=Image.Exif(); exif[270]=title; im.save(path,'WEBP',quality=86,method=6,exif=exif)
  body=blog_details[slug]['sections'] if section=='Blog' else a['sections']
  text=' '.join(p for s in body for p in (s['paragraphs'] if section=='Blog' else [s['body']]))
  source=ROOT/('app/october13-blog.ts' if section=='Blog' else 'app/october13-research.ts')
  articles.append({"section":section,"title":title,"slug":slug,"sourcePath":str(source.relative_to(ROOT)),"thumbnailPath":str(path.relative_to(ROOT)),"publicationDate":DATE,"wordCount":len(text.split())})

for a in articles:
  a['sha256']=hashlib.sha256((ROOT/a['sourcePath']).read_bytes()).hexdigest()
manifest={"site":"OutsourcePayrollCompany.com","canonicalDomain":"https://outsourcepayrollcompany.com","repository":"coolifystealthagents/outsourcepayrollcompany","branch":"main","baseSha":"f44d6f59dd3f42fc970305c8056bfe9fa6abb6ea","publicationDate":DATE,"counts":{"blog":12,"research":5,"total":17,"thumbnails":17},"registryPaths":["app/data.ts","app/fleet-content.ts"],"routePaths":["app/blog/[slug]/page.tsx","app/research/[slug]/page.tsx"],"articles":articles}
(ROOT/'publishing/2026-10-13/manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('Generated 12 Blog, 5 Research, and 17 thumbnails')
