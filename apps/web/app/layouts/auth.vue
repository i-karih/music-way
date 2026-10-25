<script setup lang="ts">
  import { Logo, UITabs, UIRadio } from '@music-way/ui'

  const b = ref([])

  const options = ref([
    {
      label: 'Логин',
      value: 'login',
    },
    {
      label: 'Пароль',
      value: 'password',
    },
    {
      label: 'Пользователь',
      value: 'remember',
    },
  ])

  const a = ref(options.value[0].value)
</script>

<template>
  <section class="auth">
    <div class="auth__wrapper">
      <div class="auth__header">
        <Logo />
      </div>

      <div class="auth__tabs">
        <UITabs v-model="a" name="test" :options="options" class="default-tab" />
      </div>
      <div class="auth__checkbox">
        <UIRadio name="test" value="remember" />
        <UIRadio name="test" value="remember1" />
      </div>

      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .default-tab {
    min-width: 320px;
    width: 100%;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    & button {
      width: 100%;
    }
  }
  .auth {
    &__header {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: var(--space-8);
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-300);
      padding: 80px 0;
      max-width: 480px;
      margin: 0 auto;
    }

    &__checkbox {
      display: flex;
      align-items: center;
      gap: var(--spacing-300);
    }
  }
  .auth-card {
    padding: var(--space-10);

    text-align: center;

    &__actions {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-150);
      margin-top: var(--spacing-150);
      & button {
        width: 100%;
        margin-bottom: var(--space-100);
      }
    }
    &__email {
      display: grid;
      row-gap: var(--space-2);
    }
  }
</style>
