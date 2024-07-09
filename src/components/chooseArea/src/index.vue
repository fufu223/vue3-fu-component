<template>
  <div class="area-container">
    <el-select v-model="province" clearable placeholder="请选择省份">
      <el-option v-for="item in pcaRef" :key="item.code" :label="item.name"
                 :value="item.code"></el-option>
    </el-select>
    <el-select v-model="city" :disabled="!province" clearable placeholder="请选择城市" style="margin: 0 15px 0 15px">
      <el-option v-for="item in selectCities" :key="item.code" :label="item.name" :value="item.code"></el-option>
    </el-select>
    <el-select v-model="area" :disabled="!city" clearable placeholder="请选择区县">
      <el-option v-for="item in selectArea" :key="item.code" :label="item.name" :value="item.code"></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import pca from '@/views/chooseArea/lib/pca-code.json'
import {ref, watch} from 'vue'

const emits = defineEmits(['selectAreaData'])

// 省市区数据类型
interface AreaItem {
  code: string
  name: string
  children: AreaItem[]
}

// 省市数据类型:用于父组件传递数据
interface AreaData {
  name: string
  code: string
}

let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
let pcaRef = ref(pca)
let selectCities = ref<AreaItem[]>([])
let selectArea = ref<AreaItem[]>([])

// 监听省级数据更新市级数据
watch(() => province.value, val => {
  if (val) {
    selectCities.value = pcaRef.value.find(item => item.code === province.value).children
  }
  city.value = ''
  area.value = ''
})
// 监听市级数据更新区级数据
watch(() => city.value, val => {
  if (val) {
    selectArea.value = selectCities.value.find(item => item.code === city.value).children
  }
  area.value = ''
})
watch(() => area.value, val => {
  if (val) {
    let provinceData = <AreaData>{
      name: pcaRef.value.find(item => item.code === province.value).name,
      code: province.value
    }
    let cityData = <AreaData>{
      name: selectCities.value.find(item => item.code === city.value).name,
      code: city.value
    }
    let areaData = <AreaData>{
      name: selectArea.value.find(item => item.code === val).name!,
      code: val
    }
    emits('selectAreaData', {province: provinceData, city: cityData, area: areaData})
  }

})
</script>

<style lang="scss" scoped>
.area-container {
  display: flex;
}
</style>
