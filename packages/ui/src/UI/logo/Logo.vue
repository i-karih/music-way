<script setup lang="ts">
	import type { LogoProps } from './Logo.types'

	const { size = 'large', iconOnly = false } = defineProps<LogoProps>()
</script>

<template>
	<span :class="['ui-logo', `ui-logo--${size}`]">
		<svg
			class="ui-logo__icon"
			viewBox="0 0 23 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="0" y="10" width="3" height="12" rx="1.5" fill="currentColor" />
			<rect x="5" y="5" width="3" height="22" rx="1.5" fill="currentColor" />
			<rect x="10" y="8" width="3" height="16" rx="1.5" fill="currentColor" />
			<rect x="15" y="2" width="3" height="28" rx="1.5" fill="currentColor" />
			<rect x="20" y="10" width="3" height="12" rx="1.5" fill="currentColor" />
		</svg>
		<span v-if="!iconOnly" class="ui-logo__text">MusicWay</span>
	</span>
</template>

<style scoped lang="scss">
	.ui-logo {
		display: inline-flex;
		align-items: center;
		color: var(--text-primary);

		&__icon {
			flex-shrink: 0;
			color: var(--icon-brand);
		}

		&__text {
			font-family: 'Golos UI', system-ui, sans-serif;
			font-weight: var(--typography-logo-weight);
		}

		&--small {
			gap: var(--spacing-100);

			.ui-logo__icon {
				height: var(--spacing-300);
				width: auto;
			}

			.ui-logo__text {
				font-size: var(--typography-logo-s-size);
			}
		}

		&--medium {
			gap: var(--spacing-150);

			.ui-logo__icon {
				height: var(--spacing-400);
				width: auto;
			}

			.ui-logo__text {
				font-size: var(--typography-logo-m-size);
			}
		}

		&--large {
			gap: var(--spacing-150);

			.ui-logo__icon {
				height: var(--spacing-600);
				width: auto;
			}

			.ui-logo__text {
				font-size: var(--typography-logo-l-size);
			}
		}
	}
</style>
