import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import NotFound from '../views/404.vue'
import Setup from '../views/Setup.vue'

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
    path: '/u/:id',
    name: 'User',
    component: User
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
