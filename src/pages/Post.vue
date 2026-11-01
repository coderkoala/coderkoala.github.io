<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import NotFound from './NotFound.vue'
import { writing, work, formatDate } from '../lib/content.js'
import { site, crumbs } from '../lib/site.js'
import { useSeo } from '../lib/seo.js'

const route = useRoute()
const p = computed(() => writing.find((w) => w.slug === route.params.slug))
const proj = computed(() => work.find((w) => w.slug === p.value?.project))
const idx = computed(() => writing.findIndex((w) => w.slug === route.params.slug))
const newer = computed(() => writing[idx.value - 1])
const older = computed(() => writing[idx.value + 1])

// Reading progress, the section in view, and copy buttons on code blocks.
const progress = ref(0)
const current = ref('')
const body = ref(null)
function onScroll() {
  const el = body.value; if (!el) return
  const r = el.getBoundingClientRect()
  progress.value = Math.min(1, Math.max(0, (innerHeight * 0.3 - r.top) / (r.height - innerHeight * 0.4)))
  const hs = [...el.querySelectorAll('h2[id]')]
  current.value = (hs.filter((h) => h.getBoundingClientRect().top < 140).pop() || hs[0])?.id || ''
}
function addCopyButtons() {
  body.value?.querySelectorAll('pre').forEach((pre) => {
    if (pre.querySelector('.codecopy')) return
    const b = document.createElement('button')
    b.className = 'codecopy'; b.type = 'button'; b.textContent = 'Copy'; b.setAttribute('aria-label', 'Copy code')
    b.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(pre.innerText.replace(/\nCopy(ied)?$/, '')); b.textContent = 'Copied'; setTimeout(() => { b.textContent = 'Copy' }, 1600) } catch (e) {}
    })
    pre.appendChild(b)
  })
}
onMounted(() => { addCopyButtons(); onScroll(); addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => removeEventListener('scroll', onScroll))
watch(() => route.params.slug, () => nextTick(() => { addCopyButtons(); onScroll() }))
const words = computed(() => (p.value?.html || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length)
if (p.value) useSeo({
  title: p.value.seoTitle || p.value.title, description: p.value.seo || p.value.summary, path: p.value.url, type: 'article', published: p.value.date,
  ld: [{
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.value.title,
    description: p.value.summary, datePublished: p.value.date, dateModified: p.value.updated || p.value.date,
    wordCount: words.value, inLanguage: 'en', timeRequired: `PT${Math.max(1, Math.round(words.value / 220))}M`,
    ...(proj.value ? { about: { '@type': 'CreativeWork', name: proj.value.title, url: site.url + proj.value.url } } : {}),
    url: site.url + p.value.url, mainEntityOfPage: site.url + p.value.url, image: `${site.url}/og${p.value.url}.png`,
    author: { '@id': `${site.url}/#person`, name: site.name, url: site.url },
  }, crumbs([{ name: 'Writing', path: '/writing/' }, { name: p.value.title, path: p.value.url }])],
})
</script>

<template>
  <NotFound v-if="!p" />
  <article v-else class="wrap page">
    <header class="head">
      <RouterLink to="/writing/" class="back"><AppIcon name="back" /> Writing</RouterLink>
      <h1 class="display">{{ p.title }}</h1>
      <p class="lede">{{ p.summary }}</p>
      <p class="date"><time :datetime="p.date">{{ formatDate(p.date) }}</time> · {{ Math.max(1, Math.round(words / 220)) }} min read</p>
    </header>
    <div class="progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true"></div>
    <nav v-if="p.toc.length >= 3" class="toc" aria-label="On this page">
      <p class="toc__t">On this page</p>
      <ol><li v-for="t in p.toc" :key="t.id"><a :href="`#${t.id}`" :class="{ on: current === t.id }">{{ t.text }}</a></li></ol>
    </nav>
    <div ref="body" class="prose" v-html="p.html" />
    <RouterLink v-if="proj" :to="proj.url" class="proj">
      <span class="proj__k">Case study</span>
      <span class="proj__n">{{ proj.title }} <AppIcon name="arrow" /></span>
    </RouterLink>
    <nav class="pn" aria-label="More writing">
      <RouterLink v-if="older" :to="older.url" class="pn__a"><span class="pn__k">Older</span><span class="pn__t">{{ older.title }}</span></RouterLink>
      <RouterLink v-if="newer" :to="newer.url" class="pn__a pn__a--r"><span class="pn__k">Newer</span><span class="pn__t">{{ newer.title }}</span></RouterLink>
    </nav>
  </article>
</template>

<style scoped>
.page { padding-block: 56px 96px; display: grid; gap: 48px; max-width: calc(68ch + 80px); position: relative; }
.progress { position: fixed; top: 64px; left: 0; right: 0; height: 2px; background: var(--ui-ink); transform-origin: 0 50%; z-index: 4; pointer-events: none; }
.toc { position: fixed; top: 120px; right: max(24px, calc((100vw - 1440px) / 2 + 24px)); width: 200px; display: grid; gap: 10px; }
.toc__t { font-size: 12px; font-weight: 600; color: var(--ui-ink-faint); }
.toc ol { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; border-left: 1px solid var(--ui-border); }
.toc a { display: block; padding-left: 12px; margin-left: -1px; border-left: 1px solid transparent; font-size: 13px; color: var(--ui-ink-faint); text-decoration: none; line-height: 1.4; }
.toc a:hover { color: var(--ui-ink); }
.toc a.on { color: var(--ui-ink); border-left-color: var(--ui-ink); font-weight: 600; }
@media (max-width: 1399.98px) { .toc { display: none; } }
.pn { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.pn__a { display: grid; gap: 4px; padding: 16px 18px; border: 1px solid var(--ui-border); border-radius: 12px; text-decoration: none; }
.pn__a:hover { border-color: var(--ui-ink); }
.pn__a--r { grid-column: 2; text-align: right; }
.pn__k { font-size: 12px; color: var(--ui-ink-faint); }
.pn__t { font-weight: 700; }
@media (max-width: 767.98px) { .pn { grid-template-columns: 1fr; } .pn__a--r { grid-column: 1; } }
.head { display: grid; gap: 16px; }
.head .display { font-size: clamp(32px, 4vw, 48px); }
.back { display: inline-flex; align-items: center; gap: 6px; width: fit-content; color: var(--ui-ink-faint); text-decoration: none; font-size: 14px; }
.back:hover { color: var(--ui-ink); }
.proj { display: grid; gap: 4px; padding-top: 32px; border-top: 1px solid var(--ui-border); text-decoration: none; }
.proj__k { font-size: 14px; color: var(--ui-ink-faint); }
.proj__n { display: inline-flex; align-items: center; gap: 8px; font-size: 24px; font-weight: 700; }
.date { color: var(--ui-ink-faint); font-size: 14px; }
</style>
