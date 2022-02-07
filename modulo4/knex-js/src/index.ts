//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import connection from "./connection"


//iniciando a aplicação web com express
const app = express();
//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());



//a) Explique como é a resposta que temos quando usamos o raw. 
//R:permite acessar os dados  do ator nome,salario..  do ID escolhido

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
    return result[0][0]

};

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("002")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });
//Assim a chamada funciona fora dos endpoints com await
// (async () => {
//     console.log(await getActorById("001") )
//   })()


// Ou então podemos chamá-la dentro de um endpoint

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
//1)
//b) Faça uma função que busque um ator pelo nome;

const getActorByName = async (nome: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE nome = '${nome}'
    `)
    return result[0][0]
}

(async () => {
    console.log(await getActorByName("Tony Ramos"))
})()


//c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. 
//Para atrizes, female e para atores male

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
            `);
    const count = result[0][0].count;
    return count;
};

(async () => {
    console.log(await countActors("female"))
})()


//2)--
//a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};

//endpoint
app.put("/users/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection("Actor")
            .update({
                id: req.body.id,
                salary: req.body.salary,
            })

            .where({ id: req.params.id });

        res.status(200).send({ message: "Ator atualizado" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});
//b) Uma função que receba um id e delete um ator da tabela

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
};

//c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores 
//desse gender

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0].average;
};
(async () => {
    console.log(await avgSalary("male"))
})()

//3)

//a) Crie um endpoint com as especificações 

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

//b) Crie um endpoint agora com as seguintes especificações:
//- Deve ser um GET (`/actor`)
//- Receber o gênero como um *query param* (`/actor?gender=`)
//- Devolver a quantidade de atores/atrizes desse gênero
app.get('/actor', async (req: Request, res: Response) => {
    try {
        const count = await countActors(req.query.gender as string);
        res.status(200).send({
            quantity: count,
        });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});//colocar (query params) male ou female


//04)Vamos fazer um endpoint para criar um novo ator. Para isso, devemos:
// - Definir o método como `POST`
// - Criar um path: `/actor`
// - Receber os parâmetros pelo body
const createActor = async (
    id: string,
    nome: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            nome: nome,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor");
};
app.post("/actor", async (req: Request, res: Response) => {
    try {
        await createActor(
            req.body.id,
            req.body.nome,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.gender
        );

        res.status(200).send("ator criado");
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});
//A)- Endpoint para atualizar salário com id
// - Deve ser um PUT (`/actor`)
// - Receber o salário e o id pelo body
// - Simplesmente atualizar o salário do ator com id em questão.

app.put('/actor', async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        const salary = req.body.salary;
        await updateActor(id, salary);
        res.status(200).send({ message: 'sucesso' });
    } catch (error: any) {
        res.statusCode = 500;
    }
});


//- b) Endpoint para deletar ator da tabela
//   - Deve ser um DELETE (`/actor/:id`)
//   - Receber id do ator como *path param*
//   - Simplesmente deletar o ator da tabela


app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {

        await deleteActor(req.params.id);
        res.status(200).send({ message: 'sucesso' });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});














//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;