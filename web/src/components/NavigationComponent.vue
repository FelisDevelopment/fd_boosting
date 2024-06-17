<script setup lang="ts">
import { useUi } from '@/stores/ui.store'
import { NDrawer, NDrawerContent } from 'naive-ui'

const ui = useUi()
const props = defineProps({
  to: HTMLElement
})
</script>
<template>
  <n-drawer v-model:show="ui.isNavigationOpen" :width="350" placement="left" :to="props.to">
    <!-- <n-drawer-content :native-scrollbar="false" closable></n-drawer-content> -->
  </n-drawer>
</template>
