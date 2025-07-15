<template>
  <div>
    <h1 class="text-2xl font-bold">Bienvenido, {{ user?.username }}</h1>
    <router-link to="/items" class="btn btn-outline mt-4">Ir a Lista de Items</router-link>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
const { user } = useAuthStore()
</script>