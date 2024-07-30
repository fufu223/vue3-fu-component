<template>
  <el-menu
      class="el-menu-vertical-demo"
      v-bind="$attrs"
      :default-active="defaultActive"
      :router="router"
  >
    <template v-for="(item, i) in data" :key="i">
      <!-- 一级菜单 -->
      <el-menu-item
      v-if="!item[children] || !item[children].length"
      :index="item[index]"
      >
        <component v-if="item[icon]" :is="`fu-icon-${toLine(item[icon])}`"></component>
        <span>{{item[name]}}</span>
      </el-menu-item>

      <!-- 二级菜单 -->
      <el-sub-menu v-if="item[children] && item[children].length" :index="item[props.index]">
        <template #title>
          <component v-if="item[icon]" :is="`fu-icon-${toLine(item[icon])}`"></component>
          <span>{{item[name]}}</span>
        </template>
        <el-menu-item v-for="(subItem, subIndex) in item[children]" :index="subItem[index]" :key="subIndex">
          <component v-if="subItem[icon]" :is="`fu-icon-${toLine(subItem[icon])}`"></component>
          <span>{{subItem[name]}}</span>
        </el-menu-item>
      </el-sub-menu>

    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { MenuItem } from "./type";
import {toLine} from "@/util";

let props = defineProps({
  // 菜单数据
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false
  },
  // 键名
  name : {
    type: String,
    default: 'name'
  },
  // 菜单标识的键名
  index : {
    type: String,
    default: 'index'
  },
  // 菜单图标的键名
  icon : {
    type: String,
    default: 'icon'
  },
  // 菜单子菜单的键名
  children : {
    type: String,
    default: 'children'
  }
})

console.log(props.data)
</script>

<style scoped lang="scss">
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;
}
/*应用于类名为.el-menu-vertical-demo且不包含类名为.el-menu--collapse的元素*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;

  a {
    text-decoration: none;
    color: #409eff;
  }
}
</style>
