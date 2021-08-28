let coca = 9.00;
let toddy = 3.50;
let doritos = 2.00;

coca = coca * 10
toddy = toddy * 5
doritos = doritos * 2

let valor = coca+toddy+doritos
let cont = 0;
let lista = ["Mercado BlueEdtech",

"Coca Cola - Valor: R$ 9,00 - Quantidade: 10",
"Toddynho - R$3,50 - Quantidade: 5",
"Doritos - R$2,00 - Quantidade 2"]

while (cont !== 1){
  cont++
  for (let value of lista)
  console.log(value)
  console.log(`${valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
}