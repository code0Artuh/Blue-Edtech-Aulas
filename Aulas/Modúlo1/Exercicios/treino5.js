const prompt = require('prompt-sync')();

let i = 0;
if (i === 0){
    ficha();
} 

function ficha(){
    i++
    let nome = prompt("Digite o nome do jogador: ");
    let gols = prompt("Digite quantos gols ele fez: ")
    console.log(`FICHA TECNICA DO JOGADOR\nNOME DO JOGADOR: ${nome}\nQUANTIDADE DE GOLS: ${gols}`)
}


