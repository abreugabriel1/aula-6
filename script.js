
function calcula_media() {
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let media = ( parseFloat(nota1)+parseFloat(nota2) ) / 2 ;
  // alert('Media = '+media);
  
  if (media<5) {
  document.getElementById("resultado").innerHTML = " Media = <strong>"+media+" em Recuperação. </strong>";
  
  }else {
  document.getElementById("resultado").innerHTML = " Media = <strong>"+media+" Aprovado. </strong>";
    
  }
}

function calcula_soma() {
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let resultado = ( parseFloat(nota1)+parseFloat(nota2) ) ;
   
  document.getElementById("resultado").innerHTML = ` Soma = <strong> ${resultado}  </strong>`;
}//fim funcao

function calcula_subtracao() {
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let resultado = ( parseFloat(nota1)-parseFloat(nota2) ) ;
   
  document.getElementById("resultado").innerHTML = ` Subtração = <strong> ${resultado}  </strong>`;
}//fim funcao

function calcula_divisao() {
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let resultado = ( parseFloat(nota1)/parseFloat(nota2) ) ;
   
  document.getElementById("resultado").innerHTML = ` Divisão = <strong> ${resultado}  </strong>`;
}//fim funcao

function calcula_multiplicacao() {
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let resultado = ( parseFloat(nota1)*parseFloat(nota2) ) ;
   
  document.getElementById("resultado").innerHTML = ` Multiplicação= <strong> ${resultado}  </strong>`;
}//fim funcao