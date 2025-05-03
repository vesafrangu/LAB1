<template>
  <div class="dashboard-background d-flex flex-column min-vh-100">
    <!-- Navbar -->
        <Navbar />


    <!-- Filters and Cards -->
    <div class="container my-5 flex-grow-1">
      <!-- Filters -->
      <div class="bg-white p-4 rounded shadow-sm mb-4 animate-fade-in">
        <div class="row g-3 align-items-end">
          <div class="col-md-4" v-for="(filter, index) in filters" :key="index">
            <label class="form-label text-secondary">{{ filter.label }}</label>
            <select class="form-select" v-model="filter.selected">
              <option value="all">All</option>
              <option v-for="option in filter.options" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          <div class="col-md-auto">
            <button class="btn btn-outline-danger" @click="resetFilters">Reset</button>
          </div>
        </div>
      </div>

      <!-- Destination Cards -->
      <div class="row">
        <div class="col-md-4 mb-4" v-for="destination in filteredDestinations" :key="destination.id">
          <div class="card h-100 shadow-sm animate-zoom-in card-hover">
            <img :src="destination.image" class="card-img-top" alt="Destination Image">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-primary">{{ destination.name }}</h5>
              <p class="card-text flex-grow-1 text-muted">{{ destination.description }}</p>
<!-- See more button -->
<button
  class="btn btn-primary mt-auto w-100"
  v-if="destination.name === 'Albania'"
  @click="$router.push('/albania')"
>
  See more...
</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'DashboardView',
   components: {
    Navbar,
    Footer
  },
  data() {
    return {
      logo: new URL('@/assets/Logoo.png', import.meta.url).href,
      filters: [
        { label: 'Month', selected: 'all', options: ['January', 'February', 'March', 'April', 'May', 'June'] },
        { label: 'Vacation Type', selected: 'all', options: ['Beach', 'Mountain', 'City'] },
        { label: 'Expenses', selected: 'all', options: ['Low', 'Medium', 'High'] }
      ],
      destinations: [
        { id: 1, name: 'Albania', image: new URL('@/assets/Albania.jpg', import.meta.url).href, description: 'Beaches and mountains. Best in June.', month: 'June', type: 'Beach', expense: 'Low' },
        { id: 2, name: 'Andorra', image: new URL('@/assets/Andorra.jpg', import.meta.url).href, description: 'Ski paradise. Best in December.', month: 'December', type: 'Mountain', expense: 'Medium' },
        { id: 3, name: 'France', image: new URL('@/assets/France.webp', import.meta.url).href, description: 'Historic cities and countryside.', month: 'April', type: 'City', expense: 'High' },
      ]
    };
  },
  computed: {
    filteredDestinations() {
      return this.destinations.filter(destination => {
        return this.filters.every(filter => {
          return filter.selected === 'all' || destination[filter.label.toLowerCase()] === filter.selected;
        });
      });
    }
  },
  methods: {
    resetFilters() {
      this.filters.forEach(filter => filter.selected = 'all');
    }
  }
};
</script>

<style scoped>
.dashboard-background {
  background-image: url('@/assets/backk.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
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
</style>