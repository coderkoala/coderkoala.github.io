import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-sans/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import './styles/tokens.css'
import './styles/base.css'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './routes.js'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior: (to, from, saved) => saved || (to.hash ? { el: to.hash } : { top: 0 }),
})
