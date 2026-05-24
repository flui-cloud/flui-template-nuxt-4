# Flui Template — Nuxt 4

A minimal demo application built with **Nuxt 4** (Nitro server) and ready to deploy on [Flui](https://flui.cloud).

Includes:

- Nuxt 4 with Vue 3 and Nitro
- `/api/health` endpoint
- In-memory item store with full CRUD on `/api/items`
- OpenAPI 3.1 spec at `/api/openapi`
- Swagger UI at `/docs`
- Multi-stage `#flui-managed` Dockerfile

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

This repo ships with a [`flui.yaml`](./flui.yaml) manifest describing the build strategy, port, healthcheck and resource profile.

From the CLI, with `flui` installed and authenticated against your cluster:

```bash
flui deploy ./flui.yaml
```

The CLI reads the manifest, triggers a build via GitHub Actions and rolls out the workload.

From the UI:

1. Click **Use this template** on GitHub.
2. Connect the new repository to Flui.
3. Click **Deploy**.

Built for [Flui](https://github.com/flui-cloud/flui-core) — see the main repo for cluster setup and CLI installation.

## License

MIT
