<script setup lang="ts">
import { Editor, Viewer } from '@bytemd/vue-next'
import 'bytemd/dist/index.css'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import zhHans from 'bytemd/locales/zh_Hans.json'
import 'highlight.js/styles/vs.css'
import 'juejin-markdown-themes/dist/juejin.min.css'

const plugins = [
  gfm(),
  highlight(),
  // add more plugins here
]
const content = ref<string>('')
const handleChange = (val: string) => {
  content.value = val
}
</script>
<template>
  <div class="editor-main">
    <Editor
      class="editor"
      :locale="zhHans"
      :value="content"
      :plugins="plugins"
      @change="handleChange"
    />
    <Viewer
      class="viewer"
      :locale="zhHans"
      :tabindex="2"
      :value="content"
      :plugins="plugins"
    />
  </div>
</template>
<style lang="scss">
.editor-main {
  height: 100%;
  width: 100%;
  display: flex;
  .editor {
    flex: 1;
    .bytemd {
      height: 100% !important;
    }
  }
  .viewer {
    flex: 1;
    padding: 0 20px;
    .bytemd {
      height: 100% !important;
    }
  }
}
</style>