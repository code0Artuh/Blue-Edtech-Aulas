//criei esta função pra corrigir a escrita da escolha,
//na hora de comparar fica exato, sei que da pra facilitar de outras formas.
function venv(variavel) {
  if (variavel == "PEDRA") {
    return "Pedra";
  } else if (variavel == "PAPEL") {
    return "Papel";
  } else if (variavel == "TESOURA") return "Tesoura";
}
//no projeto anterior eu utilizei emojis tbm,
//porem devo dar creditos ao bruno que neste projeto me informou
//da possibilidade dos emojis globais do windows, e eu só conhecia uma limitada
//cadeia de emojis pra usar.
console.log("Bem-Vindo ao Jokenpo da Blue✌️😁\n 🪨  📝 ✂️");
let nome = prompt(`\n🥸 Para começarmos digite seu nome:`);
//declarei uma variavel com valor 0 pra poder iniciar uma função
//o if chama a função se o contador for =0
let count2 = 0;

if (count2 === 0) {
  venv3();
}
//a função venv3 embarca a maior parte do codigo, a base central do jogo eu coloquei aqui dentro
function venv3() {
  let ch = 0;

  let co = 0;

  let contador = 0;

  let rounds = prompt(`\nPor favor escolha quantas rodadas quer jogar:`);
//decidi trazer um for mais simples aqui em cima apos aprender coisas novas
  for (var i = 0; i < rounds; i++)

  if (contador === 0) {
    venv2();
  }
  //essa função venv2 esta dentro da função venv3, ela esta aqui pra poder separar
  //separa os contadores que utilizo mais tarde com matematica pra ativar outras coisas
  function venv2() {
    let choose = venv(
      prompt(`\n${nome} É importante que você escreva a sua opção entre\n
Pedra
Papel
Tesoura\n: `).toUpperCase()
    );
    //declarei aqui as linhas que faz a escolha aleatoria
    var opções = ["Pedra", "Papel", "Tesoura"];
    //ele pega aleatoriamente do array que declarei acima
    var comp = opções[Math.floor(Math.random() * opções.length)];

    if (choose === comp) {
      console.log(
        `\nVocê escolheu ${choose} e o computador ${comp} temos um empate`
      );
    } //aqui eu começo uma cadeia de if pra fazer compare das escolhas e me dar um resultado
    if (choose === "Pedra" && comp === "Papel") {
      console.log(
        `\nVocê escolheu ${choose} e o computador escolheu ${comp} então você perdeu a rodada`
      );
      co = co + 1; //pra cada resultado eu adiciono +1 ao contador referente ao resultado da comparação no jogo
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
      //daqui pra baixo tenho os resultados entregues levando em consideração a pontuação do jogador e do comp
      console.log(
        `\nO jogador(a):${nome} ganhou ${ch} rodada(s) e o computador ganhou ${co} rodada(s)\n`
      );
  }

  if (co === ch) {
      console.log(
        `\nVamos aos resultados finais!!!\n \n(●'◡'●) Infelizmente temos um impate!!! (●'◡'●)`
      );
    }
    if (ch > co) {
      console.log(
        `\nVamos aos resultados finais!!!\n \no(≧▽≦)o Parabéns você é o vencedor!!! o(≧▽≦)o `
      );
    }
    if (co > ch) {
      console.log(
        `\nVamos aos resultados finais!!!\n \nಥ_ಥ Infelizmente você perdeu!!!ಥ_ಥ`
      );
    }
  //logo após a entrega do resultado eu chamo meu ultimo prompt
    let final = String(
      prompt(`\nDeseja jogar novamente? sim ou não?`).toUpperCase()
    );

    //aqui se a resposta for diferente de sim, finalizo o jogo
    //se a pessoa quiser jogar novamente eu chamo a função venv3 la do inicio
    if (final !== "SIM") {
      console.log("Obrigado por jogar!!!");
    } else {
      venv3();
  }
}
