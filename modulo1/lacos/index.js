////Exercícios de interpretação de código\\\
   
/////EXERCICIO 1\\\\

// O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
    
    // let valor = 0
    // for(let i = 0; i < 5; i++) {
    //   valor += i
    // }
    // console.log(valor)
    
    // R: a soma dos valores de uma lista(array) até 4
    // R: o resultado é 10.

  ////EXERCICIO 2\\\

  //const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
  //for (let numero of lista) {
  //if (numero > 18) {
//		console.log(numero)
//	}
// }


//a) O que vai ser impresso no console?
 
////R: 19,21,23,25,27,30

 //b) Se eu quisesse acessar o **índice** de cada 
//elemento dessa lista, o `for...of...` é suficiente? 
//Se sim, o que poderia ser usado para fazer isso?

//R: sim ficaria 
//for (let numero of lista) {
  //  if(numero>9) {
          //console.log(numero)
      //}
  //}

 //Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
  // R: *
  // R:**
  // R:***
  // R:****

 //////////EXERCICIO 1\\\\\\\\
 
  //Pergunte ao usuário quantos 
  //bichinhos de estimação ele tem e guarde esse dado em uma variável. 
 // a) Se a quantidade for 0, imprima no console "Que pena! 
 //Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os 
//nomes deles, um por um, e guarde esses nomes em um array
 
// //Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. 
// //Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
//     // c) Por fim, imprima o array com os nomes dos bichinhos no console


let bichinhosEstimacao = Number(prompt("Digite quantos bichinhos de estimação você tem"))
let tenho = []

if (bichinhosEstimacao>0){
     for (let i = 0;i<bichinhosEstimacao;i++) {
         tenho[i] = prompt("Digite o nome de seus pets")  

} console.log(tenho)
} else {
    console.log(`Que pena!!voce pode adotar um bichinho`)
}

//EXERCICIO 2


//a) Escreva um programa que **imprime** cada um dos valores do array original.
const numeros=[14,23,3,6,4]
let maiorNumero = [0]

const numPares=[]
 const array=[]
function lerNumero(){
for(let i = 0;i < 5; i++){
     	  
  const numero = numeros[i]
     	  
  console.log(numero)
     	}}

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10       
function divisaoNumero(){
  for(let i = 0;i < 5; i++){
    const numero=numeros[i]/10
    console.log(numero);
  }
}

//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array 
function novoArrayPar(){
for(let i = 0;i < 5; i++){
  let resto=(numeros[i]%2)
  if(resto===0){
  numPares[i]=numeros[i]
  console.log(numPares[i]);
}}
}

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma:

function novoArray(){
  for(let i = 0;i < 5; i++)
  array.push(`o elemento do index  ${i} é ${numeros[i]}`)
 console.log(array)}

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
function maior(){
    for(let i = 0;i < 5; i++){
      let menorNumero =1000 
      if(numeros[i] > maiorNumero){
           maiorNumero = numeros[i]

     }
      if(numeros[i] < menorNumero){
           menorNumero = numeros[i]

      }
     
     if(i===4)
     {
  console.log(menorNumero);     
console.log(maiorNumero)
     }
  
    }
    
}


maior()
novoArray()
novoArrayPar()
divisaoNumero()
lerNumero()


        
            
