# Aroma Verde

Loja artesanal de incensos — [aromaverdeincensos.com.br](https://aromaverdeincensos.com.br) · [@aromaverde](https://www.instagram.com/aromaverde/)

**Board:** [Project #2](https://github.com/users/tjbarbosadev/projects/2)

Specs / tasks / processo ficam **fora deste repo** (workspace local `docs/`). Este repositório é só código, CI e deploy.

## Stack canônica

**v1 (SPA):** Node.js 22 · TypeScript · React 19 · React Router · Zod · React Hook Form · Zustand · Vite · Tailwind CSS v4 · Vitest · Storybook  

**Fase API (depois):** Express · PostgreSQL · Docker  

**Infra:** Caddy (estático, espelho Maria Bonita) · Cloudflare · Verdaccio (lab npm) · `contato@` via Email Routing  

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

Código da app ainda não iniciado (aguardando liberação do gate 4 / task A0). Specs no workspace local.
