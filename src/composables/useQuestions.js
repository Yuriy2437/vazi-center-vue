import { ref, onMounted } from 'vue';

export default function useQuestions(apiEndpoint) {
  const name = ref('');
  const email = ref('');
  const question = ref('');
  const questions = ref([]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      questions.value = await response.json();
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          question: question.value,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await response.json();
      name.value = '';
      email.value = '';
      question.value = '';
      await fetchQuestions();
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiEndpoint}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await fetchQuestions();
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleAnswer = (email) => {
    window.location.href = `mailto:${email}`;
  };

  onMounted(fetchQuestions);

  return {
    name,
    email,
    question,
    questions,
    handleSubmit,
    handleDelete,
    handleAnswer,
  };
}
