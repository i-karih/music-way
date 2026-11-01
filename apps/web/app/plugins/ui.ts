import { LinkComponentKey } from '@music-way/ui'
import { NuxtLink } from '#components'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.provide(LinkComponentKey, NuxtLink)
})
