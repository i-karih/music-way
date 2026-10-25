<script setup lang="ts">
	import { provide } from 'vue'
	import type { RadioContainerProps, RadioModel } from './Radio.types'
	import { RadioContextKey } from './Radio.constants'

	const {name, direction = 'vertical'} = defineProps<RadioContainerProps>()

	const model = defineModel<RadioModel>({ required: true })

	provide(RadioContextKey, {
		model,
		name
	})
</script>

<template>
	<div
		:class="[`ui-radio-container`, `ui-radio-container--${direction}`]"
	>
		<slot />
	</div>
</template>

<style scoped lang="scss">
.ui-radio-container {
	display: flex;
	gap: var(--spacing-150);
	padding: var(--spacing-50) var(--spacing-100);
	border-radius: var(--corner-12);

	&--vertical {
		flex-direction: column;
	}

	&--horizontal {
		flex-wrap: wrap;
	}

	&:has(:focus-visible) {
		outline: var(--border-1) solid var(--border-focus);
		outline-offset: var(--border-2);
	}
}
</style>
