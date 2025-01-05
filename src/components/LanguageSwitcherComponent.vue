<template>
    <div class="language-switcher dropdown">
      <button
        class="btn btn-language dropdown-toggle"
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        🌐 {{ currentLanguageLabel }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="languageDropdown">
        <li
          v-for="lang in languages"
          :key="lang.code"
          class="dropdown-item"
          @click="changeLanguage(lang.code)"
        >
          <span class="flag">{{ lang.flag }}</span> {{ lang.label }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LanguageSwitcherComponent',
    data() {
      return {
        languages: [
            { code: 'fr', label: 'Français', flag: '🇫🇷' },
            { code: 'en', label: 'English', flag: '🇬🇧' },
            { code: 'es', label: 'Español', flag: '🇪🇸' },
            { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
        ],
      };
    },
    computed: {
      currentLanguageLabel() {
        const currentLang = this.languages.find(
          (lang) => lang.code === this.$i18n.locale
        );
        return currentLang ? currentLang.label : this.$i18n.locale;
      },
    },
    methods: {
      changeLanguage(langCode) {
        this.$i18n.locale = langCode;
      },
    },
  };
  </script>
  
  <style scoped>
  .language-switcher {
    position: relative;
  }
  
  .btn-language {
    background: none;
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    border-radius: 5px;
    font-weight: bold;
    padding: 5px 10px;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  
  .btn-language:hover {
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
  
  .flag {
    margin-right: 10px;
  }
  </style>
  