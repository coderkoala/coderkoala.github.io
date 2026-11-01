import { marked } from 'marked'

// Tiny front-matter reader: `key: value`, and lists as `key:` then `  - item`.
function parse(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { data: {}, body: raw }
  const data = {}
  let list = null
  for (const line of m[1].split(/\r?\n/)) {
    const item = line.match(/^\s+-\s+(.*)$/)
    if (item && list) { data[list].push(item[1].trim()); continue }
    const kv = line.match(/^([\w-]+):\s*(.*)$/)
    if (!kv) continue
    const [, k, v] = kv
    if (v === '') { data[k] = []; list = k } else {
      list = null
      data[k] = v === 'true' ? true : v === 'false' ? false : v
    }
  }
  return { data, body: m[2] }
}

function load(files, dir) {
  return Object.entries(files)
    .map(([path, raw]) => {
      const slug = path.split('/').pop().replace(/\.md$/, '')
      const { data, body } = parse(raw)
      return { ...data, slug, url: `/${dir}/${slug}`, html: marked.parse(body) }
    })
    .filter((e) => !e.draft || import.meta.env.DEV)
}

const workFiles = import.meta.glob('/content/work/*.md', { query: '?raw', import: 'default', eager: true })
const writingFiles = import.meta.glob('/content/writing/*.md', { query: '?raw', import: 'default', eager: true })

export const work = load(workFiles, 'work')
  .map((w) => ({
    ...w,
    stack: String(w.stack || '').split(',').map((s) => s.trim()).filter(Boolean),
    steps: (w.steps || []).map((s) => {
      const [title, text] = s.split('::').map((x) => x.trim())
      return { title, text }
    }),
  }))
  .sort((a, b) => Number(a.order) - Number(b.order))

export const writing = load(writingFiles, 'writing').sort((a, b) => String(b.date).localeCompare(String(a.date)))

export function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

const galleryFiles = import.meta.glob('/content/gallery/*.md', { query: '?raw', import: 'default', eager: true })
const str = (v) => (typeof v === 'string' ? v : '')
export const gallery = load(galleryFiles, 'gallery')
  .map((g) => ({ ...g, link: str(g.link), image: str(g.image), logo: str(g.logo), video: str(g.video), cover: str(g.cover), year: String(g.year) }))
  .sort((a, b) => a.slug.localeCompare(b.slug))
export const galleryTags = ['All', ...new Set(gallery.map((g) => g.tag))]
