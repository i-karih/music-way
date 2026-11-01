<script setup lang="ts">
	import type { RadioCardGroupProps, RadioModel } from './Radio.types'

	import RadioCard from './RadioCard.vue'
	import RadioContainer from './RadioContainer.vue'

	const model = defineModel<RadioModel>({ required: true })

	const {
		name,
		options,
		direction = 'vertical',
		disabled = false,
	} = defineProps<RadioCardGroupProps>()
</script>

<template>
	<RadioContainer v-model="model" :name="name" :direction="direction">
		<RadioCard
			v-for="option in options"
			:key="option.value"
			:value="option.value"
			:disabled="disabled || option.disabled"
			:label="option.label"
			:description="option.description"
			:icon-name="option.iconName"
		/>
	</RadioContainer>
</template>
