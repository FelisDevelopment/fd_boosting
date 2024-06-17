import { useNotification, type NotificationType, type NotificationOptions } from 'naive-ui'
import { defineStore } from 'pinia'

export const useMessage = defineStore('message', () => {
  const notification = useNotification()

  const show = (type: NotificationType, data: NotificationOptions) => {
    notification[type](data)
  }

  return {
    show
  }
})
