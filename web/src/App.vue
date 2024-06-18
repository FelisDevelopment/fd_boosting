<script setup lang="ts">
import { NConfigProvider, NNotificationProvider, useThemeVars } from 'naive-ui'
import { AvailableTabs, useUi } from './stores/ui.store'
import { computed, ref } from 'vue'
import TopNavigation from './components/TopNavigation.vue'
import UserProfileDrawer from './components/UserProfileDrawer.vue'
import NavigationComponent from './components/NavigationComponent.vue'
import ContractsPage from './pages/ContractsPage.vue'
import HistoryPage from './pages/HistoryPage.vue'
import { NSpin } from 'naive-ui'

const ui = useUi()
const innerElement = ref<HTMLElement>()

const tabs: Record<string, any> = {
  CONTRACTS: ContractsPage,
  HISTORY: HistoryPage
}

const tabComponent = computed(() => {
  return tabs[ui.currentTab]
})

const bodyStyles = computed(() => ({
  'background-color': ui.theme.common!.bodyColor
}))
</script>

<template>
  <n-config-provider :theme="ui.theme">
    <main id="parent" class="relative w-[1215px] h-[873px] p-[2.30rem] flex flex-1">
      <div
        ref="innerElement"
        id="inner"
        class="relative z-10 flex flex-1 flex-col rounded-[1.275rem] overflow-hidden p-1"
        :style="bodyStyles"
      >
        <TopNavigation />
        <n-notification-provider :to="innerElement" container-class="absolute" :max="10">
          <div v-if="ui.isLoading" class="flex flex-1 justify-center items-center">
            <n-spin size="large" />
          </div>
          <component v-else :is="tabComponent" />
        </n-notification-provider>
        <UserProfileDrawer :to="innerElement" />
        <NavigationComponent :to="innerElement" />
      </div>
      <img src="/images/frame.svg" class="absolute w-full top-0 left-0 -z-10" alt="Frame" />
    </main>
  </n-config-provider>
</template>
