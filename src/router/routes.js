
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'maps', component: () => import('src/pages/Maps.vue') },
      { path: 'login', component: () => import('src/pages/Login.vue') },
      { path: 'programa', component: () => import('src/pages/Programa.vue') },
      { path: 'ROrganizacion', component: () => import('src/pages/RegOrg.vue') },
      { path: 'empresa', component: () => import('src/pages/Empresa.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
