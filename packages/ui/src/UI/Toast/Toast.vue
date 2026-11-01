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

			--normal-bg: var(--bg-surface);
			--normal-border: var(--border-default);
			--normal-text: var(--text-primary);

			--success-text: var(--text-primary);
			--success-bg: var(--bg-success-subtle);
			--success-border: var(--border-success);

			--info-bg: var(--bg-primary-subtle);
			--info-border: var(--border-focus);
			--info-text: var(--text-primary);

			--warning-bg: var(--bg-warning-subtle);
			--warning-border: var(--border-warning);
			--warning-text: var(--text-primary);

			--error-bg: var(--bg-danger-subtle);
			--error-border: var(--border-danger);
			--error-text: var(--text-primary);
		}

		[data-type='default'] [data-icon] {
			color: var(--text-muted);
		}

		[data-type='success'] [data-icon] {
			color: var(--text-success);
		}

		[data-type='info'] [data-icon] {
			color: var(--text-link);
		}

		[data-type='warning'] [data-icon] {
			color: var(--text-warning);
		}

		[data-type='error'] [data-icon] {
			color: var(--text-danger);
		}
	}
</style>
