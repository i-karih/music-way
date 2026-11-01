<script setup lang="ts">
	import type { AlertProps, AlertSlots } from './Alert.types'
	import { computed } from 'vue'

	import Icon from '../Icons/Icon.vue'
	import { AlertIconMap } from './Alert.constants'

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
	<div :role="alertRole" :class="['ui-alert', `ui-alert--${type}`]">
		<span class="ui-alert__icon" aria-hidden="true">
			<Icon :name="AlertIconMap[type]" />
		</span>

		<div class="ui-alert__content">
			<slot v-if="title || slot.header" name="header">
				<component :is="titleTag" class="ui-alert__title text-heading-m">
					{{ title }}
				</component>
			</slot>

			<div v-if="message || slot.default" class="ui-alert__message">
				<slot>
					{{ message }}
				</slot>
			</div>

			<div v-if="slot.footer" class="ui-alert__footer">
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
			--bg-color: var(--status-default-bg);
			--border-color: var(--status-default-border);
			--icon-color: var(--status-default-icon);
		}

		&--success {
			--bg-color: var(--status-success-bg);
			--border-color: var(--status-success-border);
			--icon-color: var(--status-success-icon);
		}

		&--warning {
			--bg-color: var(--status-warning-bg);
			--border-color: var(--status-warning-border);
			--icon-color: var(--status-warning-icon);
		}

		&--info {
			--bg-color: var(--status-info-bg);
			--border-color: var(--status-info-border);
			--icon-color: var(--status-info-icon);
		}

		&--danger {
			--bg-color: var(--status-danger-bg);
			--border-color: var(--status-danger-border);
			--icon-color: var(--status-danger-icon);
		}
	}
</style>
