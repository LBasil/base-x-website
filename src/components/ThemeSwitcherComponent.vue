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
        { code: 'light', label: 'Light Mode', icon: '🌞' },
        { code: 'futuristic', label: 'Futuristic Mode', icon: '🌠' },
      ],
      currentTheme: localStorage.getItem('theme') || 'light'
    };
  },
  computed: {
    currentThemeLabel() {
      const currentTheme = this.themes.find(
        (theme) => theme.code === this.currentTheme
      );
      return currentTheme ? currentTheme.label : 'Light Mode';
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
  color: #00d9ff;
  border: 2px solid #00d9ff;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 10px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.btn-theme:hover {
  background: #00d9ff;
  color: #000;
  box-shadow: 0 0 10px #00d9ff;
}

.dropdown-menu {
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #00d9ff;
  border-radius: 8px;
  box-shadow: 0 0 10px #00d9ff;
}

.dropdown-item {
  color: #ffffff;
  font-weight: bold;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;
}

.dropdown-item:hover {
  background: #00d9ff;
  color: #000;
}

.theme-icon {
  margin-right: 10px;
}
</style>
