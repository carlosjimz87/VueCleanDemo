<!-- components/molecules/ItemDetailDisplay.vue -->
<template>
  <div>
    <h2 class="text-2xl font-bold">{{ item.name }}</h2>
    <p class="text-base">{{ item.description }}</p>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>