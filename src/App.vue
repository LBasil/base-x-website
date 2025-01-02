<template>
  <div id="app">
    <HeaderComponent />
    <HomeComponent />
    <GamesComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import GamesComponent from './components/GamesComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    GamesComponent,
    FooterComponent
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background: #121212;
  color: #ffffff;
}
</style>