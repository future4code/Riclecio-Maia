import app from "./app"


import Transaction from "./types";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
} 
// exercicio 1
// a) ele executa ações e parametros dentro  da classe 

// b) 1

// c) Podem ser acessadas pela própria classe somente,

// - Exercício 2 - esta no arquivo types.ts

//exercicio 3
// Crie uma classe Bank, que será responsável por guardar todos os 
//dados da aplicação. Ela deve possuir a propriedades accounts, 
//privada (crie os getters e setters)

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }

  