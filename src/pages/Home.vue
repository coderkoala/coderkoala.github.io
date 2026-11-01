<script setup>
import AppIcon from '../components/AppIcon.vue'
import { work, writing, gallery } from '../lib/content.js'
import { site, personLd, websiteLd } from '../lib/site.js'
import { openCal, loadCal } from '../lib/cal.js'
import { useSeo } from '../lib/seo.js'
import { useLang, num } from '../lib/i18n.js'
import text from '../lib/copy/home.js'

const { lang, t } = useLang()
const c = text[lang.value]
const n = (x) => num(x, lang.value)
useSeo({
  title: c.title,
  path: lang.value === 'ne' ? '/ne' : '/',
  image: '/og/default.png',
  description: c.seo,
  ld: [personLd, websiteLd],
})
</script>

<template>
  <div class="home">
    <section class="hero wrap">
      <div class="hero__copy">
        <p class="eyebrow">{{ c.eyebrow }}</p>
        <div class="hero__head">
        <h1 class="display">{{ c.h1[0] }}<span class="flare">{{ c.h1[1] }}</span>{{ c.h1[2] }}</h1>
        <p class="lede">{{ c.lede }}</p>
        </div>
        <div class="hero__act">
        <div class="hero__cta">
          <RouterLink class="btn btn--solid" :to="`/work/${work[0].slug}`">{{ c.kaede }} <AppIcon name="arrow" /></RouterLink>
          <a v-if="site.booking" class="btn" :href="site.booking" target="_blank" rel="noopener" @click.prevent="openCal()" @pointerenter.once="loadCal()" @focus.once="loadCal()"><AppIcon name="calendar" /> {{ c.book }}</a>
          <a class="btn" :href="site.cv" download><AppIcon name="download" /> {{ c.resume }}</a>
        </div>
        <ul class="checks">
          <li><AppIcon name="github" /> <a :href="site.github" rel="me" aria-label="GitHub profile: coderkoala">coderkoala</a></li>
          <li><AppIcon name="linkedin" /> <a :href="site.linkedin" rel="me" aria-label="LinkedIn profile: coderkoala">coderkoala</a></li>
          <li><AppIcon name="mail" /> <a :href="`mailto:${site.email}`">{{ site.email }}</a></li>
        </ul>
        </div>
      </div>
    </section>

    <section id="work" class="strip" aria-labelledby="work-title">
      <h2 id="work-title" class="sr-only">{{ c.workTitle }}</h2>
      <ul class="wrap strip__in">
        <li v-for="w in work" :key="w.slug">
          <RouterLink :to="w.url" class="tile" >
            <span class="tile__kind">{{ c.kinds[w.slug] || w.kind }}</span>
            <span class="tile__name">{{ w.title }} <AppIcon name="arrow" /></span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/work/" class="tile">
            <span class="tile__kind">{{ c.restKind(n(gallery.length)) }}</span>
            <span class="tile__name">{{ c.rest }} <AppIcon name="arrow" /></span>
          </RouterLink>
        </li>
        <li v-if="writing.length">
          <RouterLink to="/writing/" class="tile">
            <span class="tile__kind">{{ c.writingKind(n(writing.length)) }}</span>
            <span class="tile__name">{{ c.writing }} <AppIcon name="arrow" /></span>
          </RouterLink>
        </li>
      </ul>
      <p v-if="c.englishNote" class="wrap note">{{ c.englishNote }}</p>
    </section>
  </div>
</template>

<style scoped>
.home { display: flex; flex-direction: column; min-height: calc(100svh - 65px - 61px); }
.hero {
  flex: 1; display: grid; grid-template-columns: minmax(0, 1fr); align-items: center;
  padding-block: clamp(24px, 5vh, 64px);
}
.hero__copy, .hero__head, .hero__act { display: grid; gap: 24px; }
.flare { position: relative; white-space: nowrap; }
/* A single confident stroke under the claim: drawn once, then left alone. */
.flare::after {
  content: ''; position: absolute; left: 2%; right: -2%; bottom: .04em; height: .09em; border-radius: 1px;
  background: currentColor; transform: scaleX(0) rotate(-1.2deg); transform-origin: left;
  animation: flare 720ms cubic-bezier(.65, 0, .35, 1) 420ms forwards;
}
@keyframes flare { to { transform: scaleX(1) rotate(-1.2deg); } }
@media (prefers-reduced-motion: reduce) { .flare::after { animation: none; transform: rotate(-1.2deg); } }
.hero__copy .display { max-width: 15ch; text-wrap: balance; }
.hero__copy .lede { max-width: 44ch; }
.hero__cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.checks a { text-decoration: none; }
.checks a:hover { color: var(--ui-ink); text-decoration: underline; }

