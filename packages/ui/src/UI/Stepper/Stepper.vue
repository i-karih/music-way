<script setup lang="ts">
	import type { StepperProps } from './Stepper.types'

	import { computed } from 'vue'

	const { steps = [], total = 1 } = defineProps<StepperProps>()

	const model = defineModel<number>({ required: true })

	const currentSteps = computed(() => {
		if (steps.length > 0) {
			return steps.length
		} else {
			return total
		}
	})

	const nextStep = () => {
		if (model.value < currentSteps.value) {
			model.value++
		}
	}

	const prevStep = () => {
		if (model.value > 1) {
			model.value--
		}
	}

	defineExpose({
		nextStep,
		prevStep,
	})
</script>

<template>
	<div class="ui-stepper">
		<div class="ui-stepper__header">
			<h4 class="ui-stepper__title text-body-m">
				<slot name="title">
					<template v-if="steps.length > 0">
						{{ steps[model - 1] }}
					</template>
					<!-- TODO(i18n) -->
					<template v-else>
						{{ `Шаг ${model} из ${total}` }}
					</template>
				</slot>
			</h4>
		</div>
		<div class="ui-stepper__wrapper">
			<span
				v-for="step in currentSteps"
				:key="step"
				:class="[
					{ 'ui-stepper__step--active': step === model },
					{ 'ui-stepper__step--complete': step < model },
				]"
				class="ui-stepper__step"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.ui-stepper {
		&__wrapper {
			display: flex;
			gap: var(--spacing-100);
		}

		&__title {
			color: var(--text-muted);
			margin-bottom: var(--spacing-150);
		}

		&__step {
			display: inline-block;
			width: 100%;
			height: var(--spacing-50);
			border-radius: var(--corner-4);
			background-color: var(--bg-track);
			transition: background-color 0.25s ease;

			&--active,
			&--complete {
				background-color: var(--bg-primary);
			}
		}
	}
</style>
