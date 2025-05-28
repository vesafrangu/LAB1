<template>
  <div class="login-container d-flex justify-content-center align-items-center vh-100">
    <div class="login-box shadow p-4 rounded">
      <div class="text-center mb-3">
        <img src="@/assets/Logoo.png" alt="Login" class="img-fluid login-image" />
        <h2 class="mt-2 login-title">Travelnest Login</h2>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" class="form-control" required />
        </div>
        <div class="form-group mb-3">
          <label>Password</label>
          <input type="password" v-model="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
        <div class="text-center mt-3">
          <router-link to="/register" class="register-link">Don't have an account? Register</router-link>
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
  position: relative;
}

/* Overlay */
.login-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(20, 40, 80, 0.4); /* blu natyral, pak transparent */
  z-index: 0;
}

.login-box {
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

.login-image {
  max-width: 110px;
  border-radius: 50%;
  border: 3px solid #164269; /* kontur blu i errët për imazh */
  box-shadow: 0 4px 15px rgba(22, 66, 105, 0.4);
}

.login-title {
  font-weight: 700;
  font-size: 2rem;
  color: #164269; /* blu natyral */
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
  .login-box {
    padding: 25px 15px;
  }
  .login-title {
    font-size: 1.7rem;
  }
}
</style>
