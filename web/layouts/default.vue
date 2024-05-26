<template>
  <div
    class="bg-red-500 min-w-[100wv] min-h-screen max-h-screen max-w-[100wv] overflow-hidden flex items-center justify-center"
  >
    <div class="relative w-[1080px]">
      <img src="@/assets/images/frame.svg" class="top-0 left-0 w-[1080px]" />
      <div
        class="absolute top-0 left-0 min-w-[93.4%] h-[90.9%] bg-background rounded-[1.275rem] ml-[3.3%] mt-[3.3%] p-2 overflow-y-auto overflow-x-hidden"
      >
        <UColorModeButton />

        <button @click="toast.add({ title: 'Hello world!' })">Testing</button>
        <slot />
        <UNotifications />

        <UButton label="Open" @click="isOpen = true" />

        <USlideover v-model="isOpen">
          <div class="p-4 flex-1">
            <Placeholder class="h-full" />
          </div>
        </USlideover>
      </div>
    </div>
    <!-- <ul style="background-color: white">
      <li>
        <NuxtLink to="/">Index</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile">Profile</NuxtLink>
      </li>
    </ul> -->
  </div>
</template>
<script setup lang="ts">
const toast = useToast();

const isOpen = ref(false);
</script>
