/* eslint-disable */
import log from './utils/log'
import Vue from 'vue'
import App from './App.vue'
import filters from './utils/filters'

const _log = log(true,'main');
_log('Welcome to Vue Basics');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

