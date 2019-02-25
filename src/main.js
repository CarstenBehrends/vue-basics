/* eslint-disable */
import log from './utils/log'
import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import filters from './utils/filters'

const _log = log(true,'main');
_log('Welcome to Vue Basics');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

