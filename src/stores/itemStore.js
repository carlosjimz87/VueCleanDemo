import { defineStore } from 'pinia'
import { getItems, getItemById } from '@/services/api/itemService'

export const useItemStore = defineStore('item', {
  state: () => ({
    items: [],
    selectedItem: null,
  }),
  actions: {
    async fetchItems() {
      try {
        this.items = await getItems()
      } catch (error) {
        console.error('Error al obtener la lista de items:', error)
        this.items = []
      }
    },
    async fetchItem(id) {
      try {
        const item = await getItemById(id)
        this.selectedItem = item || null
      } catch (error) {
        console.error(`Error al obtener el item con id ${id}:`, error)
        this.selectedItem = null
      }
    },
  },
})