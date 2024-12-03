<template>
  <MainMenu v-if="showMenu" />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainMenu from './MainMenu.vue';

const route = useRoute();
const showMenu = computed(() => {
  return route.path !== '/' && route.path !== '/menu';
});
</script>
