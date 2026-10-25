import type { Slot, Ref } from 'vue'

type CheckboxValue = string | number

export type CheckboxPrimitiveProps = {
  disabled?: boolean
  value?: CheckboxValue
}

export type CheckboxChipProps = CheckboxPrimitiveProps & {
  label?: string
}

export type CheckboxProps = CheckboxChipProps & {
  error?: boolean
}

export type CheckboxSlots = {
  label?: Slot
  icon?: Slot
}

export type CheckboxGroupValue = CheckboxValue[]
export type CheckboxContext = { model: Ref<CheckboxGroupValue> }

export type CheckboxModel = boolean | CheckboxGroupValue

export type CheckboxContainerProps = {
  direction?: 'horizontal' | 'vertical'
}

export type CheckboxGroupProps = CheckboxContainerProps & {
  type?: 'checkbox' | 'chip'
  disabled?: boolean
  options: {
    label: string
    value: CheckboxValue
    disabled?: boolean
  }[]
}
