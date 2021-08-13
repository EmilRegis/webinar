import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import 'material-design-icons-iconfont';
import VueSmoothScroll from 'vue3-smooth-scroll';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCarousel from 'vue-carousel';



createApp(App).use(store).use(VueAxios, axios).use(VueCarousel).use(VueSmoothScroll, {
    duration: 1000,
    updateHistory: false
}).mount('#app');
