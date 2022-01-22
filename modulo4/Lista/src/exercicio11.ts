console.log("exercicio11");

type Romano = { letra: string, valor: number }

const listRomanos: Romano[] = [
    { letra: "M", valor: 1000 },
    { letra: "CM", valor: 900 },
    { letra: "D", valor: 500 },
    { letra: "CD", valor: 400 },
    { letra: "C", valor: 100 },
    { letra: "XC", valor: 90 },
    { letra: "L", valor: 50 },
    { letra: "XL", valor: 40 },
    { letra: "X", valor: 10 },
    { letra: "IX", valor: 9 },
    { letra: "V", valor: 5 },
    { letra: "IV", valor: 4 },
    { letra: "III", valor: 3 },
    { letra: "II", valor: 2 },
    { letra: "I", valor: 1 }
]

const converter = (numero: number) => {
    let numeroDecimal: number = numero;
    let numeroRomano: string[] = [];
    listRomanos.forEach((romano) => {
        const verificacao = numeroDecimal - romano.valor;
        if (verificacao >= 0) {
            numeroDecimal -= romano.valor;
            numeroRomano.push(romano.letra);
        }
    })
    return numeroRomano.join("");
}

console.log(converter(12));