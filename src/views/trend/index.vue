<template>
  <div class="wrapper">
    <div class="split-line">
      <div style="color: deepskyblue">文本、类型{text/type}</div>
    </div>
    <div class="flex">
      <div>
        <fu-trend text="营业额"></fu-trend>
      </div>
      <div>
        <fu-trend text="销售额" type="down"></fu-trend>
      </div>
    </div>
  </div>

  <div class="wrapper">
    <div class="split-line">
      <div style="color: red">颜色反转{reverseColor}</div>
    </div>
    <div class="flex">
      <div>
        <fu-trend reverseColor text="死亡数" type="up"></fu-trend>
      </div>
      <div>
        <fu-trend reverseColor text="杀敌数" type="down"></fu-trend>
      </div>
    </div>
  </div>

  <div class="wrapper">
    <div class="split-line">
      <div style="color: #3bd501">文字颜色{upTextColor/downTextColor}</div>
    </div>
    <div class="flex">
      <div>
        <fu-trend text="Java好" upTextColor="blue"></fu-trend>
      </div>
      <div>
        <fu-trend text="Java不好" type="down" downTextColor="aqua"></fu-trend>
      </div>
    </div>
  </div>

  <div class="wrapper">
    <div class="split-line">
      <div style="color: #8614e1">更换图标</div>
    </div>
    <div class="flex">
      <div>
        <fu-trend text="前端好哇" upIcon="CaretTop"></fu-trend>
      </div>
      <div>
        <fu-trend text="好个串串！" type="down" downIcon="CaretBottom"></fu-trend>
      </div>
    </div>
  </div>


</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.wrapper {
  border: 2px solid #c9c9c9;
  margin-bottom: 50px;
}

.split-line {
  width: 100%;
  height: 2px;
  background-color: #c9c9c9;
  margin: 35px 0 0 0;
  font-size: 20px;

  div {
    position: relative;
    width: 30%;
    background-color: #f8d4d4;
    margin: 0 auto;
    top: -12px;
    text-align: center;
    font-size: 20px;
    padding: 3pxs;
  }
}

.flex {
  display: flex;
  padding: 20px;

  div {
    margin-right: 20px;
  }
}

</style>
