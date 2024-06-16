<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import HomePage from './pages/HomePage.vue'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <!-- w-[1350px] h-[970px] -->
    <main id="parent" class="relative w-[1350px] h-[970px] p-[2.25rem] flex flex-1">
      <div id="inner" class="z-10 bg-blue-500 flex flex-1 rounded-[1.275rem] overflow-hidden p-1">
        aaaa
        <!-- <HomePage /> -->
      </div>
      <img src="/images/frame.svg" class="absolute w-full top-0 left-0 -z-10" alt="Frame" />
    </main>
  </n-config-provider>
</template>
