<template>
  <div class="bg-teal d-flex w-100 align-center px-4">
    <span class="name">Made by Rezident Oleksii</span>

    <v-spacer></v-spacer>

    <v-btn
      v-for="icon in icons"
      :key="icon.icon"
      class="mx-4"
      :icon="icon.icon"
      variant="plain"
      size="large"
      :href="icon.link"
      target="_blank"
    ></v-btn>
  </div>
</template>

<script setup lang="ts">
const icons = [
  { icon: 'mdi-github', link: 'https://github.com/AlexRez27' },
  { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/oleksii-rezident-838559207/' }
]
</script>

<style lang="scss" scoped>
.name {
  font-weight: bold;
}
</style>
