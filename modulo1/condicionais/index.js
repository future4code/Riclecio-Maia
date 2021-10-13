        //////Exercícios de interpretação de código\\\\\\\\\\


///////////EXERCICIO 1\\\\\\\\\\\

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


//a) Explique o que o código faz. Qual o teste que ele realiza? 
 
// R: Codigo testa se o numero digitado pelo usuario é par ou impar.

//b) Para que tipos de números ele imprime no console "Passou no teste"? 

// R:Para todos os numeros Par digitados pelo usuario.

//c) Para que tipos de números a mensagem é "Não passou no teste"?

// R: Para todos os numeros impar digitados pelo usuario.




///////////////EXERCICIO 2\\\\\\\\\\\\\\\\


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o código acima?

   // R: descobrir valor de fruta de um lista
                                     
// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? 

   // R: valor de maçã é 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a 
// mensagem impressa no console se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? 

  // R: o valor impresso seria 5


/////////////////// EXERCICIO 3\\\\\\\\\\\\\\\\\\\\


// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


//a) O que a primeira linha está fazendo?
  
//// R: testa se o numero digitado é maior que 0.

  //b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

///// R: caso o numero digitado seja 10 a  mensagem sera esse numero passou no teste.
//// R: caso o numero digitado seja -10  não retorna mensagem.

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
  
//// R: mensagem se encontra no escopo filho o escopo pai(global) não tem acesso para imprimir.


///////////Exercícios de escrita de código\\\\\\\\\\\\\

 ///// EXERCICIO 1\\\\

//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
//imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

///R:

 const maiorDe18 = Number(prompt("Digite a sua idade."))

 if(maiorDe18 > 18) {
   console.log("Você pode dirigir");
}else{
    console.log("você não pode dirigir");
}


     ////Exercicio 2\\\
//Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) 
//ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
////R:

let turnoDeEstudo = prompt("Digite o turno qual você estuda M - para matutino, V- para vespertino ,N - noturno").toLowerCase()


if(turnoDeEstudo==="m"){
    console.log("Bom Dia!");

}else if(turnoDeEstudo==="v"){
    console.log("Boa Tarde!");
}else if(turnoDeEstudo==="n"){
    console.log("Boa Noite!");
}else{
    console.log("Turno não é valido");

}


 /////EXERCICIO 3\\\\
// Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
///R:


const turnoDeEstudo = prompt("Digite o turno qual você estuda M - para matutino, V- para vespertino ,N - noturno").toLowerCase()

switch (turnoDeEstudo) {
        case "m":
        console.log("Bom Dia!");
        break;

        case "v":
        console.log("Boa Tarde!");
        break;

        case "n":
        console.log("Boa Noite!");
        break;

        default:
        console.log("Turno não é valido");

}


          //////EXERCICIO 4\\\\\\
// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só 
//assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. 
//Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
//imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme
///R:

const generoFilme = prompt("Digite o genero do filme é").toLowerCase()
const preço= Number( prompt("Digite o valor do ingresso"))



if (generoFilme==="fantasia" && preço<=15){
     console.log("bom Filme!");
}else{
    console.log("Escolha outro filme");
}
               
                        //Desafios

//Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
//pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e 
//imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] 
//pelo que o usuário colocou no input.
        

const generoFilme = prompt("Digite o genero do filme é").toLowerCase()
 const preço= Number( prompt("Digite o valor do ingresso"))
const qualLanche=prompt("Digite qual lanche gostaria de comer")


 if (generoFilme==="fantasia" && preço<=15){
      console.log(`Bom Filme! e aproveite o seu(sua) ${qualLanche}`);
 }else{
     console.log("Escolha outro filme");
 }

 








//Nome completo;
//Tipo de jogo: IN indica internacional; e DO indica doméstico;
//Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
 //Categoria: pode ser as opções 1, 2, 3 ou 4;
 //Quantidade de ingressos

//O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
//Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o 
//usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
//Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
//Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser 
//multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
               
// const nome=prompt("Digite seu nome completo")
// const tipoDeJogo=prompt("Digite sigla do tipo do jogo use a sliga- IN indica internacional, ou sigla- DO indica doméstico;").toUpperCase()
// const etapaDoJogo=prompt("Digite a sigla da etapa do jogo  SF- indica semi-final, DT- indica decisão de terceiro lugar ou FI- indica final").toUpperCase()
// const categoria=Number(prompt("Digite a categoria as opções são 1, 2, 3 ou 4 "))
// const quantidadeDeIngressos=Number(prompt("Digite a quantidade de ingressos que deseja"))
// const valorDoIngresso=Number()
// const quantidadeDeIngressos
// const imprimeticket(){}
 

//  if (tipoDeJogo==="DO"){
//      if(etapaDoJogo==="SF"){
//     if( categoria===1){
//         valorDoIngresso=1320
//     }else if (categoria===2){
//         valorDoIngresso=888
//     }else if (categoria===3){
//         valorDoIngresso=550
//     }else if (categoria===4){
//         valorDoIngresso=220
//     }
//      }else{
//          console.log("escolha uma categoria de 1 a 4");
//      }

//  } if(etapaDoJogo==="DT"){ 
//      if( categoria===1){
//     valorDoIngresso=660
// }else if (categoria===2){
//     valorDoIngresso=440
// }else if (categoria===3){
//     valorDoIngresso=330
// }else if (categoria===4){
//     valorDoIngresso=170
// }
//  }else{
//      console.log("escolha uma categoria de 1 a 4");

//  } if (etapaDoJogo==="FI"){
//      if( categoria===1){
//     valorDoIngresso=1980
// }else if (categoria===2){
//     valorDoIngresso=1320
// }else if (categoria===3){
//     valorDoIngresso=880
// }else if (categoria===4){
//     valorDoIngresso=330

//  }else {
//      console.log("etapa do jogo invalida, digite SF, DT ou FI");
// }
//  else if (tipoDeJogo==="IN"){

// }else{

// }

// dadosdacompra={
//     Nome do cliente:  ${nome} 
// Tipo do jogo:  
// Etapa do jogo:  
// Categoria:  
// Quantidade de Ingressos: 
// ---Valores--- 
// Valor do ingresso:  U$ 
// Valor total:  U$ 
// }