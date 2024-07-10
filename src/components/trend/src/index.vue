<template>
  <div class="trend-container">
    <div class="text">
        {{text}}
    </div>
    <div class="icon">
      <fu-icon-arrow-up :style="{color: upIconColor}" v-if="type === 'up'"/>
      <fu-icon-arrow-down :style="{color: downIconColor}" v-else/>
    </div>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps({
  type: {
    type: String,
    default: 'up'
  },
  text: {
    type: String,
    default: '文本'
  },
  upIconColor: {
    type: String,
    default: '#00C851'
  },
  downIconColor: {
    type: String,
    default: '#ff4444'
  }
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
