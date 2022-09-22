<script lang="ts" setup>
import { post } from '@/utils/fetch';
import { FormInst, useMessage } from 'naive-ui'
const emits = defineEmits(['update:show'])
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
const message = useMessage()
const showModal = ref(false)
watchEffect(() => {
  showModal.value = props.show
})
const articleModel = ref({
  title: '',
  desc: '',
  content: '',
  tags: []
})
const rules = {
  title: {
    required: true,
    message: '请输入标题',
    trigger: 'blur'
  },
  content: {
    required: true,
    message: '请输入内容',
    trigger: 'blur'
  }
}
const formRef = ref<FormInst | null>(null)
const handleConfirm = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      post('/article/add', {
        data: { ...articleModel.value }
      }).then(res => {
        const { success = false, model = {} } = res
        if (success) {
          showModal.value = false
        } else {
          console.log('error: ', res)
        }
      }).catch(err => {
        console.log('error: ', err)
      })
    } else {
      message.error('校验失败')
    }
  })
}
const handleModalClose = () => {
  emits('update:show', false)
}
</script>
<template>
  <n-modal
    v-model:show="showModal"
    :on-after-leave="handleModalClose"
    preset="dialog"
    >
    <n-form
      ref="formRef"
      label-placement="left"
      label-align="left"
      :label-width="60"
      :model="articleModel"
      :rules="rules"
      size="medium">
      <n-form-item label="标题" path="title">
        <n-input v-model:value="articleModel.title"></n-input>
      </n-form-item>
      <n-form-item label="描述">
        <n-input v-model:value="articleModel.desc"></n-input>
      </n-form-item>
      <n-form-item label="内容" path="content">
        <n-input v-model:value="articleModel.content" type="textarea"></n-input>
      </n-form-item>
      <n-form-item label="标签">
        <n-checkbox-group v-model:value="articleModel.tags">
          <n-checkbox :value="1" label="前端"></n-checkbox>
          <n-checkbox :value="2" label="JS"></n-checkbox>
          <n-checkbox :value="3" label="CSS"></n-checkbox>
          <n-checkbox :value="4" label="vue"></n-checkbox>
        </n-checkbox-group>
      </n-form-item>
      <div class="ptb12 flex-box jus-c">
        <n-button class="mr8" @click="showModal = false">取消</n-button>
        <n-button class="ml8" type="primary" @click="handleConfirm">提交</n-button>
      </div>
    </n-form>
    <!-- <template>
      <div>
        
      </div>
    </template> -->
  </n-modal>
</template>