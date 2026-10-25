<script lang="ts" setup>
  const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="container-xl">
      <div class="footer__copyright">© {{ currentYear }} Music Way. Все права защищены.</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
