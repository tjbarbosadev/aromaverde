# Aroma Verde — e-mail `contato@aromaverdeincensos.com.br`

Caixa / endereço de contato da marca, **gratuito e configurável**, alinhado ao DNS Cloudflare do homelab.

> **PRD:** [PRD.md](./PRD.md) · **Server:** [SERVER.md](./SERVER.md)  
> Domínio: **já comprado** no Registro.br · DNS previsto na Cloudflare

---

## Na vida real

Receber e-mail ≠ hospedar um correio dos Correios em casa.  
**Receber** = caixa postal com redirecionamento.  
**Enviar** com boa entrega = carimbo dos Correios grandes (reputação de IP). Em IP residencial, a maioria dos ISPs **bloqueia a porta 25** e o IP cai em blacklist — por isso self-host full de e-mail costuma frustrar.

---

## Recomendação (v1): Cloudflare Email Routing + Gmail

**Grátis**, configurável, encaixa no stack que você já usa (Cloudflare).

| Peça | Função |
|------|--------|
| Cloudflare Email Routing | Cria `contato@aromaverdeincensos.com.br` e **encaminha** |
| Seu Gmail (ou outro) | Caixa onde você lê / responde |
| Gmail “Enviar como” | Respostas saem como `contato@…` (SMTP do Google ou relay) |

```
Cliente → MX Cloudflare → Email Routing → thiago@gmail.com
Você responde no Gmail “De: contato@aromaverdeincensos.com.br”
```

### O que você ganha

- Endereço profissional no site / Instagram  
- Sem Docker de mail, sem porta 25, sem reputação de IP residencial  
- Catch-all opcional (`*@aromaverdeincensos.com.br`)  
- Vários aliases: `contato@`, `pedidos@`, `ola@` → mesmo inbox  

### Limitações

- **Não é mailbox IMAP própria** no servidor — é forward  
- Responder “como contato@” exige configurar *Send mail as* no Gmail (ou outro provedor)  
- Não serve como SMTP genérico para app (formulário) sem outro serviço — ver §3  

### Passos (resumo)

1. Domínio na Cloudflare (NS do Registro.br).  
2. **Email** → **Email Routing** → Enable.  
3. Destination address = seu Gmail (verificar o link que a CF manda).  
4. Criar endereço `contato@aromaverdeincensos.com.br` → forward para o Gmail.  
5. CF cria/ajusta registros **MX** + **TXT** (SPF) — não conflitar com outro provedor de mail.  
6. No Gmail: **Configurações → Contas → Enviar e-mail como** → adicionar `contato@…`  
   - Opção simples: SMTP do Google (pode mostrar “via gmail.com” em alguns clientes).  
   - Opção mais limpa depois: SMTP de um relay (Resend/Brevo) no “Send as”.

Docs oficiais: [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/).

---

## Alternativa grátis com “caixa de verdade”: Zoho Mail Free

| Prós | Contras |
|------|---------|
| Webmail / IMAP / app | Plano free limitado (1 domínio, poucos usuários — conferir limites atuais) |
| Parece “empresa” | Mais setup MX/SPF/DKIM no Cloudflare |
| Envio nativo do domínio | UI e suporte variáveis; free pode mudar |

Bom se quiser **inbox separado do Gmail** sem pagar Google Workspace.

---

## Open source / self-hosted (homelab)

Sim, existem — e são configuráveis. Para **residência + IP dinâmico**, use com expectativa realista.

### Stacks comuns

