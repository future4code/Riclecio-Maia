// Exercícios de interpretação de código 1
//const bool1 = true
//const bool2 = false
//const bool3 = !bool2

//let resultado = bool1 && bool2 //false
//console.log("a. ", resultado) 

//resultado = bool1 && bool2 && bool3 //false 
//console.log("b. ", resultado) 

//resultado = !resultado && (bool1 || bool2) //true
//console.log("c. ", resultado)

//console.log("d. ", typeof resultado)  //boolean


// Exercícios de interpretação de código 2

//let primeiroNumero  = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")
//let primeiro=(Number (primeiroNumero))
//let segundo=(Number  (segundoNumero))

//const soma = primeiro +  segundo
 
//console.log (soma) 
    
    // //1
        let IdadeDeUsuario = prompt ( "Digite sua idade")
        let IdadeDoMelhorAmigo= prompt("Digite a idade de seu melhor amigo")
        let usuário=(Number (IdadeDeUsuario))
        let melhorAmigo=(Number(IdadeDoMelhorAmigo))
        
        let resultado2= IdadeDeUsuario-IdadeDoMelhorAmigo
        let resultado= IdadeDeUsuario > IdadeDoMelhorAmigo
        
        console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
        console.log("A diferença da sua idade para seu melhor amigo é de",resultado2 ,"anos")



    // //2

    let escrevaUmNumeroPar = prompt ( "Digite Um Numero Par")
     console.log(escrevaUmNumeroPar%2) 
     // o padrão é resultado sempre 0 indicando o numero par.
     //Ao inserir numero impar sempre imprime resultado 1 indicando numero impar.


    // //  3

    let IdadeDeEmAnos = prompt ( "Digite quantos anos tem")

    console.log (IdadeDeEmMeses = IdadeDeEmAnos * 12)
    console.log (IdadeDeEmDias = IdadeDeEmMeses * 30.4166667)   
    console.log (IdadeEmHoras = IdadeDeEmDias *24)

    //4  

    let idadeDaMae = prompt ( "Digite quantos anos sua mãe tem")
    let IdadeDoPai = prompt ( "Digite quantos anos seu pai tem")
    
    let Mae=(Number (idadeDaMae))
    let pai=(Number(IdadeDoPai))
    let resultado1 = idadeDaMae>IdadeDoPai
    let resultado2 = idadeDaMae===IdadeDoPai
    let resto1 = (idadeDaMae%IdadeDoPai)
    let resto2 = (IdadeDoPai%idadeDaMae)
    let resultado3 = resto1===0
    let resultado4 = resto2===0

    
    console.log("O primeiro numero é maior que segundo?", resultado1)
    console.log("O primeiro numero é igual que segundo?", resultado2)
    console.log("O primeiro numero é divisivel pelo segundo?", resultado3)
    console.log("O segundo numero é divisivel pelo primeiro?", resultado4)
    
