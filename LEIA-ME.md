# Site de Kamila Carvalho

Prévia para revisão, criada em 17/11/2026. **Não publicada.**

## Abrir

1. Extraia o arquivo ZIP completo.
2. Abra `index.html` com Chrome, Edge, Firefox ou Safari. Não é necessário instalar nada.
3. Navegue pelo menu, abra as perguntas frequentes e confira os botões.
4. Para encaminhar apenas um arquivo à Kamila, use `PREVIA.html`, que reúne HTML, CSS e JavaScript. As fontes Google e os links externos precisam de internet; sem conexão, o site usa fontes de sistema.

Opcionalmente, no terminal aberto dentro da pasta, execute `python -m http.server 8765 --bind 127.0.0.1` e acesse `http://127.0.0.1:8765`. Encerre com Ctrl+C. O comando exige Python; o duplo clique em `index.html` não exige.

## Editar

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Textos, seções, botões, telefone, endereço, metadados e LocalBusiness |
| `styles.css` | Cores, fontes, espaçamento e regras para celular/tablet/desktop |
| `app.js` | Menu móvel e número de alunas |
| `favicon.svg` | Ícone tipográfico KC |
| `assets/sobrancelhas-fundo.png` | Foto enviada pela usuária, usada no fundo da abertura |
| `PREVIA.html` | Cópia autônoma para revisão; gerada a partir dos três arquivos acima |
| `PLANO-E-REVISAO.md` | Estrutura, jornada, fontes e resultados dos testes |
| `APROVACAO.md` | Materiais e confirmações pendentes |

Edite os arquivos com um editor de texto e atualize o navegador. Não é necessário executar um build. As cores ficam nas variáveis de `:root`, no início do CSS. Os títulos usam Playfair Display e os textos usam DM Sans.

O telefone aparece nos links `wa.me`, no link `tel:` e no JSON-LD. Ao trocá-lo, atualize todas as ocorrências. Os três serviços têm mensagens diferentes no parâmetro `text` da URL. Esse texto precisa ser codificado para URL; em JavaScript, use `encodeURIComponent('sua mensagem')`.

O número de alunas está em `formation.studentCount`, no início de `app.js`. Nesta prévia, o dado aparece com uma indicação de confirmação pendente. Após aprovação, defina `studentCountConfirmed: true` e `preview: false`. Se não houver confirmação, use ambas as flags como `false`; o número ficará oculto.

`PREVIA.html` é uma cópia da entrega e não se atualiza automaticamente. Para regenerá-la depois de editar os fontes, execute `python gerar-previa.py` na pasta, ou use `index.html` normalmente.

## Inserir fotos e vídeos aprovados

- Abertura: a foto enviada aparece como fundo decorativo em `.hero.container`, com camada escura em `.hero::before`. Para trocá-la, substitua `assets/sobrancelhas-fundo.png` e regenere a prévia. O sombreado e o recorte ficam no final do CSS.
- Sobre: o retrato enviado está em `.about-portrait`, no arquivo `assets/kamila-retrato.png`.
- Serviços: fotos de sobrancelhas e cílios estão em `.service-photo`, com degradê em `.fade-photo::after`. O comparativo de laser está em `.laser-comparison`, com as imagens completas e rótulos Antes/Depois.
- Trabalhos: o comentário `GALERIA` em `index.html` indica onde uma galeria adicional pode entrar. Os registros enviados já aparecem nos respectivos serviços.
- Formação: substituir `.education-art` por capa autorizada de demonstração da técnica, com link para o Reel aprovado.
- Usar arquivos originais autorizados, inclusive quando a publicação já estiver no Instagram. Fotos de clientes exigem autorização para o uso pretendido.
- Exportar WebP/AVIF com dimensões adequadas; informar `width` e `height`, legenda e `alt`. Imagens abaixo da primeira tela devem usar `loading="lazy"` e `decoding="async"`. O retrato principal não deve ser lazy-loaded.
- Registros de antes/depois precisam de contexto aprovado e da informação de que representam resultados individuais.

## Publicação

A publicação depende da aprovação da Kamila, conforme o briefing. A prévia contém `noindex, nofollow` de propósito. Consulte `APROVACAO.md` antes de qualquer envio para hospedagem.

Depois da aprovação: definir domínio, preencher URL canônica e `og:url`, adicionar imagem de compartilhamento autorizada com URL absoluta e `og:image:alt`, inserir a URL definitiva no LocalBusiness e remover `noindex`. Publicar somente os arquivos públicos; excluir os documentos internos e a cópia `PREVIA.html` da pasta de produção. Fazer uma última verificação dos links no domínio definitivo.

Sem formulário, conta, banco de dados, analytics ou pagamento no site. O agendamento é realizado diretamente pelo WhatsApp e a formação é consultada na Hotmart. O site não envia mensagens sozinho. As fontes são solicitadas ao Google Fonts; os demais serviços externos são abertos pelos botões.
