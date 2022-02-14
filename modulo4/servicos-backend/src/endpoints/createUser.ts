import {Request, Response } from "express"
import { getAddressinfo } from "../services/getAddressinfo"
import { connection } from "../data/connection"

export const createUser=async(req:Request,res:Response)=>{
    
    try {
        const {numero,cep, complemento} = req.body

        const add = await getAddressinfo(cep)

        if (!add) {
            throw new Error("Deu ruim no serviço getAddressInfo")
        }

        
        await connection 
        .insert({
            id: Date.now().toString(),
            Logradouro: add?.logradouro,
            bairro: add?.bairro,
            cep , 
            numero ,
            complemento ,
            cidade: add?.cidade,
            estado: add?.uf
        }).into("dados_residencia")

        res.status(200).send(`O cadastro foi criado com sucesso!`);
    }catch(err){
        if (err instanceof Error) {
            res.send({ err, message: err.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}