📦 CSS Grid — Resumo Essencial


🧠 Conceito
Grid = sistema de layout baseado em linhas (rows) e colunas (columns)
Funciona como uma “tabela invisível” (tipo Excel)
Permite posicionar elementos em qualquer lugar da tela


👨‍👩‍👧 Estrutura

Container (pai) → recebe display: grid
Items (filhos) → elementos dentro do grid
.container {
  display: grid;
}


⚙️ Comportamento Importante
Ao aplicar display: grid:
Todos os filhos passam a ser controlados pelo grid
Até elementos inline (ex: <span>) se comportam como blocos
📐 Grid Automático
Sem configuração:
O grid cria linhas automaticamente (rows)
Cada elemento ocupa uma linha
🔀 grid vs inline-grid
Propriedade	Comportamento
grid	ocupa largura total (block)
inline-grid	ocupa só o conteúdo (inline), mas aceita propriedades de bloco

📌 Na prática: use quase sempre grid

🧩 Ideia Mental (IMPORTANTE)

Pense no grid como:

Uma prateleira dividida
Você decide:
Quantas colunas
Quantas linhas
Onde cada item vai ficar
Se ele ocupa 1 ou várias células


🏗️ Possibilidades

Com grid você consegue facilmente:

Header
Sidebar
Conteúdo principal
Footer

Tudo organizado e responsivo

🧠 Regra de Ouro

Primeiro entenda como o grid está dividido (linhas/colunas), depois posicione os elementos.