import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import RestauranteList from './RestauranteList.vue'
import RestauranteTop from './RestauranteTop.vue'
import Contactos from './Contactos.vue'
Vue.component('home', Home);
Vue.component('restaurante', RestauranteList);
Vue.component('top', RestauranteTop);
Vue.component('contactos', Contactos);
new Vue({
  el: '#app',
  render: h => h(App)
})
