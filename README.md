# Josy Clair Estética — Landing Page Institucional (v1)

Landing page institucional de alto padrão desenvolvida para a **Josy Clair Estética**, clínica de estética avançada e harmonização localizada em Ananindeua, Pará.

Construída a partir da arquitetura visual e microinterações do **Design System V15 (Aura System)**, adaptada rigorosamente com a identidade de luxo e as informações oficiais da clínica.

---

## 🎨 Paleta de Cores & Identidade Visual

A paleta de cores foi desenvolvida especificamente para transmitir **sofisticação**, **cuidado personalizado** e **tecnologia**, substituindo o padrão escuro original do Design System V15 por uma identidade de alta estética e dermatologia avançada:

| Elemento / Descrição | Hexadecimal | RGBA | Aplicação no Projeto |
| :--- | :---: | :---: | :--- |
| **Dourado Champagne (Principal)** | `#C59B27` | `rgba(197, 155, 39, 1.0)` | Botões primários (`btn-shimmer`), realce de títulos, badges, ícones e halo do flashlight |
| **Dourado Ouro Nobre / Bronze** | `#B38E5D` | `rgba(179, 142, 93, 1.0)` | Bordas translúcidas de cards, gradientes nobres e subtítulos |
| **Champagne Suave** | `#E8CCA4` | `rgba(232, 204, 164, 1.0)` | Destaques no painel escuro da hero section e acentos luminescentes |
| **Nude Rosé / Cashmere** | `#DFB8A6` | `rgba(223, 184, 166, 1.0)` | Superfícies secundárias, fundos de badges e detalhes sutis de pele |
| **Preto Nobre / Obsidian** | `#1C1917` | `rgba(28, 25, 23, 1.0)` | Tipografia principal display, botões secundários e contraste editorial |
| **Fundo Dark VIP (Hero & Biossegurança)** | `#151312` | `rgba(21, 19, 18, 1.0)` | Painel de métricas da hero section e seção de biossegurança clínica |
| **Página Base Suave** | `#FAF8F5` | `rgba(250, 248, 245, 1.0)` | Fundo neutro com subtonalidade quente/champagne |
| **Branco Puro (Superfície)** | `#FFFFFF` | `rgba(255, 255, 255, 1.0)` | Cards elevados, inputs e foco limpo |

---

## ⚡ Componentes e Microinterações Extraídos do Design System V15

1. **Hero Fullscreen Minimalista Inspirada no Amaterasu (`100dvw` x `100dvh`)**:
   - Ocupa exatamente 100% da viewport inicial (`100dvw x 100dvh`), entregando uma primeira impressão cinematográfica e editorial de altíssimo padrão.
   - Fotografia autoral criada especificamente para o projeto (`assets/images/hero-woman.jpg`), trazendo uma mulher de perfil com iluminação rim-light champagne sobre fundo obsidian `#151312`.
   - **Motor de Parallax Multiplano**: Efeito tridimensional suave em tempo real com atenuação lerp (GPU-accelerated `translate3d`), reagindo sutilmente ao movimento do mouse e ao scroll da página.
   - Elementos vetoriais geométricos orbitais (anéis Amaterasu em traço dourado suave), mira minimalista de coordenadas geográficas de Ananindeua e botão pílula de ação com ponto pulsante.
   - Barra inferior minimalista com indicador *"Scroll to explore"*, coordenadas de latitude/longitude e síntese clínica editorial.
   - Barra de navegação adaptativa (`fixed top-0`): translúcida com tipografia branca/ouro sobre a hero escura, migrando automaticamente com transição suave para vidro fosco claro (`header-scrolled`) ao navegar pelo restante da página.

2. **Tipografia Display Escalar (Inter Font Stack)**:
   - Títulos de grande impacto com kerning negativo e proporções fluidas (`text-4xl md:text-6xl lg:text-[5.5rem]`).
   - Etiquetas mono espacadas (`tracking-[0.2em] font-mono uppercase`).
   - Efeito de texto contorno decorativo (`text-outline-light`).
   - Tipografia cinética de fundo contínua (`kinetic-bg` com animação suave `panText`).

3. **Efeitos de Entrada e Saída (Reveal System)**:
   - Classes `.reveal` e `.reveal.active` acionadas via `IntersectionObserver` com curva de aceleração de luxo (`cubic-bezier(0.16, 1, 0.3, 1)`).
   - Máscaras de texto com subida elástica (`.text-reveal-wrapper` e `.text-reveal-content`).

