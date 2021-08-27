/*Exercício Treino 1 - Escreva uma função que recebe dois parâmetros (números) e 
imprime o menor dos dois. Se eles forem iguais, imprima que são valores idênticos.*/

let a = 0;

function print() {
  let b = prompt("digite um valor");
  let c = prompt("digite um valor");
  if (c > b) {
    console.log(`${b} é menor`);
  } else if (c == b) {
    console.log("os valores são identicos");
  } else if (c < b) {
    console.log(`${c} é menor`);
  }
}
if (a === 0) {
  print();
}
