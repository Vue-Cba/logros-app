import Example from '../Example.vue';
import ExampleChildren from '../views/ExampleChildren.vue';

const ExampleRoutes = {
  path: '/Example',
  meta: {
    name: {
      en: 'Example',
      es: 'Ejemplo',
    },
  },
  component: Example,
  children: [
    {
      path: '/',
      component: ExampleChildren,
      meta: {
        name: { en: 'Children', es: 'Hijo' },
      },
    },
  ],
};

export default ExampleRoutes;
