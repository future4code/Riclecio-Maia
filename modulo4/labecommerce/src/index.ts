import express,{Request, Response} from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { connection } from "./data/connection"
import {  Product, Purchases, User } from "./types/tipo";


dotenv.config()
////criar usuario com conecção ao banco
 const createUser = async (req: Request, res: Response):Promise<void> => {
    try {
        
        const  {name, email, password}:User = req.body

        await connection("labecommerce_users")
        .insert({
            id: Date.now().toString(),
            name,
            email,
            password
        })

        res.status(201).send({message: "Cadastro realizado com sucesso!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}; 
////Buscar usuarios de banco
 const getUsers = async (req: Request, res: Response):Promise<void> => {
    try {
        const users = await connection("labecommerce_users")
        .select()

        res.status(201).send({users: users})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
};
/// Adicionar Produtos

const addProduct = async (req: Request, res: Response):Promise<void> => {
    try {
        
        const {name, price,image_url }:Product = req.body

        await connection("labecommerce_products")
        .insert({
            id: Date.now().toString(),
            name,
            price,
            image_url
        })
        if(!name){
            throw new Error(" Preencha todos os campos.")
        }
        if(!price){
            throw new Error(" Preencha todos os campos.")
        }
        if(!image_url){
            throw new Error(" Preencha todos os campos.")
        }

        res.status(201).send({message: "Produto cadastrado  com sucesso!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}; 

//Pegar produtos

const getProducts = async (req: Request, res: Response):Promise<void> => {
    try {
        const users = await connection("labecommerce_products")
        .select()

        res.status(201).send({users: users})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
};

 const registerPurchase = async (req: Request, res: Response):Promise<void> => {
    try {
        
        const {user_id, product_id , quantity }:Purchases = req.body
    

        await connection("labecommerce_purchases")
        .insert({
            id: Date.now().toString(),
            user_id, 
            product_id , 
            quantity,
           
        })
        if( user_id == null){
            throw new Error(" Preencha todos os campos.")
        }
        // if(!product_id || null){
        //     throw new Error(" Preencha todos os campos.")
        // }
        // if(!quantity || null){
        //     throw new Error(" Preencha todos os campos.")
        // }

      
        res.status(201).send({message: "Compra realizada com sucesso!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}; 

const getPurchases = async (req: Request, res: Response):Promise<void> => {
    try {
       
        const users = await connection("labecommerce_purchases")
        .select()

        res.status(201).send({users: users})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
};


 







































































































export const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log("Server is running at port", process.env.PORT || 3003)
})

app.post("/users", createUser),
app.get("/users", getUsers),
app.post("/products", addProduct),
app.get("/products",getProducts ),
app.post("/purchases", registerPurchase),

app.get("/user/:id/purchase",getPurchases)
 
