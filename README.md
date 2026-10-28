# Software UP — aplicação e integração

Interface em HTML, CSS e JavaScript, com backend Node.js, MySQL em produção e SQLite para desenvolvimento local.

**Escopo aprovado da primeira versão: sem IA.** Diagnósticos, indicadores, comparações e orientações usam cálculos e regras fixas. Roteiros, ofertas, procedimentos e planos usam modelos editáveis. Não há serviço, chave ou custo de geração de IA nesta versão.

## Executar localmente

Requer Node.js 22.16 ou superior (recomendado: Node.js 24).

```sh
npm ci
npm run account -- aluno@example.com front
npm start
```

Abra http://localhost:3000. Entre com o e-mail cadastrado. Sem SMTP configurado, o código aparece no terminal exclusivamente em desenvolvimento. Não há código fixo nem entrada demonstrativa quando o app é servido pelo backend.

`npm run account -- aluno@example.com essencial` adiciona o Kit Essencial. `kit` adiciona o Kit Completo. Cada comando concede somente o produto indicado; `front` é independente. Esse comando é uma ferramenta administrativa local, enquanto o webhook de compras não está implementado.

Os dados locais ficam em `data/up.sqlite`, excluído do Git. Não exponha o servidor de desenvolvimento na internet.

## Configuração de produção

Copie as variáveis de `.env.example` para as configurações privadas da hospedagem. Não publique senhas no GitHub.

- `NODE_ENV=production`, `APP_ORIGIN=https://seu-dominio` e porta definida pela hospedagem.
- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`: banco MySQL. O usuário deve poder criar a tabela inicial `up_accounts`.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `MAIL_FROM`: serviço de e-mail transacional. Porta 465 usa TLS direto; 587 usa STARTTLS.
- Comando de instalação: `npm ci`; início: `npm start`. Não há build.
- A hospedagem precisa fornecer HTTPS. Cookies seguros são obrigatórios em produção.

O servidor recusa iniciar em produção sem MySQL ou SMTP. Disponibiliza apenas a interface e seus arquivos públicos; banco, código do servidor e configurações não são servidos.

## Implementado nesta etapa

- Login por código aleatório, hash em memória, validade de dez minutos, cinco tentativas e limites por e-mail/conexão.
- Resposta de solicitação igual para contas existentes e inexistentes, sem cadastro público automático.
- Cookie httpOnly/SameSite, sessão de oito horas e logout.
- Dados separados por conta, acesso checado no servidor e proteção de origem das alterações.
- Sincronização das telas de diagnóstico, Raio-X e ferramentas dos Kits, com aviso de alterações pendentes e falhas de gravação.
- Diagnósticos existentes preservados e resultados recalculados no servidor.
- Modo estático demonstrativo preservado ao abrir `index.html` sem o servidor.
- Testes de cálculo, telas, autenticação, isolamento, autorização e proteção de arquivos.

## Pendências antes do lançamento

Esta é a primeira etapa de integração, ainda não uma versão aprovada para produção.

- Kiwify: validar o contrato de assinatura vigente e implementar recebimento autenticado, deduplicação persistente, histórico por pedido e revogações. Nenhum pagamento libera acesso automaticamente nesta etapa.
- Sessões, códigos e limites estão em memória: usar uma única instância neste estágio. Reinícios encerram sessões e códigos; múltiplas instâncias exigem armazenamento compartilhado.
- A API usa um documento por aluno e substituição por campo. Edições simultâneas do mesmo campo podem prevalecer pela última gravação; migrar para operações por recurso e controle de versão.
- Reforçar a validação de cada formulário no servidor e migrar cálculos monetários para representação decimal, com testes por centavo.
- Validar MySQL, entrega real de e-mails e navegador na hospedagem. A verificação automatizada local não comprova esses serviços externos.
- Administração autenticada, termos versionados, exportação/exclusão de conta e auditoria ainda pendentes.
- Configurar e testar backups, restauração, carga e monitoramento.
- Aprovar conteúdos do Pr. Rafael/Bring e canais oficiais de suporte.

## Verificação

```sh
npm test
```

## GitHub

O projeto inclui `.gitignore` para dependências, dados locais e segredos, além de `package-lock.json` para instalação reproduzível. Repositório público: [HospedaUpScale/software-up](https://github.com/HospedaUpScale/software-up). A branch principal é `main`.

## Interface e prévia visual

Acesse `http://localhost:3000/app/preview.html` para percorrer as telas com dados ilustrativos, sem autenticação. Essa prévia não consulta a API nem grava alterações no banco. Os registros e os rascunhos são preservados neste navegador, em chaves próprias da demonstração. Use somente dados fictícios. O login normal continua em `/`.

A camada `app/theme.css` aplica os tokens oficiais azul `#0031E8` e laranja `#FF8D00`. Os gráficos em `app/charts.js` usam SVG responsivo, animação ao entrar na tela, legendas, valores acessíveis e suporte a movimento reduzido. O painel, Diagnóstico, Raio-X, histórico e prévia administrativa compartilham essa linguagem visual.

## Formulários e navegação

O layout aprovado é aplicado por `app/redesign.css`. O menu azul escuro pode ser recolhido no desktop e aberto como painel no celular; a preferência é local.

`app/forms.js` cuida da validação junto aos campos, rascunhos, rótulos acessíveis e mensagens de estado. Lançamentos, contas, ofertas e procedimentos têm criação e edição; o perfil permite atualizar o nome, e a API autenticada mantém o e-mail de acesso protegido. O Raio-X e o simulador de quitação mostram prévias enquanto os valores são preenchidos.

Os testes de fluxos cobrem criação e edição sem duplicação, pagamento de contas, plano, check-ins e persistência da prévia. A suíte também verifica a alteração autenticada de nome. Isso não substitui as validações de produção listadas acima.

## Regras e modelos da primeira versão

O Plano de 90 Dias oferece modelos iniciais para Finanças, Vendas, Processos e Pessoas. O aluno pode visualizar o modelo e usá-lo para preencher somente os campos vazios. Os valores existentes e os textos digitados são preservados; o plano é salvo somente após revisão e confirmação pelo botão de salvar.

Os modelos são bases editáveis para revisão. Os textos oficiais da Bring e do Pr. Rafael ainda dependem de fornecimento/aprovação; a ausência de IA não transforma os modelos atuais em conteúdo oficialmente aprovado.
