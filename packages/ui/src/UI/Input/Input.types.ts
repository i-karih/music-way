import type { Slot } from 'vue'
import type { useIMask } from 'vue-imask'

export type MaskOptions = Parameters<typeof useIMask>[0]

export type InputModel = string | number

export type InputProps = {
	label?: string
	disabled?: boolean
	size?: 'large' | 'medium'
	status?: 'default' | 'success' | 'warning' | 'danger'
	message?: string
	placeholder?: string
	type?: 'text' | 'password' | 'email'
	readonly?: boolean
	mask?: string | MaskOptions
}

export type InputSlots = {
	label?: Slot
	left?: Slot
	right?: Slot
	message?: Slot
}

export type InputEmits = {
	input: [value: InputModel]
	blur: [value: InputModel]
	focus: [value: InputModel]
}
