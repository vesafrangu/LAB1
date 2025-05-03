<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Name</label>
          <input v-model="name" type="text" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
        <button class="btn btn-success w-100">Register</button>
      </form>
    </div>
    <div class="auth-image">
      <img :src="require('@/assets/Albania.jpg')" alt="Register Image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleRegister() {
      // Logjika për regjistrim
      // Pas suksesit:
      this.$router.push('/dashboard');
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