const prompt = require ("prompt-sync")(); 

const lista = [];

let rodadas = prompt("quantas rodadas?");

for(var i = 0; i < rodadas; i++){
const objetos = {}

objetos.nome = prompt("digite seu nome");
objetos.idade = prompt ("digite sua idade")
objetos.escola = prompt("digite sua escola")

lista.push(objetos)
}
console.log (lista)