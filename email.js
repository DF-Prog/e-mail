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

function valEmail(obj){
  if(obj.value == '')
    return false
  if(!validarEmail(obj.value)){
    alert('E-mail "'+obj.value+'" inválido,\nverifique e tente novamente.');
    obj.value = "";
  }
}

function corEmail(obj){
  if(obj.value == '')
    return false
  obj.style.color = (!validarEmail(obj.value)) ? 'red' : null // e-mail invalido
}

function validarEmail(email){
  let necessario = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return necessario.test(email)
}
