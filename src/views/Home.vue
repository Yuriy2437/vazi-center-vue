<template>
  <div class="container">
    <div class="backgroundImage"></div>
    <div class="content">
      <h1 class="title">Welcome to Vazi Center</h1>
      <div class="buttonContainer">
        <button @click="toggleAdminLogin" class="button">
          Entrance for Admin
        </button>
        <button @click="handleEntranceForAll" class="button">
          Entrance for all
        </button>
      </div>
      <div v-if="showAdminLogin" class="loginForm">
        <input type="text" placeholder="Login" v-model="login" />
        <input type="password" placeholder="Password" v-model="password" />
        <button @click="handleAdminLogin" class="button">Enter</button>
        <p v-if="errorMessage" class="errorMessage">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const showAdminLogin = ref(false);
const login = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const toggleAdminLogin = () => {
  showAdminLogin.value = !showAdminLogin.value;
};

const handleAdminLogin = () => {
  if (login.value === 'Yuriy2437' && password.value === 'Luther13579246!') {
    localStorage.setItem('isAdmin', 'true');
    router.push({ path: '/menu', query: { admin: 'true' } });
  } else {
    errorMessage.value = 'Incorrect Login or Password';
  }
};

const handleEntranceForAll = () => {
  localStorage.removeItem('isAdmin');
  router.push('/menu');
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes slowZoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.backgroundImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
  animation: zoomInOut 20s infinite alternate;
}

@keyframes zoomInOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.content {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  z-index: 1;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #ff0000;
}

.buttonContainer {
  gap: 1rem;
}

.button {
  background-color: #ff4136;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #ff725c;
}

.loginForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.loginForm input {
  margin-bottom: 0.5rem;
  padding: 5px;
  width: 200px;
}

.errorMessage {
  color: #ff4136;
  margin-top: 0.5rem;
}
</style>
