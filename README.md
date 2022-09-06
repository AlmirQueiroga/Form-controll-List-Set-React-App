
![Capturar](https://user-images.githubusercontent.com/28552417/183964346-4e303493-f539-4a5b-8a62-5e8f7b783efd.PNG)


## Início do Desenvolvimento 

Foi utilizado framework ReactJs mas optado em utilizar typescript por questões semânticas. Para manipulação CSS foi utilizado styled components e 
para elaboração de componentes foi utilizado Material-UI, essas foram as decisões iniciais para elaboração do projeto elaborado ao seguir.

![image](https://user-images.githubusercontent.com/28552417/183965860-e1fddc4b-032b-4780-8031-73945c00f472.png)


### Inputs de Cadastro

O desenvolvimento dos inputs rodou todo ao redor do Material UI, utilizando TextInput, DataPicker, Select e Radio, fora os componentes de visualização 
e organização(Como Card, MenuItem, FormControl, TabList, etc), principalmente na Home que organiza os componentes. Foi realizado a implementação padrão dos componentes de Rg, Data de expedição e Gênero, a primeira etapa mais técnica do projeto foi o processo de popular o Select com dados tirados de um Json estático por meio de um request Ajax.

![image](https://user-images.githubusercontent.com/28552417/183966646-cca3523b-d28e-42f2-9c8c-681e557da713.png)

![image](https://user-images.githubusercontent.com/28552417/183969758-bd3ef9f2-e512-493b-acd6-92f7331b8a08.png)



### Popular Select de orgão emissor

![image](https://user-images.githubusercontent.com/28552417/183970507-475bc3f6-8748-4081-b39d-7fb53b6e3f8f.png)


![image](https://user-images.githubusercontent.com/28552417/183970202-5764ac29-e3d8-4a2b-9d9f-eb31e0574f78.png)


Para criarmos a lista foi utilizado os hooks useState e useEffect para fazer o request. Para a chamada http foi escolhido o axios
para realizar o request ajax em nosso useEffect, armazenando na list do useState e utilizando sua label para identificação no select
e o value para a função setFieldValue utilizada na biblioteca Formik para o controle de estado do formulário.

![image](https://user-images.githubusercontent.com/28552417/183967610-5a72fac5-ff96-4486-9c0c-d1f139faed11.png)


### Utilização do Formik

Ao iniciar a etapa de desenvolvimento do comportamento dos botões, foi mais favorável a utilização do Formik, uma biblioteca que monitora o estado do formulário,
desta forma sendo utilizado no Submit do cadastro, o erro de validação, onBlur na validação, setar valores e valores iniciais(utilizado no edit).

![image](https://user-images.githubusercontent.com/28552417/183968456-780a6e2f-67c0-4644-8845-f8ae63f7d7d5.png)

para este controle foi elabora a interface Cadastro com a estrutura do objeto de cadastro a ser enviado no onSubmit.

![image](https://user-images.githubusercontent.com/28552417/183968774-6e10e1a1-5696-46f1-977d-c1a453d6e98b.png)

![image](https://user-images.githubusercontent.com/28552417/183969038-170deb1f-0f84-4cab-a185-c00b7b1dfc69.png)


### Submit para MockApi

Como a api agora é utilizada diversas vezes durante durante o projeto foi criada uma instância separada com uma baseurl acessada toda vez que a api for necessária. 

![image](https://user-images.githubusercontent.com/28552417/183971539-ff5a4223-0266-4149-9cf1-9dd9d7ceb61b.png)

No Submit do Formik é realizado a validação e o request POST para api e o redirecionamento para a tela de listagem.

![image](https://user-images.githubusercontent.com/28552417/183972096-4ad044be-dbfb-4751-8b6d-783525b64758.png)

![image](https://user-images.githubusercontent.com/28552417/183970919-d7d4be77-3b09-4571-a683-3b7e37b9cbe2.png)

### Roteamento e tela de listagem básica

Como antes citado brevemente anteriormente, a organização do app consiste em uma Home que importa CadastroForm e Lista como Tabs, então foi considerado inicialmente
utilizar react-router-dom mas com esta organização de aplicativo foi mais eficiente utilizar um useState no componente pai que controla o estado de exibição das tabs, então quando necessário o roteamento pelos componentes filhos é acessada a função setTabs do componente pai.

![image](https://user-images.githubusercontent.com/28552417/183972556-332f76a1-4d9b-49f1-9377-d9540eddaac9.png)
![image](https://user-images.githubusercontent.com/28552417/183972630-7a2fe83d-ec32-4969-a838-c0f29d0396f1.png)

Ao chegar na tela Lista é utilizado um useEffect para acesso a api assim que o componente é criado e salvar a lista que os itens são exibidos em ListGrids
juntamente com um botão de editar e deletar, salvando id para identificação.

![image](https://user-images.githubusercontent.com/28552417/183973297-9ac7be52-b1b8-43e7-a32d-3c03363629e4.png)
![image](https://user-images.githubusercontent.com/28552417/183973391-116eba1b-ec6e-43d6-a5fa-00162b426bad.png)
![image](https://user-images.githubusercontent.com/28552417/183973493-5c9546dc-7fd4-4bb9-ba3c-d050b9895860.png)


### Botão de deletar e Dialog

![image](https://user-images.githubusercontent.com/28552417/183973651-8c30ccf4-2310-45a7-b1a2-d4a5db218bb8.png)

Ao escolher o botão de deletar de determinado item na lista, é utillizado um state para controle de um Dialog que é
uma tela de confirmação que se confirmado irá fazer a solicitação de delete utilizando o id salvo, assim atualizando a
lista na api e a página atualizando a visualização.

![image](https://user-images.githubusercontent.com/28552417/183973748-2b8bdc95-26c8-4e0f-bfcd-fc44cec60bc7.png)
![image](https://user-images.githubusercontent.com/28552417/183973847-6d685c35-23c4-454c-9a2a-2b7f7a0b1f1e.png)


### Botão de edição e Redux

Ao desenvolver o botão de editar, poderia ser feito utilizando a mesma estratégia do roteamento, com um estado no componente Home para receber o id e 
realizar um fidbyId na api na tela de cadastro, mas foi preferível utilizar o Redux para maior complexidade do aplicativo, demonstrar dominio e apresentar um aplicativo com melhor arquitetura. 

![image](https://user-images.githubusercontent.com/28552417/183974148-5feb18df-94cd-4379-a555-4e91d5ae4437.png)

Desta forma foi desenvolvido a Store que utiliza do reducer e as actions do dispatcher para dar estado global ao estadode edição,
agora ao se carregar a tela de cadastro é observado vários acessos à initialValues que é um objeto de valores acessados pelo useSelector,
caso um cadastro seja selecionado para edição este é incorporado como este objeto, então ao verificar o estado de edição é verificado este 
objeto que é incorporado para edição e alterado a organização de botões e a chamada da api para Put, ainda utillizando a interface e id para identificação.

![image](https://user-images.githubusercontent.com/28552417/183974626-b5d95121-d0de-4c00-8676-f2af0e17a382.png)
![image](https://user-images.githubusercontent.com/28552417/183974822-581e9b72-5ddd-4ab1-976f-fd6bd0521b36.png)
![image](https://user-images.githubusercontent.com/28552417/183974751-7a4762c6-e71f-412c-85d3-50d01c381646.png)
![image](https://user-images.githubusercontent.com/28552417/183974548-ef6f522c-de4a-4063-88ea-4a021477c2d1.png)

### Testes

Foi realizada implementação de testes de exibição das labels na tela de listagem e adicionado labels de data-testid

![image](https://user-images.githubusercontent.com/28552417/184072233-0a9ab9f5-e6cb-450b-a581-8ee1be0b4ce3.png)

Foi iniciado implementação de testes de formulário na tela de cadastro utilizando jest

![image](https://user-images.githubusercontent.com/28552417/184072519-39704e15-13bb-4e17-97c1-a7b5ea087cd5.png)


### Bibliotecas

@emotion/react: 11.10.0
@emotion/styled: 11.10.0
@mui/icons-material: 5.8.4
@mui/lab: 5.0.0-alpha.93
@mui/material: 5.9.3
@mui/x-date-pickers: 5.0.0-beta.4
@reduxjs/toolkit: 1.8.4
@testing-library/jest-dom: 5.16.5
@testing-library/react": 13.3.0
@testing-library/user-event: 13.5.0
@types/jest: 27.5.2
@types/node: 16.11.47
@types/react: 18.0.15
@types/react-dom: 18.0.6
axios: 0.27.2
date-fns: 2.29.1
formik: 2.2.9
react: 18.2.0
react-dom: 18.2.0
react-redux: 8.0.2
react-router-dom: 6.3.0
react-scripts: 5.0.1
redux: 4.2.0
redux-thunk: 2.4.1
typescript: 4.7.4
web-vitals: 2.1.4
yup: 0.32.11
