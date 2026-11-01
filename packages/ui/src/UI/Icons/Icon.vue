<script setup lang="ts">
	import { type IconName, iconsMap } from './Icon.types'

	defineProps<{
		name: IconName
	}>()
</script>

<template>
	<component :is="iconsMap[name]" />
</template>
