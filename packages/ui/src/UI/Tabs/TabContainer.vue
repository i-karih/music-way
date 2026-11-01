<script setup lang="ts">
	import type { TabContainerProps, TabModel } from './Tab.types'
	import { provide, toRef } from 'vue'

	import { TabContextKey } from './Tab.constants'

	const model = defineModel<TabModel>({ required: true })

	const { name } = defineProps<TabContainerProps>()

	provide(TabContextKey, {
		model,
		name: toRef(() => name),
	})
</script>

<template>
	<div class="ui-tab-container" role="tablist">
		<slot />
	</div>
</template>

<style scoped lang="scss">
	.ui-tab-container {
		display: inline-flex;
		align-items: flex-start;
		gap: var(--spacing-50);
		padding: var(--spacing-50);
		border-radius: var(--corner-12);
		border: var(--border-1) solid var(--border-default);
		background-color: var(--bg-base);
		transition: border-color ease-in-out 0.2s;

		&:has(:focus-visible) {
			border-color: var(--border-focus);
		}
	}
</style>
