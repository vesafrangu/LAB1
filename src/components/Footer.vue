<template>
  <footer class="text-white pt-5 pb-4 mt-auto" style="background-color:#3b3b3b;">
    <div class="container text-center text-md-start">
      <div class="row">
        <!-- About Us -->
        <div class="col-md-3 mb-4">
          <h5 class="text-uppercase fw-bold">Travelnest</h5>
          <p>Explore amazing destinations around the world. Plan unforgettable adventures with ease and comfort.</p>
        </div>

      
        <div class="col-md-3 mb-4">
          <h5 class="text-uppercase fw-bold">Quick Links</h5>
          <ul class="list-unstyled">
            <li><router-link to="/" class="text-white text-decoration-none">Home</router-link></li>
            <li><router-link to="/countries" class="text-white text-decoration-none">Countries</router-link></li>
            <li><router-link to="/contact" class="text-white text-decoration-none">Contact</router-link></li>
          </ul>
        </div>

        
        <div class="col-md-3 mb-4">
          <h5 class="text-uppercase fw-bold">Contact</h5>
          <p><i class="bi bi-envelope-fill me-2"></i>info@travelnest.com</p>
          <p><i class="bi bi-telephone-fill me-2"></i>+383 44 123 456</p>
          <p><i class="bi bi-geo-alt-fill me-2"></i>Prishtina, Kosovo</p>
        </div>


        <div class="col-md-3 mb-4">
          <h5 class="text-uppercase fw-bold">Newsletter</h5>
          <p>Subscribe to get the latest updates</p>
          <form @submit.prevent="handleSubscribe">
            <div class="input-group">
              <input type="email" v-model="email" class="form-control" placeholder="Your email" required />
              <button class="btn btn-light" style="color: #164269; font-weight: bold;" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Social Icons -->
      <div class="text-center mt-3">
        <a href="#" class="text-white me-3 fs-5"><i class="bi bi-facebook"></i></a>
        <a href="#" class="text-white me-3 fs-5"><i class="bi bi-instagram"></i></a>
        <a href="#" class="text-white me-3 fs-5"><i class="bi bi-twitter"></i></a>
        <a href="#" class="text-white fs-5"><i class="bi bi-youtube"></i></a>
      </div>

      <!-- Copyright -->
      <div class="text-center mt-3 border-top pt-3">
        <small>© 2025 Travelnest. All rights reserved.</small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    handleSubscribe() {
      if (this.email) {
        console.log("Subscribed with email:", this.email);
        this.email = ''; // opsionale
      }
    }
  }
};
</script>
