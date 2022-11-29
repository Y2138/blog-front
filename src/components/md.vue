<script setup lang="ts">
import { Editor, Viewer } from '@bytemd/vue-next'
import 'bytemd/dist/index.css'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import zhHans from 'bytemd/locales/zh_Hans.json'
import footnotes from '@bytemd/plugin-footnotes';
import frontmatter from '@bytemd/plugin-frontmatter';
import breaks from '@bytemd/plugin-breaks';
import mediumZoom from '@bytemd/plugin-medium-zoom';
import gemoji from '@bytemd/plugin-gemoji';
import 'highlight.js/styles/vs.css'
import 'juejin-markdown-themes/dist/juejin.min.css'
import './md.css'
import { watch } from 'vue'

type MdProps = {
  showEditor?: boolean,
  text: string,
}
const props = withDefaults(defineProps<MdProps>(), {
  showEditor: true,
  text: ''
})
const { text } = toRefs(props)

const plugins = ref([
  gfm(),
  highlight(),
  footnotes(),
  frontmatter(),
  breaks(),
  mediumZoom(),
  gemoji()
  // add more plugins here
])
const content = ref<string>('')
watch(text, (val) => {
  content.value = val
})
const emits = defineEmits(['update:text'])
const handleChange = (val: string) => {
  content.value = val
  emits('update:text', val)
}
</script>
<template>
  <div class="editor-main">
    <Editor
      v-if="props.showEditor"
      class="editor"
      :locale="zhHans"
      :value="content"
      :plugins="plugins"
      @change="handleChange"
    />
    <strong v-if="props.showEditor" style="padding: 10px 0;">文章预览</strong>
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
  flex-direction: column;
  .editor {
    flex: 1;
    .bytemd {
      width: 100% !important;
    }
  }
  .viewer {
    flex: 1;
    .bytemd {
      width: 100% !important;
    }
  }
}
</style>