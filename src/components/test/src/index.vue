<template>
  <div class="w-full">
    <div v-show="isShow" style="border-bottom: solid 1px #eee">
      <el-form class="flex-1">
        <el-row v-for="cloumn in rowColumn" :key="cloumn">
          <el-col v-for="item in cloumn" :span="24 / groupSize">
            <el-form-item :label="item.label">
              <component :is="item.type"/>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 默认插槽 -->
        <slot></slot>

        <div class="right">
          <div v-if="isAdvanced" class="mb-4 mr-2">
            <el-dropdown split-button type="primary" @click="() => onQueryClick()">
              <div>查询</div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>高级查询</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div v-else>
            <el-button icon="fu-icon-search" type="primary" @click="onSearch">查询</el-button>
          </div>
          <div>
            <el-button icon="fu-icon-refresh" plain type="primary" @click="onReset">重置</el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {ElMessage} from "element-plus";

const props = defineProps({
  isShow: {
    type: Boolean,
    default: false
  },
  isAdvanced: {
    type: Boolean,
    default: false
  },
  rowColumn: {
    type: Array,
    default: () => []
  },
  groupSize: {
    type: Number,
    default: 3
  }
})
const onSearch = () => {
  ElMessage.success("onSearch")
}
const onReset = () => {
  ElMessage.success("onReset")
}
const onQueryClick = () => {
  ElMessage.success("onQueryClick")
}

</script>

<style lang="scss" scoped>
.right {
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px 15px 0;

  .el-button {
    margin-left: 10px;
  }
}
</style>
