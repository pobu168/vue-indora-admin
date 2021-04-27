import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import funHome from '../pages/fun-home'
import modelValidate from '../pages/model-validate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: App,
    redirect: 'funHome',
    children: [
      {
        path: 'funHome',
        name: 'funHome',
        title: 'funHome',
        meta: {},
        component: funHome
      },
      {
        path: '/modelValidate',
        name: 'modelValidate',
        title: 'modelValidate',
        meta: {},
        component: modelValidate
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
