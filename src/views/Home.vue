<script setup lang="ts">

import axios from 'axios'

const handle = () =>{
   axios.post("https://api.52hyjs.com/api/nidemingzi")
      .then((resp)=>{
        document.getElementById("img").setAttribute("src",resp.config.url)
  })
}

</script>

<template>
  <div class="wrapper">
    <div class="title">
      <h2>这里是标题，用js替换</h2>
    </div>
    <span style="margin-bottom: 15px;margin-top:15px">
<!--      短剧类型：<input type="text" placeholder="请输入您想看的类型" style="height: 30px;width:250px;border-radius: 5px"/>-->
      <button style="margin-left: 15px;height: 30px;width: 155px;border-radius: 5px;background-color:yellow" @click="handle">获取一张壁纸</button>
    </span>

    <div class="container">
      <img id="img" style="width:100%;height: 100%">
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  border:1px solid ;
  display: flex;
  align-items: center;
  flex-direction: column; // 当设置为column时，flex项目将垂直排列，而不是默认的水平排列。
}

.title {
  text-shadow:1px 2px #f36666;
}

.container {
  width: 700px;
  height: 400px;
  border:1px solid;
}
</style>
