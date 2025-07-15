import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(username, password) {
      // Simulación de login con delay
      return new Promise((resolve) => {
        setTimeout(() => {
          this.user = { username }
          resolve(true)
        }, 1000)
      })
    },
    logout() {
      this.user = null
    },
  },
})