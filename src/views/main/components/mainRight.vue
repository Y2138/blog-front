<script setup lang="ts">
import rightCard from '@/components/rightCard.vue'
</script>

<template>
  <!-- 头、面包屑、刷新按钮 -->
  <div class="main-right">
    <right-card
      title="我是谁"
      label="who"
      desc="我是哪个"
      tip="哪个是我"></right-card>
  </div>
</template>


<style scoped lang="scss">
.main-right {
  width: 25%;
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