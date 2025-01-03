<template>
  <header class="header fixed-top">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo text-glow">BaseX</div>
      <nav class="navigation">
        <ul class="d-flex gap-4">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#games" class="nav-link">Games</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
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
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 15px 0;
  z-index: 999;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}
.logo {
  font-size: 24px;
  font-weight: bold;
  color: #00d9ff;
  animation: neon-blink 1.5s infinite alternate;
}
.nav-link {
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #00d9ff;
  text-shadow: 0 0 5px #00d9ff;
}
@keyframes neon-blink {
  0% {
    text-shadow: 0 0 5px #00d9ff, 0 0 10px #00d9ff;
  }
  100% {
    text-shadow: 0 0 20px #00d9ff, 0 0 40px #00d9ff;
  }
}
</style>