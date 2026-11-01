<script setup>
import AppIcon from '../components/AppIcon.vue'
import { site, crumbs } from '../lib/site.js'
import TimeOverlap from '../components/TimeOverlap.vue'
import { copy } from '../lib/toast.js'
import { useSeo } from '../lib/seo.js'

const services = [
  { name: 'Laravel web applications', text: 'Laravel and Vue, from a customer portal to a government website with payments.', proof: 'Kalimati Market', to: '/work/kalimati' },
  { name: 'ERP and CRM systems', text: 'Operations, billing, payroll and the screens your team uses two hundred times a day.', proof: 'Most waybills are the usual one', to: '/writing/most-waybills-are-the-usual-one' },
  { name: 'Payments and integrations', text: 'eSewa, Khalti and bank payments, Microsoft Dynamics 365, airline and courier APIs.', proof: 'eSewa and Khalti, done safely', to: '/writing/esewa-khalti-laravel' },
  { name: 'Logistics and cargo software', text: 'Air waybills, AWB stock, IATA ONE Record and Cargo-XML, rates and delivery, for freight forwarders.', proof: 'Kaede', to: '/work/kaede' },
  { name: 'WordPress plugins', text: 'Custom plugins and fixes, written properly. I spent a year building them for WPEverest.', proof: 'Everest Forms', to: '/writing/the-check-that-only-lived-in-the-browser' },
  { name: 'Rescue and modernisation', text: 'Take over an old PHP or Laravel app and make it safe, fast and easy to change again.', proof: 'Laravel contributor', to: '/writing/a-date-that-did-not-fit' },
  { name: 'Localisation', text: 'Nepali, English and Japanese, translated by someone who reads the result.', proof: 'Syncfusion in Nepali', to: '/writing/teaching-a-ui-library-nepali' },
  { name: 'CRM on Microsoft Dynamics 365', text: 'Migrations from Zoho and spreadsheets, plugins, Power Automate and the services around it.', proof: 'GenericProperties', to: '/work/generic-properties' },
]

const steps = [
  { title: 'A call', text: 'You tell me the problem, not a feature list. Thirty minutes is usually enough.' },
  { title: 'A written plan', text: 'Scope, milestones and either a fixed quote or a monthly rate, in plain words.' },
  { title: 'Weekly demos', text: 'Working software every week, on your server, so nothing is a surprise.' },
  { title: 'Launch, then stay', text: 'You get the code and the docs. I stay around for fixes and the next phase.' },
]

const faq = [
  { q: 'Do you work with clients outside Nepal?', a: 'Yes. I have worked remotely for clients in the United States and in Nepal. Kathmandu is UTC+5:45, which overlaps the working day in Asia, Australia and the Gulf, and European mornings.' },
  { q: 'Can you take over an existing project?', a: 'Yes. I start by reading the code and the data, then write down what is risky and what is fine before changing anything.' },
  { q: 'Which technologies do you use?', a: 'Mostly PHP and Laravel, Vue, Node.js, PostgreSQL and MySQL, on Linux and Docker. WordPress when it is the right tool, and Microsoft Dynamics 365 when the client already runs on it.' },
  { q: 'Do you work with agencies?', a: 'Yes, as a contractor on your team or as the developer behind your client work, under your brand if you prefer.' },
  { q: 'How much does it cost?', a: 'It depends on the scope. After the first call you get a fixed quote for a defined project, or a monthly rate for ongoing work.' },
]

useSeo({
  title: 'Hire a full-stack developer in Nepal',
  description: 'Hire Nobel Dahal, a freelance full-stack web developer in Kathmandu, Nepal: Laravel and Vue web apps, ERP and CRM systems, payments and WordPress plugins.',
  path: '/hire',
  ld: [
    {
      '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Nobel Dahal, full-stack developer',
      url: `${site.url}/hire`, email: site.email, image: `${site.url}/og/hire.png`,
      founder: { '@id': `${site.url}/#person` }, provider: { '@id': `${site.url}/#person` },
      address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' },
      areaServed: [{ '@type': 'Country', name: 'Nepal' }, 'Worldwide'],
      knowsLanguage: ['en', 'ne'],
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Services', itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, description: s.text } })) },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    crumbs([{ name: 'Hire', path: '/hire' }]),
  ],
})
</script>

<template>
  <div class="wrap page">
    <header class="head">
      <p class="eyebrow">Freelance · Kathmandu, Nepal · UTC+5:45</p>
      <h1 class="display">Hire a full-stack developer in Nepal</h1>
      <p class="lede">I'm Nobel. I build web applications and business systems for companies in Nepal and abroad, from the database to the screen, and I stay to run them.</p>
      <div class="cta">
        <a class="btn btn--solid" :href="`mailto:${site.email}?subject=Project%20enquiry`"><AppIcon name="mail" /> {{ site.email }}</a>
        <button class="btn" type="button" @click="copy(site.email, 'Email address copied')"><AppIcon name="copy" /> Copy email</button>
        <a class="btn" :href="site.cv" download><AppIcon name="download" /> Résumé</a>
      </div>
      <TimeOverlap />
    </header>

    <section aria-labelledby="what" class="block">
      <h2 id="what" class="h">What I build</h2>
      <ul class="services">
        <li v-for="s in services" :key="s.name">
          <h3>{{ s.name }}</h3>
          <p>{{ s.text }}</p>
          <RouterLink :to="s.to" class="proof">{{ s.proof }} <AppIcon name="arrow" /></RouterLink>
        </li>
      </ul>
    </section>

    <section aria-labelledby="how" class="block">
      <h2 id="how" class="h">How it goes</h2>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title">
          <span class="n mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
    </section>

    <section aria-labelledby="why" class="block why">
      <h2 id="why" class="h">Why me</h2>
      <ul class="checks">
        <li><AppIcon name="check" /> Shipping production software since 2018</li>
        <li><AppIcon name="check" /> Built Kaede, an ERP for freight forwarders</li>
        <li><AppIcon name="check" /> Sole developer of Kalimati Market's platform</li>
        <li><AppIcon name="check" /> Laravel contributor, and found security bugs in WordPress plugins</li>
      </ul>
    </section>

    <section aria-labelledby="faq" class="block">
      <h2 id="faq" class="h">Questions</h2>
      <div class="faq">
        <details v-for="f in faq" :key="f.q">
          <summary>{{ f.q }}</summary>
          <p>{{ f.a }}</p>
        </details>
      </div>
    </section>

    <section class="end">
      <h2 class="end__t">Tell me what you're building.</h2>
      <a class="btn btn--solid" :href="`mailto:${site.email}?subject=Project%20enquiry`"><AppIcon name="mail" /> Email me</a>
    </section>
  </div>
</template>

<style scoped>
.page { padding-block: 64px 96px; display: grid; gap: 72px; }
.head { display: grid; gap: 20px; max-width: 760px; }
.cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.block { display: grid; gap: 24px; }
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
