<template>
  <header class="header glass-effect">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo text-neon">BaseX</div>
      <nav class="navigation">
        <ul class="d-flex list-unstyled m-0">
          <li><a href="#home">Home</a></li>
          <li><a href="#games">Games</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 30px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #58a6ff;
  text-shadow: 0 0 5px #58a6ff, 0 0 10px #58a6ff;
}

.navigation ul {
  display: flex;
  gap: 15px;
}

.navigation a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s;
}

.navigation a:hover {
  color: #58a6ff;
  transform: scale(1.1);
}
</style>