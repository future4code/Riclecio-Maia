import { JwtPayload, sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types";
import dotenv from 'dotenv'

dotenv.config()

 class Authenticator {

    generateToken = (
        payload: authenticationData
    ) => {
        const token = sign(
            payload,
            process.env.JWT_SECRET as string,
            { expiresIn: process.env.EXPIRES_IN}
        )

        return token;
    }


    getTokenData = (token: string) => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_SECRET as string
            ) as JwtPayload
            return {
                id:tokenData.id as string,
                role:tokenData.role as string
            }
        } catch (error) {
            console.log(error)
            throw new Error("Falha no sistema")
        }
    }

}

export default new Authenticator()