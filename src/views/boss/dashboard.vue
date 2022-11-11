<script setup lang="ts">
const a = h(
  'span',
  {
    color: '#29c1c2'
  },
  '我是谁'
)
const renderIcon = () => {
  render: return a
}
</script>
<template>
  这是主页面
  <renderIcon />
</template>