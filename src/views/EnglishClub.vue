<template>
  <div>
    <PageLayout
      :leftContent="leftContent"
      :rightContent="rightContent"
      backgroundColor="#4caf50"
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
  '/images/photo_15.jpg',
  '/images/photo_17.jpg',
  '/images/photo_18.jpg',
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
        The Vazi English Club is happy to help you brush up on your English
        skills and take it to the level you’ve always dreamed of - all under the
        guidance of experienced teachers. Among them are both native speakers
        and bilinguals. In a cozy atmosphere, over a cup of coffee, we conduct
        1.5-hour classes on a whole variety of language-related topics and
        subjects - from Grammar to Phrasal verbs, from the Conditionals to
        Sequence of Tenses, from the Passive voice to Reported speech, from
        speaking to analyzing songs and movies.
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
        apiEndpoint="/api/english_club/questions"
        title="Questions about English Club"
        :isAdmin="isAdmin"
      />
    </div>
  `,
}));
</script>

<style scoped>
@import '../styles/CommonPage.css';
</style>
