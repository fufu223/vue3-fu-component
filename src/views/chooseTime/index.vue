<template>
  <div class="chooseTimeBox">
    <fu-choose-time
        @update:start-time="updateStartTime"
        @update:endTime="updateEndTime"
        :startOptions="startOptions"
    ></fu-choose-time>
  </div>
</template>

<script setup lang="ts">

interface EndValue{
  startTime:string,
  endTime:string
}

const updateStartTime = (val:string) =>{
  console.log('updateStartTime:',val)
}
const updateEndTime = (val:EndValue) =>{
  console.log('updateEndTime:',val)
}

const startOptions = {
  size: 'mini',
  clearable: false
}

</script>

<style scoped lang="scss">

</style>
