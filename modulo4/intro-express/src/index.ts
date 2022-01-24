import express from "express";

import { AddressInfo } from "net";
import { userInfo, UserInfo } from "os";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});; //Exercicio 1

app.get("/",(req,res)=>{
    res.status(200).send("Hello from Express")
})
console.log("vamos");
//exercicio 2
 type person={
    id:number,
    name:string,
    phone:string,
    email:string,
    website:string,
    filmeFavorito:String,
    corFavorita:string,
    
    
};


//exercicio 3

let usuarios:person[] =[{
    id:1,
    name:"Rick",
    email:"rick@rick.com",
    corFavorita:"verde",
    filmeFavorito:"Harry Potter",
    website:"www.hp.com",
    phone:"11 5555-4444"
    
    
},{
    id:2,
    name:"Hanna",
    email:"hanna@hanna.com",
    corFavorita:"rosa",
    filmeFavorito:"Senhor Dos Aneis",
    website:"www.sp.com",
    phone:"11 6666-8888"
    
},{
    id:3,
    name:"Ana Julia",
    email:"julia@julia.com",
    corFavorita:"rosa",
    filmeFavorito:"Barbie",
    website:"www.Bb.com",
    phone:"11 1111-5555"
    
},{
    id:4,
    name:"Mirian",
    email:"mirian@mirian.com",
    corFavorita:"azul",
    filmeFavorito:"Comédia no geral",
    website:"www.CG.com",
    phone:"11 3333-4444"
    
}
]
 
//exercicio 4
app.get("/users",(req,res)=>{
    res.status(200) .send(usuarios)
});
//exercicio 5
type userPost={
    id:number,
    title:string,
    body:string,
    userId:number,
};
// exercicio 6
//r: fora  acho mais claro e mais organizado
let posts:userPost[]=[{
    userId:3,
    id:1,
    title:"Vamos nessa",
    body:"A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, e sim em ter novos olhos.",
},{
    userId:4,
    id:2,
    title:"solidao",
    body:"Não há solidão mais triste do que a do homem sem amizades. A falta de amigos faz com que o mundo pareça um deserto.",
},{
    userId:2,
    id:3,
    title:"inteligencia",
    body:"A estupidez coloca-se na primeira fila para ser vista; a inteligência coloca-se na retaguarda para ver.",
},{
    userId:1,
    id:4,
    title:"inteligencia",
    body:"Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.",
},
]
////exercicio 7
app.post("/posts",(req,res)=>{
    res .status(200).send(posts)});
///exercicio 8


app.post('/posts/:id', (req, res)=>{
    const user = Number(req.params.id)
    const filtro = posts.filter((userPost)=>{
        if(user === userPost.userId){
          return userPost
        }
      })
    res.status(200).send(filtro)
  }) 