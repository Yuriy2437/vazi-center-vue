<template>
  <div id="app">
    <MainMenuWrapper v-if="showMainMenu" />
    <MobileMenu v-else />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import MainMenuWrapper from './components/MainMenuWrapper.vue';
import MobileMenu from './components/MobileMenu.vue';

const showMainMenu = ref(true);

const checkScreenWidth = () => {
  showMainMenu.value = window.innerWidth >= 800;
};

onMounted(() => {
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenWidth);
});
</script>
