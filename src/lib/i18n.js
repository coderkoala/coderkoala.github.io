import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Nepali lives under /ne. A page's language comes from its route, so prerendered HTML,
// <html lang>, hreflang and every string agree without any client-side switching.
export const LANGS = { en: { name: 'English', locale: 'en_GB' }, ne: { name: 'नेपाली', locale: 'ne_NP' } }

// Pages that exist in both languages. Everything else (case studies, posts) is English only.
export const PAIRS = { '/': '/ne', '/consult': '/ne/consult', '/about': '/ne/about' }
const BACK = Object.fromEntries(Object.entries(PAIRS).map(([en, ne]) => [ne, en]))

export const langOf = (path) => (path === '/ne' || path.startsWith('/ne/') ? 'ne' : 'en')
export const counterpart = (path) => {
  const p = path.length > 1 ? path.replace(/\/$/, '') : path
  return langOf(p) === 'ne' ? BACK[p] || '/' : PAIRS[p] || '/ne'
}
export const alternates = (path) => {
  const en = langOf(path) === 'en' ? path : BACK[path]
  return en && PAIRS[en] ? { en, ne: PAIRS[en] } : null
}

const DIGITS = '०१२३४५६७८९'
export const num = (n, lang) => (lang === 'ne' ? String(n).replace(/\d/g, (d) => DIGITS[d]) : String(n))

// Browsers often lack Nepali date data, so format it ourselves: २ नोभेम्बर २०२६.
const MONTHS = ['जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन', 'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर']
export function formatDay(iso, lang) {
  const [y, m, d] = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kathmandu' }).format(new Date(iso)).split('-').map(Number)
  if (lang === 'ne') return `${num(d, 'ne')} ${MONTHS[m - 1]} ${num(y, 'ne')}`
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

// Interface strings shared by the shell (nav, tab bar, footer) and small components.
const strings = {
  en: {
    home: 'Home', work: 'Work', writing: 'Writing', about: 'About', consult: 'Consult', more: 'More',
    bookConsult: 'Book a consultation', bookReview: 'Book a free review', resume: 'Résumé', now: 'Now', colophon: 'How it’s built',
    email: 'Email', search: 'Search', access: 'Access', light: 'Light', dark: 'Dark', a11y: 'Accessibility and languages',
    updated: 'Updated', place: 'Kathmandu, Nepal', homeLabel: 'home', name: 'Nobel Dahal',
    ktm: 'Kathmandu', you: 'You', shared: 'Shared working hours', sameZone: 'Same time zone',
    overlap: (h) => `${h} h of your 9–6`, async: 'Async, with a call slot early or late', englishOnly: '',
  },
  ne: {
    home: 'गृहपृष्ठ', work: 'काम', writing: 'लेख', about: 'परिचय', consult: 'परामर्श', more: 'थप',
    bookConsult: 'परामर्श बुक गर्नुहोस्', bookReview: 'निःशुल्क समीक्षा बुक गर्नुहोस्', resume: 'बायोडाटा', now: 'अहिले', colophon: 'साइट कसरी बन्यो',
    email: 'इमेल', search: 'खोज्नुहोस्', access: 'पहुँच', light: 'उज्यालो', dark: 'अँध्यारो', a11y: 'पहुँच र भाषा',
    updated: 'अद्यावधिक', place: 'काठमाडौं, नेपाल', homeLabel: 'गृहपृष्ठ', name: 'नोबेल दाहाल',
    ktm: 'काठमाडौं', you: 'तपाईं', shared: 'साझा कार्य समय', sameZone: 'एउटै समय क्षेत्र',
    overlap: (h) => `तपाईंको ९–६ मध्ये ${num(h, 'ne')} घण्टा`, async: 'लिखित रूपमा, बिहान सबेरै वा बेलुकी कलको समयसहित', englishOnly: 'अंग्रेजीमा',
  },
}

export function useLang() {
  const route = useRoute()
  const lang = computed(() => langOf(route.path))
  const t = computed(() => strings[lang.value])
  const to = (enPath) => (lang.value === 'ne' && PAIRS[enPath] ? PAIRS[enPath] : enPath)   // localized link when one exists
  const other = computed(() => ({ path: counterpart(route.path), label: LANGS[lang.value === 'ne' ? 'en' : 'ne'].name, lang: lang.value === 'ne' ? 'en' : 'ne' }))
  return { lang, t, to, other }
}
