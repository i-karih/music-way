<script setup lang="ts">
	import { iconsMap, type IconName } from './Icon.types'

	defineProps<{
		name: IconName
	}>()
</script>

<template>
	<component :is="iconsMap[name]" />
</template>
