<template>
  <v-form class="form">
    <v-text-field
      class="form__input"
      elevated
      v-model="search"
      label="Search npm package"
      hide-details="auto"
    ></v-text-field>
    <v-btn :disabled="!search" type="submit" @click.prevent="click" class="form__btn">
      Search
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNPM } from '@/stores'

const store = useNPM()
const search = ref('')

const click = () => {
  store.getNPMItems(search.value)
  search.value = ''
}
</script>

<style lang="scss" scoped>
.form {
  &__btn {
    background-color: #2196f3;
    color: #fff;
    margin-top: 20px;
  }
}
</style>
