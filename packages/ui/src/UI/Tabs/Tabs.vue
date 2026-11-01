<script setup lang="ts">
	import type { TabModel, TabsProps } from './Tab.types'

	import { UITab, UITabContainer } from './index'

	const { name, options, disabled = false } = defineProps<TabsProps>()

	const model = defineModel<TabModel>({ required: true })
</script>

<template>
	<UITabContainer v-model="model" :name="name">
		<UITab
			v-for="tab in options"
			:key="tab.value"
			:value="tab.value"
			:disabled="disabled || tab.disabled"
		>
			{{ tab.label }}
		</UITab>
	</UITabContainer>
</template>
