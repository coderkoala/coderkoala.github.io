import { useHead } from '@unhead/vue'
import { site } from './site.js'

// One call per page: title, description, canonical, Open Graph, Twitter, JSON-LD.
export function useSeo({ title, description, path = '/', type = 'website', image, ld = [], published, noindex }) {
  const full = title ? `${title} · ${site.name}` : `${site.name} · Freelance software engineer in Kathmandu, Nepal`
  const url = site.url + (path === '/' ? '/' : path)
  const og = site.url + (image || `/og${path === '/' ? '/default' : path}.png`)
  const graphs = Array.isArray(ld) ? ld : [ld]
  useHead({
    title: full,
    htmlAttrs: { lang: 'en' },
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex' : 'index, follow, max-image-preview:large' },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: site.name },
      { property: 'og:locale', content: 'en_GB' },
      { property: 'og:title', content: full },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: og },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: full },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: full },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: og },
      ...(published ? [{ property: 'article:published_time', content: published }, { property: 'article:author', content: site.url }] : []),
    ],
    script: graphs.filter(Boolean).map((g) => ({ type: 'application/ld+json', innerHTML: JSON.stringify(g) })),
  })
}
