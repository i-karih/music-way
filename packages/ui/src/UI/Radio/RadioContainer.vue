<script setup lang="ts">
	import type { RadioContainerProps, RadioModel } from './Radio.types'
	import { provide } from 'vue'

	import { RadioContextKey } from './Radio.constants'

	const { name, direction = 'vertical' } = defineProps<RadioContainerProps>()

	const model = defineModel<RadioModel>({ required: true })

	provide(RadioContextKey, {
		model,
		name,
	})
</script>

<template>
	<div :class="[`ui-radio-container`, `ui-radio-container--${direction}`]">
		<slot />
	</div>
</template>

<style scoped lang="scss">
	@use '../../styles/mixins' as *;

	.ui-radio-container {
		@include direction-container;
		padding: var(--spacing-50) var(--spacing-100);
		border-radius: var(--corner-12);

		&:has(:focus-visible) {
			outline: var(--border-1) solid var(--border-focus);
			outline-offset: var(--border-2);
		}
	}
</style>
