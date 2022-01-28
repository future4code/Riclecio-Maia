import express,{Request,Response} from "express";
import cors from "cors"
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
// exercicio 1

app.get("/ping", (req:Request, res:Response) => {          
    res.status(200).send("Pong!")
})
// exercicio 2

type Tasks = {
    userId:number,
    id: number,
    title: string,
    completed: boolean
}
//exercicio 3
let afazeres:Tasks[]=[
{
userId:1,
id:1,
title:"Escutar Musica",
completed:true  

},{
userId:3,
id:2,
title:"Estudar Na Labenu",
completed:false  
},{
userId:4,
id:3,
title:"Descansar",
completed:false  

},{
userId:1,
id:4,
title:"Treinar",
completed:true  

}

]
//exercicio 4
app.get('/incompleto/:estado', (req: Request, res:Response)=>{
    const state = req.params.state === 'false'
    const result = afazeres.filter((task) => {
        return task.completed === state
    })
    res.status(200).send({result})})


app.get('/completo/:estado', (req: Request, res:Response)=>{
    const state = req.params.state === 'false'
    const result1 = afazeres.filter((task) => {
        return task.completed !== state
    })
    res.status(200).send({result1})})

//exercicio 5
app.post('/create-task',(req: Request, res:Response) => {
    let task : Tasks = {
        userId: req.body.userId,
        id: Date.now(),
        title: req.body.title,
        completed: req.body.completed
    }

    console.log(task)
    afazeres.push(task)
    res.status(200).send({afazeres, message:"Adicionado com sucesso"})

})

//exercicio 6
app.put('/tarefas/:id',(req:Request,res:Response)=>{
const Id = Number(req.params.id)

    for (let i = 0; i < afazeres.length; i++) {
        if (afazeres[i].id === Id) {
            afazeres[i].completed = !afazeres[i].completed
        }
    }

    res.status(200).send({ afazeres})
})

//exercicio 7

app.delete('/deletar/:id', (req: Request, res:Response)=>{
   
    const Id2 = Number(req.params.id)

    const index = afazeres.findIndex((task) => {
        return task.id === Id2
    })
     let newList = afazeres.splice(index, 1)

  
    
    res.status(200).send({afazeres})})

    app.get('/tarefas/:userId/lista', (req: Request, res: Response) => {
        const idd = Number(req.params.userId)
        if (!idd) {
            return res
                .status(400)
                .send('ID não encontrado');
        }
        const copia = afazeres.filter((boo) => {
            if (boo.userId === idd) {
                return boo
            }
        })
        res.status(200).send({ copia, message: 'Tarefas do usuário' })
    })
    