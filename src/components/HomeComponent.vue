<template>
  <section id="home" class="home d-flex flex-column justify-content-center align-items-center">
    <h1 class="text-glow">Welcome to BaseX</h1>
    <p class="tagline">Explore the future of gaming in an advanced human era.</p>
    <button class="btn btn-primary btn-lg mt-4">Get Started</button>
  </section>
</template>

<script>
export default {
  name: 'HomeComponent',
};
</script>

<style scoped>
.home {
  height: 100vh;
  background: radial-gradient(circle, #020202, #0d1117);
  color: #fff;
  text-align: center;
  animation: backgroundMove 15s infinite;
}

.text-glow {
  font-size: 3rem;
  font-weight: bold;
  color: #58a6ff;
  text-shadow: 0 0 10px #58a6ff, 0 0 20px #58a6ff;
}

.tagline {
  font-size: 1.2rem;
  margin-top: 15px;
  color: #ccc;
}

@keyframes backgroundMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>