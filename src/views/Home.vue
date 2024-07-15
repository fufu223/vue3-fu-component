<template>
  <query-bar :is-advanced="true" :is-show="isShow" :row-column="rowColumn"></query-bar>
  <el-button @click="isShow = !isShow">点击显示</el-button>
</template>

<script setup>
import {ref} from "vue"
import queryBar from "@/components/test/src/index.vue"

const isShow = ref(false)
  const rowColumn = {
  1: [
    {
      label: "姓名",
      type: "el-input"
    },
    {
      label: "年龄",
      type: "el-input"
    }
  ],
  2: [
    {
      label: "性别",
      type: "el-select"
    },
    {
      label: "地址",
      type: "el-input"
    }
  ]
}

</script>

<style scoped>

</style>
