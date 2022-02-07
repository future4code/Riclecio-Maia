import express, { Request, Response } from "express";
import cors from "cors";
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import { baseURL } from "./baseURL"
import axios from "axios";


//iniciando a aplicação web com express
const app = express();
//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());





//exercicio 1

// *a.* Qual endpoint você deve utilizar para isso?
    //Get
// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// async ():Promise<type[]>


async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};

getSubscribers().then(console.log)








//exercicio 2
// *a.* Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e 
//uma arrow function assíncrona
// arrow function e mais objetiva e simples menos verbosa,const "getSubscriber = async (): Promise<any[]> =>"
// função assincrona nomeada a função nomeada deixa  claro o que é  nas primeiras palavras "async function getSubscribers(): Promise<any[]>"

// b. Implemente a função solicitada, usando arrow function


const getSubscriber = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };
  getSubscriber().then(console.log)






//exercicio 3


type user={
    id:string
    name:string
    email:string
    
    }

    // *a.* Se apenas trocarmos o retorno da função para: `Promise<user[]>` , 
    //teremos algum erro de tipagem?

    //R: não há nenhum erro

    // b. É boa prática fazermos um mapeamento do resultado de uma Promise, 
    //caso seja indicado que ela retorne um `Promise<any>`. 
    //Explique com as suas palavras o porquê de fazermos isso
    
    //boa pratica para indicar o que tem dentro dessa promise, retorno

    // c. Reimplemente a função, corretamente.    



const getAllSubscribers=async ():Promise<user[]> =>{
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
    
}
 
getAllSubscribers().then(console.log)
 


// - Exercício 4
    
//     Vamos continuar as nossas funcionalidades da API.
// Crie uma função que permita criar uma nova notícia.
    
//     *a.* Qual é o tipo dessa função? Por quê?
    
//     b. Implemente a função solicitada
async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }


  //- Exercício 5
    
  //Agora, implemente uma função que receba um array de usuários e uma mensagem e envie essa 
  //mensagem como notificação para todos os usuários. A princípio, não utilize o `Promise.all`


  const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
        
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };  

//   - Exercício 6
    
//   Vamos reescrever a função anterior utilizando o `Promise.all`. Antes disso, 
//responda as perguntas abaixo:
  
//   a. O que o `Promise.all` faz?
  
//   b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as 
//notificações para todos os usuários?
  
//   c. Reimplemente a função utilizando `Promise.all`

const sendAllNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };
























































































const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;