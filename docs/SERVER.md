# Aroma Verde — configuração no server (homelab)

Espelha o padrão **Maria Bonita** (SPA Vite → Caddy → Cloudflare) e adiciona **Verdaccio** (registry npm privado) como primeiro uso prático de Docker — mesmo sem API da loja.

> **PRD:** [PRD.md](./PRD.md)  
> **Referência clone:** Maria Bonita — `mariabonitasalao.com.br` → `/var/www/mariabonita` · [deploy.yml](file:///home/thiago/Projects/MariaBonita/maria-bonita/.github/workflows/deploy.yml) · [04-caddy](https://github.com/tjbarbosadev/AIme/tree/main/infra/fases/04-caddy.md) · [08-actions](https://github.com/tjbarbosadev/AIme/tree/main/infra/fases/08-github-actions-deploy.md)  
> **Homelab:** [PASSO_A_PASSO](https://github.com/tjbarbosadev/AIme/tree/main/infra/PASSO_A_PASSO_COMPLETO.md) · [07-docker](https://github.com/tjbarbosadev/AIme/tree/main/infra/fases/07-docker-compose.md)  
> **Padrão pedagógico:** [CONVENCOES-DOC.md](https://github.com/tjbarbosadev/AIme/tree/main/infra/CONVENCOES-DOC.md)

---

## Na vida real

| Peça | Paralelo | Neste projeto |
|------|----------|--------------|
| Site `dist/` | Prateleira da loja | Igual Maria Bonita |
| Caddy | Recepcionista + lacre HTTPS | Mesmo Caddyfile pattern |
| Cloudflare | Lista telefônica + portaria | Laranja + Full (strict) |
| Actions + Tailscale | Linha de montagem até a banca | Mesmo workflow do `maria-bonita` |
| **Verdaccio** | **Depósito de peças (npm)** | Docker — pratica publicar `@aromaverde/*` |
| **E-mail `contato@`** | Caixa postal / forward | **Não** é Docker de mail — ver [EMAIL.md](./EMAIL.md) |
| API + Postgres | Cozinha + caderno (fase futura) | Só se checkout sair do WhatsApp |

```
Internet → Cloudflare (laranja)
        → WAN :443 → Caddy
             ├── aromaverdeincensos.com.br → /var/www/aromaverde   (estático)
             └── npm.thiagojb.com.br       → Verdaccio :4873       (Docker)
                    (ou só Tailscale — ver §6)
```

---

## Status do domínio

| Item | Valor |
|------|-------|
| Domínio | **`aromaverdeincensos.com.br`** — **já comprado no Registro.br** |
| Próximo | Apontar NS → Cloudflare (se ainda não) · A/`www` · bloco Caddy · pasta web |

---

## 1. O que espelhar do Maria Bonita

| Item | Maria Bonita | Aroma Verde |
|------|--------------|-------------|
| Domínio | `mariabonitasalao.com.br` + `www` | `aromaverdeincensos.com.br` + `www` |
| Web root | `/var/www/mariabonita` | `/var/www/aromaverde` |
| Stack front | Vite React → `dist/` | Idem |
| Caddy | `root` + `encode gzip` + `try_files` SPA | **Idêntico** |
| Dono pasta | `osadmin:caddy` + `g+s` | Idem |
| CI | test → build → Tailscale → rsync | Idem (trocar path) |
| Secrets | `TAILSCALE_AUTHKEY` · `DEPLOY_SSH_KEY` | Mesmos nomes no repo novo |
| Docker para o site? | Não | **Não** (v1) |
| Docker à parte | — | **Verdaccio** (lab npm) |

---

## 2. DNS (Cloudflare)

Mesmo fluxo da [fase 03](https://github.com/tjbarbosadev/AIme/tree/main/infra/fases/03-dns-registro-br.md) / Maria Bonita:

| Nome | Tipo | Conteúdo | Proxy |
|------|------|----------|-------|
| `@` | A | IP origem (DDNS) | Laranja |
| `www` | CNAME | `aromaverdeincensos.com.br` | Laranja |

1. No Registro.br: NS do domínio → nameservers Cloudflare.  
2. Incluir o host no script DDNS (`CF_RECORD_NAMES`) se usar lista explícita.  
3. Primeira emissão TLS: se necessário, DNS **cinza** até o Caddy pegar o cert; depois **laranja** + Full (strict) — como nos outros.

Hosts locais (dev, espelho do cheatsheet):

```text
192.168.68.109  aromaverdeincensos.com.br www.aromaverdeincensos.com.br
```

---

## 3. Site estático — setup (igual Maria Bonita)

### 3.1 Pasta

```bash
ssh osadmin@homelab
sudo mkdir -p /var/www/aromaverde
sudo chown -R osadmin:caddy /var/www/aromaverde
sudo chmod -R u=rwX,g=rX,o=rX /var/www/aromaverde
sudo chmod g+s /var/www/aromaverde
```

### 3.2 Caddyfile (copiar o bloco da Maria Bonita)

Junto dos outros hosts em `/etc/caddy/Caddyfile`:

```caddy
mariabonitasalao.com.br, www.mariabonitasalao.com.br {
	root * /var/www/mariabonita
	encode gzip
	try_files {path} /index.html
	file_server
}

aromaverdeincensos.com.br, www.aromaverdeincensos.com.br {
	root * /var/www/aromaverde
	encode gzip
	try_files {path} /index.html
	file_server
}
```

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
sudo journalctl -u caddy -n 50 --no-pager
```

| Diretiva | O que faz | Por quê |
|----------|-----------|---------|
| `try_files … /index.html` | Fallback SPA | React Router — igual Maria Bonita |
| `encode gzip` | Comprime | Menos bytes |
| TLS implícito | ACME | Sem Certbot |

### 3.3 Deploy manual

```bash
# no repo aromaverde (quando existir)
npm ci && npm run test && npm run build
rsync -avz --delete dist/ osadmin@homelab:/var/www/aromaverde/
```

Validar no 4G: `https://aromaverdeincensos.com.br`.

### 3.4 GitHub Actions (clone do maria-bonita)

No repo `aromaverde`, workflow equivalente — só muda o destino:

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: npm
      - run: npm ci
      - run: npm run test
      - run: npm run build
      - uses: tailscale/github-action@v4
        with:
          authkey: ${{ secrets.TAILSCALE_AUTHKEY }}
      - name: Deploy to homelab
        env:
          SSH_PRIVATE_KEY: ${{ secrets.DEPLOY_SSH_KEY }}
        run: |
          mkdir -p ~/.ssh
          echo "$SSH_PRIVATE_KEY" > ~/.ssh/deploy_key
          chmod 600 ~/.ssh/deploy_key
          ssh-keyscan -H homelab >> ~/.ssh/known_hosts 2>/dev/null || true
          rsync -avz --delete \
            -e "ssh -i ~/.ssh/deploy_key" \
            dist/ osadmin@homelab:/var/www/aromaverde/
```

Secrets (copiar do `maria-bonita` / chacara):

```bash
gh secret set TAILSCALE_AUTHKEY -R tjbarbosadev/aromaverde
gh secret set DEPLOY_SSH_KEY -R tjbarbosadev/aromaverde < ~/.ssh/homelab-gha-deploy
```

---

## 4. Por que Docker agora? → Verdaccio

O site v1 **continua estático**. Docker entra para o **Verdaccio**: registry npm privado no homelab, para praticar:

- publicar pacotes (`@aromaverde/ui`, `@aromaverde/tokens`, …)  
- consumir no app (e depois em outros projetos, se quiser)  
- fluxo `npm login` / `npm publish` / versionamento sem npmjs público  

Isso justifica a Fase 7 **sem** precisar de checkout/API da loja.

---

## 5. Verdaccio — Docker Compose

### 5.1 Na vida real

Verdaccio = **depósito de peças sobressalentes** da oficina. O `npmjs.com` é a loja grande; o seu registry é o estoque interno. Containers Docker = a caixa do depósito; volume em `/data` = inventário que sobrevive se reformar o escritório.

### 5.2 Pastas no server

```bash
sudo mkdir -p /data/compose/verdaccio /data/docker/volumes/verdaccio/{storage,conf}
sudo chown -R osadmin:osadmin /data/compose/verdaccio /data/docker/volumes/verdaccio
```

### 5.3 `docker-compose.yml`

Arquivo: `/data/compose/verdaccio/docker-compose.yml`

```yaml
services:
  verdaccio:
    image: verdaccio/verdaccio:5
    container_name: verdaccio
    restart: unless-stopped
    ports:
      - "127.0.0.1:4873:4873"   # só localhost — Caddy (ou Tailscale) na frente
    volumes:
      - /data/docker/volumes/verdaccio/storage:/verdaccio/storage
      - /data/docker/volumes/verdaccio/conf:/verdaccio/conf
    environment:
      - VERDACCIO_PORT=4873
```

| Linha | O que faz | Por quê |
|-------|-----------|---------|
| `127.0.0.1:4873:4873` | Bind só no host | Não expõe registry cru na LAN/WAN |
| volume `storage` | Pacotes publicados | Persistência no SSD `/data` |
| volume `conf` | `config.yaml` + htpasswd | Auth e uplinks |

### 5.4 Config mínima (`conf/config.yaml`)

Criar `/data/docker/volumes/verdaccio/conf/config.yaml` (ajuste depois):

```yaml
storage: /verdaccio/storage
plugins: /verdaccio/plugins

web:
  title: Homelab npm
  enable: true

auth:
  htpasswd:
    file: /verdaccio/conf/htpasswd
    max_users: 5

uplinks:
  npmjs:
    url: https://registry.npmjs.org/

packages:
  '@aromaverde/*':
    access: $authenticated
    publish: $authenticated
    unpublish: $authenticated
  '@homelab/*':
    access: $authenticated
    publish: $authenticated
    unpublish: $authenticated
  '**':
    access: $all
    publish: $authenticated
    proxy: npmjs

middlewares:
  audit:
    enabled: true

logs:
  - { type: stdout, format: pretty, level: http }
```

| Bloco | O que faz | Por quê |
|-------|-----------|---------|
| `@aromaverde/*` | Scope privado | Pacotes da marca / DS |
| `proxy: npmjs` no `**` | Fallback público | `npm i react` continua funcionando via Verdaccio |
| `publish: $authenticated` | Só quem logou publica | Evita publish anônimo |

Usuário (no container, após `up`):

```bash
cd /data/compose/verdaccio
docker compose up -d
docker compose exec verdaccio htpasswd -bBc /verdaccio/conf/htpasswd thiago 'SENHA_FORTE'
# nas próximas vezes use -bB sem o "c" (c recria o arquivo)
```

### 5.5 Subir

```bash
cd /data/compose/verdaccio
docker compose up -d
docker compose ps
curl -sS http://127.0.0.1:4873/-/ping
```

---

## 6. Expor o Verdaccio — duas opções

### Opção A (recomendada no início): só Tailscale

Sem DNS público. No notebook (MagicDNS):

```bash
# se publicou a porta só em 127.0.0.1 no server, use SSH tunnel:
ssh -N -L 4873:127.0.0.1:4873 osadmin@homelab
# registry: http://localhost:4873
```

Ou publique `4873` só na interface Tailscale (avançado). Mais seguro para lab.

### Opção B: subdomínio + Caddy (prática HTTPS)

DNS: `npm.thiagojb.com.br` (A, preferir **cinza** na 1ª cert; depois laranja se quiser).

```caddy
npm.thiagojb.com.br {
	reverse_proxy 127.0.0.1:4873
}
```

| Escolha | Prós | Contras |
|---------|------|---------|
| Só Tailscale | Registry não fica na internet | Precisa VPN/tunnel para publish |
| Subdomínio HTTPS | Fluxo “de verdade” | Exige auth forte; não deixe anônimo |

**Não** deixe publish aberto sem senha na WAN.

---

## 7. Usar no projeto Aroma Verde

No app (ou num pacote `@aromaverde/ui` separado):

```bash
# login (URL conforme opção A ou B)
npm login --registry http://localhost:4873
# ou: https://npm.thiagojb.com.br

# publish de um pacote scoped
cd packages/ui
npm publish --registry http://localhost:4873
```

`.npmrc` no monorepo / app (exemplo):

```ini
@aromaverde:registry=http://localhost:4873
# registry=http://localhost:4873   # opcional: tudo via Verdaccio (proxy npmjs)
```

Fluxo de prática sugerido:

1. Extrair `tokens` + `Button` → `@aromaverde/tokens` / `@aromaverde/ui`  
2. Publicar no Verdaccio  
3. Consumir no app da loja via `npm i @aromaverde/ui`  
4. Storybook continua no app ou no pacote UI  

Outros projetos (Maria Bonita, etc.) **não precisam** usar esses pacotes — o valor é o lab.

---

## 8. Fase futura — API da loja (opcional)

Só se checkout deixar WhatsApp. Mesmo padrão [07](https://github.com/tjbarbosadev/AIme/tree/main/infra/fases/07-docker-compose.md): Compose em `/data/compose/aromaverde/`, Postgres em `/data/docker/volumes/…`, Caddy `handle /api*`. **Independente** do Verdaccio.

---

## 9. Checklist rápido

**Site (Maria Bonita clone)**  
- [ ] NS Cloudflare no domínio já comprado  
- [ ] A + `www` + DDNS  
- [ ] `/var/www/aromaverde` com `osadmin:caddy`  
- [ ] Bloco Caddy + reload  
- [ ] Build + rsync (depois Actions)  
- [ ] HTTPS ok no 4G  

**Verdaccio (Docker lab)**  
- [ ] Docker instalado (Fase 7)  
- [ ] Compose + volumes em `/data`  
- [ ] htpasswd criado  
- [ ] Acesso via Tailscale **ou** `npm.thiagojb.com.br`  
- [ ] `npm login` + publish `@aromaverde/…` de teste  

---

## 10. Problemas comuns

| Sintoma | Causa | Ação |
|---------|-------|------|
| 404 em rotas SPA | Sem `try_files` | Igual Maria Bonita — conferir Caddy |
| Permission denied no rsync | Dono da pasta | `chown osadmin:caddy` + `g+s` |
| Verdaccio 502 | Caddy → porta errada | `curl 127.0.0.1:4873`; conferir bind |
| `npm publish` 403 | Sem login / htpasswd | `npm login` + user no container |
| Pacotes sumiram após recreate | Volume fora de `/data` | Conferir bind mount `storage` |
