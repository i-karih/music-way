import eslint from '@eslint/js'
import prettierConfig from '@vue/eslint-config-prettier/skip-formatting'
import vueTsConfig from '@vue/eslint-config-typescript'
import gitignore from 'eslint-config-flat-gitignore'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import regexp from 'eslint-plugin-regexp'
import sonarjs from 'eslint-plugin-sonarjs'
import unicorn from 'eslint-plugin-unicorn'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

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
	h: 'readonly',

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
	// Игнорирование файлов из .gitignore
	gitignore(),
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

	// Базовые конфиги
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...vue.configs['flat/recommended'],
	...vueTsConfig(),

	// Плагины качества кода
	sonarjs.configs.recommended,
	regexp.configs['flat/recommended'],

	// Unicorn
	{
		plugins: { unicorn },
		rules: {
			'unicorn/filename-case': [
				'error',
				{
					cases: {
						camelCase: true,
						pascalCase: true,
						kebabCase: true,
					},
					ignore: ['^UI$'],
				},
			],
			'unicorn/no-null': 'off',
			'unicorn/prevent-abbreviations': 'off',
			'unicorn/no-array-reduce': 'off',
			'unicorn/no-array-for-each': 'off',
			'unicorn/prefer-module': 'off',
			'unicorn/prefer-top-level-await': 'off',
		},
	},

	// Perfectionist (сортировка импортов)
	{
		plugins: { perfectionist },
		rules: {
			'perfectionist/sort-imports': [
				'error',
				{
					type: 'natural',
					order: 'asc',
					groups: [
						'type',
						['builtin', 'external'],
						'internal',
						['parent', 'sibling', 'index'],
						'unknown',
					],
					internalPattern: ['^@music-way/', '^~/'],
				},
			],
			'perfectionist/sort-named-imports': [
				'error',
				{ type: 'natural', order: 'asc' },
			],
			'perfectionist/sort-named-exports': [
				'error',
				{ type: 'natural', order: 'asc' },
			],
		},
	},

	// Глобальные переменные Nuxt
	{
		languageOptions: {
			globals: nuxtGlobals,
		},
	},

	// Парсер для .vue файлов
	{
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},

	// Правила проекта
	{
		rules: {
			// TypeScript
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-explicit-any': 'warn',

			// Vue
			'vue/multi-word-component-names': 'off',
			'vue/no-v-html': 'off',
			'vue/require-default-prop': 'off',

			// General
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',
			'no-unused-vars': 'off',
			'no-undef': 'off', // TypeScript handles this

			// SonarJS — отключаем слишком строгие
			'sonarjs/cognitive-complexity': 'off',
			'sonarjs/no-duplicate-string': 'off',
			'sonarjs/todo-tag': 'off',
		},
	},

	// Prettier — в конце, чтобы переопределить конфликтующие правила
	prettierConfig,
	pluginPrettier,
]
