<script setup lang="ts">
	import Primitive from './Primitive.vue'
	import type { ButtonProps, ButtonSlots } from './Buttons.types'

	const {
		size = 'large',
		variant = 'primary',
		loadingText = 'Loading...',
		isLoading = false,
		isDisabled = false,
		to = '',
		href = '',
	} = defineProps<ButtonProps>()

	const slots = defineSlots<ButtonSlots>()
</script>

<template>
	<Primitive
		:class="[`ui-button--${variant}`, `ui-button--${size}`]"
		:is-disabled="isDisabled"
		:is-loading="isLoading"
		:loading-text="loadingText"
		:href="href"
		:to="to"
	>
		<slot
			v-if="slots.left"
			name="left"
		/>
		<slot />
		<slot
			v-if="slots.right"
			name="right"
		/>
	</Primitive>
</template>

<style scoped lang="scss">
	.ui-button {
		color: var(--text-primary);
		transition:
			background-color 0.3s,
			color 0.3s,
			border-color 0.3s;
		border: var(--border-1) solid transparent;
		border-radius: var(--corner-12);

		&--primary {
			background-color: var(--bg-primary);

			&:hover {
				@media (hover: hover) {
					background-color: var(--bg-primary-hover);
				}
			}

			&:active {
				background-color: var(--bg-primary-active);
			}

			&:focus-visible {
				outline: var(--border-2) solid var(--primary-border-focus);
				outline-offset: var(--spacing-25);
			}
		}

		&--secondary {
			border-color: var(--border-default);

			&:hover {
				@media (hover: hover) {
					background-color: var(--bg-hover);
				}
			}

			&:active {
				background-color: var(--bg-active);
			}

			&:focus-visible {
				outline: var(--border-2) solid var(--border-focus);
				outline-offset: var(--spacing-25);
			}
		}

		&--large {
			font-size: var(--typography-button-l-size);
			line-height: var(--typography-button-line-height);
			font-weight: var(--typography-button-l-weight);
			padding: var(--spacing-150) var(--spacing-200);
		}

		&--medium {
			font-size: var(--typography-button-m-size);
			line-height: var(--typography-button-line-height);
			font-weight: var(--typography-button-weight);
			padding: var(--spacing-150) var(--spacing-200);
		}
		&--small {
			font-size: var(--typography-button-s-size);
			line-height: var(--typography-button-line-height);
			font-weight: var(--typography-button-weight);
			padding: var(--spacing-100) var(--spacing-150);
		}
	}
</style>
