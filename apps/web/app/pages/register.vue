<script setup lang="ts">
	import { UIModal, UIButton } from '@music-way/ui'

	definePageMeta({
		layout: 'auth',
	})

	const isModalOpen = ref<boolean>(false)

	const toggleModal = () => {
		isModalOpen.value = !isModalOpen.value
	}
</script>

<template>
	<div class="register">
		<h1 class="register__title text-heading-l">Регистрация в разработке</h1>
		<p class="register__description text-body-m">
			Страница регистрации пока в работе. Сейчас вход доступен по коду из
			письма, без пароля. Ниже можно посмотреть модальное окно из
			дизайн-системы.
		</p>
		<div class="register__actions">
			<UIButton class="register__button" @click="toggleModal">
				Открыть модальное окно
			</UIButton>
		</div>

		<UIModal v-model="isModalOpen" title="Подтвердите почту">
			Мы отправили письмо с кодом для входа. Если письма нет, проверьте папку
			«Спам» или запросите код повторно.
			<template #footer>
				<UIButton variant="secondary" @click="toggleModal"> Отмена </UIButton>
				<UIButton @click="toogleModal"> Понятно </UIButton>
			</template>
		</UIModal>
	</div>
</template>

<style>
	:root {
		--auth-form-width: 860px;
	}
</style>

<style scoped lang="scss">
	.register {
		&__title {
			margin-bottom: var(--spacing-200);
		}

		&__description {
			margin-bottom: var(--spacing-150);
		}

		&__button {
			width: 100%;
		}
	}
</style>
