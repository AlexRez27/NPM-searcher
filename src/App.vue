<template>
  <ContainerComponent>
    <search-component></search-component>
    <package-list v-if="store.NPMItems.length > 0" :package-items="store.NPMItems"></package-list>
    <v-progress-circular
      v-if="store.isLoaded && store.NPMItems.length === 0"
      :size="150"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <!-- <v-alert v-else> No packages found </v-alert> -->
  </ContainerComponent>
</template>

<script setup lang="ts">
import SearchComponent from './components/SearchComponent.vue'
import ContainerComponent from './components/ContainerComponent.vue'
import PackageList from './components/PackageList.vue'
import { useNPM } from '@/stores'

const store = useNPM()
</script>
