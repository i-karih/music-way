<script setup lang="ts">
	import { CheckboxContextKey } from './Checkbox.constants'
	import type { CheckboxGroupValue, CheckboxContainerProps } from './Checkbox.types';

	const { direction = 'vertical' } = defineProps<CheckboxContainerProps>()

	const model = defineModel<CheckboxGroupValue>({ required: true })

	provide(CheckboxContextKey, { model })
</script>

<template>
	<div
		:class="[`ui-checkbox-container`, `ui-checkbox-container--${direction}`]"
	>
		<slot />
	</div>
</template>

<style scoped lang="scss">
	.ui-checkbox-container {
		display: flex;
		gap: var(--spacing-150);
		&--vertical {
			flex-direction: column;
		}
		&--horizontal {
			flex-wrap: wrap;
		}
	}
</style>
