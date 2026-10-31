import { inject, computed } from 'vue'
import type { Ref } from 'vue'
import type { CheckboxModel, CheckboxGroupValue } from '../Checkbox.types'
import { CheckboxContextKey } from '../Checkbox.constants'

export function useCheckboxGroup(
  localModel: Ref<CheckboxModel | undefined>,
  value: () => string | number
) {
  const context = inject(CheckboxContextKey, null)

  const model = computed({
    get: () => (context ? context.model.value : localModel.value),
    set: (val: CheckboxModel) => {
      if (context) {
        context.model.value = val as CheckboxGroupValue
      } else {
        localModel.value = val
      }
    },
  })

  const isChecked = computed(() => {
    if (context) {
      return context.model.value.includes(value())
    }
    return Array.isArray(localModel.value) ? localModel.value.includes(value()) : localModel.value
  })

  return {
 model,
isChecked 
}
}
