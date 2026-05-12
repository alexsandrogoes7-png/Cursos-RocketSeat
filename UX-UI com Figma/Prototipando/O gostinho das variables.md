## O gostinho das variables

## 1. Diferença entre Protótipo Comum vs. Variables
* **Modelo Tradicional:** Exige criar frames externos (pop-ups) e ligá-los com fios. Se houver 30 pop-ups, o arquivo vira uma "teia de aranha".
* **Modelo com Variables:** A pop-up pode estar dentro do próprio frame. Você controla a visibilidade (True/False) via variável, mantendo o arquivo limpo e organizado.

## 2. O Poder das Condicionais (If/Else)
As variáveis permitem criar regras de negócio reais no protótipo:
* **Exemplo de E-mail:** O botão de "Avançar" só habilita **SE** (`if`) o campo contiver "@".
* **Exemplo de E-commerce:** A pop-up de desconto só fecha **SE** (`if`) o usuário tiver mais de 2 itens no carrinho.
* **Cálculos:** É possível somar valores de produtos e aplicar cupons de desconto em tempo real.

## 3. Vantagens Estratégicas
* **Otimização de Espaço:** Reduz drasticamente a quantidade de telas/frames necessários no Figma.
* **Experiência do Usuário (UX):** Permite testes de usabilidade muito mais fiéis à realidade (o usuário pode digitar e receber erros reais).
* **Alinhamento com Devs:** Facilita a vida do programador, pois a lógica de variáveis do Figma é idêntica à lógica de código (Javascript/React).
