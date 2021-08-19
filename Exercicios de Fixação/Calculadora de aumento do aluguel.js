let valorAluguel = parseFloat(prompt("Digite o valor do seu aluguel: ")),
    IGPM = 0.31;

console.log(`Seu aluguel reajustado com base no IGPM é igual a R$ ${(valorAluguel*(1+IGPM)).toFixed(2)}.`);