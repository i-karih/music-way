<script setup lang="ts">
	import type { CheckboxPrimitiveProps, CheckboxModel } from './Checkbox.types'

	const model = defineModel<CheckboxModel>()

	const { disabled = false, value = '' } = defineProps<CheckboxPrimitiveProps>()
</script>

<template>
	<label class="ui-checkbox-primitive">
		<input
			v-model="model"
			:disabled="disabled"
			:value="value"
			type="checkbox"
			class="ui-checkbox-primitive__input"
		>
		<slot />
	</label>
</template>

<style scoped lang="scss">
	.ui-checkbox-primitive {
		&__input {
			position: absolute;
			opacity: 0;
			width: 1px;
			height: 1px;
			pointer-events: none;
		}
	}
</style>
