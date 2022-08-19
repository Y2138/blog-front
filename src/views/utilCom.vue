<script lang="ts" setup>
import { useMessage, useDialog, useNotification } from 'naive-ui';
import eventEmitts from '@/utils/eventEmitter';
const dialog = useDialog()
const message = useMessage()
const notification = useNotification()
const nTypes = ['error', 'info', 'success', 'warning']
nTypes.forEach(t => {
  eventEmitts.on(`$message.${t}`, message[t])
  eventEmitts.on(`$alert.${t}`, dialog[t])
  eventEmitts.on(`$notification.${t}`, notification[t])
})
console.log(eventEmitts.events)
</script>

<template></template>