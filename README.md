# Ryse Extension

**Ryse Extension** é uma ferramenta educacional projetada para automatizar o processo de registro em plataformas de apostas chinesas. Este projeto demonstra o uso de Webpack, TypeScript, e o padrão Strategy para preencher formulários de registro em diferentes sites.

## Índice

- [Ryse Extension](#ryse-extension)
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

## Visão Geral

A extensão do navegador Ryse foi projetada para:
- Automatizar o preenchimento de formulários de registro em plataformas de apostas.
- Suportar múltiplos layouts de formulários através de configuração dinâmica.
- Utilizar o padrão de projeto Strategy para lidar com diferentes sites.

## Funcionalidades

- **Geração de Dados de Usuário:**
  - Geração de nomes aleatórios, e-mails e senhas.
- **Preenchimento Automático de Formulários:**
  - Suporte a diferentes layouts de formulários de registro configuráveis.
- **Configurações Dinâmicas:**
  - Configurações de senha, como uso de caracteres especiais.
- **Bloqueio de Anúncios:**
  - Bloqueio de anúncios e pop-ups durante o preenchimento de formulários.
- **Persistência de Dados:**
  - Armazenamento e gerenciamento de dados de usuários registrados localmente.

## Instalação

### Clonando o Repositório

```bash
git clone https://github.com/yan-pi/ryse-extension.git
cd ryse-extension
```

### Instalando Dependências

Certifique-se de ter o [Yarn](https://classic.yarnpkg.com/en/docs/install/) instalado. Em seguida, instale as dependências do projeto:

```bash
yarn install
```

### Configuração

1. **Webpack e TypeScript:**
   - A configuração do Webpack e do TypeScript já está configurada no projeto. Ajuste conforme necessário no `webpack.config.js` e `tsconfig.json`.

2. **Layout Config:**
   - Adicione as configurações específicas de layout para diferentes sites no arquivo `static/layout-config.json`.

## Uso

### Compilando o Projeto

Para compilar a extensão para desenvolvimento, use:

```bash
yarn dev:chrome  # Para o Chrome
yarn dev:firefox # Para o Firefox
```

Para compilar o projeto para produção, use:

```bash
yarn build:chrome  # Para o Chrome
yarn build:firefox # Para o Firefox
```

### Instalando a Extensão no Navegador

1. Abra o navegador e vá para a página de extensões (chrome://extensions/ para Chrome, about:addons para Firefox).
2. Ative o modo de desenvolvedor (no Chrome) ou clique em "Instalar Complementos" (no Firefox).
3. Carregue a pasta `dist` como uma extensão descompactada.

### Configuração da Extensão

- **Interface do Usuário:**
  - Configure as opções de registro através da interface da extensão. Selecione o site e defina as preferências de senha.

## Estrutura do Projeto

```
├── src
│   ├── background
│   │   ├── index.ts          # Código principal para o background script
│   │   ├── models
│   │   │   ├── site-layouts.ts  # Tipos e interfaces para layouts de site
│   │   │   └── user.ts       # Interface do usuário
│   │   └── services
│   │       ├── registration-service.ts  # Serviço de registro
│   │       ├── storage-service.ts       # Serviço de armazenamento
│   │       └── user-service.ts          # Serviço de usuário
│   ├── content
│   │   └── index.ts          # Código para o script de conteúdo
│   ├── popup
│   │   └── index.ts          # Código para o script do popup
│   └── utils
│       ├── ad-blocker.ts     # Funções para bloqueio de anúncios
│       ├── email-generator.ts# Funções para geração de e-mails
│       ├── form-filler.ts    # Funções para preenchimento de formulários
│       ├── name-generator.ts # Funções para geração de nomes
│       └── password-generator.ts # Funções para geração de senhas
├── static
│   ├── assets                # Arquivos estáticos
│   ├── content
│   │   └── styles.css        # Estilos para o script de conteúdo
│   └── popup
│       ├── index.html        # HTML para a interface do popup
│       └── styles.css        # Estilos para a interface do popup
├── tsconfig.json             # Configuração do TypeScript
├── webpack.config.js         # Configuração do Webpack
└── yarn.lock                 # Dependências do projeto
```

## Contribuição

Contribuições são bem-vindas! Para contribuir, siga estas etapas:

1. Fork o repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/your-feature`).
3. Faça commit das suas alterações (`git commit -am 'Add some feature'`).
4. Push para a branch (`git push origin feature/your-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o [arquivo LICENSE](LICENSE) para mais detalhes.