.strip { border-top: 1px solid var(--ui-border); border-bottom: 1px solid var(--ui-border); background: var(--ui-surface-sunken); }
.strip__in { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); }
.strip__in > li + li { border-left: 1px solid var(--ui-border); }
.tile { display: grid; gap: 4px; padding: 22px 24px; text-decoration: none; color: var(--ui-ink); transition: background var(--ui-duration) var(--ui-ease); height: 100%; }
.tile:hover { background: var(--ui-surface); box-shadow: inset 0 2px 0 var(--ui-ink); }
.tile__kind { font-size: 13px; color: var(--ui-ink-faint); }
.tile__name { display: inline-flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; }
.tile__name--post { font-size: 16px; font-weight: 600; }
.tile__name :deep(svg) { transition: transform var(--ui-duration) var(--ui-ease); }
.tile:hover .tile__name :deep(svg) { transform: translateX(3px); }


@media (min-width: 992px) and (max-height: 820px) {
  .hero { gap: 56px; }
  .hero__copy { gap: 18px; }
  .hero .display { font-size: clamp(36px, 4.2vw, 52px); }
  .tile { padding-block: 16px; }
}
@media (max-width: 991.98px) {
  .hero { grid-template-columns: minmax(0, 1fr); gap: 48px; }
  .strip__in { grid-auto-flow: row; grid-template-columns: 1fr 1fr; }
  .strip__in > li:nth-child(3) { border-left: 0; }
  .strip__in > li:nth-child(n+3) { border-top: 1px solid var(--ui-border); }
}
@media (max-width: 767.98px) {
  .home { min-height: 0; }
  .strip__in { grid-template-columns: 1fr; }
  .strip__in > li + li { border-left: 0; border-top: 1px solid var(--ui-border); }
  .tile { padding: 18px 0; }
  .tile:hover { background: none; box-shadow: none; }
  .hero__cta .btn { flex: 1 1 auto; }
}
</style>

<style>
.home .note { padding-block: 10px; font-size: 13px; color: var(--ui-ink-faint); }
/* ── Phone app: portrait ── */
html[data-device='mobile'] .home { min-height: 0; }
html[data-device='mobile'] .home .hero { padding-block: 28px 32px; }
html[data-device='mobile'] .home .hero__copy { gap: 18px; }
html[data-device='mobile'] .home .hero__head { display: grid; gap: 14px; }
html[data-device='mobile'] .home .hero__act { display: grid; gap: 20px; }
html[data-device='mobile'] .home .hero__cta { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 0; }
html[data-device='mobile'] .home .hero__cta .btn { padding-inline: 8px; gap: 6px; font-size: 14.5px; white-space: nowrap; }
html[data-device='mobile'] .home .hero__cta .btn--solid { grid-column: 1 / -1; height: 52px; font-size: 16px; }
html[data-device='mobile'] .home .checks { display: flex; flex-wrap: wrap; gap: 8px 18px; font-size: 14px; }
/* Work as one grouped list, app-settings style: nothing clipped, every row a full-width tap target. */
html[data-device='mobile'] .home .strip { border: 0; background: none; padding-bottom: 28px; }
html[data-device='mobile'] .home .strip__in {
  display: grid; grid-template-columns: 1fr; padding: 0; margin-inline: 20px; width: auto;
  border: 1px solid var(--ui-border); border-radius: 14px; overflow: hidden; background: var(--ui-surface-sunken);
}
html[data-device='mobile'] .home .strip__in > li { border: 0 !important; }
html[data-device='mobile'] .home .strip__in > li + li { border-top: 1px solid var(--ui-border) !important; }
html[data-device='mobile'] .home .tile { display: flex; flex-direction: row-reverse; justify-content: space-between; align-items: center; gap: 12px; min-height: 60px; padding: 12px 16px; }
html[data-device='mobile'] .home .tile__kind { font-size: 13px; text-align: right; }
html[data-device='mobile'] .home .tile__name { font-size: 16px; }
html[data-device='mobile'] .home .tile:active { background: var(--ui-hover); }
/* Contacts as quiet chips on one line. */
html[data-device='mobile'] .home .checks { flex-wrap: wrap; gap: 8px; }
html[data-device='mobile'] .home .eyebrow { text-wrap: balance; }
html[data-device='mobile'] .home .checks li { flex: none; display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid var(--ui-border); border-radius: 999px; font-size: 13px; }
/* ── Phone app: sideways ── headline left, actions right, cards below. */
html[data-device='mobile'][data-orientation='landscape'] .home .hero { padding-block: 20px; }
html[data-device='mobile'][data-orientation='landscape'] .home .hero__copy { grid-template-columns: 1.3fr 1fr; column-gap: 32px; align-items: end; }
html[data-device='mobile'][data-orientation='landscape'] .home .hero__copy .eyebrow { grid-column: 1 / -1; }
html[data-device='mobile'][data-orientation='landscape'] .home .strip__in { grid-template-columns: 1fr 1fr; }
html[data-device='mobile'][data-orientation='landscape'] .home .strip__in > li:nth-child(2) { border-top: 0 !important; }
html[data-device='mobile'][data-orientation='landscape'] .home .strip__in > li:nth-child(even) { border-left: 1px solid var(--ui-border) !important; }
</style>
