// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  ssr: false,
  devtools: { enabled: true },

  experimental: {
    payloadExtraction: false,
  },

  nitro: {
    output: {
      dir: "dist",
      serverDir: ".output/server",
      publicDir: "../ui",
    },
  },

  router: {
    options: {
      hashMode: true,
    },
  },

  //   experimental: {
  //     appManifest: false,
  //   },

  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/ui" : "/",
    buildAssetsDir: "/assets/",
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    server_name: "filadelfia",
    // Keys within public are also exposed client-side
  },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/fonts", "@vueuse/nuxt"],
  ui: {
    icons: ["heroicons", "simple-icons"],
    safelistColors: ["primary", "red", "orange", "green"],
  },
  colorMode: {
    disableTransition: true,
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
