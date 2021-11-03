const mongoose = require("mongoose");  //importando o mongoose

const filmesModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    genero: { type: String, required: true },
    lancamento: { type: Number },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const filmes = mongoose.model("filmes",filmesModel); // a criacao do modelo na colection Pessoas

module.exports = filmes; //exportando o modelo pronto