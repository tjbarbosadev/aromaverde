# PRD — Aroma Verde

| Campo | Valor |
|-------|-------|
| **Produto** | Aroma Verde — loja artesanal de incensos |
| **Domínio** | `aromaverdeincensos.com.br` (**já comprado** no Registro.br) |
| **E-mail** | `contato@aromaverdeincensos.com.br` — ver [EMAIL.md](./EMAIL.md) |
| **Instagram** | [@aromaverde](https://www.instagram.com/aromaverde/) |
| **Referência visual** | [Earthware · Figma Community](https://www.figma.com/community/file/1552217626105615191/earthware-ceramic-pot-website-ui-kit) |
| **Status** | Gates 1–3 OK · Project/issues criados · gate 4 aguarda ok |
| **Repo** | https://github.com/tjbarbosadev/aromaverde (vazio — código só após gates de spec) |
| **Server** | [SERVER.md](./SERVER.md) · homelab em [../../infra/](../../infra/) |
| **Processo** | Spec-driven com gates — ver §0 |
| **Arquitetura v1 (proposta)** | Só web (SPA), sem API — §4.1 · **aguardar aceite** |

---

## 0. Processo (spec-driven + gates)

Ordem fixa. **Nada de implementação, issues, board ou código no GitHub sem aceite explícito** da fase anterior.

| # | Gate | Artefato | Só avança se… |
|---|------|----------|----------------|
| 1 | **Especificação** | Este PRD (+ EMAIL/SERVER) | Você valida escopo / RF / fora de escopo |
| 2 | **Design e arquitetura** | TECH_SPEC / ADRs / Figma ou Earthware adaptado | Você valida stack, pastas, atomic, “só web” |
| 3 | **Decomposição de tarefas** | Lista de tasks / board | Você valida ordem e granularidade |
| 4 | **Implementação** | Código no repo | Você autoriza começar a fase |
| 5 | **QA** | Checklist + testes | Critérios de aceite batem |
| 6 | **Review** | Review humano (+ opcional CodeRabbit) | Merge / deploy liberado |

Isso é **waterfall por gates** (bom para aprendizado e clareza), não waterfall engessado de 6 meses sem feedback: dentro de cada fase de implementação pode haver fatias pequenas (Home → Shop → …), mas **não se pula gate**.

---

## 1. Visão

### 1.1 Objetivo do produto

Site de marca + vitrine comercial para **Aroma Verde**: incensos artesanais com tom espiritual/acolhedor. Visitante entende a proposta, explora por **intenção** (prosperidade, purificação, acolher…) e conclui compra (ou contato) sem parecer landing SaaS genérica.

### 1.2 Objetivo de aprendizado (este projeto também é laboratório)

| Prática | Como entra no projeto |
|---------|------------------------|
| **React + TypeScript** | App Vite, componentes tipados, hooks |
| **TDD** | Vitest + Testing Library — comportamento de UI e regras de domínio primeiro |
| **SOLID** | Camadas claras (UI ≠ domínio ≠ infra); SRP nos componentes e serviços |
| **Design atômico (pragmático)** | Storybook por átomo/molécula/organismo — ver §5 |
| **Storybook** | Catálogo vivo do design system da marca |
| **Docker / homelab** | Site estático (Caddy) + Verdaccio; e-mail via CF Routing — [SERVER.md](./SERVER.md) · [EMAIL.md](./EMAIL.md) |

### 1.3 Fora de escopo (v1)

- App nativo / React Native  
- ERP, estoque multi-armazém, marketplace  
- Auth social completa (só se checkout exigir conta — fase 2)  
- CMS headless obrigatório na v1 (conteúdo pode ser MD/JSON tipado)  
- Pixel-perfect clone automático do Figma (Earthware é **referência**, não contrato binário)

### 1.4 Personas

| Persona | Necessidade |
|---------|-------------|
| Comprador espiritual / bem-estar | Escolher por intenção, confiar no artesanal, comprar fácil |
| Presenteador | Entender o “presente com significado” rápido |
| Você (dev) | Treinar stack e evoluir o DS sem reescrever o site |

---

## 2. Arquitetura de informação

### 2.1 Páginas (v1)

| Página | Função | Prioridade |
|--------|--------|------------|
| **Home** | Marca + 1 visual dominante + CTA para coleção | P0 |
| **Loja / Coleção** | Grid por intenção ou produto | P0 |
| **Produto (PDP)** | História, ervas, cuidado, preço, CTA | P0 |
| **Sobre** | Quem faz, processo artesanal, axé | P0 |
| **Checkout** | Dados + pagamento (ou link WhatsApp na v0.5) | P0 / P1 |
| **Carrinho** | Resumo antes do checkout | P1 |
| **Rituais / Diário** (opcional) | Conteúdo editorial — reaproveita “Blog/Services” do Earthware | P2 |

**Navegação:** Início · Loja · Sobre · (Carrinho)  
**Idioma:** pt-BR  
**Tom:** acolhedor, ritual, artesanal — sem “features SaaS” nem stats inventados.

### 2.2 Identidade (rascunho — fechar no Figma)

| Token | Direção |
|-------|---------|
| Paleta | Verde sálvia / off-white / terra — herdar clima do Earthware, puxar “verde” da marca |
| Tipografia | Display com personalidade + corpo legível (não Inter/Roboto default) |
| Imagem | Fotos reais do Instagram; fumaça, bastão, altar, mãos |
| Hero | Marca + 1 frase + CTA + imagem full-bleed — sem cards no primeiro viewport |

Layout base: **Earthware** adaptado (cerâmica → incenso; “collections” → intenções).

---

## 3. Requisitos funcionais

| ID | Requisito | Aceite |
|----|-----------|--------|
| RF01 | Home apresenta marca e direciona à loja | CTA visível; hero coerente |
| RF02 | Listagem de produtos | ≥3 produtos mock; filtro por intenção (v1 simples) |
| RF03 | PDP com copy de ritual + preço | Dados tipados; layout usável mobile |
| RF04 | Carrinho local (estado client) | Add/remove/qty persiste na sessão |
| RF05 | Checkout v0.5 | Formulário + envio WhatsApp **ou** payment stub |
| RF06 | Checkout v1 | Pagamento real (definir gateway depois) |
| RF07 | Sobre com narrativa artesanal | Página publicada |
| RF07b | Contato público da marca | `contato@aromaverdeincensos.com.br` recebendo (CF Routing) |
| RF08 | Responsivo desktop + mobile | Breakpoints documentados no Storybook |
| RF09 | SEO básico | title/description por página; OG image |
| RF10 | Acessibilidade base | Contraste, foco, labels, nav teclado |

### Não funcionais

| ID | Requisito |
|----|-----------|
| RNF01 | TypeScript strict |
| RNF02 | Cobertura de testes nos átomos/moléculas críticos e nas regras de carrinho |
| RNF03 | Storybook buildável em CI |
| RNF04 | Deploy reproduzível (build estático e/ou container) |
| RNF05 | Segredos só em env / server — nunca no Git |

---

## 4. Stack proposta

| Camada | Escolha | Motivo |
|--------|---------|--------|
| Runtime | **Node.js 22** | CI, workspaces, scripts |
| UI | **React 19** + Vite + TypeScript | Alinhado Maria Bonita |
| Roteamento | **React Router** | SPA |
| Validação / forms | **Zod** + React Hook Form | Schemas tipados |
| Estado | **Zustand** (carrinho) | Ver TECH_SPEC ADR-003 |
| Estilo | Tailwind v4 + tokens | Design tokens |
| Testes | Vitest + Testing Library | TDD |
| Docs UI | Storybook | Atomic |
| API (fase depois) | **Express** + PostgreSQL | Só com pagamento/pedidos |
| Deploy v1 | `dist/` → Caddy | Espelho Maria Bonita |
| Pacotes | Verdaccio · `@aromaverde/*` | Lab npm |

### 4.1 ADR — API + web ou só web?

**Decisão v1: só web (SPA).** Sem `apps/api`.

| Cenário | Precisa API? |
|---------|----------------|
| Catálogo em JSON/TS tipado no repo | Não |
| Carrinho no client (Zustand/Context) | Não |
| Checkout / lead via WhatsApp | Não |
| `contato@` via Cloudflare Routing | Não |
| Publicar design system no Verdaccio | Não (é npm, não REST) |
| Pagamento online, admin, estoque, pedidos no DB | **Sim — fase depois** |

**Por quê não API agora**

- Duplica superfície (auth CORS, deploy, testes E2E) sem valor de negócio na v1  
- Desvia do foco: React, TDD, Atomic, Storybook, Verdaccio  
- Homelab já fica ocupado com Caddy + Verdaccio  

**Forma boa de evoluir (sem inventar API cedo)**

```
aromaverde/
  apps/web/          ← loja (Vite React) — única app na v1
  packages/ui/       ← átomos/moléculas → publish Verdaccio
  packages/tokens/   ← opcional
```

Ports no front (`CatalogRepo`, `CartStore`) permitem trocar JSON local por `fetch('/api')` depois **sem** reescrever UI — isso já é SOLID (D), sem subir Express agora.

**Quando criar API:** fase 4 do PRD (pagamento real / pedidos persistidos). Aí sim monorepo `apps/api` + Postgres.

---

## 5. Design atômico — decisão

### Compensa?

**Sim, na versão pragmática** — porque o objetivo explícito é evolução (Storybook + DS) e prática de SOLID/SRP.  
**Não** vale atomizar “tudo”: isso quebra o projeto e vira teatro de pastas.

### Nível certo para este projeto

```
atoms/        Button, Text, Heading, Icon, Badge, Input, Price
molecules/    ProductCard, IntentionChip, NavLink, QuantityStepper, CartLine
organisms/    Header, Hero, ProductGrid, ProductSummary, Footer, CartDrawer
templates/    ShopLayout, PdpLayout
pages/        Home, Shop, Product, About, Checkout
```

| Faça | Evite |
|------|--------|
| Átomo com API estável + stories + testes | `SpanGreen`, `DivPadding16` |
| Molécula = composição com comportamento | 1 arquivo por linha de CSS |
| Organismo = seção de página real | Copiar o Earthware frame-a-frame em 80 átomos |
| Tokens (cor, type, space) antes dos átomos | Misturar fetch/API dentro de átomo |

**Regra:** se o componente não tem props reutilizáveis **ou** não aparece em ≥2 lugares / Storybook, ainda não é átomo — fica na página até doer.

### Evolução

1. Tokens + 5–8 átomos  
2. ProductCard + Header (moléculas/organismos)  
3. Páginas montadas só com organismos  
4. Storybook como contrato visual  
5. Só então extrair “design system” se outro site reutilizar

---

## 6. TDD e SOLID (contrato de trabalho)

### TDD

- **Vermelho → verde → refator:** regras de carrinho e validação Zod primeiro.  
- UI: teste comportamento (`getByRole`, user-event), não snapshot de árvore enorme.  
- Storybook: stories como exemplos; testes de interação nos fluxos críticos.

### SOLID (aplicação prática)

| Princípio | No front |
|-----------|----------|
| S | `ProductCard` não busca API; `useCart` não renderiza markup |
| O | Novas intenções via dados/config, não `if` gigante no JSX |
| L | Variantes de `Button` substituíveis sem quebrar callers |
| I | Props mínimas; não “god props” de PDP no card |
| D | UI depende de ports (`CartStore`, `CatalogRepo`), não de `localStorage` cru espalhado |

---

## 7. Fases de entrega

| Fase | Entrega | Infra |
|------|---------|-------|
| **0** | Repo + Vite + Vitest + Storybook + ESLint | Local only |
| **1** | Tokens + átomos + Home (Earthware adaptado) | Preview local |
| **2** | Shop + PDP + carrinho + testes | Preview |
| **3** | About + checkout WhatsApp | Domínio + Caddy estático |
| **4** | Pagamento / API se necessário | Docker Compose + reverse_proxy |
| **5** | Conteúdo real + SEO + CI deploy | Actions → homelab |

---

## 8. Métricas de sucesso

- Site público em `aromaverdeincensos.com.br` com HTTPS  
- Compra ou lead (WhatsApp) funcionando de ponta a ponta  
- Storybook publicado (local ou subdomínio `storybook.aromaverde…` / path interno)  
- Pelo menos 1 fluxo coberto por TDD (carrinho) e átomos documentados  
- Você consegue explicar a árvore atômica e as camadas SOLID em entrevista

---

## 9. Riscos

| Risco | Mitigação |
|-------|-----------|
| Over-engineering atômico | Limite da §5; review de pastas a cada fase |
| Docker cedo demais | v1 estático no Caddy; Docker só com API/DB |
| Figma ≠ código | Earthware como mood + estrutura, não como gerador |
| Domínio ainda não registrado | Registrar + apontar Cloudflare como nos outros sites |

---

## 10. Próximos documentos

| Doc | Função |
|-----|--------|
| [SERVER.md](./SERVER.md) | Configuração homelab / Docker / Caddy |
| [TECH_SPEC.md](./TECH_SPEC.md) | Gate 2 — aceito |
| [DECOMPOSICAO.md](./DECOMPOSICAO.md) | Gate 3 — tasks — **aguardar aceite** |
| Repo `aromaverde` | Código só após gate 3 + ok de implementação |
