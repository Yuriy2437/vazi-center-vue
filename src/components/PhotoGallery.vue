<template>
  <div class="photoOverlay">
    <button class="arrowButton leftArrow" @click="handlePrevPhoto">&lt;</button>
    <div class="photoContainer">
      <img
        :src="photos[currentPhotoIndex]"
        alt="Gallery Photo"
        style="
          object-fit: contain;
          object-position: top;
          width: 100%;
          height: 100%;
        "
      />
    </div>
    <button class="arrowButton rightArrow" @click="handleNextPhoto">
      &gt;
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  photos: Array,
});

const currentPhotoIndex = ref(0);

const handlePrevPhoto = () => {
  currentPhotoIndex.value =
    currentPhotoIndex.value === 0
      ? props.photos.length - 1
      : currentPhotoIndex.value - 1;
};

const handleNextPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % props.photos.length;
};
</script>

<style>
@import '../styles/PhotoGallery.css';
</style>
