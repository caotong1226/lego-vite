<template>
  <div class="content-container">
    <template-list :list="data"></template-list>
  </div>
</template>

<script lang="ts" setup>
import { useTemplatesStore } from '@/store'
import { storeToRefs } from 'pinia';
const store = useTemplatesStore()
const { data } = storeToRefs(store) 
console.log(data)
</script>

<style>
.page-title {
  color: #fff;
}
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>
