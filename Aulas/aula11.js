// Exemplo 1 - While

const prompt = require("prompt-sync")();

let resultado = "";
let a = 0;

while (a < 8) {
  a += 1; //a é = a + 1
  resultado += a; //resultado = reultado + g
  console.log(resultado);
}

//Exemplo 2 DO...........WHILE

let resultado2 = "";
let b = 0;

do {
  b = b + 1;
  resultado2 = resultado2 + b;
} while (b < 5);
console.log(resultado2);


//OBJETOS

let aluno = {}; //Objeto vazio

let bicicleta = {}; 

//Função setTimeout;

setTimeout(function(){
    console.log("apos 3 segundos")
},
3000
)

let pessoa = {
    nome:"artur",
    idade:"24",
  };
  
  let cori = prompt("digite uma cor: ");
  
  pessoa.cor = cori
  

//this function 
  
pessoa.interesse = ["1", "2", "3", "4", "5", "6"];

pessoa.bio = function (){
    return `eu gosto de ${this.interesse[1]}`
}

pessoa.nome = delete[0]

console.log(pessoa.bio());
console.log(pessoa)