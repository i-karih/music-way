<script lang="ts" setup>
	import TheHeader from '@/components/system/TheHeader.vue'
	import TheFooter from '~/components/system/TheFooter.vue'

	const userStore = useUserStore()

	console.log(userStore.profile)
</script>

<template>
	<div class="wrapper">
		<TheHeader />
		<main class="main">
			<slot />
		</main>
		<TheFooter />
	</div>
</template>

<style lang="scss" scoped></style>
