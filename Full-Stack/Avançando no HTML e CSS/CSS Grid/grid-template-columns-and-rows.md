📐 Resumo: CSS Grid Layout (Container)
O grid-template funciona como o "molde" do layout, definindo a estrutura de colunas e linhas.

1. Grid Template Columns (grid-template-columns)
Define a quantidade e a largura das colunas.

Valores Fixos: 100px 200px 300px; (Cria 3 colunas com tamanhos exatos).

Unidade de Fração (fr): Distribui o espaço de forma flexível.

1fr 1fr 1fr: Três colunas iguais.

1fr 3fr 1fr: A coluna central é 3x maior que as laterais.

Mix de Unidades: 100px 1fr 20%; (Mistura valores fixos, flexíveis e percentuais).

2. Grid Template Rows (grid-template-rows)
Define a altura das linhas.

Por padrão, a altura é o tamanho do conteúdo (auto).

Para usar frações (fr) em linhas, o container pai precisa de uma altura definida (ex: height: 100vh).

3. Atalhos e Funções Úteis
🔁 Função repeat()
Evita repetição de código ao criar padrões.

Uso: grid-template-columns: repeat(3, 1fr);

Resultado: Cria 3 colunas de 1 fração cada.

🔀 Comportamento Automático
Se o número de elementos exceder o número de colunas definidas, o Grid move o elemento automaticamente para uma nova linha.

Exemplo: Se definiu repeat(2, 1fr) e tem 4 divs, o Grid criará 2 linhas com 2 colunas cada.

🛠️ Dicas Práticas
Inspetor de Elementos: No navegador (F12), clique na label "grid" ao lado do elemento para visualizar as fatias e linhas guias.

Reset de Margem: Sempre use margin: 0 no body para evitar que o layout transborde (scroll) ao usar unidades como 100vh.