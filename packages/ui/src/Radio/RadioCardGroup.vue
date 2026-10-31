<script setup lang="ts">
	import type { RadioModel, RadioCardGroupProps } from "./Radio.types";
	import RadioContainer from "./RadioContainer.vue";
	import RadioCard from "./RadioCard.vue";

	const model = defineModel<RadioModel>({required: true})

	const {
		name,
		options,
		direction = 'vertical',
		disabled = false,
	} = defineProps<RadioCardGroupProps>()
</script>

<template>
	<RadioContainer
		v-model="model"
		:name="name"
		:direction="direction"
	>
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
