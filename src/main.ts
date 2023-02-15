import '@unocss/reset/tailwind.css'
import './main.css'
import 'uno.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'pages-generated'
import App from './App.vue'

console.log(generatedRoutes)
// const routes = setupLayouts(generatedRoutes)
// console.log(routes)
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: generatedRoutes,
})
app.use(router).mount('#app')
