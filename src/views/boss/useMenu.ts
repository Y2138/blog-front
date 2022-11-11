import { MentionOption } from 'naive-ui'
import router from '@/router/index'
import { h } from 'vue';
import { MenuTabs, useMenuStore } from '@/store/menuStore'
import { storeToRefs } from 'pinia';

const menuStore = useMenuStore()
const { menuTabs } = storeToRefs(menuStore)
// 点击标签页
const handleTabChange = (tab: MenuTabs) => {
  console.log('1111')
  menuStore.addTab(tab)
  router.push(tab.path)
}
const handleCloseTab = (tab: MenuTabs) => {
  menuStore.closeTab(tab)
}
const menuOptions = ref<MentionOption>([
  {
    label: () =>
      h(
        'p',
        {
          onClick: () => handleTabChange({
            path: '/boss/index',
            name: '家',
            checked: true
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
    key: 'pinball-1973',
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
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
        'p',
        {
          onClick: () => handleTabChange({
            path: '/boss/addArticle',
            name: 'MarkDown编辑器',
            checked: true
          })
        },
        { default: () => 'MarkDown编辑器' }
      ),
    key: ''
  }
])
export const useMenu = () => {
  return {
    menuOptions,
    menuTabs,
    handleCloseTab,
    handleTabChange
  }
}

