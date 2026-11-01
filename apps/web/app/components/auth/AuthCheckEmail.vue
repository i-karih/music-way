<script setup lang="ts">
	import {
		UIAlert,
		UIButton,
		UICodeInput,
		UIInlineButton,
		UISpinner,
	} from '@music-way/ui'
	import type { AuthStepEmit } from '~/types'

	import { useCountdown, usePlural } from '~/composables'
	import { AuthCodeState, AuthStep } from '~/constants'

	// TODO(api) получать с бэка
	const TIME_UNTIL_RESEND = 60
	const NUMBER_ATTEMPTS = 5

	const { formatted, start, restart, isExpired } =
		useCountdown(TIME_UNTIL_RESEND)

	const { email } = defineProps<{ email: string }>()

	const { plural } = usePlural()

	const emit = defineEmits<AuthStepEmit>()

	const attempt = ref(NUMBER_ATTEMPTS)

	const codeInput = ref<InstanceType<typeof UICodeInput>>()
	const code = ref('')
	const isCodeLoading = ref<boolean>(false)

	const currentState = ref<AuthCodeState>(AuthCodeState.Idle)

	const currentMessage = computed(() => {
		if (currentState.value === AuthCodeState.Invalid) {
			const word = plural(attempt.value, ['попытка', 'попытки', 'попыток'])
			return `Неверный код. Осталось ${attempt.value} ${word}`
		}
		// TODO(api) время жизни кода с бэка
		return 'Код действует 10 минут. Нет письма — проверь «Спам»'
	})

	const statusText = computed(() => {
		if (isCodeLoading.value) return 'Проверяем код'
		if (currentState.value === AuthCodeState.Invalid)
			return currentMessage.value
		return ''
	})

	const isCodeInputDisabled = computed(
		() =>
			currentState.value === AuthCodeState.Failed ||
			attempt.value === 0 ||
			isCodeLoading.value
	)

	// TODO(api) заменить заглушку на вызов API
	const handlerComplete = () => {
		isCodeLoading.value = true

		setTimeout(() => {
			// Cycle through states: Idle → Invalid → Failed
			const stateCount = Object.keys(AuthCodeState).length / 2
			currentState.value = ((currentState.value + 1) %
				stateCount) as AuthCodeState

			isCodeLoading.value = false
			codeInput.value?.reset()
		}, 2000)
	}

	const handlerBackStep = () => {
		emit('changeStep', AuthStep.Email)
	}

	const handlerResendCode = () => {
		restart()
		currentState.value = AuthCodeState.Idle
	}

	onMounted(() => {
		start()
	})
</script>

<template>
	<div class="auth-check-email">
		<div role="status" class="visually-hidden">
			{{ statusText }}
		</div>
		<div class="auth-check-email__header">
			<h2 class="auth-check-email__title text-heading-l">
				Введи код из письма
			</h2>
			<!-- TODO(api) длина кода с бэка -->
			<p class="auth-check-email__description text-body-m">
				Отправили 6 цифр на <span class="accent font-medium">{{ email }}</span>
			</p>
			<div class="auth-check-email__code">
				<UICodeInput
					ref="codeInput"
					v-model="code"
					:status="
						currentState === AuthCodeState.Invalid ? 'danger' : 'default'
					"
					:disabled="isCodeInputDisabled"
					@complete="handlerComplete"
				>
					<template #message>
						<!-- TODO(api) время жизни кода с бэка -->
						<UIAlert
							v-if="currentState === AuthCodeState.Failed"
							type="warning"
						>
							Код больше не действует: прошло 10 минут или закончились попытки
						</UIAlert>
						<span v-else class="auth-check-email__message">
							{{ currentMessage }}
						</span>
					</template>
				</UICodeInput>
			</div>
			<div v-if="!isCodeLoading" class="auth-check-email__no-email">
				<div v-if="!isExpired" class="auth-check-email__cooldown text-body-m">
					<span>Отправить ещё раз через </span>
					<span class="accent font-medium"
						>{{ formatted.minutes }} : {{ formatted.seconds }}</span
					>
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
			<div v-else class="auth-check-email__checked">
				<UISpinner size="medium" />
				<span class="text-body-m">Проверяем код</span>
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
	.visually-hidden {
		@include visually-hidden;
	}

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
