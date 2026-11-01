<script setup lang="ts">
	import type { CodeInputProps, CodeInputSlot } from './CodeInput.types'
	import { computed, ref, useId, watch } from 'vue'

	const {
		length = 6,
		status = 'default',
		message = '',
		disabled = false,
		// TODO(i18n)
		label = 'Код подтверждения',
	} = defineProps<CodeInputProps>()

	const slot = defineSlots<CodeInputSlot>()

	const emit = defineEmits<{
		complete: [code: string]
	}>()

	const code = defineModel<string>({ default: '' })

	const id = useId()
	const input = ref<HTMLInputElement>()
	const isFocused = ref(false)
	const lastEmittedCode = ref('')

	const activeIndex = computed(() => Math.min(code.value.length, length - 1))

	// сброс lastEmittedCode при внешнем изменении v-model
	watch(code, (val) => {
		if (val.length < length) {
			lastEmittedCode.value = ''
		}
	})

	const moveCaretToEnd = () => {
		const el = input.value
		if (el) el.setSelectionRange(el.value.length, el.value.length)
	}

	const onFocus = () => {
		isFocused.value = true
		moveCaretToEnd()
	}

	const onInput = () => {
		code.value = code.value.replaceAll(/\D/g, '').slice(0, length)
		checkComplete()
	}

	const checkComplete = () => {
		if (code.value.length < length) {
			lastEmittedCode.value = ''
		} else if (code.value !== lastEmittedCode.value) {
			lastEmittedCode.value = code.value
			emit('complete', code.value)
		}
	}

	const reset = () => {
		code.value = ''
		lastEmittedCode.value = ''
		input.value?.focus()
	}

	const focus = () => {
		input.value?.focus()
	}

	defineExpose({
		reset,
		focus,
	})
</script>

<template>
	<div
		:class="[
			'ui-code-input',
			`ui-code-input--${status}`,
			{ 'ui-code-input--disabled': disabled },
		]"
	>
		<div class="ui-code-input__group">
			<input
				:id="id"
				ref="input"
				v-model="code"
				type="text"
				inputmode="numeric"
				autocomplete="one-time-code"
				:disabled="disabled"
				:aria-label="label"
				:aria-describedby="message ? `${id}-message` : undefined"
				class="ui-code-input__native"
				@input="onInput"
				@focus="onFocus"
				@blur="isFocused = false"
				@click="moveCaretToEnd"
				@select="moveCaretToEnd"
			/>
			<div
				v-for="i in length"
				:key="i"
				:class="[
					'ui-code-input__cell',
					{ 'ui-code-input__cell--active': isFocused && i - 1 === activeIndex },
					{ 'ui-code-input__cell--filled': code[i - 1] },
				]"
				aria-hidden="true"
			>
				<span class="ui-code-input__digit text-heading-l">{{
					code[i - 1]
				}}</span>
				<span
					v-if="isFocused && i - 1 === activeIndex && !code[i - 1]"
					class="ui-code-input__caret"
				/>
			</div>
		</div>
		<div
			v-if="message || slot.message"
			:id="`${id}-message`"
			class="ui-code-input__message text-body-m"
		>
			<slot name="message">
				{{ message }}
			</slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.ui-code-input {
		$self: &;

		&__group {
			position: relative;
			display: flex;
			align-items: center;
			gap: var(--spacing-50);
			cursor: text;

			@include sm {
				gap: var(--spacing-100);
			}
		}

		&__native {
			position: absolute;
			inset: 0;
			opacity: 0;
			z-index: 1;
			cursor: text;
			font-size: 16px; // предотвращает зум на iOS
		}

		&__cell {
			display: flex;
			align-items: center;
			justify-content: center;
			min-width: 0;
			width: 100%;
			max-width: 50px;
			height: 50px;

			background-color: var(--bg-base);
			border: var(--border-1) solid var(--border-strong);
			border-radius: var(--corner-12);
			transition:
				border-color 0.2s,
				box-shadow 0.2s;

			@include sm {
				height: 56px;
			}

			&--active {
				border-color: var(--border-focus);
				box-shadow: var(--shadow-ring-focus);
			}
		}

		&__digit {
			color: var(--text-primary);
		}

		&__caret {
			width: 2px;
			height: 24px;
			background-color: var(--text-link);
			animation: blink 1s step-end infinite;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		@keyframes blink {
			0%,
			100% {
				opacity: 1;
			}
			50% {
				opacity: 0;
			}
		}

		&__message {
			text-align: center;
			margin-top: var(--spacing-150);
			color: var(--text-muted);
			transition: color 0.2s;
		}

		&--disabled {
			#{$self} {
				&__cell {
					opacity: 0.4;
					cursor: not-allowed;
				}

				&__group {
					cursor: not-allowed;
				}

				&__native:disabled {
					pointer-events: none;
				}
			}
		}

		&--danger:not(#{$self}--disabled) {
			#{$self}__cell {
				border-color: var(--border-danger);

				&--active {
					box-shadow: var(--shadow-ring-danger);
				}
			}

			#{$self}__message {
				color: var(--text-danger);
			}
		}
	}
</style>
