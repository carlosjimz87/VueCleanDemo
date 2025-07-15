<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="card w-full max-w-md bg-base-100 shadow-xl p-6">
      <h2 class="text-xl font-bold mb-4">Login</h2>
      <input v-model="username" class="input input-bordered w-full mb-3" placeholder="Username" />
      <input v-model="password" type="password" class="input input-bordered w-full mb-3" placeholder="Password" />
      <button @click="handleLogin" class="btn btn-primary w-full" :disabled="loading">
        <span v-if="!loading">Login</span>
        <span v-else class="loading loading-spinner loading-sm"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const username = ref('')
const password = ref('')
const loading = ref(false)
const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  loading.value = true
  await auth.login(username.value, password.value)
  loading.value = false
  router.push('/dashboard')
}
</script>