<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/login">About</RouterLink> -->
  <RouterView />
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,body,#app{
  height: 100%;
  width: 100%;
}

</style>
