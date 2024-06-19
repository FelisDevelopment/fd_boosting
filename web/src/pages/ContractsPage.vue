<script setup lang="ts">
import { useMessage } from '@/stores/message.store'
import { useUi } from '@/stores/ui.store'
import { NScrollbar, NCard, NButton, NFlex } from 'naive-ui'
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
  ui.isLoading = false
})
</script>

<template>
  <div class="flex flex-1 flex-col text-white px-3 mt-5 gap-10">
    <n-flex vertical>
      <h1 class="text-xl font-semibold tracking-wider">Group</h1>
      <n-card size="small"> aaa </n-card>
    </n-flex>

    <n-flex justify="space-between">
      <h1 class="text-xl font-semibold tracking-wider">Group</h1>
      <n-button tertiary type="primary">Join Queue</n-button>
    </n-flex>
  </div>
  <!-- <n-scrollbar>
    <div class="flex-1 overflow-auto">
      <n-button @click.prevent="ui.switchTheme()"> Bandom </n-button>
    </div>
  </n-scrollbar> -->
</template>
