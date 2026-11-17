# Planejamento, textos e revisão

## app-plan — estrutura e jornada

Premissa: uma página institucional para pessoas de Divinópolis interessadas em atendimento e para designers interessadas em técnica com linha. Conversão principal: iniciar uma conversa de agendamento pelo WhatsApp.

Plataforma: site estático responsivo, leve, sem instalação nem build. Permite abertura direta no computador e publicação futura em hospedagem estática.

| Seção | Papel na jornada | Próximo passo |
| --- | --- | --- |
| Abertura | Identificar profissional, cidade e áreas de atendimento | Agendar atendimento ou ir à formação |
| Serviços | Ajudar a escolher a área de interesse | Mensagem específica pelo WhatsApp |
| Trabalhos | Levar ao conteúdo real disponível | Ver trabalhos no Instagram |
| Sobre | Apresentar Kamila sem inventar trajetória | Conversar com a profissional |
| Formação | Separar a jornada das designers | Conhecer a formação na Hotmart |
| Perguntas frequentes | Resolver dúvidas básicas | Confirmar detalhes pelo WhatsApp |
| Localização e contato | Facilitar o agendamento e a chegada | WhatsApp, telefone ou Google Maps |

Fluxo de atendimento: Instagram/busca → nome e cidade → área de interesse → WhatsApp com mensagem → combinar o atendimento diretamente com Kamila.

Fluxo de formação: primeira tela/menu → “Seja minha aluna” → apresentação da técnica com linha → página da formação na Hotmart.

Essencial entregue: sete seções, navegação por âncoras, contato em celular, três mensagens distintas, perguntas expansíveis e SEO básico. Após aprovação: imagens reais, detalhes confirmados e publicação. Não há contas, dados armazenados, pagamentos nem reservas automáticas. A página encaminha às atividades comerciais já existentes da profissional, sem inventar preços ou novas ofertas.

## app-copy — decisões de texto

- Foi adotada a última orientação do briefing: “Agendar atendimento” como CTA principal e “Sou designer e quero aprender” como secundário.
- H1 mantido: “Sobrancelhas, cílios e remoção a laser em Divinópolis”.
- Textos de serviço descrevem áreas de atendimento, sem prometer resultados ou presumir técnicas.
- Apresentação em primeira pessoa conforme texto fornecido.
- “Mais de 189 alunas” aparece na prévia com indicação de confirmação pendente.
- Nenhum depoimento, credencial, horário, preço ou garantia foi criado.
- Título: **45 caracteres**. Meta description: **139 caracteres**.

## app-code — implementação

HTML semântico, CSS responsivo e JavaScript pequeno. Sem dependências de execução locais ou etapa de build. Fontes Google externas com fallback. Desenhos vetoriais e composições tipográficas decorativas são ocultos de leitores de tela.

Inclui um H1, link para pular ao conteúdo, foco visível de 3 px, botões com altura mínima, menu móvel com `aria-expanded`, fechamento com Escape, transferência de foco às seções e respeito a `prefers-reduced-motion`. FAQ usa `details` e `summary` nativos e funciona sem JavaScript. Os links e o conteúdo principal também funcionam sem JavaScript.

Título, descrição, Open Graph textual e JSON-LD LocalBusiness estão configurados com os dados fornecidos. Domínio e imagem social definitivos aguardam aprovação. A prévia mantém `noindex` intencionalmente.

## app-check — revisão em 17/11/2026

Estimativas editoriais, não notas de Lighthouse ou certificação: **SEO 7/10 | conteúdo 8/10 | conversão 8/10 | acessibilidade 10/10 | técnico 10/10**.

1. **Alta, somente para lançamento — indexação bloqueada:** `noindex` protege a prévia da indexação. Remover apenas depois da aprovação e configuração do domínio; penalidade de 3 na avaliação de prontidão SEO.
2. **Média — conteúdo pendente de confirmação:** dado de alunas, apresentação e escopo precisam da revisão da Kamila; penalidade de 2 em conteúdo. O texto evita detalhes não confirmados.
3. **Média — galeria e retrato aguardam autorização:** a composição tipográfica é intencional, mas as imagens reais podem apoiar a decisão da visitante; penalidade de 2 em conversão. Inserir somente arquivos autorizados.

