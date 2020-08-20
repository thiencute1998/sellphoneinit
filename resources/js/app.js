/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
import VueRouter from "vue-router";
import Vuex from 'vuex';
import { routes } from './route/routes';
import AppLogin from './components/app/app';
import BootstrapVue from 'bootstrap-vue';
import VueProgressBar from 'vue-progressbar';
import { store } from './store/store';

window.Vue.use(VueRouter);
window.Vue.use(BootstrapVue);
window.Vue.use(Vuex);

const options = {
  color: 'red',
  failedColor: 'blue',
  thickness: '2px',
  transition: {
    speed: '1s',
    opacity: '0.8s',
    termination: 300
  },
}
Vue.use(VueProgressBar,options);
const router = new VueRouter({
  routes : routes,
  mode : 'history',
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
});

 const app = new Vue({
     el: '#app',
     router: router,
     render: h => h(AppLogin),
     store : store
 });
