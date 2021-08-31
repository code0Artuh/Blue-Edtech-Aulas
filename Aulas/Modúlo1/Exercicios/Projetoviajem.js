const prompt = require("prompt-sync")();
/*Hospedagem
1 - Crie uma função chamada 'custo_hotel' que receba um parâmetro (argumento) chamado 'noites' e 
retorne o custo total do hotel, sendo que 1 noite custa R$ 140,00.
*/
let a = prompt("Digite quantas noites gostaria de ficar: ");

if (a > 0) {
  custo_hotel();
} else {
  console.log("Digite um valor valido");
}

function custo_hotel() {
  let noites = 140;
  var b = noites * a;
  console.log(
    `\nO valor total das suas noites é de ${b.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}\n`
  );
}

/*Passagem
2 - Crie uma função chamada 'custo_aviao' que receba o nome da cidade e retorne o custo da passagem de avião, sendo que passagem para:
- São Paulo custa R$ 312,00;
- Porto Alegre custa R$ 447,00;
- Recife custa R$ 831,00;
- Manaus custa R$ 986,00.
*/

let viajem =
  prompt(`\nEscolha um destino para a viagem digitando o numero referente ao destino:\n
1- São Paulo custa R$ 312,00;\n
2- Porto Alegre custa R$ 447,00;\n
3- Recife custa R$ 831,00;\n
4- Manaus custa R$ 986,00: `);

if (viajem > 0) {
  custo_aviao();
} else {
  console.log("Digite um valor valido");
}

function custo_aviao() {
  if (viajem === "1") {
    console.log(`Você escolheu São Paulo, o valor é R$ 312,00;\n`);
  } else if (viajem === "2") {
    console.log(`Você escolheu Porto Alegre, o valor é R$ 447,00;\n`);
  } else if (viajem === "3") {
    console.log(`Você escolheu Recife, o valor é R$ 831,00;\n`);
  } else if (viajem === "4") {
    console.log(`Você escolheu Manaus, o valor é R$ 986,00;`);
  }
}
