import Vue from 'vue';
import App from './App.vue';
import router from './core/router';
import './core/plugins/ant-design-vue';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
