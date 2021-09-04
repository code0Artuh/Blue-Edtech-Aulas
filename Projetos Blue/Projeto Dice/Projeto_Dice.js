const prompt = require("prompt-sync")();

let start = 0;

if (start === 0) {
  loop();
}

function loop(){


let regras = prompt(`ás regras: escolha a quantidade de jogadores
e a quantidade de rodadas, quem vencer o maior numero de rodadas leva o grande premio
vale atentar-se de que se ambos levar a mesma quantidade de rodadas,
o vencedor sera decidido por qual tirou o maior numero somado nas rodadas,
\nAPERTE ENTER PARA COMEÇAR O JOGO !!!!!`);
//• Guarda todos os objetos em uma lista; (2,0 pontos)
let players = [];
//• Perguntar quantas rodadas você quer fazer; (1,0 ponto)
let rodadas = +prompt("\nQuantas rodadas deseja jogar? : ");
//• Perguntar quantos jogadores vão jogar; (1,5 pontos)
let jog = +prompt("\nQuantas pessoas vão jogar?: ");

for (let i = 0; i < jog; i++) {
  function dado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  //• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
  players[i] = { id: "Jogador " + (i + 1), nome: "", resultados: [] };
  players[i].nome = String(prompt(`Digite o nome do ${i + 1}º jogador: `));
  for (let c = 0; c < rodadas; c++) {
    //• Guarda todos os objetos em uma lista; (2,0 pontos)
    players[i].resultados.push(dado());
    console.log(`${c + 1}º Rodada!: ` + players[i].resultados[c])
  }
}

//• Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado. (2,0 pontos)
let draw = "";
let ganhador = "";
for (let c = 0; c < rodadas; c++) {
  let maior = 0;
  for (cond of players) {
    if (cond.resultados[c] > maior) {
      maior = cond.resultados[c];
      ganhador = cond.nome;
    }
  }
  var cont = 0;
  for (cond2 of players) {
    if (cond2.resultados[c] == maior) {
      cont++;
      if (cont >= 2) draw += `${cond2.nome},`;
    }
  }

  //• Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão. (2,0 pontos)
  if (cont >= 2) {
    console.log(
      `\nHouve um empate entre ${ganhador} e ${draw} ambos tiraram o valor: ${maior} no dado. `
    );
    continue;
  }
  console.log(
    `\nO ${ganhador} ganhou a ${
      c + 1
    }ª rodada, tirando o valor: ${maior} no dado!`
  );
}
if (ganhador > draw) {
  console.log(`\nParabéns, ${ganhador} é o grande campeão!!!`);
} else if (ganhador < draw) {
  console.log(`\nParabéns, ${draw} é o grande campeão!!!`);
} else if (draw === ganhador) {
  console.log("\nInfelizmente temos um empate!!!");
}
let looop = prompt("Gostaria de jogar novamente? 1 para sim e 2 para não!!! ")
  if (looop === "1"){
    loop();
  }else{
  console.log(`\n Thanks for playing!!!`);
  }
}