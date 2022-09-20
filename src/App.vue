<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import type { GlobalThemeOverrides, GlobalTheme } from 'naive-ui'
import utilCom from './views/utilCom.vue';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: 'rgba(76, 141, 174, 1.0)',
    primaryColorHover: 'rgba(76, 141, 174, 0.8)',
    primaryColorPressed: 'rgba(76, 141, 174, 0.8)'
  },
}
</script>

<template>
  <n-config-provider
    :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <util-com></util-com>
          <router-view>
          </router-view>
        </n-notification-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style lang="scss">
body {
  margin: 0;
}
</style>
