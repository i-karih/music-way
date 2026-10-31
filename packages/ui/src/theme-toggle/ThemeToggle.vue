<script setup lang="ts">
	import { computed } from 'vue'
	import { Sun, Moon } from 'lucide-vue-next'

	// useColorMode и ClientOnly — Nuxt-specific
	const colorMode = useColorMode()

	const isDark = computed(() => colorMode.value === 'dark')

	function toggle() {
		colorMode.preference = isDark.value ? 'light' : 'dark'
	}
</script>

<template>
	<ClientOnly>
		<!-- TODO(i18n): aria-label -->
		<button
			type="button"
			class="theme-toggle"
			:aria-label="isDark ? 'Включить светлую тему' : 'Включить тёмную тему'"
			@click="toggle"
		>
			<Sun
				v-if="isDark"
				class="theme-toggle__icon"
			/>
			<Moon
				v-else
				class="theme-toggle__icon"
			/>
		</button>
	</ClientOnly>
</template>

<style lang="scss" scoped>
	//@reference "../../../assets/css/main.css";

	//.theme-toggle {
	//  @apply p-2 rounded-md text-muted-foreground transition-colors;
	//  @apply hover:text-foreground hover:bg-accent cursor-pointer;
	//
	//  &__icon {
	//    @apply size-5;
	//  }
	//}
</style>
