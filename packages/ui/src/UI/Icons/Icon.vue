<script setup lang="ts">
	import type { IconProps, IconSize } from './Icon.types'
	import { computed } from 'vue'

	import { iconsMap } from './Icon.types'

	const { name, size = 'medium' } = defineProps<IconProps>()

	const sizeMap: Record<IconSize, number> = {
		small: 16,
		medium: 20,
		large: 24,
	}

	const computedSize = computed(() => sizeMap[size])
</script>

<template>
	<component :is="iconsMap[name]" :size="computedSize" />
</template>
