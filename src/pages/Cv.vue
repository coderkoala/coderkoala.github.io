<script setup>
import AppIcon from '../components/AppIcon.vue'
import { summary, projects, roles } from '../lib/cv.js'
import { site, skills, certifications, openSource, personLd, crumbs } from '../lib/site.js'
import { useSeo } from '../lib/seo.js'
import { copy } from '../lib/toast.js'

const top = certifications.filter((c) => c.featured)
useSeo({
  title: 'Résumé',
  description: 'Résumé of Nobel Dahal: Kaede, Kalimati Market, United Real Estate and WPEverest; Laravel, Vue and PostgreSQL; open source and certifications.',
  path: '/cv',
  ld: [{ '@context': 'https://schema.org', '@type': 'ProfilePage', mainEntity: personLd, url: `${site.url}/cv` }, crumbs([{ name: 'Résumé', path: '/cv' }])],
})
</script>

<template>
  <article class="wrap cv">
    <header class="cv__head">
      <div>
        <h1 class="display">{{ site.name }}</h1>
        <p class="cv__role">Independent software consultant · Kathmandu, Nepal · UTC+5:45</p>
      </div>
      <div class="cv__actions no-print">
        <a class="btn btn--solid btn--sm" :href="site.cv" download><AppIcon name="download" /> PDF</a>
        <a class="btn btn--sm" href="/download/resume.docx" download>Word</a>
        <button class="btn btn--sm" type="button" @click="copy(site.email, 'Email address copied')"><AppIcon name="copy" /> Email</button>
      </div>
    </header>
    <p class="cv__summary">{{ summary }}</p>

    <section aria-labelledby="sw"><h2 id="sw" class="h">Selected work</h2>
      <div v-for="p in projects" :key="p.name" class="item">
        <div class="row"><h3>{{ p.name }} <span class="soft">· {{ p.kind }} · {{ p.role }}</span></h3><span class="when mono">{{ p.when }}</span></div>
        <ul><li v-for="x in p.points" :key="x">{{ x }}</li></ul>
        <p class="stack">{{ p.stack }}</p>
      </div>
    </section>

    <section aria-labelledby="ex"><h2 id="ex" class="h">Experience</h2>
      <div v-for="r in roles" :key="r.org" class="item">
        <div class="row"><h3>{{ r.org }} <span class="soft">· {{ r.title }}</span></h3><span class="when mono">{{ r.when }}</span></div>
        <ul v-if="r.points.length"><li v-for="x in r.points" :key="x">{{ x }}</li></ul>
      </div>
    </section>

    <div class="cols">
      <section aria-labelledby="os"><h2 id="os" class="h">Open source</h2>
        <ul class="plain"><li v-for="o in openSource" :key="o.href"><a :href="o.href" rel="noopener"><strong>{{ o.what }}</strong></a> <span class="soft">· {{ o.text }}</span></li></ul>
      </section>
      <section aria-labelledby="sk"><h2 id="sk" class="h">Skills</h2>
        <dl class="kv"><div v-for="g in skills" :key="g.group"><dt>{{ g.group }}</dt><dd>{{ g.items.join(', ') }}</dd></div></dl>
        <h2 class="h h--gap">Certifications</h2>
        <ul class="plain"><li v-for="c in top" :key="c.name + c.issuer">{{ c.name }} <span class="soft">· {{ c.issuer }}, {{ c.year }}</span></li></ul>
        <h2 class="h h--gap">Education</h2>
        <p>Bachelor of Engineering, Computer <span class="soft">· Himalaya College of Engineering, 2014–2018</span></p>
      </section>
    </div>
  </article>
</template>

<style scoped>
.cv { max-width: 960px; padding-block: 56px 96px; display: grid; gap: 40px; }
.cv__head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 20px; }
.cv__head .display { font-size: clamp(34px, 4.5vw, 52px); }
.cv__role { margin-top: 8px; color: var(--ui-ink-soft); }
.cv__actions { display: flex; flex-wrap: wrap; gap: 8px; }
.cv__summary { font-size: 18px; line-height: 1.6; max-width: 70ch; }
.h { font-size: 13px; font-weight: 600; color: var(--ui-ink-faint); padding-bottom: 8px; border-bottom: 1px solid var(--ui-border); margin-bottom: 16px; }
.h--gap { margin-top: 28px; }
section { display: block; }
.item { margin-bottom: 20px; }
.row { display: flex; justify-content: space-between; gap: 16px; align-items: baseline; }
.row h3 { font-size: 16px; font-weight: 700; }
.soft { color: var(--ui-ink-faint); font-weight: 400; }
.when { color: var(--ui-ink-faint); font-size: 13px; white-space: nowrap; }
.item ul { list-style: disc; padding-left: 18px; margin-top: 6px; display: grid; gap: 3px; color: var(--ui-ink-soft); }
.stack { margin-top: 6px; font-size: 13px; color: var(--ui-ink-faint); }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
.plain { display: grid; gap: 8px; }
.kv { display: grid; gap: 6px; }
.kv div { display: grid; grid-template-columns: 80px 1fr; gap: 12px; }
.kv dt { color: var(--ui-ink-faint); }
@media (max-width: 767.98px) { .cols { grid-template-columns: 1fr; } .row { flex-direction: column; gap: 2px; } .cv { padding-block: 32px 64px; } }
@media print { .cv { padding: 0; } :global(.backdrop), :global(.foot) { display: none; } }
</style>
