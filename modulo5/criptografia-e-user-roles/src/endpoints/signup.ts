
import { Authenticator } from "../services/Authenticator";
import {Request,Response} from "express" 
import {connection} from "../data/connection";

import { Hash } from "../services/HashManager";

export default async function signup(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'email' e 'password' ")
        }

        const [user] = await connection("list_users").where({ email })

        const passwordIsCorrect: boolean = user && new Hash().compare(password, user.password)

        if (!user || !passwordIsCorrect) {
            res.statusCode = 401
            res.statusMessage = "Credenciais invalidas"
            throw new Error("Credenciais inválidas")
        }

        const token = new Authenticator(). GenerateToken({ id: user.id, role: user.role })

        res.status(200).send({ token })

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error || error})
        }
    }
} 