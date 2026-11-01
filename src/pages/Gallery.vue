<script setup>
import { ref, computed } from 'vue'
import AppIcon from '../components/AppIcon.vue'
import SmartImg from '../components/SmartImg.vue'
import { gallery, galleryTags } from '../lib/content.js'
import { useSeo } from '../lib/seo.js'
import { site, crumbs } from '../lib/site.js'

useSeo({
  title: 'Projects and portfolio',
  description: 'Everything Nobel Dahal has built since 2017: ERPs, CRMs, government and business websites, WordPress plugins and games.',
  path: '/work/',
  ld: [{
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Work by Nobel Dahal', url: `${site.url}/work/`,
    mainEntity: { '@type': 'ItemList', itemListElement: gallery.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.title, ...(g.link ? { url: g.link.startsWith('/') ? site.url + g.link : g.link } : {}) })) },
  }, crumbs([{ name: 'Work', path: '/work/' }])],
})
const tag = ref('All')
const shown = computed(() => tag.value === 'All' ? gallery : gallery.filter((g) => g.tag === tag.value))
const isInternal = (l) => l && l.startsWith('/')

// Tiles without a link open their screenshot full size, so every tile is clickable.
const viewing = ref(null)
const dlg = ref(null)
function view(g) { viewing.value = g; dlg.value?.showModal() }
function close() { dlg.value?.close() }
</script>

<template>
  <section class="wrap page">
    <header class="head">
      <h1 class="display">Work</h1>
      <p class="lede">Everything since 2017. The first three have the full story.</p>
      <div class="filters" role="group" aria-label="Filter work">
        <button v-for="t in galleryTags" :key="t" type="button" class="filter" :aria-pressed="tag === t" @click="tag = t">{{ t }}</button>
      </div>
    </header>

    <TransitionGroup tag="ul" name="g" class="grid">
      <li v-for="g in shown" :key="g.slug" :class="['item', { 'item--feature': g.featured }]">
        <component :is="!g.link ? 'div' : isInternal(g.link) ? 'RouterLink' : 'a'"
          :role="!g.link ? 'button' : undefined" :tabindex="!g.link ? 0 : undefined" :aria-label="!g.link ? `View ${g.title} screenshot` : undefined"
          @click="!g.link && view(g)" @keydown.enter.prevent="!g.link && view(g)" @keydown.space.prevent="!g.link && view(g)"
          :to="isInternal(g.link) ? g.link : undefined" :href="g.link && !isInternal(g.link) ? g.link : undefined"
          :rel="g.link && !isInternal(g.link) ? 'noopener' : undefined" class="card">
          <div class="cover">
            <SmartImg v-if="g.image" :src="g.image" :alt="`${g.title}, ${g.kind}`" sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 360px" />
            <video v-if="g.loop" class="cover__video" :poster="g.image" autoplay muted loop playsinline disablepictureinpicture preload="metadata" aria-hidden="true" tabindex="-1">
              <source :src="`${g.loop}.mp4`" type="video/mp4" />
            </video>
            <div v-else-if="g.logo" class="cover__logo"><img :src="g.logo" :alt="`${g.title} logo`" loading="lazy" /></div>
            <div v-else-if="g.cover === 'pixel'" class="cover__pixel" aria-hidden="true">
              <span class="cover__pixel-title">{{ g.title.toUpperCase() }}</span>
              <span class="cover__pixel-sub">PRESS START</span>
            </div>
            <div v-else-if="!g.image" class="cover__type" aria-hidden="true">
              <span class="cover__mono mono">{{ g.year }}</span>
              <span class="cover__word">{{ g.title }}</span>
            </div>
          </div>
          <div class="cap">
            <h2 class="cap__title">{{ g.title }}<AppIcon v-if="g.link" name="arrow" /></h2>
            <p class="cap__meta">{{ g.kind }} · {{ g.year }}</p>
            <p class="cap__sum">{{ g.summary }}</p>
          </div>
        </component>
      </li>
    </TransitionGroup>

    <dialog ref="dlg" class="lb" aria-label="Project screenshot" @click.self="close" @close="viewing = null">
      <figure v-if="viewing">
        <SmartImg :src="viewing.image" :alt="`${viewing.title}, ${viewing.kind}`" eager sizes="94vw" fit="contain" position="center" />
        <figcaption><strong>{{ viewing.title }}</strong> · {{ viewing.kind }} · {{ viewing.year }}<br />{{ viewing.summary }}</figcaption>
      </figure>
      <button type="button" class="lb__x" @click="close" aria-label="Close">×</button>
    </dialog>
  </section>
</template>

