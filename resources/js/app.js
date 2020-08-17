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

window.Vue.use(VueRouter);
window.Vue.use(BootstrapVue);
window.Vue.use(Vuex);

const options = {
  color: 'blue',
  failedColor: 'red',
  thickness: '3px',
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
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('app-main', require('./components/app/app.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 const app = new Vue({
     el: '#app',
     router: router,
     render: h => h(AppLogin),
 });
