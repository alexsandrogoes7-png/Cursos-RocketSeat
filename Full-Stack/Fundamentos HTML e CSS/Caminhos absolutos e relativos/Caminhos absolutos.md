## Caminhos Absolutos

### 🌐 Na Web (URL)
- **O que é:** O endereço completo: `https://www.google.com`.
- **Regra:** Precisa do protocolo (`http://` ou `https://`).
- **Erro comum:** Colocar apenas `google.com`. O navegador achará que é uma pasta no seu PC.


### 💻 No PC (Protocolo File)
- **O que é:** O endereço total no seu HD: `file:///C:/Users/projeto/index.html`.
- **A Barra (`/`):** Representa o **Root** (a raiz do seu disco rígido).
- **Atenção:** Se você usar `href="/index.html"`, o código buscará o arquivo na raiz do sistema (fora da pasta do seu projeto), causando erro de "Arquivo não encontrado".