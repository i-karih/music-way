<script setup lang="ts">
	import { UICard, UILogo } from '@music-way/ui'
</script>

<template>
	<div class="auth">
		<div class="auth__container">
			<div class="auth__header">
				<UILogo />
			</div>
			<div class="auth__wrapper">
				<UICard>
					<slot />
				</UICard>
			</div>
		</div>
	</div>
</template>

<style>
	:root {
		--auth-form-width: 460px;
	}
</style>

<style scoped lang="scss">
	.auth {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		overflow: clip;

		&:before {
			content: '';
			position: absolute;
			top: -200px;
			left: 50%;
			width: 760px;
			height: 520px;
			background: var(--glow-purple);
			border-radius: var(--corner-full);
			transform: translateX(-50%);
			z-index: -1;
		}

		&:after {
			content: '';
			position: absolute;
			bottom: -240px;
			left: 50%;
			width: 680px;
			height: 480px;
			background: var(--glow-cyan);
			border-radius: var(--corner-full);
			transform: translateX(-50%);
			z-index: -1;
		}

		&__container {
			@include container(
				var(--auth-form-width),
				var(--spacing-500) var(--spacing-250)
			);
			height: 100%;
		}

		&__header {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: var(--spacing-400);
		}
	}
</style>
