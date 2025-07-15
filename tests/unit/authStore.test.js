import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('logs in a user', async () => {
    const store = useAuthStore()
    await store.login('carlos', '1234')
    expect(store.user).toEqual({ username: 'carlos' })
  })

  it('logs out the user', async () => {
    const store = useAuthStore()
    await store.login('test', '123')
    store.logout()
    expect(store.user).toBe(null)
  })
})