<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '../../../store'
const count2 = useStore()
</script>

<template>
  <!-- 头、面包屑、刷新按钮 -->
  <div class="main-header">
  </div>
</template>


<style scoped>
.main-header {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
}
</style>