<script setup lang="ts">
import { onMounted } from 'vue'
import { useUi } from '@/stores/ui.store'

const ui = useUi()

onMounted(() => {
  console.log('hits 2')
  ui.isLoading = false
})
</script>
<template>
  <div class="flex items-center justify-center text-white bg-red-500">Testing</div>
</template>
