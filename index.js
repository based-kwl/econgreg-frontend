const { createApp, h } = Vue
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>Home page</p>' }
const About = { template: '<p>About page</p>' }
const User = { template: '<p>User page</p>' }

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/404', component: NotFound},
    {path: '/u/:id', component: User}
]

const router = VueRouter.createRouter({
  mode: "history",
  history: VueRouter.createWebHistory(),
  routes,
})
  
const app = Vue.createApp({})
app.use(router)
app.mount('#app')