<script setup lang="ts">
	import { DEFAULT_POSITION, DEFAULT_DELAY } from './Toast.constants'
	import { Toaster } from 'vue-sonner'
	import 'vue-sonner/style.css'
</script>

<template>
	<Toaster
		:position="DEFAULT_POSITION"
		:duration="DEFAULT_DELAY"
		rich-colors
		:expand="true"
		:toast-options="{
			class: 'notification-toast',
		}"
	/>
</template>

<style lang="scss">
	[data-sonner-toaster] {
		[data-icon] {
			width: 20px !important;
			height: 20px !important;

			& svg {
				width: 100%;
			}
		}

		[data-sonner-toast] {
			padding: var(--spacing-150) !important;

			--width: 320px;
			--border-radius: var(--corner-12);

			--normal-bg: var(--status-default-bg);
			--normal-border: var(--status-default-border);
			--normal-text: var(--text-primary);

			--success-bg: var(--status-success-bg);
			--success-border: var(--status-success-border);
			--success-text: var(--text-primary);

			--info-bg: var(--status-info-bg);
			--info-border: var(--status-info-border);
			--info-text: var(--text-primary);

			--warning-bg: var(--status-warning-bg);
			--warning-border: var(--status-warning-border);
			--warning-text: var(--text-primary);

			--error-bg: var(--status-danger-bg);
			--error-border: var(--status-danger-border);
			--error-text: var(--text-primary);
		}

		[data-type='default'] [data-icon] {
			color: var(--status-default-icon);
		}

		[data-type='success'] [data-icon] {
			color: var(--status-success-icon);
		}

		[data-type='info'] [data-icon] {
			color: var(--status-info-icon);
		}

		[data-type='warning'] [data-icon] {
			color: var(--status-warning-icon);
		}

		[data-type='error'] [data-icon] {
			color: var(--status-danger-icon);
		}
	}
</style>
