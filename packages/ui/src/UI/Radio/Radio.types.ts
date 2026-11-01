import type { IconName } from '../Icons/Icon.types'
import type { Ref } from 'vue'

export type RadioModel = string | number

export type RadioPrimitiveProps = {
	name: string
	value: RadioModel
	disabled?: boolean
}

export type RadioButtonProps = {
	label?: string
	description?: string
	value: RadioModel
	disabled?: boolean
	error?: boolean
}

export type RadioButtonCardProps = RadioButtonProps & {
	size?: 'small' | 'medium' | 'large'
	heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
	iconName?: IconName
}

export type RadioContainerProps = {
	name: string
	direction?: 'horizontal' | 'vertical'
}

export type RadioGroupProps = RadioContainerProps & {
	options: RadioButtonProps[]
	disabled?: boolean
}

export type RadioCardOption = {
	value: RadioModel
	label?: string
	description?: string
	iconName?: IconName
	disabled?: boolean
}

export type RadioCardGroupProps = RadioContainerProps & {
	options: RadioCardOption[]
	disabled?: boolean
}

export type RadioContext = {
	name: string
	model: Ref<RadioModel>
}
