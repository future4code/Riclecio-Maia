import { Request, Response } from "express";
import { connection } from "../data/connection";
import authenticator from "../services/authenticator";

export default async function getOtherProfile(
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

    const authenticationData = authenticator.getTokenData(token);
    const userId = req.params.id
    if (authenticationData.role !== "ADMIN") {
      throw new Error("Apenas usuário administrador pode acessar essa funcionalidade");
    }

    const user = await getUserById(userId);

    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email
    });

   } catch (error:any) {
        res.status(400).send({
        message: error.message,
      });
   }
}

async function getUserById(id:string): Promise<any>{
    const [user] = await connection('cookenu_users')
    .where({ id })

    return user;
} 