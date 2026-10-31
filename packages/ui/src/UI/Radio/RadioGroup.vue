<script setup lang="ts">
	import type { RadioModel, RadioGroupProps } from "./Radio.types";
	import RadioContainer from "./RadioContainer.vue";
	import Radio from "./Radio.vue";

	const model = defineModel<RadioModel>({required: true})

	const {
		name,
		options,
		direction = 'vertical',
		disabled = false,
	} =  defineProps<RadioGroupProps>()
</script>

<template>
	<RadioContainer
		v-model="model"
		:name="name"
		:direction="direction"
	>
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
