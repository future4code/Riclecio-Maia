import { Request, Response } from "express";
import { connection } from "../data/connection";
import authenticator from "../services/authenticator";
import { follow } from "../types";

export default async function followUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
    const token = req.headers.authorization as string;

    if(!token){
        res.statusCode = 401
        res.statusMessage = "token invalido ou nao passado no headers"
        throw new Error("token invalido ou nao passado no headers")
    }

    const authenticationData = authenticator.getTokenData(token);

    const{userToFollowId} =  req.body
    const idFollower = authenticationData.id

    if(!userToFollowId){
        throw new Error("Preencha o campo 'userToFollowId'")
    }

    if(idFollower === userToFollowId){
        throw new Error("Você não pode seguir a si mesmo")
    }

    const [verify] = await connection('cookenu_follow')
    .where({ follower: idFollower, following: userToFollowId })

    if(verify){
        throw new Error("Você já segue este usuário")
    }

    const newFollow: follow = { 
        follower: idFollower,
        following: userToFollowId
    }

    await connection('cookenu_follow')
    .insert(newFollow)

    res.status(200).send({ newFollow,message: "Seguido com sucesso!!"});

   } catch (error:any) {
        res.status(400).send({
        message: error.message,
      });
   }
} 