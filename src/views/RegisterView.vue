<template>
  <div class="register-container d-flex justify-content-center align-items-center vh-100">
    <div class="register-box shadow p-4 rounded">
      <div class="text-center mb-3">
        <img src="@/assets/Logoo.png" alt="Register" class="img-fluid register-image" />
        <h2 class="mt-2 register-title">Create Account</h2>
      </div>
      <form @submit.prevent="register">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" v-model="name" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" class="form-control" required />
        </div>
        <div class="form-group mb-3">
          <label>Password</label>
          <input type="password" v-model="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
        <div class="text-center mt-3">
          <router-link to="/" class="register-link">Already have an account? Login</router-link>
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
      // Logjika e regjistrimit
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
  position: relative;
}

.register-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(20, 40, 80, 0.4); 
  z-index: 0;
}

.register-box {
  position: relative;
  background-color: rgba(255, 255, 255, 0.95);
  max-width: 500px;
  width: 100%;
  border-radius: 15px;
  padding: 30px 25px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  z-index: 1;
  font-family: 'Open Sans', sans-serif;
}

.register-image {
  max-width: 110px;
  border-radius: 50%;
  border: 3px solid #164269;
  box-shadow: 0 4px 15px rgba(22, 66, 105, 0.4);
}

.register-title {
  font-weight: 700;
  font-size: 2rem;
  color: #164269;
  margin-top: 12px;
  margin-bottom: 20px;
  letter-spacing: 1.5px;
}

.form-group label {
  font-weight: 600;
  color: #164269;
  margin-bottom: 6px;
}

.form-control {
  border: 1.5px solid #164269;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #1f5bbf;
  box-shadow: 0 0 8px rgba(31, 91, 191, 0.5);
  outline: none;
}

.btn-primary {
  background-color: #164269;
  border: none;
  padding: 12px 0;
  font-size: 1.1rem;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(22, 66, 105, 0.5);
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  color: white;
}

.btn-primary:hover {
  background-color: #1f5bbf;
  transform: translateY(-2px);
  box-shadow: 0 9px 25px rgba(31, 91, 191, 0.7);
}

.register-link {
  color: #1f5bbf;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.register-link:hover {
  color: #164269;
  text-decoration: underline;
}

@media (max-width: 576px) {
  .register-box {
    padding: 25px 15px;
  }
  .register-title {
    font-size: 1.7rem;
  }
}
</style>
