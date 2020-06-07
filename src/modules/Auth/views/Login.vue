<template>
<div>
  <a-input ref="userNameInput" v-model="userName" placeholder="User name">
    <a-icon slot="prefix" type="user" />
    <a-tooltip slot="suffix" title="Extra information">
      <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
    </a-tooltip>
  </a-input>
  <a-input ref="userNameInput" v-model="password" placeholder="Password">
    <a-icon slot="prefix" type="lock" />
    <a-tooltip slot="suffix" title="Extra information">
      <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
    </a-tooltip>
  </a-input>
</div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      userName: '',
    };
  },
  mounted() {
  },
};
</script>

<style>

</style>
