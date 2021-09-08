const prompt = require('prompt-sync')();
//atributos do objeto filme: titulo, ano , genero, diretor, atores, duração
class Filmes{
constructor(){
    this.titulo ="";
    this.ano = 0;
    this.genero = "";
    this.diretor = "";
    this.atores = [];
    this.duração = 0;

}

Reproduzir(){
    console.log("Reproduzindo o filme...");
}
Pausar(){}
Avançar(){}
Fechar(){}
}