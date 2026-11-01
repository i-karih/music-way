<script setup lang="ts">
	import type { StepperProps } from './Stepper.types'
	import { ref, watch } from 'vue'

	import UIStepper from './Stepper.vue'

	const { steps = [], total = 1 } = defineProps<StepperProps>()

	const model = defineModel<number>({ required: true })

	const direction = ref<'forward' | 'backward'>('forward')

	watch(model, (newVal, oldVal) => {
		direction.value = newVal > oldVal ? 'forward' : 'backward'
	})

	const stepperRef = ref<InstanceType<typeof UIStepper>>()

	const nextStep = () => stepperRef.value?.nextStep()
	const prevStep = () => stepperRef.value?.prevStep()

	defineExpose({
		nextStep,
		prevStep,
	})
</script>

<template>
	<div class="ui-stepper-content">
		<div class="ui-stepper-content__header">
			<UIStepper
				ref="stepperRef"
				v-model="model"
				:steps="steps"
				:total="total"
			/>
		</div>

		<Transition :name="direction" mode="out-in">
			<div :key="model" class="ui-stepper-content__body">
				<slot :name="`step-${model}`" />
			</div>
		</Transition>
	</div>
</template>

<style scoped lang="scss">
	.ui-stepper-content {
		&__body {
			overflow: hidden;
			margin-top: var(--spacing-400);
		}
	}

	// Forward: уходит влево, приходит справа
	.forward-enter-active,
	.forward-leave-active {
		transition: all 0.3s ease;
	}

	.forward-enter-from {
		opacity: 0;
		transform: translateX(30px);
	}

	.forward-leave-to {
		opacity: 0;
		transform: translateX(-30px);
	}

	// Backward: уходит вправо, приходит слева
	.backward-enter-active,
	.backward-leave-active {
		transition: all 0.3s ease;
	}

	.backward-enter-from {
		opacity: 0;
		transform: translateX(-30px);
	}

	.backward-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
</style>
