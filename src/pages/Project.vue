<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import DryRun from '../components/DryRun.vue'
import Showcase from '../components/Showcase.vue'
import NotFound from './NotFound.vue'
import { work, writing, formatDate } from '../lib/content.js'
import { site, crumbs } from '../lib/site.js'
import { useSeo } from '../lib/seo.js'

const route = useRoute()
const idx = computed(() => work.findIndex((w) => w.slug === route.params.slug))
const p = computed(() => work[idx.value])
const next = computed(() => work[(idx.value + 1) % work.length])
const related = computed(() => writing.filter((w) => w.project === p.value?.slug))

if (p.value) useSeo({
  title: `${p.value.title}, a ${p.value.kind} case study`,
  description: p.value.seo || p.value.summary,
  path: p.value.url,
  ld: [{
    '@context': 'https://schema.org',
    '@type': p.value.schema === 'SoftwareApplication' ? 'SoftwareApplication' : 'CreativeWork',
    name: p.value.title, description: p.value.summary, url: site.url + p.value.url,
    image: [p.value.cover, ...p.value.shots.map((s) => s.src)].filter(Boolean).map((i) => site.url + i),
    keywords: p.value.stack.join(', '), genre: p.value.kind,
    ...(p.value.schema === 'SoftwareApplication' ? { applicationCategory: 'BusinessApplication', operatingSystem: 'Web, Android', inLanguage: ['en', 'ne', 'ja'] } : {}),
    ...(p.value.link && !p.value.link.includes('github.com') ? { sameAs: p.value.link } : {}),
    ...(p.value.loop ? { video: { '@type': 'VideoObject', name: `${p.value.title} demo`, description: p.value.summary, contentUrl: `${site.url}${p.value.loop}.mp4`, thumbnailUrl: `${site.url}${p.value.loop}-poster.jpg`, uploadDate: '2021-05-25', ...(p.value.youtube ? { embedUrl: `https://www.youtube.com/embed/${p.value.youtube}` } : {}) } } : {}),
    creator: { '@id': `${site.url}/#person` }, author: { '@id': `${site.url}/#person` },
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

    <figure v-if="p.loop" class="film wrap">
      <div class="film__frame">
        <video :poster="`${p.loop}-poster.jpg`" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback preload="auto" aria-label="Silent demo recording">
          <source :src="`${p.loop}.webm`" type="video/webm" />
          <source :src="`${p.loop}.mp4`" type="video/mp4" />
        </video>
      </div>
      <figcaption>Recorded in 2021, shown at 1.5× without sound. <a v-if="p.youtube" :href="`https://www.youtube.com/watch?v=${p.youtube}`" rel="noopener">Watch the full demo</a></figcaption>
    </figure>

    <figure v-if="!p.loop && p.cover" class="hero-shot wrap">
      <div class="browser">
        <div class="browser__bar" aria-hidden="true"><span class="dots"><i /><i /><i /></span><span class="browser__url mono">{{ p.linkLabel }}</span></div>
        <img :src="p.cover" :alt="`${p.title}, the live product`" fetchpriority="high" decoding="async" width="1440" height="900" />
      </div>
    </figure>

    <Showcase v-if="p.shots.length" :shots="p.shots" :title="p.title" />

    <section class="body wrap">
      <div class="prose" v-html="p.html" />
      <aside class="stack">
        <h2 class="stack__title">Built with</h2>
        <ul class="chips"><li v-for="s in p.stack" :key="s" class="chip">{{ s }}</li></ul>
      </aside>
    </section>

    <section v-if="related.length" class="related wrap" aria-labelledby="related-title">
      <h2 id="related-title" class="related__title">Writing about {{ p.title }}</h2>
      <ul>
        <li v-for="r in related" :key="r.slug">
          <RouterLink :to="r.url" class="related__item">
            <span class="related__name">{{ r.title }}</span>
            <span class="related__sum">{{ r.summary }}</span>
            <time :datetime="r.date" class="related__date">{{ formatDate(r.date) }}</time>
          </RouterLink>
        </li>
      </ul>
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
.hero-shot { padding-bottom: 56px; }
.browser { border: 1px solid var(--ui-border); border-radius: 14px; overflow: hidden; background: var(--ui-surface);
  box-shadow: 0 1px 2px rgb(0 0 0 / .04), 0 40px 80px -40px rgb(0 0 0 / .25); }
.browser__bar { display: flex; align-items: center; gap: 16px; height: 40px; padding: 0 16px; border-bottom: 1px solid var(--ui-border); background: var(--ui-surface-sunken); }
.browser__bar .dots { display: flex; gap: 6px; }
.browser__bar .dots i { width: 10px; height: 10px; border-radius: 50%; background: var(--ui-border); }
.browser__url { flex: 1; text-align: center; font-size: 12px; color: var(--ui-ink-faint); margin-right: 46px; }
.browser img { display: block; width: 100%; height: auto; }
.film { display: grid; gap: 12px; padding-bottom: 64px; }
.film__frame { position: relative; aspect-ratio: 1920 / 930; overflow: hidden; border-radius: 14px; border: 1px solid var(--ui-border); background: #000; }
.film__frame video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; pointer-events: none; }
.film figcaption { font-size: 14px; color: var(--ui-ink-faint); }
.related { padding-block: 0 56px; display: grid; gap: 16px; }
.related__title { font-size: 14px; font-weight: 600; color: var(--ui-ink-faint); }
.related ul { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
.related__item { display: grid; gap: 6px; height: 100%; padding: 20px; border: 1px solid var(--ui-border); border-radius: 12px; text-decoration: none; transition: border-color var(--ui-duration) var(--ui-ease); }
.related__item:hover { border-color: var(--ui-ink); }
.related__name { font-weight: 700; font-size: 17px; }
.related__sum { color: var(--ui-ink-soft); font-size: 15px; }
.related__date { color: var(--ui-ink-faint); font-size: 13px; }
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
