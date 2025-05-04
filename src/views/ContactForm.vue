<template>
  <div class="contact-background d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <Navbar />

    <!-- Kontakt Form dhe Foto Lokacioni -->
    <div class="container my-5 flex-grow-1">
      <div class="row">
        <!-- Kolona për Formën -->
        <div class="col-md-6">
          <div class="form-container shadow">
            <h3 class="text-center mb-4">Contact us</h3>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" v-model="form.name" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" v-model="form.email" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" v-model="form.message" class="form-control" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">Dërgo</button>
            </form>

            <div v-if="submitted" class="alert alert-success mt-3 text-center">
              Mesazhi u dërgua me sukses!
            </div>
          </div>
        </div>

        <!-- Kolona për Foto Lokacioni -->
        <div class="col-md-6">
          <div class="location-image shadow-lg rounded">
            <img src="@/assets/location.jpg" alt="Location" class="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import backgroundImage from '@/assets/backk.png'; // importi i figurës për sfondin

export default {
  name: "ContactForm",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false,
      backgroundStyle: {
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        paddingTop: '50px' // hapësirë lart për të ndihmuar që form-container të jetë i dukshëm
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
      this.submitted = true;
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-background {
  background-image: url('@/assets/backk.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}

/* Form container */
.form-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 50px; /* Hapësirë për Footer */
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out;
}
.animate-zoom-in {
  animation: zoomIn 0.6s ease-in-out;
}

/* Hover Zoom Effect for Card */
.card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.card-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.card-img-top {
  width: 100%;
  height: 300px; /* Adjust the height as per your preference */
  object-fit: cover; /* This ensures images are cropped and fit the container */
  border-radius: 0.25rem;
}

footer a:hover {
  text-decoration: underline;
}

body {
  background-color: #fefefe;
  font-family: 'Segoe UI', sans-serif;
}

/* Foto Lokacioni */
.location-image {
  margin-top: 100px;
  position: relative;
  overflow: hidden;
  height: 480px; /* Gjatësia e imazhit të barabartë me formularin */
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.2); /* Hija e imazhit për ta dalluar nga backgroundi */
}

.location-image img {
  width: 100%;
  height: 480px; /* Sigurohuni që imazhi të ketë të njëjtën gjatësi me formën */
  object-fit: cover; /* Imazhi ruan proporcioni dhe mbulon hapësirën e përcaktuar */
  border-radius: 10px; /* Rrethimi i imazhit për të krijuar një pamje më të bukur */
}
</style>
