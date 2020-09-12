/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/src/router/routes.js
 * @Description    : 
 */

const routes = [
  {
    path: '/',
    redirect: { name: 'tutorials' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
         path: 'tutorials',
      name:"tutorials",
      
      component: () => import('src/pages/tutorials/index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
