<template>
  <div class="questionSection">
    <h2 class="questionSectionTitle">{{ title }}</h2>

    <form @submit.prevent="handleSubmit" class="askQuestionForm">
      <div class="inputContainer">
        <input
          type="text"
          placeholder="Name"
          v-model="name"
          maxlength="25"
          class="nameInput"
        />
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          maxlength="25"
          class="emailInput"
        />
      </div>
      <textarea
        placeholder="Question"
        v-model="question"
        maxlength="150"
        class="questionInput"
      ></textarea>
      <button type="submit" class="sendButton">Send</button>
    </form>

    <div class="questionsList">
      <h3>List of Questions</h3>
      <div class="questionsHeader">
        <span>Name</span>
        <span>Question</span>
        <span v-if="isAdmin">Action</span>
        <span v-if="isAdmin">Answer</span>
      </div>
      <div class="questionsContent">
        <div v-for="q in questions" :key="q._id" class="questionItem">
          <span>{{ q.name }}</span>
          <span class="questionText">{{ q.question }}</span>
          <span v-if="isAdmin">
            <button @click="handleDelete(q._id)" class="deleteButton">
              Delete
            </button>
          </span>
          <span v-if="isAdmin">
            <button @click="handleAnswer(q.email)" class="answerButton">
              Answer
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useQuestions from '../composables/useQuestions';

const props = defineProps({
  apiEndpoint: String,
  title: String,
  isAdmin: Boolean,
});

const {
  name,
  email,
  question,
  questions,
  handleSubmit,
  handleDelete,
  handleAnswer,
} = useQuestions(props.apiEndpoint);
</script>

<style scoped>
@import '../styles/QuestionSection.css';
</style>
