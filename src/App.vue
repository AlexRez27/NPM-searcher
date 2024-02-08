<template>
  <ContainerComponent>
    <body>
      <search-component></search-component>
      <package-list v-if="store.NPMItems.length > 0" :package-items="store.NPMItems"></package-list>
      <v-progress-circular
        v-if="store.isLoaded && store.NPMItems.length === 0"
        :size="150"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </body>
    <footer class="d-flex flex-column px-0">
      <footer-component></footer-component>
    </footer>
  </ContainerComponent>
</template>

<script setup lang="ts">
import SearchComponent from './components/SearchComponent.vue'
import ContainerComponent from './components/ContainerComponent.vue'
import PackageList from './components/PackageList.vue'
import { useNPM } from '@/stores'
import FooterComponent from '@/components/FooterComponent.vue'
const store = useNPM()
</script>
