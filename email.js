/*
Basicamente um email deve possuir as seguintes opções em seu campo:
  Não possuir espaços;
  Possuir o @;
  Possuir algum caracter antes do @;
  Possuir algum caracter após o @;
  Possuir pelo menos um ponto após o caracter depois do @;
  Possuir algum caracter após o ponto.

uso:
  <input type="text" value="contato@wsa.net.br"
  onblur="valEmail(this)" onkeyup="corEmail(this);"/>
*/

let valido = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

function valEmail(obj){
  if(obj.value == '')
    return false
  if(!valido.test(obj.value)){
    alert('E-mail inválido');
    obj.value = "";
  }
}

function corEmail(obj){
  if(obj.value == '')
    return false
  if(!valido.test(obj.value))
    obj.style.color = 'red' // e-mail invalido
  else
    obj.style.color = null
}
