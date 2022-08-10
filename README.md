# Desafio ExactaWorks

Este desafio consiste na elaboração de um aplicativo simples de uma tela cadastro de registros em uma lista e uma tela de exibição para esta lista.

## Início do Desenvolvimento 

Foi utilizado framework ReactJs mas optado em utilizar typescript por questões semânticas. Para manipulação CSS foi utilizado styled components e 
para elaboração de componentes foi utilizado Material-UI, essas foram as decisões iniciais para elaboração do projeto elaborado ao seguir.

### Inputs de Cadastro

O desenvolvimento dos inputs rodou todo ao redor do Material UI, utilizando TextInput, DataPicker, Select e Radio, fora os componentes de visualização 
e organização (Como Card, MenuItem, FormControl, TabList, etc). Foi realizado a implementação padrão dos componentes de Rg, Data de expedição e Gênero, a primeira etapa mais técnica do projeto foi o processo de popular o Select com dados tirados de um Json estático por meio de um request Ajax.

### Popular Select de orgão emissor

Para criarmos a lista foi utilizado os hooks useState e useEffect para fazer o request. Para a chamada http foi escolhido o axios
para realizar o request ajax em nosso useEffect, armazenando na list do useState e utilizando sua label para identificação no select
e o value para a função setFieldValue utilizada na biblioteca Formik para o controle de estado do formulário

### Utilização do Formik

Ao iniciar a etapa de desenvolvimento do comportamento dos botões, foi mais favorável a utilização do Formik, uma biblioteca que monitora o estado do formulário,
desta forma sendo utilizado no Submit do cadastro, o erro de validação, onBlur na validação, setar valores e valores iniciais(utilizado no edit), para este controle foi
elabora a interface Cadastro com a estrutura do objeto de cadastro a ser enviado no onSubmit.

### Submit para MockApi

Como a api agora é utilizada diversas verses durante durante o projeto foi criada uma instância separada com uma baseurl acessada toda vez que a api for necessária. 
No Submit do Formik é realizado a validação e o request POST para api e o redirecionamento para a tela de listagem.

### Roteamento e tela de listagem básica

Como antes citado brevemente anteriormente, a organização do app consiste em uma Home que importa CadastroForm e Lista como Tabs, então foi considerado inicialmente
utilizar react-router-dom mas com esta organização de aplicativo foi mais eficiente utilizar um useState no componente pai que controla o estado de exibição das tabs, então quando
necessário o roteamento pelos componentes filhos é acessada a função setTabs do componente pai.

Ao chegar na tela Lista é utilizado um useEffect para acesso a api assim que o componente é criado e salvar a lista que os itens são exibidos em ListGrids com overflow juntamente com um botão de editar e deletar, salvando id para identificação.

### Botão de deletar e Dialog

Ao escolher o botão de deletar de determinado item na lista, é utillizado um state para controle de um Dialog que é
uma tela de confirmação que se confirmado irá fazer a solicitação de delete utilizando o id salvo, assim atualizando a
lista na api e a página atualizando a visualização.

### Botão de edição e Redux

Ao desenvolver o botão de editar, poderia ser feito utilizando a mesma estratégia do roteamento, com um estado no componente Home para receber o id e realizar um fidbyId na
api na tela de cadastro, mas foi preferível utilizar o Redux para maior complexidade do aplicativo, demonstrar dominio e apresentar um aplicativo com melhor arquitetura.
Desta forma foi desenvolvido a Store que utiliza do reducer e as actions do dispatcher para dar estado global ao estado de edição, agora ao se carregar a tela de cadastro
é observado vários acessos à initialValues que é um objeto de valores acessados pelo useSelector, caso um cadastro seja selecionado para edição este é incorporado como este objeto,
então ao verificar o estado de edição é verificado este objeto que é incorporado para edição e alterado a organização de botões e a chamada da api para Put, ainda utillizando a interface e id para identificação.

### Bibliotecas



### TODO
### Testes
### PixelPerfect
### Tela Lista Mobile-Friendly
