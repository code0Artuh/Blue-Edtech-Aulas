const prompt = require('prompt-sync')();

let qtd = +prompt("Quantas pessoas iram votar: ");

let qnt = qtd;

let cand1 = 0;
let cand2 = 0;
let cand3 = 0;
let nulo = 0;
let branco = 0;

function candidato(){
    let b = +prompt("escolha o numero referente ao seu voto\ncandidato1 = 1\ncandidato2 = 2\ncandidato3 = 3\nnulo = 4\nbranco = 5\nDigite o numero: ");
    if(b === 1){
        cand1++;
    }else if(b === 2){
        cand2++;
    }else if(b === 3){
        cand3++;
    }else if(b === 4){
        nulo++;
    }else if(b === 5){
        branco++;
    }
}

function resultados(){
    console.log("Exibindo os resultador:\n");
    console.log(`Candidato 1 recebeu ${cand1} votos.\n`);
    console.log(`Candidato 2 recebeu ${cand2} votos.\n`);
    console.log(`Candidato 3 recebeu ${cand3} votos.\n`);
    console.log(`Tivemos ${nulo} votos nulos.\n`);
    console.log(`Tivemos ${branco} votos brancos.\n`);
    if( cand1 > cand2 && cand3 < cand1) {
        console.log(`Com ${cand1} votos, o Candidato 1 é o vencedor das eleições da Blue`)
    }else if( cand2 > cand3 && cand1 < cand2) {
        console.log(`Com ${cand2} votos, o Candidato 2 é o vencedor das eleições da Blue`)
    }else if( cand3 > cand1 && cand2 < cand3) {
        console.log(`Com ${cand3} votos, o Candiddato 3 é o vencedor das eleições da Blue`)
    }else if(nulo > cand1 && nulo > cand2 && nulo > cand3) {
        console.log("ninguem ganhou as eleições")
    }else if(cand1 === cand2 && cand1 === cand3) {
        console.log("temos um empate")
    }
}

for(var i = 0; i < qnt; i++) {
    voto()
}


function voto(){

let a = 0;
if (a === 0){
    autorizaVoto();
}

function autorizaVoto(){
    let ok = 0;
let choose = 0;
let no = 0;
    let idade = +prompt("Digite o ano do seu nascimento com 4 digitos: ");
    if(idade > 2003){
        no++;
        console.log("voto negado");
    }else if(idade < 2004 && idade >
        1971){
        ok++;
        console.log("voto obrigatorio");
    }else if(idade < 1972 ){
        choose++;
        console.log("voto opcional")
    }
    votação();

    function votação(){
        if(no === 1){
            console.log("você não pode votar")
        }else if (ok === 1) {
            candidato();
        }else if(choose === 1){
            let k = +prompt("você gostaria de votar? 1-sim ou 2-não: ")
            if(k === 1){
                candidato();
            }
        }
    }
}

}
let prg = +prompt("Mais alguem pra votar? 1-sim ou 2-não: ")
if(prg === 1){
    voto();
    resultados();
}else if (i === qnt) {
    resultados();
}