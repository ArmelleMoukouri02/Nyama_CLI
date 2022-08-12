import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";


createApp(App).use(store).use(router).mount('#app')
