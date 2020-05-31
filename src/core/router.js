import Vue from 'vue';
import VueRouter from 'vue-router';
import Base from './Base.vue';
import Login from './Login.vue';
import ModulesRouter from '../modules/main.router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Base,
    children: ModulesRouter,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
