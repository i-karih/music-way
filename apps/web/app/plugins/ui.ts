import { NuxtLink } from '#components'

import { LinkComponentKey } from '@music-way/ui'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.provide(LinkComponentKey, NuxtLink)
})
