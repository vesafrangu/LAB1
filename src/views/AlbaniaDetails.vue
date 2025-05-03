<template>
  <div class="albania-page">
    <div class="hero-image d-flex align-items-center justify-content-center text-center text-white">
  <h1 class="display-4 fw-bold text-primary">Discover Albania</h1>
</div>


    <div class="container py-5">
      <div class="row">
        <div class="col-lg-6 mb-4">
          <img :src="albaniaImage" class="img-fluid rounded shadow" alt="Albania Landscape" />
        </div>
        <div class="col-lg-6 text-dark"> <!-- Këtu shtohet text-dark -->
          <h2 class="text-primary">Why Visit Albania?</h2>
          <p>
            Albania offers a unique blend of turquoise beaches, rugged mountains, ancient castles, and warm hospitality. It’s a hidden gem for travelers seeking both relaxation and adventure.
          </p>
          <ul>
            <li>🏖 Stunning beaches like Ksamil & Dhermi</li>
            <li>🏔 Breathtaking mountains such as Theth & Valbona</li>
            <li>🏛 Rich history in cities like Berat & Gjirokaster</li>
          </ul>
          <button class="btn btn-light text-primary mt-3" @click="$router.push('/dashboard')">← Go Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbaniaDetails',
  data() {
    return {
      albaniaImage: new URL('@/assets/Berat.webp', import.meta.url).href
    };
  }
};
</script>

<style scoped>
.albania-page {
  background-color: #f5f5f5;
  color: #333;
  min-height: 100vh;
}

.hero-image {
  background-image: url('@/assets/Ksamil3.png');
  background-size: cover;
  background-position: center;
  height: 60vh;
  color: white;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.6);
}
</style>