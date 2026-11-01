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
    '> Freelance software engineer and consultant in Kathmandu, Nepal. Builds ERP, CRM and operations software end to end with Laravel, Vue and PostgreSQL. Creator of Kaede, an ERP for freight forwarders. Laravel contributor. Contact: nobel@dahal.tech',
    '',
    '## Case studies',
    ...work.map((w) => `- [${w.title}](${SITE}${w.path}): ${w.summary}`),
    '',
    '## Writing',
    ...posts.map((p) => `- [${p.title}](${SITE}${p.path}): ${p.summary}`),
    '',
    '## More',
    `- [All work since 2017](${SITE}/work)`,
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
    dirStyle: 'nested',
    formatting: 'none',
    includedRoutes: () => [...pages().all.map((p) => p.path), '/404'],
    onFinished() {
      const data = pages()
      writeSitemap(data)
      writeFeed(data)
      writeLlms(data)
      fs.renameSync('dist/404/index.html', 'dist/404.html') // Netlify serves this for unknown paths
      fs.rmSync('dist/404', { recursive: true })
    },
  },
})
