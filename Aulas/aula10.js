const prompt = require('prompt-sync')();

let cores = ["azul","branco","verde","amarelo","rosa","roxo"];

let index = 0;

while (index < cores.length) {
    console.log(index, cores[index]);
    index++;
}