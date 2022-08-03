import { defineStore } from 'pinia'

export const useStore = defineStore({
  // id 必须的 在所有store中唯一
  id: 'globalState',
  // 返回对象的函数
  state: () => ({
    count: 1,
  }),
  actions: {
    increaseCount() {
      this.count ++
    }
  }
})