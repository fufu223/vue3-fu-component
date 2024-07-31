<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-time-select
        v-model="startTime"
        style="width: 240px;"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      ></el-time-select>
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        style="width: 240px;"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      ></el-time-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'

const props = defineProps({
  // 开始时间的提示
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间的开始
  startTimeStart: {
    type: String,
    default: '08:00'
  },
  // 开始时间的步进
  startStep: {
    type: String,
    default: '00:30'
  },
  // 开始时间的结束
  startTimeEnd: {
    type: String,
    default: '24:00'
  },
  // 结束时间的提示
  endPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 结束时间的开始
  endTimeStart: {
    type: String,
    default: '08:00'
  },
  // 结束时间的步进
  endStep: {
    type: String,
    default: '00:30'
  },
  // 结束时间的结束
  endTimeEnd: {
    type: String,
    default: '24:00'
  },
})
const emit = defineEmits(['update:startTime', 'update:endTime'])

// 开始时间
const startTime = ref<string>('')
// 结束时间
const endTime = ref<string>('')
// 结束时间是否禁用
const endTimeDisabled = ref<boolean>(true)

watch(()=>startTime.value, (newVal)=>{
  if (newVal === '' || !newVal){
    endTime.value = ''
    endTimeDisabled.value = true
  } else {
    endTimeDisabled.value = false
    emit('update:startTime', newVal)
  }
})

watch(()=>endTime.value, (newVal)=>{
  if (newVal !== ''){
    emit('update:endTime', {
      startTime: startTime.value,
      endTime: newVal
    })
  }
})
</script>

<style lang="scss" scoped>

</style>
