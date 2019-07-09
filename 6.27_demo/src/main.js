import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/icon.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Vant);
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
