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
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import type { TextComponentProps } from '@/defaultProps'
import type { ComponentData } from '@/store/editor'
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
</script>

<style scoped>
.component-item {
  width: 100px;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>
