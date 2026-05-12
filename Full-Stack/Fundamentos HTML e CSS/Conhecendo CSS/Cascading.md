# 🌊 Hierarquia e a Cascata (Cascading)

A "Cascata" é uma das regras mais fundamentais do CSS. Ela define qual estilo será aplicado quando existem regras conflitantes para o mesmo elemento.

### 🔝 A Regra da Ordem (Linha de Código)
Se você tiver dois seletores iguais aplicando a mesma propriedade, o navegador sempre dará prioridade à **última regra lida** (a que estiver mais abaixo no arquivo).

```css
p {
  color: violet;
}

p {
  color: blue; /* Esta regra vence porque vem depois */
}