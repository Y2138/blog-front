<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <!-- 头、面包屑、刷新按钮 -->
  <div class="main-right">
    这是右侧
  </div>
</template>


<style scoped lang="scss">
.main-right {
  height: 100px;
  width: 276px;
  margin: 20px 0;
  padding: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media screen and (max-width: 600px) {
    .main-right {
      display: none !important;
    }
  }
</style>