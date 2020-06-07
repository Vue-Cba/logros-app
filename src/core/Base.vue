<template>
  <Layout>
      <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from './components/layout/view/index.vue';

export default {
  name: 'Base',
  components: { // soy elfo o mago
    Layout,
  },
};
</script>
