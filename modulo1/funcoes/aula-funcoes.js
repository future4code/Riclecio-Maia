//1Exercícios de interpretação de código
//a) O que vai ser impresso no console?R: 10,50

//b) O que aconteceria se retirasse os dois console.log e 
//simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//R:não imprime nada em console

//2
//a. Explique o que essa função faz e qual é sua utilidade R:determina se  contém os caracteres dado dentro ou não da função verdadeiro ou falso

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//R:true,true,true.




/////Exercícios de escrita de código
//exercicio 1

function semParametros (){

}
console.log ("Eu sou Riclecio, tenho 27 anos, moro em São Paulo e sou estudante.")


function descricaoPessoal(nome,idade,cidade,profissao){
    let dadosPessoais=`Eu sou ${nome} , tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    return dadosPessoais
}

let nome1=prompt("Digite seu nome")
let idade2=prompt("Digite sua idade")
let cidade3=prompt("Digite sua cidade")
let profissao4=prompt("Digite sua profissão")

let resultadoDados= descricaoPessoal (nome1,idade2,cidade3,profissao4)

console.log(resultadoDados)


//exercicio 2

//A
function NumeroSoma(numero1,numero2){

let soma  =numero1+numero2

return soma
}
let numDigitado1=Number( prompt("Digite um numero"))
let numDigitado2=Number( prompt("Digite outro numero"))

let soma = NumeroSoma(numDigitado1,numDigitado2)
console.log(soma)

//B

function numeroBoolean(num1,num2){
let bool=num1>=num2
return bool 
}

let nu1=Number( prompt("Digite um numero"))
let nu2=Number( prompt("Digite outro numero"))
let bool =numeroBoolean(nu1,nu2)

console.log(bool)

//C

function numeroPar(num1,num2){
let par=num1%num2
return par

}
let par1=Number( prompt("Digite um numero"))
let par2=Number( prompt("Digite outro numero"))
let par =numeroPar(par1,par2)
let boolPar = par === 0

console.log(boolPar)

//D

function descricaoPessoal(nome){
let dados=(nome) 
return dados
}
let nomeUsuario=prompt("Digite seu nome")

let tamanhoDeNome= nomeUsuario.length
let maiusculo =  nomeUsuario.toUpperCase()
let dados=(nomeUsuario,tamanhoDeNome)

console.log(maiusculo)
console.log(dados)


//Exercicio 3


function NumeroSoma(numero1,numero2){

let soma =     numero1 + numero2
let somado  =(`soma:${soma}`)

return somado
}

function NumeroSubtracao(Numero1,Numero2){

let subtracao = Numero1 - Numero2
let subtraido =(`subtração:${subtracao}`)

    return subtraido
}

function NumeroMultiplcacao(numero1,numero2){

let multiplicacao = numero1 * numero2
let multiplicado =(`multiplicação:${multiplicacao}`)

return multiplicado
}

function NumeroDivisao(numero1,numero2){

let divisao = numero1 / numero2
let numerodividido =(`Divisão:${divisao}`)

return numerodividido
}
    
let numDigitado1=Number( prompt("Digite um numero"))
let numDigitado2=Number( prompt("Digite outro numero"))




let soma = NumeroSoma(numDigitado1,numDigitado2)
let subtraido=NumeroSubtracao(numDigitado1,numDigitado2)
let multiplicado = NumeroMultiplcacao(numDigitado1,numDigitado2)
let numerodividido = NumeroDivisao(numDigitado1,numDigitado2)

console.log(numerodividido)
console.log(multiplicado)
console.log(subtraido)
console.log(soma)
     