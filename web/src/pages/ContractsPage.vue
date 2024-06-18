<script setup lang="ts">
import { useMessage } from '@/stores/message.store'
import { useUi } from '@/stores/ui.store'
import { NScrollbar, NButton, useThemeVars } from 'naive-ui'
import { onMounted } from 'vue'

const ui = useUi()
// const message = useMessage()
//
// const testing = () => {
//   message.show('success', {
// content: 'mmm?',
// duration: 1000
//   })
// }

onMounted(() => {
  console.log('hits')
  ui.isLoading = false
})
</script>

<template>
  <div class="flex flex-1 items-center justify-center text-white bg-blue-500">Main page</div>
  <!-- <n-scrollbar>
    <div class="flex-1 overflow-auto">
      <n-button @click.prevent="ui.switchTheme()"> Bandom </n-button>
    </div>
  </n-scrollbar> -->
</template>
