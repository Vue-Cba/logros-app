import Auth from '../Auth.vue';
import Login from '../views/Login.vue';

const AuthRoutes = {
  path: '/auth',
  meta: {
    name: {
      en: 'Login',
      es: 'Ingreso',
    },
  },
  component: Auth,
  children: [
    {
      path: '/',
      component: Login,
      meta: {
        disableLayout: true,
      },
    },
  ],
};

export default AuthRoutes;
