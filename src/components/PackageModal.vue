<template>
  <v-dialog v-model="toggleModal" width="auto">
    <v-card v-if="loaded">
      <v-card-title tag="h2" text-align: center>
        {{ name }}
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(value, key) in store.packageInfo" :key="value">
            <span class="title">{{ key }}</span
            >: <span v-if="key !== 'homepage'" class="value">{{ value }}</span>
            <a :href="value" v-else class="value">{{ value }}</a>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
    <v-progress-circular v-else :size="150" color="primary" indeterminate></v-progress-circular>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, computed, onMounted, ref } from 'vue'
import { useNPM } from '@/stores'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  },
  modal: {
    type: Boolean,
    required: true,
    default: false
  }
})
const emit = defineEmits(['closeModal'])
const toggleModal = computed(() => props.modal)
const store = useNPM()
const loaded = ref(false)

const close = () => {
  emit('closeModal')
}

onMounted(async () => {
  await store.getPackage(props.name, props.version)
  loaded.value = true
})
</script>

<style lang="scss">
.title {
  font-weight: bold;
}

.v-card-title {
  text-align: center;
  font-weight: bold !important;
  font-size: 20px !important;
}
</style>
