<template>
  <div>
    <PageHeader class="mb-4">Lista de Items</PageHeader>

    <div v-if="loading" class="loading loading-spinner text-primary"></div>

    <div v-else class="grid gap-4">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import {useItemStore} from '@/stores/itemStore'
import PageHeader from '@/components/atoms/PageHeader.vue'
import ItemCard from '@/components/molecules/ItemCard.vue'

const itemStore = useItemStore()
const loading = ref(true)

onMounted(async () => {
  await itemStore.fetchItems()
  loading.value = false
})

const items = computed(() => itemStore.items)
</script>