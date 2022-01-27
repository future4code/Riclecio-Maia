console.log("exercicio4");

// O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, 
//setores e se trabalham presencialmente ou por home office:
enum SETOR{
  MARKETING="marketing", 
   FINANCEIRO = "financeiro",
   VENDAS="vendas"


}
type trabalho={
    nome:string,
    salário:number,
    setor:SETOR,
    presencial:boolean
}

const funcionarios=[
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor:SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
]
// Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. 
//Em seguida, crie uma função que receba este arraycomo parâmetro e 
//retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 
for (let i of funcionarios){
    if((i.setor === SETOR.MARKETING) && (i.presencial)){
        console.log(i)
    }
} 
  
   
   