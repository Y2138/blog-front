<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '../../../store'
const count2 = useStore()
const shrink = ref(false)
</script>

<template>
  <!-- 头、面包屑、刷新按钮 -->
  <div :class="['main-left', { 'isShrink': shrink }]">
  </div>
</template>


<style scoped>
.main-left {
  height: 100%;
  width: 120px;
  display: flex;
  background-color: #999;
}
.main-left.isShrink {
  width: 200px
}
</style>