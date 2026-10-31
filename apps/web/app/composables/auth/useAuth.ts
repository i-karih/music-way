export function useAuth() {
	const accessToken = useCookie('access_token')
	const refreshToken = useCookie('refresh_token')
	const { $api } = useNuxtApp()

	const isAuthenticated = computed(() => !!accessToken.value)

	async function login(email: string, password: string) {
		const response = await $api<{
			accessToken: string;
			refreshToken: string
		}>(
			'/auth/login',
			{
				method: 'POST',
				body: {
					email,
					password,
				},
			}
		)

		accessToken.value = response.accessToken
		refreshToken.value = response.refreshToken
	}

	function logout() {
		accessToken.value = null
		refreshToken.value = null
		navigateTo('/login')
	}

	return {
		isAuthenticated,
		login,
		logout,
	}
}
