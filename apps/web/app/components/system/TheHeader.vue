<script setup lang="ts">
	import { UILogo, ThemeToggle } from '@music-way/ui'
	import { NavigationsForStudents } from '@/constants'
</script>

<template>
	<header class="header">
		<div class="container-xl">
			<div class="header__content">
				<div class="header__left">
					<NuxtLink
						to="/"
						class="header__link"
					>
						<UILogo />
					</NuxtLink>
					<nav class="header__nav">
						<ul class="header__list">
							<li
								v-for="link in NavigationsForStudents"
								:key="link.to"
								class="header__item"
							>
								<!--                <NavLink :to="link.to">-->
								<!--                  {{link.label}}-->
								<!--                </NavLink>-->
							</li>
						</ul>
					</nav>
				</div>
				<div class="header__right">
					<ThemeToggle />
					<!--          <div class="header-avatar">-->
					<!--            <span-->
					<!--                v-if="!!displayName"-->
					<!--                class="header-avatar__name"-->
					<!--            >-->
					<!--              {{displayName}}-->
					<!--            </span>-->
					<!--          </div>-->
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped></style>
