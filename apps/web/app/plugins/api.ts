import type { $Fetch } from 'ofetch'

import { API_PREFIX } from '@/constants/api'

declare module '#app' {
	interface NuxtApp {
		$api: $Fetch
	}
}

export default defineNuxtPlugin(() => {
	const accessToken = useCookie('access_token')
	const refreshToken = useCookie('refresh_token')

	let isRefreshing = false
	let refreshPromise: Promise<boolean> | null = null

	async function doRefresh(): Promise<boolean> {
		if (!refreshToken.value) {
			return false
		}

		try {
			const response = await $fetch<{
				accessToken: string
				refreshToken: string
			}>('/auth/refresh', {
				baseURL: API_PREFIX,
				method: 'POST',
				body: { refreshToken: refreshToken.value },
			})

			accessToken.value = response.accessToken
			refreshToken.value = response.refreshToken
			return true
		} catch {
			accessToken.value = null
			refreshToken.value = null
			return false
		}
	}

	async function handleRefresh(): Promise<boolean> {
		if (isRefreshing && refreshPromise) {
			return refreshPromise
		}

		isRefreshing = true
		refreshPromise = doRefresh().finally(() => {
			isRefreshing = false
			refreshPromise = null
		})

		return refreshPromise
	}

	const api = $fetch.create({
		baseURL: API_PREFIX,

		onRequest({ options }) {
			if (accessToken.value) {
				options.headers.set('Authorization', `Bearer ${accessToken.value}`)
			}
		},

		async onResponseError({ response, options, request }) {
			if (
				response.status === 401 &&
				!request.toString().includes('/auth/refresh')
			) {
				const refreshed = await handleRefresh()

				if (refreshed) {
					// Повторяем оригинальный запрос с новым токеном
					const headers = new Headers(options.headers)
					headers.set('Authorization', `Bearer ${accessToken.value}`)

					return $fetch(request, {
						...options,
						method: options.method as
							'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
						headers,
					})
				} else {
					// Refresh не удался — редирект на логин
					await navigateTo('/login')
				}
			}
		},
	})

	return {
		provide: {
			api,
		},
	}
})
