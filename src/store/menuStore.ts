import { defineStore, StoreDefinition } from 'pinia'

export const useStore: StoreDefinition = defineStore({
  // id 必须的 在所有store中唯一
  id: 'menu',
  // 返回对象的函数
  state: () => ({
    menuList: [],
    menuTabs: [],
  }),
  actions: {
    addTab(tab) {
      this.menuTabs.forEach(v => v.checked = false)
      let findTabIdx = this.menuTabs.findIndex(item => item.path === tab.path)
      if (findTabIdx > -1) {
        this.menuTabs[findTabIdx].checked = true
      } else {
        this.menuTabs.push(tab)
      }
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