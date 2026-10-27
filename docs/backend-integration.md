# Integração de produção — Software UP

Este documento delimita os contratos necessários para substituir o modo demonstrativo do frontend. **Não há backend implementado neste pacote.** Os estados locais e a seleção de plano no navegador são ferramentas de preview, e não controles de segurança.

## Infraestrutura alvo

- Hostinger VPS (Ubuntu, Nginx, TLS e Docker se desejado).
- API no servidor (stack a definir), PostgreSQL ou MySQL, armazenamento com backup e monitoramento.
- Envio transacional de e-mails por serviço externo; API de IA apenas pelo servidor.
- Ambiente de homologação separado da produção.

## Endpoints esperados (proposta de integração)

| Método | Endpoint sugerido | Contrato |
|---|---|---|
| POST | `/api/auth/request-code` | E-mail normalizado, mesmo retorno para e-mail não localizado; limites por IP/e-mail, hash, expiração. |
| POST | `/api/auth/verify-code` | Código 6 dígitos, expira em 10 min, inválido após 5 erros; cookie seguro httpOnly. |
| POST | `/api/auth/logout` | Encerra sessão. |
| GET | `/api/me` | Dados mínimos de usuário e permissões ativas por produto. |
| GET/POST | `/api/diagnostics` | Salvar versões imutáveis, histórico por aluno e cálculo no servidor. |
| GET/POST | `/api/finance/snapshots` | Um snapshot por mês/usuário, indicadores calculados com precisão decimal no servidor. |
| GET/POST | `/api/kit/transactions` | Lançamentos, categorias e escopo casa/empresa. |
| GET/POST | `/api/kit/bills` | Contas a pagar e status. |
| GET/POST | `/api/kit/offers` | Oferta editável por aluno, apenas para Kit Completo. |
| GET/POST | `/api/kit/plan-90` | Plano, check-ins e lembretes. |
| GET/POST | `/api/kit/procedures` | Procedimentos exportáveis. |
| POST | `/api/ai/generate` | Envia apenas dados mínimos; recebe JSON validado, salva versão/custo/uso. |
| POST | `/webhooks/kiwify` | Autenticação de webhook e atualização de permissões. |
| GET/POST | `/api/admin/*` | Administração com perfil `admin` ou `suporte`, auditoria e privacidade. |

## Regras obrigatórias do PDF

- Validar assinatura da Kiwify no corpo bruto usando HMAC-SHA1 e comparação em tempo constante, conforme documentação e especificação; recusar assinatura inválida com 401. Testar no ambiente real antes de mapear `order_id`, cliente e produto.
- Deduplicar `order_id + webhook_event_type`; não liberar acesso por Pix criado ou boleto criado.
- Reembolso e chargeback revogam **somente** o produto correspondente; dados permanecem registrados segundo a política definida.
- Permissões independentes: `front` libera Diagnóstico + Raio-X; `essencial` ferramentas 1 e 2 do Kit; `kit` todas as cinco.
- Desautorizar no servidor toda chamada de recurso sem compra ativa, independentemente de tela/botão oculto.
- Custos e números calculados com aritmética decimal e testados centavo a centavo; IA produz texto, nunca decisões de permissão ou cálculos.
- Não enviar identificação de contato à IA; prompts versionados e aprovados; saída JSON validada, cache e fallback de texto fixo.
- Termo e política aprovados com aceite versionado, exportação e exclusão de dados conforme LGPD.
- O material do Pr. Rafael, da Bring e as perguntas exatas ainda precisam de validação de conteúdo.

## Critérios mínimos de liberação

1. Compra real por cartão e Pix aprovada com liberação automática.
2. Reembolso e chargeback revogando somente o acesso apropriado.
3. Verificação de OTP, limites, sessão, expiração e tentativas.
4. Teste de isolamento entre alunos, inclusive alteração manual de IDs em requisições.
5. Testes do cálculo, incluindo margem negativa, dívida em atraso, valores percentuais e divisão por zero.
6. Teste de carga progressivo (50 → 100 → 250 → 500 usuários simultâneos) na Hostinger.
7. Backup restaurado em homologação e revisão dos termos LGPD.

## Atualização de implementação — 27/10/2026

A primeira etapa do backend está em `server/index.js`, com login, sessões e persistência por aluno. A infraestrutura escolhida para preparar o código é hospedagem Business/Cloud com Node.js e MySQL; VPS permanece opcional. Consulte o README para configuração e limitações atuais.

Os endpoints implementados são `POST /api/auth/request-code`, `POST /api/auth/verify-code`, `POST /api/auth/logout`, `GET /api/me` e `GET/PUT /api/state`. O último é um adaptador temporário para a interface existente; os endpoints por recurso da tabela acima permanecem como evolução planejada.

A afirmação inicial de ausência de backend descreve o pacote original. O webhook Kiwify, IA, administração, LGPD e os critérios de liberação acima continuam pendentes. A indicação HMAC-SHA1 no documento original deve ser confirmada com a documentação vigente e um payload real antes da implementação; não assumir compatibilidade entre contratos antigos e novos da Kiwify.
