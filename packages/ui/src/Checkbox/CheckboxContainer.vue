<script setup lang="ts">
	import { provide } from 'vue'
	import { CheckboxContextKey } from './Checkbox.constants'
	import type { CheckboxGroupValue, CheckboxContainerProps } from './Checkbox.types'

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
	@use '../styles/mixins' as *;

	.ui-checkbox-container {
		@include direction-container;
	}
</style>
