<template>
  <el-tabs>
    <el-tab-pane v-for="(item,index) in list" :key="index" :label="item.title">
      {{item.title}}
    </el-tab-pane>
  </el-tabs>
</template>


<script setup lang="ts">
import {PropType} from "vue";
import {ActionOptions, ListOptions} from "@/components/list/src/types";

defineProps({
  /**
   * 列表的内容
   */
  list: {
    type: Array as PropType<ListOptions>,
    required: true
  },
  actions: {
    type: Array as PropType<ActionOptions>,
    default: () => []
  }
})
</script>

<style scoped lang="scss">

</style>