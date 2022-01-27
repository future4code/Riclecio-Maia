import express,{Request,Response} from "express";
import {filmes} from "./data"
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

//Exercicio 1
app.get("/test",(req:Request,res:Response)=>{
    console.log("BATEU");

    res.status(200).send("testando...testando..1,2,3.")

})
//execicio 2--data.array.filmes


//exercicio 3 e Exercício 7
app.post('/create',(req: Request, res:Response) => {
    try{
        const name = Number (req.body.name)
        const price =Number (req.body.price)
    
        if(typeof name !== 'string'){
            throw new Error("É obrigatório uma string");
        }
        if(typeof price !== 'number'){
            throw new Error("É obrigatório um number");
        }
        if(price <= 0){
            throw new Error("O preço tem que ser maior que 0");
        }
    
    
    let filme = {
       
        id: Date.now(),
        name: req.body.name,
        price: req.body.price
    }

    filmes.push(filme)
    res.status(200).send({filmes, message:"Adicionado com sucesso"})


}catch(error: any){
        switch(error.message){
            case "É obrigatório uma string":
                res.status(403)
                break;
            case "É obrigatório um number":
                res.status(403)
                break;
            case "O preço tem que ser maior que 0":
                res.status(403)
                break;
            default:
                res.status(500);
        }
        res.send(error.message)
    }

})

//exercicio 4
app.get("/read",(req: Request, res:Response)=>{
let listaDeProdutos=filmes

res.status(200).send({listaDeProdutos,message:"Todos os produtos"})
})

//exercicio 5 e Exercício 8
app.put("/update/:id/price",(req: Request, res:Response)=>{
    try{
       
        const price = req.body.price;
    
       
        if(typeof price !== 'number'){
            throw new Error("É obrigatório um number");
        }
        if(price <= 0){
            throw new Error("O preço tem que ser maior que 0");
        }
    
    
    
    const Id = Number(req.params.id)
    const preço=Number(req.body.price)


    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i].id === Id) {
            filmes[i].price = preço
        }
    }
    res.status(200).send({filmes,message:"Preço alterado com sucesso!"})
} catch(error: any){
    switch(error.message){
        
        case "É obrigatório um number":
            res.status(403)
            break;
        case "O preço tem que ser maior que 0":
            res.status(403)
            break;
        default:
            res.status(500);
    }res.send(error.message)
}
})

//exercicio 6 e Exercício 9

app.delete("/delete/:id",(req: Request, res:Response)=>{
    
    try{
        const id=Number(req.params.id)
        
           
        if(typeof id !== "number"){
            throw new Error("É obrigatório um number");
        }
        if(id <= 0){
            throw new Error("Produto não encontrado");
        }
    
    
    const Id=Number(req.params.id)
for(let i =0; i < filmes.length; i++){
    if(filmes[i].id === Id){
        filmes.splice(i, 1);
    }
}

res.status(200).send({filmes})
} catch(error: any){
    switch(error.message){
        
        case "É obrigatório um number":
            res.status(403)
            break;
        case "Produto não encontrado":
            res.status(404)
            break;
        default:
            res.status(500);
    }res.send(error.message)
}
})


