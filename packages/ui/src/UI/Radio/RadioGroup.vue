<script setup lang="ts">
	import type { RadioGroupProps, RadioModel } from './Radio.types'

	import Radio from './Radio.vue'
	import RadioContainer from './RadioContainer.vue'

	const model = defineModel<RadioModel>({ required: true })

	const {
		name,
		options,
		direction = 'vertical',
		disabled = false,
	} = defineProps<RadioGroupProps>()
</script>

<template>
	<RadioContainer v-model="model" :name="name" :direction="direction">
		<Radio
			v-for="option in options"
			:key="option.value"
			:value="option.value"
			:disabled="disabled || option.disabled"
			:label="option.label"
			:error="option.error"
		/>
	</RadioContainer>
</template>
