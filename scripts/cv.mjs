// Builds public/download/resume.pdf (A4) from the site's data. Run: npm run cv
import fs from 'node:fs'
import { chromium } from 'playwright-core'
import { findChrome } from './og.mjs'
import { site, certifications, skills, openSource } from '../src/lib/site.js'

const font = (pkg, f) => fs.readFileSync(`node_modules/@fontsource/${pkg}/files/${f}`).toString('base64')
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
const host = (u) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

const projects = [
  {
    name: 'Kaede', kind: 'Cargo ERP for freight forwarders', when: '2022 – present', role: 'Creator and lead engineer',
    points: [
      'Runs a forwarder end to end: quotes, air waybills and stock, pickup and delivery, billing, leave and payroll; air, sea and road.',
      'Reads booking emails, invoices and packing lists and drafts the waybill for a person to confirm; full-text search and OCR over every document.',
      'Learning engine suggests parties, HS codes and routings from the office’s own history; rate builder suggests prices from rate tables.',
      'Native IATA ONE Record and Cargo-XML; browser automation for airline portals (Cathay Cargo, Etihad Cargo, iCargo).',
      'WhatsApp, Viber, Telegram, LINE, WeChat, Teams, Slack, SMS, email and web chat in one desk; driver and warehouse app with scan batches.',
      'Plain-language analytics with the shipments behind every number; SHA-256 hash-chained audit trail verified nightly; multi-tenant with billing.',
    ],
    stack: 'Laravel 13, PHP 8.4, Vue 3, PostgreSQL, Reverb (WebSockets), Syncfusion, Playwright · English, Nepali, Japanese',
  },
  {
    name: 'Kalimati Market', kind: 'kalimatimarket.gov.np', when: '2021 – 2025', role: 'Sole developer',
    points: [
      'Platform for Nepal’s largest wholesale produce market (60–70% of Kathmandu valley supply): website, ad-free Android app and staff admin.',
      'Daily prices for 100+ commodities and arrivals, with history and comparisons; notices, tenders and pesticide reports; Nepali and English.',
      'Online dues payments via eSewa, Khalti and bank: exact-amount checks, single-use references, queued server-to-server verification, daily rollover.',
      'Payment API for gateway providers: per-provider HS512 JWTs, IP allow-listing, quarterly key rotation, named errors, maintenance-safe retries.',
      'Nightly sync with the market’s office system: transactional CSV imports with checksums and one-per-day guards, payment exports, libsodium encryption.',
    ],
    stack: 'Laravel, MySQL, queues, libsodium, JWT, Android',
  },

]

const roles = [
  { org: 'Independent', title: 'Software Engineer and Consultant · Freelance', when: 'Jan 2020 – present', points: [
    'Design, build and run ERP, CRM and operations systems for clients, from schema to deployment. Kaede and Kalimati Market above.',
  ] },
  { org: 'Code for Nepal', title: 'Data Science Fellow · Part-time', when: 'Dec 2021 – May 2022', points: [] },
  { org: 'United Real Estate (US)', title: 'Software Engineer · Freelance', when: 'May 2020 – Apr 2021', points: [
    'Migrated the brokerage from Zoho CRM to Microsoft Dynamics 365, with tooling for records and the document store (to SharePoint).',
    'Node.js microservice over the Dynamics Web API (Azure AD) that finds agents near a lead among millions of records and maps them in seconds.',
    'C# plugins (Leads, Opportunity, Super Obituaries), schema tooling to replay customisations, Power Automate flows for mail and Planner.',
  ] },
  { org: 'Proshore', title: 'Software Engineer · Full-time', when: 'Oct 2020 – Feb 2021', points: [
    'Led the build of Affiliatefeed, a Shopify app forked from Exportfeed into a standalone PWA, including company-wide demos.',
    'Refactoring within Joomla MVC; pushed for test-driven development; remote Agile team.',
  ] },
  { org: 'TechSathi', title: 'Platform Architect · Part-time', when: 'Jun 2020 – Nov 2020', points: [
    'AWS operations and continuous delivery for a news portal; cut query times with views and stored procedures.',
  ] },
  { org: 'ThemeGrill (WPEverest)', title: 'WordPress Plugin Developer · Full-time', when: 'Nov 2019 – Jun 2020', points: [
    '28 merged pull requests to Everest Forms and User Registration: WPML support, PHPUnit setup, conditional logic, email validation.',
    'Rebuilt the PDF Submission add-on: render time at least halved, size from 12 MB to 5.6 MB.',
    'Found a file-upload validation bypass in Everest Forms Pro (fixed in 1.7) and closed a server-side email validation gap in the core plugin.',
    'Wrote the WPEverest developer documentation.',
  ] },
  { org: 'Gurkha Technology', title: 'Software Engineer · Full-time', when: 'Jul 2019 – Nov 2019', points: [
    'Exam system for Presidential Business School: randomised entrance papers; a scraper that gathered 17k questions, replacing manual entry.',
    'Two-person team for nimbusnepal.com and its Laravel CMS with an applicant tracking system.',
  ] },
  { org: 'Google Developer Group (GDG) Dang', title: 'Organizer and Speaker · Volunteer', when: '2019', points: [
    'Volunteer organizer; deployed the chapter’s DevFest 2019 site, a Vue PWA on Firebase.',
    'Spoke on Google Vision AI, with an open-source Lumen demo app for attendees to start from.',
  ] },
  { org: 'The Open Institute for Social Science', title: 'Software Engineer · Internship', when: 'Nov 2018 – Feb 2019', points: [
    'Contributed to ERPNext and Zulip under Dr. Peter Graif; Linux administration on DigitalOcean.',
  ] },
]

