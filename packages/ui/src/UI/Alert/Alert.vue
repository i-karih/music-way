<script setup lang="ts">
	import { computed } from 'vue'
	import type { AlertSlots, AlertProps } from './Alert.types'
	import { AlertIconMap } from './Alert.constants'
	import Icon from '../Icons/Icon.vue'

	const {
		type = 'default',
		titleTag = 'h3',
		title,
		message,
	} = defineProps<AlertProps>()

	const slot = defineSlots<AlertSlots>()

	const alertRole = computed(() =>
		type === 'danger' || type === 'warning' ? 'alert' : 'status'
	)
</script>

<template>
	<div
		:role="alertRole"
		:class="[
			'ui-alert',
			`ui-alert--${type}`,
		]"
	>
		<span
			class="ui-alert__icon"
			aria-hidden="true"
		>
			<Icon :name="AlertIconMap[type]" />
		</span>

		<div class="ui-alert__content">
			<slot
				v-if="title || slot.header"
				name="header"
			>
				<component
					:is="titleTag"
					class="ui-alert__title text-heading-m"
				>
					{{ title }}
				</component>
			</slot>

			<div
				v-if="message || slot.default"
				class="ui-alert__message"
			>
				<slot>
					{{ message }}
				</slot>
			</div>

			<div
				v-if="slot.footer"
				class="ui-alert__footer"
			>
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.ui-alert {
		--border-color: transparent;
		--bg-color: transparent;
		--icon-color: transparent;

		display: flex;
		align-items: flex-start;
		padding: var(--spacing-150);
		gap: var(--spacing-150);
		border: var(--border-1) solid var(--border-color);
		border-radius: var(--corner-12);
		background-color: var(--bg-color);

		&__icon {
			display: inline-flex;
			width: 20px;
			flex-shrink: 0;
			color: var(--icon-color);

			& svg {
				width: 100%;
			}
		}

		&__title {
			color: var(--text-primary);
		}

		&__message {
			color: var(--text-secondary);
		}

		&--default {
			--border-color: var(--border-default);
			--bg-color: var(--bg-surface);
			--icon-color: var(--text-muted);
		}

		&--success {
			--border-color: var(--border-success);
			--bg-color: var(--bg-success-subtle);
			--icon-color: var(--text-success);
		}

		&--warning {
			--border-color: var(--border-warning);
			--bg-color: var(--bg-warning-subtle);
			--icon-color: var(--text-warning);
		}

		&--info {
			--border-color: var(--border-focus);
			--bg-color: var(--bg-primary-subtle);
			--icon-color: var(--text-link);
		}

		&--danger {
			--border-color: var(--border-danger);
			--bg-color: var(--bg-danger-subtle);
			--icon-color: var(--text-danger);
		}
	}
</style>
