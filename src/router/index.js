import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import ItemList from '@/views/ItemList.vue'
import ItemDetail from '@/views/ItemDetail.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/items', name: 'ItemList', component: ItemList },
  { path: '/items/:id', name: 'ItemDetail', component: ItemDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router