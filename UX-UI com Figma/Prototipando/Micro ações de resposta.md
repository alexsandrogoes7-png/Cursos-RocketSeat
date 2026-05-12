## Micro ações de resposta


## 1. Importância do Feedback
* **Objetivo:** Orientar a conversão e informar a localização do usuário na página.
* **Exemplos:** Mudança de cor em botões (CTA), ícones que se movem ou barras que surgem no *hover*.

## 2. Configuração Técnica (Smart Animate)
Para criar transições suaves entre estados:
* **Estrutura de Frame:** O objeto deve estar dentro de um frame (com *Clip Content* ativado) para que elementos "escondidos" possam entrar na área visível sem quebrar o layout.
* **Componentes e Variantes:** Crie o estado inicial (ex: botão padrão) e a variante final (ex: botão com cor diferente ou seta deslocada).
* **Nomenclatura:** Os itens dentro das variantes **devem ter o mesmo nome** para que o Figma reconheça a evolução da forma e anime corretamente.

## 3. Aplicações Práticas
* **Botão CTA:** Ao passar o mouse (*While Hovering*), a cor do gradiente muda e a seta de ação se desloca levemente para a direita.
* **Cards de Imagem:** Uma tarja informativa "sobe" de fora do frame para dentro da imagem ao interagir com o cursor.
* **Strokes:** Evite alterar a espessura do *stroke* (ex: de 1 para 2) durante a animação, pois o Figma pode gerar um efeito de "piscar" em vez de uma transição fluida.

## 4. Benefícios
* Melhora a retenção do usuário na página.
* Cria uma interface mais "viva" e responsiva às ações humanas.