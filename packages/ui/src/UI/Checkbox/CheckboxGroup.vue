<script setup lang="ts">
	import type { CheckboxGroupProps, CheckboxGroupValue } from './Checkbox.types'
	import CheckboxChip from './CheckboxChip.vue'
	import Checkbox from './Checkbox.vue'
	import CheckboxContainer from './CheckboxContainer.vue'

	const {
		type = 'checkbox',
		direction = 'vertical',
		disabled = false,
		options,
	} = defineProps<CheckboxGroupProps>()

	const componentMap = {
		checkbox: Checkbox,
		chip: CheckboxChip,
	}

	const model = defineModel<CheckboxGroupValue>({ required: true })
</script>

<template>
	<CheckboxContainer
		v-model="model"
		:direction="direction"
	>
		<component
			:is="componentMap[type]"
			v-for="option in options"
			:key="option.value"
			:value="option.value"
			:label="option.label"
			:disabled="disabled || option.disabled"
		/>
	</CheckboxContainer>
</template>

<style scoped lang="scss"></style>
