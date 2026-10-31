<script setup lang="ts">
	import { computed } from 'vue'
	import type { SpinnerSize, SpinnerProps } from './Spinner.types'

	const { size = 'md' } = defineProps<SpinnerProps>()

	const sizeMap: Record<SpinnerSize, string> = {
		sm: '16px',
		md: '24px',
		lg: '32px',
		auto: '1em',
	}

	const computedSize = computed(() => sizeMap[size])
</script>

<template>
	<svg
		class="spinner"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 60"
		fill="currentColor"
		:style="{ width: computedSize, height: computedSize }"
	>
		<rect
			class="bar bar-0"
			x="0"
			y="32"
			width="8"
			height="28"
			rx="4"
		/>
		<rect
			class="bar bar-1"
			x="14"
			y="8"
			width="8"
			height="52"
			rx="4"
		/>
		<rect
			class="bar bar-2"
			x="28"
			y="22"
			width="8"
			height="38"
			rx="4"
		/>
		<rect
			class="bar bar-3"
			x="42"
			y="0"
			width="8"
			height="60"
			rx="4"
		/>
		<rect
			class="bar bar-4"
			x="56"
			y="28"
			width="8"
			height="32"
			rx="4"
		/>
	</svg>
</template>

<style scoped lang="scss">
	.spinner {
		display: inline-block;
		flex-shrink: 0;
	}

	.bar {
		animation: equalize 1s ease-in-out infinite;
		transform-origin: center bottom;
		transform-box: fill-box;
	}

	.bar-0 {
		animation-delay: 0s;
	}
	.bar-1 {
		animation-delay: 0.15s;
	}
	.bar-2 {
		animation-delay: 0.3s;
	}
	.bar-3 {
		animation-delay: 0.45s;
	}
	.bar-4 {
		animation-delay: 0.6s;
	}

	@keyframes equalize {
		0%,
		100% {
			transform: scaleY(1);
		}
		50% {
			transform: scaleY(0.4);
		}
	}
</style>
