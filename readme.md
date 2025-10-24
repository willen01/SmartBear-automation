# 🐻 SmartBear Store - Automação de Testes

Este repositório faz parte da avaliação do Bootcamp promovido pelo Atlântico Avanti e tem como objetivo demonstrar a aplicação de testes automatizados em um ambiente real de e-commerce, utilizando a plataforma SmartBear Store.

O trabalho foi desenvolvido em equipe pelo Esquadrão 404, com foco em garantir a qualidade e confiabilidade das principais funcionalidades da aplicação, aplicando boas práticas de QA e automação de testes.

## Objetivo
Automatizar cenários de teste que validem fluxos essenciais do sistema, como login, cadastro, compra de produtos e validação de campos, contribuindo para a identificação de falhas e melhoria contínua da aplicação.

## Equipe - Esquadrão 404

Adriana Moreira: [Github](https://github.com/Adrianamoreira), [LinkedIn](https://www.linkedin.com/in/adriana-moreiranasc/)

Thomas Aquino: [Github](https://github.com/TMSTHOMAS), [LinkedIn](https://www.linkedin.com/in/thomas-santos92/)

Willen Santos: [Github](https://github.com/willen01), [LinkedIn](https://www.linkedin.com/in/willen-santos/)



## 📋 Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior) - [Download aqui](https://nodejs.org/)
- **npm** (geralmente vem com o Node.js)
- **Git** - [Download aqui](https://git-scm.com/)

## 🚀 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/willen01/SmartBear-automation.git
cd SmartBear-automation
```

2. **Instale as dependências:**
```bash
npm install
```

## 📂 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── login-tests/
│   │   └── login.tests.cy.js
│   ├── register-user-tests/
│   │   └── register-user.tests.cy.js
│   └── shopping-cart-tests/
│       └── shopping-cart.test.cy.js
├── fixtures/
│   └── example.json
├── pages/
│   ├── register-user-page/
│   │   └── register-user.page.js
│   └── shopping-cart-page/
│       └── shopping-cart.page.js
└── support/
    ├── commands.js
    └── e2e.js
```

## 🎯 Cenários de Teste Disponíveis

### 👤 Registro de Usuário
- ✅ Validação de campos obrigatórios vazios
- ✅ Tentativa de cadastro com e-mail já existente
- ✅ Cadastro com dados válidos

### 🛒 Carrinho de Compras
- ✅ Funcionalidades do carrinho de compras

### 🔐 Login
- ✅ Autenticação com credenciais válidas
- ✅ Autenticação com credenciais inválidas
- ✅ Envio de formulário de login vazio

## 🏃‍♂️ Como Executar os Testes

### 1. Modo Interativo (Cypress Test Runner)
Abre a interface gráfica do Cypress para executar os testes visualmente:

```bash
npx cypress open
```

## 🛠️ Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** `v15.5.0` - Framework de testes E2E
- **[Faker.js](https://fakerjs.dev/)** `v9.9.0` - Geração de dados fake para testes
- **JavaScript ES6+** - Linguagem de programação
- **Page Object Pattern** - Padrão de design para organização dos testes

## 🎨 Padrões de Design

### Page Object Model
Este projeto utiliza o **Page Object Pattern** para:
- ✅ Reutilização de código
- ✅ Manutenção facilitada
- ✅ Separação de responsabilidades
- ✅ Testes mais legíveis

Exemplo de uso:
```javascript
import RegisterUserPage from "../../pages/register-user-page/register-user.page.js";

const registerPage = new RegisterUserPage();
registerPage.visitRegisterPage()
          .fillFirstName('João')
          .fillLastName('Silva')
          .clickRegisterButton();
```

## 🌐 Site Testado

**URL Base:** https://bearstore-testsite.smartbear.com/

### Páginas Cobertas:
- 📝 **Registro:** `/register`
- 🔐 **Login:** `/login`
- 🛒 **Carrinho:** `/cart`
