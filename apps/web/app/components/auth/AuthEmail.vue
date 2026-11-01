<script setup lang="ts">
	import type { AuthStepEmit } from '~/types'

	import { UIButton, UIInput } from '@music-way/ui'
	import { AuthStep } from '~/constants'
	import { debounce, isValidEmail } from '~/utils'

	const emit = defineEmits<AuthStepEmit>()

	const email = defineModel<string>('email', { required: true })

	const isEmailValid = computed(
		() => email.value.length > 0 && isValidEmail(email.value)
	)

	const errorMessage = ref('')

	const checkValidEmail = debounce(() => {
		if (isEmailValid.value) return
		errorMessage.value =
			email.value.length > 0
				? 'Введите верное значение почты'
				: 'Поле обязательно для заполнения'
	}, 500)

	const handleInput = () => {
		errorMessage.value = ''
		checkValidEmail()
	}

	const handleSubmit = () => {
		emit('changeStep', AuthStep.CheckEmail)
	}
</script>

<template>
	<div class="auth-email">
		<h2 class="auth-email__title text-heading-l">Вход в кабинет</h2>
		<p class="auth-email__description text-body-m">
			Введи почту - пришлём код для входа. Пароль не нужен.
		</p>
		<form class="auth-email__form" @submit.prevent="handleSubmit">
			<div class="auth-email__inputs">
				<UIInput
					v-model="email"
					type="email"
					label="Email"
					placeholder="name@example.com"
					:message="errorMessage"
					:status="errorMessage ? 'danger' : 'default'"
					@input="handleInput"
				/>
			</div>
			<div class="auth-email__buttons">
				<UIButton :disabled="!isEmailValid" class="auth-email__button">
					Отправить код для входа
				</UIButton>
			</div>
		</form>
	</div>
</template>

<style scoped lang="scss">
	.auth-email {
		&__title,
		&__description {
			text-align: center;
		}

		&__title {
			margin-bottom: var(--spacing-100);
		}
		&__description {
			color: var(--text-muted);
			margin-bottom: var(--spacing-300);
		}

		&__inputs {
			margin-bottom: var(--spacing-250);
		}

		&__button {
			width: 100%;
		}
	}
</style>
