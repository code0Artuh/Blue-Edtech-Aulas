const mongoose = require("mongoose");

const pessoasModel = new mongoose.Schema({

});

const Pessoa = mongoose.model("Pessoas",pessoasModel);

module.exports = Pessoa;