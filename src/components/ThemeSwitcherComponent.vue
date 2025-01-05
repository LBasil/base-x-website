<template>
  <div class="theme-switcher dropdown">
    <button
      class="btn btn-theme dropdown-toggle"
      type="button"
      id="themeDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      🌙 {{ currentThemeLabel }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="themeDropdown">
      <li
        v-for="theme in themes"
        :key="theme.code"
        class="dropdown-item"
        @click="changeTheme(theme.code)"
      >
        <span class="theme-icon">{{ theme.icon }}</span> {{ theme.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        { code: 'futuristic', label: 'Futuristic Mode', icon: '🌠' },
        { code: 'light', label: 'Light Mode', icon: '🌞' },
      ],
      currentTheme: localStorage.getItem('theme') || 'futuristic'
    };
  },
  computed: {
    currentThemeLabel() {
      const currentTheme = this.themes.find(
        (theme) => theme.code === this.currentTheme
      );
      return currentTheme ? currentTheme.label : 'Futuristic Mode';
    },
  },
  mounted() {
    document.body.setAttribute('data-theme', this.currentTheme);
  },
  methods: {
    changeTheme(themeCode) {
      this.currentTheme = themeCode;
      document.body.setAttribute('data-theme', this.currentTheme);
      localStorage.setItem('theme', this.currentTheme);
    },
  },
};
</script>

<style scoped>
.theme-switcher {
  position: relative;
}

.btn-theme {
  background: none;
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 10px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.btn-theme:hover {
  background: var(--secondary-color);
  color: var(--text-color);
  box-shadow: 0 0 10px var(--secondary-color);
}

.dropdown-menu {
  background: var(--background);
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  box-shadow: 0 0 10px var(--secondary-color);
}

.dropdown-item {
  color: var(--text-color);
  font-weight: bold;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;
}

.dropdown-item:hover {
  background: var(--secondary-color);
  color: var(--text-color);
}

.theme-icon {
  margin-right: 10px;
}
</style>