Medições do código e da página: 1 H1; título com 45 caracteres; descrição com 139; 0 links internos quebrados; 0 fotos sem alt (nenhuma foto foi incluída); 0 campos de formulário (não há formulário). O JSON-LD contém nome, telefone, endereço e redes confirmados pelo briefing.

### Evidências de funcionamento

| Verificação | Resultado |
| --- | --- |
| HTTP da prévia local | 200 |
| Sintaxe de `app.js` | `node --check` sem erros |
| 360 × 800 | Sem rolagem horizontal; menu móvel e CTA inferior presentes; nenhum alvo visível menor que 44 × 44 px |
| 768 × 1024 | Sem rolagem horizontal; composição em duas colunas; nenhum alvo visível menor que 44 × 44 px |
| 1440 × 1000 | Sem rolagem horizontal; navegação e serviços em colunas; nenhum alvo visível menor que 44 × 44 px |
| Contraste dos textos informativos verificados | Menor razão medida: 5,09:1, acima de 4,5:1 |
| Menu com teclado | Enter abre; Tab chega a Serviços com outline sólido de 3 px; Escape fecha e devolve foco ao Menu |
| Navegação móvel | “Seja minha aluna” chega a `#formacao`, fecha o menu e move o foco à seção |
| Perguntas frequentes | Enter abre e fecha a resposta de “Como agendar?” |
| Âncoras | Todos os destinos presentes |
| Console da prévia | Nenhum erro ou aviso observado |
| WhatsApp em viewport móvel | Página de abertura confirmou +55 37 98841-1811 e o texto exato de remoção a laser; nenhuma mensagem enviada |
| Outras mensagens WhatsApp | Parâmetros de URL conferidos: mensagens distintas para sobrancelhas e cílios |
| Instagram | Perfil público abriu e exibiu o nome, a bio com +189 alunas e o link de Hotmart fornecido |
| Hotmart | Link redirecionou para “Sobrancelhas além da técnica”, de Kamila carvalho; aprovação comercial ainda pendente |
| Google Maps | Rota abriu com destino Av. Oswaldo Machado Gontijo, 984, Divinópolis – MG |

Limites: emulação de larguras no navegador desktop, não teste em aparelho iOS/Android físico. Não foram enviados WhatsApps, concluídas compras ou usados leitores de tela reais. Instagram e Hotmart inicialmente falharam na consulta web, mas foram acessados no navegador. Nenhum diagnóstico clínico ou informação de tratamento foi pesquisado ou incorporado.

Fontes: [briefing fornecido], [perfil da Kamila](https://www.instagram.com/kamilacarvalho_designer/), [página da formação](https://hotmart.com/pt-br/marketplace/produtos/expert-em-depilacao-egipcia/A98959706X). Conteúdo público confirma referências, mas não substitui aprovação de conteúdo e licença de uso de imagem.


## Atualização da abertura — solicitação posterior

Textos e botões centralizados, composição KC da abertura removida e substituída pela foto enviada na conversa. A imagem original foi mantida sem alteração e recebeu sombreado vinho por CSS. O arquivo único PREVIA.html incorpora a imagem, sem depender da pasta de assets. Verificadas novamente as larguras de 360, 768 e 1440 px: sem rolagem horizontal. Na abertura móvel, todos os links mantêm pelo menos 44 × 44 px. A galeria e o retrato da seção Sobre continuam pendentes. As observações anteriores sobre ausência de imagens referem-se à primeira versão.


## Atualização com cinco fotografias enviadas

Retrato inserido na seção Sobre; fotos de sobrancelhas e cílios com degradê suave por CSS; comparação Antes/Depois somente no card de remoção a laser. As cinco imagens têm alt descritivo, dimensões explícitas, loading lazy e decoding async. Todos os arquivos carregaram na prévia. Verificados 360, 768 e 1440 px, sem rolagem horizontal; links dos serviços mantêm alvos de pelo menos 44 × 44 px. As fotos também foram incorporadas ao arquivo autônomo PREVIA.html. As referências anteriores a retrato e fotos pendentes descrevem versões anteriores; a publicação segue pendente.
