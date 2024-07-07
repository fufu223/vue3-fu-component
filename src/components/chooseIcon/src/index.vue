<template>
  <el-button type="primary" @click="handleClick">
    <slot></slot>
  </el-button>

  <div class="fu-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="icon-container">
        <div
            v-for="(item, index) in Object.keys(ElIcons)"
            :key="index"
            class="icon-item"
            @click="clickItem(item)"
        >
          <div>{{item}}</div>
          <div>
            <component :is="`fu-icon${toLine(item)}`" />
          </div>
        </div>
      </div>
    </el-dialog>
  </div>

</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import * as ElIcons from '@element-plus/icons'
import {toLine} from "@/util"
import {useCopy} from "@/hooks/useCopy"

const props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()

let emit = defineEmits(['update:visible'])
// 拷贝一份父组件传递过来的visible
let dialogVisible = ref<Boolean>(props.visible)

// 点击按钮显示弹出框
let handleClick = ()=>{
  // 通知父组件更新数据
  emit('update:visible', !props.visible)
}

let clickItem = (item: string) =>{
  // 获取的组件需要加上我们自己的前缀
  useCopy(`<fu-icon${toLine(item)}`+ ' />')
}

// 监听visible的变化 只能监听第一次的变化
watch(() => props.visible, val => {
  dialogVisible.value = val
})

// 监听组件内部的dialogVisible变化
watch(() => dialogVisible.value, val => {
  emit('update:visible', val)
})




</script>

<style scoped lang="scss">
.icon-container {
  display: flex;
  flex-wrap: wrap; // 允许子元素换行，当一行无法容纳所有子元素时，子元素会换行排列。
  align-items: center;
  border-radius: 20px;
}

.icon-item {
  width: 25%;
  display: flex;
  flex-direction: column; // 当设置为column时，flex项目将垂直排列，而不是默认的水平排列。
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
}

svg {
  width: 2em;
  height: 2em;
}
</style>
