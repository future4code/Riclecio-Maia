import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { User } from "./user";
import { Customer } from "./customer";
import {  client, Client } from "./client";


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





































dotenv.config()

export const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log("Server is running at port", process.env.PORT || 3003)
})