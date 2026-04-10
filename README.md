# Flui Template — Nuxt 4

A minimal demo application built with **Nuxt 4** (Nitro server) and ready to deploy on [Flui](https://flui.cloud).

This template includes:

- ⚡ Nuxt 4 with Vue 3 and Nitro
- 🩺 `/api/health` endpoint
- 📦 In-memory item store with full CRUD (`/api/items`)
- 📖 OpenAPI 3.1 spec served at `/api/openapi`
- 📚 Swagger UI at `/docs`
- 🐳 Multi-stage Dockerfile (`#flui-managed`)

## Local development

```bash
npm install
npm run dev
```

App runs on http://localhost:3000

## Build with Docker

```bash
docker build -t flui-demo-nuxt .
docker run -p 3000:3000 flui-demo-nuxt
```

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `APP_NAME` | `Flui Demo Nuxt` | App name shown in UI/health |
| `APP_VERSION` | `1.0.0` | App version |
| `LOG_LEVEL` | `info` | Logging verbosity |
| `NITRO_PORT` | `3000` | HTTP server port |

## Deploy with Flui

1. Click **Use this template** on GitHub
2. Connect the new repository to Flui
3. Flui detects the `#flui-managed` Dockerfile and configures everything
4. Click **Deploy**

## License

MIT
