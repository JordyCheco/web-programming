<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavVue from "./components/NavVue.vue";
</script>

<template>
  
<header>
  <NavVue />
</header>

<div class="container">
  <RouterView />
</div>

</template>

<style scoped>

</style>