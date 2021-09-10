const prompt = require('prompt-sync')();
//setTimeout serve para realizar ações de´pois de um determinado tempo
//precisamos passar uma FUNÇÃO ANONIMA como parametro do setTimeout
function enviar(corpo,para){
    setTimeout(function(){
        console.log(`
        
        Email📧
        -------------------
        Para: ${para}
        -------------------
        ${corpo}
        -------------------
        De:Artuh0code
        
        `)
    },4000);
}

console.log('inicio do envio do email');

enviar("parabens voce ganhou um cupom de desconto de R$99 na loja pichau","arturrocha1.2@outlook.com")

console.log("Seu email foi enviado com sucesso");
console.log("confirmado");