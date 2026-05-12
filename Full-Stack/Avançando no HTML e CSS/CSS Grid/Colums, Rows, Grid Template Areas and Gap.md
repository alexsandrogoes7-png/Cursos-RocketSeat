Posicionamento de Filhos (grid-column / grid-row)

	Para mover os elementos, trabalhamos com as propriedades dos filhos. O segredo é entender as linhas virtuais: se um grid tem 3 colunas, ele possui 4 linhas virtuais (as divisórias). Para um elemento ocupar as 3 colunas, ele deve ir da linha 1 até a 4.

  

	As propriedades grid-column e grid-row são atalhos para definir o início (start) e o fim (end). Por exemplo, grid-column: 1 / 3 faz o elemento ocupar duas colunas, começando na linha virtual 1 e parando na 3.

  

	Isso permite que você "estique" um header para ocupar toda a largura ou faça uma barra lateral ocupar toda a altura, sobrepondo o comportamento automático do grid.

  
Grid Template Areas

	Esta é a forma mais visual de organizar o layout. Em vez de lidar com números de linhas, você define um "mapa" no container pai usando a propriedade grid-template-areas. Você escreve nomes entre aspas que representam cada célula do grid.

  

	Para posicionar o conteúdo, você usa grid-area: nome_da_area no elemento filho. Se você nomeou uma linha inteira como "header header header", o elemento que receber a área header preencherá esse espaço automaticamente.

  

	Essa técnica é excelente para layouts complexos e responsivos, pois permite mudar toda a estrutura da página apenas alterando o desenho das palavras no container, sem mexer nos elementos individuais.

  

Espaçamento com Gap

	O gap (ou "espaço") é a propriedade que define a distância entre os elementos do grid. Ele é um shorthand para row-gap (espaço entre as linhas) e column-gap (espaço entre as colunas).

	  Diferente da margem tradicional, o gap é inteligente: ele só aplica espaço entre os itens. Não há necessidade de remover a margem do último elemento, pois ele não adiciona espaço nas bordas externas do container.

	  Para um acabamento profissional, é comum usar o gap para afastar os blocos internos e um padding no container principal para garantir que o conteúdo não encoste nas bordas da tela.