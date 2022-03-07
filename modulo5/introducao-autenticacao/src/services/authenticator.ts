import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";
//modo class de token
export class Authenticator {
    GenerateToken = (
        payload: AuthenticationData
    ) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "1min"
            }
        )
    }
};


export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
  return payload.id
} 
