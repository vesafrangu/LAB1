<template>
  <nav class="navbar navbar-expand-lg shadow-sm w-100" :style="navbarStyle">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img :src="logo" alt="Travelnest Logo" height="40" class="me-2" />
        <span class="fw-bold fs-4 text-light">Travelnest</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link text-light">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link text-light">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link text-light">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link text-light">Our Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link text-light">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import logoImg from '@/assets/Logoo.png';

export default {
  name: 'AppNavbar',
  data() {
    return {
      logo: logoImg,
      navbarStyle: {
        backgroundColor: '#4a4a4a',
        borderBottom: '2px solid #393e46',
      },
    };
  },
};
</script>

<style scoped>
.navbar-toggler-icon {
  filter: invert(1);
}

.navbar-nav .nav-link:hover {
  color: #f0a500;
  text-decoration: underline;
}
</style>
