/*Async / Awaiting 
Async: 
essa palavra pode ser usada ao criarmos uma função convencional. Quando adicionamos esse 
identificador na crialçao desta função, nós definimo que ela será uma FUNÇÃO ASSINCONA, ou seja,
nos retornarpa UMA PROMISE. Se



Await:
Essa palavra sera usada com o objetivo DE ESPERAR a resolução
de uma função assincrona. Se houver uma série de série de funções
assincronas, o await definita que o codigo so tera*/

//joinStrings: Irá realizar a concatenação de 2 strings. Ela foi
//criada com o identificador ASYNC, deixando claro de que se trata de uma função assincrona.
async function joinStrings (string1, string2) {

    return string1 + " " + string2;
}

async function init() {

    await joinStrings ("Blue", "Edtech").then(function(result){
        console.log(result);
    });
}

init();