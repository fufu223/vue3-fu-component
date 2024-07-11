<template>
<div>
  <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right">
        <fu-icon-arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</div>
</template>

<script setup>
import { ref } from 'vue'

const item = {
  code: "1",
  title: "测试",
  children: [
    {
      code: "1",
      title: "测试1",
    },
    {
      code: "2",
      title: "测试2",
    }
  ]
}



</script>

<style scoped>
.example-showcase, .el-dropdown-link {
  cursor: pointer;
  color: blue;
  display: flex;
  align-items: center;
}
</style>
