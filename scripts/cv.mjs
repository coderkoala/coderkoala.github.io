// Builds public/download/resume.pdf (A4) from the site's data. Run: npm run cv
import fs from 'node:fs'
import { chromium } from 'playwright-core'
import { findChrome } from './og.mjs'
import { site, certifications, skills, openSource } from '../src/lib/site.js'
import { summary, projects, roles } from '../src/lib/cv.js'

const font = (pkg, f) => fs.readFileSync(`node_modules/@fontsource/${pkg}/files/${f}`).toString('base64')
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
const host = (u) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

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
<p class="summary">${esc(summary)}</p>

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
// Same content for the Word version (scripts/cv_docx.py).
fs.writeFileSync('scripts/.cv-data.json', JSON.stringify({ site, projects, roles, openSource, skills, certifications: featuredCerts, restCount }, null, 2))
const browser = await chromium.launch({ executablePath: findChrome() })
const page = await browser.newPage()
await page.setContent(html, { waitUntil: 'load' })
await page.evaluate(() => document.fonts.ready)
await page.pdf({ path: 'public/download/resume.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true })
await browser.close()
console.log('cv: public/download/resume.pdf')
