import ContractsPage from '@/pages/ContractsPage.vue'
import HistoryPage from '@/pages/HistoryPage.vue'
import { type GlobalTheme, darkTheme, lightTheme } from 'naive-ui'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export enum AvailableTabs {
  CONTRACTS = 'CONTRACTS',
  HISTORY = 'HISTORY',
  STORE = 'STORE'
}

export const useUi = defineStore('ui', () => {
  const currentTab = ref<AvailableTabs>(AvailableTabs.CONTRACTS)
  const currentTabData = ref<Record<string, any>>({})
  const currentTabComponent = computed(() => {
    console.log('dafuq', currentTab.value)
    switch (currentTab.value) {
      case AvailableTabs.HISTORY:
        console.log('yes')
        return HistoryPage
      default:
        console.log('yes2')
        return ContractsPage
    }
  })

  const theme = ref<GlobalTheme>(darkTheme)
  const isDarkMode = computed(() => theme.value.name === 'dark')
  const switchTheme = (): void => {
    if (theme.value.name !== 'dark') {
      theme.value = darkTheme
      return
    }

    theme.value = lightTheme
  }

  const isUserDrawerOpen = ref<boolean>(false)
  const isNavigationOpen = ref<boolean>(false)

  return {
    currentTab,
    currentTabData,
    currentTabComponent,
    theme,
    switchTheme,
    isDarkMode,
    isUserDrawerOpen,
    isNavigationOpen
  }
})
