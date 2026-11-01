<script setup>
import { ref } from 'vue'
import AppIcon from '../components/AppIcon.vue'
import DryRun from '../components/DryRun.vue'
import { work, writing, gallery } from '../lib/content.js'
import { site, personLd, websiteLd } from '../lib/site.js'
import { useSeo } from '../lib/seo.js'

useSeo({
  description: 'Nobel Dahal is a full-stack web developer and software engineer in Kathmandu, Nepal, building ERP, CRM and web applications in Laravel and Vue.',
  ld: [personLd, websiteLd],
})
const shown = ref(work[0])
</script>

<template>
  <div class="home">
    <section class="hero wrap">
      <div class="hero__copy">
        <p class="eyebrow">Full-stack developer and consultant · Kathmandu, Nepal</p>
        <h1 class="display">I build the software businesses count on.</h1>
        <p class="lede">Web applications, ERPs and CRMs, from the database up. These days that means Kaede, an ERP that learns how a freight forwarder works.</p>
        <div class="hero__cta">
          <RouterLink class="btn btn--solid" :to="`/work/${work[0].slug}`">See how Kaede works <AppIcon name="arrow" /></RouterLink>
          <a class="btn" :href="site.cv" download><AppIcon name="download" /> Résumé</a>
        </div>
        <ul class="checks">
          <li><AppIcon name="github" /> <a :href="site.github" rel="me">coderkoala</a></li>
          <li><AppIcon name="linkedin" /> <a :href="site.linkedin" rel="me">coderkoala</a></li>
          <li><AppIcon name="mail" /> <a :href="`mailto:${site.email}`">{{ site.email }}</a></li>
        </ul>
      </div>
      <div class="hero__demo">
        <Transition name="fade" mode="out-in"><DryRun :key="shown.slug" :project="shown" /></Transition>
      </div>
    </section>

    <section id="work" class="strip" aria-labelledby="work-title">
      <h2 id="work-title" class="sr-only">Selected work</h2>
      <ul class="wrap strip__in">
        <li v-for="w in work" :key="w.slug" @mouseenter="shown = w" @focusin="shown = w">
          <RouterLink :to="w.url" class="tile" :class="{ on: shown.slug === w.slug }">
            <span class="tile__kind">{{ w.kind }}</span>
            <span class="tile__name">{{ w.title }} <AppIcon name="arrow" /></span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/work/" class="tile">
            <span class="tile__kind">{{ gallery.length }} projects since 2017</span>
            <span class="tile__name">Everything else <AppIcon name="arrow" /></span>
          </RouterLink>
        </li>
        <li v-if="writing.length">
          <RouterLink to="/writing/" class="tile">
            <span class="tile__kind">{{ writing.length }} case studies</span>
            <span class="tile__name">Writing <AppIcon name="arrow" /></span>
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home { display: flex; flex-direction: column; min-height: calc(100svh - 65px - 61px); }
.hero {
  flex: 1; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 520px); gap: 72px; align-items: center;
  padding-block: clamp(24px, 5vh, 64px);
}
.hero__copy { display: grid; gap: 24px; }
.hero__copy .display { max-width: 15ch; text-wrap: balance; }
.hero__copy .lede { max-width: 44ch; }
.hero__cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.checks a { text-decoration: none; }
.checks a:hover { color: var(--ui-ink); text-decoration: underline; }

.strip { border-top: 1px solid var(--ui-border); border-bottom: 1px solid var(--ui-border); background: var(--ui-surface-sunken); }
.strip__in { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); }
.strip__in > li + li { border-left: 1px solid var(--ui-border); }
.tile { display: grid; gap: 4px; padding: 22px 24px; text-decoration: none; color: var(--ui-ink); transition: background var(--ui-duration) var(--ui-ease); height: 100%; }
.tile:hover, .tile.on { background: var(--ui-surface); box-shadow: inset 0 2px 0 var(--ui-ink); }
.tile__kind { font-size: 13px; color: var(--ui-ink-faint); }
.tile__name { display: inline-flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; }
.tile__name--post { font-size: 16px; font-weight: 600; }
.tile__name :deep(svg) { transition: transform var(--ui-duration) var(--ui-ease); }
.tile:hover .tile__name :deep(svg) { transform: translateX(3px); }

.fade-enter-active, .fade-leave-active { transition: opacity 160ms var(--ui-ease); }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (min-width: 992px) and (max-height: 820px) {
  .hero { gap: 56px; }
  .hero__copy { gap: 18px; }
  .hero .display { font-size: clamp(36px, 4.2vw, 52px); }
  .hero__demo :deep(.run__row) { padding-top: 5px; }
  .hero__demo :deep(.run__d) { font-size: 13px; }
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
  .hero__demo { display: none; }
  .strip__in { grid-template-columns: 1fr; }
  .strip__in > li + li { border-left: 0; border-top: 1px solid var(--ui-border); }
  .tile { padding: 18px 0; }
  .tile:hover, .tile.on { background: none; box-shadow: none; }
  .hero__cta .btn { flex: 1 1 auto; }
}
</style>
