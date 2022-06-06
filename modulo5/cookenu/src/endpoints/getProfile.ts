import { Request, Response } from "express";
import { connection } from "../data/connection";
import authenticator from "../services/authenticator";

export  async function getProfile(
   req: Request,
   res: Response
): Promise<void> {
   try {
    const token = req.headers.authorization as string;
    
    if(!token){
        res.statusCode = 401
        res.statusMessage = "token invalido ou não digitado no headers"
        throw new Error("token invalido ou não digitado no headers")
    }

    const authentication = authenticator.getTokenData(token);
    const user = await getUserById(authentication.id);

    const result = { id: user.id, name: user.name,email: user.email }
    res.status(200).send({result });
    
} catch (error:any) {
    res.status(400).send({
        message: error.message,
    });
}
}

async function getUserById(ID:string): Promise<any>{
    const [user] = await connection('cookenu_users').where({ ID});
    
    return user
} 

