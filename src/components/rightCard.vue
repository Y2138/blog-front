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
    <div class="flex-box alg-c jus-b pb-5">
      <div class="card-title">
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
      <div class="card-desc">
        <slot name="desc">
          {{ props.desc }}
        </slot>
      </div>
      <div class="card-end">
        <slot name="tip">
          {{ props.tip }}
        </slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-container {
  padding: 17px 18px 18px;
  border-radius: 4px;
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