<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store/themeStore'
import DocTemplate from '@/views/docTemplate/index.vue';
import eventEmitts from '@/utils/eventEmitter';
import { post } from '@/utils/fetch';
const { changeTheme } = useStore()
const shrink = ref(false)
const searchText = ref('这是搜索框')
const messageFn = () => {
  eventEmitts.emit('$message.error', '这是message')
}
const dialogFn = () => {
  eventEmitts.emit('$alert.error', { content: '这是dialog' })
}
const notificationFn = () => {
  eventEmitts.emit('$notification.error', { content: '这是notification', duration: 3000 })
}
const artList = ref([])
const findArticle = () => {
  post('/article/getArticle/list', {}).then(res => {
    console.log('res', res)
    const { model } = res
    artList.value = model || []
  }).catch(err => {
    console.log(err)
    eventEmitts.emit('$message.error', err)
  })
  // const param = {
  //   pageIndex: 1,
  //   pageSize: 10,
  //   model: {}
  // }
  // post('/pcs/sos/v2/shops', { data: param }).then(res => {
  //   console.log(res)
  // })
}
</script>

<template>
  <!-- 头、面包屑、刷新按钮 -->
  <div class="main-left-wrap">
    <div :class="['main-left', { 'is-shrink': shrink }]">
      <ul>
        <n-button type="text" @click="shrink = !shrink">expand</n-button>
        <n-button type="primary" @click="changeTheme">切换</n-button>
        <n-button @click="messageFn">message</n-button>
        <n-button @click="dialogFn">dialog</n-button>
        <n-button @click="notificationFn">notification</n-button>
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
        <li>
          
        </li>
      </ul>
    </div>
    <div class="main-content">
      <div class="search">
        <n-input v-model="searchText"></n-input>
        <n-button @click="findArticle">搜索</n-button>
      </div>
      <doc-template
        v-for="(art, aIndex) in artList"
        :key="aIndex"
        :data="art">
      </doc-template>
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
  transition: all .3s ease-out;
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
    transition: all .3s ease-in;
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
    }
  }
}
</style>