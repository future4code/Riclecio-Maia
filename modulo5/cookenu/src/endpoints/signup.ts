import { Request, Response } from "express"
import { connection } from "../data/connection"
import authenticator from "../services/authenticator"
import idGenerated from "../services/generatorId"
import hashManager from "../services/hashManager"
import { user } from "../types"

export async function signup(req: Request, res: Response): Promise<void> {

    try {
        const { name, email, password, role } = req.body
        if (!name || !email || !password || !role) {
            res.statusCode = 422
            throw new Error("Preencha todos campos 'name', 'email', 'role' e 'password' ")

        }
        const [user] = await connection('cookenu_users')
            .where({ email })

        const cypherPassword: string = hashManager.createHash(password)

        const id: string = idGenerated.generatedId()
        const newUser: user = {
            id,
            name,
            email,
            password: cypherPassword,
            role
        }
        await connection('cookenu_users')
            .insert(newUser)

        //const token = authenticator.generateToken({ id, role })
        
        res.status(201).send({ message: "Usuario criado com sucesso!", newUser })



    } catch (error: any) {
        if (res.statusCode === 200) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }

}