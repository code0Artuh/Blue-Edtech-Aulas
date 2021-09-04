const prompt = require('prompt-sync')();

let lista = [];
let final = [];


console.log("Seja bem-vindo ao jogo de dados da blue.")
let rodadas = prompt("Digite o numero de rodadas: ");
let jogadores = prompt("\nDigite o numero de jogadores: ");
let warning = prompt(`\nATENÇÃO: DIGITE O NOME DO JOGADOR PRA TODAS AS RODADAS\nEXEMPLO, SE FOR 2 RODADAS DIGITE O NOME\nUMA VEZ POR RODADA APERTANDO ENTER EM SEGUIDA\nE ASSIM POR DIANTE!!!\nAPERTE ENTER PARA CONTINUAR`)
for (let j = 0; j < rodadas; j++){
for (let i = 0; i < jogadores; i++) {
    let objetos = {};
    objetos.nome = prompt(`Digite o nome do jogador ${i}: `);
    objetos.dado = Math.floor(Math.random() * 6) + 1
    objetos.rodada = j
    lista.push(objetos);

    }
    lista.sort((a, b) => {
        if(b.dado < a.dado){
            return-1
        } else {
            return true;
        }
    })
    //coloquei um  push pra lista finl abaixo do sort, todo ganhador da rodada o sort coloca no topo da lista
    //então antes de repetir a rodada eu faço um push desse ganhador para uma nova lista chamada final
    //no final de todas as rodadas eu mostro um console log ja com a organização do maior usando um sort para
    //pra lista final tbm.
    final.push(lista[0].nome, lista[0].dado)
    final.push(lista[1].nome, lista[1].dado)
    
    lista.sort((a, b) => {
        if(b.dado < a.dado){
            return-1
        } else {
            return true;
        }
    })
}

console.log("\nOs dados foram ao chão.........\n\nVamos ver os resultados.\n")

console.log(`E o grande vencedor é ${final[0]}`);