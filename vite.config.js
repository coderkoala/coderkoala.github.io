import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'node:fs'
import { SITE, pages, imagesFor } from './scripts/pages.mjs'

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c])

function writeSitemap({ all }) {
  const urls = all.map((p) => {
    const imgs = imagesFor(p).map(([src, cap]) => `<image:image><image:loc>${SITE}${src}</image:loc><image:caption>${esc(cap)}</image:caption></image:image>`).join('')
    return `<url><loc>${SITE}${p.path}</loc><lastmod>${p.lastmod}</lastmod><priority>${p.priority}</priority>${imgs}</url>`
  }).join('')
  fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}</urlset>`)
}

// A plain-text map of the site for AI assistants and answer engines.
function writeLlms({ work, posts }) {
  const lines = [
    '# Nobel Dahal',
    '',
    '> Built Kaede, a cargo ERP for freight forwarders, end to end: IATA ONE Record and Cargo-XML messaging, AWB stock allocation under concurrency, carrier-portal automation, and a learning engine that suggests from an office\'s own history. Laravel contributor. Freelance full-stack developer (Laravel, Vue, PostgreSQL) in Kathmandu, Nepal. Contact: nobel@dahal.tech',
    '',
    '## Case studies',
    ...work.map((w) => `- [${w.title}](${SITE}${w.path}): ${w.summary}`),
    '',
    '## Writing',
    ...posts.map((p) => `- [${p.title}](${SITE}${p.path}): ${p.summary}`),
    '',
    '## More',
    `- [All work since 2017](${SITE}/work/)`,
    `- [Hire: services, process and FAQ](${SITE}/hire)`,
    `- [About, experience, open source and certifications](${SITE}/about)`,
    `- [Résumé (PDF)](${SITE}/download/resume.pdf)`,
    '- [GitHub](https://github.com/coderkoala)',
    '- [LinkedIn](https://www.linkedin.com/in/coderkoala)',
    '',
  ]
  fs.writeFileSync('dist/llms.txt', lines.join('\n'))
}

function writeFeed({ posts }) {
  const items = posts.map((p) => `<item><title>${esc(p.title)}</title><link>${SITE}${p.path}</link><guid>${SITE}${p.path}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${esc(p.summary)}</description></item>`).join('')
  fs.writeFileSync('dist/feed.xml', `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Nobel Dahal · Writing</title><link>${SITE}/writing</link><atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/><description>Case studies and notes from building business software.</description><language>en</language>${items}</channel></rss>`)
}

export default defineConfig({
  plugins: [vue()],
  server: { port: 9000, strictPort: true, host: true },
  preview: { port: 9000 },
  ssgOptions: {
    dirStyle: 'flat', // work/kaede.html: GitHub Pages serves it at /work/kaede with no redirect
    formatting: 'none',
    beastiesOptions: { preload: 'swap', pruneSource: false }, // inline critical CSS, load the rest without blocking
    includedRoutes: () => [...pages().all.map((p) => p.path), '/404'],
    onFinished() {
      const data = pages()
      writeSitemap(data)
      writeFeed(data)
      writeLlms(data)
      // Old URLs from the 2019 site keep working.
      fs.copyFileSync('dist/feed.xml', 'dist/rss.xml')
      const urls = data.all.map((p) => SITE + p.path)
      fs.writeFileSync('dist/urllist.txt', urls.join('\n') + '\n')
      fs.writeFileSync('dist/ror.xml', `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:ror="http://rorweb.com/0.1/"><channel><title>Nobel Dahal</title><link>${SITE}/</link>${urls.map((u) => `<item><link>${u}</link></item>`).join('')}</channel></rss>`)
      fs.writeFileSync('dist/sitemap.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sitemap · Nobel Dahal</title><link rel="canonical" href="${SITE}/sitemap.html"><style>body{font:16px/1.7 system-ui,sans-serif;max-width:720px;margin:48px auto;padding:0 20px;color:#141414}a{color:inherit}h1{font-size:28px}</style></head><body><h1>Sitemap</h1><ul>${data.all.map((p) => `<li><a href="${p.path}">${esc(p.path === '/' ? 'Home' : p.title)}</a></li>`).join('')}<li><a href="/download/resume.pdf">Résumé (PDF)</a></li><li><a href="/download/resume.docx">Résumé (Word)</a></li></ul></body></html>`)
      fs.writeFileSync('dist/.nojekyll', '') // serve .well-known and friends as-is
    },
  },
})
