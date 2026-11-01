<script setup lang="ts">
	import type { Component } from 'vue'

	import AuthCheckEmail from '~/components/auth/AuthCheckEmail.vue'
	import AuthEmail from '~/components/auth/AuthEmail.vue'
	import { AuthStep } from '~/constants'

	const currentStep = ref<AuthStep>(AuthStep.Email)

	const email = ref('')

	const authMap: Partial<Record<AuthStep, Component>> = {
		[AuthStep.Email]: AuthEmail,
		[AuthStep.CheckEmail]: AuthCheckEmail,
	}
</script>

<template>
	<transition name="fade" mode="out-in">
		<component
			:is="authMap[currentStep]"
			:key="currentStep"
			v-model:email="email"
			@change-step="(step: AuthStep) => (currentStep = step)"
		/>
	</transition>
</template>
