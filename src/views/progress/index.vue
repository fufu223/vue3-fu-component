<template>
  <query-bar :is-advanced="true" :is-show="isShow" :row-column="rowColumn"></query-bar>
  <el-button @click="btnText = isShow?'点击显示':'点击隐藏';isShow = !isShow" :style="{color: isShow?'blue':'red'}">{{btnText}}</el-button>
  <hr>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address"/>
    <el-table-column label="审批状态">
      <template #default="scope">
        <el-tag>已下发</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="盘点进度">
      <template #default="scope">
        <fs-progress :percentage="50"  :indeterminate="false" :striped="false" :stroke-width="10"></fs-progress>
      </template>
    </el-table-column>
  </el-table>
  <div class="progress-box">
    <div class="title">
      样式一
    </div>
    <div class="progress-bar">
      <fs-progress v-bind="progressProp" :indeterminate="false"></fs-progress>
    </div>
  </div>
  <div class="progress-box">
    <div class="title">
      样式二
    </div>
    <div class="progress-bar">
      <fs-progress color="red" v-bind="progressProp" :stroke-width="15"></fs-progress>
    </div>
  </div>
  <div class="progress-box">
    <div class="title">
      样式三
    </div>
    <div class="progress-bar">
      <fs-progress v-bind="progressProp" :striped="false" :stroke-width="30"></fs-progress>
    </div>
  </div>
  <div class="progress-box">
    <div class="title">
      样式四
    </div>
    <div class="progress-bar">
      <fs-progress :text-inside="true":percentage="50"  status="exception" :indeterminate="false" :striped="false" :stroke-width="30">
        <span>Content</span>
      </fs-progress>
    </div>
  </div>
  <div class="progress-box">
    <div class="title">
      样式五
    </div>
    <div class="progress-bar">
      <fs-progress :percentage="50"  :indeterminate="false" :striped="false" :stroke-width="30">
      </fs-progress>
    </div>
  </div>
  <div class="progress-box">
    <div class="title">
      样式6
    </div>
    <div class="progress-bar">
      <fs-progress :percentage="50"  :indeterminate="false" :striped="false" :stroke-width="10" type="circle">
      </fs-progress>
    </div>
  </div>
  <el-button @click="progressProp.percentage=0" type="primary">reset</el-button>
</template>

<script setup>
import {ref} from "vue"
import queryBar from "@/components/test/src/index.vue"
import FsProgress from "@/components/progress/src/index.vue"

const btnText = ref('点击显示')
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
    },
    {
      label: "性别",
      type: "el-select"
    }
  ]
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
]

const progressProp = ref({
  percentage: 10, // 计算百分比
  type: 'line',
  striped: true,
  indeterminate: true,
  duration: 5
})
setInterval(() => {
  if (progressProp.value.percentage < 100)
    progressProp.value.percentage += 1
  else {
    progressProp.value.percentage = 0
  }
}, 100)

</script>

<style scoped lang="scss">
.progress-box {
  display: flex;
  height: 80px;
  padding: 10px 5px 0 5px;
  justify-content: center;
  align-items: center;

  .title {
    text-align: right;
    margin-right: 10px;
  }

  .progress-bar {
    flex: 1;
  }
}
</style>
