<script setup lang="ts">
	import {
		UICodeInput,
		UIInlineButton,
		UIButton,
		UISpinner,
		UIAlert
	} from '@music-way/ui'
	import { useCountdown, usePlural } from '~/composables'
	import type {AuthStepEmit } from '~/types'
	import { AuthStep, AuthCodeState } from '~/constants'

	const TIME_UNTIL_RESEND = 60
	const NUMBER_ATTEMPTS = 5

	const {
		formatted,
		start,
		restart,
		isExpired
	} = useCountdown(TIME_UNTIL_RESEND)

	const {
		email
	} = defineProps<{email: string}>()

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
			return `Неверный код. Осталось ${attempt.value} ${word}.`
		}
		return 'Код действует 10 минут. Нет письма — проверь «Спам».'
	})

	const isCodeInputDisabled = computed(() => (currentState.value === AuthCodeState.Failed || attempt.value === 0 || isCodeLoading.value))

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

	onMounted( () => {
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
					:status="currentState === AuthCodeState.Invalid ? 'danger' : 'default'"
					:disabled="isCodeInputDisabled"
					@complete="handlerComplete"
				>
					<template #message>
						<UIAlert
							v-if="currentState === AuthCodeState.Failed"
							type="warning"
						>
							Код больше не действует: прошло 10 минут или закончились попытки.
						</UIAlert>
						<span
							v-else
							class="auth-check-email__message"
						>
							{{ currentMessage }}
						</span>
					</template>
				</UICodeInput>
			</div>
			<div
				v-if="!isCodeLoading"
				class="auth-check-email__no-email"
			>
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
			<div
				v-else
				role="status"
				class="auth-check-email__checked"
			>
				<UISpinner
					size="medium"
				/>
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
