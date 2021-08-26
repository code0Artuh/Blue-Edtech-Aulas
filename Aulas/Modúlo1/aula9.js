let lista = ["Leonardo","William","Guilherme","Pedro","Chanely","Lorenzo","Ivan"];
let lista2 = [10,20,30,40,50];
let lista3 = {nome: "Leonardo", idade:20, cidade:"Londrina"}

// console.log(lista.length);

// // for of me traz o valor do elemento.
// for (let i of lista){
//   console.log("Valor de i: ");
//   console.log(i);
// }

// console.log();

// // for in me traz a posição do elemento (nesse caso, o índice)
// for (let i in lista){
//   console.log("Valor de i: ");
//   console.log(i);
//   console.log(typeof(i));
// }


lista = ["Leonardo","William","Guilherme","Pedro","Chanely","Lorenzo","Ivan"];

function percorreLista(value,index,array){
  console.log(`O primeiro parâmetro é: ${value}`);
  console.log(`O segundo parâmetro é: ${index}`);
  console.log(`O terceiro parâmetro é: ${array}`);
  console.log("Fim da função.");
  console.log();
}

// percorreLista("Felipe",137,["Ayrton","Hudson"]);
// console.log();
// percorreLista("Cha","Artur","Ayrton");
// console.log();

// // O foreach vai executar uma função determinada PARA CADA elemento da lista. Em cada um, ele vai retornar como argumento em ordem: valor, indice, array
// // É como se ele desse um for of, um for in, e listasse o array, para cada elemento.
lista.forEach(percorreLista);