// Dependencies
require('popper.js')
require('jquery')
require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSearch)
library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas";

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
