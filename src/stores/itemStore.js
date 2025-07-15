import { defineStore } from 'pinia'
import { getItems, getItemById } from '@/services/api/itemService'

export const useItemStore = defineStore('item', {
  state: () => ({
    items: [],
    selectedItem: null,
  }),
  actions: {
    async fetchItems() {
      this.items = await getItems()
    },
    async fetchItem(id) {
      this.selectedItem = await getItemById(id)
    },
  },
})