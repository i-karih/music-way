<script setup lang="ts">
	import {
		UICodeInput,
		UIInlineButton,
		UIButton
	} from '@music-way/ui'
	import { useCountdown } from '~/composables'
	import type {AuthStepEmit} from "~/types";
	import { AuthStep } from '~/constants'

	const TIME_UNTIL_RESEND = 60
	const NUMBER_ATTEMPS = 5

	const {
		formatted,
		start,
		restart,
		isExpired
	} = useCountdown(TIME_UNTIL_RESEND)

	const {
		email
	} = defineProps<{email: string | number}>()

	const emit = defineEmits<AuthStepEmit>()

	const codeInputStatus = ref<'default' | 'danger'>('default')

	const attempt = ref(NUMBER_ATTEMPS)

	const codeInput = ref<InstanceType<typeof UICodeInput>>()
	const code = ref('')
	const isCodeLoading = ref<boolean>(false)
	const isCodeTimeOut = ref<boolean>(false)

	const isCodeInputDisabled = computed(() => (isCodeTimeOut.value || attempt.value === 0 || isCodeLoading.value))

	const codeInputMessage = computed(() => (
		codeInputStatus.value === "default" ?
			'Код действует 10 минут. Нет письма — проверь «Спам».' : `Неверный код. Осталось ${attempt.value} попытки.`))

	const handlerComplete = () => {
		isCodeLoading.value = true
		setTimeout(() => {
			isCodeLoading.value = false
			codeInput.value?.reset()
		}, 2_000)
		return
		// emit('changeStep', AuthStep.Loading)
	}

	const handlerBackStep = () => {
		emit('changeStep', AuthStep.Email)
	}

	const handlerResendCode = () => {
		restart()
	}

	onMounted(async () => {
		start()
	})
</script>

<template>
	<div class="auth-check-email">
		<div class="auth-check-email__header">
			<h2 class="auth-check-email__title text-heading-l">
				Введи код из письма
			</h2>
			<p class="auth-check-email__description text-body-m">
				Отправили 6 цифр на <span class="accent font-medium">{{ email }}</span>.
			</p>
			<div class="auth-check-email__code">
				<UICodeInput
					ref="codeInput"
					v-model="code"
					:status="codeInputStatus"
					:message="codeInputMessage"
					:disabled="isCodeInputDisabled"
					@complete="handlerComplete"
				/>
			</div>
			<div class="auth-check-email__no-email">
				<div
					v-if="!isExpired"
					class="auth-check-email__cooldown text-body-m"
				>
					<span>Отправить ещё раз через </span>
					<span class="accent font-medium">{{ formatted.minutes }} : {{ formatted.seconds }}</span>
				</div>
				<UIInlineButton
					v-else
					size="medium"
					:disabled="isCodeLoading"
					@click="handlerResendCode"
				>
					Отправить код ещё раз
				</UIInlineButton>
			</div>
			<div class="auth-check-email__actions">
				<UIButton
					class="auth-check-email__button"
					variant="secondary"
					:disabled="isCodeLoading"
					@click="handlerBackStep"
				>
					Изменить почту
				</UIButton>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.auth-check-email {
		&__title,
		&__description {
			text-align: center;
		}

		&__title {
			margin-bottom: var(--spacing-150);
		}

		&__description {
			color: var(--text-muted);
			margin-bottom: var(--spacing-250);

			& .accent {
				color: var(--text-primary);
			}
		}

		&__no-email {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: var(--spacing-300);
		}

		&__cooldown {
			color: var(--text-muted);

			& .accent {
				color: var(--text-primary);
			}
		}

		&__checked {
			display: flex;
			align-items: flex-end;
			justify-content: center;
			margin-bottom: var(--spacing-200);
			gap: var(--spacing-100);

			& span {
				line-height: 1;
			}
		}

		&__code {
			margin-bottom: var(--spacing-100);
		}
		&__button {
			width: 100%;
		}
	}
</style>
