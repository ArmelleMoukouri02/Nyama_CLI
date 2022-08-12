import { createRouter, createWebHistory } from 'vue-router'

//import des composante public
import PublicLayout from "@/views/public/Layout.vue";
import Home from '@/views/public/Home.vue';
import Resto from '@/views/public/Resto.vue';
import Restos from '@/views/public/Restos.vue';
import Checkout from '@/views/public/Checkout.vue';

import { authGuard } from "@/helpers/auth-guard";
// localStorage.setItem('token', 'david')

//import des composantes  tableau de board
import AdminLayout from '@/views/admin/Layout.vue';
import Dashboard from '@/views/admin/Dashboard.vue';
import ProductIndex from '@/views/admin/product/ProductIndex.vue';
import ProductAdd from '@/views/admin/product/ProductAdd.vue';
import ProductEdit from '@/views/admin/product/ProductEdit.vue';
import RestoList from '@/views/admin/restaurants/RestoList.vue';
import CommandeIndex from '@/views/admin/commande/CommandeIndex.vue';
import CommandeEdit from '@/views/admin/commande/CommandeEdit.vue';

import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

const routes = [
  
  {
    path: '/',
    name: 'public',
    component: PublicLayout,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/restaurants', name: 'restaurants', component: Restos },
      { path: '/resto/:id', name: 'resto', component: Resto, props: true },
      { path: '/checkout', name: 'checkout', component: Checkout },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    children: [
      { path: '/dashboard', name: 'dashboard', component: Dashboard },
      { path: '/index', component: ProductIndex },
      { path: '/productAdd', component: ProductAdd },
      { path: '/product/edit/:id', component: ProductEdit, props: true },
      { path: '/list', component: RestoList },

      { path: '/commande', component: CommandeIndex },
      { path: '/commande/edit/:id', component: CommandeEdit, props: true },

    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/register",
    name: "register",
    component: Register,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact",
});

router.beforeEach((to, from, next) => {
  console.log(to);
  if(to.matched[0].name == 'admin'){
      authGuard()
  }
  next();
})

export default router
