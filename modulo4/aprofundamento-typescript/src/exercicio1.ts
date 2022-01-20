// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como 
//criamos no typescript uma variável que aceite mais de um tipo de valor?
// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades: `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos 
//tenham os mesmos campos.
// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.
type StrOrNum=string|Number
const minhaString:StrOrNum="Rick"
const meuNumero:StrOrNum=27

enum Cores{
    COR1="vermelho",
    COR2="laranja",
    COR3="verde",
    COR4="azul",
    COR5="anil",
    COR6="violeta",
    }

type Person ={
    name:StrOrNum,
    idade:StrOrNum,
    color:Cores
    }
type Info=Person
type Info2=Person
type Info3=Person

const Person1:Info={
    name:"Julia",
    idade:6,
    color:Cores.COR1
}
const Person2:Info2={
    name:"Rick",
    idade:27,
    color:Cores.COR3
}
const Person3:Info3={
    name:"Hanna",
    idade:26,
    color:Cores.COR6
}
const users:Users=[]
type Users= Info[] & Info2[] & Info[]




users.push(Person1)
users.push(Person2)
users.push(Person3)

console.log(users);

console.log(minhaString);
console.log(meuNumero);

