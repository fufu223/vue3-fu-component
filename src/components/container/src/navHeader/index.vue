<template>
  <div class="header">
    <span @click="toggle" style="cursor: pointer">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
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
