<template>
  <div>
    <fu-choose-icon title="选择图标" v-model:visible="visible">选择图标</fu-choose-icon>
  </div>
</template>

<script lang='ts' setup>
import  FuChooseIcon  from '@/components/chooseIcon/src/index.vue'
import { ref } from 'vue'

let visible = ref<boolean>(false)
</script>

<style lang='scss' scoped>
</style>
