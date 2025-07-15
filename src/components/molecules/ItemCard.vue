<!-- components/molecules/ItemCard.vue -->
<template>
  <div class="card bg-base-100 shadow-md p-4">
    <h3 class="font-semibold">{{ item.name }}</h3>
    <router-link :to="`/items/${item.id}`" class="btn btn-sm btn-accent mt-2">
      <p class="text-sm">{{ item.description }}</p>
    </router-link>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>