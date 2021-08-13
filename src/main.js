import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

const isDev = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

Vue.config.productionTip = false;
Vue.config.silent = !isDev; // true in production
Vue.config.devtools = !!isDev; // false in production

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
