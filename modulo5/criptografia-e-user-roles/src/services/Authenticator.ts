import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../../types";
import dotenv from 'dotenv'

export class Authenticator {
    GenerateToken = (
        payload: AuthenticationData
    ) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "4h"
            }
        )
    }

    GetTokenData = (
        token: string
    ) => {
        try{
            const tokenData = jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as AuthenticationData
            return{
                id:tokenData.id,
                role:tokenData.role
            }
        }catch (error){
            console.log(error)
            return null
        }
    }
}