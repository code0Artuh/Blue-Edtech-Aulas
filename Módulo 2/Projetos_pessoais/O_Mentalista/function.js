function Chutar(){
    var insert=
  document.getElementById('valor').value
    var retur = document.getElementById('resposta')
    var pc = Math.floor(Math.random() * 11)
    var resp = `Você escolheu ${insert} e o computador ${pc}, você acertou`
    var resp2 = `Você escolheu ${insert} e o computador ${pc}, você errou`
    var valido = "Digite um valor valido!!!"
    if(insert > 10){
      retur.innerHTML = valido
    }else if(insert === pc){
      retur.innerHTML = resp
    }else if(insert != pc){
      retur.innerHTML = resp2
    }
  }