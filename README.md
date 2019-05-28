# Ruptiva - Code Challenge Front-end

## Introdução

Este é um desafio criado pela empresa Ruptiva, que tem o intuito de averiguar as habilidades dos participantes e possiveis contratados da empresa.

A aplicação consistem em um formulário simples para cadastro de pessoas (Fisicas e Jurídicas) e disponibilizar uma lista para visualização dos registros cadastrados.

## Principais ferramentas utillizadas

- Firebase/Firestore
- React Native
  
  **Algumas tecnologias e bibliotecas utilizadas:**
- Hooks
- Styled Components
- React Native Animated


## Processo de desenvovimento

O processo consistiu em duas partes principais, a criação das telas e componentes renderizaveis da aplicação, e a configuração e acoplamneto do Firebase. 

## Resultado

<Image src='https://i.imgur.com/ROpxEPD.png'>
<Image src='https://i.imgur.com/0kKKX7t.png'>
<Video src='https://i.imgur.com/m9IsNPT.gifv'>

## Dificuldades e problemas encontrados

Ao decorrer do desenvolvimento da aplicação aconteceram alguns problemas, que podem se resumir em dois.

 ### A dificuldade de desenvolver o projeto utilizando o Snack

  - A parte de criação dos componentes foi bastante simples, o gerenciamento de dependências do Snack simplificou muito o processo, o problema começou quando passei para a parte de integrar o Firebase na aplicação. Por ele controlar muito o processo de genrenciamento de dependência, acabei não conseguindo configurar o Firebase de forma correta, ele nem se quer chegava a executar. Até cheguei a criar um projeto utilizando expo na minha maquina local, mas aconteceu o mesmo problema na configuração do Firebase.

  **Como o problema foi resolvido ?**
- Acabei criando um projeto utilizando o react-native CLI, onde posso ter o total controle da instalação das dependências, assim como acesso aos arquivos nativos da aplicação (Android e iOS)

 ### Dificuldades de lidar com side effects e chamadas assincronas

- Na parte de integração com o Firebase, tive dificuldade a lidar com os efeitos colaterais criados pelo modo com que o Firestore se comunica com a aplicação (Realtime), outro problema foi a parte de chamadas assíncronas, que a integração com o Firebase ocasionou.

 **Como o problema foi resolvido ?**
- Para a parte de side effects eu troquei a implementação de classes pela nova funcionalidade do react, os React Hooks, que me possibilitou ter um maior controle sobre os efeitos colaterais, já a parte de chamada assíncronas, utilizei async/await para lidar com elas.


 **O que ainda pode ser melhorado:**
 - A arquitetura Redux proporcionaria um melhor controle do fluxo da aplicação, alem da possibilidade de compartilhamento de estado, deixando o código muito mais limpo e organizado
 - Utilização do Redux-Sagas para o controle das requisições assincronas, assim casando muito bem com o Redux e os Hooks

## Considerações finais

- No geral, esse challenge foi o mais louco que eu já fiz, criei e recriei o mesmo projeto muitas vezes, de diversas formas diferentes, além de por em prática coisas que eu só tinha estudado na teoria. De qualquer forma, quero agradecer o time da empresa Ruptiva pela oportunidade, assim com me desculpar por não conseguir entregar tudo como prometido. Até mais!





