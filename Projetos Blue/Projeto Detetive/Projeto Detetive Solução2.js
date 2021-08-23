let nome = prompt(
  "Boa noite, estamos fazendo uma investigação sobre um assassinato,\npor gentileza, poderia nos informar o seu nome?\nDigite o seu nome:"
);
console.log(`\nAgora iremos fazer algumas perguntas`);

console.log(
  `\n${nome}\né IMPORTANTE que você digite 1 para SIM e 0 para NÃO\n`
);

A = +prompt(`Você telefonou para a vitima?
1.SIM
0.NÃO\n`);
if (A !== 1 && A !== 0) {
  console.log("Por favor digite uma opção valida");
} else if (A === 1 || A === 0) {
  B = +prompt(`Esteve no local do crime?
1.SIM
0.NÃO\n`);
}
if (B !== 1 && B !== 0) {
  console.log("Por favor digite uma opção valida");
} else if (B === 1 || B === 0) {
  C = +prompt(`Mora perto da vitima?
1.SIM
0.NÃO\n`);
}
if (C !== 1 && C !== 0) {
  console.log("Por favor digite uma opção valida");
} else if (C === 1 || C === 0) {
  D = +prompt(`Devia para a vitima?
1.SIM
0.NÃO\n`);
}
if (D !== 1 && D !== 0) {
  console.log("Por favor digite uma opção valida");
} else if (D === 1 || D === 0) {
  E = +prompt(`Já trabalhou com a vitima?
1.SIM
0.NÃO\n`);
}
if (E !== 1 && E !== 0) {
  console.log("Por favor digite uma opção valida");
} else if (E === 1 || E === 0) {
  F = A + B + C + D;
}
G = E + F;

if (G < 2) {
  console.log(`Parabens sr(a) ${nome}, você é inocente!!!`);
} else if (G === 2) {
  console.log(`Infelizmente o sr(a) é suspeito(a)`);
} else if (G === 5) {
  console.log(
    `${nome}, venha conosco, você esta preso(a) pois é o assassino!!!`
  );
} else if (G === 3 || 4) {
  console.log(`Constatamos que o sr(a) é cumplice do assassino!`);
}
