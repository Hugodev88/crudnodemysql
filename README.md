# Book Manager App 📚

Este é um projeto de gerenciamento de livros criado com Node.js, Express e MySQL, utilizando Handlebars como motor de templates. A aplicação permite inserir, visualizar, editar e remover livros de um banco de dados MySQL.

## 📂 Estrutura do Projeto

A estrutura de diretórios do projeto é a seguinte:

📦 Book Manager App 
├── 📂 db 
  │ └── conn.js # Configuração da conexão com o banco de dados MySQL 
├── 📂 node_modules # Dependências do Node.js 
├── 📂 public # Arquivos estáticos (CSS, imagens, etc.) 
  │ └── 📂 css │ └── style.css # Arquivo de estilo CSS 
├── 📂 views # Templates Handlebars
  │ ├── 📂 layouts 
    │ │ ├── main.handlebars # Layout principal 
  │ │ ├── book.handlebars # Página de detalhes de um livro 
  │ │ ├── books.handlebars # Página de listagem de livros 
  │ │ ├── editbook.handlebars # Página de edição de livro 
  │ │ └── home.handlebars # Página inicial
├── index.js # Arquivo principal da aplicação Node.js 
├── package-lock.json # Arquivo gerado automaticamente para bloquear as versões exatas das dependências instaladas 
├── package.json # Configuração do projeto e dependências


## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework web para Node.js.
- **Handlebars**: Motor de templates para gerar o HTML.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **CSS**: Estilização da aplicação.

## ⚙️ Funcionalidades

1. **Adicionar Livro**: Permite a inserção de um novo livro com título e quantidade de páginas.
2. **Listar Livros**: Exibe uma lista de todos os livros no banco de dados.
3. **Visualizar Detalhes**: Exibe informações detalhadas de um livro selecionado.
4. **Editar Livro**: Permite a edição de um livro existente.
5. **Remover Livro**: Remove um livro do banco de dados.

## 🛠️ Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Instale as dependências:
  ```bash
   

  
