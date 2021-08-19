let hp = prompt("HP do monstro (entre 10 e 50) = "),
    ataque = prompt("Poder de ataque (entre 5 e 10) = ");

console.log(`Você demorou ${Math.ceil(hp/ataque)} turnos.`);