<template>
  <div class="trend-container">
    <div class="text">
      <slot v-if="slots?.default"></slot>
      <div v-else :style="{ color: textColor}">{{text}}</div>
    </div>
    <div class="icon">
      <component
          :is="`fu-icon${toLine(upIcon)}`"
          :style="{color: !reverseColor ? upIconColor: downIconColor}"
          v-if="type === 'up'"/>

      <component
          :is="`fu-icon${toLine(downIcon)}`"
          :style="{color: !reverseColor ? downIconColor: upIconColor}"
          v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, computed } from "vue";
import {toLine} from "@/util";

const slots = useSlots()
let props = defineProps({
  /* 类型 */
  type: {
    type: String,
    default: 'up'
  },
  /* 文本 */
  text: {
    type: String,
    default: '文本'
  },
  /* 上升趋势文字颜色 */
  upTextColor: {
    type: String,
    default: '#00C851'
  },
  /* 下降趋势文字颜色 */
  downTextColor: {
    type: String,
    default: '#ff4444'
  },
  /* 上升趋势图标 */
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  /* 下降趋势图标 */
  downIcon: {
    type: String,
    default: 'ArrowDown'
  },
  /* 颜色反转 */
  reverseColor: {
    type: Boolean,
    default: false
  },
  /* 上升图标颜色 */
  upIconColor: {
    type: String,
    default: '#00C851'
  },
  /* 下降图标颜色 */
  downIconColor: {
    type: String,
    default: '#ff4444'
  }
})
// 计算文字颜色
let textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})

</script>

<style lang="scss" scoped>
.trend-container {
  display: flex;
  align-items: center;

  .text {
    font-size: 16px;
    margin-right: 4px;
  }

  .icon {
    svg {
      width: 1.2em;
      height: 1.2em;
    }
  }
}
</style>
