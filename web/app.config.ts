export default defineAppConfig({
  ui: {
    primary: "sky",
    gray: "cool",
    tooltip: {
      default: {
        openDelay: 500,
      },
    },
    notifications: {
      // Show toasts at the top right of the screen
      wrapper: "absolute flex flex-col justify-end z-[55]",
      position: "top-0 bottom-auto",
    },
  },
});