<style scoped>
.page { padding-block: 64px 96px; display: grid; gap: 48px; }
.head { display: grid; gap: 16px; }
.filters { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.filter {
  height: 36px; padding: 0 16px; border-radius: 999px; border: 1px solid var(--ui-border);
  background: transparent; color: var(--ui-ink-soft); font: 600 14px var(--ui-font-sans); cursor: pointer;
  transition: background var(--ui-duration) var(--ui-ease), color var(--ui-duration) var(--ui-ease);
}
.filter:hover { color: var(--ui-ink); background: var(--ui-hover); }
.filter[aria-pressed='true'] { background: var(--ui-ink); border-color: var(--ui-ink); color: var(--ui-surface); }

.grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 48px 32px; }
.card { display: grid; gap: 16px; text-decoration: none; color: inherit; cursor: pointer; width: 100%; padding: 0; border: 0; background: none; font: inherit; text-align: left; }
.lb { border: 0; padding: 0; background: transparent; max-width: min(1200px, 94vw); width: 94vw; overflow: visible; }
.lb::backdrop { background: rgb(10 10 10 / .82); backdrop-filter: blur(4px); }
.lb figure { display: grid; gap: 14px; }
.lb :deep(.si) { max-height: 78vh; border-radius: 10px; background-color: transparent; }
.lb figcaption { color: #e6e6e3; font-size: 14px; text-align: center; line-height: 1.5; }
.lb__x { position: fixed; top: 16px; right: 20px; width: 40px; height: 40px; border-radius: 50%; border: 0; background: #f5f5f4; color: #141414; font-size: 24px; line-height: 1; cursor: pointer; }
.cover {
  aspect-ratio: 16 / 10; overflow: hidden; border-radius: 10px;
  border: 1px solid var(--ui-border); background: var(--ui-surface-sunken);
}
.cover :deep(img) {
  width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;
  filter: grayscale(1) contrast(1.05); transform: scale(1.001);
  transition: filter 400ms var(--ui-ease), transform 600ms var(--ui-ease);
}
a.card:hover .cover img, .card:hover .cover :deep(img) { filter: none; transform: scale(1.03); }
.cover { position: relative; }
.cover__video {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: top; pointer-events: none;
  filter: grayscale(1); transition: filter 400ms var(--ui-ease);
}
.card:hover .cover__video { filter: none; }
.cover__logo { height: 100%; display: grid; place-items: center; background: #fff; }
.cover__logo img { width: 38%; height: auto; object-fit: contain; filter: grayscale(1); transition: filter 400ms var(--ui-ease), transform 600ms var(--ui-ease); }
.card:hover .cover__logo img { filter: none; transform: scale(1.04); }
.cover__pixel {
  height: 100%; display: grid; place-content: center; gap: 18px; text-align: center; background: #111;
  background-image: linear-gradient(#1c1c1c 1px, transparent 1px), linear-gradient(90deg, #1c1c1c 1px, transparent 1px);
  background-size: 8px 8px; color: #f5f5f4; font-family: var(--ui-font-mono); image-rendering: pixelated;
}
.cover__pixel-title { font-size: 26px; font-weight: 700; letter-spacing: .08em; text-shadow: 3px 3px 0 #555; }
.cover__pixel-sub { font-size: 12px; letter-spacing: .3em; animation: blink 1.2s steps(2, start) infinite; }
@keyframes blink { to { visibility: hidden; } }
.cover__type { height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 20px 22px; }
.cover__mono { font-size: 12px; color: var(--ui-ink-faint); }
.cover__word { font-size: clamp(24px, 2.4vw, 34px); font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; transition: transform 400ms var(--ui-ease); }
.card:hover .cover__word { transform: translateX(4px); }
.item--feature .cover__word { color: var(--ui-surface); }
.item--feature .cover__mono { color: color-mix(in srgb, var(--ui-surface) 60%, transparent); }

.cap { display: grid; gap: 4px; }
.cap__title { display: flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; }
.cap__title :deep(svg) { transition: transform var(--ui-duration) var(--ui-ease); }
.card:hover .cap__title :deep(svg) { transform: translateX(3px); }
.cap__meta { font-size: 13px; color: var(--ui-ink-faint); }
.cap__sum { color: var(--ui-ink-soft); font-size: 15px; margin-top: 4px; }

.g-move, .g-enter-active, .g-leave-active { transition: opacity 200ms var(--ui-ease), transform 300ms var(--ui-ease); }
.g-enter-from, .g-leave-to { opacity: 0; transform: translateY(6px); }
.g-leave-active { position: absolute; visibility: hidden; }

@media (hover: none) { .cover :deep(img) { filter: none; } }
@media (max-width: 991.98px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 767.98px) { .page { padding-block: 40px 64px; } .grid { grid-template-columns: 1fr; gap: 40px; } }
</style>
