<script setup>
import AppIcon from '../components/AppIcon.vue'
import { site, crumbs } from '../lib/site.js'
import TimeOverlap from '../components/TimeOverlap.vue'
import { copy } from '../lib/toast.js'
import { useSeo } from '../lib/seo.js'

const services = [
  { name: 'Web applications and portals', text: 'Laravel and Vue, from a customer portal to a government website that takes payments.', proof: 'Kalimati Market', to: '/work/kalimati' },
  { name: 'ERP and CRM systems', text: 'Operations, billing, payroll and the screens your team uses two hundred times a day.', proof: 'Most waybills are the usual one', to: '/writing/most-waybills-are-the-usual-one' },
  { name: 'Payments and integrations', text: 'eSewa, Khalti and bank payments, Microsoft Dynamics 365, airline and courier APIs.', proof: 'eSewa and Khalti, done safely', to: '/writing/esewa-khalti-laravel' },
  { name: 'Logistics and cargo software', text: 'Air waybills, AWB stock, IATA ONE Record and Cargo-XML, rates and delivery, for freight forwarders.', proof: 'Kaede', to: '/work/kaede' },
  { name: 'WordPress plugins', text: 'Custom plugins and fixes that hold up. I built them for WPEverest’s Everest Forms and User Registration.', proof: 'Everest Forms', to: '/writing/the-check-that-only-lived-in-the-browser' },
  { name: 'Rescue and modernisation', text: 'Take over an old PHP or Laravel app and make it safe, fast and easy to change again.', proof: 'Laravel contributor', to: '/writing/a-date-that-did-not-fit' },
  { name: 'Localisation', text: 'Nepali, English and Japanese, translated by someone who reads the result.', proof: 'Syncfusion in Nepali', to: '/writing/teaching-a-ui-library-nepali' },
  { name: 'CRM on Microsoft Dynamics 365', text: 'Migrations from Zoho and spreadsheets, plugins, Power Automate and the services around it.', proof: 'GenericProperties', to: '/work/generic-properties' },
]

const book = site.booking || `mailto:${site.email}?subject=Free%20systems%20review`
const steps = [
  { title: 'A conversation', text: 'You describe the problem, not a feature list. Thirty minutes usually tells us both whether I’m the right fit.' },
  { title: 'A written proposal', text: 'What I recommend, what it costs and when, as a fixed quote or a monthly retainer, in plain words.' },
  { title: 'Delivery in the open', text: 'Working software every week, on your infrastructure, so there are no surprises.' },
  { title: 'Ongoing care', text: 'You own the code and the docs. I stay on as your technical partner for support and the next phase.' },
]

const faq = [
  { q: 'Do you work with clients outside Nepal?', a: 'Yes. I have worked remotely for clients in the United States and in Nepal. Kathmandu is UTC+5:45, which overlaps the working day in Asia, Australia and the Gulf, and European mornings.' },
  { q: 'Can you take over an existing project?', a: 'Yes. I start by reading the code and the data, then write down what is risky and what is fine before changing anything.' },
  { q: 'Which technologies do you use?', a: 'Mostly PHP and Laravel, Vue, Node.js, PostgreSQL and MySQL, on Linux and Docker. WordPress when it is the right tool, and Microsoft Dynamics 365 when the client already runs on it.' },
  { q: 'What does an engagement look like?', a: 'Either a defined project with a fixed quote, or an ongoing retainer where I act as your IT department: advising, building and keeping your systems running.' },
  { q: 'Do you work with agencies?', a: 'Yes, as a technical partner behind your client work, under your brand if you prefer.' },
  { q: 'Is the systems review really free?', a: 'Yes. Thirty minutes and a written page, with no obligation. I keep it to two a week so each one gets proper attention; slots usually fill a week or two ahead.' },
  { q: 'How much does it cost?', a: 'It depends on the scope. After the first conversation you get a written proposal: a fixed quote for a defined project, or a monthly retainer for ongoing work.' },
]

useSeo({
  title: 'Software consultant in Nepal',
  description: 'Nobel Dahal, independent software consultant and full-stack developer in Kathmandu, Nepal: an IT department you can call on for web apps, ERP, CRM and payments.',
  path: '/consult',
  ld: [
    {
      '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Nobel Dahal, software consulting',
      url: `${site.url}/consult`, email: site.email, image: `${site.url}/og/consult.png`,
      founder: { '@id': `${site.url}/#person` }, provider: { '@id': `${site.url}/#person` },
      address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' },
      areaServed: [{ '@type': 'Country', name: 'Nepal' }, 'Worldwide'],
      knowsLanguage: ['en', 'ne'],
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Services', itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, description: s.text } })) },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    crumbs([{ name: 'Consult', path: '/consult' }]),
  ],
})
</script>

<template>
  <div class="wrap page">
    <header class="head">
      <p class="eyebrow">Independent consultant · Kathmandu, Nepal · UTC+5:45</p>
      <p v-if="site.availability" class="avail"><i aria-hidden="true"></i>{{ site.availability }}</p>
      <h1 class="display">An IT department you can call on</h1>
      <p class="lede">I'm Nobel, an independent software consultant and full-stack developer in Nepal. Businesses bring me a problem; I advise, design and build the solution, then keep it running, from the database to the screen.</p>
      <div class="cta">
        <a class="btn btn--solid" :href="`mailto:${site.email}?subject=Consultation%20enquiry`"><AppIcon name="mail" /> Start a conversation</a>
        <button class="btn" type="button" @click="copy(site.email, 'Email address copied')"><AppIcon name="copy" /> Copy email</button>
        <a class="btn" :href="site.cv" download><AppIcon name="download" /> Résumé</a>
      </div>
      <TimeOverlap />
    </header>

    <section aria-labelledby="review" class="review">
      <div>
        <h2 id="review" class="review__t">Start with a free systems review</h2>
        <p>Thirty minutes about how your business runs today: the software, the spreadsheets, the parts that keep you up at night. Afterwards you get one written page: what's risky, what's fine, and what I'd do first. Yours to keep, whether or not we work together.</p>
      </div>
      <a class="btn btn--solid" :href="book" :target="site.booking ? '_blank' : undefined" rel="noopener"><AppIcon name="arrow" /> {{ site.booking ? 'Book a review slot' : 'Request a review' }}</a>
    </section>

    <section aria-labelledby="what" class="block">
      <h2 id="what" class="h">Where I can help</h2>
      <ul class="services">
        <li v-for="s in services" :key="s.name">
          <h3>{{ s.name }}</h3>
          <p>{{ s.text }}</p>
          <RouterLink :to="s.to" class="proof">{{ s.proof }} <AppIcon name="arrow" /></RouterLink>
        </li>
      </ul>
    </section>

    <section aria-labelledby="how" class="block">
      <h2 id="how" class="h">How we work together</h2>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title">
          <span class="n mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
    </section>

    <section aria-labelledby="why" class="block why">
      <h2 id="why" class="h">Track record</h2>
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
      <h2 class="end__t">Tell me what your business needs.</h2>
      <a class="btn btn--solid" :href="`mailto:${site.email}?subject=Consultation%20enquiry`"><AppIcon name="mail" /> Start a conversation</a>
    </section>
  </div>
</template>

<style scoped>
.page { padding-block: 64px 96px; display: grid; gap: 72px; }
.head { display: grid; gap: 20px; max-width: 760px; }
.cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px; }
.block { display: grid; gap: 24px; }
.review { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px 48px; padding: 28px 32px; border: 1px solid var(--ui-ink); border-radius: 14px; background: var(--ui-surface); }
.review > div { display: grid; gap: 8px; max-width: 64ch; }
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
