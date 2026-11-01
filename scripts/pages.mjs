// Reads content/ once for the build: routes, sitemap, feed and preview images share it.
import fs from 'node:fs'
import path from 'node:path'

export const SITE = 'https://nobeldahal.com.np'

export function frontmatter(file) {
  const raw = fs.readFileSync(file, 'utf8')
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const data = {}
  let list = null
  if (m) for (const line of m[1].split(/\r?\n/)) {
    const item = line.match(/^\s+-\s+(.*)$/)
    if (item && list) { data[list].push(item[1].trim()); continue }
    const kv = line.match(/^([\w-]+):\s*(.*)$/)
    if (!kv) continue
    if (kv[2] === '') { data[kv[1]] = []; list = kv[1] } else { data[kv[1]] = kv[2]; list = null }
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

// Images worth indexing per page, for the image sitemap.
export function imagesFor(page) {
  const shots = Array.isArray(page.shots) ? page.shots.map((s) => s.split('::').map((x) => x.trim())) : []
  const list = [
    ...(page.cover ? [[page.cover, `${page.title}, the live product`]] : []),
    ...shots.map(([src, cap]) => [src, cap]),
  ]
  if (page.path === '/work/') {
    for (const f of fs.readdirSync('content/gallery').filter((f) => f.endsWith('.md'))) {
      const g = frontmatter(path.join('content/gallery', f))
      for (const k of ['image', 'logo']) if (typeof g[k] === 'string' && g[k]) list.push([g[k], `${g.title}, ${g.kind}`])
    }
  }
  return list
}

export function pages() {
  const work = read('content/work', '/work').sort((a, b) => Number(a.order) - Number(b.order))
  const posts = read('content/writing', '/writing').sort((a, b) => b.date.localeCompare(a.date))
  const today = new Date().toISOString().slice(0, 10)
  return {
    work, posts,
    all: [
      { path: '/', title: 'Nobel Dahal', kind: 'Full-stack developer in Nepal', og: 'default', lastmod: today, priority: '1.0' },
      { path: '/work/', title: 'Work', kind: 'Everything since 2017', lastmod: today, priority: '0.9' },
      { path: '/cv', title: 'Résumé', kind: 'Full-stack developer · Kathmandu', lastmod: today, priority: '0.8' },
      { path: '/hire', title: 'Hire a full-stack developer in Nepal', kind: 'Freelance · Kathmandu', lastmod: today, priority: '0.9' },
      { path: '/about', title: 'About', kind: 'Experience, open source, certifications', lastmod: today, priority: '0.8' },
      { path: '/writing/', title: 'Writing', kind: 'Case studies and notes', lastmod: posts[0]?.lastmod || today, priority: '0.7' },
      ...work.map((w) => ({ ...w, kind: `${w.kind} · ${w.years}`, priority: '0.9' })),
      ...posts.map((p) => ({ ...p, kind: 'Writing', priority: '0.7' })),
    ],
  }
}
