import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from "@/views/public/Layout.vue";
import Home from '@/views/public/Home.vue';
import Resto from '@/views/public/Resto.vue';
import Nourriture from '@/views/public/Nourriture.vue';

const routes = [
  
  {
    path: '/',
    name: 'public',
    component: PublicLayout,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/restaurant', name: 'restaurant', component: Resto },
      { path: '/nourritures', name: 'nourritures', component: Nourriture },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
