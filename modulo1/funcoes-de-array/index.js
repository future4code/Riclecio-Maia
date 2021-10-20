///// Exercicio de interpretação de codigo \\\
   
    //// EXERCICIO 1 \\
    
    
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" }
    // ]
    
    // const novoArrayA = usuarios.map((item, index, array) => {
    //    console.log(item, index, array)
    // })
    
    
 //a) O que vai ser impresso no console?
     // R:
     // 0 nome: "Amanda Rangel", apelido: "Mandi" array(3)
     // 1 nome: "Laís Petra", apelido: "Laura"  array(3)
    // 2 nome: "Letícia Chijo", apelido: "Chijo" array(3)

    /// EXERCICIO 2 \\
  
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)


//a) O que vai ser impresso no console?
   //R: 
    // 0: "Amanda Rangel"
    // 1: "Laís Petra"
    // 2: "Letícia Chijo"


  //// EXERCICIO 3 \\

//   const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)


//a) O que vai ser impresso no console?
    // R:
    //0: nome: 'Amanda Rangel', apelido: 'Mandi'
    //1: nome: 'Laís Petra', apelido: 'Laura'

///////////////////


//Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]


//a) Crie um novo array que contenha apenas o nome dos doguinhos


const somenteNomes=(pets) => {

    return pets.nome
}
const soNomes = pets.map(somenteNomes)
console.log(soNomes);

//b) Crie um novo array apenas com os cachorros salsicha

const somentePetSalsicha=(pets) =>{
    return pets.raca === "Salsicha"
}
const salsicha=pets.filter(somentePetSalsicha)
console.log(salsicha);


//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.A
     // mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
    
     const somentePetSalsicha=(pets) =>{
     return pets.raca === "Poodle"
     
     }
    const poodle=pets.filter(somentePetSalsicha)
     console.log(poodle);
     
     
     const mensagemDeDesconto = (poodle) => {
  
        return `"Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome} `}

    const desconto =poodle. map(mensagemDeDesconto)
     console.log(desconto);


//Dado o seguinte array de produtos, realize as operações 
//pedidas nos itens abaixo utilizando as funções de array map e filter:

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }]

       // a) Crie um novo array que contenha apenas o nome de cada item
       
       const nomes=(produtos)=>{

            return produtos.nome
        }
        const soNome=produtos.map(nomes)
        console.log(soNome);

   //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
   //aplicando 5% de desconto em todos eles

   const arrayComPorcento=(produtos)=>{

    produtos.array = produtos.preco *95
    produtos.array = produtos.array/100
      return produtos 
    }
    const valor=produtos.map(arrayComPorcento)
    
    console.log(valor);

    //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
    

    const bebidas=(produtos)=>{
        
        return produtos.categoria==="Bebidas"

    } 
const lista=produtos.filter(bebidas)
console.log(lista);

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const produtosDeLimpeza=(produtos)=>{
        
           return  produtos.nome.includes(" Ypê")
            
            }

            
    const limpeza=produtos.filter(produtosDeLimpeza)
    console.log(limpeza);


//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


const produtosDeLimpeza=(produtos)=>{
        
                return produtos.nome.includes(" Ypê")
            }
          
                
         const limpeza=produtos.filter(produtosDeLimpeza)
         //console.log(limpeza);
         
 const nomeDosProdutosDeLimpeza = produtos.filter(produtosDeLimpeza).map(produtosDeLimpeza)
console.log(limpeza )
console.log(`Compre ${nome} é ${preco}`);
 