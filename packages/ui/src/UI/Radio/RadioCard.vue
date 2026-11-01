<script setup lang="ts">
	import type { RadioButtonCardProps } from './Radio.types'

	import { computed, inject } from 'vue'

	import Card from '../Card/Card.vue'
	import Icon from '../Icons/Icon.vue'
	import { RadioContextKey } from './Radio.constants'
	import RadioPrimitive from './RadioPrimitive.vue'

	const {
		label,
		value,
		description = '',
		size = 'small',
		disabled = false,
		error = false,
		heading = 'h4',
		iconName = 'Mic2',
	} = defineProps<RadioButtonCardProps>()

	const context = inject(RadioContextKey)

	if (!context) {
		throw new Error('UIRadioButton must be used inside UIRadioGroup')
	}

	const isSelected = computed(() => context.model.value === value)
</script>

<template>
	<RadioPrimitive
		v-model="context.model.value"
		:name="context.name"
		:value="value"
		:disabled="disabled"
	>
		<Card
			:size="size"
			:class="[
				'ui-radio-card',
				{ 'ui-radio-card--selected': isSelected },
				{ 'ui-radio-card--disabled': disabled },
				{ 'ui-radio-card--error': error },
			]"
			interactive
		>
			<span class="ui-radio-card__content">
				<slot name="icon">
					<span :class="['ui-radio-card__box', `ui-radio-card__box--${size}`]">
						<Icon :name="iconName" />
					</span>
				</slot>
				<slot name="header">
					<span class="ui-radio-card__header">
						<component :is="heading" class="ui-radio-card__title text-button-l">
							<slot>
								{{ label }}
							</slot>
						</component>
						<span
							v-if="description"
							class="ui-radio-card__description text-body-m"
						>
							{{ description }}
						</span>
					</span>
				</slot>
			</span>
		</Card>
	</RadioPrimitive>
</template>

<style scoped lang="scss">
	.ui-radio-card {
		&--selected {
			--card-bg-color: var(--bg-primary-subtle);
			--card-border: var(--border-focus);

			--card-bg-color-hover: var(--bg-primary-subtle-hover);
			--card-bg-color-pressed: var(--bg-primary-subtle-active);
			--card-border-hover: var(--border-focus);
			--card-border-pressed: var(--border-focus);
		}

		&--disabled {
			opacity: 0.4;
			pointer-events: none;
		}

		&__header {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-50);
			line-height: 120%;
		}

		&__content {
			display: flex;
			align-items: center;
			gap: var(--spacing-200);
		}

		&__box {
			padding: var(--spacing-100);
			width: 40px;
			height: 40px;
			border-radius: var(--corner-12);
			flex-shrink: 0;
			background-color: var(--bg-primary);

			& svg {
				width: 100%;
				height: 100%;
			}
		}

		&__description {
			color: var(--text-muted);
			line-height: 120%;
		}
	}
</style>
