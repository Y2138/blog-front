<script lang="ts" setup>
// import boxWrapper from '../modules/boxWrapper.vue';
import md from '../../../components/md.vue';
import { a_addArticle } from '@/api/article';
import articleBase from './articleBase.vue'
const baseInfoModal = ref(false)
const addArticleFn = () => {
  baseInfoModal.value = true
}
const content = ref('')
</script>
<template>
  <div class="add-article">
    <div class="flex-box justify-between">
      <n-button :content="content" @click="addArticleFn">去保存</n-button>
    </div>
    <md v-model:text="content"></md>
  </div>
  <article-base :content="content" v-model:show="baseInfoModal"></article-base>
</template>
<style lang="scss" scoped>
.add-article {
  height: 100%;
  width: 100%;
}
</style>