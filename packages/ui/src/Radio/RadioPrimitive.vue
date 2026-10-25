<script setup lang="ts">
	import type { RadioPrimitiveProps, RadioModel } from './Radio.types'
	const model = defineModel<RadioModel>()

	const {
		name, value, disabled = false 
	} = defineProps<RadioPrimitiveProps>()
</script>

<template>
	<label class="ui-radio">
		<input
			v-model="model"
			:name="name"
			:value="value"
			:disabled="disabled"
			type="radio"
			class="ui-radio__input"
		>
		<slot />
	</label>
</template>

<style scoped lang="scss">
	.ui-radio {
		cursor: pointer;
		&__input {
			position: absolute;
			opacity: 0;
			width: 1px;
			height: 1px;
			pointer-events: none;
		}
	}
</style>
