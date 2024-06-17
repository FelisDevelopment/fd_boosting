<script setup lang="ts">
import { useUi } from '@/stores/ui.store'
import { NDrawer, NDrawerContent } from 'naive-ui'

const ui = useUi()
const props = defineProps({
  to: HTMLElement
})
</script>
<template>
  <n-drawer v-model:show="ui.isUserDrawerOpen" :width="350" placement="right" :to="props.to">
    <n-drawer-content title="Profilis" :native-scrollbar="false" closable></n-drawer-content>
  </n-drawer>
</template>
