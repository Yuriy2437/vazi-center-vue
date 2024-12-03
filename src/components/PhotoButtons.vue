<!-- <template>
  <div class="buttonContainer">
    <button @click="setShowPhoto(true)" class="photoButton">Show Photo</button>
    <button @click="setShowPhoto(false)" class="photoButton">
      Close Photo
    </button>
  </div>
</template>

<script setup>
defineProps({
  setShowPhoto: Function,
});
</script> -->

<template>
  <div class="buttonContainer">
    <button @click="$emit('setShowPhoto', true)" class="photoButton">
      Show Photo
    </button>
    <button @click="$emit('setShowPhoto', false)" class="photoButton">
      Close Photo
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['setShowPhoto']);
</script>

<style>
@import '../styles/CommonPage.css';
</style>
