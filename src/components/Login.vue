<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
        <button class="btn btn-primary w-100">Login</button>
      </form>
    </div>
    <div class="auth-image">
      <img :src="require('@/assets/login-image.jpg')" alt="Login Image" />
    </div>
  </div>
</template>

<script>
import authService from '@/services/authService';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      const isAuthenticated = authService.login(this.email, this.password);
      if (isAuthenticated) {
        this.$router.push('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    },
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  min-height: 100vh;
}
.auth-form {
  flex: 1;
  padding: 50px;
}
.auth-image {
  flex: 1;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}
.auth-image img {
  max-width: 100%;
  height: auto;
}
</style>
