<template>
  <div id="rushx-page">
    <HeaderComponent />

    <section class="rushx-hero text-center text">
      <div class="container">
        <h1>RushX</h1>
        <p class="lead">Survivez, évoluez, dominez dans un monde impitoyable.</p>
        <button class="btn btn-primary btn-lg mt-3">Jouer maintenant</button>
      </div>
    </section>

    <section class="rushx-details py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="text">L'expérience RushX</h2>
            <p class="text">
              ...
            </p>
          </div>
          <div class="col-lg-6">
            <img src="/path/to/placeholder-image.jpg" alt="RushX gameplay image" class="img-fluid rounded">
          </div>
        </div>
      </div>
    </section>

    <section class="rushx-trailer text-center py-5">
      <div class="container">
        <h2 class="text">Découvrez le trailer</h2>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/placeholder" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="rushx-screenshots py-5">
      <div class="container">
        <h2 class="text text-center">Captures d'écran</h2>
        <div class="row mt-4">
          <div class="col-md-4">
            <img src="/path/to/screenshot1.jpg" alt="Screenshot 1" class="img-fluid rounded mb-4">
          </div>
          <div class="col-md-4">
            <img src="/path/to/screenshot2.jpg" alt="Screenshot 2" class="img-fluid rounded mb-4">
          </div>
          <div class="col-md-4">
            <img src="/path/to/screenshot3.jpg" alt="Screenshot 3" class="img-fluid rounded mb-4">
          </div>
        </div>
      </div>
    </section>

    <section class="rushx-updates py-5">
      <div class="container">
        <h2 class="text text-center">Dernières mises à jour</h2>
        <ul class="list-unstyled mt-4">
          <li class="text">[Date] - Ajout d'un nouveau mode de survie.</li>
          <li class="text">[Date] - Amélioration du système d'évolution.</li>
          <li class="text">[Date] - Correction de bugs mineurs.</li>
        </ul>
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

.rushx-details img {
  box-shadow: 0 4px 6px var(--background);
}

.rushx-trailer iframe {
  width: 100%;
  height: 400px;
  border: none;
}

.rushx-screenshots img {
  transition: transform 0.3s;
}

.rushx-screenshots img:hover {
  transform: scale(1.05);
}

.text {
  color: var(--text-color);
}
</style>
