# Sistema de Design - O Expresso Filosofia

Documento oficial de diretrizes visuais, tokens de estilo, proporções de interface e componentes de alta conversão para o projeto **O Expresso Filosofia**.

---

## 🧭 1. Conceito e Direção de Arte

* **Tema Central:** Uma jornada épica, cinematográfica e transformadora pelo pensamento humano e pela paixão pela vida.
* **Atmosfera:** Pôr-do-sol dourado, horizonte aberto, locomotiva a vapor histórica, tons de café expresso, couro, bronze e iluminação âmbar calorosa.
* **Arquitetura de Conversão:** Estrutura inspirada nas páginas mobile de maior faturamento do mercado de infoprodutos (VSL direta, quebra de ritmo com cards visuais, ancoragem massiva de valor e quebra de objeções).

---

## 🎨 2. Paleta de Cores e Tokens de Estilo

### Cores de Superfície e Fundo (Backgrounds)
| Token | Cor Hex | Uso / Aplicação |
| :--- | :--- | :--- |
| `--bg-main` | `#0e0a07` | Fundo principal da página (café expresso escuro profundo). |
| `--bg-secondary` | `#16110c` | Fundo de seções alternadas e faixas de transição. |
| `--bg-card-dark` | `#1f1711` | Fundo de cartões escuros e contêineres de conteúdo. |
| `--bg-card-border` | `#33251a` | Bordas e divisórias sutis em tom sépia/bronze. |
| `--bg-paper-light` | `#faf6ee` | Fundo de blocos de leitura claros (marfim/papel de livro antigo). |
| `--text-paper-dark` | `#1c140e` | Texto escuro para uso exclusivo sobre blocos claros. |

### Cores de Acento & Filosofia (Identidade Visual do Pôster)
| Token | Cor Hex | Uso / Aplicação |
| :--- | :--- | :--- |
| `--gold-primary` | `#e2a856` | Títulos principais, molduras douradas e elementos de prestígio. |
| `--gold-light` | `#f5c276` | Gradientes dourados, brilhos e iluminação de destaque. |
| `--amber-accent` | `#d47b2c` | Ícones de check, badges secundárias e detalhes quentes. |
| `--bronze-dark` | `#6d451e` | Sombras quentes e bordas de destaque. |

### Cores Funcionais de Conversão (Mantidas da Referência)
| Token | Cor Hex | Uso / Aplicação |
| :--- | :--- | :--- |
| `--cta-green` | `#10b981` | Botão principal de compra/checkout (verde esmeralda pulsante). |
| `--cta-green-hover` | `#059669` | Estado hover/ativo do botão principal. |
| `--cta-green-glow` | `rgba(16, 185, 129, 0.4)` | Sombra externa com efeito de brilho e pulso no CTA. |
| `--alert-red` | `#ef4444` | Badges de passos (`PASSO #1`), avisos de urgência e preços riscados. |
| `--circle-sketch-red` | `#dc2626` | Círculos e setas no estilo desenho à mão sobre números e valores. |
| `--highlight-yellow` | `rgba(254, 240, 138, 0.85)` | Efeito marca-texto amarelo para frases de impacto em prints de depoimentos. |

---

## 🔤 3. Tipografia e Hierarquia de Texto

* **Títulos Marcantes & Nobres (Display):**
  * **Família:** `'Cinzel', 'Playfair Display', serif`
  * **Pesos:** 700 (Bold) / 800 (Extra Bold)
  * **Estilo:** Caixa alta (Uppercase), espaçamento entre letras levemente expandido (`letter-spacing: 0.05em`), cor primária dourada (`--gold-primary` ou gradiente dourado).

* **Subtítulos e Chamadas de Impacto:**
  * **Família:** `'Poppins', 'Montserrat', sans-serif`
  * **Pesos:** 600 (Semi-bold) / 700 (Bold)
  * **Estilo:** Caixa alta ou mista, cores contrastantes (branco, vermelho ou âmbar).

* **Corpo de Texto e Leitura Rápida:**
  * **Família:** `'Inter', system-ui, sans-serif`
  * **Pesos:** 400 (Regular) / 500 (Medium) / 600 (Semi-bold)
  * **Entrelinha (Line-height):** `1.55` a `1.65` para leitura confortável no smartphone sem cansaço visual.

