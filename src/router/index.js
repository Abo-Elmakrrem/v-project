import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portofolio from '../views/Portofolio.vue'
import Services from '../views/Services.vue'
import Ahmed from '../views/Php62.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/portofolio',
    name:"Portofolio",
    component: Portofolio
  },
  {
    path:'/services',
    name:"services",
    component: Services
  },
  {
    path:'/Php62',
    name:"ahmed",
    component: Ahmed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
