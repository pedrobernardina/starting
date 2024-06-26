---
description: Aprenda como criar páginas na deco.cx sem precisar de código
---

Agora vamos criar uma nova página para o seu site. O processo é muito simples:

## 1. Acesse a aba de Páginas

Páginas têm um space dedicado no Admin do Deco.cx, acessível pela barra lateral.

![Space de páginas](/docs/getting-started/creating-a-new-page/pages-space.png)

Nesta página, você pode ver todas as páginas publicadas no site, junto com os caminhos pelos quais elas são acessíveis aos seus usuários.

Aqui você pode clicar no botão "Criar nova página" para criar uma página.

> Alternativamente, você pode clicar no botão "Criar página" na Página Inicial do Site ou digitar `/new page` na barra de comando localizada no topo central da página do Admin.

## 2. Dê um nome e um caminho à página

Preencha o formulário de criação de página com as seguintes informações:

- **Nome:** nome significativo para entender o que essa página representa. Não
  afeta a interface do usuário ou os metadados da página.
- **Path:** representa a URL que aquela página estará acessível para seus
  usuários. Pode ser estático (por exemplo: `/posts`) ou dinâmico (por exemplo:
  `/posts/:slug`, `/search/*`), seguindo o esquema
  [URLPattern](http://mdn.io/urlpattern).
- **Template** (opcional): selecione uma página já existente e comece a partir
  dela.

Aqui, vamos criar uma página em branco.

![Criando uma nova página](/docs/getting-started/creating-a-new-page/new-page.png)

## 3. Edite o conteúdo da página

Agora é possível editar e adicionar novas Sections disponíveis em seu site e configurar a página
do jeito que você quiser.

Para adicionar um novo componente à página, clique no botão "Adicionar Seções" no editor e explore todas as opções disponíveis. Seções são componentes de UI (pequenas partes do site) que podem receber propriedades e serem editadas através de um formulário no Admin.

![Adicionando uma seção](/docs/getting-started/creating-a-new-page/add-section.png)

> Se você deseja desenvolver/codar uma nova seção, consulte nosso
> [Guia de desenvolvimento](/docs/pt/developing/setup).

Vamos selecionar a seção Hero. 

![Seção Hero](/docs/getting-started/creating-a-new-page/hero.png)

Após a seleção, podemos ver o formulário onde podemos editar suas propriedades.
Essas propriedades são obtidas a partir das props do TypeScript dessa seção.

![Formulário da Seção](/docs/getting-started/creating-a-new-page/section-form.png)

> Nota: O exemplo que você vê acima é de um bloco reutilizável, que é um recurso global que pode ser usado por outras páginas. Por isso, você não pode editar essa seção a menos que a desanexe para alterar apenas nessa página ou a edite em um novo espaço (o que afetará todas as páginas que a utilizam).

Vamos desanexar a seção para editar suas propriedades para essa página.
Vamos mudar o Título na propriedade Title. À medida que você faz alterações, a pré-visualização será
atualizada em tempo real para mostrar como a seção ficará com os novos valores de propriedade.

![Mudando a Seção](/docs/getting-started/creating-a-new-page/changing-section.png)

Cada componente pode ter diferentes propriedades que podem ser personalizadas.
Essas propriedades são definidas no código da seção e podem ser
acessadas através do objeto props.