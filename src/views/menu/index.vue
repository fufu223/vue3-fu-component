<template>
  <div class="menu-box">
    <div class="left">
      <span>二级菜单</span>
      <fu-menu :data="data1"  active-text-color="red" default-active="1" ></fu-menu>
    </div>
    <div class="right">
      <span>多级菜单(递归)</span>
      <fu-infinite-menu :data="data2" active-text-color="blue" default-active="1"></fu-infinite-menu>
    </div>
    <div class="description">
      <div style="text-align: center"><span>归纳</span></div>
      <div class="context">
        <font color="red">二级菜单：</font>遍历菜单列表，判断是否有children属性，有则递归渲染子菜单，否则为一级菜单
        <br>
        <font color="red">多级菜单：</font>遍历菜单列表，递归判断是否有children属性，有则继续递归渲染子菜单，否则为一级菜单
        <br>
        <font color="red">补充说明：</font>由于需要递归，vue的模板渲染不支持递归，所以需要使用jsx语法渲染。jsx中无法使用vue的绑定语法
        ，可以借用vue的useAttrs()方法，将属性绑定到组件上
      </div>
    </div>

  </div>
</template>s

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
let data2 = [
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
        icon: 'document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'document',
                children: [
                  {
                    name: '导航3-1-1-1-1',
                    index: '3-1-1-1-1',
                    icon: 'document'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
</script>

<style scoped lang="scss">
.menu-box {
  display: flex;

  .left,.right,.description {
    font-size: 20px;
    text-shadow: 1px 1px #f30d0d;
  }

  .description {
    flex: 1;
    height: 500px;

    .context {
      padding: 10px;
      height: 100%;
      flex: 1;
      text-shadow: none;
      font-size: 18px;
      color: #000000;
      border-top: 1px solid #ccc;
    }
  }

}
</style>
