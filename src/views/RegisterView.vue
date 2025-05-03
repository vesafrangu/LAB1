<template>
  <div class="register-container d-flex justify-content-center align-items-center vh-100">
    <div class="register-box shadow p-4 rounded">
      <h2 class="text-center mb-3">Create an Account</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" v-model="name" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
        <div class="text-center mt-3">
          <router-link to="/">Already have an account? Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserRegisterView',
 
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },

  methods: {
    register() {
      // Ruaj të dhënat (në backend ose localStorage)
      alert('Registered! Now you can login.');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.register-container {
  background: url('@/assets/loginn.png') no-repeat center center fixed;
  background-size: cover;
}

.register-box {
  background-color: rgba(255, 255, 255, 0.9);
  max-width: 450px;
  width: 100%;
}
</style>
