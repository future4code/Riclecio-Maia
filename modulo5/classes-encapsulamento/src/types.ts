

// export type Transaction = {
//     description: string,
//     value: number,
//     date: string
// }

// export default Transaction 



// - Exercício 2
    
// Transforme a variável de tipo abaixo, chamada `Transaction` em uma 
// classe `Transaction`. Ela deve conter as mesmas propriedades: 
// *data*, *valor* e *descrição*. Agora, porém, todas elas devem 
// ser **privadas**. Portanto, crie métodos (*getters*) 
// para a leitura desses valores, tanto para essa classe 
// quanto para a classe UserAccount. 
// Crie uma instância dessa classe e adicione à 
// instância já criada de UserAccount

class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }
  export default Transaction 


  