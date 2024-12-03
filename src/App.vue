<template>
  <div id="app">
    <MainMenuWrapper />
    <router-view></router-view>
  </div>
</template>

<script setup>
import MainMenuWrapper from './components/MainMenuWrapper.vue';
</script>
