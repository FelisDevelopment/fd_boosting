<script setup lang="ts">
import { AvailableTabs, useUi } from '@/stores/ui.store'
import { NDrawer, NDrawerContent, NMenu, type MenuOption } from 'naive-ui'
import { h } from 'vue'

const ui = useUi()
const props = defineProps({
  to: HTMLElement
})

const options: MenuOption[] = [
  {
    type: 'group',
    label: 'Personal',
    key: 'personal',
    children: [
      {
        label: () =>
          h(
            'a',
            {
              onClick: (event) => changeTab(event, AvailableTabs.CONTRACTS)
            },
            {
              default: () => 'Contracts'
            }
          ),
        key: 'contracts'
        // icon: renderIcon(PersonIcon)
      },
      {
        label: 'Skills',
        key: 'skills'
        // icon: renderIcon(PersonIcon)
      },
      {
        label: () =>
          h(
            'a',
            {
              onClick: (event) => changeTab(event, AvailableTabs.HISTORY)
            },
            {
              default: () => 'History'
            }
          ),
        key: 'history'
        // icon: renderIcon(PersonIcon)
      }
    ]
  },
  {
    key: 'divider-1',
    type: 'divider'
  },
  {
    type: 'group',
    label: 'Other',
    key: 'other',
    children: [
      {
        label: 'Auction',
        key: 'auction'
        // icon: renderIcon(PersonIcon)
      },
      {
        label: 'Store',
        key: 'store'
        // icon: renderIcon(PersonIcon)
      },
      {
        label: 'Leaderboard',
        key: 'leaderboard'
        // icon: renderIcon(PersonIcon)
      }
    ]
  }
]

const changeTab = (event: MouseEvent, id: AvailableTabs) => {
  event.preventDefault()
  console.log(id)
  ui.isNavigationOpen = false
  setTimeout(() => {
    console.log('changing tab')
    ui.currentTab = id
  }, 2000)
}
</script>
<template>
  <n-drawer v-model:show="ui.isNavigationOpen" :width="350" placement="left" :to="props.to">
    <!-- <n-drawer-content :native-scrollbar="false" closable></n-drawer-content> -->
    <!--
     :default-expanded-keys="defaultExpandedKeys"
    @update:expanded-keys="handleUpdateExpandedKeys"
     -->
    <n-menu class="select-none" :options="options" />
  </n-drawer>
</template>
