import HomePage from '@/pages/HomePage.vue'
import { type GlobalTheme, darkTheme, lightTheme } from 'naive-ui'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export enum AvailableTabs {
  HOME = 'HOME',
  STORE = 'STORE'
}

export const useUi = defineStore('ui', () => {
  const currentTab = ref<AvailableTabs>(AvailableTabs.HOME)
  const currentTabData = ref<Record<string, any>>({})
  const currentTabComponent = computed(() => {
    switch (currentTab.value) {
      default:
        return HomePage
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
  const isNavigationOpen = ref<boolean>(true)

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
