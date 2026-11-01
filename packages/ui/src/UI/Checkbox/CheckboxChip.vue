<script setup lang="ts">
	import type {
		CheckboxChipProps,
		CheckboxModel,
		CheckboxSlots,
	} from './Checkbox.types'

	import CheckboxPrimitive from './CheckboxPrimitive.vue'
	import { useCheckboxGroup } from './composables/useCheckboxGroup'

	const localModel = defineModel<CheckboxModel>()

	const {
		disabled = false,
		value = '',
		label = '',
	} = defineProps<CheckboxChipProps>()

	const { model, isChecked } = useCheckboxGroup(localModel, () => value)

	const slots = defineSlots<CheckboxSlots>()
</script>

<template>
	<CheckboxPrimitive
		v-model="model"
		:disabled="disabled"
		:value="value"
		:class="[
			'ui-checkbox-chips text-button-m',
			{ 'ui-checkbox-chips--disabled': disabled },
			{ 'ui-checkbox-chips--checked': isChecked },
		]"
	>
		<slot name="icon">
			<span class="ui-checkbox-chips__dot" />
		</slot>
		<slot v-if="slots.label || label" name="label">
			{{ label }}
		</slot>
	</CheckboxPrimitive>
</template>

<style scoped lang="scss">
	.ui-checkbox-chips {
		$self: &;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-100);
		padding: var(--spacing-100) var(--spacing-200);
		border: var(--border-1) solid var(--border-default);
		border-radius: var(--corner-full);
		cursor: pointer;
		user-select: none;
		color: var(--text-secondary);
		transition:
			background-color 0.2s,
			color 0.2s,
			border-color 0.2s;

		&:has(:focus-visible):not(&--disabled) {
			outline: var(--border-1) solid var(--border-focus);
			outline-offset: var(--border-1);
		}

		&:hover:not(&--disabled):not(&--checked) {
			@media (hover: hover) {
				background-color: var(--bg-hover);
				border-color: var(--border-strong);
				color: var(--text-primary);
			}
		}

		&:active:not(&--disabled):not(&--checked) {
			background-color: var(--bg-muted);
			border-color: var(--border-strong);
			color: var(--text-primary);
		}

		&--checked {
			background-color: var(--bg-primary-subtle);
			border-color: var(--border-focus);
			color: var(--text-on-primary-subtle);

			&:hover:not(#{$self}--disabled) {
				@media (hover: hover) {
					background-color: var(--bg-primary-subtle-hover);
					border-color: var(--border-focus);
					color: var(--text-on-primary-subtle);
				}
			}

			&:active:not(#{$self}--disabled) {
				background-color: var(--bg-primary-subtle-active);
				border-color: var(--border-focus);
				color: var(--text-on-primary-subtle);
			}
		}

		&--disabled {
			opacity: 0.4;
			cursor: not-allowed;
		}

		&__dot {
			display: inline-block;
			width: 8px;
			height: 8px;
			background-color: var(--bg-primary);
			border-radius: var(--corner-full);
		}
	}
</style>
