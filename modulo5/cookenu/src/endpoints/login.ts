import { Request, Response } from "express"
import { connection } from "../data/connection";
import authenticator from "../services/authenticator";
import hashManager from "../services/hashManager";

export  async function login(req: Request,res: Response): Promise<void> {
    try {
        const { email, password } = req.body;

        if (!email) {
            res.statusCode = 422
            throw new Error("Preencha o campo de'email'")
        }

        if (!password) {
            res.statusCode = 422
            throw new Error("Preencha o campo de 'password'")
        }


        const [user] = await connection("cookenu_users").where({ email })

        const passwords: boolean = user && hashManager.compareHash(password, user.password)

        if (!user || !passwords) {
            res.statusCode = 401
            res.statusMessage = "Suas credenciais são invalidas"
            throw new Error("Suas credenciais são inválidas")
        }

        const token = authenticator.generateToken({ id: user.id, role: user.role })

        res.status(200).send({ user, token })

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
} 