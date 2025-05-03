<template>
  <div class="container py-4">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm rounded">
      <a class="navbar-brand font-weight-bold" href="#">Country-Scout</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Countries</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Filters -->
    <div class="bg-white rounded shadow-sm p-4 my-4">
      <div class="row g-3">
        <div class="col-md-4" v-for="(filter, index) in filters" :key="index">
          <label class="form-label">{{ filter.label }}</label>
          <select class="form-select" v-model="filter.selected">
            <option value="all">All</option>
            <option v-for="option in filter.options" :key="option" :value="option">{{ option }}</option>
          </select>
        </div>
      </div>
      <div class="text-end mt-3">
        <button class="btn btn-outline-danger" @click="resetFilters">Reset</button>
      </div>
    </div>

    <!-- Destinations -->
    <div class="row">
      <div class="col-md-6 mb-4" v-for="destination in filteredDestinations" :key="destination.id">
        <div class="card shadow-sm h-100">
          <img :src="destination.image" class="card-img-top" alt="Destination Image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ destination.name }}</h5>
            <p class="card-text flex-grow-1">{{ destination.description }}</p>
            <button class="btn btn-primary w-100 mt-auto">See more...</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      filters: [
        { label: 'Month', selected: 'all', options: ['January', 'February', 'March'] },
        { label: 'Vacation Type', selected: 'all', options: ['Beach', 'Mountain', 'City'] },
        { label: 'Expenses', selected: 'all', options: ['Low', 'Medium', 'High'] },
      ],
      destinations: [
        { id: 1, name: 'Albania', image: 'path/to/albania.jpg', description: 'Beautiful beaches and mountains.', month: 'June', type: 'Beach', expense: 'Low' },
        { id: 2, name: 'Andorra', image: 'path/to/andorra.jpg', description: 'Stunning landscapes and history.', month: 'December', type: 'Mountain', expense: 'Medium' }
      ]
    };
  },
  computed: {
    filteredDestinations() {
      return this.destinations.filter(dest => {
        const matchesMonth = this.filters[0].selected === 'all' || dest.month === this.filters[0].selected;
        const matchesType = this.filters[1].selected === 'all' || dest.type === this.filters[1].selected;
        const matchesExpense = this.filters[2].selected === 'all' || dest.expense === this.filters[2].selected;
        return matchesMonth && matchesType && matchesExpense;
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
body {
  background-color: #f8f9fa;
}
</style>     
