# Lista de Documentários

## Objetivo
Esta aplicação foi desenvolvida para gerenciar uma lista de documentários, abordando conceitos de componentes, props e hooks utilizando a biblioteca React.

## Estrutura do Projeto
O projeto está organizado da seguinte forma:

/src
    /components
        ExibeDocumentario.jsx
        Documentario.jsx
App.js
index.js
App.css
README.md

## Componentes

### `App.js`
O componente principal da aplicação que gerencia o estado dos documentários e define as funções para adicionar, editar e remover documentários.

- **Estado (`useState`)**: 
  - `documentaries`: Array que contém a lista de documentários.
  - `currentDocumentary`: Documentário que está sendo editado.

- **Funções**:
  - `addDocumentary`: Adiciona um novo documentário ou atualiza um existente.
  - `editDocumentary`: Define o documentário atual para edição.
  - `removeDocumentary`: Remove um documentário da lista.

- **Renderização**:
  - Renderiza o componente `Documentario` passando as funções `addDocumentary` e o `currentDocumentary`.
  - Renderiza o componente `ExibeDocumentario` passando a lista de documentários, e as funções `editDocumentary` e `removeDocumentary`.

### `ExibeDocumentario.jsx`
Componente que exibe a lista de documentários. Recebe a lista de documentários e as funções de edição e remoção como props.

- **Props**:
  - `documentaries`: Array com a lista de documentários.
  - `editDocumentary`: Função para editar um documentário.
  - `removeDocumentary`: Função para remover um documentário.

- **Renderização**:
  - Mapeia a lista de documentários para exibição, com botões para editar e remover cada documentário.

### `Documentario.jsx`
Componente que gerencia o formulário para adicionar e editar documentários. Mantém o estado do formulário e lida com o envio para adicionar novos documentários ou atualizar um existente.

- **Estado (`useState`)**:
  - `title`: Título do documentário.
  - `description`: Descrição do documentário.

- **Efeito (`useEffect`)**:
  - Atualiza os campos do formulário quando um documentário é selecionado para edição.

- **Função**:
  - `handleSubmit`: Lida com o envio do formulário para adicionar ou atualizar um documentário.

- **Renderização**:
  - Renderiza um formulário com campos para título e descrição, e um botão para enviar.

### `index.js`
Ponto de entrada da aplicação React. Renderiza o componente `App`.

### `App.css`
Arquivo CSS básico para estilização da aplicação.

## Instruções de Instalação e Uso

1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/lorenzosprenger/listaDocumentarios.git
    
    cd lista-documentarios
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Execute a aplicação:
    ```bash
    npm start
    ```

4. Acesse a aplicação no navegador:
    ```
    http://localhost:3000
    ```


## Estilo e Layout
A aplicação utiliza CSS básico para estilização e é responsiva, adaptando-se bem a diferentes tamanhos de tela.

---

Este projeto foi desenvolvido como parte de um trabalho individual para aprender e aplicar conceitos de React.
