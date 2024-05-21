<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { ElButton } from './ui/button'
import { ElInput } from './ui/input'
import { ElCheckbox } from './ui/checkbox'

const input = ref('')
const checked1 = ref(true)
const checked2 = ref(false)
</script>
<template>
  <div class="flex flex-col p-20 gap-4">
    <div class="flex gap-4 items-center">
      <span>el-input with custom:</span>
      <el-input v-model="input" style="width: 240px" placeholder="Please input" />
    </div>
    <div class="flex gap-4 items-center">
      <span>el-button with custom:</span>
      <el-button type="primary" :icon="Search">Search</el-button>
    </div>
    <div class="flex gap-4 items-center">
      <span>el-checkbox with custom:</span>
      <div>
        <el-checkbox v-model="checked1" label="Option 1" size="large" />
        <el-checkbox v-model="checked2" label="Option 2" size="large" />
      </div>
    </div>
  </div>
</template>
