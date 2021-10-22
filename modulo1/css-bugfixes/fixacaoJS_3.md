```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let provas=p1+p2+ex
  let media=provas/3
  let nota=media
if(nota>=9){
  return "A"
} else if(nota<9 && nota>=7.5 ){
return "B"
}else if(nota<7.5 && nota>=6){
return  "C"}
else if(nota<6){
  return  "D"}
}```