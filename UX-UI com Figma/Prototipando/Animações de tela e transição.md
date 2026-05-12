## Animações de tela e transição

## 1. Animação de Entrada
* **Técnica:** Componente + Variante. No **Estado 1**, objeto reduzido (tecla **K**) ou fora da tela. No **Estado 2**, posição final.
* **Gatilho:** *After Delay* (ex: 200ms) com *Smart Animate* (600ms).
* **Performance:** Se vetores/sombras travarem a animação, exporte como **Imagem (PNG)** e reimporte para ganhar fluidez.

## 2. Navegação e Scroll
* **Fixed (Fixo):** Menu trava no topo enquanto o conteúdo rola. Ativado em *Prototype > Position*.
* **Sticky (Pegajoso):** O elemento rola até o topo e "gruda" lá (ex: abas de categorias).
* **Dica de UX:** Use fundo sólido ou blur no menu fixo para não misturar com o texto da página durante a rolagem.

## 3. Ajuste Rápido
* Clique na linha de conexão azul em *Prototype* para trocar gatilhos (*Click* por *Hover*) ou tempos de transição.