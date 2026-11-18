# TECH_SPEC — Aroma Verde

| Campo | Valor |
|-------|-------|
| **Gate** | 2 — Design e arquitetura |
| **Status** | **Aceito** |
| **PRD** | [PRD.md](./PRD.md) (gate 1 aceito) |
| **Infra** | [SERVER.md](./SERVER.md) · [EMAIL.md](./EMAIL.md) |
| **Repo** | https://github.com/tjbarbosadev/aromaverde (ainda vazio) |
| **Referência visual** | Earthware (Figma Community) — adaptar, não clonar |

Nada de código, issues ou board até o gate 3 (decomposição) + ok explícito de implementação.

---

## 0. Stack canônica (obrigatório deixar explícito)

Stack de engenharia do projeto — o que estudamos, documentamos e usamos:

| Camada | Tecnologia | Na v1? | Papel |
|--------|------------|--------|-------|
| **Runtime** | **Node.js 22** | Sim | Tooling, scripts, workspaces, CI |
| **UI** | **React 19** | Sim | Interface da loja |
| **Linguagem** | **TypeScript** (strict) | Sim | Tipagem ponta a ponta |
| **Bundler** | **Vite** | Sim | Dev server + build estático |
| **Roteamento** | **React Router** | Sim | Rotas SPA (`/loja`, `/produto/:slug`, …) |
| **Validação** | **Zod** | Sim | Schemas de produto, form, checkout |
| **Forms** | **React Hook Form** + resolvers Zod | Sim | Checkout / contato |
| **Estado** | **Zustand** | Sim | Carrinho (adapter do port `CartStore`) |
| **Estilo** | **Tailwind CSS v4** + CSS variables | Sim | Tokens + utility |
| **Testes** | **Vitest** + **Testing Library** | Sim | TDD (domain + UI) |
| **Docs UI** | **Storybook** | Sim | Design atômico |
| **API HTTP** | **Express** (+ TypeScript) | **Não na v1** | Reservado à fase API (pedidos/pagamento) |
| **DB (fase API)** | PostgreSQL (via Docker `/data`) | Não na v1 | Com Express depois |
| **Registry** | **Verdaccio** (Docker) | Lab paralelo | Pacotes `@aromaverde/*` |
| **Deploy web** | Caddy → `dist/` | Sim | Espelho Maria Bonita |

### Frase de referência (README / entrevistas)

> **Aroma Verde:** Node.js · TypeScript · React · React Router · Zod · React Hook Form · Zustand · Vite · Tailwind · Vitest · Storybook.  
> **Backend (fase posterior):** Express · PostgreSQL · Docker.  
> **v1:** SPA estática sem API; Express entra quando houver checkout/pagamento persistido.

### Express — por que está na stack se a v1 não tem API?

- É a **escolha oficial de backend** deste projeto (não Fastify/Nest “por enquanto”).  
- Ports (`CatalogRepo`, `CheckoutGateway`) já preveem `fetch` → **Express `/api`**.  
- Scaffold `apps/api` **só** no gate de implementação da fase API — não criar pasta vazia agora.

---

## 1. Visão técnica

SPA React estática que:

1. Apresenta a marca e o catálogo de incensos (dados tipados no repo).  
2. Mantém carrinho no client.  
3. Converte via WhatsApp (checkout v0.5).  
4. Expõe design system via Storybook e, depois, pacotes `@aromaverde/*` no Verdaccio.  
5. Publica `dist/` no Caddy — mesmo padrão Maria Bonita.

**Não há API HTTP na v1.** Ports no front permitem plugar API depois.

```
Browser
  └─ apps/web (React Router)
        ├─ UI (atoms → pages)     ← packages/ui (workspace; publish depois)
        ├─ domain (cart, catalog types + regras)
        └─ infra (localStorage, whatsapp link, json catalog)
              ↓ build
         dist/ → Caddy /var/www/aromaverde
```

---

## 2. ADRs (decisões)

### ADR-001 — Monorepo npm workspaces (não pnpm/turborepo na v1)

| Escolha | Monorepo: `apps/web` + `packages/ui` (+ `packages/tokens` opcional) |
| Alternativa | Repo único flat (tudo em `src/`) · Turborepo/Nx |
| Motivo | Praticar pacotes + Verdaccio sem ferramenta extra; workspaces nativos do npm bastam |
| Consequência | Um `package-lock.json` na raiz; CI builda web (+ storybook do ui ou do web) |

**Quando extrair publish:** após átomos estáveis (fase 1–2). Até lá, `packages/ui` pode ser só workspace local.

