import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config} */
export default {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,vue}"],
      languageOptions: {
        globals: globals.browser,
      },
      extends: [
        // Règles recommandées pour le JavaScript pur
        pluginJs.configs.recommended,

        // Règles essentielles pour Vue.js
        ...pluginVue.configs["flat/essential"],
        "plugin:vue/vue3-recommended", // Utiliser la configuration recommandée de Vue 3

        "eslint:recommended", // Règles générales recommandées par ESLint
        "plugin:prettier/recommended", // Intégration avec Prettier pour le formatage automatique
      ],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      rules: {
        // Règles JavaScript
        "no-console": "warn", // Avertir pour les `console.log`
        "no-debugger": "warn", // Avertir pour les statements `debugger`
        "no-var": "error", // Ne pas utiliser `var`, toujours `let` ou `const`
        "prefer-const": "error", // Utiliser `const` quand une variable n'est pas réaffectée
        "eqeqeq": "error", // Toujours utiliser `===` et `!==` au lieu de `==` et `!=`
        "no-unused-vars": "warn", // Avertir pour les variables inutilisées
        "no-magic-numbers": ["warn", { "ignoreArrayIndexes": true, "ignore": [0, 1] }], // Avertir pour les nombres magiques
        "consistent-return": "error", // Assurer un retour cohérent dans les fonctions

        // Règles Vue.js
        "vue/no-unused-vars": "warn", // Avertir pour les variables inutilisées
        "vue/no-v-html": "error", // Désactiver l'utilisation de `v-html` pour éviter des vulnérabilités XSS
        "vue/no-mutating-props": "error", // Ne pas muter les props
        "vue/no-deprecated-v-bind-sync": "error", // Éviter l'utilisation de `v-bind.sync`
        "vue/require-prop-types": "error", // S'assurer que toutes les props ont des types définis
        "vue/require-default-prop": "error", // Toujours avoir une valeur par défaut pour les props
        "vue/attribute-hyphenation": ["error", "always"], // Forcer l'utilisation de tirets dans les attributs HTML
        "vue/valid-v-for": "error", // Assurer que les boucles `v-for` sont bien formées
        "vue/no-duplicate-attributes": "error", // Éviter les attributs dupliqués dans un même élément

        // Règles supplémentaires Vue 3
        "vue/no-shared-component-data": "error", // Ne pas partager de données entre composants
        "vue/require-emit-validator": "error", // Toujours valider les événements émis
        "vue/no-v-model-argument": "error", // Éviter l'utilisation de `v-model` avec un argument
        "vue/valid-v-slot": "error", // Assurer que les `v-slot` sont valides

        // Règles de style
        "semi": ["error", "always"], // Toujours utiliser des points-virgules à la fin des instructions
        "quotes": ["error", "single"], // Utiliser des guillemets simples pour les chaînes de caractères
        "indent": ["error", 2], // Utiliser des indentations de 2 espaces
        "no-trailing-spaces": "error", // Ne pas avoir d'espaces à la fin des lignes
        "max-len": ["error", { "code": 120 }], // Limiter la longueur des lignes à 120 caractères
        "object-curly-spacing": ["error", "always"], // Toujours avoir des espaces autour des accolades
        "array-bracket-spacing": ["error", "never"], // Ne pas avoir d'espaces dans les crochets des tableaux

        // Règles Prettier (si Prettier est installé)
        "prettier/prettier": [
          "error",
          {
            semi: true,
            singleQuote: true,
            trailingComma: "all",
            bracketSpacing: true,
          },
        ],
      },
    },
  ],
};
