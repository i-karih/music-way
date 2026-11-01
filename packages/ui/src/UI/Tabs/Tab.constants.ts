import type { TabContext } from './Tab.types'
import type { InjectionKey } from 'vue'

export const TabContextKey: InjectionKey<TabContext> = Symbol('TabContextKey')
