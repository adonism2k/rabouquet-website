import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/app.css'

const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/products', component: () => import('./pages/Products.vue') },
  { path: '/about', component: () => import('./pages/About.vue') },
  { path: '/contact', component: () => import('./pages/Contact.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
