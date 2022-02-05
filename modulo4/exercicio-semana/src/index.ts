import express, {Request,Response} from 'express'
import cors from 'cors'
import connection from "./connection"

import { AddressInfo } from "net";
const app = express();

app.use(express.json());
app.use(cors());

//Função  pegar ID
const getById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM to_list WHERE id = '${id}'
    `)
    return result[0][0]

};


// funçao criar usuario

const createUser = async (id:string, name:string, nickname:string, email:string):Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            nickname: nickname,
            email: email
        })
        .into("to_list")
}
 //função editar usuario

 const editUserById = async (id:string, name:string, nickname:string, email:string):Promise<void> => {
    await connection("to_list")
        .where("id", id)
        .update({
            name: name,
            nickname: nickname,
            email: email    
        })
}
// função criar tarefa
const createTalks = async (title:string, description:string, limitDate:string, creatorUserId:string,creatorUserNickname:string):Promise<void> => {
    await connection
        .insert({
            title: title,
	       description: description,
	       limitDate: limitDate,
	    creatorUserId:creatorUserId,
        creatorUserNickname:creatorUserNickname
        })
        .into("to_task")}



//função pegar tarefas por id




// EndPoint criar usuario 
app.post("/users", async (req: Request, res: Response) => {
    try {
      
        await createUser(
            req.body.id,
            req.body.name,
            req.body.nickName,
            req.body.email
            )
            

        res.status(200).send({ message: "usuario criado" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }});

  // endPoint pegar usuario por ID 
app.get("/users/:id", async (req: Request, res: Response) => {
    
    try {

        const ID= (req.params.id);
        const nome= await getById(ID)
        
        res.status(200).send(nome);
    } catch (err: any) {
        
               
        res.status(404).send({
            message: err.message,
        });
    }});



   
    //end point edita usuario
    app.put("/users/edit/:id", async (req:Request, res:Response) => {
        let errorCode:number = 404
    
        try{
            const id = req.params.id
            const {name, nickname, email} = req.body
    
            if(name === "" || nickname === "" || email === ""){
                errorCode = 422
                throw new Error("faltam dados de usuario!")
            } else{
                const update = await editUserById(id, name, nickname, email)
                res.status(200).send("Usuario editado com sucesso!")
            }
    
        }catch(error:any){
            res.status(errorCode).send(error.message)
        }
    })
    
//endpoint criar tarefa
app.post("/task", async (req: Request, res: Response) => {
    try {
      
        await createTalks(
            req.body.title,
            req.body.description,
            req.body.limitDate,
            req.body.creatorUserId,
            req.body.creatorUserNickname
            )
            

        res.status(200).send({ message: "tarefa criada" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }});

//Endpoint pegar tarefas por id




    







// função pegar todos usuarioss

const getUsers = async ():Promise<any> => {
    const result = await connection("to_list").select();

    return result
}
//endPoint pegar usuario 
app.get("/users", async (req:Request, res:Response) => {
    let errorCode:number = 404

    try{

        const users = await getUsers()
        res.status(200).send(users)
    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})
















const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});;