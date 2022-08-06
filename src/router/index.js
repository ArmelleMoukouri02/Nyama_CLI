import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from "@/views/public/Layout.vue";
import Home from '@/views/public/Home.vue';
import Resto from '@/views/public/Resto.vue';
import Restos from '@/views/public/Restos.vue';
import Nourriture from '@/views/public/Nourriture.vue';

const routes = [
  
  {
    path: '/',
    name: 'public',
    component: PublicLayout,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/restaurants', name: 'restaurants', component: Restos },
      { path: '/resto/:id', name: 'resto', component: Resto, props: true },
      { path: '/nourriture', name: 'nourriture', component: Nourriture },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact",
})

export default router
