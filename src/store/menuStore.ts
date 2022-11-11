import { defineStore, StoreDefinition } from 'pinia'

export type MenuTabs = {
  name: string
  path: string
  checked: boolean
}

export const useMenuStore: StoreDefinition = defineStore({
  // id 必须的 在所有store中唯一
  id: 'menu',
  // 返回对象的函数
  state: () => ({
    menuList: [],
    menuTabs: [{
      path: '/boss/index',
      name: '主页',
      checked: true
    }] as MenuTabs[],
  }),
  actions: {
    // 向tabList中添加tab
    addTab(tab: MenuTabs) {
      this.menuTabs.forEach(v => v.checked = false)
      let findTabIdx = this.menuTabs.findIndex(item => item.path === tab.path)
      if (findTabIdx > -1) {
        this.menuTabs[findTabIdx].checked = true
      } else {
        this.menuTabs.push(tab)
      }
    },
    closeTab(tab: MenuTabs) {
      let findTabIdx = this.menuTabs.findIndex(item => item.path === tab.path)
      if (findTabIdx > 0) {
        this.menuTabs.splice(findTabIdx, 1)
        this.menuTabs[findTabIdx - 1].checked = true
      }
      console.log('closeTab', this.menuTabs)
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