import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import { IdGenerator } from "../services/idGenerator";
import {Authenticator } from "../services/authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const {  email, password } = req.body
         // Item b. Validação do email @
      if (!email || email.indexOf("@") === -1) {
         res.statusCode = 404
         throw new Error("Invalid email");
       }
        // Item c. Validação da senha
    if (!password || password.length < 6) {
       res.statusCode= 404
      throw new Error("Invalid password");
    }
    // validação para que ambos preenchidos
      if ( !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos  'email'e'password'")
      }
      
      //conecção com banco   
      const [user] = await connection('list_users')
         .where({ email })
      // validação de ja cadastrado
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      //gerando id v4
      const id: string = IdGenerator();

      const newUser: user = { id,   email, password }
      //autenticação de token
      await connection('list_users ')
         .insert(newUser)
         const authenticator:Authenticator = new Authenticator()
      const token = authenticator.GenerateToken({id: newUser.id})   
         

      res.status(201).send({ newUser,token })

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}