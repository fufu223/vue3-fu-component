<template>
  <!--  <el-menu-->
  <!--      :collapse="collapse"-->
  <!--      class="el-menu-vertical-demo"-->
  <!--      default-active="2"-->
  <!--  >-->
  <!--    <el-menu-item index="2">-->
  <!--      <el-icon>-->
  <!--        <fu-icon-check />-->
  <!--      </el-icon>-->
  <!--      <span>-->
  <!--        <router-link to="/chooseIcon">图标选择器</router-link>-->
  <!--      </span>-->
  <!--    </el-menu-item>-->
  <!--    <el-menu-item index="2">-->
  <!--      <el-icon>-->
  <!--        <fu-icon-map-location />-->
  <!--      </el-icon>-->
  <!--      <span>-->
  <!--        <router-link to="/chooseArea">省市区选择器</router-link>-->
  <!--      </span>-->
  <!--    </el-menu-item>-->
  <!--    <el-menu-item index="2">-->
  <!--      <el-icon>-->
  <!--        <fu-icon-sort />-->
  <!--      </el-icon>-->
  <!--      <span>-->
  <!--        <router-link to="/trend">趋势标记</router-link>-->
  <!--      </span>-->
  <!--    </el-menu-item>-->
  <!--    <el-menu-item index="2">-->
  <!--      <el-icon>-->
  <!--        <fu-icon-timer />-->
  <!--      </el-icon>-->
  <!--      <span>-->
  <!--        <router-link to="/trend">时间选择器</router-link>-->
  <!--      </span>-->
  <!--    </el-menu-item>-->
  <!--    <el-menu-item index="2">-->
  <!--      <el-icon>-->
  <!--        <fu-icon-bell />-->
  <!--      </el-icon>-->
  <!--      <span>-->
  <!--        <router-link to="/notification">通知菜单</router-link>-->
  <!--      </span>-->
  <!--    </el-menu-item>-->
  <!--    <el-menu-item index="2">-->
  <!--      <el-icon>-->
  <!--        <fu-icon-histogram />-->
  <!--      </el-icon>-->
  <!--      <span>-->
  <!--        <router-link to="/progress">自定义业务组件</router-link>-->
  <!--      </span>-->
  <!--    </el-menu-item>-->
  <!--    <el-menu-item index="2">-->
  <!--      <el-icon>-->
  <!--        <fu-icon-menu />-->
  <!--      </el-icon>-->
  <!--      <span>-->
  <!--        <router-link to="/menu">菜单</router-link>-->
  <!--      </span>-->
  <!--    </el-menu-item>-->
  <!--  </el-menu>-->
  <fu-menu
      :data="data"
      :default-active="$route.path"
      router
      :collapse="collapse"
  >

  </fu-menu>
</template>


<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()

let data = [
  {
    name: '首页',
    icon: 'homeFilled',
    index: '/'
  },
  {
    name: '图标选择器',
    icon: 'check',
    index: '/chooseIcon'
  },
  {
    name: '省市区选择器',
    icon: 'map-location',
    index: '/chooseArea'
  },
  {
    name: '趋势标记',
    icon: 'sort',
    index: '/trend'
  },
  {
    name: '时间选择器',
    icon: 'timer',
    index: '/chooseTime'
  },
  {
    name: '通知菜单',
    icon: 'bell',
    index: '/notification'
  },
  {
    name: '自定义业务组件',
    icon: 'histogram',
    index: '/progress'
  },
  {
    name: '菜单',
    icon: 'menu',
    index: '/menu'
  },
  {
    name: '进度条',
    icon: 'right',
    index: '/progress'
  }
]

</script>


<style lang="scss" scoped>
</style>
