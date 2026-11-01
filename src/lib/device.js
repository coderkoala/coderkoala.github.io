import { ref } from 'vue'

// One switch for the whole site: phones get the mobile-first app shell.
// CSS uses the same query (see base.css), and index.html stamps data-device before paint.
export const MOBILE = '(max-width: 767.98px), (pointer: coarse) and (max-height: 500px)'
export const isMobile = ref(false)
// Phone held sideways: short and touch-driven, still the mobile app.
export const isLandscape = ref(false)

if (typeof window !== 'undefined') {
  const mq = matchMedia(MOBILE)
  const set = () => {
    isMobile.value = mq.matches
    isLandscape.value = mq.matches && innerWidth > innerHeight
    document.documentElement.dataset.orientation = innerWidth > innerHeight ? 'landscape' : 'portrait'
    document.documentElement.dataset.device = mq.matches ? 'mobile' : 'desktop'
  }
  set()
  mq.addEventListener('change', set)
  // Rotation can keep the media query result but flip the shape, so watch that too.
  matchMedia('(orientation: landscape)').addEventListener('change', set)
}