| Projeto | O que é | Nota |
|---------|---------|------|
| [**Mailcow**](https://mailcow.github.io/mailcow-dockerized-docs/) | Suite Docker (SOGo, Postfix, Rspamd…) | Completo; pesado; ótimo lab |
| [**Mailu**](https://mailu.io/) | Suite Docker mais enxuta | Similar ao Mailcow |
| [**docker-mailserver**](https://docker-mailserver.github.io/docker-mailserver/) | Só MTA/MDA, sem UI rica | Flexível; você adiciona Roundcube |
| [**Stalwart**](https://stalw.art/) | Servidor moderno (JMAP/IMAP/SMTP) | Bom projeto; ops ainda é sua |
| Roundcube / SnappyMail | Webmail | Precisa de backend IMAP atrás |

### Por que **não** recomendo como v1 da Aroma Verde

| Problema | Efeito |
|----------|--------|
| Porta **25** bloqueada pelo ISP | Não envia (e às vezes não recebe bem) |
| IP residencial / dinâmico | Cai em spam; DDNS ≠ reputação de mail |
| PTR / rDNS | Quase impossível pedir ao ISP residencial |
| Manutenção | Atualização, spam, abuse, disco, backups |
| Conflito com Email Routing | Um domínio = um destino MX (ou split complexo) |

**Self-host faz sentido** como laboratório (aprender Postfix/Dovecot) ou se um dia tiver **VPS com IP limpo** + relay. Para `contato@` da loja no ar amanhã → Cloudflare (ou Zoho).

### Padrão híbrido (se insistir em open source depois)

```
Receber:  MX → Cloudflare Routing  (ou só Stalwart em VPS)
Enviar:   app/site → Resend / Brevo / SES (API)
Lab:      Mailcow/Stalwart só na Tailscale (sem MX público)
```

---

## Formulário do site (contato / checkout WhatsApp)

O endereço `contato@` no rodapé **não** resolve sozinho o “enviar e-mail pelo form”.

| Abordagem | Custo | Nota |
|-----------|-------|------|
| Form → **WhatsApp** (v0.5 do PRD) | Grátis | Mais simples para artesanal BR |
| Form → API **Resend** / **Brevo** free tier | Grátis até cota | SMTP/API; SPF/DKIM no DNS |
| Form → `mailto:` | Grátis | Ruim UX mobile |
| Form → self-host SMTP | — | Evitar na v1 |

Fluxo bom: **CF Routing para ler** + **Resend/Brevo para o form enviar** para `contato@` (que cai no Gmail).

---

## Comparativo rápido

| Solução | Grátis | Caixa própria | Configurável | Serve Aroma Verde v1? |
|---------|--------|---------------|--------------|------------------------|
| **Cloudflare Email Routing** | Sim | Forward | Alta (aliases) | **Sim — preferida** |
| Zoho Mail Free | Sim* | Sim | Média | Sim, se quiser webmail |
| Google Workspace | Pago | Sim | Alta | Overkill agora |
| Mailcow / Mailu / Stalwart | SW grátis | Sim | Alta | Lab / VPS depois |
| Só Registro.br “e-mail incluso” | Varia | Varia | Baixa | Evitar vendor lock fraco |

\*Confirmar limites do plano free no momento da criação.

---

## Decisão sugerida para o PRD

1. **Agora:** Cloudflare Email Routing → `contato@` → Gmail (+ Send as).  
2. **Site:** form/WhatsApp; se precisar SMTP de form, Resend/Brevo free.  
3. **Docker do homelab:** priorizar **Verdaccio**; mail server open source só como experimento isolado (sem MX de produção) ou em VPS no futuro.  
4. **Não** misturar MX de Mailcow + CF Routing no mesmo domínio sem plano claro.

---

## Checklist Cloudflare (quando DNS estiver na CF)

- [ ] Zona `aromaverdeincensos.com.br` ativa  
- [ ] Email Routing enabled  
- [ ] Destination (Gmail) verificado  
- [ ] Address `contato@…` criado  
- [ ] MX/SPF da CF sem conflito com outro mail  
- [ ] Teste: enviar de outro provedor → chega no Gmail  
- [ ] Gmail “Enviar como” testado  
- [ ] Rodapé / Instagram / site usam `contato@aromaverdeincensos.com.br`  
