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
  const isTabInTransition = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const currentTab = ref<AvailableTabs>(AvailableTabs.CONTRACTS)
  const currentTabComponent = computed(() => {
    switch (currentTab.value) {
      case AvailableTabs.HISTORY:
        return HistoryPage
      default:
        return ContractsPage
    }
  })
  const switchTab = (tab: AvailableTabs) => {
    if (isLoading.value) return
    if (currentTab.value === tab) return

    isLoading.value = true

    currentTab.value = tab
    setTimeout(() => {
      isLoading.value = false
    }, 1000)
  }

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
    isLoading,
    switchTab,
    currentTab,
    currentTabComponent,
    theme,
    switchTheme,
    isDarkMode,
    isUserDrawerOpen,
    isNavigationOpen
  }
})
