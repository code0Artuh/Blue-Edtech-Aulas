let valor = `Valor total do seu consumo foi de R$ 42,54.`;

console.log(valor);

let pergunta = "E os 10% do garçom?";

console.log(pergunta);

var A = 42.54
var B = 0.10 
var C = A * (1+B).toFixed(2); 
var D = C.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

console.log(`O total da sua conta incluindo os 10% do garçom é de ${D}.`)
