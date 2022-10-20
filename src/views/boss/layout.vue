<script setup lang="ts">
import { NIcon, MentionOption } from 'naive-ui'
import { RouterLink, useRouter } from 'vue-router'
import { h } from 'vue';
import { useStore } from '@/store/menuStore'

const router = useRouter()
const { menuTabs, addTab } = useStore()
const handleAddTab = (tab) => {
  addTab(tab)
}
const handleTabChange = (tab) => {
  addTab(tab)
  router.push(tab.path)
}
const tabTitle = ref(0)
const menuOptions = ref<MentionOption>([
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'bossMainIndex',
            params: {
              lang: 'zh-CN'
            }
          },
          onClick: handleAddTab({
            path: '/boss/index',
            name: '家'
          })
        },
        { default: () => '回家' }
      ),
    key: 'go-back-home',
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '且听风吟'
      ),
    key: 'hear-the-wind-sing',
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
          {
            label: '羊男',
            key: 'sheep-man',
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'bossMarkDown',
            params: {
              lang: 'zh-CN'
            }
          },
          onClick: handleAddTab({
            path: '/boss/markdownEdit',
            name: 'MarkDown编辑器'
          })
        },
        { default: () => 'MarkDown编辑器' }
      ),
    key: ''
  }
])
</script>
<template>
  <n-layout class="layout" has-sider>
    <n-layout-sider>
      <n-menu :options="menuOptions" ></n-menu>
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <n-tabs
          v-model:value="tabTitle"
          type="card"
          size="large"
          pane-style="padding: 0"
          closable>
          <n-tab-pane
            v-for="(item, index) in menuTabs"
            :key="'m' + index"
            :name="item.name"
            @click="handleTabChange(item)">
          </n-tab-pane>
        </n-tabs>
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