import { Request, Response } from "express";
import connection from "../connection";

import { IdGenerator } from "../services/idGenerator"
import { Authenticator } from "../services/authenticator"

export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
  try {

  const {email, password}: {email: string, password: string} = req.body

  if(!email || !email.includes("@")) throw new Error("Informe um email válido");

  const id =IdGenerator ()

  const authenticator:Authenticator = new Authenticator()
  const token = authenticator.GenerateToken({id})  

  const result = await connection("list_users").where({email, password})

  if(result.length === 0) throw new Error("Usuário não encontrado");

  res.send({token})

  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
} 