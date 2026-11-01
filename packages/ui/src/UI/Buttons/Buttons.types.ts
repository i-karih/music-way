import type { Component, Slot } from 'vue'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = {
	/** Компонент ссылки (например NuxtLink). Работает только вместе с `to` */
	as?: Component
	to?: string
	href?: string
	size?: ButtonSize
	variant?: ButtonVariant
	loadingText?: string
	loading?: boolean
	disabled?: boolean
}

export type InlineButtonProps = ButtonProps & {
	underline?: boolean
}

export type PrimitiveProps = Omit<ButtonProps, 'variant' | 'size'>

export type ButtonSlots = {
	left?: Slot
	right?: Slot
	default?: Slot
}
