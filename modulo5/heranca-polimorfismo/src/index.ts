import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { User } from "./user";
import { Customer } from "./customer";
import {  client, Client } from "./client";
import { Place,Residence,Commerce,Industry } from "./place";


// - Exercício 1
    
//     Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas. 
//Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc 
//que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário. 
    
//     a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
    //R: Não pois password é private. apenas Com console log de userOne no index é possivel imprimir a senha
//     b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` 
//foi impressa no terminal?*
// R: Apenas 1 vez
const userOne: User = new User("01","rick@rick.com", "rick", "riquinho");
//console.log(userOne);

// - Exercício 2
    
//     Analise a `Customer`. Perceba quais propriedades são públicas e quais são privadas. 
//Copie esse código para o seu exercício de hoje e crie uma instância dessa classe 
//(com as informações que você quiser). Atente-se ao fato de que o `Customer` é uma subclasse 
//(ou classe filha) da classe `User`. Sabemos disso porque há a palavra `extends` na 
//declaração da classe `Customer`; e, em seu construtor, foi usado o `super`.
    
//     a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` 
//foi impressa no terminal?* 
// R: APENAS  1 VEZ
    
//     b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no 
//terminal? Por quê?*
//R: 2 VEZES , CLASS CUSTOMER TRA A HERANÇA POR SER FILHA DE USER POR ISSO IMPRIME A MSG DE USER
// E NOVAMENTE IMPRIME EM CUSTOMER POR HERANÇA. 

const customerOne = new Customer("1","mirian@mirian.com","mirian","mirinha","5000" );




//Exercício 3
// Agora, imprima **todas as informações possíveis** da instância que você criou: 
//o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o 
//cartão de crédito (`creditCard`). Perceba que as propriedades públicas da 
//classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).

// a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*
// R: atravez de um msg dentro de constructor, recebe como herançaele é privado e não protected

console.log(`compras ${customerOne.purchaseTotal}`);




// - Exercício 4
    
//     Adicione um método público à classe `User`. 
//Esse método deve ter o nome de `introduceYourself`("apresente-se") e deve retornar a 
//mensagem: `"Olá, bom dia!"`. As classes filhas sempre têm acesso aos métodos públicos da 
//classe pai. Então, para realizar o teste dessa sua função, faça com que a 
//instância que você criou para a classe `Customer` chame esse método.
console.log(customerOne.introduceYourself());


//- **Polimorfismo**
//Exercício 1
// a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? 
//Por que isso aconteceu?*
// Nome ,registrationNumber,consumedEnergy,calculateBill

console.log(client,client.calculateBill());


//Exercício 2
// Essa classe é abstrata porque está representando um tipo de informação que 
//simplesmente **abstrai** e **armazena** as características em comum de um 
//conjunto de outras classes. Por ser abstrata, não podemos criar uma instância dela. 
//Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.

// a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe 
//(ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
//R: não e possivel criar instancia para classe abstrata
//const place:Place = new Place("0010564" );


// b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente 
//criar uma instância dessa classe?*
// tornar ela uma classe "normal" ao tirar abstract conseguimos imprimir
//console.log(place.getCep());



// - Exercício 3
    
//     Esse exercício vai responder melhor a essas três perguntas: 
    
//     1) *O que precisaríamos fazer para conseguir efetivamente criar uma 
//instância da classe Place? (última pergunta do exercício anterior)*
//tornar ela uma classe "normal" ao tirar abstract conseguimos imprimir
    
//     2) *Por que a `Place` não é uma interface?
//        por ter  por conster medidas de segurança que interface não possui
    
//     3) *Por que a classe `Place` é uma Classe Abstrata?*
 //           para medida de segurança de cep
    
//     Será um pouco mais longo, mas esperamos que seja esclarecedor.
    
//     Vamos começar lendo três classes. 
    
//     A primeira representa uma casa residencial. Vamos armazenar nela uma variável 
//para representar a quantidade de moradores (`residentsQuantity`)

const residence = new Residence(6,"00643599")
const commerce = new Commerce(2, "00551.9751")
const industry = new Industry(7, "0065546745")
console.log(residence.getCep())
console.log(commerce.getCep())
console.log(industry.getCep())



// - Exercício 4
    
//     Agora, você vai começar a colocar a mão na massa!
// Crie uma classe para representar um Cliente Residencial (`ResidentialClient`). 
//Ela deve possuir uma propriedade de CPF, que será privada, uma vez que o 
//CPF não pode mudar e não teremos uma classe filha da `ResidentialClient` 
//(assim, `protected` não faz sentido). Crie o getter também.
    
//     Essa classe deve ser **filha** da classe `Residence` e implementar a classe 
//Client`. Lembre-se que a classe deve implementar todos métodos e atribuir valores a 
//todas as propriedades que herda da interface. No caso das residências, o valor da conta
// é **(quantidade de energia) x 0.75.**- Exercício 4
    
//     Agora, você vai começar a colocar a mão na massa!
    
//     Crie uma classe para representar um Cliente Residencial (`ResidentialClient`). 
//Ela deve possuir uma propriedade de CPF, que será privada, uma vez que o CPF não pode 
//mudar e não teremos uma classe filha da `ResidentialClient` 
//(assim, `protected` não faz sentido). Crie o getter também.
    
//     Essa classe deve ser **filha** da classe `Residence` e implementar a classe
// `Client`. Lembre-se que a classe deve implementar todos métodos e atribuir valores a 
//todas as propriedades que herda da interface. No caso das residências, o valor da conta 
//é **(quantidade de energia) x 0.75.**

//) Que métodos e propriedades essa classe possui? Por quê?
//R:getCpf- pegar cpf calculateBill-- calcula consumo de energia



// - Exercício 5
    
//     Crie a classe `CommercialClient` para representar o 
//Cliente Comercial. Ele deve possuir um CNPJ (privado). Crie os getter dela.
    
//     Essa classe deve ser **filha** da classe `Commerce` e implementar a 
//interface `Client`. Nesse caso, o valor da conta é **(quantidade de energia) x 0.53.**
    
//     a) *Quais as semelhanças dessa classe com a `ResidentialClient`?*
//R:mesmas propriedades de Client  e o método calculateBill
    
//     b) *Quais as diferenças dessa classe com a `ResidentialClient`?*
//R:Propriedades Residence e commerce, onde altera-se o cpf por cnpj, 
//residentsQuantity por floorQuantity e o método getCpf por getCnpj.

//exercicio 
// Agora, crie a classe `IndustrialClient` para representar o Cliente Industrial. 
//Ele deve possuir um um número de registro industrial (privada). Crie somente os 
//getters dela.

// a) *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*

//R: IndustrialClient filha da classe Industry, pois queremos pegar informações de industrial.

// b) *Que interface a `IndustrialClient` implementa? Por quê?*

 // R:Ela implementa a interface Client pois industry é place no qual o responsável é um client

// c) *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*

//R: queremos apenas  informações dos estabelecimentos e  clientes.



























dotenv.config()

export const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log("Server is running at port", process.env.PORT || 3003)
})