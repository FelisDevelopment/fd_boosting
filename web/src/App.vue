<script setup lang="ts">
import { NConfigProvider, NNotificationProvider, useThemeVars } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { useUi } from './stores/ui.store'
import { computed, ref } from 'vue'

const ui = useUi()
const innerElement = ref<HTMLElement>()

const bodyStyles = computed(() => ({
  'background-color': ui.theme.common.bodyColor
}))
</script>

<template>
  <n-config-provider :theme="ui.theme">
    <main id="parent" class="relative w-[1215px] h-[873px] p-[2.30rem] flex flex-1">
      <div
        ref="innerElement"
        id="inner"
        class="relative z-10 flex flex-1 rounded-[1.275rem] overflow-hidden p-1"
        :style="bodyStyles"
      >
        <n-notification-provider :to="innerElement" container-class="absolute" :max="10">
          <component :is="ui.currentTabComponent"></component>
        </n-notification-provider>
      </div>
      <img src="/images/frame.svg" class="absolute w-full top-0 left-0 -z-10" alt="Frame" />
    </main>
  </n-config-provider>
</template>
