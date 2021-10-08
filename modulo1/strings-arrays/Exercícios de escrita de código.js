
//1 

const nome= prompt("Digite seu nome")
const email= prompt("Digite seu e-mail")

console.log(`o e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o),${nome}!`)
   //2
   
   let listaDeAlimentos=["batata", "frango" , "peixe", "carne", "feijao"]
   console.log(`Essas são as minhas comidas preferidas:${listaDeAlimentos}`)
   console.log (listaDeAlimentos [0])
   console.log (listaDeAlimentos [1])
   console.log (listaDeAlimentos [2])
   console.log(listaDeAlimentos [3])
   console.log(listaDeAlimentos [4])
   
   let comidaFavorita= prompt("Digite sua comida favorita")

listaDeAlimentos [1] = comidaFavorita
console.log (listaDeAlimentos)


let tarefa1= prompt("Digite a primeira tarefa ")
let tarefa2= prompt("Digite a segunda tarefa ")
let tarefa3= prompt("Digite a terceira tarefa")
let listaDeTarefas=[tarefa1,tarefa2,tarefa3 ]
console.log (listaDeTarefas)
let indice = prompt("Digite novamente a segunda tarefa")
 listaDeTarefas [1] = indice
 const novaListaDeTarefas = listaDeTarefas.splice(1,1)
 
 console.log(listaDeTarefas)











