function venv(variavel) {
  if (variavel == "PEDRA") {
    return "Pedra";
  } else if (variavel == "PAPEL") {
    return "Papel";
  } else if (variavel == "TESOURA") return "Tesoura";
}
console.log("Bem-Vindo ao Jokenpo da Blue");
let nome = prompt(`\nPara começarmos digite seu nome:`);
let count2 = 0;

if (count2 === 0) {
  venv3();
}

function venv3() {
  let ch = 0;

  let co = 0;

  let contador = 0;

  let rounds = prompt(`\nPor favor escolha quantas rodadas quer jogar:`);

  if (contador === 0) {
    venv2();
  }

  function venv2() {
    let choose = venv(
      prompt(`\n${nome} Escolha entre
Pedra
Papel
Tesoura: `).toUpperCase()
    );

    var opções = ["Pedra", "Papel", "Tesoura"];

    var comp = opções[Math.floor(Math.random() * opções.length)];

    if (choose === comp) {
      console.log(
        `\nVocê escolheu ${choose} e o computador ${comp} temos um empate`
      );
    }
    if (choose === "Pedra" && comp === "Papel") {
      console.log(
        `\nVocê escolheu ${choose} e o computador escolheu ${comp} então você perdeu a rodada`
      );
      co = co + 1;
    }
    if (choose === "Pedra" && comp === "Tesoura") {
      console.log(
        `\nVocê escolheu ${choose} e o computador escolheu ${comp} então você Ganhou a rodada`
      );
      ch = ch + 1;
    }
    if (choose === "Papel" && comp === "Tesoura") {
      console.log(
        `\nVocê escolheu ${choose} e o computador escolheu ${comp} então você perdeu a rodada`
      );
      co = co + 1;
    }
    if (choose === "Papel" && comp === "Pedra") {
      console.log(
        `\nVocê escolheu ${choose} e o computador escolheu ${comp} então você Ganhou a rodada`
      );
      ch = ch + 1;
    }
    if (choose === "Tesoura" && comp === "Papel") {
      console.log(
        `\nVocê escolheu ${choose} e o computador escolheu ${comp} então você Ganhou a rodada`
      );
      ch = ch + 1;
    }
    if (choose === "Tesoura" && comp === "Pedra") {
      console.log(
        `\nVocê escolheu ${choose} e o computador escolheu ${comp} então você perdeu a rodada`
      );
      co = co + 1;
    }
    rounds = rounds - 1;

    for (var i = 0; i !== rounds; venv2())
    console.log(
      `\nO jogador(a):${nome} ganhou ${ch} rodada(s) e o computador ganhou ${co} rodada(s)\n`
    );

    if (co === ch) {
      console.log(`\nVamos aos resultados finais!!!\n \nInfelizmente temos um impate!!!`);
    }
    if (ch > co) {
      console.log(`\nVamos aos resultados finais!!!\n \nParabéns você é o vencedor!!!`);
    }
    if (co > ch) {
      console.log(`\nVamos aos resultados finais!!!\n \nInfelizmente você perdeu!!!`);
    }
  }
  if (rounds < 1){
    let final = String(
      prompt(`\nDeseja jogar novamente? sim ou não?`).toUpperCase()
    );

    
     if (final !== "SIM") {
      console.log("Obrigado por jogar!!!");
    } else {
      venv3();
    }}
}

