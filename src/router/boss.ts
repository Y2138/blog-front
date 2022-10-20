import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/boss',
    name: 'bossMain',
    component: () => import('../views/boss/layout.vue'),
    children: [
      {
        path: '/boss/index',
        name: 'bossMainIndex',
        component: () => import('../views/boss/dashboard.vue')
      },
      {
        path: '/boss/markdownEdit',
        name: 'bossMarkDown',
        component: () => import('../views/boss/mdViews/md.vue')
      }
    ]
  }
]

export default routes