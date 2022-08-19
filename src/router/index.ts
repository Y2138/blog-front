import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import mainDoc from './mainDoc'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/docs'
  },
  ...mainDoc
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router