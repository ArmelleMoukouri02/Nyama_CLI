import { createRouter, createWebHistory } from 'vue-router'
import Accueil from "@/views/Accueil.vue"

const routes = [
  
  {
    path: '/accueil',
    name: 'AccueilNav',
    component: Accueil
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
