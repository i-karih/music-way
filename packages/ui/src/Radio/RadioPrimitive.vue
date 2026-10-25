<script setup lang="ts">
  import type { RadioPrimitiveProps } from './Radio.types'
  const model = defineModel()

  const { name, value, disabled = false } = defineProps<RadioPrimitiveProps>()
</script>

<template>
  <label class="ui-radio">
    <input
      v-model="model"
      :name="name"
      :value="value"
      :disabled="disabled"
      type="radio"
      class="ui-radio__input"
    />
    <slot />
  </label>
</template>