---

## 📱 4. Proporções, Grid e Dimensões Mobile-First

* **Container Central:**
  * Largura máxima: `500px` (centralizado na viewport via `margin: 0 auto`).
  * Padding horizontal padrão: `16px` a `20px`.
* **Raios de Borda (Border Radius):**
  * Botões de ação (CTA): `12px` ou pílula `9999px`.
  * Cards e caixas de conteúdo: `16px` a `20px`.
  * Badges e etiquetas: `6px` a `8px`.
* **Alturas de Toque (Touch Targets):**
  * Botão de compra: Altura mínima de `56px`, fonte `18px` em negrito, largura de `100%` da área útil do card.
* **Espaçamento Entre Seções:**
  * Margem vertical de `36px` a `48px` entre os blocos para conferir respiro e manter o ritmo de rolagem fluido.

---

## 🧩 5. Especificação dos Componentes da Página

### 1. Cards de Dor (Problemas Emocionais do Cotidiano)
* Formato vertical retangular (proporção ~4:5).
* Imagem de fundo fotográfica cobrindo todo o card (`object-fit: cover`).
* Gradiente escuro cobrindo os 50% inferiores: `linear-gradient(to top, rgba(14, 10, 7, 0.95) 0%, rgba(14, 10, 7, 0.4) 60%, transparent 100%)`.
* Texto da dor posicionado no rodapé em branco puro (`#ffffff`), peso 600, tamanho `16px` a `17px`.

### 2. Cards de História & Conexão
* Moldura ornamental ou estilo quadro clássico em tom madeira/ouro antigo.
* Texto com destaques pontuais em negrito e cores quentes.
* Mosaico visual mostrando momentos de vida e superação.

### 3. Tabela de Comparação ("Outros Caminhos vs. O Expresso")
* **Card Negativo (Esquerda/Topo):** Fundo vinho escuro (`#2a1012`), borda avermelhada, lista de frustrações com ícones de `✕`.
* **Card Positivo (Direita/Base):** Fundo bronze escuro com brilho esmeralda (`#112419`), borda verde, lista de vantagens exclusivas do método com ícones de `✓`.

### 4. Pilha de Bônus (Stack de Valor)
* Cartão de fundo marfim claro ou escuro com borda dourada fina (`1px solid rgba(226, 168, 86, 0.3)`).
* Barra superior preta/bronze: `BÔNUS #X – Título do Bônus`.
* Mockup em destaque do bônus (livro digital 3D, guia, áudio ou aula especial).
* Parágrafo de benefício imediato.
* Faixa vermelha inferior de valor de ancoragem: `VALOR: R$ XX,00`.

### 5. Seção de Oferta e Checkout
* Mockup 3D agrupando todo o ecossistema de entrega.
* Lista de checklist completa com valores individuais listados e somados.
* Linha de âncora: `"De R$ 1.xxx,xx Por apenas"` (com valor original tachado em vermelho).
* Valor final destacado em tamanho monumental: `"12x de R$ XX,XX"` ou valor à vista.
* Botão CTA verde vibrante com animação de pulso contínuo (`pulse-glow`).

### 6. FAQ (Perguntas Frequentes)
* Acordeão expansível com fundo `#1a130e` e borda suave.
* Título da dúvida em branco com ícone de expansão (+ / -) em dourado.
* Resposta detalhada e direta com transição suave de abertura.

### 7. Garantia Incondicional
* Selo estilizado dourado/bronze de 7 dias incondicionais.
* Caixa destacada com fundo degradê e texto de compromisso total e risco zero.

---

## ✨ 6. Animações e Microinterações

* **CTA Pulse:** Efeito sutil de respiração com scale de `1.0` a `1.02` e oscilação de `box-shadow` esmeralda para atrair o olhar.
* **Hover Suave:** Escurecimento leve e elevação (`translateY(-2px)`) ao passar o mouse ou tocar.
* **Transição de Acordeões:** Animação `cubic-bezier(0.4, 0, 0.2, 1)` para expansão fluida das dúvidas frequentes.
