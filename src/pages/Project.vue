<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import DryRun from '../components/DryRun.vue'
import NotFound from './NotFound.vue'
import { work } from '../lib/content.js'
import { site, crumbs } from '../lib/site.js'
import { useSeo } from '../lib/seo.js'

const route = useRoute()
const idx = computed(() => work.findIndex((w) => w.slug === route.params.slug))
const p = computed(() => work[idx.value])
const next = computed(() => work[(idx.value + 1) % work.length])

if (p.value) useSeo({
  title: `${p.value.title}, a ${p.value.kind} case study`,
  description: p.value.summary,
  path: p.value.url,
  ld: [{
    '@context': 'https://schema.org', '@type': 'CreativeWork', name: p.value.title,
    description: p.value.summary, url: site.url + p.value.url, image: `${site.url}/og${p.value.url}.png`,
    keywords: p.value.stack.join(', '), genre: p.value.kind,
    creator: { '@id': `${site.url}/#person` },
  }, crumbs([{ name: 'Work', path: '/work' }, { name: p.value.title, path: p.value.url }])],
})
</script>

<template>
  <NotFound v-if="!p" />
  <article v-else :key="p.slug">
    <header class="hero wrap">
      <div class="hero__copy">
        <RouterLink to="/work" class="back"><AppIcon name="back" /> All work</RouterLink>
        <p class="eyebrow">{{ p.kind }} · {{ p.years }}</p>
        <h1 class="display">{{ p.title }}</h1>
        <p class="lede">{{ p.summary }}</p>
        <ul class="checks">
          <li v-for="f in p.facts" :key="f"><AppIcon name="check" /> {{ f }}</li>
        </ul>
        <dl class="meta">
          <div><dt>My part</dt><dd>{{ p.role }}</dd></div>
          <div v-if="p.link"><dt>See it</dt><dd><a :href="p.link" rel="noopener">{{ p.linkLabel }}</a></dd></div>
        </dl>
      </div>
      <DryRun :project="p" />
    </header>

    <figure v-if="p.video" class="film wrap">
      <div class="film__frame">
        <iframe :src="`https://www.youtube-nocookie.com/embed/${p.video}?autoplay=1&mute=1&controls=0&loop=1&playlist=${p.video}&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3`"
          allow="autoplay; encrypted-media" tabindex="-1" :title="`${p.title} demo`" loading="lazy" />
      </div>
      <figcaption>The real thing, recorded in 2021. <a :href="`https://www.youtube.com/watch?v=${p.video}`" rel="noopener">Watch with sound</a></figcaption>
    </figure>

    <section class="body wrap">
      <div class="prose" v-html="p.html" />
      <aside class="stack">
        <h2 class="stack__title">Built with</h2>
        <ul class="chips"><li v-for="s in p.stack" :key="s" class="chip">{{ s }}</li></ul>
      </aside>
    </section>

    <nav class="next wrap" aria-label="Next project">
      <RouterLink :to="next.url" class="next__link">
        <span class="next__label">Next project</span>
        <span class="next__name">{{ next.title }} <AppIcon name="arrow" :size="20" /></span>
      </RouterLink>
    </nav>
  </article>
</template>

<style scoped>
.hero { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 480px); gap: 72px; align-items: start; padding-block: 56px 72px; }
.hero__copy { display: grid; gap: 20px; }
.back { display: inline-flex; align-items: center; gap: 6px; width: fit-content; color: var(--ui-ink-faint); text-decoration: none; font-size: 14px; }
.back:hover { color: var(--ui-ink); }
.lede { max-width: 46ch; }
.meta { display: flex; flex-wrap: wrap; gap: 16px 48px; margin-top: 8px; padding-top: 20px; border-top: 1px solid var(--ui-border); }
.meta dt { font-size: 13px; color: var(--ui-ink-faint); }
.meta dd { font-weight: 600; }
.body { display: grid; grid-template-columns: minmax(0, 1fr) 280px; gap: 72px; padding-block: 64px; border-top: 1px solid var(--ui-border); }
.stack { display: grid; gap: 12px; align-content: start; position: sticky; top: 96px; }
.stack__title { font-size: 13px; font-weight: 600; color: var(--ui-ink-faint); }
.film { display: grid; gap: 12px; padding-bottom: 64px; }
.film__frame { position: relative; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 14px; border: 1px solid var(--ui-border); background: #000; }
.film__frame iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; pointer-events: none; transform: scale(1.2); }
.film figcaption { font-size: 14px; color: var(--ui-ink-faint); }
.next { border-top: 1px solid var(--ui-border); }
.next__link { display: grid; gap: 4px; padding-block: 40px 56px; text-decoration: none; }
.next__label { font-size: 14px; color: var(--ui-ink-faint); }
.next__name { display: inline-flex; align-items: center; gap: 10px; font-size: 32px; font-weight: 700; letter-spacing: -0.02em; }
.next__link:hover .next__name :deep(svg) { transform: translateX(4px); }
.next__name :deep(svg) { transition: transform var(--ui-duration) var(--ui-ease); }
@media (max-width: 991.98px) {
  .hero, .body { grid-template-columns: minmax(0, 1fr); gap: 40px; }
  .stack { position: static; }
}
@media (max-width: 767.98px) { .hero { padding-block: 32px 48px; } .body { padding-block: 40px; } }
</style>
