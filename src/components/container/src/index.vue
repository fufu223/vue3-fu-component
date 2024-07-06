<script setup>
import {ref} from 'vue'

const isCollapse = ref(false)

const toggle = () => {
  isCollapse.value = !isCollapse.value
}
</script>


<template>
  <el-container>
    <el-aside width="auto">
      <el-menu
          default-active="2"
          :collapse="isCollapse"
          class="el-menu-vertical-demo"
      >
        <el-menu-item index="2">
          <el-icon>
            <el-icon-menu/>
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon>
            <el-icon-menu/>
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon>
            <el-icon-menu/>
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggle">
          <el-icon-expand v-if="isCollapse"></el-icon-expand>
        <el-icon-fold v-else></el-icon-fold>
        </span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
/*应用于类名为.el-menu-vertical-demo且不包含类名为.el-menu--collapse的元素*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
