<template>
  <v-data-table
    no-data-text="Found no packages"
    :items="packageItems"
    :items-per-page="10"
    @click:row="showModal"
  >
  </v-data-table>
  <package-modal
    v-if="modal"
    @close-modal="closeModal"
    :modal="modal"
    :name="packageData.name"
    :version="packageData.version"
  ></package-modal>
</template>

<script setup lang="ts">
import type { PackageItem } from '@/types'
import PackageModal from './PackageModal.vue'
import { ref, reactive } from 'vue'
import { useNPM } from '@/stores'

const props = defineProps({
  packageItems: {
    type: Array as () => PackageItem[],
    required: true
  }
})
const store = useNPM()
const modal = ref(false)

const showModal = (event: Event, { item }: { item: PackageItem }) => {
  modal.value = true
  setPackageName(item)
}

const closeModal = () => {
  modal.value = false
  store.cleanPackageInfo()
}

const packageData = reactive({ name: '', version: '' })

const setPackageName = (item: PackageItem) => {
  packageData.name = item.name
  packageData.version = item.version
}
</script>

<style lang="scss">
.v-data-table__tr:hover {
  background-color: #ccc;
  cursor: pointer;
}
</style>
