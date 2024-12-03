<template>
  <div class="pageContainer">
    <div
      class="leftSection"
      :style="{ '--left-section-bg-color': backgroundColor }"
    >
      <component :is="leftContent" />
    </div>
    <div class="rightSection">
      <component :is="rightContent" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  leftContent: Object,
  rightContent: Object,
  backgroundColor: String,
});
</script>

<style>
@import '../styles/CommonPage.css';
</style>
