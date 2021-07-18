# Curso Origamid - [Redux com React](https://www.origamid.com/curso/redux-com-react/0101-redux-com-react/)

- [Introdução ao Redux](#introducao-ao-redux)
  - [Ferramentas](#ferramentas)
   - [Redux Toolkit](#reduxtoolkit)
   - [Redux DevTools](#reduxdevtools)
  - [Instalação](#instalacao)
- [Redux básico](#redux-basico)
  - [Store](#store)
  - [Action](#action)
  - [Dispatch](#dispatch)
  - [Subscribe e Unsubscribe](#subscribe-e-unsubscribe)
  - [CompínedReducers](#combinedReducers)
  - [Desafio Redux básico](redux-basico/desafio)
- [Middleware](#middleware)
  - [Curryng](#curryng)
  - [Redux Middleware](#redux-middleware)
  - [Redux Thunk](#redux-thunk)
  - [Middleware desafio](middleware/desafio)
- [Provider](#provider)
- [useSelect](#useSelector)
- [Redux Toolkit](#redux-toolkit)

## Introducao ao redux

[Redux](https://redux.js.org/) é um container de estado para aplicaçôes Javascript, ele ajuda a escrever aplicativos que se comportam de maneira consistente, são executados em ambientes diferentes (cliente, servidor e nativo) e são fáceis de testar.

O Redux se destaca por ser uma ferramenta debugável, flexível, e independente de ferramenta, que pode ser utilizada com Javascript Puro ou qualquer framework.

### Ferramentas

#### ReduxToolKit

[Redux Toolkit](https://redux-toolkit.js.org/) é a abordagem oficial recomendada para escrever lógica com redux. Ele possui todo o núcleo do Redux e contém pacotes e funcôes que são essenciais para a construção de um aplicativo Redux. O ReduxToolKit(RTK) se baseia nas melhores práticas sugeridas, simplifica a maioria das ratefas do Redux, evita erros comuns e torna mais fácil escrever aplicativos Redux.

Seja um desenvolvedor novado ou experiente, o Redux Toolkit pode ajudar a escrever um código melhor.

O Redux Toolkit está disponível como um pacote NPM, UML e CDN

    # NPM
    npm install @reduxjs/toolkit

    # Yarn
    yarn add @reduxjs/toolkit

#### ReduxDevTools

[Redux DevTools](https://addons.mozilla.org/pt-BR/firefox/addon/reduxdevtools/) é uma ferramenta que ajuda na visualização do fluxo de trabalho do Redux, ou qualquer outra arquitetura que controle a mudança de estado. Ele pode ser usado como uma extensão do navegaor (Chrome, Edge e Firefox), como um [aplicativo independente](https://github.com/zalmoxisus/remotedev-app) ou como [um componente React](https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools) integrado no aplicativo cliente.

### Instalacao

O Redux possui diversas formas de instalação, e padrões recomendados dependendo do tipo de aplicativo que será criado, por exemplo para criar aplicativos com React e Redux é usado os seguintes modelos juntamente com create-react-app: [Redux + JS](https://github.com/reduxjs/cra-template-redux) ou [Redux + TS](https://github.com/reduxjs/cra-template-redux-typescript), que aproveita a integração do Redux Toolkit e React Redux nos componentes React.

    # Redux + Plain JS template
    npx create-react-app my-app --template redux

    # Redux + TypeScript template
    npx create-react-app my-app --template redux-typescript

A biblioteca principal do Redux está disponível como um pacote no NPM para uso com um empacotador de módulo ou em um aplicativo node:

    # NPM
    npm install redux

    # Yarn
    yarn add redux

Também está disponível como um pacote UMD pré-compilado que define uma variavel window.Redux global. O pacote UMD pode ser usado diretamente no HTML na tag \<script> diretamente.

## Redux basico

Todo o estado global da aplicação é armazenado em uma arvore de objetos dentro de um único **Store** (armazenamento). A única maneira de alterar a árvore de estado global é criando uma **Action** (ação), e despachar (**dispatch**) esta ação.

Para especificar como o estado é atualizado em resposta a uma ação, é necessários criar funções redutoras (**reducers**) que calculam um novo estado com base no antigo estado e na ação.

### Store

Store é o estado global da aplicação, que guarda todo o armazenamento de estados da aplicação.

### Action

Para alterar o estado da aplicação, é necessário executar um método específico da instancia do Store, que é uma 'action'. Essa action é uma função que recebe dois parâmetros (state, callback).

A Action é passada como parâmetro na instancia do Store.

### Dispatch

Para executar uma action, é necessário executar o método 'dispatch' da instância de Store.

O método dispatch recebe como parâmetro um objeto com dois atributos (type: any, payload?: any)

### subscribe e unsubscribe

O metodo subscribe e unsubscribe, serve para 'observar' alterações no estado e retornar o novo valor atualizado, que foi setado depois de executar o 'dispatch'.

### combinedReducers

É utilizado para combinar varias funções redutoras de uma vez, vale lembrar que ao executa-lo, ele irá passar por todas as funções declaradas.

    function contador(state = 0, action) {
      switch (action.type) {
        case 'INCREMENTAR':
          return state + 1;
        case 'REDUZIR':
          return state - 1;
        default:
          return state;
      }
    }
    function modal(state = false, action) {
      switch (action.type) {
        case 'ABRIR':
          return true;
        case 'FECHAR':
          return false;
        default:
          return state;
      }
    }
    const reducer = Redux.combineReducers({ contador, modal });
    const store = Redux.createStore(reducer);

    const state = store.getState();
    console.log(state); // { contador: 0, modal: false }

## Middleware


## Provider

Para podermos ter acesso ao dispatch e a store dentro dos componentes de React, precisamos encapsular todo o aplicativo dentro do componente Provider que é disponibilizado pelo React-redux.

## useSelector

O hook  useSelector é utilizado para termos acesso ao estado do Redux em qualquer local da nossa aplicação.

## Redux Toolkit

A equipe do Redux identificou que boa parte do código criado para escrevermos o Redux, é sempre a mesma coisa. Para isso eles criaram um outro pacote (que eles aconselham a utilizar), onde boa parte da repetição, como a criação de constantes, action creator, configuração de devtools, immer, redux-thunk e outros já sçai feitos para você.

O toolkit pode ser utilizado sem o React. Ao instalar o mesmo não é necessário instalar o redux, apenas o react-redux.

> npm install @reduxjs/toolkit