<template>
  <div class="create-component-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="component-item"
      @click="onItemClick(item)"
    >
      <l-text v-bind="item"></l-text>
    </div>
  </div>
  <StyledUploader @success="onImageUploaded"></StyledUploader>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { message } from 'ant-design-vue'
import { imageDefaultProps, type TextComponentProps } from '@/constants/defaultProps'
import type { ComponentData } from '@/store/editor'
import type { UploadResp } from '@/extraType'
import { getImageDimensions } from '@/utils/helper'
defineProps({
  list: {
    type: Array as PropType<TextComponentProps[]>,
    required: true
  }
})
const emit = defineEmits(['on-item-click'])
const onItemClick = (props: TextComponentProps) => {
  const componentData: ComponentData = {
    name: 'l-text',
    id: uuidv4(),
    props
  }
  emit('on-item-click', componentData)
}
const onImageUploaded = (data: { resp: UploadResp; file: File }) => {
  const { resp, file } = data
  const componentData: ComponentData = {
    name: 'l-image',
    id: uuidv4(),
    props: {
      ...imageDefaultProps
    }
  }
  message.success('上传成功')
  componentData.props.src = resp.data.url
  getImageDimensions(file).then(({ width }) => {
    console.log(width)
    const maxWidth = 373
    componentData.props.width = (width > maxWidth ? maxWidth : width) + 'px'
    emit('on-item-click', componentData)
  })
}
</script>

<style scoped>
.component-item {
  width: 100px;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>
