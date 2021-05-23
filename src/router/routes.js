/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/src/router/routes.js
 * @Description    :
 */
 
const routes = [
  { path: '/', component: () => import('src/pages/login/login.vue') },
  {
    path: "/",
    redirect: { name: "tutorial" },
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      {
        path: "tutorial",
        name: "tutorial",

        component: () => import("src/pages/tutorial/index.vue")
      },
      {
        path: "user",
        name: "user",

        component: () => import("src/pages/user/index.vue")
      },
      {
        path: "authentication",
        name: "authentication",

        component: () => import("src/pages/authentication/index.vue")
      },
      {
        path: "author",
        name: "author",

        component: () => import("src/pages/author/index.vue")
      },
      {
        path: "artical",
        name: "artical",

        component: () => import("src/pages/artical/index.vue")
      },
      {
        path:'message',
        name:'message',
        component:()=>import("src/pages/message/index.vue")
      }

    ]
  },

  // Always leave this as last one,   
  // but you can also remove it
  {
    path: "*",
    component: () => import("src/pages/error/Error404.vue")
  }
];

export default routes;