const featuredCerts = certifications.filter((c) => c.featured)
const restCount = certifications.length - featuredCerts.length

const css = `
@font-face{font-family:P;font-weight:400;src:url(data:font/woff2;base64,${font('ibm-plex-sans', 'ibm-plex-sans-latin-400-normal.woff2')})}
@font-face{font-family:P;font-weight:600;src:url(data:font/woff2;base64,${font('ibm-plex-sans', 'ibm-plex-sans-latin-600-normal.woff2')})}
@font-face{font-family:P;font-weight:700;src:url(data:font/woff2;base64,${font('ibm-plex-sans', 'ibm-plex-sans-latin-700-normal.woff2')})}
@font-face{font-family:M;src:url(data:font/woff2;base64,${font('ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff2')})}
@page{size:A4;margin:14mm 15mm}
*{margin:0;padding:0;box-sizing:border-box}
body{font:400 9.2pt/1.42 P,sans-serif;color:#141414}
a{color:inherit;text-decoration:none}
header{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;padding-bottom:10px;border-bottom:1.5px solid #141414}
h1{font-size:22pt;font-weight:700;letter-spacing:-.02em;line-height:1}
.role{font-size:10.5pt;color:#4a4a48;margin-top:5px}
.contact{text-align:right;font-size:8.6pt;color:#4a4a48;line-height:1.55}
.summary{margin:10px 0 2px;font-size:9.8pt;color:#2a2a28}
h2{font-size:8pt;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#75746f;margin:13px 0 6px;padding-bottom:3px;border-bottom:1px solid #e4e3df}
.item{break-inside:avoid;margin-bottom:8px}
.row{display:flex;justify-content:space-between;gap:12px;align-items:baseline}
.name{font-weight:700;font-size:10pt}
.sub{color:#4a4a48}
.when{color:#75746f;font-family:M;font-size:8pt;white-space:nowrap}
ul{margin:3px 0 0 13px}
li{margin:1.5px 0;color:#2a2a28}
li::marker{color:#9a9994}
.stack{font-size:8.2pt;color:#75746f;margin-top:2px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 24px}
.kv{display:grid;grid-template-columns:62px 1fr;gap:2px 8px}
.kv dt{color:#75746f}
.small{font-size:8.4pt;color:#4a4a48}
`

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Nobel Dahal · Résumé</title><style>${css}</style></head><body>
<header>
  <div><h1>${site.name}</h1><p class="role">Full-Stack Developer and Software Engineer · Freelance</p></div>
  <div class="contact">
    Kathmandu, Nepal · UTC+5:45<br>
    <a href="mailto:${site.email}">${site.email}</a> · <a href="${site.url}">${host(site.url)}</a><br>
    <a href="${site.github}">${host(site.github)}</a> · <a href="${site.linkedin}">${host(site.linkedin)}</a>
  </div>
</header>
<p class="summary">Full-stack engineer who designs, builds and runs business systems end to end: ERP, CRM and operations software, from the database schema to the screen people use all day. Creator of Kaede, an ERP for freight forwarders. Shipping production software since 2018; Laravel contributor.</p>

<h2>Selected work</h2>
${projects.map((p) => `<div class="item">
  <div class="row"><span><span class="name">${esc(p.name)}</span> <span class="sub">· ${esc(p.kind)} · ${esc(p.role)}</span></span><span class="when">${p.when}</span></div>
  <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
  <p class="stack">${esc(p.stack)}</p>
</div>`).join('')}

<h2>Experience</h2>
${roles.map((r) => `<div class="item">
  <div class="row"><span><span class="name">${esc(r.org)}</span> <span class="sub">· ${esc(r.title)}</span></span><span class="when">${r.when}</span></div>
  ${r.points.length ? `<ul>${r.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
</div>`).join('')}

<h2>Open source</h2>
<div class="grid">
${openSource.map((o) => `<p><b>${esc(o.what)}</b> <span class="sub">· ${esc(o.text)}</span></p>`).join('')}
</div>

<h2>Skills</h2>
<dl class="kv">
${skills.map((g) => `<dt>${g.group}</dt><dd>${g.items.join(', ')}</dd>`).join('')}
<dt>Domains</dt><dd>ERP, CRM, air cargo (IATA ONE Record, Cargo-XML), payroll, integrations, localisation (Nepali, Japanese)</dd>
</dl>

<div class="grid" style="margin-top:2px">
  <div>
    <h2>Certifications</h2>
    ${featuredCerts.map((c) => `<p>${esc(c.name)} <span class="sub small">· ${esc(c.issuer)}, ${c.year}</span></p>`).join('')}
    <p class="small" style="margin-top:3px">And ${restCount} more, including Vue.js 3, Laravel 9, Node.js and AWS (LinkedIn Learning).</p>
  </div>
  <div>
    <h2>Education</h2>
    <p><b>Bachelor of Engineering, Computer</b></p>
    <p class="sub">Himalaya College of Engineering, Kathmandu · 2014 – 2018</p>
    <h2>Languages</h2>
    <p>English (professional), Nepali (native)</p>
  </div>
</div>
</body></html>`

fs.writeFileSync('scripts/.cv-preview.html', html)
const browser = await chromium.launch({ executablePath: findChrome() })
const page = await browser.newPage()
await page.setContent(html, { waitUntil: 'load' })
await page.evaluate(() => document.fonts.ready)
await page.pdf({ path: 'public/download/resume.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true })
await browser.close()
console.log('cv: public/download/resume.pdf')
