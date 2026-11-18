# Processo — Aroma Verde

Waterfall por **gates**. Nada de implementação sem aceite da fase anterior.

| # | Gate | Artefato | Avança se |
|---|------|----------|-----------|
| 1 | Especificação | [PRD.md](./PRD.md), [EMAIL.md](./EMAIL.md), [SERVER.md](./SERVER.md) | Escopo OK |
| 2 | Design e arquitetura | [TECH_SPEC.md](./TECH_SPEC.md) | Stack/ADRs OK |
| 3 | Decomposição | [DECOMPOSICAO.md](./DECOMPOSICAO.md) + [tasks/](./tasks/) + Project/issues | Lista OK |
| 4 | Implementação | Código + PRs por task | Ok explícito (ex.: “pode A0”) |
| 5 | QA | Checklist RF/RNF + testes | Aceite da fatia |
| 6 | Review | Review humano (+ CodeRabbit opcional) | Merge/deploy |

### Ordem de implementação (resumo)

1. **A0** Scaffold + **Storybook**  
2. **A1** Tokens · **A2** Domain TDD (paralelos após A0)  
3. **A3** Átomos → **A4** Moléculas → **A5** Home  
4. Paralelo: **I1** DNS → **I2** Caddy → **I3** e-mail  
5. **A6** Shop/PDP → **A7** Carrinho/WA → **A8** Sobre/SEO  
6. **I4** deploy → **A9** CI · **I5** Verdaccio (lab)

Cada issue aponta para `docs/tasks/<ID>.md`.
