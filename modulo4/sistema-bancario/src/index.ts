import express,{Request,Response} from "express";

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
//Um cliente pode criar uma conta no banco se tiver idade 
//igual ou maior do que 18 anos. Ele deve informar: nome, CPF e data de nascimento. 
//As contas devem guardar essas informações e uma 
//propriedade para representar o saldo do usuário. 
//Além disso devem ser guardados, também, 
//todos os gastos do usuário num array de extrato 
//(possuindo o valor, a data e uma descrição).
// Lembre-se de que todas as contas, ao serem criadas, 
//começam com o saldo zerado. 
//Não podem existir dois usuários diferentes com o mesmo CPF.
export type Transaction = {
    value: number | string,
    date: string,
    description: string
}

export type User = {
    id: number,
    name: string,
    cpf: string,
    birthDate: string,
    balance?: number | string
    extract?: Transaction[]
}

export const Users: User[] = [
    {
        id: 1,
        name: "rick",
        cpf: "000-330-992-20",
        birthDate: "23/06/1994",
        balance: 50.00,
        extract: [{
            value: 200.00,
            date: "25/01/2022",
            description: "Pagar Luz"
        }]

    },
    {
        id: 2,
        name: "julia",
        cpf: "000-660-892-20",
        birthDate: "13/08/2016",
        balance: 550.00,
        extract: [{
            value: 100.00,
            date: "25/01/2022",
            description: "Pagar internet"
        }]
    }
]
app.get("/users", (req: Request, res: Response) => {
    try {

        res.status(200).send(Users)

    } catch (error) {
        res.status(400).send()
    }
})


app.post("/users",(req:Request,res:Response)=>{
    const token = req.headers.authorization
    let errorCode: number = 400

    try {
        const { id,name, cpf, birthDate, balance } = req.body
        if (!token) {
            errorCode = 401
            throw new Error("Para realizar essa operação é necesário ter token de autorização");
        }if (Users.findIndex(user => user.cpf === cpf) > -1) {
            errorCode = 422
            throw new Error('Já existe um usuário cadastrado com este CPF.')
          }

       
        if (!id&&!name && !cpf && !birthDate) {
            errorCode = 404
            throw new Error("Para realizar o cadastro de um novo usário, é necessário informar todos os campos")
        }

        const nascimentoDeArr: string[] = birthDate.split('/')
        const dataNascimento = new Date(Number(nascimentoDeArr[2]), Number(nascimentoDeArr[1]) - 1, Number(nascimentoDeArr[0])).getTime()
        const dataAtual = new Date().getTime()
        const idade: number = Math.floor((dataAtual - dataNascimento) / 1000 / 60 / 60 / 24 / 365)

        if (idade >= 18) {
            Users.push({
                id: Date.now(),
                name,
                cpf,
                birthDate,
                balance,
                extract: []
            })
            res.status(201).send("Conta criada com sucesso!")

        } else {
            errorCode = 422
            throw new Error("O usuário deve ter pelo menos 18 anos, para poder abrir uma conta.");
        }

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})


