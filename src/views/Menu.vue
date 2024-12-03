<template>
  <div class="container">
    <div class="leftSection">
      <h1 class="title">Menu</h1>
      <ul class="menuList">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="menuItem"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="$router.push(item.path)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="rightSection">
      <img
        src="/images/page2.jpeg"
        alt="Menu background"
        class="backgroundImage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = ref([
  { name: 'About us', path: '/about' },
  { name: 'English Club', path: '/english_club' },
  { name: 'Lectorium', path: '/lectorium' },
  { name: 'Music Club', path: '/music_club' },
  { name: 'Psychology Club', path: '/psychology_club' },
  { name: 'Kids room', path: '/kids_room' },
  { name: 'All feedbacks', path: '/feedback' },
]);
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientBackground {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.container {
  display: flex;
  min-height: 100vh;
}

.leftSection {
  flex: 1;
  padding: 2rem;
  background: linear-gradient(45deg, #4caf50, #45a049, #4caf50);
  background-size: 200% 200%;
  animation: gradientBackground 10s ease infinite;
}

.rightSection {
  flex: 2;
  position: relative;
  overflow: hidden;
}

.title {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease-out;
}

.menuList {
  list-style-type: none;
  padding: 0;
}

.menuItem {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  color: #ffffff;
  opacity: 0;
  animation: fadeInUp 0.5s ease-out forwards;
}

.menuItem:hover {
  color: #ffff00;
}

.backgroundImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: zoomIn 20s ease infinite alternate, fadeIn 1s ease-out;
}
</style>
