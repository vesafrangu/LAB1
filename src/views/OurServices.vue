<template>
  <div class="dashboard-background d-flex flex-column min-vh-100">
    <div class="container my-5 flex-grow-1">
      <h1 class="services-title">Our Services</h1>
      <div class="row g-4 justify-content-center">
        <div class="col-md-6 col-lg-3" v-for="(service, index) in services" :key="index">
          <div class="card h-100 shadow-sm animate-zoom-in card-hover service-card">
            <div class="card-body text-center d-flex flex-column">
              <i :class="service.icon" class="fs-1 text-primary mb-3"></i>
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text flex-grow-1 text-muted">{{ service.description }}</p>
              <button class="btn btn-primary mt-3 mx-auto">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurServices',
  data() {
    return {
      services: [
        {
          title: 'Customized Travel Packages',
          description: 'Tailored trips based on your interests and budget.',
          icon: 'bi bi-globe2',
        },
        {
          title: 'Hotel Booking',
          description: 'Comfortable stays at competitive rates worldwide.',
          icon: 'bi bi-house-door',
        },
        {
          title: 'Guided Tours',
          description: 'Expert-guided experiences to explore top destinations.',
          icon: 'bi bi-compass',
        },
        {
          title: '24/7 Support',
          description: 'We’re here to help anytime, anywhere.',
          icon: 'bi bi-headset',
        },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-background {
  position: relative;
  background-image: url('@/assets/back.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dashboard-background::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.container, .card {
  position: relative;
  z-index: 1;
}

.services-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  color:rgb(37, 88, 164);  /* ndryshova ngjyrën në të kaltër */
  position: relative;
}


.services-title::after {
  content: "";
  display: block;
  width: 100px;
  height: 4px;
  margin: 0.75rem auto 0;
  background: linear-gradient(90deg, #0d6efd, #6c757d);
  border-radius: 2px;
}

.service-card {
  background-color: #f1f3f5;
  border-radius: 12px;
  padding: 1.5rem 1rem;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  background-color: #e9ecef;
  transform: scale(1.04);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.card-title {
  font-weight: 600;
  font-size: 1.25rem;
  color: #343a40;
  margin-bottom: 0.75rem;
}

.card-text {
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.5;
  flex-grow: 1;
}

i.fs-1 {
  background: #ced4da;
  color: #495057;
  border-radius: 50%;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Animacionet */
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-zoom-in {
  animation: zoomIn 0.6s ease forwards;
}

/* Responsive */
@media (max-width: 768px) {
  .services-title {
    font-size: 2rem;
  }
  .container {
    padding: 0 15px;
  }
}
</style>
