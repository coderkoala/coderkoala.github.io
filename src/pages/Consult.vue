<script setup>
import AppIcon from '../components/AppIcon.vue'
import { site, crumbs } from '../lib/site.js'
import TimeOverlap from '../components/TimeOverlap.vue'
import { copy } from '../lib/toast.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { inlineCal, openCal } from '../lib/cal.js'
import { useSeo } from '../lib/seo.js'
import { useLang } from '../lib/i18n.js'
import text from '../lib/copy/consult.js'

const { lang } = useLang()
const c = text[lang.value]
const { services, steps, faq } = c
const mail = `mailto:${site.email}?subject=${encodeURIComponent(c.mailSubject)}`

const book = site.booking || `mailto:${site.email}?subject=${encodeURIComponent(c.reviewSubject)}`
function onBook(e) { if (site.booking) { e.preventDefault(); openCal() } }
const calEl = ref(null)
const calOn = ref(false)
let io
onMounted(() => {
  if (!site.booking || !calEl.value) return
  io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); calOn.value = true; inlineCal(calEl.value) } }, { rootMargin: '600px 0px' })
  io.observe(calEl.value)
})
onBeforeUnmount(() => io?.disconnect())
useSeo({
  title: c.title,
  description: c.seo,
  path: lang.value === 'ne' ? '/ne/consult' : '/consult',
  image: '/og/consult.png',
  ld: [
    {
      '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Nobel Dahal, software consulting',
      url: `${site.url}${lang.value === 'ne' ? '/ne/consult' : '/consult'}`, email: site.email, image: `${site.url}/og/consult.png`,
      founder: { '@id': `${site.url}/#person` }, provider: { '@id': `${site.url}/#person` },
      address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' },
      areaServed: [{ '@type': 'Country', name: 'Nepal' }, 'Worldwide'],
      knowsLanguage: ['en', 'ne'],
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Services', itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, description: s.text } })) },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    crumbs([{ name: lang.value === 'ne' ? 'परामर्श' : 'Consult', path: lang.value === 'ne' ? '/ne/consult' : '/consult' }]),
  ],
})
</script>

<template>
  <div class="wrap page">
    <header class="head">
      <p class="eyebrow">{{ c.eyebrow }}</p>
      <p v-if="site.availability" class="avail"><i aria-hidden="true"></i>{{ c.availability }}</p>
      <h1 class="display">{{ c.h1 }}</h1>
      <p class="lede">{{ c.lede }}</p>
      <div class="cta">
        <a class="btn btn--solid" :href="mail"><AppIcon name="mail" /> {{ c.start }}</a>
        <button class="btn" type="button" @click="copy(site.email, c.copied)"><AppIcon name="copy" /> {{ c.copyEmail }}</button>
        <a class="btn" :href="site.cv" download><AppIcon name="download" /> {{ c.resume }}</a>
      </div>
      <TimeOverlap />
    </header>

    <section aria-labelledby="review" class="review">
      <div>
        <h2 id="review" class="review__t">{{ c.reviewTitle }}</h2>
        <p>{{ c.review }}</p>
      </div>
      <a class="btn btn--solid" :href="book" target="_blank" rel="noopener" @click="onBook"><AppIcon name="arrow" /> {{ site.booking ? c.bookSlot : c.requestReview }}</a>
      <div v-if="site.booking" ref="calEl" class="cal" :class="{ 'cal--on': calOn }" :aria-label="c.calendar"></div>
    </section>

    <section aria-labelledby="what" class="block">
      <h2 id="what" class="h">{{ c.helpTitle }}</h2>
      <ul class="services">
        <li v-for="s in services" :key="s.name">
          <h3>{{ s.name }}</h3>
          <p>{{ s.text }}</p>
          <RouterLink :to="s.to" class="proof" :hreflang="lang === 'ne' ? 'en' : null">{{ s.proof }} <AppIcon name="arrow" /></RouterLink>
        </li>
      </ul>
    </section>

    <section aria-labelledby="how" class="block">
      <h2 id="how" class="h">{{ c.howTitle }}</h2>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title">
          <span class="n mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
    </section>

    <section aria-labelledby="why" class="block why">
      <h2 id="why" class="h">{{ c.recordTitle }}</h2>
      <ul class="checks">
        <li v-for="r in c.record" :key="r"><AppIcon name="check" /> {{ r }}</li>
      </ul>
    </section>

    <section aria-labelledby="faq" class="block">
      <h2 id="faq" class="h">{{ c.faqTitle }}</h2>
      <div class="faq">
        <details v-for="f in faq" :key="f.q">
          <summary>{{ f.q }}</summary>
          <p>{{ f.a }}</p>
        </details>
      </div>
    </section>

    <section class="end">
      <h2 class="end__t">{{ c.endTitle }}</h2>
      <a class="btn btn--solid" :href="mail"><AppIcon name="mail" /> {{ c.start }}</a>
    </section>
  </div>
</template>

<style scoped>
.page { padding-block: 64px 96px; display: grid; gap: 72px; }
.head { display: grid; gap: 20px; max-width: 760px; }
.cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.block { display: grid; gap: 24px; }
.review { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px 48px; padding: 28px 32px; border: 1px solid var(--ui-ink); border-radius: 14px; background: var(--ui-surface); }
.review > div:first-child { display: grid; gap: 8px; max-width: 64ch; }
.cal { flex-basis: 100%; min-height: 560px; border-top: 1px solid var(--ui-border); padding-top: 20px; position: relative; overflow: hidden; }
.cal:not(.cal--on)::before { content: ''; position: absolute; inset: 20px 0 0; border-radius: 10px; background: linear-gradient(100deg, var(--ui-surface-sunken) 30%, var(--ui-hover) 50%, var(--ui-surface-sunken) 70%) 0 0 / 200% 100%; animation: calsh 1.4s linear infinite; }
@keyframes calsh { to { background-position: -200% 0; } }
.review__t { font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
.review p { color: var(--ui-ink-soft); }
.avail { display: inline-flex; align-items: center; gap: 8px; width: fit-content; font-size: 14px; font-weight: 600; }
.avail i { width: 8px; height: 8px; border-radius: 50%; background: var(--ui-ink); animation: pulse 2.4s ease-in-out infinite; }
@keyframes pulse { 50% { opacity: .3; } }
.h { font-size: 14px; font-weight: 600; color: var(--ui-ink-faint); }
.services { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--ui-border); }
.services li { display: grid; gap: 8px; align-content: start; padding: 24px 24px 28px 0; border-bottom: 1px solid var(--ui-border); }
.services li:not(:nth-child(4n + 1)) { padding-left: 24px; border-left: 1px solid var(--ui-border); }
.services h3, .steps h3 { font-size: 18px; font-weight: 700; }
.services p, .steps p { color: var(--ui-ink-soft); }
.proof { display: inline-flex; align-items: center; gap: 6px; width: fit-content; margin-top: 4px; font-size: 14px; font-weight: 600; text-decoration: none; }
.proof:hover { text-decoration: underline; }
.steps { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 32px; }
.steps li { display: grid; gap: 8px; align-content: start; }
.n { font-size: 12px; color: var(--ui-ink-faint); }
.why .checks { font-size: 17px; color: var(--ui-ink); gap: 14px 40px; }
.faq { display: grid; border-top: 1px solid var(--ui-border); max-width: 820px; }
.faq details { border-bottom: 1px solid var(--ui-border); }
.faq summary { cursor: pointer; padding: 18px 0; font-size: 17px; font-weight: 600; list-style: none; display: flex; justify-content: space-between; gap: 16px; }
.faq summary::after { content: '+'; color: var(--ui-ink-faint); font-weight: 400; }
.faq details[open] summary::after { content: '−'; }
.faq details p { padding: 0 0 20px; color: var(--ui-ink-soft); max-width: 68ch; }
.end { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; padding-top: 40px; border-top: 1px solid var(--ui-border); }
.end__t { font-size: clamp(24px, 3vw, 34px); font-weight: 700; letter-spacing: -0.02em; }
@media (max-width: 991.98px) {
  .services { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .services li:nth-child(odd) { padding-left: 0; border-left: 0; }
  .services li:nth-child(even) { padding-left: 24px; border-left: 1px solid var(--ui-border); }
  .services li, .services li:not(:nth-child(4n + 1)) { padding: 20px 0; border-left: 0; }
  .steps { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 767.98px) { .page { padding-block: 40px 64px; gap: 56px; } .steps { grid-template-columns: 1fr; } }
</style>
