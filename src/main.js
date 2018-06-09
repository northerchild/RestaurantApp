import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import RestauranteList from './RestauranteList.vue'
import RestauranteTop from './RestauranteTop.vue'
import Contactos from './Contactos.vue'
Vue.use(VueRouter)

const routes = [
	{path: '/', component: Home},
	{path: '/home', component: Home},
	{path: '/restaurante', component: RestauranteList},
	{path: '/top/:id', name:'restaurante-destacado', component: RestauranteTop},
	{path: '/contactos', component: Contactos}
];

const router = new VueRouter({
	routes,
	mode: 'history'
})
Vue.component('home', Home);
Vue.component('restaurante', RestauranteList);
Vue.component('top', RestauranteTop);
Vue.component('contactos', Contactos);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
