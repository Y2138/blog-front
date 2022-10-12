import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import mainDoc from './mainDoc'
import boss from './boss'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/docs'
  },
  ...mainDoc,
  ...boss
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router