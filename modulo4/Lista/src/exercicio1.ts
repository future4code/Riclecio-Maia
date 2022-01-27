console.log("exercicio1");
// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). 
//A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 




function nascimento (nome: string, dataDeNascimento: string) {

    const data: string[] = dataDeNascimento.split("/")
 
    return  (`Olá, me chamo ${nome}, nasci no dia ${data[0]} do mês de ${data[1]} do ano de ${data[2]}.`)
 }
 console.log(nascimento("Rick", "23/06/1994"))