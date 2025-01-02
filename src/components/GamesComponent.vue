<template>
  <section id="games" class="games py-5">
    <div class="container">
      <h2 class="section-title text-center mb-5 text-neon">Our Games</h2>
      <div class="row">
        <div v-for="game in games" :key="game.id" class="col-md-4">
          <div class="game-card shadow">
            <img :src="game.image" :alt="game.name" class="img-fluid" />
            <h3 class="mt-3">{{ game.name }}</h3>
            <p>{{ game.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GamesComponent',
  data() {
    return {
      games: [
        { id: 1, name: 'Game 1', description: 'An epic adventure.', image: 'game1.jpg' },
        { id: 2, name: 'Game 2', description: 'Explore the unknown.', image: 'game2.jpg' },
        { id: 3, name: 'Game 3', description: 'A journey through time.', image: 'game3.jpg' }
      ]
    };
  }
};
</script>

<style scoped>
.games {
  background: #0d1117;
  color: #fff;
}

.section-title {
  font-size: 2rem;
  color: #58a6ff;
}

.game-card {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px #58a6ff;
}

.game-card img {
  border-radius: 5px;
}
</style>