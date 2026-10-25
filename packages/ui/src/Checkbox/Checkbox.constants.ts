import type { InjectionKey } from 'vue'
import type { CheckboxContext } from './Checkbox.types'

export const CheckboxContextKey: InjectionKey<CheckboxContext> = Symbol('CheckboxContext')
