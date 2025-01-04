<template>
  <section id="games" class="games py-5">
    <div class="container">
      <h2 class="text-center text-glow">Our Games</h2>
      <div class="row mt-4">
        <div v-for="game in games" :key="game.id" class="col-md-4 mb-4">
          <div class="game-card p-3">
            <img :src="game.image" :alt="game.name" class="img-fluid rounded">
            <h3 class="mt-3">{{ game.name }}</h3>
            <p>{{ game.description }}</p>
            <!-- Ajout du lien vers la page du jeu -->
            <router-link
              v-if="game.id === 1"
              :to="'/rushx'"
              class="btn btn-outline-primary mt-2"
            >
              Explore {{ game.name }}
            </router-link>
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
        {
          id: 1,
          name: 'RushX',
          description: 'Survive the ultimate scientific experiment.',
          image: '/assets/game1.jpg',
        },
        {
          id: 2,
          name: 'Game 2',
          description: 'Explore the unknown.',
          image: '/assets/game2.jpg',
        },
        {
          id: 3,
          name: 'Game 3',
          description: 'A journey through time.',
          image: '/assets/game3.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.games {
  background: #0d1117;
  color: #ffffff;
}
.game-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00d9ff;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.game-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px #00d9ff;
}
.game-card h3 {
  color: #00d9ff;
}
</style>
