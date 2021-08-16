import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import 'material-design-icons-iconfont';
import VueSmoothScroll from 'vue3-smooth-scroll';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCarousel from 'vue-carousel';
import VueYandexMetrika from 'vue-yandex-metrika';
const router = window.location.href;

createApp(App).use(store).use(VueAxios, axios).use(VueCarousel).use(VueSmoothScroll, {
    duration: 1000,
    updateHistory: false
}).use(VueYandexMetrika, {
    id: 84032422,
    router: router,
    env: process.env.NODE_ENV
    // other options
}).mount('#app');
