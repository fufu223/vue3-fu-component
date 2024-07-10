<template>
  <div class="wrapper">
    <div class="split-line">
      <div style="color: deepskyblue">正常</div>
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
      <div style="color: red">颜色反转</div>
    </div>
    <div class="flex">
      <div>
        <fu-trend text="死亡数"></fu-trend>
      </div>
      <div>
        <fu-trend text="杀敌数" type="down"></fu-trend>
      </div>
    </div>
  </div>

  <div class="wrapper">
    <div class="split-line">
      <div style="color: #3bd501">文字颜色</div>
    </div>
    <div class="flex">
      <div>
        <fu-trend text="Java好"></fu-trend>
      </div>
      <div>
        <fu-trend text="Java不好" type="down"></fu-trend>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.wrapper {
  border: 2px solid #c9c9c9;
  margin-bottom: 120px;
}

.split-line {
  width: 100%;
  height: 2px;
  background-color: #c9c9c9;
  margin: 35px 0 0 0;
  font-size: 20px;

  div {
    position: relative;
    width: 10%;
    background-color: #c9c9c9;
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
