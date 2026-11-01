import type { AuthUser, LoginResponse } from '~/types'

type VerifyResponse = {
	user: AuthUser
	accessToken: string
}

export function useAuth() {
	// TODO(api) время жизни токена с бэка
	const accessToken = useCookie<string | null>('access_token', {
		maxAge: 60 * 15,
		sameSite: 'lax',
		secure: !import.meta.dev,
	})
	const { $api } = useNuxtApp()

	const isAuthenticated = computed(() => !!accessToken.value)

	/** Отправляет код для входа на почту */
	function requestCode(email: string) {
		return $api<LoginResponse>('/auth/login', {
			method: 'POST',
			body: { email },
		})
	}

	/** Проверяет код из письма и сохраняет access-токен. Refresh-токен бэкенд кладет в httpOnly-куку сам */
	async function verifyCode(email: string, code: string) {
		const response = await $api<VerifyResponse>('/auth/verify', {
			method: 'POST',
			body: {
				email,
				code
			},
		})

		accessToken.value = response.accessToken

		return response.user
	}

	async function logout() {
		try {
			await $api('/auth/logout', { method: 'POST' })
		} finally {
			accessToken.value = null
			await navigateTo('/auth')
		}
	}

	return {
		isAuthenticated,
		requestCode,
		verifyCode,
		logout,
	}
}