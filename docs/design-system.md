# Software UP — Design System

Design system do Software UP — Universo do Propósito. Versão 1.0.

O Software UP é o aplicativo web do Universo do Propósito: o comprador entra com o e-mail da compra e usa o Diagnóstico UP, o Raio-X financeiro e, se comprou, o Kit UP. As aulas continuam na Kiwify. Este sistema serve para isso e nada além: sem cursos, certificados, progresso em porcentagem ou gamificação.

## Princípios

- **Uma coisa por tela.** Cada tela tem um objetivo e, no máximo, uma ação principal (`primary`). O aluno é empresário, não é da área de tecnologia.
- **Celular primeiro.** Desenhe em 360–390px e depois amplie. Toda tela precisa funcionar com o polegar.
- **Regras claras, resultados verificáveis.** Na primeira versão, números e prioridades vêm dos cálculos do sistema. As orientações usam textos fixos e os modelos são editáveis pelo aluno. Não há geração por IA nem rótulo de conteúdo gerado.
- **Clareza antes de enfeite.** A interface é macia e organizada: cantos bem arredondados, botões em pílula, números grandes e muito respiro. Gradiente, só o vertical e suave dos cards de brilho (branco → cinza). Nada de foto de fundo, neon, gradiente colorido ou emoji. Espaço vazio fica vazio.
- **Não invente.** Use só os indicadores, campos, estados e textos definidos na especificação. Na dúvida, deixe de fora.

## Voz e conteúdo

- Fale com "você", em português do Brasil, frases curtas e na ordem direta. Tom direto e acolhedor, sem jargão contábil e sem tom de vendas.
- Use maiúscula só no início da frase e em nomes próprios: "Ver resultado", "Raio-X financeiro", "Kit UP de Implementação".
- Botões começam com verbo e dizem o que acontece: "Enviar código", "Ver Raio-X", "Conhecer o Kit". Evite "OK", "Clique aqui" e "Saiba mais".
- Sem ponto de exclamação, nem na saudação: "Olá, João".
- Valores: `R$ 45.082` em resumos, `R$ 45.081,97` em campos e tabelas, `6,1%`, `0,8 mês`. Datas: `12/10/2026` e, para meses, `Outubro de 2026`.
- Mensagens de erro dizem o que fazer: "Digite um e-mail completo, como joao@empresa.com.br", e não "E-mail inválido".
- Use literalmente os textos fixos da especificação, por exemplo:
  - Login: "Use o mesmo e-mail da sua compra na Kiwify" e "Se este e-mail tiver uma compra, você vai receber um código em instantes".
  - Kit bloqueado: "Disponível no Kit UP de Implementação".
  - Rodapé do Raio-X: "Esta ferramenta organiza informações para a sua decisão. Não é recomendação financeira e não substitui o seu contador."
  - Rodapé do Diagnóstico: "Este diagnóstico é uma ferramenta de reflexão e organização. Não substitui orientação profissional contábil, jurídica ou de saúde."

## Cor

