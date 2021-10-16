/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    function comprarCarta() {
        // Cria array de cartas
        const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      
        // Cria array de naipes
        const naipes = ["♦️", "♥️", "♣️", "♠️"]
      
        // Sorteia uma carta
        const numero = cartas[Math.floor(Math.random() * 13)]
      
        // Sorteia um naipe
        const naipe = naipes[Math.floor(Math.random() * 4)]
      
        let valor
      
        // Verifica se é uma das letras e coloca o valor correspondente na variável valor
        if (numero === "A") {
          valor = 11
        } else if (numero === "J" || numero === "Q" || numero === "K") {
          valor = 10
        } else { // Se nao for uma das letras, só converte a string para número
          valor = Number(numero)
        }
      
        // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
        const carta = {
          texto: numero + naipe,
          valor: valor
        }
      
        return carta
      }
       
      console.log("Boas vindas ao jogo de BlackJack")
      if (confirm("Quer iniciar uma nova rodada?") === true){
           const carta = comprarCarta();
           const computador = comprarCarta();
           console.log(`Usuario - cartas:${carta.texto} - pontuação ${carta.valor}`)
           console.log(`Usuario - cartas:${computador.texto} - pontuação ${computador.valor}`)
           //console.log(carta.valor)
           if (carta.valor > computador.valor){
              console.log ("O usuario ganhou")
           }else if (carta.valor < computador.valor){
              console.log("O computador ganhou")
           }else {
              console.log("Empate")
           }
      }else{
         console.log("o jogo acabou")
      }