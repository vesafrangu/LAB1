<template>
  <div class="contact-background d-flex flex-column min-vh-100">

    <div class="container my-5 flex-grow-1">
      <div class="row">
        <!-- Forma -->
        <div class="col-md-6">
          <div class="form-container shadow-sm animate-fade-in">
            <h3 class="contact-title text-primary mb-4 text-center">Contact Us</h3>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label filter-label">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="form-control filter-select"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label filter-label">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="form-control filter-select"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label filter-label">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-control filter-select"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary w-100 reset-btn">
                Send
              </button>
            </form>

            <div v-if="submitted" class="alert alert-success mt-3 text-center">
              Mesazhi u dërgua me sukses!
            </div>
          </div>
        </div>

        <!-- Lokacioni per foto -->
        <div class="col-md-6">
          <div class="location-image shadow-sm rounded animate-zoom-in">
            <img src="@/assets/location.jpg" alt="Location" class="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false,
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

.contact-background {
  position: relative;
  background-image: url('@/assets/back.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Overlay */
.contact-background::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

/* Permbajtja mbi overlay */
.container, .form-container, .location-image {
  position: relative;
  z-index: 1;
}

.form-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  margin: auto;
}

.contact-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.filter-select {
  border: 1.5px solid #6c757d;
  font-weight: 600;
  color: #495057;
  background-color: #e9ecef;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.filter-select:focus {
  border-color: #495057;
  box-shadow: 0 0 5px #adb5bd;
  outline: none;
}

.filter-label {
  color: #495057;
  font-weight: 600;
}

.reset-btn {
  font-weight: 600;
  border-width: 1.5px;
  border-color: #0d6efd;
  color: #0d6efd;
  background-color: #f8f9fa;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.reset-btn:hover {
  background-color: #0d6efd;
  color: white;
  border-color: #0d6efd;
}

/* Animacionet */
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

/* Foto lokacioni */
.location-image {
  margin-top: 0;
  position: relative;
  overflow: hidden;
  height: 480px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.location-image img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: 10px;
}

body {
  background-color: #fefefe;
  font-family: 'Segoe UI', sans-serif;
}
</style>
