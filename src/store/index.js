import { createStore } from 'vuex';

export default createStore({
  state: {
    questions: [],
    filteredQuestions: [],
    filter: '',
  },
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions;
    },
    setFilteredQuestions(state, questions) {
      state.filteredQuestions = questions;
    },
    setFilter(state, filter) {
      state.filter = filter;
    },
  },
  actions: {
    async fetchQuestions({ commit }) {
      const collections = [
        'about',
        'english_club',
        'lectorium',
        'music_club',
        'psychology_club',
        'kids_club',
      ];
      try {
        const allQuestions = await Promise.all(
          collections.map(async (collection) => {
            const response = await fetch(`/api/${collection}/questions`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data.map((q) => ({ ...q, base: collection }));
          })
        );
        commit('setQuestions', allQuestions.flat());
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    },
    filterQuestions({ commit, state }, newFilter) {
      commit('setFilter', newFilter);
      const filtered = state.questions.filter((q) =>
        q.question.toLowerCase().includes(newFilter.toLowerCase())
      );
      commit('setFilteredQuestions', filtered);
    },
    async deleteQuestion({ commit, state }, { id, base }) {
      try {
        const response = await fetch(`/api/${base}/questions/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const updatedQuestions = state.questions.filter((q) => q._id !== id);
        commit('setQuestions', updatedQuestions);
      } catch (error) {
        console.error('Error deleting question:', error);
      }
    },
  },
});
