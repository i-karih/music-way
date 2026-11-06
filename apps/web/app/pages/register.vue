<script setup lang="ts">
	import { UIModal, UIButton } from '@music-way/ui'

	definePageMeta({
		layout: 'auth',
	})

	const isModalOpen = ref<boolean>(false)
</script>

<template>
	<h1>Register page (WIP)</h1>

	<div>
		<UIButton @click="isModalOpen = !isModalOpen"> Открыть </UIButton>

		<UIModal v-model="isModalOpen" title="lorem ipsum dolor">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
			consectetur corporis ex exercitationem expedita harum perferendis? Animi
			architecto assumenda atque beatae dicta eius facere, fuga impedit
			necessitatibus omnis sequi, tempora ut veritatis! Alias animi commodi
			consequatur culpa eaque et explicabo ipsum iusto magni nulla officiis
			placeat reprehenderit temporibus, voluptates voluptatum. Asperiores atque
			autem commodi earum eum exercitationem illum maxime, necessitatibus porro,
			praesentium quam similitude sit vero? Ex, explicabo iure minima nisi
			optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
			consectetur corporis ex exercitationem expedita harum perferendis?
			<template #footer>
				<UIButton variant="secondary" @click="isModalOpen = !isModalOpen">
					Close
				</UIButton>
				<UIButton @click="isModalOpen = !isModalOpen"> Сохранить </UIButton>
			</template>
		</UIModal>
	</div>
</template>

<style>
	:root {
		--auth-form-width: 860px;
	}
</style>
