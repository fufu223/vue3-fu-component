<template>
  <fu-choose-area @select-area-data="getSelectData"></fu-choose-area>
</template>

<script lang='ts' setup>
import FuChooseArea from '@/components/chooseArea/src/index.vue'

import { ref } from 'vue'
const getSelectData = (data: any) => {
  console.log(data)
}
</script>

<style lang='scss' scoped>
</style>
