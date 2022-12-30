<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store/themeStore'
import DocTemplate from '@/views/docTemplate/index.vue';
import eventEmitts from '@/utils/eventEmitter';
import rightCard from '@/components/rightCard.vue';
import { useRouter } from 'vue-router'
import { ArticleModel } from '@/api/article/types'
import { a_getArticleList } from '@/api/article'
import moment from 'moment'
import { Sunny, Moon, ChevronBackCircle, Build } from '@vicons/ionicons5'

// 展示右侧时间
const nowTime = useNow()
const curTime = computed(() => {
  return moment(nowTime.value).format('HH:mm:ss')
})
const weekDict = ['一', '二', '三', '四', '五', '六', '日']
const curWeek = computed(() => {
  return weekDict[moment(nowTime.value).get('weekday') - 1]
})

const { changeTheme } = useStore()
const { customTheme } = storeToRefs(useStore())
const shrink = ref(false)
const messageFn = (msg: string) => {
  eventEmitts.emit('$message.error', msg)
}
const artList = ref<ArticleModel[]>([])

const searchText = ref('')
const pageIndex = ref(1)
const pageSize = ref(3)
const totalCount = ref(0)
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
    if (res.success) {
      const { model = [] } = res
      artList.value = artList.value.concat(model || [])
      totalCount.value = res.totalCount
    }
  })
}
const handleSearch = () => {
  pageIndex.value = 1
  artList.value = []
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
  <n-config-provider>
    <div class="main-body">
      <div class="main-left-wrap">
        <div :class="['left-nav', { 'is-shrink': shrink }]">
          <ul>
            <li class="flex-box jus-a">
              <n-icon
                size="28"
                class="pointer"
                color="var(--color-primary)"
                @click="changeTheme"
                :component="customTheme === 'dark' ? Sunny : Moon">
              </n-icon>
              <n-icon
                size="28"
                :class="{'icon-shrink': !shrink, 'pointer': true}"
                color="var(--color-primary)"
                @click="shrink = !shrink">
                <ChevronBackCircle />
              </n-icon>
            </li>
            <n-divider />
            <li><i style="color: var(--color-primary)" class="nav-icon iconfont icon-html"></i></li>
            <li><i style="color: var(--color-primary)" class="nav-icon iconfont icon-css"></i></li>
            <li><i style="color: var(--color-primary)" class="nav-icon iconfont icon-nodejsNodejsxingnengpingtai"></i></li>
            <li><i style="color: var(--color-primary)" class="nav-icon iconfont icon-bxl-vuejs"></i></li>
          </ul>
          <dl class="bottom-area">
            <n-icon @click="toBoss" size="28">
              <build />
            </n-icon>
          </dl>
        </div>
        <div class="main-content">
          <template v-if="artList && artList.length">
            <doc-template
              :data="artList[curArticleIdx]">
            </doc-template>
          </template>
        </div>
      </div>
      <div class="main-right">
        <div class="daily-container">
          <p class="week">星期{{ curWeek }}</p>
          <p class="time">{{ curTime }}</p>
        </div>
        <right-card
          title="我是谁"
          label="who"
          desc="我是哪个"
          tip="哪个是我">
        </right-card>
        <n-divider />
        <div class="search">
          <n-input v-model:value="searchText"></n-input>
          <n-button type="primary" @click="handleSearch">搜索</n-button>
        </div>
        <n-scrollbar>
          <right-card
            class="card-box"
            v-for="(item, idx) in artList"
            :key="idx"
            :title="item.title"
            :desc="item.desc"
            @click="handleSelectDoc(idx)">
          </right-card>
          <right-card
            class="card-box"
            v-if="totalCount > artList.length"
            @click="handleMore">
            查看更多
          </right-card>
        </n-scrollbar>
      </div>
    </div>
  </n-config-provider>
</template>


<style scoped lang="scss">
.main-body {
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--background-dark);
  color: var(--font-color);
}
@media screen and (max-width: 600px) {
  .main-left-wrap {
    border-radius: 0 !important;
  }
  .left-nav {
    display: none !important;
  }
  .main-content {
    padding: 4px !important;
  }
}
.main-left-wrap {
  flex: 1;
  min-width: 0;
  padding: 32px 20px 36px;
  transition: all .2s ease-out;
  background-color: var(--background-shallow);
  border-top-right-radius: 12%;
  border-bottom-right-radius: 12%;
  display: flex;
  box-shadow: var(--shadow-dark);
  .left-nav {
    width: 83px;
    border-radius: 40px;
    padding: 12px;
    background-color: var(--background-dark);
    transition: all .2s ease-out;
    box-shadow: var(--shadow-dark);
    display: flex;
    flex-direction: column;
    &.is-shrink {
      width: 166px;
    }
    ul {
      flex: 1;
      list-style: none;
      margin: 0px;
      padding: 12px 0;
      li {
        text-align: center;
        min-height: 40px;
      }
    }
    .bottom-area {
      padding: 20px;
      text-align: center;
      cursor: pointer;
    }
    .icon-shrink {
      transform: rotate(180deg);
    }
    .nav-icon {
      font-size: 20px;
    }
  }
  .main-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    padding: 10px 30px 0 30px;
  }
}
.main-right {
  width: 25%;
  margin-top: 12px 0;
  padding: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .daily-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;
    .week {
      font-size: 16px;
      color: var(--font-color)
    }
    .time {
      font-size: 24px;
    }
  }
  .search {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    :deep(.n-button) {
      margin-left: 10px;
    }
  }
  .card-box {
    &:nth-of-type(1) {
      margin-top: 0;
    }
    cursor: pointer;
    margin-top: 10px;
  }
}
@media screen and (max-width: 600px) {
  .main-right {
    display: none !important;
  }
}
</style>