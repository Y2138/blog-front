<script setup lang="ts">
import mainLeft from './components/mainLeft.vue';
import mainRight from './components/mainRight.vue';
</script>

<template>
  <n-config-provider>
    <div class="main-body">
      <main-left class="body-left"></main-left>
      <main-right></main-right>
    </div>
  </n-config-provider>
</template>


<style scoped>
.main-body {
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--background-dark);
  color: var(--font-color);
}
.main-body .body-left {
  flex: 1;
  min-width: 0;
}
</style>