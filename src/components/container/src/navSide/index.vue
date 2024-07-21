<template>
  <el-menu
      :collapse="collapse"
      class="el-menu-vertical-demo"
      default-active="2"
  >
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-check />
      </el-icon>
      <span>
        <router-link to="/chooseIcon">图标选择器</router-link>
      </span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-map-location />
      </el-icon>
      <span>
        <router-link to="/chooseArea">省市区选择器</router-link>
      </span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-sort />
      </el-icon>
      <span>
        <router-link to="/trend">趋势标记</router-link>
      </span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-timer />
      </el-icon>
      <span>
        <router-link to="/trend">时间选择器</router-link>
      </span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-bell />
      </el-icon>
      <span>
        <router-link to="/notification">通知菜单</router-link>
      </span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-bell />
      </el-icon>
      <span>
        <router-link to="/progress">自定义业务组件</router-link>
      </span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-bell />
      </el-icon>
      <span>
        <router-link to="/menu">菜单</router-link>
      </span>
    </el-menu-item>
  </el-menu>
</template>


<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()

</script>


<style lang="scss" scoped>
/*应用于类名为.el-menu-vertical-demo且不包含类名为.el-menu--collapse的元素*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  a {
    text-decoration: none;
    color: #409eff;
  }
}
</style>
