<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store/themeStore'
import DocTemplate from '@/views/docTemplate/index.vue';
import eventEmitts from '@/utils/eventEmitter';
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
</script>

<template>
  <!-- 头、面包屑、刷新按钮 -->
  <div class="main-left-wrap">
    <div :class="['main-left', { 'is-shrink': shrink }]">
      <n-button @click="shrink = !shrink">收缩</n-button>
      <n-button @click="changeTheme">切换</n-button>
      <n-button @click="messageFn">message</n-button>
      <n-button @click="dialogFn">dialog</n-button>
      <n-button @click="notificationFn">notification</n-button>
    </div>
    <div class="main-content">
      <div class="search">
        <n-input v-model="searchText"></n-input>
      </div>
      <router-view></router-view>
      <doc-template></doc-template>
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
  border-top-right-radius: 12% 10%;
  border-bottom-right-radius: 12% 10%;
  display: flex;
  .main-left {
    width: 83px;
    border-radius: 40px;
    padding: 12px;
    display: flex;
    background-color: var(--background-dark);
    align-items: center;
    flex-direction: column;
    transition: all .3s ease-in;
    &.is-shrink {
      width: 166px;
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