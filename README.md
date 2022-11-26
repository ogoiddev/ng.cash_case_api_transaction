## Para rodar o projeto localmente clone este repositório acesse a pasta e execute o comando:
```
docker compose up -d
```

* O Front-end vai abrir em = http://localhost:3000/

* Crie seu login para navegar!

* Voce vai precisar de ter instalado o Docker e Docker Compose na sua maquina.
_______________________________________________________

## Tela de Login / Register - [Para ver o esboço clique aqui para acessar a primeira pagina. (Funcionalidades em andamento)](https://ng-cash-case-api-transaction.vercel.app/)

![Screenshot](https://github.com/ogoiddev/ng.cash_case_api_transaction/blob/main/frontend/public/register_Screenshot%202022-11-22%20193535.jpg?raw=true)

_______________________________________________________
## Tela de Balance

![Screenshot](https://github.com/ogoiddev/ng.cash_case_api_transaction/blob/main/frontend/public/balance_Screenshot%202022-11-22%20222531.jpg?raw=true)


_______________________________________________________

## Histórico  

![Screenshot](https://github.com/ogoiddev/ng.cash_case_api_transaction/blob/main/frontend/public/history_Screenshot%202022-11-22%20222433.jpg?raw=true)


_______________________________________________________

## Setup Front-end

### [Vite](https://vitejs.dev/guide/why.html) 

* Utilizamos Vite para cria um projeto React em busca de melhor performance

```
npm create vite@latest
```

| go like:
| :---
|  Need to install the following packages:
|  create-vite@3.1.0
|  Ok to proceed? (y) y
|  ✔ Project name: … web
|  ✔ Select a framework: › React
|  ✔ Select a variant: › TypeScript


## [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)

## [React Currency Input Field Component](https://www.npmjs.com/package/react-currency-input-field)

## [Styled-components](https://styled-components.com/docs/api#typescript)
```
npm install --save styled-components
```
```
npm install --save-dev @types/styled-components
```

## [@media Setup - Styled-components](https://www.mariokandut.com/how-to-use-media-queries-in-styled-components/)


_______________________________________________________


## Setup inicial do Back-end

* Utilizamos a referencia de um Boilerplate de projeto TS com o ESLint da Trybe e Debugger configurados

<details><summary>Instruções</summary>
<p>

### Boilerplate de projeto TS

Este projeto é uma demonstração de como iniciar um projeto com typescript com o ESLint da Trybe e Debugger configurados.

* Passo a Passo
 - Setup:

Iniciar o projeto ```npm init -y```

Instalar ```npm i -D typescript ts-node @types/node```

Iniciar o tsconfig.json com ```npx tsc --init```

Crie o arquivo inicial

```mkdir src && touch src/index.ts```
Criar o script start

No package.json, na chave scripts, adicione ```"start": "ts-node src/index.ts"```
Copiar dependências do eslint na chave devDependencies do package.json

```ruby
"eslint": "^7.32.0",
"eslint-config-airbnb-base": "^15.0.0",
"eslint-config-airbnb-typescript": "^15.0.0",
"eslint-plugin-editorconfig": "^3.2.0",
"eslint-plugin-import": "^2.25.3",
"eslint-plugin-mocha": "^9.0.0",
"eslint-plugin-sonarjs": "^0.10.0"
```

Executar npm i para instalar as dependências copiadas

Criar o arquivo .eslintrc.json com o seguinte conteúdo:

```ruby
{
  "root": true,
  "env": {
      "browser": false,
      "node": true,
      "es2021": true,
      "jest": true
  },
  "extends": [
      "plugin:@typescript-eslint/recommended",
      "airbnb-base",
      "plugin:editorconfig/noconflict",
      "plugin:mocha/recommended",
      "airbnb-typescript/base"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 2019,
      "sourceType": "module",
      "project": "./tsconfig.json"
  },
  "plugins": [
      "@typescript-eslint",
      "sonarjs",
      "editorconfig",
      "mocha"
  ],
  "rules": {
      "no-underscore-dangle": "off",
      "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
      "@typescript-eslint/lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
      "no-console": "off",
      "camelcase": "warn",
      "arrow-parens": [
          2,
          "always"
      ],
      "quotes": [
          2,
          "single"
      ],
      "implicit-arrow-linebreak": "off",
      "consistent-return": "off",
      "no-unused-vars": [
          "error",
          {
              "argsIgnorePattern": "^_",
              "ignoreRestSiblings": true
          }
      ],
      "object-curly-newline": "off",
      "max-params": [
          "error",
          4
      ],
      "max-lines": [
          "error",
          250
      ],
      "max-lines-per-function": [
          "error",
          {
              "max": 20,
              "skipBlankLines": true,
              "skipComments": true
          }
      ],
      "max-len": [
          "error",
          {
              "code": 100
          },
          {
              "ignoreComments": true
          }
      ],
      "complexity": [
          "error",
          5
      ],
      "import/no-extraneous-dependencies": [
          "off"
      ],
      "sonarjs/cognitive-complexity": [
          "error",
          5
      ],
      "sonarjs/no-one-iteration-loop": [
          "error"
      ],
      "sonarjs/no-identical-expressions": [
          "error"
      ],
      "sonarjs/no-use-of-empty-return-value": [
          "error"
      ],
      "sonarjs/no-extra-arguments": [
          "error"
      ],
      "sonarjs/no-identical-conditions": [
          "error"
      ],
      "sonarjs/no-collapsible-if": [
          "error"
      ],
      "sonarjs/no-collection-size-mischeck": [
          "error"
      ],
      "sonarjs/no-duplicate-string": [
          "error"
      ],
      "sonarjs/no-duplicated-branches": [
          "error"
      ],
      "sonarjs/no-identical-functions": [
          "error"
      ],
      "sonarjs/no-redundant-boolean": [
          "error"
      ],
      "sonarjs/no-unused-collection": [
          "error"
      ],
      "sonarjs/no-useless-catch": [
          "error"
      ],
      "sonarjs/prefer-object-literal": [
          "error"
      ],
      "sonarjs/prefer-single-boolean-return": [
          "error"
      ],
      "sonarjs/no-inverted-boolean-check": [
          "error"
      ]
  }
}
```
</p>
</details>

## Principais dependências:

* NodeJs
* Express
* Postgres
* Cors
* TypeORM
* Class Validator
* TypeScript


## [TypeORM - Postgres Driver and Docker Compose tags auto-config](https://typeorm.io/)

```
npm install typeorm --save
```
You need to install reflect-metadata shim:
```
npm install reflect-metadata --save
```
```
npm install @types/node --save-dev
```

cli command to pre-config (Atenção este comando gera arquivos automaticamente):
```
npx typeorm init --database postgres --docker
```

Criamos um script para facilitar e gerar migrations pela Entity definida:
```
"scripts": {
    "dev": "ts-node --transpile-only src/api/index.ts",
    "start": "ts-node src/api/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1",
    "mi:generate": "typeorm-ts-node-commonjs -d ./src/database/data-source.ts migration:generate ./src/database/migrations/default",
    "mi:run": "typeorm-ts-node-commonjs -d ./src/database/data-source.ts migration:run"
```

## [Class Validator](https://www.npmjs.com/package/class-validator)
```
npm i class-validator
```

## [Cors](https://brianflove.com/2017-03-22/express-cors-typescript/)
```
npm install cors --save
```
```
npm install @types/cors --save-dev
```




* Aplicamos bastante código com muita paixão aqui. Obrigado pela visita!
