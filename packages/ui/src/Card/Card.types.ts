import type { Slot } from 'vue'

export type CardProps = {
  title?: string
  description?: string
  size?: 'large' | 'medium' | 'small'
}

export type CardSlots = {
  header?: Slot
  description?: Slot
  content?: Slot
  footer?: Slot
}
