<script setup>
import AppIcon from '../components/AppIcon.vue'
import { site, experience, certifications, personLd, skills, assessed, openSource, crumbs } from '../lib/site.js'
import { useSeo } from '../lib/seo.js'
import { useLang, num } from '../lib/i18n.js'
import text from '../lib/copy/about.js'
const top = certifications.filter((c) => c.featured)
const rest = certifications.filter((c) => !c.featured)
const { lang } = useLang()
const c = text[lang.value]
const here = lang.value === 'ne' ? '/ne/about' : '/about'
useSeo({
  title: c.title,
  description: c.seo,
  path: here,
  image: '/og/about.png',
  ld: [{ '@context': 'https://schema.org', '@type': 'ProfilePage', mainEntity: personLd, url: site.url + here }, crumbs([{ name: c.h1, path: here }])],
})
</script>

<template>
  <section class="wrap page">
    <header class="head">
      <div class="head__main">
      <h1 class="display">{{ c.h1 }}</h1>
      <div class="lede intro">
        <p v-for="p in c.intro" :key="p">{{ p }}</p>
      </div>
      <div class="cta">
        <a class="btn btn--solid" :href="`mailto:${site.email}`"><AppIcon name="mail" /> {{ c.emailMe }}</a>
        <a class="btn" :href="site.cv" download><AppIcon name="download" /> {{ c.resume }}</a>
      </div>
      </div>
      <dl class="facts">
        <div v-for="f in c.facts" :key="f[0]"><dt>{{ f[0] }}</dt><dd>{{ f[1] }} <span v-if="f[2]" class="soft">{{ f[2] }}</span></dd></div>
      </dl>
    </header>

    <div class="masonry">
        <section aria-labelledby="exp">
          <h2 id="exp" class="h">{{ c.exp }}</h2>
          <ol class="rows" :lang="lang === 'ne' ? 'en' : null">
            <li v-for="e in experience" :key="e.org" class="row">
              <span><strong>{{ e.org }}</strong><span class="soft">{{ e.title }} · {{ e.type }}</span></span>
              <span class="soft mono">{{ e.when }}</span>
            </li>
          </ol>
        </section>
        <section aria-labelledby="oss">
          <h2 id="oss" class="h">{{ c.oss }}</h2>
          <ul class="oss" :lang="lang === 'ne' ? 'en' : null">
            <li v-for="o in openSource" :key="o.href">
              <a :href="o.href" rel="noopener"><strong>{{ o.what }}</strong></a>
              <span class="soft">{{ o.text }}</span>
            </li>
          </ul>
        </section>
        <section aria-labelledby="skills">
          <h2 id="skills" class="h">{{ c.skills }}</h2>
          <dl class="skills" :lang="lang === 'ne' ? 'en' : null">
            <div v-for="g in skills" :key="g.group"><dt>{{ g.group }}</dt><dd>{{ g.items.join(', ') }}</dd></div>
          </dl>
          <p class="soft small">{{ c.assessed }} {{ assessed.join(', ') }}.</p>
        </section>
        <section aria-labelledby="cert">
          <h2 id="cert" class="h">{{ c.cert }}</h2>
          <ul class="certs">
            <li v-for="c in top" :key="c.name + c.issuer"><span>{{ c.name }}</span><span class="soft">{{ c.issuer }} · {{ c.year }}</span></li>
          </ul>
          <details class="more">
            <summary>{{ c.moreCourses(num(rest.length, lang)) }}</summary>
            <ul class="certs certs--small">
              <li v-for="c in rest" :key="c.name + c.issuer"><span>{{ c.name }}</span><span class="soft">{{ c.issuer }} · {{ c.year }}</span></li>
            </ul>
          </details>
        </section>
        <section aria-labelledby="edu">
          <h2 id="edu" class="h">{{ c.edu }}</h2>
          <p>{{ c.degree }}</p>
          <p class="soft small">{{ c.college }}</p>
        </section>
    </div>
  </section>
</template>

<style scoped>
.page { padding-block: 64px 40px; display: grid; gap: 64px; }
.head { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 72px; align-items: end; }
.head__main { display: grid; gap: 24px; }
.facts { display: grid; gap: 14px; padding: 24px 0 0; border-top: 1px solid var(--ui-border); }
.facts div { display: grid; grid-template-columns: 120px 1fr; gap: 12px; }
.facts dt { color: var(--ui-ink-faint); font-size: 14px; padding-top: 2px; }
.row > .soft.mono { white-space: nowrap; }
.intro { display: grid; gap: 12px; max-width: 58ch; }
.cta { display: flex; flex-wrap: wrap; gap: 12px; }
.page { position: relative; }
.masonry { columns: 2 380px; column-gap: 72px; }
.masonry > section { break-inside: avoid; margin-bottom: 56px; }
.h { font-size: 14px; font-weight: 600; color: var(--ui-ink-faint); margin-bottom: 16px; }
.rows { border-top: 1px solid var(--ui-border); }
.row { display: flex; justify-content: space-between; gap: 16px; padding-block: 14px; border-bottom: 1px solid var(--ui-border); }
.row strong { margin-right: 10px; }
.soft { color: var(--ui-ink-faint); }
.small { font-size: 14px; margin-top: 8px; }
.oss { display: grid; gap: 12px; }
.oss li { display: grid; }
.oss .soft { font-size: 15px; }
.skills { display: grid; gap: 10px; }
.skills div { display: grid; grid-template-columns: 88px 1fr; gap: 12px; }
.skills dt { color: var(--ui-ink-faint); font-size: 14px; padding-top: 2px; }
.certs { display: grid; gap: 12px; }
.certs li { display: grid; }
.certs .soft { font-size: 13px; }
.certs--small { gap: 10px; font-size: 15px; margin-top: 16px; }
.more { margin-top: 20px; }
.more summary { cursor: pointer; font-weight: 600; font-size: 15px; width: fit-content; }
@media (max-width: 767.98px) {
  .page { padding-block: 40px 64px; gap: 48px; }
  .masonry > section { margin-bottom: 40px; }
  .head { grid-template-columns: 1fr; gap: 40px; }
  .row { flex-direction: column; gap: 2px; }
}
</style>
