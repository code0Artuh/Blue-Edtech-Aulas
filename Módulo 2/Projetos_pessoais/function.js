function Converter() {
    var nome = document.getElementById("nome").value;
    var name = `O produto ${nome} custa:\n`;
    var valorElemento = document.getElementById("valor").value;
    var converter = parseFloat(valorElemento * 5.29);
    var convertido = document.getElementById("valorConvertido");
    var real =
      name +
      converter.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    convertido.innerHTML = real;
  }
  