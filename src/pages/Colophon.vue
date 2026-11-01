<script setup>
import { useSeo } from '../lib/seo.js'
import { crumbs } from '../lib/site.js'
useSeo({ title: 'How this site is built', description: 'The engineering behind nobeldahal.com.np: prerendered Vue, progressive images, accessibility, instant navigation and a weekly rebuild.', path: '/colophon', ld: crumbs([{ name: 'Colophon', path: '/colophon' }]) })
const rows = [
  ['Rendering', 'Vue 3 and Vite, prerendered to plain HTML at build time (vite-ssg). Search engines and slow phones get a finished page; Vue takes over afterwards.'],
  ['Speed', 'Critical CSS is inlined, only the two fonts the first screen needs are preloaded, and every page’s code is fetched in the background once the browser is idle, or the moment you hover a link.'],
  ['Images', 'Every heavy image ships as 480, 960 and 1600 px WebP plus a ~190-byte blurred placeholder inlined in the page. You see its shape at once; the right size for your screen fades in when it arrives.'],
  ['Backdrop', 'A photo of me on a ridge in Nepal, traced into vector layers (about 29 KB) with drifting mist and a little parallax. Off for anyone who prefers reduced motion.'],
  ['Accessibility', 'Checked with axe against WCAG 2.2 AA on every page, light and dark. A reading panel adds text size, high contrast, reduced motion, underlined links, wider spacing and free translation into 16 languages.'],
  ['Content', 'Projects and posts are Markdown files. The résumé PDF, the Word file and /cv are generated from one data file, so they never disagree.'],
  ['Search', 'Per-page titles and descriptions, structured data (Person, CreativeWork, BlogPosting, FAQ), an image sitemap, RSS, llms.txt and preview images rendered at build time.'],
  ['Hosting', 'GitHub Pages. A workflow rebuilds the site on every change and every Monday morning, which keeps the “Updated” date in the footer honest.'],
  ['Type and colour', 'IBM Plex Sans and Mono, in black and white. The rules come from the design language I wrote for Kaede.'],
]
</script>

<template>
  <article class="wrap page">
    <header class="head">
      <h1 class="display">How this site is built</h1>
      <p class="lede">The site is its own small case study. No frameworks you’d need a meeting to explain.</p>
    </header>
    <dl class="rows">
      <div v-for="[k, v] in rows" :key="k" class="row"><dt>{{ k }}</dt><dd>{{ v }}</dd></div>
    </dl>
    <p class="note">Source: <a href="https://github.com/coderkoala/coderkoala.github.io" rel="noopener">coderkoala/coderkoala.github.io</a>.</p>
  </article>
</template>

<style scoped>
.page { padding-block: 56px 96px; display: grid; gap: 40px; max-width: 900px; }
.head { display: grid; gap: 16px; }
.rows { border-top: 1px solid var(--ui-border); }
.row { display: grid; grid-template-columns: 160px 1fr; gap: 24px; padding: 18px 0; border-bottom: 1px solid var(--ui-border); }
.row dt { font-weight: 700; }
.row dd { color: var(--ui-ink-soft); }
.note { color: var(--ui-ink-faint); font-size: 14px; }
@media (max-width: 767.98px) { .row { grid-template-columns: 1fr; gap: 4px; } }
</style>
