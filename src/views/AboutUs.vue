<template>
  <div class="aboutus-background d-flex justify-content-center align-items-center min-vh-100">
    <div class="aboutus-box shadow-sm animate-fade-in">
      <h3 class="text-primary mb-4 text-center aboutus-title">About Us</h3>
      <p class="aboutus-text mb-3">
        We are a team of travel experts passionate about crafting unforgettable journeys.
        Our mission is to make your journey unforgettable by providing personalized services and 24/7 support.
      </p>
      <p class="aboutus-text mb-4">
        With years of experience in the tourism industry, we partner with top service providers to bring you the best in accommodation, guided tours, and unique adventures.
      </p>
      <button class="btn btn-outline-primary w-100 reset-btn">Learn More</button>
    </div>
  </div>
</template>

<script>
import background from '@/assets/back.png';

export default {
  name: 'AboutUs',
  data() {
    return {
      backgroundImage: background,
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
      };
    },
  },
};
</script>

<style scoped>
.aboutus-background {
  position: relative;
  background-image: url('@/assets/back.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  min-height: 100vh;
}

/* Overlay me pak transparencë, si në contact */
.aboutus-background::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

/* Përmbajtja mbi overlay */
.aboutus-box {
  position: relative;
  max-width: 700px;      /* Mesatare, jo shumë e gjërë */
  background: #f1f3f5;
  border-radius: 20px;
  padding: 45px 40px;    /* Pak më shumë hapësirë brenda */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.13);
  z-index: 1;
  font-family: 'Open Sans', sans-serif;
  color:rgb(0, 0, 0);
}

.aboutus-title {
  font-family: 'Playfair Display', serif;
  font-size: 3.2rem;     /* Pak më e madhe, por jo shumë */
  font-weight: 700;
  margin-bottom: 1.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.aboutus-text {
  font-size: 1.2rem;    /* Pak më i madh për lexim më të mirë */
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

/* Butoni stil i ngjashëm me contact form */
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

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

/* Responsivitet */
@media (max-width: 768px) {
  .aboutus-box {
    padding: 25px 15px;
  }
  .aboutus-title {
    font-size: 2rem;
  }
  .aboutus-text {
    font-size: 1rem;
  }
}
</style>