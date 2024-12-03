<template>
  <div>
    <PageLayout
      :leftContent="leftContent"
      :rightContent="rightContent"
      backgroundColor="#d331c3"
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
  '/images/photo_13.jpg',
  '/images/photo_19.jpg',
  '/images/photo_4.jpg',
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
        The Vazi Center is a multi-functional developing cultural space in
        Tbilisi. Here you can watch movies, hear lectures, attend cultural and
        music events, and even get a consultation by a professional
        psychologist. If you have children, we have a playroom carefully watched
        by an adult. You are also welcome to enjoy a complementary cup of coffee
        or tea while here.
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
        apiEndpoint="/api/about/questions"
        title="Questions about Vazi Center"
        :isAdmin="isAdmin"
      />
    </div>
  `,
}));
</script>

<style scoped>
@import '../styles/CommonPage.css';
</style>
