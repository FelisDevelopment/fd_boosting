import { isDevMode } from '@/composables/isDevMode'
import { userData } from '@/dummy/data'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface UserData {
  name: string
  avatar?: string
  class: {
    current: string
    next: string
    xp: {
      current: number
      needed: number
    }
  }
}

export interface GroupMember {
  identifier: string
  name: string
  isLeader: string
}
export interface Group {
  isPublic: boolean
  name: string
  inviteCode: string
  members: GroupMember[]
}

export const useData = defineStore('data', () => {
  const user = ref<Partial<UserData>>(isDevMode ? userData : {})
  const group = ref<Group | null>(null)

  return {
    user,
    group
  }
})
