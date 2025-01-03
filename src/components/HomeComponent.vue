<template>
  <section id="home" class="home vh-100 d-flex flex-column justify-content-center align-items-center">
    <h1 class="text-center text-glow">Welcome to BaseX</h1>
    <p class="text-center lead">Explore the future of gaming in an advanced human era.</p>
    <button class="btn btn-neon mt-4">Get Started</button>
  </section>
</template>

<script>
export default {
  name: 'HomeComponent',
};
</script>

<style scoped>
.home {
  background: url('../assets/stars-bg.gif') center/cover no-repeat;
  color: #ffffff;
  text-align: center;
  position: relative;
}
.text-glow {
  font-size: 2.5rem;
  color: #00d9ff;
  text-shadow: 0 0 5px #00d9ff, 0 0 20px #00d9ff;
}
.btn-neon {
  background: linear-gradient(90deg, #00d9ff, #0047ab);
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  text-transform: uppercase;
  box-shadow: 0 0 10px #00d9ff;
  transition: box-shadow 0.3s;
}
.btn-neon:hover {
  box-shadow: 0 0 20px #00d9ff, 0 0 40px #00d9ff;
}
</style>