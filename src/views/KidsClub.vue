<template>
  <div>
    <PageLayout
      :leftContent="leftContent"
      :rightContent="rightContent"
      backgroundColor="#cc00ad"
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
  '/images/photo_2.jpg',
  '/images/photo_7.jpg',
  '/images/photo_23.jpg',
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
        The Vazi Kids Club serves two key purposes. First, during events, you
        can leave your child in the care of a responsible adult in the children
        room. Second, we offer specialized programs for behavioral therapy or
        speech therapy, where certified professionals work with your child to
        support their development.
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
        apiEndpoint="/api/kids_club/questions"
        title="Questions about Kids Club"
        :isAdmin="isAdmin"
      />
    </div>
  `,
}));
</script>

<style scoped>
@import '../styles/CommonPage.css';
</style>
