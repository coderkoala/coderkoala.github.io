<script setup>
import AppIcon from '../components/AppIcon.vue'
import { site, experience, certifications, personLd, skills, assessed, openSource, crumbs } from '../lib/site.js'
import { useSeo } from '../lib/seo.js'
const top = certifications.filter((c) => c.featured)
const rest = certifications.filter((c) => !c.featured)
useSeo({
  title: 'Experience, open source and certifications',
  description: 'Experience since 2018, open-source work on Laravel, Syncfusion and WordPress plugins, PMI and PagerDuty certifications, and a computer engineering degree.',
  path: '/about',
  ld: [{ '@context': 'https://schema.org', '@type': 'ProfilePage', mainEntity: personLd, url: 'https://www.nobeldahal.com.np/about' }, crumbs([{ name: 'About', path: '/about' }])],
})
</script>

<template>
  <section class="wrap page">
    <header class="head">
      <div class="head__main">
      <h1 class="display">About</h1>
      <div class="lede intro">
        <p>I'm Nobel. I studied computer engineering in Kathmandu and have been shipping software for businesses since 2018: WordPress plugins, a government market's website, a US brokerage's CRM, and now an ERP for air cargo.</p>
        <p>I like the unglamorous parts. Migrations, audit logs, the form someone fills in two hundred times a day.</p>
      </div>
      <div class="cta">
        <a class="btn btn--solid" :href="`mailto:${site.email}`"><AppIcon name="mail" /> Email me</a>
        <a class="btn" :href="site.cv" download><AppIcon name="download" /> Résumé</a>
      </div>
      </div>
      <dl class="facts">
        <div><dt>Based in</dt><dd>Kathmandu, Nepal <span class="soft">· UTC+5:45</span></dd></div>
        <div><dt>Working as</dt><dd>Freelance software engineer and consultant</dd></div>
        <div><dt>Shipping since</dt><dd>2018</dd></div>
        <div><dt>Speaks</dt><dd>English, Nepali</dd></div>
        <div><dt>Builds with</dt><dd>Laravel, Vue, PostgreSQL</dd></div>
      </dl>
    </header>

    <div class="masonry">
        <section aria-labelledby="exp">
          <h2 id="exp" class="h">Experience</h2>
          <ol class="rows">
            <li v-for="e in experience" :key="e.org" class="row">
              <span><strong>{{ e.org }}</strong><span class="soft">{{ e.title }} · {{ e.type }}</span></span>
              <span class="soft mono">{{ e.when }}</span>
            </li>
          </ol>
        </section>
        <section aria-labelledby="oss">
          <h2 id="oss" class="h">Open source</h2>
          <ul class="oss">
            <li v-for="o in openSource" :key="o.href">
              <a :href="o.href" rel="noopener"><strong>{{ o.what }}</strong></a>
              <span class="soft">{{ o.text }}</span>
            </li>
          </ul>
        </section>
        <section aria-labelledby="skills">
          <h2 id="skills" class="h">Skills</h2>
          <dl class="skills">
            <div v-for="g in skills" :key="g.group"><dt>{{ g.group }}</dt><dd>{{ g.items.join(', ') }}</dd></div>
          </dl>
          <p class="soft small">Passed LinkedIn assessments in {{ assessed.join(', ') }}.</p>
        </section>
        <section aria-labelledby="cert">
          <h2 id="cert" class="h">Certifications</h2>
          <ul class="certs">
            <li v-for="c in top" :key="c.name + c.issuer"><span>{{ c.name }}</span><span class="soft">{{ c.issuer }} · {{ c.year }}</span></li>
          </ul>
          <details class="more">
            <summary>{{ rest.length }} more courses</summary>
            <ul class="certs certs--small">
              <li v-for="c in rest" :key="c.name + c.issuer"><span>{{ c.name }}</span><span class="soft">{{ c.issuer }} · {{ c.year }}</span></li>
            </ul>
          </details>
        </section>
        <section aria-labelledby="edu">
          <h2 id="edu" class="h">Education</h2>
          <p>Bachelor of Engineering, Computer</p>
          <p class="soft small">Himalaya College of Engineering, 2014–2018</p>
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
