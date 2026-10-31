import type { InjectionKey } from 'vue'
import type { TabContext } from './Tab.types'

export const TabContextKey: InjectionKey<TabContext> = Symbol('TabContextKey')
