const mongoose = require("mongoose");  //importando o mongoose

const jogosModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    genero: { type: String, required: true },
    plataforma: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const Jogos = mongoose.model("Jogos",jogosModel); // a criacao do modelo na colection Pessoas

module.exports = Jogos; //exportando o modelo pronto