<template>
  <nav class="mainMenu">
    <ul>
      <li><router-link to="/about">About us</router-link></li>
      <li><router-link to="/english_club">English Club</router-link></li>
      <li><router-link to="/lectorium">Lectorium</router-link></li>
      <li><router-link to="/music_club">Music Club</router-link></li>
      <li><router-link to="/psychology_club">Psychology Club</router-link></li>
      <li><router-link to="/kids_club">Kids Club</router-link></li>
      <li><router-link to="/feedback">All feedbacks</router-link></li>
      <li><router-link to="/">Home</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
// No additional script logic needed for the navbar.
</script>

<style scoped>
@import '../styles/MainMenu.css';
</style>
