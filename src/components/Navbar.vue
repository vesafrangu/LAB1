<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img :src="logo" alt="Travelnest Logo" height="40" class="me-2" />
        <span class="fw-bold fs-4 text-primary">Travelnest</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link text-primary" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link text-primary" href="#">Countries</a></li>
          <li class="nav-item">  <router-link to="/contact" class="nav-link text-primary">Contact</router-link>
</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      logo: new URL('@/assets/Logoo.png', import.meta.url).href,
    };
  },
};
</script>
