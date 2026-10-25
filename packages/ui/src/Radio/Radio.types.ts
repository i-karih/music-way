import type { Ref } from 'vue'

type RadioName = string

export type RadioModel = string | number

export type RadioPrimitiveProps = {
  name: RadioName
  value: RadioModel
  disabled?: boolean
}

export type RadioButtonProps = {
	value: RadioModel
	disabled?: boolean
}

export type RadioContainerProps = {
	name: RadioName
	direction?: 'horizontal' | 'vertical'
}

export type RadioContext = {
	name: RadioName
	model: Ref<RadioModel>
}


