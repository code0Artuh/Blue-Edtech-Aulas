const prompt = require("prompt-sync")();
//Contadores//////////
let bolsa = [];
let life = 100;
let estamina = 100;
let nome = "";
//////////////////////

///Inicio da aventura////
console.log("Bem vindo a aventura!\n");
console.log("gostaria de iniciar o jogo?");

let begin = prompt("sim ou não?");

if (begin === "sim") {
  initialize();
}

///Código base////////////
function initialize() {
  console.log("Qual o seu nome aventureiro?\n");
  let name = prompt("Digite seu nome: ");
  nome = name;
  console.log(`Bem-vindo ${nome}`);
  console.log("Gostaria de sair de casa ?");
  let lh = prompt("sim ou não?");
  if (lh === "sim") {
    console.log(
      "vc saiu de casa e se deparou com um monstro, gostaria de pegar o machado a sua esquerda?"
    );
    let axe = prompt("sim ou não?");
    if (axe === "sim") {
      let machado = {};
      machado.nome = "Machado";
      machado.item = 1;
      bolsa.push(machado);
    }
  }

  
  setTimeout(function () {
    console.log(`${nome} bateu no monstro com o Machado`);
  }, 1000);

  setTimeout(function () {
    console.clear();
  }, 3000);

  setTimeout(function () {
    console.log("Monstro revidou e tirou 10 do seu hp");
    life = 90;
  }, 5000);

  setTimeout(function () {
    console.clear();
  }, 7000);

  setTimeout(function () {
    console.log(`seu hp agora esta em ${life}%`);
  }, 9000);
  
  
}