### ADR-002 — Sem API na v1

Ver PRD §4.1. Catálogo = módulos TS/JSON. Carrinho = client. Contato = Cloudflare Routing.

### ADR-003 — Estado do carrinho: Zustand

| Escolha | **Zustand** |
| Alternativa | React Context + useReducer |
| Motivo | Menos boilerplate; fácil mockar em testes; store = implementação do port `CartStore`; alinha a “domínio fora da UI” |
| Consequência | Uma dep a mais; Context só para tema/i18n se surgir |

### ADR-004 — Estilo: Tailwind v4 + CSS variables (tokens)

| Escolha | Igual Maria Bonita (Tailwind v4) + tokens em `:root` / `@theme` |
| Alternativa | CSS Modules puro · styled-components |
| Motivo | Velocidade + tokens explícitos para Storybook/atomic |
| Consequência | Átomos usam classes/tokens; não hardcodar hex no JSX |

### ADR-005 — Roteamento: React Router (data-less v1)

Rotas declarativas. SEO = `react-helmet-async` (ou equivalente) por página. SSR fora de escopo v1.

### ADR-006 — Checkout v0.5: WhatsApp deep link

Formulário (nome, itens, observação) → monta URL `wa.me/<numero>?text=...` tipada/testada. Sem gateway até fase 4 do PRD.

### ADR-007 — Testes: Vitest + Testing Library (+ MSW só se houver fetch depois)

TDD obrigatório em: regras de carrinho, montagem WhatsApp, validação Zod, átomos/moléculas críticos. Sem E2E Playwright na v1 (opcional depois).

### ADR-008 — Node 22 + npm (espelho Maria Bonita CI)

Alinha Actions futuros (`node-version: '22'`).

---

## 3. Estrutura de pastas (alvo)

```
aromaverde/
├── package.json                 # workspaces: apps/*, packages/*
├── package-lock.json
├── .nvmrc                       # 22
├── README.md
├── docs/                        # cópia ou link das specs (após gate 3/4)
│   ├── PRD.md
│   ├── TECH_SPEC.md
│   ├── SERVER.md
│   └── EMAIL.md
├── apps/
│   └── web/
│       ├── package.json
│       ├── index.html
│       ├── vite.config.ts
│       ├── vitest.config.ts
│       ├── .storybook/          # ou storybook só em packages/ui — ver §7
│       ├── public/
│       └── src/
│           ├── main.tsx
│           ├── app/
│           │   ├── App.tsx
│           │   ├── routes.tsx
│           │   └── providers.tsx
│           ├── pages/           # Home, Shop, Product, About, Checkout, Cart
│           ├── templates/       # ShopLayout, PdpLayout
│           ├── features/        # opcional: cart/, catalog/ (hooks de aplicação)
│           ├── domain/          # tipos + regras puras (testáveis sem React)
│           │   ├── catalog/
│           │   ├── cart/
│           │   └── checkout/
│           ├── application/     # ports + use-cases finos
│           │   ├── ports/
│           │   │   ├── CatalogRepo.ts
│           │   │   ├── CartStore.ts
│           │   │   └── CheckoutGateway.ts
│           │   └── ...
│           ├── infra/           # adapters
│           │   ├── catalog/localCatalogRepo.ts
│           │   ├── cart/zustandCartStore.ts
│           │   └── checkout/whatsappCheckoutGateway.ts
│           ├── data/            # conteúdo mock tipado (produtos, site, sobre)
│           └── styles/
│               └── tokens.css
└── packages/
    ├── ui/                      # atoms + molecules (+ organisms reutilizáveis)
    │   ├── package.json         # name: @aromaverde/ui
    │   ├── src/
    │   │   ├── atoms/
    │   │   ├── molecules/
    │   │   ├── organisms/       # só o que for mesmo compartilhado
    │   │   └── index.ts
    │   └── ...
    └── tokens/                  # opcional — ou tokens só no web no início
        └── package.json         # name: @aromaverde/tokens
```

### Camadas (SOLID)

| Camada | Pode depender de | Não pode |
|--------|------------------|----------|
| `pages` / `templates` | ui, features, application | `infra` direto (preferir hooks) |
| `domain` | nada de React/DOM | localStorage, fetch, JSX |
| `application/ports` | domain types | implementações concretas |
| `infra` | domain + ports | ser importado por atoms |
| `packages/ui` | React, tokens | domain de negócio da loja (preço formatado ok; regra de carrinho não) |

