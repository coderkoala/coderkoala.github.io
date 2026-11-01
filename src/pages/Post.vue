<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import NotFound from './NotFound.vue'
import { writing, work, formatDate } from '../lib/content.js'
import { site, crumbs } from '../lib/site.js'
import { useSeo } from '../lib/seo.js'

const route = useRoute()
const p = computed(() => writing.find((w) => w.slug === route.params.slug))
const proj = computed(() => work.find((w) => w.slug === p.value?.project))
const words = computed(() => (p.value?.html || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length)
if (p.value) useSeo({
  title: p.value.title, description: p.value.seo || p.value.summary, path: p.value.url, type: 'article', published: p.value.date,
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
    <div class="prose" v-html="p.html" />
    <RouterLink v-if="proj" :to="proj.url" class="proj">
      <span class="proj__k">Case study</span>
      <span class="proj__n">{{ proj.title }} <AppIcon name="arrow" /></span>
    </RouterLink>
  </article>
</template>

<style scoped>
.page { padding-block: 56px 96px; display: grid; gap: 48px; max-width: calc(68ch + 80px); }
.head { display: grid; gap: 16px; }
.head .display { font-size: clamp(32px, 4vw, 48px); }
.back { display: inline-flex; align-items: center; gap: 6px; width: fit-content; color: var(--ui-ink-faint); text-decoration: none; font-size: 14px; }
.back:hover { color: var(--ui-ink); }
.proj { display: grid; gap: 4px; padding-top: 32px; border-top: 1px solid var(--ui-border); text-decoration: none; }
.proj__k { font-size: 14px; color: var(--ui-ink-faint); }
.proj__n { display: inline-flex; align-items: center; gap: 8px; font-size: 24px; font-weight: 700; }
.date { color: var(--ui-ink-faint); font-size: 14px; }
</style>
