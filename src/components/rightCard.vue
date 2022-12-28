<!--
 * @Author: Y2138 y1967581564@163.com
 * @Date: 2022-09-14 17:08:11
 * @LastEditors: Y2138 y1967581564@163.com
 * @LastEditTime: 2022-12-28 15:28:47
 * @FilePath: \front\src\components\rightCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  tip: {
    type: String,
    default: ''
  },
  shadow: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="card-container" :class="{'has-shadow': props.shadow}">
    <slot>
      <div class="flex-box alg-c jus-b pb-5">
        <div class="card-title text-ellipsis">
          <slot name="title">
            {{ props.title }}
          </slot>
        </div>
        <div class="card-label">
          <slot name="label">
            {{ props.label }}
          </slot>
        </div>
      </div>
      <div class="flex-box alg-c jus-b pt-5">
        <div class="card-desc text-ellipsis">
          <slot name="desc">
            {{ props.desc }}
          </slot>
        </div>
        <div class="card-end text-ellipsis">
          <slot name="tip">
            {{ props.tip }}
          </slot>
        </div>
      </div>
    </slot>
  </div>
</template>
<style lang="scss" scoped>
.card-container {
  padding: 17px 18px 18px;
  border-radius: 16px;
  width: calc(100% - 36px);
  background-color: var(--background-shallow);
  &.has-shadow {
    box-shadow: var(--shadow-shallow);
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
  }
  .card-label {
    font-size: 18px;
  }
  .card-desc {
    font-size: 14px;
  }
  .card-end {
    font-size: 14px;
    color: var(--font-gray-1)
  }
}
</style>