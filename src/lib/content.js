import { marked } from 'marked'
import images from './images.json'

// Headings get stable ids and a hover anchor, so any section can be linked to.
const slugify = (t) => t.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
marked.use({
  renderer: {
    // Post images are progressive too: blurred placeholder first, right-sized WebP on top.
    image({ href, text }) {
      const m = images[href]
      const alt = (text || '').replace(/"/g, '&quot;')
      if (!m) return `<img src="${href}" alt="${alt}" loading="lazy" decoding="async">`
      const srcset = m.variants.map((v) => `${v.src} ${v.w}w`).join(', ')
      const src = m.variants[m.variants.length - 1].src
      return `<span class="psi" style="--lqip:url(${m.lqip});aspect-ratio:${m.w} / ${m.h}"><img src="${src}" srcset="${srcset}" sizes="(max-width: 760px) 100vw, 720px" alt="${alt}" width="${m.w}" height="${m.h}" loading="lazy" decoding="async"></span>`
    },
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens)
      if (depth > 3) return `<h${depth}>${text}</h${depth}>`
      const id = slugify(text)
      return `<h${depth} id="${id}"><a class="anchor" href="#${id}" aria-label="Link to this section">#</a>${text}</h${depth}>`
    },
  },
})

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
      const html = marked.parse(body)
      const toc = [...html.matchAll(/<h2 id="([^"]+)">.*?<\/a>(.*?)<\/h2>/g)].map((m) => ({ id: m[1], text: m[2].replace(/<[^>]+>/g, '') }))
      return { ...data, slug, url: `/${dir}/${slug}`, html, toc }
    })
    .filter((e) => !e.draft || import.meta.env.DEV)
}

const workFiles = import.meta.glob('/content/work/*.md', { query: '?raw', import: 'default', eager: true })
const writingFiles = import.meta.glob('/content/writing/*.md', { query: '?raw', import: 'default', eager: true })

export const work = load(workFiles, 'work')
  .map((w) => ({
    ...w,
    stack: String(w.stack || '').split(',').map((s) => s.trim()).filter(Boolean),
    shots: (Array.isArray(w.shots) ? w.shots : []).map((s) => {
      const [src, caption, span = '3x2'] = s.split('::').map((x) => x.trim())
      const [cols, rows] = span.split('x').map(Number)
      return { src, caption, cols, rows }
    }),
    engineering: (Array.isArray(w.engineering) ? w.engineering : []).map((s) => {
      const [label, text, to] = s.split('::').map((x) => x.trim())
      return { label, text, to }
    }),
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
  .map((g) => ({ ...g, link: str(g.link), image: str(g.image), logo: str(g.logo), loop: str(g.loop), cover: str(g.cover), year: String(g.year) }))
  .sort((a, b) => a.slug.localeCompare(b.slug))
export const galleryTags = ['All', ...new Set(gallery.map((g) => g.tag))]
