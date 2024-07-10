<template>
  <div class="header">
    <span @click="toggle" style="cursor: pointer">
      <fu-icon-expand v-if="collapse"></fu-icon-expand>
      <fu-icon-fold v-else></fu-icon-fold>
    </span>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()
let emit = defineEmits(['update:collapse'])

const toggle = () => {
  // 需要修改父组件的数据
  emit('update:collapse', !props.collapse)
}

</script>


<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
</style>
