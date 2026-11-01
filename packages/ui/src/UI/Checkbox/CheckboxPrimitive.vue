<script setup lang="ts">
	import type { CheckboxModel, CheckboxPrimitiveProps } from './Checkbox.types'

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
		/>
		<slot />
	</label>
</template>

<style scoped lang="scss">
	@use '../../styles/mixins' as *;

	.ui-checkbox-primitive {
		&__input {
			@include visually-hidden;
		}
	}
</style>
