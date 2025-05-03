<template>
  <div class="login-container d-flex justify-content-center align-items-center vh-100">
    <div class="login-box shadow p-4 rounded">
      <div class="text-center mb-3">
        <img src="@/assets/Logoo.png" alt="Login" class="img-fluid login-image" />
        <h2 class="mt-2">Travelnest Login</h2>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
        <div class="text-center mt-3">
          <router-link to="/register">Don't have an account? Register</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import authService from '@/services/authService';

export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const isAuthenticated = authService.login(this.email, this.password);
      if (isAuthenticated) {
        localStorage.setItem('authToken', 'true');
        this.$router.push('/dashboard');
      } else {
        alert('Invalid login!');
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  background: url('@/assets/loginn.png') no-repeat center center fixed;
  background-size: cover;
}

.login-box {
  background-color: rgba(255, 255, 255, 0.9);
  max-width: 400px;
  width: 100%;
}

.login-image {
  max-width: 120px;
  border-radius: 50%;
}
</style>
