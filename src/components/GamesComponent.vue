<template>
  <section id="games" class="games py-5">
    <div class="container">
      <h2 class="text-center text-glow">{{ $t('games.game_title') }}</h2>
      <div class="row mt-4">
        <div v-for="game in games" :key="game.id" class="col-md-4 mb-4">
          <div class="game-card p-3">
            <img :src="game.image" :alt=$t(game.name) class="img-fluid rounded">
            <h3 class="mt-3">{{ $t(game.name) }}</h3>
            <p>{{ $t(game.description) }}</p>
            <router-link
              :to="game.href"
              class="btn btn-outline-primary mt-2"
            >
              {{ $t('games.explore') }} {{ $t(game.name) }}
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
          name: 'games.rushx.name',
          description: 'games.rushx.description',
          image: '/assets/game1.jpg',
          href: '/rushx'
        },
        {
          id: 2,
          name: 'games.game2.name',
          description: 'games.game2.description',
          image: '/assets/game2.jpg',
          href: '/'
        },
        {
          id: 3,
          name: 'games.game3.name',
          description: 'games.game3.description',
          image: '/assets/game3.jpg',
          href: '/'
        }
      ],
    };
  },
};
</script>

<style scoped>
.games {
  background: var(--background);
  color: var(--text-color);
}
.game-card {
  background: var(--background);
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.game-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--secondary-color);
}
.game-card h3 {
  color: var(--secondary-color);
}
</style>
