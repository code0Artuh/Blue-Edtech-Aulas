//Treino 3 - Crie uma função que receba uma string como argumento e retorne a mesma
//string em letras maiúsculas. Faça uma chamada à função, passando como parâmetro uma string.

const prompt = require('prompt-sync')();

let nome = prompt(`Digite seu nome:`);

if(nome === "artur"){
    string();
}

function string(){
      console.log(nome.toUpperCase());  
}

