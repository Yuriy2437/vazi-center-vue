<template>
  <div class="container">
    <div class="leftSection">
      <h2>Filter</h2>
      <input
        type="text"
        placeholder="filter"
        @keyup.enter="handleFilterChange"
        class="filterInput"
      />
      <h3>Filter of Questions</h3>
      <div v-if="showFilteredHeaders" class="filteredHeader">
        <span>Base</span>
        <span>Question</span>
      </div>
      <div class="filteredQuestions">
        <div v-for="q in filteredQuestions" :key="q._id" class="questionItem">
          <span>{{ q.base }}</span>
          <span v-html="highlightText(q.question, filter)"></span>
        </div>
      </div>
    </div>
    <div class="rightSection">
      <h2>List of Questions</h2>
      <div class="questionsHeader">
        <span>Base</span>
        <span>Question</span>
        <span>Action</span>
      </div>
      <div class="questions">
        <div v-for="q in questions" :key="q._id" class="questionItem">
          <span>{{ q.base }}</span>
          <span>{{ q.question }}</span>
          <button
            v-if="isAdmin"
            @click="handleDelete(q._id, q.base)"
            class="deleteButton"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const isAdmin = ref(false);
    const showFilteredHeaders = computed(
      () => store.state.filteredQuestions.length > 0
    );

    onMounted(() => {
      isAdmin.value = localStorage.getItem('isAdmin') === 'true';
      store.dispatch('fetchQuestions');
    });

    const handleFilterChange = (e) => {
      store.dispatch('filterQuestions', e.target.value);
      e.target.value = '';
    };

    const handleDelete = (id, base) => {
      if (isAdmin.value) {
        store.dispatch('deleteQuestion', { id, base });
      }
    };

    const highlightText = (text, highlight) => {
      if (!highlight) return text;
      const regex = new RegExp(`(${highlight})`, 'gi');
      return text.replace(regex, '<span class="highlight">$1</span>');
    };

    return {
      questions: computed(() => store.state.questions),
      filteredQuestions: computed(() => store.state.filteredQuestions),
      filter: computed(() => store.state.filter),
      isAdmin,
      showFilteredHeaders,
      handleFilterChange,
      handleDelete,
      highlightText,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: calc(100vh - 50px);
}

.leftSection {
  flex: 1;
  padding: 1rem;
  color: black;
  background-color: #fff9c4;
  overflow-y: auto;
}

.rightSection {
  flex: 2;
  padding: 1rem;
  background-color: #80cbc4;
  overflow-y: auto;
}

.filterInput {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.questionsHeader,
.filteredHeader {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
}

.filteredHeader {
  grid-template-columns: 1fr 2fr;
}

.questionItem {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  align-items: center;
}

.filteredQuestions .questionItem {
  grid-template-columns: 1fr 2fr;
}

.deleteButton {
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.deleteButton:hover {
  background-color: #cc0000;
}

:deep(.highlight) {
  background-color: pink;
}
</style>
