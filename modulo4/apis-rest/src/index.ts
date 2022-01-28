import express,{Request,Response} from "express";
import { users } from "./data";
import { user  } from "./data";

import { AddressInfo } from "net";


const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

  

app.get("/users",(req:Request,res:Response)=>{
  
    try{
    const currents=users
         
res.status(200).send(currents)
}catch(error:any){
    res.status(500).send(error.message)

}
})

//a. Qual método HTTP você deve utilizar para isso?
// R: metodo -GET
//b. Como você indicaria a entidade que está sendo manipulada?
// R: mantendo padrão em todos e o indicando pelo o que ela é "/users"
 

//exercicio 2

//exercicio 3
app.get("/users/:name", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
      const Name: string= (req.params.name);
  
      const user = users.find((user) => {
        return user.name === Name;
      });
  
      if (!user) {
        errorCode = 404;
        throw new Error("Usuario não encontrado.");
      }
  
      res.status(200).send(user);
    } catch (error: any) {
      res.status(errorCode).send({ message: error.message });
    }
  });
  //a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
  //R: Utilizei( Params) req.params.name 
  
  //Execicio 4
  app.post("/users/create", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        
      const {  name, email, type, age } = req.body;
      const id: number = users[users.length - 1].id + 1
  
      if ( !name || !email || !type || !age) {
        errorCode = 422;
        throw new Error("Erro em um dos Campos,Coloque os parametros corretos!");
      }
  
      const newUser: user = {
        id,
        name,
        email,
        type,
        age,
      };
  
      users.push(newUser);
  
      res.status(201).send({ message: "User criado com sucesso" });
    } catch (error: any) {
      res.status(errorCode).send({ messagem: error.message });
    }
  });

  //a. Mude o método do endpoint para PUT. O que mudou?
  // trocando para o Put e alterando algum parametro id,name etc funcionou normalmente alterando,porem não cria um novo

  //b. Você considera o método PUT apropriado para esta transação? Por quê?
  // não, put seria somente para um alteração,