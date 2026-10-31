<script setup lang="ts">
	import AuthController from '~/components/auth/AuthController.vue'
	definePageMeta({
		layout: 'auth',
	})
</script>

<template>
	<section class="auth-page">
		<AuthController />
	</section>
</template>

<style scoped lang="scss">
	.auth-page {
		&__header {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: var(--spacing-400);
		}
	}
</style>
