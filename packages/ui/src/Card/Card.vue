<script setup lang="ts">
	import type { CardProps, CardSlots } from './Card.types'

	const {
		title = '',
		description = '',
		size = 'large',
	} = defineProps<CardProps>()

	const slots = defineSlots<CardSlots>()
</script>

<template>
	<div
		:class="[`ui-card--${size}`]"
		class="ui-card"
	>
		<div
			v-if="title || slots.header"
			class="ui-card__header"
		>
			<slot name="header">
				<h2 class="ui-card__title text-heading-l">
					{{ title }}
				</h2>
				<p
					v-if="description || slots.description"
					class="ui-card__description text-body-m"
				>
					<slot name="description">
						{{ description }}
					</slot>
				</p>
			</slot>
		</div>

		<div
			v-if="slots.content"
			class="ui-card__content"
		>
			<slot name="content" />
		</div>

		<div
			v-if="slots.footer"
			class="ui-card__footer"
		>
			<slot name="footer" />
		</div>
	</div>
</template>

<style scoped lang="scss">
	.ui-card {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-300);
		background-color: var(--bg-surface);
		border: var(--border-1) solid var(--border-default);
		border-radius: var(--corner-16);
		box-shadow: var(--shadow-dark);

		&--large {
			padding: var(--spacing-400);
		}

		&--medium {
			padding: var(--spacing-300);
		}

		&--small {
			padding: var(--spacing-200);
			border-radius: var(--corner-12);
		}

		&__description {
			margin-top: var(--spacing-50);
			color: var(--text-muted);
		}
	}
</style>
