<script setup lang="ts">
	import { UIButton, useToast } from '@music-way/ui'
	definePageMeta({
		layout: 'auth',
	})

	const { message, info } = useToast()
</script>

<template>
	<div class="dashboard">
		<div class="container-sm">
			<h1 class="dashboard__title text-heading-l">Кабинет в разработке</h1>
			<p class="dashboard__description text-body-m">
				Пока здесь можно проверить уведомления из дизайн-системы.
			</p>
			<div class="dashboard__actions">
				<UIButton
					class="dashboard__button"
					@click="info('Код для входа отправлен на почту')"
				>
					Показать информацию
				</UIButton>
				<UIButton
					class="dashboard__button"
					@click="message('Изменения сохранены')"
				>
					Показать сообщение
				</UIButton>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.dashboard {
		&__title {
			margin-bottom: var(--spacing-200);
		}

		&__description {
			margin-bottom: var(--spacing-100);
		}
		&__actions {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-150);
		}

		&__button {
			width: 100%;
		}
	}
</style>
