import {Request, Response} from "express"

import { getUserById } from '../connection';
import { getData } from '../services/authenticator';

export const getUserInfo = async (req: Request, res: Response): Promise<any> => {
  let errorCode = 400
  try {
    const token: string = req.headers.authorization as string

    const authenticationData = getData(token)

    const user = await getUserById(authenticationData.id)

    res.status(200).send({
      id: user.id,
      email: user.email
    })

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}