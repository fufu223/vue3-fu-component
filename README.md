## 构建项目
1. 创建一个新的vue3项目，(推荐使用vite)
2. 准备一个简单的页面布局 vue-router
3. 编写组件

## 全局注册组件
### 注册全部element图标
```ts
import * as Icons from '@element-plus/icons'

for (let i in Icons) {
// 注册全局组件
app.component(`el-icon${toLine(i)}`, (Icons as any)[i])
}

export const toLine = (str: string) => {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
```

## 组件封装
### 伸缩菜单
主要思想是对el-menu进行封装，通过el-menu的collpase属性控制菜单伸缩

ps:对于菜单的宽度最好不要使用固定值，因为当伸缩时，容器的宽度不会改变，从而导致另一部的DOM元素不会发生位移


### 图标选择器
主要思想是对之前注册的所有el-icon组件进行遍历，将其渲染到页面上，然后点击图标时获取其组件名，进行复制操作
#### 实现步骤
1. 通过点击按钮打开对话框el-dialog `ps: dialog组件的v-model属性控制对话框的显示与隐藏,需要注意的是，由于图标选择器是一个封装好的组件，在进行父子组件通信时，子组件需要使用prop进行数据接收，但是prop属性通常是不允许改变的，所以对于需要改变的数据，prop里的属性不能直接使用，需要通过响应式变量存储并利用watch进行数据更新，这一点在组件fu-choose-icon和view的chooseIcon中有体现`
```vue
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
```
```vue
<template>
  <el-button type="primary" @click="handleClick">
    <slot></slot>
  </el-button>

  <el-dialog :title="title" v-model="dialogVisible">
    
  </el-dialog>
</template>

<script setup lang="ts">
  const props = defineProps<{
    // 弹出框的标题
    title: string,
    // 控制弹出框的显示与隐藏
    visible: boolean
  }>()
</script>
```
这里的`visible`属性是父组件通过`v-model`绑定的，所以子组件通过`defineProps`接收，但是`visible`属性是只读的，所以无法修改，所以需要通过响应式变量`dialogVisible`进行数据更新，通过watch监听`props.visible`的变化，将`dialogVisible`的值更新为`props.visible`的值，这样`dialogVisible`的值就可以改变，从而实现父子组件通信 **（上述代码并不包括数据更新的实现，这里只是作为案例展示思路）**
