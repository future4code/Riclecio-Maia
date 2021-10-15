
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])             
// console.log(filme.elenco[filme.elenco.length - 1]) >
// console.log(filme.transmissoesHoje[2])           >>>>>>>>> 

//a) O que vai ser impresso no console?

//Matheus nachtegaele
//Virginia Cavendish
//canal: "Globo", horario: "14h


// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//A) O que vai ser impresso no console?
////////////console.log(cachorro)
//nome: "Juca", 
//  	idade: 3, 
//  	raca: "SRD
////////////console.log(gato)
// nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD
////////////console.log(tartaruga)
//nome: "Jubo", 
// 	idade: 3, 
// 	raca: "SRD

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//chama spread --cria uma cópia do objeto,podem mudar , alterar ou acrescentar  propriedade

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }
// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }
// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?
//backender>>False
//altura>>undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//No primeiro imprimiu False pois backender em const pessoa tem valor false
//no segundo imprimiu undefined pois não foi definido valor de altura em const pessoa


//EXERCICIO 1//

// Exercicio A
const nomes= {
    nome:  "Mateus",
    apelidos: ["Cabeçao","Kiko","Panco"]
}

function recebeNomes (nomes){ 
    return `Eu sou ${nomes.nome} mas pode me chamar de: ${nomes.apelidos}`
}

console.log(recebeNomes(nomes))

// exercicio B 
const nomes2= {
    ...nomes,
    apelidos: ["Alien","Caixa","Microfone"]
}

function recebeNomes2 (nomes2){ 
    return `Eu sou ${nomes2.nome} mas pode me chamar de: ${nomes2.apelidos}`
}

console.log(recebeNomes2(nomes2))

   //EXERCICIO 2//

const individuo1 = {
     	
    nome: "Junior", 
    idade: 20 ,
    profissao: "Carpinteiro"

}
const individuo2 ={
    nome: "Maria", 
    idade: 30 ,
    profissao: "Arquiteta"
}

function dados (individuo1) {
   
    const resultado = console.log(` 
     1. O valor de nome é: ${individuo1.nome},
     2. O numero de caracteres do valor nome é:${individuo1.nome.length},
     3. O valor de idade é: ${individuo1.idade},
     4. O valor de profissão é: ${individuo1.profissao}
     5. O numero de caracteres do valor profissao é: ${individuo1.profissao.length}  `)
     
    return resultado
    }
dados(individuo2)  
dados(individuo1)


let carrinho=[]

const fruta1={

nome:"uva",
disponibilidade:true
}
const fruta2={

    nome:"laranja",
    disponibilidade:true
}
const fruta3={

    nome:"banana",
    disponibilidade:true
}

function fruta (fruta1,fruta2,fruta3){
 
carrinho.push(fruta1,fruta2,fruta3)
//console.log(carrinho)
return carrinho
}
 fruta(fruta1,fruta2,fruta3)

 console.log(carrinho)
 
    
  
     
  



