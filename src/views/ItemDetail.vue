<template>
  <div>
    <router-link to="/items" class="btn btn-sm mb-4">← Volver</router-link>

    <div v-if="loading" class="loading loading-spinner text-primary"></div>

    <div v-else-if="item">
      <ItemDetailDisplay :item="item" />
    </div>

    <div v-else>
      <p class="text-error">Item no encontrado.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useItemStore } from '@/stores/itemStore'
import { useRoute } from 'vue-router'
import ItemDetailDisplay from '@/components/molecules/ItemDetailDisplay.vue'

const route = useRoute()
const itemStore = useItemStore()
const loading = ref(true)
const item = computed(() => itemStore.selectedItem)

onMounted(async () => {
  try {
    await itemStore.fetchItem(route.params.id)
  } catch (err) {
    console.error('Error al cargar item:', err)
  } finally {
    loading.value = false
  }
})
</script>