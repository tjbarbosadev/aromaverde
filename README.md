# Aroma Verde

Loja artesanal de incensos — [aromaverdeincensos.com.br](https://aromaverdeincensos.com.br) · [@aromaverde](https://www.instagram.com/aromaverde/)

**Board:** [Project #2](https://github.com/users/tjbarbosadev/projects/2)

Specs / tasks / processo ficam **fora deste repo** (workspace local `docs/`). Este repositório é só código, CI e deploy.

## Stack

> Node · TypeScript · React · React Router · Zod · RHF · Zustand · Vite · Tailwind · Vitest · Storybook.  
> Backend (fase posterior): Express · PostgreSQL · Docker.  
> v1: SPA sem API.

**v1 (SPA):** Node.js 22 · TypeScript · React 19 · React Router · Zod · React Hook Form · Zustand · Vite · Tailwind CSS v4 · Vitest · Storybook

**Fase API (depois):** Express · PostgreSQL · Docker

**Infra:** Caddy (estático, espelho Maria Bonita) · Cloudflare · Verdaccio (lab npm) · `contato@` via Email Routing

## Monorepo

```bash
npm install
npm run dev          # apps/web → http://localhost:5173
npm run storybook    # packages/ui → http://localhost:6006
npm test
npm run lint
```

| Pacote | Path | Papel |
|--------|------|-------|
| `@aromaverde/web` | `apps/web` | SPA da loja |
| `@aromaverde/ui` | `packages/ui` | Design system + Storybook |

## Labels

| Label | Uso |
|-------|-----|
| `track:app` | Trilha A (app / DS) |
| `track:infra` | Trilha I (homelab) |
| `track:backlog` | Fora da v1 |
| `phase:a0` … `phase:a9` | Tasks app |
| `phase:i1` … `phase:i5` | Tasks infra |
| `gate:impl` | Pronto para implementação quando liberado |
| `docs` | Documentação do **código** (README, etc.) — não specs de produto |

## Estado atual

Scaffold A0: monorepo npm workspaces com `apps/web` + `packages/ui` (Storybook).
