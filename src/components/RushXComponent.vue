<template>
  <div id="rushx-page">
    <HeaderComponent />

    <section class="rushx-hero text-center text">
      <div class="container">
        <h1>RushX</h1>
        <p class="lead">Survivez, évoluez, dominez dans un monde impitoyable.</p>
        <button class="btn btn-primary btn-lg mt-3" disabled>Bientôt disponible</button>
      </div>
    </section>

    <section class="rushx-status text-center py-5">
      <div class="container">
        <h2 class="text">En préparation</h2>
        <p class="text">
          RushX est en cours de conception. Le trailer, les captures d'écran et les notes de mise à jour
          seront publiés ici dès que le jeu aura quelque chose à montrer.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';

export default {
  name: 'RushXComponent',
  components: {
    HeaderComponent
  }
};
</script>

<style scoped>
#rushx-page {
  background-color: var(--background);
  color: var(--text-color);
}

.rushx-hero {
  background: linear-gradient(to right, #001d3d, #003566);
  padding: 100px 0;
}

.text {
  color: var(--text-color);
}
</style>
