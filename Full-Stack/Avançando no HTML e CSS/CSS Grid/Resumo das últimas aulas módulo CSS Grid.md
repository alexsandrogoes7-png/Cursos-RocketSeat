## 📦 Shorthand `grid-template`

O `grid-template` é uma forma resumida (shorthand) de definir **areas, rows e columns em uma única propriedade**. Primeiro vêm as áreas (se houver), depois os valores das linhas (rows) e, após uma barra (`/`), os valores das colunas (columns). Isso permite montar todo o layout em uma única linha de código.

Na prática, você pode definir alturas específicas para linhas (ex: `80px 40px 50px`) e depois larguras de colunas (`80px 1fr 2fr`). O Grid então “fatia” o layout com base nesses valores, combinando partes fixas e flexíveis (`fr`).

Apesar de poderoso, esse shorthand é **raramente usado no dia a dia**, pois separar `rows` e `columns` costuma ser mais legível e fácil de manter.

---

## 📐 Introdução aos alinhamentos

O Grid possui **9 propriedades principais de alinhamento**, divididas entre container (pai) e items (filhos). Elas seguem um padrão: `align`, `justify` e `place`, combinadas com `content`, `items` e `self`.

A lógica principal é entender os eixos:

- `align` → eixo vertical (Y)
- `justify` → eixo horizontal (X)
- `place` → aplica os dois ao mesmo tempo

Essas propriedades permitem controlar tanto o posicionamento dos elementos dentro do grid quanto o posicionamento do próprio conteúdo dentro do espaço disponível.

---

## 📦 Alinhamentos `content`

`align-content` e `justify-content` controlam o **alinhamento do bloco inteiro de conteúdo dentro do grid**. Isso só faz diferença quando sobra espaço dentro do container.

Os principais valores são: `start`, `center`, `end`, além de distribuições como `space-between`, `space-around` e `space-evenly`. O `align-content` atua no eixo vertical, enquanto o `justify-content` atua no horizontal.

Já o `place-content` é um atalho que aplica ambos ao mesmo tempo, facilitando centralizações ou alinhamentos combinados.

---

## 🧩 Alinhamentos `items`

`align-items` e `justify-items` controlam **cada item individual dentro de sua célula**. Diferente do `content`, aqui você está mexendo nos elementos, não no bloco inteiro.

Por padrão, o comportamento é `stretch`, que faz o item ocupar todo o espaço disponível. Ao mudar para `start`, `center` ou `end`, o item volta a ter tamanho natural e pode ser posicionado dentro da célula.

O `place-items` combina os dois eixos ao mesmo tempo, sendo muito usado para centralizar elementos rapidamente.

---

## 🎯 Alinhamentos `self`

As propriedades `align-self` e `justify-self` permitem sobrescrever o alinhamento **de um único item específico**, ignorando o padrão definido no container.

Isso é útil quando apenas um elemento precisa ter um comportamento diferente dos demais, como ficar centralizado ou ir para um canto específico.

O `place-self` aplica os dois alinhamentos juntos, permitindo posicionamento preciso de um único item dentro do grid.

---

## ⚙️ Propriedades `grid-auto`

As propriedades `grid-auto-flow`, `grid-auto-rows` e `grid-auto-columns` controlam o comportamento **automático do Grid quando não definimos tudo manualmente**.

`grid-auto-flow` define a direção do fluxo (por padrão `row`, mas pode ser `column`). Já `auto-rows` e `auto-columns` permitem definir padrões repetitivos (tipo um loop) para tamanhos automáticos.

Apesar de úteis, essas propriedades são **menos usadas na prática**, sendo mais comuns em layouts dinâmicos ou responsivos.

---

## ⚖️ Grid vs Flexbox

Não existe “melhor” entre Grid e Flexbox — ambos resolvem problemas de layout. A escolha depende do que você domina e da complexidade do layout.

O Grid é mais indicado para layouts bidimensionais (linhas e colunas), enquanto o Flex é mais simples para layouts unidimensionais (linha ou coluna).

No fim, a regra é simples: **use o que resolve mais fácil**. Com experiência, a escolha fica intuitiva.