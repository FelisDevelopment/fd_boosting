<script setup lang="ts">
import { useMessage } from '@/stores/message.store'
import { useUi } from '@/stores/ui.store'
import { NScrollbar, NButton, useThemeVars } from 'naive-ui'

const ui = useUi()
const message = useMessage()

const testing = () => {
  message.show('success', {
    content: 'mmm?',
    duration: 1000
  })
}
</script>

<template>
  <n-scrollbar>
    <div class="flex-1 overflow-auto">
      <n-button @click.prevent="ui.switchTheme()"> Bandom </n-button>
    </div>
  </n-scrollbar>
</template>
