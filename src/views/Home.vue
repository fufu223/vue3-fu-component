<template>
<div>
  <h1>{{ text }}</h1>
  <button @click="change">点我</button>
</div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('vue改变了标题')

const change = () => {
  text.value = 'vue点击改变了标题'
}
</script>

<style>

</style>
