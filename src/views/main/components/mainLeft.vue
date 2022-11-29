<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store/themeStore'
import DocTemplate from '@/views/docTemplate/index.vue';
import eventEmitts from '@/utils/eventEmitter';
import rightCard from '@/components/rightCard.vue';
import { useRouter } from 'vue-router'
import { ArticleModel } from '@/api/article/types'
import { a_getArticleList } from '@/api/article'

const { changeTheme } = useStore()
const shrink = ref(false)
const messageFn = () => {
  eventEmitts.emit('$message.error', '这是message')
}
const dialogFn = () => {
  eventEmitts.emit('$alert.error', { content: '这是dialog' })
}
const notificationFn = () => {
  eventEmitts.emit('$notification.error', { content: '这是notification', duration: 3000 })
}
const artList = ref<ArticleModel[]>([])

const searchText = ref('')
const pageIndex = ref(1)
const pageSize = ref(3)
const totalCount = ref(0)
const curArticle = ref<ArticleModel | null>()
const curArticleIdx = ref(0)
const findArticle = () => {
  const param = {
    model: {
      title: searchText.value,
    },
    pageSize: pageSize.value,
    pageIndex: pageIndex.value
  }
  a_getArticleList(param).then(res => {
    console.log('res', res)
    const { model = [] } = res
    artList.value = model || []
    curArticle.value = model.length ? model[0] : null
    totalCount.value = res.totalCount
  }).catch(err => {
    console.log(err)
    eventEmitts.emit('$message.error', err)
  })
}
const handleSearch = () => {
  pageIndex.value = 1
  findArticle()
}
const handleMore = () => {
  pageIndex.value ++
  findArticle()
}

const router = useRouter()
const toBoss = () => {
  router.push('/boss')
}

const handleSelectDoc = (idx: index) => {
  curArticleIdx.value = idx
}
</script>

<template>
  <!-- 头、面包屑、刷新按钮 -->
  <div class="main-left-wrap">
    <div :class="['main-left', { 'is-shrink': shrink }]">
      <ul>
        <n-button type="primary" @click="toBoss">toBoss</n-button>
        <n-button type="primary" @click="shrink = !shrink">expand</n-button>
        <n-button class="mt4" type="primary" @click="changeTheme">切换</n-button>
        <n-button class="mt4" type="primary" @click="messageFn">message</n-button>
        <n-button class="mt4" type="primary" @click="dialogFn">dialog</n-button>
        <n-button class="mt4" type="primary" @click="notificationFn">notification</n-button>
        <li>
          <i class="iconfont icon-html"></i>
        </li>
        <li>
          <i class="iconfont icon-css"></i>
        </li>
        <li>
          <i class="iconfont nodejsNodejsxingnengpingtai"></i>
          
        </li>
        <li>
          <i class="iconfont icon-bxl-vuejs"></i>
          
        </li>
      </ul>
    </div>
    <div class="main-content">
      <div class="search">
        <n-input v-model:value="searchText"></n-input>
        <n-button type="primary" @click="handleSearch">搜索</n-button>
      </div>
      <doc-template
        :data="artList[curArticleIdx]">
      </doc-template>
      <div class="bottom-card">
        <div class="flex-box flex1">
          <right-card
            class="flex-1"
            :class="{ 'ml10': idx > 0 }"
            v-for="(item, idx) in artList"
            :key="idx"
            :title="item.title"
            :desc="item.desc"
            @click="handleSelectDoc(idx)">
          </right-card>
        </div>
        <right-card
          class="more"
          @click="handleMore">
          更多
        </right-card>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@media screen and (max-width: 600px) {
  .main-left-wrap {
    border-radius: 0 !important;
  }
  .main-left {
    display: none !important;
  }
  .main-content {
    padding: 4px !important;
  }
}
.main-left-wrap {
  padding: 32px 20px 36px;
  transition: all .2s ease-out;
  background-color: var(--background-shallow);
  border-top-right-radius: 12%;
  border-bottom-right-radius: 12%;
  display: flex;
  box-shadow: var(--shadow-dark);
  .main-left {
    width: 83px;
    border-radius: 40px;
    padding: 12px;
    background-color: var(--background-dark);
    transition: all .2s ease-out;
    box-shadow: var(--shadow-dark);
    &.is-shrink {
      width: 166px;
    }
    ul {
      display: flex;
      align-items: center;
      flex-direction: column;
      list-style: none;
      margin: 0px;
      padding: 12px 0;
      li {
        flex: 1;
        min-height: 40px;
      }
    }
  }
  .main-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    padding: 10px 30px 0 30px;
    .search {
      margin-bottom: 20px;
      display: flex;
      :deep(.n-button) {
        margin-left: 10px;
      }
    }
  }

  .bottom-card {
    display: flex;
    .more {
      margin-left: 12px;
      width: 16px;
    }
    :deep(.card-container) {
      cursor: pointer;
    }
  }
}
</style>