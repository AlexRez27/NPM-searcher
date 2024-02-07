<template>
  <div class="container">
    <slot />
    <footer class="d-flex flex-column px-0">
      <footer-component></footer-component>
    </footer>
  </div>
</template>

<script setup lang="ts">
import FooterComponent from './FooterComponent.vue'
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  // max-width: 1400px;
  // margin: 0 auto;
  // margin-top: 50px;
}
</style>
