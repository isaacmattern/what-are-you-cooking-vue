<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>

<template>
  <div class="main-container max-w-screen-xl p-4 m-auto">
    <Navigation />
    <router-view />
  </div>
</template>

<style scoped></style>
