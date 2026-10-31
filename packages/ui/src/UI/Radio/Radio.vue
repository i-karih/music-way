<script setup lang="ts">
	import RadioPrimitive from './RadioPrimitive.vue'
	import type { RadioButtonProps } from './Radio.types'
	import { RadioContextKey } from './Radio.constants'
	import {computed, inject} from "vue";

	const {
		label,
		value,
		disabled = false,
		error = false,
	} = defineProps<RadioButtonProps>()

	const context = inject(RadioContextKey)

	if (!context) {
		throw new Error('UIRadio must be used inside UIRadioGroup')
	}

	const isSelected = computed(() => context.model.value === value)
</script>

<template>
	<RadioPrimitive
		v-model="context.model.value"
		:name="context.name"
		:value="value"
		:disabled="disabled"
		:class="[
			`ui-radio-button`,
			{ 'ui-radio-button--disabled': disabled },
			{ 'ui-radio-button--checked': isSelected },
			{ 'ui-radio-button--error': error },
		]"
	>
		<slot name="icon">
			<span class="ui-radio-button__icon" />
		</slot>
		<span class="ui-radio-button__label">
			<slot>
				{{ label }}
			</slot>
		</span>
	</RadioPrimitive>
</template>

<style scoped lang="scss">
	.ui-radio-button {
		$self: &;
		display: flex;
		align-items: center;
		color: var(--text-secondary);
		gap: var(--spacing-150);
		&__icon {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: var(--spacing-250);
			height: var(--spacing-250);
			border: var(--border-1) solid var(--border-strong);
			border-radius: var(--corner-full);
			transition: background-color 0.2s, border-color 0.2s;

			&:before {
				content: '';
				background-color: var(--bg-on-primary);
				width: var(--spacing-100);
				height: var(--spacing-100);
				border-radius: var(--corner-full);
				opacity: 0;
				transition: opacity 0.2s;
			}
		}

		&:hover:not(&--disabled) {
			@media(hover: hover) {
				#{$self}__icon {
					border-color: var(--border-focus);
				}
			}
		}

		&--checked {
			#{$self}__icon {
				background-color: var(--bg-primary);

				&:before {
					opacity: 1;
				}
			}
		}

		&--error {
			color: var(--text-danger);

			#{$self}__icon {
				border-color: var(--border-danger);
			}
		}

		&--disabled {
			opacity: 0.4;
			cursor: not-allowed;
		}
	}
</style>
