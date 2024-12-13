import { createRouter, createWebHistory } from 'vue-router'

import Ecommerce from '../views/Ecommerce/Ecommerce'
import Signin from '../views/Ecommerce/Signin'
import Signup from '../views/Ecommerce/Signup'
import amazonCart from '../views/Ecommerce/amazonCart'

const routes = [
  {
    path: '/',
    name: 'Ecommerce',
    component: Ecommerce
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/amazonCart',
    name: 'amazonCart',
    component: amazonCart
  },
  
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
