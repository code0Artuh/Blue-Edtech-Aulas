const prompt = require("prompt-sync")();

/*1. Crie um programa que leia o preço e a quantidade de um produto a ser
comprado, calculando o total da compra, guarde essas informações em um objeto.
Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for
entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê
20% de desconto. No final mostre ao cliente a quantidade, o preço do produto e o
valor total de sua compra, considerando o desconto dado. Não se esqueça de
alterar o valor total no objeto.*/



//const {Produto, Valor, QTD} = lista[0]

//console.log(Produto)
//console.log(Valor)

const breja = {};

console.log(`Bem-vindo ao mercado Blue\n`)

breja.marca = prompt("Digite o nome da cerveja: ")

breja.preço = prompt("Digite o valor do produto: ");

breja.quantidade = prompt("Digite a quantidade que quer comprar: ");

breja.total = breja.preço * breja.quantidade;


if(breja.total > 100 && breja.total < 398){
    breja.total = breja.total * 0.9.toFixed(2);
    console.log(breja)
    console.log(`Parabens você ganhou 10% de desconto, o total da compra é ${breja.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}!!!`)
}else if (breja.total > 399 && breja.total < 501){
    console.log(breja)
    console.log(`Parabens você ganhou 15% de desconto, o total da compra é ${breja.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}!!!`)
    breja.total = breja.total * 0.85.toFixed(2);
}else if (breja.total > 500){
   console.log(breja)
    console.log(`Parabens você ganhou 20% de desconto, o total da compra é ${breja.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}!!!`)
    breja.total = breja.total * 0.8.toFixed(2);
}else{console.log(breja)}

/*2.Faça um programa que leia nome e média de um aluno, guardando também a
situação em um objeto. No final, mostre o conteúdo da estrutura na tela. A média
para aprovação é 7. Se o aluno tirar entre 5 e 6.9 está de recuperação, caso
contrário é reprovado.*/


console.log("Bem-vindo a escola Blue\n")

let aluno = {};

aluno.nome = prompt('Digite o nome do aluno: ');

aluno.média = +prompt('Digite a média: ');

if (aluno.média === 7){
    aluno.situação = "aprovado"
    console.log(aluno)
}else if (aluno.média < 7 && aluno.média > 4.9){
    aluno.situação = "recuperação"
    console.log(aluno)
}else if (aluno.média < 5){
    aluno.situação = "reprovado"
    console.log(aluno)
}



