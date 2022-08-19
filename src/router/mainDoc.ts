import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/docs',
    name: 'docs',
    component: () => import('../views/main/index.vue')
  }
]

export default routes