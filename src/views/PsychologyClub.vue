<template>
  <div>
    <PageLayout
      :leftContent="leftContent"
      :rightContent="rightContent"
      backgroundColor="#790c5e"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import PageLayout from '../components/PageLayout.vue';
import QuestionSection from '../components/QuestionSection.vue';
import PhotoGallery from '../components/PhotoGallery.vue';
import PhotoButtons from '../components/PhotoButtons.vue';

const showPhoto = ref(false);
const isAdmin = ref(false);

onMounted(() => {
  isAdmin.value = localStorage.getItem('isAdmin') === 'true';
});

const photos = [
  '/images/photo_10.jpg',
  '/images/photo_22.jpg',
  '/images/photo_20.jpg',
];

const setShowPhoto = (value) => {
  showPhoto.value = value;
};

const leftContent = computed(() => ({
  components: { PhotoButtons },
  setup() {
    return { setShowPhoto };
  },
  template: `
    <div>
      <p class="aboutText">
        The Psychology Club at Vazi offers a space where certified psychologists deliver insightful lectures. However, its primary focus is on providing personal and group psychological consultations and training sessions. The psychologists are available to help you manage depression, offer expert guidance on family-related issues, and assist in finding meaning and setting goals in life.
      </p>
      <PhotoButtons @setShowPhoto="setShowPhoto" />
    </div>
  `,
}));

const rightContent = computed(() => ({
  components: { PhotoGallery, QuestionSection },
  setup() {
    return { showPhoto, photos, isAdmin };
  },
  template: `
    <div>
      <PhotoGallery v-if="showPhoto" :photos="photos" />
      <QuestionSection
        apiEndpoint="/api/psychology_club/questions"
        title="Questions about Psychology Club"
        :isAdmin="isAdmin"
      />
    </div>
  `,
}));
</script>

<style scoped>
@import '../styles/CommonPage.css';
</style>
