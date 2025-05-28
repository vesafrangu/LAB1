<template>
  <div class="dashboard-background d-flex flex-column min-vh-100">

    <!-- Filters and Cards -->
    <div class="container my-5 flex-grow-1">
      <!-- Filters -->
      <div class="bg-white p-4 rounded shadow-sm mb-4 animate-fade-in filters-box">
        <div class="row g-3 align-items-end">
          <div class="col-md-4" v-for="(filter, index) in filters" :key="index">
            <label class="form-label text-primary filter-label">{{ filter.label }}</label>
            <select class="form-select filter-select" v-model="filter.selected">
              <option value="all">All</option>
              <option v-for="option in filter.options" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          <div class="col-md-auto">
            <button class="btn btn-outline-danger reset-btn" @click="resetFilters">Reset</button>
          </div>
        </div>
      </div>

      <!-- Destination Cards -->
      <div class="row">
        <div class="col-md-4 mb-4" v-for="destination in filteredDestinations" :key="destination.id">
          <div class="card h-100 shadow-sm animate-zoom-in card-hover">
            <img :src="destination.image" class="card-img-top" alt="Destination Image" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-primary">{{ destination.name }}</h5>
              <p class="card-text flex-grow-1 text-muted">{{ destination.description }}</p>

              <button
                class="btn btn-outline-primary mt-auto w-100"
                @click="$router.push('/' + destination.name.toLowerCase())"
              >
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DashboardView',
  
  data() {
    return {
      logo: new URL('@/assets/Logoo.png', import.meta.url).href,
      filters: [
        {
          label: 'Month',
          selected: 'all',
          options: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        },
        {
          label: 'Vacation Type',
          selected: 'all',
          options: ['Beach', 'Mountain', 'City'],
        },
        {
          label: 'Expenses',
          selected: 'all',
          options: ['Low', 'Medium', 'High'],
        },
      ],
      destinations: [
        {
          id: 1,
          name: 'Albania',
          image: new URL('@/assets/Albania.jpg', import.meta.url).href,
          description: 'Beaches and mountains. Best in June.',
          month: 'June',
          type: 'Beach',
          expense: 'Low',
        },
        {
          id: 2,
          name: 'Andorra',
          image: new URL('@/assets/Andorra.jpg', import.meta.url).href,
          description: 'Ski paradise. Best in December.',
          month: 'December',
          type: 'Mountain',
          expense: 'Medium',
        },
        {
          id: 3,
          name: 'France',
          image: new URL('@/assets/France.webp', import.meta.url).href,
          description: 'Historic cities and countryside.',
          month: 'April',
          type: 'City',
          expense: 'High',
        },
      ],
    };
  },
  computed: {
    filteredDestinations() {
      return this.destinations.filter((destination) => {
        return this.filters.every((filter) => {
          return (
            filter.selected === 'all' ||
            destination[filter.label.toLowerCase().replace(' ', '')] === filter.selected
          );
        });
      });
    },
  },
  methods: {
    resetFilters() {
      this.filters.forEach((filter) => (filter.selected = 'all'));
    },
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

/* Overlay */
.dashboard-background::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3); /* overlay me transparencë 30% të zezë */
  z-index: 0;
}

  
.container, .filter-box, .card {
  position: relative;
  z-index: 1;
}


.filter-select {
  border: 1.5px solid #6c757d; /* ngjyrë gri e butë */
  font-weight: 600;
  color: #495057; /* ngjyrë teksti më neutrale */
  background-color: #e9ecef; /* sfond gri shumë i lehtë */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.filter-select:focus {
  border-color: #495057; /* ngjyrë më neutrale në fokus */
  box-shadow: 0 0 5px #adb5bd; /* hije më e lehtë */
  outline: none;
}

.filter-label {
  color: #495057; /* etiketat me ngjyrë gri neutrale */
  font-weight: 600;
}

.reset-btn {
  font-weight: 600;
  border-width: 1.5px;
  border-color: #6c757d;
  color: #6c757d;
  background-color: #f8f9fa;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.reset-btn:hover {
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out;
}
.animate-zoom-in {
  animation: zoomIn 0.6s ease-in-out;
}

/* Efekti Hover Zoom per Card */
.card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.card-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
.card-img-top {
  width: 100%;
  height: 300px;
  object-fit: cover;
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
