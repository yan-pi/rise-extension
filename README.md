# AutoForm Filler Extension (Rise Extension)

**Rise Extension** é uma ferramenta educacional projetada para automatizar o processo de preenchimento de formulários em várias plataformas online. Este projeto demonstra o uso de Webpack, TypeScript e uma abordagem modular para preencher formulários de registro em diferentes sites.

## Índice

- [AutoForm Filler Extension (Rise Extension)](#autoform-filler-extension-rise-extension)
  - [Índice](#índice)
  - [Visão Geral](#visão-geral)
  - [Funcionalidades](#funcionalidades)
  - [Instalação](#instalação)
    - [Clonando o Repositório](#clonando-o-repositório)
    - [Instalando Dependências](#instalando-dependências)
    - [Configuração](#configuração)
  - [Uso](#uso)
    - [Compilando o Projeto](#compilando-o-projeto)
    - [Instalando a Extensão no Navegador](#instalando-a-extensão-no-navegador)
    - [Configuração da Extensão](#configuração-da-extensão)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Contribuição](#contribuição)
  - [Licença](#licença)
  - [Todo:](#todo)

## Visão Geral

A extensão AutoForm Filler foi projetada para:
- Automatizar o preenchimento de formulários de registro em várias plataformas online.
- Suportar múltiplos layouts de formulários através de configuração dinâmica.
- Utilizar uma abordagem modular para lidar com diferentes sites.
- Demonstrar boas práticas de desenvolvimento de extensões de navegador usando TypeScript e Webpack.

## Funcionalidades

- **Geração de Dados de Usuário:**
  - Geração de nomes de usuário, e-mails e senhas aleatórios.
- **Preenchimento Automático de Formulários:**
  - Suporte a diferentes layouts de formulários de registro configuráveis.
- **Configurações Dinâmicas:**
  - Opções para usar senhas predefinidas ou geradas aleatoriamente.
- **Bloqueio de Anúncios:**
  - Opção para bloquear anúncios e pop-ups durante o preenchimento de formulários.
- **Interface de Usuário Simples:**
  - Pop-up intuitivo para configuração e ativação da extensão.

## Instalação

### Clonando o Repositório

```bash
git clone https://github.com/yan-pi/rise-extension.hit
cd rise-extension
```

### Instalando Dependências

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados. Em seguida, instale as dependências do projeto:

```bash
yarn
```

### Configuração

1. **Webpack e TypeScript:**
   - A configuração do Webpack e do TypeScript já está definida no projeto. Ajuste conforme necessário no `webpack.config.js` e `tsconfig.json`.

2. **Layout Config:**
   - Adicione as configurações específicas de layout para diferentes sites no arquivo `src/config/site-layouts.ts`.

## Uso

### Compilando o Projeto

Para compilar a extensão para desenvolvimento, use:

```bash
yarn run dev
```

Para compilar o projeto para produção, use:

```bash
yarn run build
```

### Instalando a Extensão no Navegador

1. Abra o Chrome e vá para `chrome://extensions/`.
2. Ative o "Modo do desenvolvedor" no canto superior direito.
3. Clique em "Carregar sem compactação" e selecione a pasta `dist` do projeto.

### Configuração da Extensão

- **Interface do Usuário:**
  - Configure as opções de preenchimento através da interface pop-up da extensão. Selecione o layout do site e defina as preferências de senha.

## Estrutura do Projeto

```
├── package.json
├── README.md
├── src
│   ├── background.ts
│   ├── config
│   │   └── site-layouts.ts
│   ├── content
│   │   ├── adblocker.ts
│   │   ├── content.ts
│   │   ├── form-filler.ts
│   │   └── message-listener.ts
│   ├── handlers
│   │   ├── deposit-button-handler.ts
│   │   └── span-button-handler.ts
│   ├── interfaces
│   │   ├── enum-logger.ts
│   │   ├── plugin-interface.ts
│   │   ├── site-layout-interface.ts
│   │   └── userdata-interface.ts
│   ├── manifest.json
│   ├── plugins
│   │   └── adblock-plugin.ts
│   ├── popup
│   │   ├── background-communication.ts
│   │   ├── popup.css
│   │   ├── popup.html
│   │   ├── popup.ts
│   │   └── setup
│   │       ├── adblocker.ts
│   │       ├── elements.ts
│   │       ├── event-listeners.ts
│   │       ├── index.ts
│   │       ├── initial-state.ts
│   │       └── popup-message-handlers.ts
│   └── utils
│       ├── data-generator.ts
│       ├── decoder-selector.ts
│       ├── element-selectors.ts
│       ├── generators
│       │   ├── generate-cpf.ts
│       │   ├── generate-email.ts
│       │   ├── generate-firstname.ts
│       │   ├── generate-genericdata.ts
│       │   ├── generate-lastname.ts
│       │   ├── generate-phonenumber.ts
│       │   ├── generate-random-password.ts
│       │   ├── generate-realname.ts
│       │   └── generate-username.ts
│       └── logger.ts
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
```

## Contribuição

Contribuições são bem-vindas! Para contribuir, siga estas etapas:

1. Fork o repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/sua-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona alguma feature'`).
4. Push para a branch (`git push origin feature/sua-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## Todo:
- [ ] Adjust the codebase to use Auth and JWT
- [ ] Study design patterns to made the codebase consistent
- [ ] Add more plugins to handle different sites
- [ ] Adjust the codebase to use OCP principles and SOLID principles