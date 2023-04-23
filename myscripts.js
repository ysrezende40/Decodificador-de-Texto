function criptografar() {
  var texto = document.getElementById("texto1");
  var textocerto = texto.value;
  let regex = /[^a-z\s]/g;

  if (textocerto !== textocerto.toLowerCase() || regex.test(textocerto)) {
    alert("O texto deve conter apenas letras minúsculas e sem acento!");
    document.getElementById("texto1").focus();
    return;
  }

  document.getElementById("texto1").focus();
  /*O método charAt(i) é usado para retornar o caractere em uma determinada posição em uma string.
O argumento i especifica o índice do caractere desejado, onde o primeiro caractere tem índice 0 e o último caractere tem índice
igual ao comprimento da string menos 1.
Por exemplo, se tivermos a string "Hello", o caractere "H" está no índice 0,
o caractere "e" está no índice 1, o caractere "l" está no índice 2 e 3, e o caractere "o" está no índice 4.
No código fornecido, o método charAt(i) é usado dentro do loop for para acessar cada caractere da string textocerto em cada
iteração e aplicar uma determinada criptografia a cada caractere. Por exemplo, quando o caractere "a" é encontrado na string,
o valor "enter" é adicionado à string criptografado. Quando o caractere "b" é encontrado, o valor "ai" é adicionado,
 e assim por diante. e parecido com o explode do PHP*/

  var criptografado = "";
  for (var i = 0; i < textocerto.length; i++) {
    switch (textocerto.charAt(i)) {
      case "e":
        criptografado += "enter";
        break;
      case "i":
        criptografado += "imes";
        break;
      case "a":
        criptografado += "ai";
        break;
      case "o":
        criptografado += "ober";
        break;
      case "u":
        criptografado += "ufat";
        break;
      default:
        criptografado += textocerto.charAt(i);
    }
  }
  document.getElementById("text-cripto").innerHTML = criptografado;
  
}

function descriptografar(){
  var texto = document.getElementById("texto1");
  var textocerto = texto.value;
  var result;
  if(textocerto==="enter"){
      result = "e";
  }
  else if(textocerto==="imes"){
      result="i";
  }
  else if(textocerto==="ai"){
      result="a"
  }
  else if(textocerto==="ober"){
      result="o";
  }
  else if(textocerto==="ufat"){
      result="u";
  }else{
    result=textocerto;
  }
  document.getElementById("text-cripto").innerHTML = result;

 
  
}
function sumir(){
  document.getElementById("textoarodapé1").style.display = "none";
  document.getElementById("textoarodapé2").style.display = "none";
}




