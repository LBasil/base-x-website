<template>
  <header class="header fixed-top">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo text-glow">BaseX</div>
      <button
        class="navbar-toggler d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <nav class="collapse navbar-collapse d-md-flex justify-content-end" id="navbarNav">
        <ul class="d-flex flex-column flex-md-row gap-3 align-items-center">
          <li><a href="/" class="nav-link">{{ $t('header.home') }}</a></li>
          <li><a href="#games" class="nav-link">{{ $t('header.games') }}</a></li>
          <li><a href="#about" class="nav-link">{{ $t('header.about') }}</a></li>
          <li><a href="#contact" class="nav-link">{{ $t('header.contact') }}</a></li>
          <LanguageSwitcherComponent />
          <ThemeSwitcherComponent />
        </ul>
      </nav>
    </div>
  </header>
</template>


<script>
import LanguageSwitcherComponent from './LanguageSwitcherComponent.vue';
import ThemeSwitcherComponent from './ThemeSwitcherComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    LanguageSwitcherComponent,
    ThemeSwitcherComponent
  }
};
</script>

<style scoped>

ul {
  list-style-type: none;
}

.header {
  background: var(--background);
  backdrop-filter: blur(10px);
  padding: 15px 20px;
  z-index: 999;
  box-shadow: var(--box-shadow);
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: var(--secondary-color);
  animation: neon-blink 1.5s infinite alternate;
}

/* Adjust the navbar-toggler */
.navbar-toggler {
  border: none;
  background-color: transparent;
  padding: 10px;
  margin-right: 10px;
}

.navbar-toggler-icon {
  width: 30px;
  height: 3px;
  background: var(--secondary-color);
  display: block;
  position: relative;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: "";
  width: 30px;
  height: 3px;
  background: var(--secondary-color);
  position: absolute;
  transition: transform 0.3s ease-in-out;
}

.navbar-toggler-icon::before {
  top: -10px;
}

.navbar-toggler-icon::after {
  top: 10px;
}

/* Navbar links */
.nav-link {
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--secondary-color);
  text-shadow: 0 0 5px var(--secondary-color);
}

/* Responsive adjustments */
.collapse {
  display: none; /* Hidden by default */
}

.collapse.show {
  display: block; /* Shown when toggled */
  background: var(--background);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px var(--secondary-color);
}

@media (min-width: 768px) {
  .collapse {
    display: flex !important; /* Always visible on larger screens */
    background: none;
    box-shadow: none;
    padding: 0;
  }

  .collapse ul {
    flex-direction: row;
  }
}

@keyframes neon-blink {
  0% {
    text-shadow: 0 0 5px var(--secondary-color), 0 0 10px var(--secondary-color);
  }
  100% {
    text-shadow: 0 0 20px var(--secondary-color), 0 0 40px var(--secondary-color);
  }
}
</style>
