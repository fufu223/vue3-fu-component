<template>
  <div class="menu-box">
    <fu-menu :data="data1" background-color="red" active-text-color="white" default-active="1"></fu-menu>
  </div>
</template>

<script setup lang="ts">
let data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document'
      }
    ]
  }
]
</script>

<style scoped lang="scss">
.menu-box {
  width: 200px;
}
</style>
