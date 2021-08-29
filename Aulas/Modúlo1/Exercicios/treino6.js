const prompt = require("prompt-sync")();

/*Um professor, muito legal, fez 3 provas durante um semestre, 
mas só vai levar em conta as duas notas mais altas para calcular a média.
Faça uma aplicação que peça o valor das 3 notas, mostre como seria a média 
com essas 3 provas, a média com as 2 notas mais altas, bem como sua nota mais alta e sua nota mais baixa.
*/

let notaa = parseInt(prompt("Digite a primeira nota: "));
let notab = parseInt(prompt("Digite a segunda nota: "));
let notac = parseInt(prompt("Digite a terceira nota: "));

let notas = notaa + notab + notac / 3;

console.log(`Sua média com 3 notas é: ${notas}`);

if (notac < notab && notac < notaa && notaa > notab) {
  let ab = notaa + notab / 3;
  console.log(`Sua média com as duas maiores notas é: ${ab}`);
} else if (notaa < notac && notaa < notab && notac > notaa) {
  let cb = notac + notab / 3;
  console.log(`Sua média com as duas maiores notas é: ${cb}`);
} else if (notab < notaa && notab < notac && notaa > notab) {
  let ca = notac + notaa / 3;
  console.log(`Sua média com as duas maiores notas é:`);
  console.log(notac + notaa / 3);
}

if (notaa > notab && notaa > notac) {
  console.log(`Sua maior nota é: ${notaa}`);
} else if (notab > notaa && notab > notac) {
  console.log(`Sua maior nota é: ${notab}`);
} else if (notac > notab && notac > notaa) {
  console.log(`Sua maior nota é: ${notac}`);
}

if (notaa < notab && notaa < notac) {
  console.log(`Sua menor nota é: ${notaa}`);
} else if (notab < notaa && notab < notac) {
  console.log(`Sua menor nota é: ${notab}`);
} else if (notac < notab && notac < notaa) {
  console.log(`Sua menor nota é: ${notac}`);
}
