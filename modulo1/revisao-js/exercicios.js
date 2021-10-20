// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
  let lista = array.length
  console.log(lista);
  return lista
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
     
   let inver= array.reverse(0)
    console.log(inver);
    return array
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordenado = array.sort((a,b)=>a-b)
    console.log(ordenado);
    return array
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let par=array.filter(pares => (pares%2) ==0)
    console.log(par);
    return par
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let par=array.filter(pares => (pares%2) ==0)
    let parElevado=[]
    let quantidade=par.length
    for (i=0;i<quantidade;i++){
        
         parElevado[i]=Math.pow(par[i],2)
    
        console.log(parElevado)

    
     } 
    return parElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior=Math.max(...array)

        
       console.log(maior)
   
    
   return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menorNumero=Math.min(num1,num2)
    let maiorNumeroVAR =Math.max(num1,num2)
    let objeto ={
        maiorNumero : (maiorNumeroVAR),
        maiorDivisivelPorMenor : (maiorNumeroVAR%menorNumero===0),
        diferenca : (maiorNumeroVAR-menorNumero)
}
return objeto
    
    }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let quantidade = n 
    let cont= 0
    let array = []
   for  (i=0; i< quantidade;i++) {
            array.push(cont);
            cont = cont + 2

    }

    return array    
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
let trianguloA=ladoA
let trianguloB=ladoB
let trianguloC=ladoC
if(trianguloA!==trianguloB&&trianguloA!==trianguloC&&trianguloC!==trianguloB){
 return "Escaleno"
}else if(trianguloA==trianguloB&&trianguloA==trianguloC&&trianguloC==trianguloB){
return"Equilátero" }
else{
    return "Isósceles"
}

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novoarray=[]
  let menorNumero= Math.min(...array)
  let maiorNumero = Math.max(...array)
  let tamanho=array.length
  let arrayCompare = array
for (i=0;i<tamanho;i++) {
   if(arrayCompare[i]===maiorNumero){
        let Comparador = arrayCompare[i]
        if (arrayCompare[i]>Comparador)

        
      }
      else if(array[i]===menorNumero){
          

      }

 }

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
     
    
    return console.log(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`)


   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}