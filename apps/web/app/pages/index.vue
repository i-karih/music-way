<script setup lang="ts">
	import { UIButton, useNotifications } from '@music-way/ui'
	definePageMeta({
		layout: 'auth',
	})

	const {
		message,
		info
	} = useNotifications()
</script>

<template>
	<div class="container-sm">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at
		dolorem fugiat non quo tenetur? Lorem ipsum dolor sit amet. Lorem ipsum
		dolor sit amet, consectetur adipisicing elit. Aliquam beatae doloremque
		excepturi maiores! Nisi, veritatis.

		<div class="buttons">
			<UIButton
				@click="info('asdasdaa sjhdgajhd gasjhda')"
			>
				Отправить
			</UIButton>

			<UIButton
				@click="message('asdasdaa sjhdgajhd gasjhda')"
			>
				Отправить
			</UIButton>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.buttons {
		display: flex;

		gap: 8px;
		margin-top: 24px;

		& button {
			width: 100%;
		}
	}
</style>
