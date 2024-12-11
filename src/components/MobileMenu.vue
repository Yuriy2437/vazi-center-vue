<template>
  <div>
    <!-- Кнопка Menu, скрытая на страницах Home и Menu -->
    <button v-if="showMenuButton" class="menu-button" @click="toggleMenu">
      Menu
    </button>

    <!-- Модальное окно -->
    <div :class="['menu-modal', { show: isMenuOpen }]">
      <a href="/about" @click="closeMenu">About Us</a>
      <a href="/english_club" @click="closeMenu">English Club</a>
      <a href="/lectorium" @click="closeMenu">Lectorium</a>
      <a href="/music_club" @click="closeMenu">Music Club</a>
      <a href="/psychology_club" @click="closeMenu">Psychology Club</a>
      <a href="/kids_club" @click="closeMenu">Kids Club</a>
      <a href="/feedback" @click="closeMenu">All Feedbacks</a>
      <a href="/" @click="closeMenu">Home</a>

      <button
        @click="closeMenu"
        style="margin-top: 20px; background-color: red; color: white"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  setup() {
    const route = useRoute();

    const showMenuButton = computed(() => {
      return !['/', '/menu'].includes(route.path);
    });

    return { showMenuButton };
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
@media (max-width: 800px) {
  .menu-button {
    width: 100%;
    top: 0;
    left: 0;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    z-index: 1000;
  }

  .menu-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: blue;
    color: yellow;
    padding: 20px;
    border-radius: 10px;
    display: none;
    flex-direction: column;
    z-index: 2000;
  }

  .menu-modal.show {
    display: flex;
  }

  .menu-modal a {
    color: yellow;
    text-decoration: none;
    margin: 10px 0;
    font-size: 18px;
  }
}
</style>
