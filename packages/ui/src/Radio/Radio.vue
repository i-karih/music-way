<script setup lang="ts">
  import RadioPrimitive from './RadioPrimitive.vue'
  import type { RadioPrimitiveProps, RadioModel } from './Radio.types'

  const {
    name,
    value,
  } = defineProps<RadioPrimitiveProps>();

  const model = defineModel<RadioModel>()
</script>

<template>
  <RadioPrimitive
      v-model="model"
      :name="name"
      :value="value"
  >
    Lorem ipsum dolor sit.
  </RadioPrimitive>
</template>

<style scoped lang="scss">

</style>
