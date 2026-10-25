import type { Slot } from 'vue'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = {
  to?: string
  href?: string
  size?: ButtonSize
  variant?: ButtonVariant
  loadingText?: string
  isLoading?: boolean
  isDisabled?: boolean
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
