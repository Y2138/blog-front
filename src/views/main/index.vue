<script setup lang="ts">
import leftBar from './components/leftBar.vue';
import headerBar from './components/headerBar.vue';
import footerBar from './components/footerBar.vue';
import mainVue from './components/main.vue';
import { ref } from 'vue'
import { useStore } from '../../store'
const count2 = useStore()
</script>

<template>
  <n-config-provider>
    <div class="main-body">
      <left-bar></left-bar>
      <div class="main-content">
        <header-bar></header-bar>
        <main-vue></main-vue>
        <footer-bar></footer-bar>
      </div>
    </div>
  </n-config-provider>
</template>


<style scoped>
.main-body {
  height: 100vh;
  width: 100vw;
  display: flex;
}
.main-body .main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>