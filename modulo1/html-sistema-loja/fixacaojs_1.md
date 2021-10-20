```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let salario = 2000
let carros= qtdeCarrosVendidos*100
let valor=valorTotalVendas*5
let porcento=valor/100
let comissao = porcento + carros
let final=comissao+salario

return final
}```