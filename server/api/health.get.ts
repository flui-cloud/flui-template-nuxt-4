const startTime = Date.now();

export default defineEventHandler(() => {
  return {
    status: 'ok',
    appName: process.env.APP_NAME ?? 'Flui Demo Nuxt',
    version: process.env.APP_VERSION ?? '1.0.0',
    uptime: Math.floor((Date.now() - startTime) / 1000),
    timestamp: new Date().toISOString(),
  };
});
