``` 
 Exercício 1
    
    A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à entrada da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 
    
    Abaixo, há o exemplo de uso da função de *hash*

a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

 Round é a resposta do  COST, números de ciclo iterativos. 
Salt é string aleatória adicionada na  senha, na hora da criptação. 
O valor recomendado para o round é 12, pois tem uma boa iteração para criptação e não demora tanto para a resposta. 
Eu usei 12, pois é o equilibrio entre segurança e performace.









    ```
