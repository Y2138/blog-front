<script setup lang="ts">
import { Expand } from '@vicons/ionicons5'
const props = defineProps<{
  title?: string,
  showHeader?: boolean,
  showShrink?: boolean,
  bodyPall?: string
}>()

</script>
<template>
  <section class="box-main">
    <div class="box-title">
      <slot name="header">
        <h1>{{ props.title || '' }}</h1>
        <div>
          <n-icon>
            <expand />
          </n-icon>
        </div>
      </slot>
    </div>
    <div class="box-body">
      <slot></slot>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.box-main {
  width: 100%;
  .box-title {
    padding: 8px 12px;
    background-color: var(--background-shallow);
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 0;
      color: var(--font-color);
      font-size: 14px;
    }
  }
  .box-main {
    padding: 12px;
    background-color: var(--background-shallow);
  }
}
</style>