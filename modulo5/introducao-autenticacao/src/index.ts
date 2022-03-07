import app from "./app"
//import user from './endpoints/
import createUser from './endpoints/createUser'
import {getUserByEmail} from './endpoints/login'
import { getUserInfo } from "./endpoints/userProfile"


app.post('/user/signup', createUser)
app.get('/user/profile', getUserInfo)
app.post('/user/login',getUserByEmail)

//exercicio 1
// a) *Qual a sua opinião em relação a usar strings para representar os ids? 
//Você concorda que seja melhor do que usar números?*
// R:Com strings abre a possibilidade de varios tipos de caracteres,com conrcondo ser melhor e mais seguro.

//exrcicio 2
//a)R:createUser  função de inserir um novo usuario no banco de dados

//exercicio 3
//a) O que a linha as string faz? Por que precisamos usar ela ali?
//Diz que a jw-key é um string

// exercicio 4
 
