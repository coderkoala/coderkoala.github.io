export const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/work/', component: () => import('./pages/Gallery.vue') },
  { path: '/work/:slug', component: () => import('./pages/Project.vue') },
  { path: '/writing/', component: () => import('./pages/Writing.vue') },
  { path: '/writing/:slug', component: () => import('./pages/Post.vue') },
  { path: '/now', component: () => import('./pages/Now.vue') },
  { path: '/colophon', component: () => import('./pages/Colophon.vue') },
  { path: '/cv', component: () => import('./pages/Cv.vue') },
  { path: '/consult', component: () => import('./pages/Consult.vue') },
  { path: '/hire', redirect: '/consult' },
  { path: '/about', component: () => import('./pages/About.vue') },
  // Nepali: same pages, copy chosen from the route (see lib/i18n.js).
  { path: '/ne', component: () => import('./pages/Home.vue') },
  { path: '/ne/consult', component: () => import('./pages/Consult.vue') },
  { path: '/ne/about', component: () => import('./pages/About.vue') },
  { path: '/:rest(.*)*', component: () => import('./pages/NotFound.vue') },
]