---

## 4. Modelo de domínio (v1)

### 4.1 Catálogo

```ts
// conceitual — nomes finais na implementação
type IntentionId = 'acolher' | 'purificar' | 'prosperidade' | 'conectar' // extensível

type Product = {
  id: string
  slug: string
  name: string
  shortDescription: string
  story: string           // copy ritual / PDP
  herbs: string[]
  careNotes: string
  intentionIds: IntentionId[]
  priceInCents: number
  currency: 'BRL'
  images: { src: string; alt: string }[]
  available: boolean
}

type Intention = {
  id: IntentionId
  label: string
  description: string
}
```

**Catálogo mínimo:** ≥3 produtos mock (RF02). Fonte: `apps/web/src/data/catalog/`.

### 4.2 Carrinho

```ts
type CartLine = { productId: string; quantity: number }
type Cart = { lines: CartLine[] }

// regras puras (domain) — TDD primeiro
addItem(cart, productId, qty?)
removeItem(cart, productId)
setQuantity(cart, productId, qty)  // qty < 1 ⇒ remove
subtotalCents(cart, products)
```

Persistência: `sessionStorage` (RF04 “sessão”) via adapter — não no domain.

### 4.3 Checkout WhatsApp

```ts
type CheckoutDraft = {
  customerName: string
  note?: string
  lines: CartLine[]
}

// Gateway port
toWhatsAppUrl(draft, products, config: { phoneE164: string }): string
```

Validação: Zod no form (nome obrigatório, etc.).

### 4.4 Site / conteúdo

```ts
type SiteConfig = {
  brandName: string
  tagline: string
  contactEmail: string      // contato@aromaverdeincensos.com.br
  whatsappE164: string      // definir no aceite / data
  instagramUrl: string
  nav: { label: string; href: string }[]
  seoDefaults: { titleTemplate: string; description: string }
}
```

---

## 5. Rotas

| Path | Página | Notas |
|------|--------|-------|
| `/` | Home | Hero full-bleed; CTA → `/loja` |
| `/loja` | Shop | Grid + filtro intenção (query `?intencao=` opcional) |
| `/produto/:slug` | Product (PDP) | 404 amigável se slug inválido |
| `/sobre` | About | Narrativa artesanal |
| `/carrinho` | Cart | Ou drawer + esta rota |
| `/checkout` | Checkout | Form → WhatsApp |
| `*` | NotFound | |

Nav: Início · Loja · Sobre · ícone carrinho (qty badge).

---

## 6. Design system (atomic pragmático)

### 6.1 Tokens (antes dos átomos)

| Grupo | Exemplos |
|-------|----------|
| Color | `--color-sage`, `--color-earth`, `--color-cream`, `--color-ink`, `--color-smoke` |
| Type | display + body (+ maybe accent); **evitar** Inter/Roboto/Arial default |
| Space | escala 4/8 (ex. 4, 8, 12, 16, 24, 32, 48, 64) |
| Radius / shadow | poucos níveis; sem glow “IA default” |
| Breakpoints | documentar no Storybook (RF08) — ex. `sm/md/lg` Tailwind |

Paleta final: fechar na adaptação Earthware (gate visual — pode ser paralelo ao aceite desta TECH_SPEC).

### 6.2 Inventário inicial `@aromaverde/ui`

| Nível | Componentes v1 |
|-------|----------------|
| atoms | `Button`, `Text`, `Heading`, `Price`, `Badge`, `Input`, `Icon` (wrapper) |
| molecules | `ProductCard`, `IntentionChip`, `NavLink`, `QuantityStepper`, `CartLineItem` |
| organisms | `Header`, `Footer`, `Hero`, `ProductGrid`, `CartDrawer` (ou só no app se não reutilizar) |

Organisms muito específicos de página podem ficar em `apps/web` até doer a duplicação.

### 6.3 Storybook

- Stories por átomo/molécula com estados (default, hover, disabled, long text).  
- Build `build-storybook` em CI (RNF03).  
- Hospedagem: local na v1; opcional `/var/www/aromaverde-storybook` depois ([SERVER.md](./SERVER.md)).

---

## 7. Stack detalhada (pacotes)

Alinhada à **§0 Stack canônica**. Pacotes npm principais:

