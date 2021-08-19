let Real = parseFloat(prompt("Digite um valor em reais: ")),
    Dolar = 5.38;

console.log(`R$ ${Real.toFixed(2)} equivale a US$ ${(Real/Dolar).toFixed(2)}.`);