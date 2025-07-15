<!-- components/atoms/BaseButton.vue -->
<template>
  <button
    class="btn btn-primary w-full"
    :disabled="loading"
    v-bind="$attrs"
  >
    <slot v-if="!loading" />
    <span v-else class="loading loading-spinner loading-sm"></span>
  </button>
</template>

<script setup>
defineProps({
  loading: Boolean,
})
</script>