<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="card w-full max-w-md bg-base-100 shadow-xl p-6">
      <h2 class="text-xl font-bold mb-4">Login</h2>

      <BaseInput
        v-model="username"
        placeholder="Username"
        class="mb-3"
      />

      <BaseInput
        v-model="password"
        type="password"
        placeholder="Password"
        class="mb-3"
      />

      <BaseButton :loading="loading" @click="handleLogin">
        Login
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import BaseInput from "@/components/atoms/BaseInput.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";

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