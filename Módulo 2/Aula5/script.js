var lista = ["green" ,"red" ,"blue"];
var contador = 0;


function alerta(){
    if(contador === lista.length){
        contador=0
    }
    document.getElementById('name').style.color = lista[contador]
    contador++
    setTimeout(function(){
        alerta()
 }, 1000);
    
}