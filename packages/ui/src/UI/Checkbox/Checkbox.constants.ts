import type { CheckboxContext } from './Checkbox.types'
import type { InjectionKey } from 'vue'

export const CheckboxContextKey: InjectionKey<CheckboxContext> =
	Symbol('CheckboxContext')
