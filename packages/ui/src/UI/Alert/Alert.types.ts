import type { Slot } from 'vue'

import { AlertIconMap } from './Alert.constants'

export type AlertType = keyof typeof AlertIconMap

export type AlertSlots = {
	header?: Slot
	default?: Slot
	footer?: Slot
}

export type AlertProps = {
	titleTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	type?: AlertType
	title?: string
	message?: string
}
