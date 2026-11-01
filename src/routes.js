export const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/work/', component: () => import('./pages/Gallery.vue') },
  { path: '/work/:slug', component: () => import('./pages/Project.vue') },
  { path: '/writing/', component: () => import('./pages/Writing.vue') },
  { path: '/writing/:slug', component: () => import('./pages/Post.vue') },
  { path: '/cv', component: () => import('./pages/Cv.vue') },
  { path: '/hire', component: () => import('./pages/Hire.vue') },
  { path: '/about', component: () => import('./pages/About.vue') },
  { path: '/:rest(.*)*', component: () => import('./pages/NotFound.vue') },
]
