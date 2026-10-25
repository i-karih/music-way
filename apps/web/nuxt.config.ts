// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBaseUrl: '',
    },
  },
  app: {
    head: {
      title: 'Music Way — ваш музыкальный путь',
      meta: [
        {
          name: 'description',
          content:
            'Платформа для музыкантов и преподавателей. Храните историю развития в одном месте — даже при смене педагога.',
        },
      ],
      link: [{
 rel: 'icon',
type: 'image/svg+xml',
href: '/favicon.svg' 
}],
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  css: ['@fontsource/golos-ui/400.css', '@fontsource/golos-ui/600.css', '~/assets/css/main.scss'],
  vite: {
    plugins: [tsconfigPaths()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_mixins.scss" as *;',
        },
      },
    },
  },
})
