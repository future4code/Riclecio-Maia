import * as jwt from "jsonwebtoken"
import { authenticationData } from "../model/AuthenticationData"


export class Authenticator {

    public generateToken(input:authenticationData):string {
        const token = jwt.sign(input, process.env.JWT_KEY as string, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
        })

    return token as string
    }

    public getTokenData(token:string):authenticationData {
        const data = jwt.verify(token, process.env.JWT_KEY as string)
        return data as authenticationData
    }
}

// export const authenticator = new Authenticator()