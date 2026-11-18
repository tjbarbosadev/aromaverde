# Aroma Verde

Loja artesanal de incensos — [aromaverdeincensos.com.br](https://aromaverdeincensos.com.br) · [@aromaverde](https://www.instagram.com/aromaverde/)

## Stack canônica

**v1 (SPA):** Node.js 22 · TypeScript · React 19 · React Router · Zod · React Hook Form · Zustand · Vite · Tailwind CSS v4 · Vitest · Storybook  

**Fase API (depois):** Express · PostgreSQL · Docker  

**Infra:** Caddy (estático, espelho Maria Bonita) · Cloudflare · Verdaccio (lab npm) · `contato@` via Email Routing  

## Processo (spec-driven)

| Gate | Doc |
|------|-----|
| 1 Especificação | [docs/PRD.md](docs/PRD.md) |
| 2 Design / arquitetura | [docs/TECH_SPEC.md](docs/TECH_SPEC.md) |
| 3 Decomposição | [docs/DECOMPOSICAO.md](docs/DECOMPOSICAO.md) + [docs/tasks/](docs/tasks/) |
| 4+ Implementação | Issues no [Project #2](https://github.com/users/tjbarbosadev/projects/2) — começar por **A0** só com ok explícito |

Infra: [docs/SERVER.md](docs/SERVER.md) · E-mail: [docs/EMAIL.md](docs/EMAIL.md) · Processo: [docs/PROCESS.md](docs/PROCESS.md)

## Labels

| Label | Uso |
|-------|-----|
| `track:app` | Trilha A (app / DS) |
| `track:infra` | Trilha I (homelab) |
| `track:backlog` | Fora da v1 |
| `phase:a0` … `phase:a9` | Tasks app |
| `phase:i1` … `phase:i5` | Tasks infra |
| `gate:impl` | Pronto para implementação quando liberado |
| `docs` | Documentação |

## Estado atual

Repositório de **documentação e tracking**. Código da app ainda não iniciado (aguardando liberação do gate 4 / task A0).
