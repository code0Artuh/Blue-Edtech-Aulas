const express = require("express");  //chamando o express
const app = express();  //definindo o app como express

app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./model/conn/index"); //importando a conexao

Conn(); //executa a func de conexao

const port = 3000; //porta do node

const pessoasRouter = require("./routers/pessoas.routes");
app.use('/pessoas',pessoasRouter);

const filmesRouter = require("./routers/filmes.routes");
app.use('/filmes',filmesRouter);

const jogosRouter = require("./routers/jogos.routes");
app.use('/jogos',jogosRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});