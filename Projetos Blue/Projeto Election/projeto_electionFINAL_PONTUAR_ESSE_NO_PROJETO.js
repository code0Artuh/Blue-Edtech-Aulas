const prompt = require('prompt-sync')();

let cand1 = 0;
let cand2 = 0;
let cand3 = 0;
let nulo = 0;
let branco = 0;

function exibirResultados() {
  console.log("Exibindo os resultados:\n");
  console.log(`Candidato 1 recebeu ${cand1} votos.\n`);
  console.log(`Candidato 2 recebeu ${cand2} votos.\n`);
  console.log(`Candidato 3 recebeu ${cand3} votos.\n`);
  console.log(`Tivemos ${nulo} votos nulos.\n`);
  console.log(`Tivemos ${branco} votos brancos.\n`);
  if (cand1 > cand2 && cand3 < cand1) {
    console.log(
      `Com ${cand1} votos, o Candidato 1 é o vencedor das eleições da Blue`
    );
  } else if (cand2 > cand3 && cand1 < cand2) {
    console.log(
      `Com ${cand2} votos, o Candidato 2 é o vencedor das eleições da Blue`
    );
  } else if (cand3 > cand1 && cand2 < cand3) {
    console.log(
      `Com ${cand3} votos, o Candidato 3 é o vencedor das eleições da Blue`
    );
  } else if (nulo > cand1 && nulo > cand2 && nulo > cand3) {
    console.log("ninguem ganhou as eleições");
  } else if (branco > cand1 && branco > cand2 && branco > cand3) {
    console.log("ninguem ganhou as eleições");
  } else if (cand1 === cand2 && cand1 === cand3) {
    console.log("temos um empate");
  } else if (cand1 === cand2 && cand1 > cand3) {
    console.log("temos um empate");
  } else if (cand1 === cand3 && cand1 > cand2) {
    console.log("temos um empate");
  } else if (cand2 === cand3 && cand2 > cand1) {
    console.log("temos um empate");
  } else if (cand2 === cand1 && cand2 > cand3) {
    console.log("temos um empate");
  } else if (cand3 === cand2 && cand3 > cand1) {
    console.log("temos um empate");
  } else if (cand3 === cand2 && cand3 > cand2) {
    console.log("temos um empate");
  }
}

function votacao(autorizacao, voto){
  autorizacao = autorizaVoto();
  if(autorizacao === "Negado"){
    console.log("\nVocê não pode votar\n")
  }else if (autorizacao === "Obrigatorio"){
    console.log("\nVoto Obrigatorio\n")
    jogo();
  }else if (autorizacao === "Opcional"){
    console.log("\nVoto Opcional\n")
    console.log("Voce deseja votar?\n1- sim\n2- nao\n")
    let op = +prompt("Digite o numero da sua escolha: ")
    if(op === 1){
      jogo();
    }
  }
  function jogo(){
    console.log(`
  Digite o seu voto de acordo com o numero desejado
  1- candidato 1
  2- candidato 2
  3- candidato 3
  4- nulo
  5- branco
  `)
  voto = +prompt("Digite: ")
  }
  if(voto === 1){
    cand1++
  }else if(voto === 2){
    cand2++
  }else if(voto === 3){
    cand3++
  }else if(voto === 4){
    nulo++
  }else if(voto === 5){
    branco++
  }
  console.log("Mais alguem pra votar?\n1- sim\n2- nao\n")
  let mais = +prompt("Digite: ")
  if(mais === 1){
    autorizaVoto();
    votacao();
  }else{exibirResultados()}
}

let call = 0;

function autorizaVoto(anoNascimento){

  anoNascimento = +prompt("Digite o ano de nascimento: ");
  if (anoNascimento > 2003){
    return "Negado"
  }else
  if (anoNascimento < 2004 && anoNascimento > 1970){
    return "Obrigatorio"
  }else
  if (anoNascimento < 1971){
    return "Opcional"
  }
}

if (call === 0){
  votacao();
}

