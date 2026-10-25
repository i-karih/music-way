<script setup lang="ts">
  import type { Component } from 'vue'
  import { RouterLink } from 'vue-router'
  import type { ButtonSlots, PrimitiveProps } from './Buttons.types'
  import { UISpinner } from '../Spinner'

  type As = Component | 'a' | 'button'

  const {
    isDisabled = false,
    isLoading = false,
    loadingText,
    to = '',
    href = '',
  } = defineProps<PrimitiveProps>()

  const slots = defineSlots<ButtonSlots>()

  const component = computed<As>(() => {
    if (to) return RouterLink
    if (href) return 'a'
    return 'button'
  })

  const linkProps = computed(() => {
    if (to) return { to }
    if (href)
      return {
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    return { disabled: isDisabled || isLoading || undefined }
  })
</script>

<template>
  <component
    :is="component"
    v-bind="linkProps"
    class="ui-button"
    :class="{
      'ui-button--loading': isLoading,
      'ui-button--disabled': isDisabled,
    }"
  >
    <span v-if="!isLoading" class="ui-button__content">
      <span v-if="slots.left" class="ui-button__left">
        <slot name="left" />
      </span>

      <slot />

      <span v-if="slots.right" class="ui-button__right">
        <slot name="right" />
      </span>
    </span>

    <span v-else class="ui-button__loading">
      <UISpinner size="auto" />
      {{ loadingText }}
    </span>
  </component>
</template>

<style scoped lang="scss">
  .ui-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;

    &__content {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-100);
      width: 100%;
      height: 100%;
    }

    &:disabled,
    &--disabled {
      opacity: 0.7;
    }

    &__loading {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-100);
    }

    &:disabled,
    &--disabled,
    &--loading {
      pointer-events: none;
    }
  }
</style>
