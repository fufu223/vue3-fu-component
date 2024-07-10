<template>
  <el-menu
      :collapse="collapse"
      class="el-menu-vertical-demo"
      default-active="2"
  >
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-menu/>
      </el-icon>
      <span>
        <router-link to="/chooseIcon">图标选择器</router-link>
      </span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-menu/>
      </el-icon>
      <span>
        <router-link to="/chooseArea">省市区选择器</router-link>
      </span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-menu/>
      </el-icon>
      <span>
        <router-link to="/trend">趋势标记</router-link>
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
}
</style>