| Item | Pacote / nota |
|------|----------------|
| Runtime | Node.js **22** (`.nvmrc`) |
| UI | `react`, `react-dom` ^19 |
| Router | `react-router` / `react-router-dom` (v7 se estável no scaffold) |
| Validação | `zod` |
| Forms | `react-hook-form`, `@hookform/resolvers` |
| Estado | `zustand` |
| Bundler | `vite` + `@vitejs/plugin-react` |
| CSS | `tailwindcss` v4 + `@tailwindcss/vite` |
| Head/SEO | `react-helmet-async` |
| Test | `vitest`, `@testing-library/react`, `@testing-library/user-event`, `jsdom` |
| Storybook | Storybook 8.x (Vite builder) |
| Lint/format | ESLint + Prettier (espelhar Maria Bonita; Husky opcional) |
| Icons | `lucide-react` |
| Utils | `clsx`, `tailwind-merge` (padrão Maria Bonita) |
| **API (fase depois)** | **`express`**, `cors`, `helmet`, tipos `@types/express` · Zod nos handlers |
| **DB (fase depois)** | PostgreSQL + client a definir (Prisma ou `pg`) na TECH_SPEC da API |

Scripts raiz previstos: `dev`, `build`, `test`, `lint`, `storybook` — todos via **Node/npm**.

---

## 8. Estratégia de testes (TDD)

| Camada | O que testar | Como |
|--------|--------------|------|
| domain/cart | add/remove/qty/subtotal | Vitest puro (sem React) — **primeiro** |
| domain/checkout | URL WhatsApp encoding | Vitest puro |
| Zod schemas | inputs inválidos | Vitest |
| atoms/molecules | a11y roles, variantes | Testing Library |
| pages (smoke) | render + CTA principal | RTL — poucos |
| Snapshot | evitar árvore grande | só se justificar |

Cobertura: não obsessão de %; **obrigatório** domínio do carrinho + 1 átomo (Button) + ProductCard.

---

## 9. Deploy e ambientes

| Ambiente | Como |
|----------|------|
| Local | `npm run dev` (web) · Storybook paralelo |
| Preview | `npm run build && npm run preview` |
| Produção | `dist/` → `osadmin@homelab:/var/www/aromaverde/` · Caddy SPA (SERVER) |
| CI (após gate impl.) | Igual Maria Bonita: test → build → Tailscale → rsync |

Variáveis públicas (Vite `import.meta.env`):

| Var | Uso |
|-----|-----|
| `VITE_WHATSAPP_E164` | Número checkout (ou fixo em `data/site` na v0.5) |
| `VITE_SITE_URL` | `https://aromaverdeincensos.com.br` (OG) |

Sem secrets no front. E-mail não precisa de env — Routing na CF.

---

## 10. Verdaccio (lab npm)

Fora do caminho crítico do site:

1. Site funciona 100% com workspace local (`"@aromaverde/ui": "*"`).  
2. Depois: publish `@aromaverde/ui` no Verdaccio ([SERVER.md](./SERVER.md) §5–7).  
3. App pode continuar no workspace; publish valida o fluxo de pacote.

Não bloqueia Home/Shop.

---

## 11. Qualidade e a11y

- Foco visível, contraste (sage/cream/ink).  
- `Button`/`Input` com labels; preço com texto acessível.  
- Nav e drawer usáveis por teclado.  
- Imagens com `alt` real (não “imagem1”).  
- Idioma `pt-BR` no `html`.

---

## 12. Riscos técnicos

| Risco | Mitigação |
|-------|-----------|
| Monorepo cedo demais | Começar com `packages/ui` mínimo; tokens podem nascer no web |
| Zustand “god store” | Só carrinho (+ UI shell se preciso); catálogo read-only via repo |
| Earthware → código | Tokens + seções; não copiar 11 telas de uma vez |
| WhatsApp URL longa | Truncar observação; testar encoding |

---

## 13. Critérios de aceite desta TECH_SPEC

- [x] Concordo com **só web** + monorepo workspaces  
- [x] Concordo com **Zustand** para carrinho  
- [x] Concordo com inventário atomic §6.2  
- [x] Concordo com checkout **WhatsApp** na v0.5  
- [x] Stack canônica explícita: **Node · Express (fase API) · React · React Router · Zod** (+ Vite, Zustand, RHF, Tailwind, Vitest, Storybook)  
- [ ] Número WhatsApp / `SiteConfig` — placeholder até informar  
- [ ] Storybook: default **`packages/ui`** (ajuste se quiser no web)  
- [ ] Pronto para gate 3 — **decomposição de tarefas** (só doc; board só com ok)

---

## 14. Próximo gate

→ Ver [DECOMPOSICAO.md](./DECOMPOSICAO.md) e [tasks/](./tasks/).
