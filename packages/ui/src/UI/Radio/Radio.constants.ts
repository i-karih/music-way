import type { RadioContext } from './Radio.types'
import type { InjectionKey } from 'vue'

export const RadioContextKey: InjectionKey<RadioContext> =
	Symbol('RadioContext')
