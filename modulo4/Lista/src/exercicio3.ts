console.log("exercicio3");
// Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. 
//Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. 
//gênero do filme. Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: 
type catalogo = {
    nome : string | number,
    anoLancamento: number | string,
    genero:GENERO,
    nota?: number | string
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror",
    FANTASIA="Fantasia"
}

const filme1=[{
    nome:"Harry Potter e a Pedra Filosofal",
    anoLancamento:2001,
    genero:GENERO.FANTASIA,
    pontuacao:100
    
},{
    nome:"Os Outros",
    anoLancamento:2001,
    genero:GENERO.TERROR,
    pontuacao:80
},{
    nome:"Como Se Fosse A Primeira Vez",
    anoLancamento:2004,
    genero:GENERO.ROMANCE,
    pontuacao:50
},{
    nome:"Little Nicky-Um Diabo Diferente",
    anoLancamento:2000,
    genero:GENERO.COMEDIA,
    pontuacao:85
},{
    nome:"Antes Que Termine O Dia",
    anoLancamento:2004,
    genero:GENERO.DRAMA,
    pontuacao:40
},{
    nome:"Venon",
    anoLancamento:2018,
    genero:GENERO.ACAO,
    pontuacao:95
}

]
console.log(filme1);
