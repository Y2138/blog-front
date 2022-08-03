import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import test from './test'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  ...test
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router