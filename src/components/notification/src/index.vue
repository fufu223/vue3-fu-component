<template>
  <div class="notification-container">
    <el-popover
        placement="bottom"
        :width="300"
        trigger="click">
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
          <el-badge style="cursor: pointer" v-bind="props">
            <el-icon :size="size">
              <component :is="icon"></component>
            </el-icon>
          </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  /* 图标大小 */
  size: {
    type: Number,
    default: 20
  },
  /* 徽章图标 */
  icon: {
    type: String,
    default: "fu-icon-chat-dot-square",
  },
  /* 当前通知条数 */
  value: {
    type: [Number, String],
    default: '',
  },
  /* 最大通知条数 */
  max: {
    type: Number,
    default: 99
  },
  /* 是否显示小圆点 */
  isDot: {
    type: Boolean,
    default: false
  }

})
</script>

<style scoped lang="scss">

</style>