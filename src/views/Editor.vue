<template>
  <div class="editor-container">
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <div class="sidebar-container">
          组件列表
          <components-list :list="defaultTextTemplates" @onItemClick="addItem" />
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          <p>画布区域</p>
          <div class="preview-list" id="canvas-area">
            <edit-wrapper
              @setActive="setElActive"
              v-for="component in components"
              :key="component.id"
              :id="component.id"
              :active="component.id === currentElementId"
            >
              <component :is="component.name" v-bind="component.props" />
            </edit-wrapper>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider width="300" style="background: #fff" class="settings-panel">
        组件属性
        <props-table
          v-if="currentElement && currentElement.props"
          :props="currentElement.props"
          @change="handleChange"
        ></props-table>
        <pre>
        {{ currentElement && currentElement.props }}
      </pre
        >
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { defaultTextTemplates } from '@/constants/defaultTemplates'
import { storeToRefs } from 'pinia'
import { useEditorStore } from '@/store'
const store = useEditorStore()
const { components, currentElementId } = storeToRefs(store)
const { addComponent, setActive, updateComponent } = store
const addItem = (component: any) => {
  addComponent(component)
}
const setElActive = (id: string) => {
  setActive(id)
}

const handleChange = (e: any) => {
  updateComponent(e)
}

const currentElement = computed(() =>
  components.value.find((component) => component.id === currentElementId.value)
)
</script>

<style scoped>
.editor-container .preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.editor-container .preview-list {
  padding: 0;
  margin: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
}
</style>
@/constants/defaultTemplates