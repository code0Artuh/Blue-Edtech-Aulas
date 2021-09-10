const prompt = require('prompt-sync')();

/*ponto 1: acorda pendurado em uma arvore, oque esta acontecendo??
sua boca esta seca, vc esta tonto e meio confuso
pq vc esta preso nessa arvore por um paraquedas?
como vc se chama mesmo?
meu deus, oque esta acontecendo
{vc deseja gritar?}if(sim){
seus gritos não estão sendo ouvidos por ninguem, parece que voce esta sozinho...........
ou pelo menos é oque vc pensa até ouvir alguns barulhos vindo daquele beco}
if(não){como vou descer daqui?}*/

let finala = 0;
let finalb = 0;
let finalc = 0;

console.log("================================")
console.log("======Blue, Edtech of dead======")
console.log("======= Molina's Revenge 🥸====")
console.log("================================")

let novojogo = prompt("Novo Jogo: \nAperte Enter")

if(novojogo === 0){
  jogo();
}

function jogo(){
  console.log("Você acorda pendurado em uma arvore\noque esta acontecendo?....\nsua boca esta seca,vc esta tonto e meio confuso")
  console.log("porque você está preso nesta arvore por um paraquedas?")
  console.log("como vc se chama mesmo?\nmeu deus, oque esta acontecendo")

  let gritar = prompt("Você deseja gritar? sim ou não: ")
  if(gritar === "sim"){
    console.log("seus gritos não estão sendo ouvidos por ninguem, parece que voce esta sozinho......")
    console.log("ou pelo menos é oque você pensa até ouvir alguns barulhos vindo de um beco proximo daquele predio a frente")
}else if(gritar === "não" || gritar === "nao"){
  let descer = prompt("tentar se soltar? sim ou nao: ")
  if(descer === "sim"){
    jogo1();
  }
}
}
function jogo1(){
  console.log("Você alcança o sinto do paraquedas e consegue se soltar")
}



