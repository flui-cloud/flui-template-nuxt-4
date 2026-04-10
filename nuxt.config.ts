// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-01',
  devtools: { enabled: false },
  nitro: {
    preset: 'node-server',
  },
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME || 'Flui Demo Nuxt',
      appVersion: process.env.APP_VERSION || '1.0.0',
    },
  },
});
