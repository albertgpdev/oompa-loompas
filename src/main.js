// Dependencies
import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:8080/';
Vue.http.interceptors.push((request, next) => {
	next();
})


import BlockUI from 'vue-blockui';
Vue.use(BlockUI);

import {store} from '@/store/index';
Vue.config.productionTip = false

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: store.state.language,
})

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  i18n,
  router
});
