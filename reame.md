# 🐻 SmartBear Store - Automação de Testes

Este projeto contém testes automatizados E2E (End-to-End) para o site **SmartBear Store** utilizando o framework **Cypress**.

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
- ✅ Funcionalidades de autenticação

## 🏃‍♂️ Como Executar os Testes

### 1. Modo Interativo (Cypress Test Runner)
Abre a interface gráfica do Cypress para executar os testes visualmente:

```bash
npx cypress open
```

### 2. Modo Headless (Linha de Comando)
Executa todos os testes em modo headless (sem interface gráfica):

```bash
npx cypress run
```

### 3. Executar Testes Específicos

**Executar apenas os testes de registro:**
```bash
npx cypress run --spec "cypress/e2e/register-user-tests/**"
```

**Executar apenas os testes de carrinho:**
```bash
cypress run --spec "cypress/e2e/shopping-cart-tests/**"
```

**Executar apenas os testes de login:**
```bash
cypress run --spec "cypress/e2e/login-tests/**"
```

### 4. Executar em Browsers Específicos

**Chrome:**
```bash
cypress run --browser chrome
```

**Firefox:**
```bash
cypress run --browser firefox
```

**Edge:**
```bash
cypress run --browser edge
```

## 📊 Relatórios e Evidências

### Videos e Screenshots
Por padrão, o Cypress gera:
- **Videos** dos testes executados em `cypress/videos/`
- **Screenshots** de falhas em `cypress/screenshots/`

### Configurações Adicionais
Para personalizar os relatórios, edite o arquivo `cypress.config.js`:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Configurações adicionais
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
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

## 📝 Scripts Disponíveis

Adicione estes scripts no `package.json` para facilitar a execução:

```json
{
  "scripts": {
    "test": "cypress run",
    "test:open": "cypress open",
    "test:register": "cypress run --spec 'cypress/e2e/register-user-tests/**'",
    "test:cart": "cypress run --spec 'cypress/e2e/shopping-cart-tests/**'",
    "test:login": "cypress run --spec 'cypress/e2e/login-tests/**'",
    "test:chrome": "cypress run --browser chrome",
    "test:firefox": "cypress run --browser firefox"
  }
}
```

Após adicionar os scripts, use:
```bash
npm run test           # Executa todos os testes
npm run test:open      # Abre o Cypress Test Runner
npm run test:register  # Executa apenas testes de registro
```

## 🐛 Resolução de Problemas

### Erro: "Cypress binary not found"
```bash
npx cypress install
```

### Erro de permissão no Linux/Mac
```bash
sudo npm install -g cypress
```

### Limpar cache do Cypress
```bash
npx cypress cache clear
npx cypress install
```

## 📞 Suporte

Para dúvidas ou problemas:
- 📧 **Email:** [seu-email@exemplo.com]
- 🐙 **GitHub Issues:** [Link para issues do repositório]
- 📚 **Documentação Cypress:** https://docs.cypress.io/

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ para testes automatizados de qualidade!** 🚀