As quatro cores oficiais são `brand-cool-gray` (#F5F7FA), `brand-black` (#0D0D0D), `brand-blue` (#0031E8) e `brand-orange` (#FF8D00). Nos componentes, use sempre os tokens semânticos, nunca os valores diretos.

- **Fundo e superfícies.** Use `bg-canvas` em toda página e `surface` (branco) em cards, campos e menus. Para um destaque neutro, use o gradiente `surface-glow-start` → `surface-glow-end` (`up-card--glow`, `up-tile`, `up-promo`). Áreas secundárias dentro de um card usam `surface-subtle`. Trilhos, skeletons e campos desativados usam `surface-muted`. A sidebar (aluno e admin) usa `surface-inverse`, com a logo completa no topo para o aluno.
- **Texto.** `text-primary` para conteúdo, `text-secondary` para descrições e `text-muted` para metadados, ajuda de campo e placeholder. Sobre preto, use `text-inverse`, `text-inverse-secondary` e `text-inverse-muted`.
- **Azul é a marca em ação.** `primary` serve para botão principal, link, foco, checkbox marcado, aba ativa e item selecionado, com `primary-subtle` como fundo de seleção. Como superfície grande, o azul aparece uma vez por tela: no card de destaque (`surface-hero`), com texto `text-on-hero` e as formas da marca em `hero-shape`. Nos gráficos, `chart-primary` é a série principal. Não use azul em títulos de texto.
- **Preto dá peso.** `brand-black` é o texto, o botão escuro (`up-btn--dark`), o número das ações e a segunda série dos gráficos (`chart-ink`).
- **Laranja é destaque.** `accent` e `chart-highlight` marcam o que pede atenção e o que é premium: a menor nota da Roda e do Radar (com os selos "Cuidado" e "Gargalo"), o mês em que faltou dinheiro, a série de saídas, o Kit (ícone de coroa) e o botão de compra no banner do plano e na página do Kit. Nunca como fundo grande. Texto sobre laranja é sempre `on-accent` (preto). Laranja nunca vira texto sobre fundo claro; se precisar, use `accent-text`.
- **Semáforo.** Use `success`, `warning` e `danger` para os ícones, `*-subtle` para os fundos e `*-text` para o texto. O amarelo de preenchimento é `warning-fill`, que é amarelo e não laranja, para não se confundir com a marca. Nunca use laranja para status.
- **Proporção.** Uma tela típica é cinza frio e branca, com um bloco azul de destaque, preto no texto e nos botões escuros, e laranja só onde há algo a corrigir.

## Tipografia

As fontes da marca são **Neue Haas Grotesk Display** para títulos e **Helvetica Neue** para a interface. Enquanto não houver licença de uso na web, o sistema usa substitutas livres próximas: **Inter Display** (`--font-display`) e **Inter** (`--font-text`), com arquivos em `fonts/` (licença em `licenses/OFL-Inter.txt`). Quando a licença sair, troque as famílias em `type.families` colocando a fonte original em primeiro lugar. Nenhum componente muda.

- **Saudação do Início.** Sobretítulo "Bem-vindo ao seu painel" e título de 52px no desktop (32px no celular), com o nome do aluno em `primary` (`up-greet`). É o único texto em azul fora de links. `display` (52px, peso 400, em dois tons) continua disponível para outras telas de abertura.
- **Títulos.** `title-1` e `title-2` têm peso 500. Títulos de card (`title-4`) e de seção (`title-3`) têm peso 600, para segurar a hierarquia. Em título de página, use `title-1` no desktop e `title-2` no celular.
- **Números** (`figure-xl` no card de destaque, `figure-lg` em indicadores, `figure-md` e `figure-sm`) usam `--font-display`, peso 500, com `font-variant-numeric: tabular-nums` (classe `up-num`), para colunas de valores se alinharem.
- **Texto** usa `--font-text`: `body` (16px) é o padrão e também o tamanho de todo valor digitado, o que evita zoom no iOS. Use `body-sm` em descrições e tabelas, `label` em rótulos e botões, e `caption` em ajuda e rodapés.
- `overline` vai sempre em maiúsculas e é usado com parcimônia, só no desktop.
- Não use itálico, sublinhado decorativo ou mais de três tamanhos de texto no mesmo card.

## Espaçamento, grid e composição

- A escala é de 4px: `space-1` (4) até `space-16` (64). Não use valores fora dela.
- **Grid.** Celular: 4 colunas, margem e gutter de `space-4`. Tablet (`bp-md`): 8 colunas, margem de `space-6` e gutter de `space-5`. Desktop (`bp-lg`): sidebar de `sidebar-width` mais 12 colunas, margem de `space-8`, gutter de `space-5` e conteúdo até `content-max`. Use `up-grid` com `up-col-lg-*`.
- **Alinhamento.** Toda borda esquerda de título, card e campo cai numa coluna. Dentro do card, o padding é o mesmo em todos os lados: `space-5` no celular e no tablet e `space-6` no desktop.
- **Ritmo vertical.** Use `space-2` entre rótulo e campo, `space-5` entre campos, `space-4` entre cards no celular e `space-5` a `space-6` entre linhas de cards no desktop.
- **Larguras de leitura.** Formulários e telas de uma coisa só usam no máximo `form-max` (560). Textos da IA usam no máximo `reading-max` (680).
- **Alturas padronizadas.** Botões e campos têm `control-lg` (48) no celular e `control-md` (40) no desktop. `control-sm` (32) fica só para tabelas e filtros do admin. Todo alvo de toque tem pelo menos `touch-min` (44).
- O grid organiza a tela, mas nunca aparece: nada de linhas decorativas ou fundos quadriculados.

## Raios, bordas e sombras

- **Tudo é macio.** Botões, selos, controle segmentado, ícones em círculo e avatar usam `radius-full`. Campos, células do código, itens de navegação e opções em cartão usam `radius-md` (12). Cards e alertas usam `radius-lg` (20). O card de destaque, modais e drawers usam `radius-xl` (28).
- Cards são planos: `border-1` em `border-subtle`, sem sombra projetada. Os cards de brilho e os ícones em círculo ganham `shadow-glow`, um brilho branco interno no topo. Contorno de campo usa `border-control`, que tem contraste mínimo de 3:1.
- Sombra projetada só para o que flutua: `shadow-md` em menus, balões de gráfico e toasts, `shadow-lg` em modais e drawers. `shadow-sm` aparece no botão branco, no hover de card clicável e no item selecionado do controle segmentado.
- A geometria da logo (chanfro a 45° e seta ↗) aparece em dois lugares: nas formas tom sobre tom do card de destaque e na seta dos botões e links que levam a outra tela.

## Iconografia

- Use o conjunto de ícones UP (grupo **Icons**): grade de 24px, traço de 1,75, pontas e junções arredondadas, sem preenchimento. Os nomes seguem os do Lucide. Se faltar um ícone, use o equivalente do Lucide com `stroke-width="1.75"` e acrescente-o ao grupo.
- Tamanhos: `icon-sm` (16) em selos, botão sm e ajuda; `icon-md` (20) em botões, navegação e alertas; `icon-lg` (24) na barra inferior e em ícones de ferramenta.
- O ícone herda a cor do texto (`currentColor`). Os SVGs enviados como arquivo usam traço `brand-black`.
- Status usa forma e palavra, além da cor: verde é `circle-check`, amarelo é `triangle-alert` e vermelho é `octagon-alert`.
- Nunca use emoji. Ícone sozinho só em `up-icon-btn`, e sempre com `aria-label`.
- Ferramentas: Diagnóstico `clipboard-check`, Raio-X `chart-bar`, Kit UP `crown`, Kit Essencial `book-open`, Histórico `history`. Texto de IA: `pen-line`.

## Logo

- Use só os arquivos do grupo **Logos**, sem redesenhar e sem recolorir. Branco sobre `surface-inverse` e preto sobre `bg-canvas` ou `surface`.
- **Assinatura** (símbolo + "Universo do Propósito"): login, e-mails e materiais, sempre com pelo menos 120px de largura.
- **Símbolo**: sidebar (28px de altura; preto na do aluno, branco na do admin), header (24px) e qualquer espaço menor, com no mínimo 20px de altura.
- Área de proteção: a altura da seta ↗ do símbolo, em todos os lados.
- Não aplique azul, laranja, sombra, contorno ou fundo fotográfico na logo.

## Breakpoints e layout

Os estilos base valem para o celular, e cada ponto acrescenta a partir dali:

- **Base, até 767px.** `up-header` no topo, `up-tabbar` embaixo, uma coluna e ações principais em largura total (`up-btn--block`).
- **`bp-sm` (480px).** Dois botões podem ficar lado a lado.
- **`bp-md` (768px).** Grid de 8 colunas, cards em duas colunas, indicadores em linha.
- **`bp-lg` (1024px).** `up-sidebar--inverse` fixa substitui a barra inferior, grid de 12 colunas, controles em `control-md`.
- **`bp-xl` (1280px).** O conteúdo trava em `content-max` e centraliza.

## Estados de interação

Todo componente interativo tem estes estados, com os mesmos tokens:

- **Hover:** escurece um passo (`primary` → `primary-hover`) ou soma `state-hover` sobre superfícies claras e `state-hover-inverse` sobre preto.
- **Pressionado:** `primary-active` ou `state-pressed`.
- **Foco de teclado:** anel sólido de 2px (`border-2`) em `focus-ring`, afastado 2px, só em `:focus-visible`. Sobre `surface-inverse`, use `focus-ring-inverse`.
- **Selecionado:** fundo `primary-subtle` com contorno `primary`, ou contorno `border-control` sobre `surface-muted` no controle segmentado.
- **Erro:** contorno `danger` e mensagem em `danger-text` com ícone, logo abaixo do campo.
- **Desativado:** `surface-muted` e `text-disabled`. Desative só o que não pode ser feito agora e diga por quê.
- **Carregando:** `up-spinner` dentro do botão, com o rótulo mantido e `aria-busy`. Listas e cards usam `up-skeleton`.
- **Bloqueado por acesso** é diferente de desativado: o item continua visível e clicável e leva à oferta (veja *LockedState*).

## Movimento

Use `duration-fast` em hover e cor, `duration-base` em menus e alertas, e `duration-slow` em drawer e folha inferior. Use `ease-standard` para entrar e `ease-exit` para sair. O movimento só existe para mostrar de onde algo veio. Com `prefers-reduced-motion`, nada se move.

## Acessibilidade

- **Contraste.** Todo texto tem pelo menos 4,5:1 sobre o fundo que a nota do token indica. Contornos de controle, anel de foco e ícones com significado têm pelo menos 3:1. As notas de cada token trazem os números.
- **Cor nunca sozinha.** O semáforo sempre mostra palavra e forma ("Verde" com círculo, "Amarelo" com triângulo, "Vermelho" com octógono). O verde puxa para o azul para se separar melhor do vermelho em daltonismo.
- **Rótulo visível em todo campo.** Placeholder é exemplo, não rótulo. Erros ficam ligados ao campo por `aria-describedby` e marcados com `aria-invalid`.
- **Teclado.** Tudo é alcançável com Tab, na ordem visual. Grupos de escolha (segmentado, escala de 0 a 10) seguem o padrão `radiogroup` e são navegados com as setas.
- **Leitores de tela.** Itens bloqueados anunciam ", bloqueado". Mensagens que aparecem depois de uma ação (código enviado, erro ao salvar) usam `role="status"` ou `role="alert"`. O código de 6 dígitos aceita colar o código inteiro e `autocomplete="one-time-code"`.
- **Toque e texto.** Alvos têm pelo menos 44×44px. Valores digitados ficam em 16px. O texto pode ser ampliado até 200% sem quebrar o layout.

## Acesso por produto e estados do usuário

Cada produto é liberado de forma independente:

- **Produto principal (`front`):** Diagnóstico UP e Raio-X financeiro.
- **Kit Essencial (`essencial`):** itens 1 e 2 do Kit.
- **Kit UP de Implementação (`kit`):** os cinco itens do Kit.

Como a interface trata cada situação:

- **Sem acesso a um item do Kit.** O item aparece com `lock`, o texto "Disponível no Kit UP de Implementação" e um botão para o link de compra configurado no admin. A navegação mostra o Kit com cadeado, mas não o esconde.
- **Acesso encerrado** (reembolsado, chargeback ou revogado). Use um `up-alert--neutral` dizendo que o acesso foi encerrado e que os dados continuam guardados, com o caminho para o suporte. Não apague nem esconda o histórico do aluno.
- **Ferramenta não iniciada, em andamento ou concluída.** Use os selos "Não iniciado", "Em andamento" e "Concluído". Diagnósticos se marcam como "Inicial" ou "Refeito".
- **Orientações.** Mostre o texto definido pelas regras do sistema, com linguagem simples e sem mensagens técnicas.

## Como usar este sistema

Componentes de painel: `PlanBanner` (o que o aluno tem liberado), `ProductCard` (atalhos para as áreas), `HeroCard` (o número mais importante), `Indicator`, `RingChart` (média de 0 a 10), `LineChart` (faturamento × saídas), `BarChart` (sobra mês a mês), `ScoreDots`, `NextSteps`, `ResultList` e `Journey` (as etapas do método, com o estado real).

Carregue `tokens.css`, depois `components/bundle.css` e, se quiser os ícones e os formatadores, `components/bundle.js` (`window.UP.icon(nome)`, `UP.hydrate()` para elementos com `data-icon`, `UP.formatBRL()` e `UP.formatNumber()`). Os componentes são classes CSS com prefixo `up-` e não dependem de framework. Funcionam em React/Next.js (a stack recomendada) como `className`. Cada componente tem uma prévia e um guia com markup, variantes, estados e regras de uso.


## Referência de tokens

Fonte única: `design-system/tokens.json`. CSS compilado: `design-system/tokens.css`.

### Cores

| Token | Valor | Uso |
|---|---|---|
| `brand-cool-gray` | `#F5F7FA` | Cor oficial de fundo da marca UP. Use pelo alias bg-canvas; nunca como cor de texto. |
| `brand-black` | `#0D0D0D` | Preto oficial da marca UP. Texto principal (via text-primary), sidebar e superfícies inversas (via surface-inverse). |
| `brand-blue` | `#0031E8` | Azul oficial da marca UP. Cor primária de interação (via primary): botões principais, links, foco, item selecionado. 8,1:1 sobre white; 7,3:1 sobre brand-cool-gray. |
| `brand-orange` | `#FF8D00` | Laranja oficial da marca UP. Só para destaques importantes (via accent): CTA de compra do Kit, barra mais baixa do gráfico, marcador do item ativo. Nunca como texto sobre fundos claros (2,1:1); texto sobre ele é sempre on-accent. |
| `white` | `#FFFFFF` | Branco puro. Base de surface (cards, campos, menus) e texto sobre azul, vermelho e preto. |
| `sand-50` | `#F9FAFC` | Areia mais clara. Base de surface-subtle: cabeçalho de tabela, linhas em hover, áreas internas de card. |
| `sand-100` | `#F5F7FA` (= `brand-cool-gray`) | Alias do fundo oficial, para ler a escala em ordem. |
| `sand-200` | `#F1F3F7` | Base de surface-muted: trilhos, skeletons, fundo de controle segmentado, campos desativados. |
| `sand-300` | `#E2E6EE` | Base de border-subtle: borda de cards e divisórias decorativas (não usar como borda de campo). |
| `sand-400` | `#CBC1B4` | Bordas fortes decorativas e texto secundário sobre brand-black (10,9:1). |
| `sand-500` | `#A0978B` | Texto e ícones desativados (isentos de contraste) e texto apagado sobre brand-black (6,7:1). |
| `sand-600` | `#8A8175` | Base de border-control: contorno de campos, checkboxes e radios. 3,8:1 sobre white, 3,5:1 sobre brand-cool-gray, 3,2:1 sobre sand-200. |
| `sand-700` | `#686057` | Base de text-muted. 6,2:1 sobre white, 5,6:1 sobre brand-cool-gray, 5,1:1 sobre sand-200. |
| `sand-800` | `#4D4740` | Base de text-secondary. 9,2:1 sobre white, 8,3:1 sobre brand-cool-gray. |
| `sand-900` | `#2A2723` | Neutro profundo para gráficos e ilustrações de dados; texto só quando brand-black pesar demais. |
| `ink-800` | `#252321` | Base de surface-inverse-raised: item em hover/ativo na sidebar. |
| `ink-700` | `#2E2C29` | Base de border-inverse: divisórias sobre brand-black. |
| `blue-50` | `#EEF2FE` | Base de primary-subtle: item selecionado, fundo de alerta informativo, ícone de ferramenta. |
| `blue-25` | `#F5F7FF` | Topo do gradiente de superfícies azuis suaves. |
| `blue-100` | `#DCE4FD` | Hover de superfícies primary-subtle. |
| `blue-200` | `#B9C8FC` | Barras de série secundária, trilho de progresso ativo e contorno de áreas primary-subtle. |
| `blue-300` | `#8CA4FF` | Base de focus-ring-inverse e texto/ícone azul sobre brand-black (8,2:1). Nunca sobre fundos claros. |
| `blue-400` | `#4C72FF` | Formas decorativas tom sobre tom dentro do card de destaque azul. |
| `blue-600` | `#0031E8` (= `brand-blue`) | Alias do azul oficial na escala. |
| `blue-700` | `#0027BA` | Base de primary-hover. Texto azul sobre blue-50 (9,4:1). |
| `blue-800` | `#001E8C` | Base de primary-active (pressionado). |
| `blue-on-muted` | `#C9D3FB` | Texto de apoio sobre brand-blue no card de destaque (5,4:1). |
| `orange-50` | `#FFF3E3` | Base de accent-subtle: fundo de destaque suave, como o selo do Kit. |
| `orange-100` | `#FFE3BF` | Hover de superfícies accent-subtle. |
| `orange-500` | `#FF8D00` (= `brand-orange`) | Alias do laranja oficial na escala. |
| `orange-600` | `#EE8300` | Base de accent-hover: hover do botão de destaque (texto on-accent 7,3:1). |
| `orange-700` | `#A35400` | Base de accent-text: laranja como texto ou ícone sobre white (5,5:1) e orange-50 (5,0:1). |
| `green-50` | `#E5F3EE` | Base de success-subtle. |
| `green-600` | `#0B7A5C` | Base de success: ícone e ponto do semáforo verde (5,3:1 sobre white). Verde puxado para o azul para separar melhor do vermelho em daltonismo. |
| `green-700` | `#086148` | Base de success-text: texto verde sobre success-subtle (6,5:1) e white. |
| `yellow-50` | `#FDF5DC` | Base de warning-subtle. |
| `yellow-400` | `#F2C230` | Base de warning-fill: amarelo do semáforo em barras e pontos, sempre com borda ou rótulo (1,7:1 sobre white). Amarelo, não laranja: não confundir com brand-orange. |
| `yellow-700` | `#8F6A00` | Base de warning: ícone do semáforo amarelo (5,0:1 sobre white, 4,6:1 sobre warning-subtle). |
| `yellow-800` | `#6E5200` | Base de warning-text: texto amarelo-escuro sobre warning-subtle (6,7:1) e white. |
| `red-50` | `#FCECEA` | Base de danger-subtle. |
| `red-600` | `#C8281E` | Base de danger: ícone do semáforo vermelho, botão destrutivo (texto white 5,6:1), borda de campo com erro. |
| `red-700` | `#A41F17` | Base de danger-text e do hover do botão destrutivo. Texto sobre danger-subtle (6,6:1). |
| `bg-canvas` | `#F5F7FA` (= `brand-cool-gray`) | Fundo de toda página do aluno e do admin. |
| `surface` | `#FFFFFF` (= `white`) | Cards, campos, menus, modais e drawers. |
| `surface-glow-start` | `#FFFFFF` (= `white`) | Topo do gradiente vertical dos cards de destaque neutros (up-card--glow). |
| `surface-glow-end` | `#F1F3F7` (= `sand-200`) | Base do gradiente vertical dos cards de destaque neutros. Texto sobre ele: text-primary, text-secondary ou text-muted (≥5,1:1). |
| `surface-subtle` | `#F9FAFC` (= `sand-50`) | Área secundária dentro de surface: cabeçalho de tabela, linha em hover, rodapé de card. |
| `surface-muted` | `#F1F3F7` (= `sand-200`) | Trilhos, skeletons, fundo de controle segmentado e de campo desativado. |
| `surface-inverse` | `#0D0D0D` (= `brand-black`) | Sidebar do admin, botão escuro, avatar, número das ações e tooltips. |
| `surface-inverse-raised` | `#252321` (= `ink-800`) | Item em hover ou ativo sobre surface-inverse. |
| `surface-hero` | `#0031E8` (= `brand-blue`) | Fundo do card de destaque (up-hero): o número mais importante da tela. Um por tela. |
| `hero-shape` | `rgba(255, 255, 255, 0.08)` | Formas decorativas tom sobre tom (chanfro e seta ↗ da marca) no card de destaque. Texto de apoio sobre elas ainda tem 4,8:1. |
| `hero-shape-strong` | `rgba(255, 255, 255, 0.12)` | Forma em primeiro plano no card de destaque e fundo de selos e ícones sobre o azul. Só texto branco sobre ela (6,5:1), nunca text-on-hero-muted. |
| `overlay` | `rgba(13, 13, 13, 0.48)` | Véu atrás de modais e drawers. |
| `state-hover` | `rgba(13, 13, 13, 0.05)` | Camada de hover sobre qualquer superfície clara (botão fantasma, item de lista). |
| `state-pressed` | `rgba(13, 13, 13, 0.09)` | Camada de pressionado sobre qualquer superfície clara. |
| `state-hover-inverse` | `rgba(255, 255, 255, 0.06)` | Camada de hover sobre surface-inverse e surface-hero. |
| `border-subtle` | `#E2E6EE` (= `sand-300`) | Borda de cards e divisórias. Decorativa: nunca é a única pista de um controle. |
| `border-strong` | `#CBC1B4` (= `sand-400`) | Borda de botão secundário e de card clicável em hover. |
| `border-control` | `#8A8175` (= `sand-600`) | Contorno de campos, checkboxes e radios (≥3:1 sobre surface, bg-canvas e surface-muted). |
| `border-control-hover` | `#4D4740` (= `sand-800`) | Contorno de campo, checkbox e radio em hover. |
| `border-inverse` | `#2E2C29` (= `ink-700`) | Divisórias sobre surface-inverse. |
| `text-primary` | `#0D0D0D` (= `brand-black`) | Texto principal sobre surface, surface-subtle, surface-muted e bg-canvas (≥15:1). |
| `text-secondary` | `#4D4740` (= `sand-800`) | Descrições e texto de apoio sobre surface, surface-subtle e bg-canvas (≥8:1). |
| `text-muted` | `#686057` (= `sand-700`) | Metadados, ajuda de campo, placeholder e legendas sobre surface, surface-subtle, surface-muted e bg-canvas (≥5,1:1). |
| `text-disabled` | `#A0978B` (= `sand-500`) | Texto de controle desativado (isento de contraste pela WCAG). |
| `text-inverse` | `#FFFFFF` (= `white`) | Texto principal sobre surface-inverse e surface-inverse-raised. |
| `text-inverse-secondary` | `#CBC1B4` (= `sand-400`) | Texto de apoio sobre surface-inverse (10,9:1) e surface-inverse-raised (9,4:1). |
| `text-inverse-muted` | `#A0978B` (= `sand-500`) | Metadados sobre surface-inverse (6,7:1) e surface-inverse-raised (5,8:1). |
| `text-link` | `#0031E8` (= `brand-blue`) | Links em texto corrido sobre surface e bg-canvas. |
| `text-on-hero` | `#FFFFFF` (= `white`) | Texto principal sobre surface-hero (8,1:1). |
| `text-on-hero-muted` | `#C9D3FB` (= `blue-on-muted`) | Texto de apoio sobre surface-hero (5,4:1). |
| `primary` | `#0031E8` (= `brand-blue`) | Botão principal, link, checkbox e radio marcados, aba ativa, item selecionado. |
| `primary-hover` | `#0027BA` (= `blue-700`) | Hover do botão principal. |
| `primary-active` | `#001E8C` (= `blue-800`) | Botão principal pressionado. |
| `primary-subtle` | `#EEF2FE` (= `blue-50`) | Fundo de item selecionado, alerta informativo e ícone de ferramenta. |
| `primary-subtle-hover` | `#DCE4FD` (= `blue-100`) | Hover sobre primary-subtle. |
| `primary-border` | `#B9C8FC` (= `blue-200`) | Contorno suave de áreas primary-subtle (alerta informativo, ícone de ferramenta). |
| `on-primary` | `#FFFFFF` (= `white`) | Texto e ícone sobre primary, primary-hover e primary-active (≥8:1). |
| `accent` | `#FF8D00` (= `brand-orange`) | Destaque: botão de compra do Kit, menor nota e mês negativo nos gráficos, marcador do item ativo. Nunca como fundo grande. |
| `accent-hover` | `#EE8300` (= `orange-600`) | Hover do botão de destaque. |
| `accent-subtle` | `#FFF3E3` (= `orange-50`) | Fundo suave de destaque (selo do Kit UP). |
| `accent-text` | `#A35400` (= `orange-700`) | Laranja como texto ou ícone sobre surface e accent-subtle. |
| `on-accent` | `#0D0D0D` (= `brand-black`) | Texto e ícone sobre accent (8,4:1). Nunca branco sobre laranja. |
| `focus-ring` | `#0031E8` (= `brand-blue`) | Anel de foco de teclado sobre superfícies claras: 2px sólido, 2px de afastamento. |
| `focus-ring-inverse` | `#8CA4FF` (= `blue-300`) | Anel de foco sobre surface-inverse (8,2:1). |
| `success` | `#0B7A5C` (= `green-600`) | Semáforo verde, acesso liberado, confirmação. Ícone e ponto; sempre com palavra ao lado. |
| `success-text` | `#086148` (= `green-700`) | Texto de sucesso sobre success-subtle e surface. |
| `success-subtle` | `#E5F3EE` (= `green-50`) | Fundo de selo e alerta de sucesso. |
| `warning` | `#8F6A00` (= `yellow-700`) | Semáforo amarelo: ícone (triângulo). Sempre com palavra ao lado. |
| `warning-fill` | `#F2C230` (= `yellow-400`) | Preenchimento amarelo em barras e pontos do semáforo, sempre com contorno warning ou rótulo. |
| `warning-text` | `#6E5200` (= `yellow-800`) | Texto de atenção sobre warning-subtle e surface. |
| `warning-subtle` | `#FDF5DC` (= `yellow-50`) | Fundo de selo e alerta de atenção; selo 'estimativa'. |
| `danger` | `#C8281E` (= `red-600`) | Semáforo vermelho (octógono), erro de campo, botão destrutivo do admin. |
| `danger-hover` | `#A41F17` (= `red-700`) | Hover do botão destrutivo. |
| `danger-text` | `#A41F17` (= `red-700`) | Texto de erro sobre danger-subtle e surface. |
| `danger-subtle` | `#FCECEA` (= `red-50`) | Fundo de selo e alerta de erro. |
| `info` | `#0031E8` (= `brand-blue`) | Ícone de alerta informativo. |
| `chart-primary` | `#0031E8` (= `brand-blue`) | Série principal de gráficos e valores positivos (sobra acima de zero). |
| `chart-ink` | `#0D0D0D` (= `brand-black`) | Segunda série de gráficos (barras escuras), sempre ao lado de chart-primary. |
| `chart-highlight` | `#FF8D00` (= `brand-orange`) | Destaque de gráfico: menor nota da Roda e do Radar, mês negativo. Sempre com rótulo em texto ao lado. |
| `chart-track` | `#F1F3F7` (= `sand-200`) | Trilho de barras e pontos vazios da escala de nota. |
| `chart-grid` | `#E2E6EE` (= `sand-300`) | Linhas de grade e eixo zero (1px, sólido, recessivo). |

### Tipografia

| Estilo | Família | Tamanho / entrelinha | Peso | Uso |
|---|---|---|---|---|
| `.display` | display | 52px / 56px | 400 | Saudação do Início no desktop, em dois tons: "Olá," em text-muted e o nome em text-primary. Uma por tela. No celular, use title-1. |
| `.title-1` | display | 32px / 38px | 500 | Título de página no desktop e saudação no celular. |
| `.title-2` | display | 24px / 30px | 500 | Título de página no celular; título de seção no desktop. |
| `.title-3` | display | 20px / 26px | 600 | Título de seção no celular, de modal e de drawer. |
| `.title-4` | display | 16px / 22px | 600 | Título de card. |
| `.figure-xl` | display | 48px / 52px | 500 | Número do card de destaque (up-hero). Um por tela. |
| `.figure-lg` | display | 32px / 36px | 500 | Indicadores em linha (up-metrics) e o principal de uma seção. |
| `.figure-md` | display | 24px / 30px | 500 | Valor de indicador em card e médias da Roda e do Radar. |
| `.figure-sm` | display | 17px / 24px | 500 | Valores em linhas de lista e tabela quando precisam de peso. |
| `.body-lg` | text | 18px / 28px | 400 | Leitura longa: textos da IA, introdução de etapa do Diagnóstico. |
| `.body` | text | 16px / 24px | 400 | Texto padrão de interface e valor digitado em campos (16px evita zoom no iOS). |
| `.body-sm` | text | 14px / 20px | 400 | Descrições de card, células de tabela no desktop. |
| `.label` | text | 14px / 20px | 500 | Rótulo de campo, texto de botão md, item de navegação. |
| `.label-sm` | text | 13px / 18px | 500 | Selos, botão sm, rótulos da barra de navegação do celular. |
| `.label-xs` | text | 12px / 16px | 500 | Rótulo da barra de navegação inferior do celular e selo sm. |
| `.caption` | text | 13px / 18px | 400 | Ajuda de campo, rodapés fixos, datas. |
| `.overline` | text | 12px / 16px | 600 | Sobretítulo de seção, sempre em maiúsculas (aplicar text-transform no CSS). Pouco e só no desktop. |

Famílias: `--font-display` = "Inter Display", "Helvetica Neue", Helvetica, Arial, sans-serif · `--font-text` = Inter, "Helvetica Neue", Helvetica, Arial, sans-serif.

### Espaçamento

| Token | Valor | Uso |
|---|---|---|
| `space-1` | `4px` | Ícone ↔ texto em selos; ajustes finos. |
| `space-2` | `8px` | Ícone ↔ texto em botões; entre rótulo e campo; entre selos. |
| `space-3` | `12px` | Entre itens de lista compacta; padding de selo md e alerta interno. |
| `space-4` | `16px` | Margem lateral do celular; padding de card no celular; gutter do grid no celular. |
| `space-5` | `20px` | Padding de card no tablet; entre campos de um formulário. |
| `space-6` | `24px` | Padding de card no desktop; gutter do grid a partir do tablet; margem lateral do tablet. |
| `space-8` | `32px` | Entre seções no celular; margem lateral do desktop. |
| `space-10` | `40px` | Entre seções no desktop. |
| `space-12` | `48px` | Topo de página no desktop; respiro de empty state. |
| `space-16` | `64px` | Respiro de telas de entrada (login, código). |

### Raios

| Token | Valor | Uso |
|---|---|---|
| `radius-xs` | `6px` | Checkbox, foco interno, barras de gráfico (ponta arredondada). |
| `radius-sm` | `8px` | Itens de controle segmentado pequeno, unidade R$/%, tooltips. |
| `radius-md` | `12px` | Campos, células do código, itens de navegação, opções em cartão, alertas internos. |
| `radius-lg` | `20px` | Cards, alertas, painéis. |
| `radius-xl` | `28px` | Card de destaque (up-hero), modais, drawers e a folha inferior do celular. |
| `radius-full` | `9999px` | Botões (pílula), selos, avatar, radio, ícones em círculo, pontos de nota. |

### Sombras

| Token | Valor | Uso |
|---|---|---|
| `shadow-glow` | `inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 1px 2px rgba(13, 13, 13, 0.04)` | Brilho no topo de cards com gradiente e de ícones em círculo. |
| `shadow-sm` | `0 1px 2px rgba(13, 13, 13, 0.05)` | Item selecionado do controle segmentado; card clicável em hover; botão branco sobre o card de destaque. |
| `shadow-md` | `0 2px 4px rgba(13, 13, 13, 0.04), 0 12px 32px rgba(13, 13, 13, 0.08)` | Menus, popovers, toasts. |
| `shadow-lg` | `0 2px 6px rgba(13, 13, 13, 0.06), 0 20px 48px rgba(13, 13, 13, 0.16)` | Modais e drawers. |

### Tamanhos

| Token | Valor | Uso |
|---|---|---|
| `control-sm` | `32px` | Botões e campos densos do admin e filtros de tabela. Nunca como ação principal no celular. |
| `control-md` | `40px` | Altura padrão de botões e campos no desktop. |
| `control-lg` | `48px` | Altura padrão de botões e campos no celular e ação principal de formulário. |
| `touch-min` | `44px` | Área mínima de toque de qualquer alvo no celular. |
| `icon-sm` | `16px` | Ícone em selos, botão sm e ajuda de campo. |
| `icon-md` | `20px` | Ícone em botões md/lg, navegação e alertas. |
| `icon-lg` | `24px` | Ícone de ferramenta em card e barra do celular. |
| `sidebar-width` | `248px` | Largura da sidebar a partir de 1024px. |
| `header-height` | `64px` | Altura do header no desktop. |
| `header-height-mobile` | `56px` | Altura do header no celular e tablet. |
| `mobile-nav-height` | `64px` | Altura da barra de navegação inferior (mais a área segura do aparelho). |
| `content-max` | `1200px` | Largura máxima do conteúdo ao lado da sidebar. |
| `form-max` | `560px` | Largura máxima de formulários e telas de uma coisa só (login, etapas do Diagnóstico). |
| `reading-max` | `680px` | Largura máxima de texto corrido (leituras da IA). |

### Bordas

| Token | Valor | Uso |
|---|---|---|
| `border-1` | `1px` | Toda borda de card, campo e divisória. |
| `border-2` | `2px` | Anel de foco, aba ativa, opção selecionada. |

### Breakpoints

| Token | Valor | Uso |
|---|---|---|
| `bp-sm` | `480px` | Celulares grandes: botões de ação deixam de ocupar a largura toda quando há dois lado a lado. |
| `bp-md` | `768px` | Tablet: grid de 8 colunas, margens space-6, cards em duas colunas. |
| `bp-lg` | `1024px` | Desktop: sidebar fixa substitui a barra inferior; grid de 12 colunas. |
| `bp-xl` | `1280px` | Desktop largo: conteúdo trava em content-max e centraliza. |

### Camadas (z-index)

| Token | Valor | Uso |
|---|---|---|
| `z-sticky` | `10` | Header fixo e cabeçalho de tabela. |
| `z-nav` | `20` | Sidebar e barra inferior do celular. |
| `z-dropdown` | `30` | Menus e popovers. |
| `z-overlay` | `40` | Véu de modal e drawer. |
| `z-modal` | `50` | Modais e drawers. |
| `z-toast` | `60` | Toasts. |

### Duração

| Token | Valor | Uso |
|---|---|---|
| `duration-fast` | `120ms` | Hover, pressionado, troca de cor. |
| `duration-base` | `200ms` | Menus, alertas e toasts entrando. |
| `duration-slow` | `280ms` | Drawer e folha inferior. |

### Curvas

| Token | Valor | Uso |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Entradas e mudanças de estado. |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Saídas (fechar modal, drawer, toast). |
