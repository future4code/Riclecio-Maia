// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  let altura=Number (prompt ("Digite a altura do retangulo"))
  let largura=Number (prompt("Digite a largura do retangulo "))
 let area= altura*largura
   
  
     console.log(area)
    
  }
  

// EXERCÍCIO 02
function imprimeIdade() {
  
  let ano=Number (prompt ("Digite o ano atual"))
  let anoDeNascimento=Number (prompt("Digite o anoDeNascimento "))
  let idade=ano-anoDeNascimento
  console.log(idade)
}


// EXERCÍCIO 03
function calculaIMC(peso,altura) {

    let imc=peso/(altura*altura)
    console.log (IMC)
    return imc
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
   let nome=prompt ("Digite seu nome")
   let idade=Number(prompt("Digite a sua idade "))
   let email=(prompt ("Digite seu email"))
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1= prompt("Digite sua cor favorita")
  let cor2 = prompt("Digite sua cor favorita")
  let cor3 = prompt("Digite sua cor favorita")
   let cores = [cor1,cor2,cor3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(letra) {
 
  let maiuscula=letra.toUpperCase()
  console.log(maiuscula)
return maiuscula

}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
let custoEspetaculo=custo/valorIngresso
console.log(custoEspetaculo)
return custoEspetaculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  let numeroString=string2.length
  let numString=string1.length
  let palavra=numeroString===numString

  
  console.log(palavra)
  return palavra
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElement = array.length(0);
 console.log(primeiroElement)

 return primeiroElement

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    const ultimoElement = array[array.length - 1];
   console.log(ultimoElement)
  
   return ultimoElement

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  const primeiroNumero = array[0]
  const ultimoNumero = array[array.length -1]
  array [0] = ultimoNumero
  array [array.length - 1] = primeiroNumero

  console.log(trocaPrimeiroEUltimo)
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let numString2=string2.toUpperCase()
  let numString1=string1.toUpperCase()
   

  let resultado=numString1===numString2
  

  
  console.log(resultado)
  return resultado
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}