4. **Efeitos de Glow & Flashlight Zone**:
   - Detecção do cursor do mouse em tempo real (`--mouse-x`, `--mouse-y`) projetando um halo radial dourado no hover das seções.
   - Variação Flashlight Dark na hero section e na seção de biossegurança clínica.

5. **Microinterações dos Cards de Tecnologia & Biossegurança (Swatch Cards)**:
   - Efeito elástico suave (`transform: scale(1.05) translateY(-2px)`) com curva bouncy (`cubic-bezier(0.68, -0.55, 0.265, 1.55)`).
   - Rotação dinâmica do ícone (`scale(1.12) rotate(4deg)`), elevação de sombra e iluminação de tag.

6. **Botões com Efeito Shimmer**:
   - Classe `.btn-shimmer` com feixe luminoso diagonal animado que desliza suavemente sobre os botões ao passar o cursor.

7. **Letreiro Infinito (Marquee Ticker)**:
   - Faixa contínua sem quebras (`scroll 32s linear infinite`) com os principais diferenciais da clínica e pausa suave no hover.

8. **Faixa de Autoridade VIP (Métricas Clínicas)**:
   - Exibição de autoridade em 3 colunas: +10 Anos de Trajetória, 100% Protocolos Sob Medida e 5.0 ★ Satisfação & Autoestima.

9. **Linhas de Procedimentos Interativas (Typo-Rows)**:
   - Linhas com barra lateral elástica em gradiente dourado (`cubic-bezier(0.68, -0.55, 0.265, 1.55)`), translação sutil e chips descritivos.
   - Filtro por categoria (Todos, Estética Facial Avançada, Tratamentos Corporais, Cuidados Personalizados).
   - Clique direto que abre o WhatsApp com o procedimento selecionado pronto para agendar.

10. **Simulador de Protocolo Ideal**:
    - Módulo interativo onde o visitante seleciona seu foco (Rejuvenescimento Facial, Harmonização Natural, Melasma/Manchas, Silhueta Slim, Firmeza Corporal, Relaxamento & Drenagem) e o seletor radio button preenche dinamicamente o card ativo, exibindo em tempo real o protocolo recomendado, percentual de afinidade e link direto para o WhatsApp.

11. **Integração Completa de Localização & Google Maps**:
    - Endereço oficial na Cidade Nova 4 (Arterial 18, nº 372, Ananindeua - PA, CEP: 67133-310).
    - Plus Code oficial `JHWV+PF Ananindeua, Pará`.
    - Iframe oficial do Google Maps incorporado com design responsivo.
    - Botão interativo de um clique para copiar endereço (com feedback em toast) e botão de rota direta para o endereço exato.

12. **Formulário de Pré-Agendamento**:
    - Coleta de dados (Nome, WhatsApp, Tratamento, Horário Preferido e Mensagem) que dispara uma mensagem estruturada no WhatsApp da clínica `(91) 99313-1314`.

13. **Botão Flutuante de WhatsApp com Pulso Beacon**:
     - Acesso imediato para agendamentos via `(91) 99313-1314` com animação de pulso contínua.

---

## 📁 Estrutura de Arquivos

```
v1/
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos do Design System adaptados com cores de alta estética
│   ├── js/
│   │   └── main.js             # Microinterações, carrossel, observador e simulador
│   └── images/
│       ├── logo.svg            # Logotipo vetorial completo (Símbolo + Tipografia Nobre)
│       └── logo-symbol.svg     # Símbolo vetorial isolado (Monograma Radiante / Borboleta Dourada)
├── index.html                  # Landing Page Institucional Completa
└── README.md                   # Documentação do projeto
```

---

## 🚀 Como Visualizar Localmente

Abra o arquivo `index.html` em qualquer navegador web moderno:
```powershell
Start-Process "c:\Diversos\TI\Trabalhos\2026\Orçamentos\11-Novembro\JOSY_CLAIR\Projetos\v1\index.html"
```

Ou sirva via servidor local HTTP:
```powershell
python -m http.server 8080 --directory "c:\Diversos\TI\Trabalhos\2026\Orçamentos\11-Novembro\JOSY_CLAIR\Projetos\v1"
```
E acesse `http://localhost:8080` no seu navegador.

