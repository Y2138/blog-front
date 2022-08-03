<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '../../../store'
const count2 = useStore()
</script>

<template>
  <!-- 头、面包屑、刷新按钮 -->
  <div class="main-footer">
  </div>
</template>


<style scoped>
.main-footer {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #aaa;
}
</style>