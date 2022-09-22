<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
const art = computed(() => {
  return props.data || {}
})
</script>
<template>
  <header class="header cbox">
    <div class="title">{{ art.title || '' }}</div>
    <p class="desc">
      {{ art.desc || '' }}
    </p>
  </header>
  <main class="main cbox">
    <n-scrollbar>
      {{ art.content || '' }}
    </n-scrollbar>
  </main>
  <footer class="footer cbox">这是footer</footer>
</template>

<style lang="scss" scoped>
header, main, footer {
  border-radius: 20px;
  background-color: var(--background-dark);
  box-shadow: var(--shadow-dark);
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  padding: 12px;
}
.header {
  .title {
    font-size: 18px;
  }
  .desc {
    margin: 0;
    max-width: 100%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
}
.main {
  flex: 1;
  margin: 20px 0;
  p {
    margin: 0;
    word-break: break-all;
  }
}
.footer {

}
</style>