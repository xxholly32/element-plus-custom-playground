<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { ElButton } from './ui/button'
import { ElInput } from './ui/input'
import { ElCheckbox } from './ui/checkbox'
import { ElSelect, ElOption } from './ui/select'
import { ElDatePicker } from './ui/date-picker'

const input = ref('')
const checked1 = ref(true)
const checked2 = ref(false)
const value1 = ref('')


const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
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

    <div class="flex gap-4 items-center">
      <span>el-select with custom:</span>
      <div>
        <el-select v-model="value" placeholder="Select" style="width: 240px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
            :disabled="item.disabled" />
        </el-select>
      </div>
    </div>
    <div class="flex gap-4 items-center">
      <span>el-date-picker with custom:</span>
      <div>
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
      </div>
    </div>
  </div>
</template>
