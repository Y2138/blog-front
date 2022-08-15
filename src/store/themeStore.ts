import { defineStore, StoreDefinition } from 'pinia'

export const useStore: StoreDefinition = defineStore({
  // id 必须的 在所有store中唯一
  id: 'globalState',
  // 返回对象的函数
  state: () => ({
    count: 1,
    customTheme: 'dark'
  }),
  actions: {
    increaseCount() {
      this.count ++
    },
    changeTheme() {
      this.customTheme === 'dark' ? this.customTheme = 'light' : this.customTheme = 'dark'
      setHTMLDataSet(this.customTheme)
    }
  }
})

function setHTMLDataSet(newTheme: string): void {
  const doc: HTMLElement = document.documentElement
  doc.dataset.theme = newTheme
}