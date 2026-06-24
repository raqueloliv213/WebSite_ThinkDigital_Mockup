
  # WebSite ThinkDigital Mockup original

  This is a code bundle for WebSite ThinkDigital Mockup original..

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Resumo do trabalho de hoje

  ### Responsividade geral
  - Auditoria e correções de responsividade em `navbar.tsx`, `footer.tsx`, `empresa.tsx`, `marca.tsx` e `inovacao.tsx` (grids, paddings e tamanhos de fonte em mobile/tablet).
  - Removido o componente `sticky-solutions.tsx` (código morto, substituído pelo `stacking-cards.tsx`).
  - Navbar: "Soluções" deixou de estar sempre azul (agora segue o mesmo estilo de "Sobre"/"Carreira"); adicionado o item "Investigação & Desenvolvimento"; descrição de "Inovação" alterada para "Projetos inovadores".
  - Footer: coluna "Soluções" atualizada para "Eficiência Energética", "Efficient Factory", "TrackingDiary".

  ### Home
  - Corrigido o efeito de stacking dos cartões (Energia/Indústria/Frotas/Inovação) para que o cartão azul "se junte aos colegas" no mesmo padrão de leque/álbum de fotos, sem sobreposição de títulos.
  - Adicionado badge "+18 anos de experiência" no hero.

  ### Página Empresa
  - Hero com imagem de fundo e novo texto.
  - Estatísticas (contadores animados) movidas para logo após o hero, com os números a azul `#0085CA` e sem fundo.
  - Nova secção "Os nossos novos escritórios" (Ílhavo) com carrossel de fotos.
  - Secção de valores (Equipa, Inovação, Em Primeiro, Honestidade).
  - Linha do tempo da empresa (2007 → hoje) com animação de entrada ao scroll.
  - Nova secção final com citação + CTA "Falar com um especialista".
  - Tipo de letra alterado para Roboto em todo o site (via Google Fonts).

  ### Página Inovação
  - Hero com vídeo de fundo (`video_pulse.mp4`) e o título "A inovação não é o que fazemos. É o que nos faz."
  - Secção "Innovation Lab" (texto + foto).
  - Secção "Projetos Inovadores" com 3 blocos (estilo imagem + texto alternado) para os projetos reais da empresa: New Space Portugal, FaceRehab e Cuidados de saúde simplificados (Vodafone) — conteúdo confirmado a partir do site oficial.
  - Removida a interação de modal/cartões clicáveis e o scroll horizontal experimental, em favor de um layout mais simples e estável.
  - Corrigido um bug de "scroll preso" causado pelo uso de `position: sticky` nas secções iniciais.

  ### Notas técnicas
  - Corrigido um bug de overflow horizontal em toda a aplicação (`overflow-x: clip` no `html`/`body`).
  - Corrigida uma corrupção de acentuação (mojibake) introduzida durante a substituição em massa da fonte.

  ## Resumo do trabalho de 19/06/2026

  ### Página Inovação (`/sobre/inovacao`)
  - "Projetos Inovadores" substituído por conteúdo real confirmado em `thinkdigital.pt/innovation.php`: "Cuidados de saúde simplificados" (Vodafone, 2020), "First 5G NB-IoT" (NOS Hackton IoT Prize, 2019) e "A Smarter Rock in Rio Lisboa" (2018).
  - Aplicado motion de scroll sticky/stacking (Lenis) às duas secções de abertura (hero com vídeo + "Innovation Lab"), isoladas no seu próprio wrapper — eram colocadas diretamente na `div` da página e o `sticky` "engolia" visualmente os projetos a seguir.
  - Corrigido o enquadramento das 3 imagens dos projetos (estavam cortadas com `object-cover`); passaram a `object-contain` com fundo cinza claro.
  - Criados e depois removidos (a pedido) os projetos de financiamento público (New Space Portugal, FaceRehab, SDRT) desta página — foram para uma página própria (ver abaixo).

  ### Nova página: Investigação & Desenvolvimento (`/solucoes/investigacao-desenvolvimento`)
  - Página dedicada com os 3 projetos de I&D com financiamento público, conteúdo confirmado em `thinkdigital.pt/projects.html` e páginas de detalhe: New Space Portugal, FaceRehab, SDRT (Software Defined Real-Time Health).
  - Item "Investigação & Desenvolvimento" da navbar (menu Soluções) atualizado para apontar para esta página em vez de partilhar a de Inovação.

  ### Nova página: Notícias (`/noticias`)
  - Adicionado item "Notícias" ao dropdown "Sobre" da navbar.
  - Secção de inscrição na Newsletter (formulário com email, sem backend real).
  - Separador em tabs "Newsletter" / "Eventos" (acima do formulário de inscrição), cada um com estado vazio preparado para receber conteúdo real mais tarde.

  ### Logos de financiamento público (em todas as páginas)
  - Novo componente `funding-logos.tsx`, inserido no `root-layout.tsx` entre o conteúdo de cada página e o Footer — aparece em **todo o site**.
  - Logos atuais: AAL Programme/FCT, Compete 2020 e PRR/República Portuguesa/UE, alinhados numa única linha.

  ### Home
  - Hero redesenhado: vídeo de fundo (placeholder), título com a animação de rotação mantida mas centrado, subtítulo e botão "Falar com um especialista" (sem seta), tudo centrado — inspirado em happyrobot.ai. Removidos os badges "Energia | Indústria | Frotas" e "+18 anos de experiência".
  - Removido o título "Quem já confia em nós" da secção de logos de clientes (`trusted-by.tsx`), que continua com o carrossel.
  - Corrigido espaçamento entre o fim do stack de cards "Soluções" e os logos de financiamento (a sombra do último cartão sobrepunha-se aos logos).

  ### Correções de bugs pré-existentes
  - `navbar.tsx`, `footer.tsx` e `trusted-by.tsx` importavam ficheiros de imagem com nomes antigos que já não existiam em `src/imports` (renomeados em sessão anterior sem atualizar os imports) — corrigido, o que resolveu um erro que rebentava o site inteiro.

  ### Notas
  - Tentado um efeito interativo "elétrico" (fundo preto + linha azul a seguir o rato) no hero da Home — revertido a pedido, hero manteve o vídeo de fundo.
  
