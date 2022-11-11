<script setup lang="ts">
import { useMenu } from './useMenu'
// 关闭标签页

// 左侧菜单、上方标签页
const { menuOptions, menuTabs, handleCloseTab, handleTabChange } = useMenu()
let tabsIndex = computed(() => {
  return menuTabs.value.findIndex(item => item.checked === true)
})
</script>
<template>
  <n-layout class="layout" has-sider>
    <n-layout-sider>
      <n-menu :options="menuOptions"></n-menu>
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <div class="boss-menu-header">
          <n-space>
            <n-tag v-for="(item, index) in menuTabs"
              :key="'m' + index"
              :bordered="false"
              :closable="index > 0"
              :type="item.checked ? 'primary' : 'default'"
              size="large"
              :onClose="() => handleCloseTab(item)"
              :internalStopClickPropagation="true"
              @click="handleTabChange(item)">
              {{ item.name }}
            </n-tag>
          </n-space>
        </div>
      </n-layout-header>
      <n-layout class="layout-main">
        <router-view></router-view>
      </n-layout>
      <n-layout-footer class="layout-footer">
        Footer
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  margin: 0;
}
.boss-menu-header {
  padding: 10px 0;
  .n-tag {
    cursor: pointer !important;
  }
}
.layout-main {
  padding: 12px;
  height: calc(100% - 24px - 42px)
}
.layout-footer {
  position: absolute;
  bottom: 8px;
  width: 100%;
}
</style>