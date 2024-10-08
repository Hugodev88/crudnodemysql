# Book Manager App 📚

Este é um projeto de gerenciamento de livros criado com Node.js, Express e MySQL, utilizando Handlebars como motor de templates. A aplicação permite inserir, visualizar, editar e remover livros de um banco de dados MySQL.

## 📂 Estrutura do Projeto

A estrutura de diretórios do projeto é a seguinte:

Book Manager App 
- ├── db 
- │ └── conn.js
- ├── node_modules 
- ├── public 
- │ └── css │ └── style.css 
- ├── views  
- │ ├── layouts 
- │ │ └── main.handlebars
- │ ├── book.handlebars
- │ ├── books.handlebars 
- │ ├── editbook.handlebars 
- │ └── home.handlebars 
- ├── index.js 
- ├── package-lock.json
- └── package.json 

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
   npm install
3. Configure o banco de dados MySQL e ajuste a conexão no arquivo db/conn.js.

4. Inicie o servidor:
   ```bash
   npm start
5. Acesse a aplicação em http://localhost:3000.

## 🗄️ Configuração do Banco de Dados
A conexão com o banco de dados está configurada no arquivo db/conn.js. Certifique-se de configurar as credenciais do MySQL (usuário, senha, host e banco de dados).

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
