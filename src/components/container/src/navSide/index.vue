<template>
  <el-menu
      default-active="2"
      :collapse="collapse"
      class="el-menu-vertical-demo"
  >
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-menu/>
      </el-icon>
<!--      <span>图标选择器</span>-->
      <router-link to="/chooseIcon">图标选择器</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-menu/>
      </el-icon>
<!--      <span>省市区选择器</span>-->
      <router-link to="/chooseArea">省市区选择器</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <fu-icon-menu/>
      </el-icon>
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu>
</template>


<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()

</script>



<style scoped lang="scss">
/*应用于类名为.el-menu-vertical-demo且不包含类名为.el-menu--collapse的元素*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
