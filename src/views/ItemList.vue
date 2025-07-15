<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Lista de Items</h2>
    <div v-if="loading" class="loading loading-spinner text-primary"></div>
    <div v-else class="grid gap-4">
      <div
        v-for="item in items"
        :key="item.id"
        class="card bg-base-100 shadow-md p-4"
      >
        <h3 class="font-semibold">{{ item.name }}</h3>
        <p class="text-sm">{{ item.description }}</p>
        <router-link :to="`/items/${item.id}`" class="btn btn-sm btn-accent mt-2">Ver Detalles</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useItemStore } from '@/stores/itemStore'

const itemStore = useItemStore()
const loading = ref(true)

onMounted(async () => {
  await itemStore.fetchItems()
  loading.value = false
})


const items = computed(() => itemStore.items)
</script>