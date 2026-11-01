// Reads content/ once for the build: routes, sitemap, feed and preview images share it.
import fs from 'node:fs'
import path from 'node:path'

export const SITE = 'https://www.nobeldahal.com.np'

export function frontmatter(file) {
  const raw = fs.readFileSync(file, 'utf8')
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const data = {}
  if (m) for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/)
    if (kv && kv[2] !== '') data[kv[1]] = kv[2]
  }
  return data
}

function read(dir, base) {
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => {
    const file = path.join(dir, f)
    const d = frontmatter(file)
    return { ...d, path: `${base}/${f.replace(/\.md$/, '')}`, lastmod: d.date || fs.statSync(file).mtime.toISOString().slice(0, 10) }
  }).filter((d) => d.draft !== 'true')
}

export function pages() {
  const work = read('content/work', '/work')
  const posts = read('content/writing', '/writing').sort((a, b) => b.date.localeCompare(a.date))
  const today = new Date().toISOString().slice(0, 10)
  return {
    work, posts,
    all: [
      { path: '/', title: 'Nobel Dahal', kind: 'Freelance software engineer and consultant', og: 'default', lastmod: today, priority: '1.0' },
      { path: '/work', title: 'Work', kind: 'Everything since 2017', lastmod: today, priority: '0.9' },
      { path: '/about', title: 'About', kind: 'Experience, open source, certifications', lastmod: today, priority: '0.8' },
      { path: '/writing', title: 'Writing', kind: 'Case studies and notes', lastmod: posts[0]?.lastmod || today, priority: '0.7' },
      ...work.map((w) => ({ ...w, kind: `${w.kind} · ${w.years}`, priority: '0.9' })),
      ...posts.map((p) => ({ ...p, kind: 'Writing', priority: '0.7' })),
    ],
  }
}
