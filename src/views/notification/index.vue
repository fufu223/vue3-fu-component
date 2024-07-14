<template>
<!--  <fu-notification :is-dot="true"></fu-notification>-->
<!--  <fu-notification :is-dot="true" :size="30"></fu-notification>-->
<!--  <fu-notification  value="50"></fu-notification>-->
<!--  <fu-notification icon="fu-icon-bell-filled" :is-dot="false" :value="100" :max="99"></fu-notification>-->
      <fu-notification :value="50">
        <template v-slot:default>
          <fu-list :list="list" :actions="actions"></fu-list>
        </template>
      </fu-notification>
</template>

<script setup lang="ts">
import FuNotification from "@/components/notification/src/index.vue"
import FuList from "@/components/list/src/index.vue"
import { list, actions } from "@/views/notification/data";

console.log(list,actions)
</script>

<style scoped lang="scss">

</style>