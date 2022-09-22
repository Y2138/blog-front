<script setup lang="ts">
import rightCard from '@/components/rightCard.vue'
import moment from 'moment'
const nowTime = useNow()
const curTime = computed(() => {
  return moment(nowTime.value).format('HH:mm:ss')
})
const weekDict = ['一', '二', '三', '四', '五', '六', '日']
const curWeek = computed(() => {
  return weekDict[moment(nowTime.value).get('weekday') - 1]
})

</script>

<template>
  <!-- 头、面包屑、刷新按钮 -->
  <div class="main-right">
    <div class="daily-container">
      <p class="week">星期{{ curWeek }}</p>
      <p class="time">{{ curTime }}</p>
    </div>
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
  margin: 12px 0;
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
}
@media screen and (max-width: 600px) {
  .main-right {
    display: none !important;
  }
}
</style>