<script setup lang="ts">
	import type { TabProps } from './Tab.types'

	import { computed, inject } from 'vue'

	import { TabContextKey } from './Tab.constants'

	const { value, disabled = false } = defineProps<TabProps>()

	const context = inject(TabContextKey)

	if (!context) {
		throw new Error('UITab must be used inside UITabContainer')
	}

	const isSelected = computed(() => context.model.value === value)
</script>

<template>
	<label
		:class="[
			'ui-tab text-button-m',
			{
				'ui-tab--disabled': disabled,
				'ui-tab--selected': isSelected,
			},
		]"
		:aria-disabled="disabled"
		:aria-selected="isSelected"
		role="tab"
	>
		<slot name="icon" />
		<slot />

		<input
			v-model="context.model.value"
			:disabled="disabled"
			:name="context.name.value"
			:value="value"
			type="radio"
			class="ui-tab__radio"
		/>
	</label>
</template>

<style scoped lang="scss">
	@use '../../styles/mixins' as *;

	.ui-tab {
		$self: &;
		display: inline-flex;
		justify-content: center;
		width: 100%;
		padding: var(--spacing-100);
		border-radius: var(--corner-8);
		color: var(--text-muted);
		cursor: pointer;
		user-select: none;
		transition:
			background-color 0.2s,
			color 0.2s;

		&--selected {
			background-color: var(--bg-primary);
			color: var(--text-primary);
		}

		&--disabled {
			color: var(--text-disabled);
			cursor: not-allowed;
			&#{$self}--selected {
				background-color: var(--bg-muted);
			}
		}

		&:hover:not(&--selected):not(&--disabled) {
			@media (hover: hover) {
				background-color: var(--bg-hover);
				color: var(--text-primary);
			}
		}

		&:active:not(&--selected):not(&--disabled) {
			background-color: var(--bg-pressed);
			color: var(--text-primary);
		}

		&__radio {
			@include visually-hidden;
		}
	}
</style>
