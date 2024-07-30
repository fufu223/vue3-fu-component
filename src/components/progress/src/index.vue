<template>
  <div class="progress-container">
    <el-progress
        :type="type"
        :percentage="percentage"
        :stroke-width="strokeWidth"
        :striped="striped"
        :indeterminate="indeterminate"
        :duration="duration"
        :color="color"
        :status="status"
        :text-inside="textInside"
        v-bind="$attrs"
    >
      <slot name="default"></slot>
    </el-progress>
  </div>
</template>

<script setup lang="ts">
import { ProgressType } from './types/types';
import {onMounted} from "vue";

// 进度条配置
export interface ProgressConfig {
  // 进度条百分比，计算获取
  percentage: number,
  // 进度条类型
  type: ProgressType,
  // 进度条宽度
  strokeWidth?:  number,
  // 是否开启纹路
  striped?: boolean,
  // 是否开启时间动画
  indeterminate?: boolean,
  // 动画持续时间
  duration?: number,
  color?: string,
  status?: "success" | "exception" | "warning",
  textInside?: boolean
}

// 设置默认值
withDefaults(defineProps<ProgressConfig>(),{
  type: "line",
  strokeWidth: ()=> 10,
  striped: ()=> true
})

onMounted(()=> {

})

</script>

<style scoped lang="scss">

</style>
