<script setup lang="ts">
import {
  NCard,
  NFlex,
  NIcon,
  NProgress,
  NAvatar,
  NPopover,
  NList,
  NListItem,
  NThing,
  NButton
} from 'naive-ui'
import { Menu as MenuIcon } from '@vicons/ionicons5'
import { useUi } from '@/stores/ui.store'
import { computed } from 'vue'
import { useData } from '@/stores/data.store'

const ui = useUi()
const data = useData()

const logoStyles = computed(() => ({
  color: ui.theme.common!.primaryColor
}))
</script>
<template>
  <div class="px-5">
    <n-card size="small" content-class="!py-0 !px-2">
      <n-flex justify="space-between" align="center">
        <n-flex inline align="center" :size="[2, 2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current h-12"
            :style="logoStyles"
            viewBox="0 0 4335 4335"
          >
            <polygon points="1793,2312 2551,2312 2715,2498 1629,2498 " />
            <path d="M1496 2294l-518 -146 -7 207c0,0 29,50 64,64 36,15 408,8 408,8l53 -133z" />
            <path d="M2839 2294l518 -146 7 207c0,0 -29,50 -64,64 -36,15 -408,8 -408,8l-53 -133z" />
            <rect x="824" y="2648" width="128.654" height="78.6275" rx="29" ry="29" />
            <rect x="3390" y="2648" width="128.654" height="78.6275" rx="29" ry="29" />
            <polygon points="1220,1840 1413,1576 2879,1576 3114,1833 " />
            <polygon points="809,1905 817,2069 1002,1905 " />
            <polygon points="3537,1905 3532,2024 3397,1905 " />
            <path
              d="M2132 618l-1330 786 0 315 143 -57 0 128 93 0c0,0 143,-278 250,-321 108,-43 879,0 879,0 0,0 772,-43 880,0 107,43 250,321 250,321l93 0 0 -128 143 57 0 -315 -1330 -786 -36 -7 -35 7zm-486 708l543 -314 565 321 -1108 -7z"
            />
            <path
              d="M924 3027l1243 715 1244 -715c0,0 -336,-14 -450,-14 -115,0 -64,-122 -64,-122l121 -100 -851 0 -850 0 121 100c0,0 50,122 -64,122 -114,0 -450,14 -450,14zm686 -79l1165 0 -613 354 -552 -354z"
            />
          </svg>
          <n-button :bordered="false" @click.prevent="ui.isNavigationOpen = true">
            <template #icon>
              <n-icon size="32">
                <menu-icon />
              </n-icon>
            </template>
          </n-button>
        </n-flex>

        <n-flex align="center">
          <n-popover placement="bottom-end">
            <template #trigger>
              <n-progress style="width: 36px" type="circle" status="success" :percentage="55">
                <span class="text-lg font-semibold break-normal" style="text-align: center">
                  {{ data.user.class?.current || 'N' }}
                </span>
              </n-progress>
            </template>
            <n-list>
              <n-list-item>
                <n-flex inline>
                  <span>Dabartinis lygis:</span>
                  <span class="font-bold">{{ data.user.class?.current || 'N' }}</span>
                </n-flex>
              </n-list-item>
              <n-list-item>
                <n-flex inline>
                  <span>Sekantis lygis:</span>
                  <span class="font-bold">{{ data.user.class?.next || 'N' }}</span>
                </n-flex>
              </n-list-item>
              <n-list-item>
                <n-flex inline>
                  <span>Patirtis:</span>
                  <span class="font-bold">
                    {{ data.user.class?.xp.current || 0 }} /
                    {{ data.user.class?.xp.needed || 0 }}
                  </span>
                </n-flex>
              </n-list-item>
            </n-list>
          </n-popover>
          <a href="#" class="flex items-center" @click.prevent="ui.isUserDrawerOpen = true">
            <n-avatar size="medium" :src="data.user.avatar || '/images/profile.png'" />
          </a>
        </n-flex>
      </n-flex>
    </n-card>
  </div>
  <div class="w-full"></div>
</template>
