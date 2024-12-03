<template>
  <div>
    <PageLayout
      :leftContent="leftContent"
      :rightContent="rightContent"
      backgroundColor="#51790c"
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
  '/images/photo_6.jpg',
  '/images/photo_4.jpg',
  '/images/photo_16.jpg',
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
       The Music Club at Vazi is a versatile space for hosting concerts,
        parties, and themed events. Guests are welcome to propose events that
        reflect their musical preferences, whether it’s an evening dedicated to
        the works of a favorite performer or composer, or a celebration of
        national music, such as Georgian, Russian, Ukrainian, or Belarusian, or
        any other. You can also suggest a specific musical style to shape the
        event.
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
        apiEndpoint="/api/music_club/questions"
        title="Questions about Music Club"
        :isAdmin="isAdmin"
      />
    </div>
  `,
}));
</script>

<style scoped>
@import '../styles/CommonPage.css';
</style>
