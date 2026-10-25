import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import importNewlines from 'eslint-plugin-import-newlines'
import stylistic from '@stylistic/eslint-plugin'

// Nuxt/Vue auto-imports
const nuxtGlobals = {
  // Vue
  ref: 'readonly',
  computed: 'readonly',
  reactive: 'readonly',
  watch: 'readonly',
  watchEffect: 'readonly',
  onMounted: 'readonly',
  onUnmounted: 'readonly',
  onBeforeMount: 'readonly',
  onBeforeUnmount: 'readonly',
  toRef: 'readonly',
  toRefs: 'readonly',
  inject: 'readonly',
  provide: 'readonly',
  defineProps: 'readonly',
  defineEmits: 'readonly',
  defineExpose: 'readonly',
  defineModel: 'readonly',
  defineSlots: 'readonly',
  withDefaults: 'readonly',
  useId: 'readonly',
  nextTick: 'readonly',

  // Nuxt
  useRoute: 'readonly',
  useRouter: 'readonly',
  useHead: 'readonly',
  useFetch: 'readonly',
  useAsyncData: 'readonly',
  useLazyFetch: 'readonly',
  useLazyAsyncData: 'readonly',
  useNuxtApp: 'readonly',
  useRuntimeConfig: 'readonly',
  useState: 'readonly',
  useCookie: 'readonly',
  useColorMode: 'readonly',
  definePageMeta: 'readonly',
  defineNuxtConfig: 'readonly',
  navigateTo: 'readonly',
  abortNavigation: 'readonly',
  createError: 'readonly',
  showError: 'readonly',
  clearError: 'readonly',

  // Custom composables (add yours here)
  useUserStore: 'readonly',

  // Browser
  console: 'readonly',
}

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.nuxt/**',
      '**/.output/**',
      '**/dist/**',
      '**/.nitro/**',
      '**/.cache/**',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: nuxtGlobals,
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    plugins: {
      'import-newlines': importNewlines,
      '@stylistic': stylistic,
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // Vue
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/script-indent': ['error', 'tab', { baseIndent: 1 }],
      'vue/html-indent': ['error', 'tab', { baseIndent: 1 }],

      // General
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-unused-vars': 'off',

      // Разбивка импортов: больше 2 — каждый с новой строки
      'import-newlines/enforce': ['error', {
 items: 2,
'max-len': 1000 
}],

      // Разбивка свойств объекта: каждое с новой строки (если объект multiline)
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],

      // Форматирование деструктуризации: 3+ свойств — каждое с новой строки
      'object-curly-newline': ['error', {
        ObjectExpression: {
 minProperties: 3,
multiline: true,
consistent: true 
},
        ObjectPattern: {
 minProperties: 3,
multiline: true,
consistent: true 
},
        ImportDeclaration: {
 minProperties: 3,
multiline: true,
consistent: true 
},
        ExportDeclaration: {
 minProperties: 3,
multiline: true,
consistent: true 
},
      }],
          },
  },
]
