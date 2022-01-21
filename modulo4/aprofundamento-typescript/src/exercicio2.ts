// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a 
//tipagem desses parâmetros
// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// c) Crie um *type* chamado **amostra** de dados, isto é, 
//um objeto com as propriedades **numeros** e **obterEstatisticas**. 
//Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

function obterEstatisticas(numeros: Array<number>){

    const numerosOrdenados: Array<number> = numeros.sort(
        (a: number, b: number) => a - b
    )
    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        media: soma / numeros.length,
        menor: numerosOrdenados[0]
    }

    return estatisticas
}
console.log(obterEstatisticas([2, 5]))


type Amostra = {
    numeros : number[], 
    obterEstatisticas: (numeros: number[]) => {
        maior: number,
        media: number,
        menor: number
    }
}

const Idades: Amostra = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: obterEstatisticas
}
console.log(Idades.obterEstatisticas(Idades.numeros))