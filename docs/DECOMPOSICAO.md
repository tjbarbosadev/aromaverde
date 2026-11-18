# Decomposição de tarefas — Aroma Verde

| Campo | Valor |
|-------|-------|
| **Gate** | 3 — Decomposição |
| **Status** | Aceito — docs individuais + Project/issues |
| **Specs** | [PRD.md](./PRD.md) · [TECH_SPEC.md](./TECH_SPEC.md) · [SERVER.md](./SERVER.md) · [EMAIL.md](./EMAIL.md) · [PROCESS.md](./PROCESS.md) |
| **Tasks** | [tasks/](./tasks/) (um arquivo por ID) |

Implementação (gate 4) **só** com ok explícito (ex.: “pode A0”).

---

## Princípios

1. **Storybook antes** dos átomos (A0 → A3).  
2. Domain TDD (A2) antes da UI de loja.  
3. Infra (I*) **paralela** à trilha app.  
4. Verdaccio (I5) depois de haver átomos (A3).  
5. Express só no backlog **F1**.

```
Trilha A                         Trilha I (paralela)
A0 Scaffold + Storybook          I1 DNS Cloudflare
A1 Tokens                        I2 Caddy + webroot
A2 Domain TDD                    I3 contato@
A3 Átomos                        I4 Deploy dist (após A5)
A4 Moléculas                     I5 Verdaccio (após A3)
A5 Home
A6 Shop + PDP
A7 Carrinho + Checkout WA
A8 Sobre + SEO/a11y
A9 CI Actions (após I4)
```

---

## Índice — Trilha A

| ID | Doc | Issue |
|----|-----|-------|
| A0 | [tasks/A0.md](./tasks/A0.md) | Scaffold monorepo + Storybook |
| A1 | [tasks/A1.md](./tasks/A1.md) | Tokens de design |
| A2 | [tasks/A2.md](./tasks/A2.md) | Domain TDD (carrinho + WhatsApp) |
| A3 | [tasks/A3.md](./tasks/A3.md) | Átomos (`@aromaverde/ui`) |
| A4 | [tasks/A4.md](./tasks/A4.md) | Moléculas |
| A5 | [tasks/A5.md](./tasks/A5.md) | Home (Earthware) |
| A6 | [tasks/A6.md](./tasks/A6.md) | Catálogo, Shop, PDP |
| A7 | [tasks/A7.md](./tasks/A7.md) | Carrinho + Checkout WhatsApp |
| A8 | [tasks/A8.md](./tasks/A8.md) | Sobre + SEO + a11y |
| A9 | [tasks/A9.md](./tasks/A9.md) | CI deploy (Actions) |

## Índice — Trilha I

| ID | Doc | Issue |
|----|-----|-------|
| I1 | [tasks/I1.md](./tasks/I1.md) | DNS Cloudflare |
| I2 | [tasks/I2.md](./tasks/I2.md) | Caddy + webroot |
| I3 | [tasks/I3.md](./tasks/I3.md) | E-mail `contato@` |
| I4 | [tasks/I4.md](./tasks/I4.md) | Primeiro deploy `dist/` |
| I5 | [tasks/I5.md](./tasks/I5.md) | Verdaccio (lab npm) |

## Backlog (fora da v1)

| ID | Doc |
|----|-----|
| F1 | [tasks/F1.md](./tasks/F1.md) Express API |
| F2 | [tasks/F2.md](./tasks/F2.md) PostgreSQL |
| F3 | [tasks/F3.md](./tasks/F3.md) Pagamento real |
| F4 | [tasks/F4.md](./tasks/F4.md) Rituais/Diário |
| F5 | [tasks/F5.md](./tasks/F5.md) Storybook hospedado |

---

## Labels no GitHub

Ver [README.md](../README.md#labels) e [docs/LABELS.md](./LABELS.md).
