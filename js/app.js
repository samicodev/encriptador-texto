/* Variables para elementos de la section entrada */
let textoEntrada = document.getElementById('textoEntrada');
let textoResultado = document.getElementById('textoResultado');

/* Variables para elementos de la section resultado */
let mensajeCopiado = document.getElementById('mensajeCopiado');

let botonCopiar = document.getElementById('botonCopiar');
let resultadoInformacion = document.getElementById('resultadoInformacion');
let resultadoMunieco = document.getElementById('resultadoMunieco');


/* Funcion para encriptar el texto */
function encriptarTexto() {
  if (validarTexto()) {
      textoResultado.value = textoEntrada.value.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
      modificarDisplay()
  }
}

/* Validacion para permitir solo letras en minúsculas y sin acentos */
function validarTexto() {
  let expresionRegular = /^[a-z\s!]*$/;
  if (textoEntrada.value.trim() !== "") { //Condicion para envitar el textarea de entrada vacio
    if (!expresionRegular.test(textoEntrada.value)) { //Condicion para evitar letras en minúsculas y sin acentos
      alert('Debes ingresar letras en minúsculas y sin acentos.');
      return false;
    }
    return true;
  } else {
    alert('Debes ingresar un texto, el campo no puede estar vacio.');
    return false;
  }
}

/* Funcion para copiar el texto encriptado */
function copiarTexto() {
if(textoResultado.value !== ""){
  navigator.clipboard.writeText(textoResultado.value)
 mensajeCopiado.style.display = 'block';

  setTimeout(function() {
    mensajeCopiado.style.display = 'none';
  }, 1000);
}else{
  alert('El campo esta vacio, no hay texto que copiar.')
}

}

/* Funcion para desencriptar el texto */
function desencriptarTexto() {
  if (validarTexto()) {
      textoResultado.value = textoEntrada.value.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
      modificarDisplay()
  }
}

/* Funcion para nodificar la propiedad display de imagenes y textos */
function modificarDisplay() {

  resultadoMunieco.style.display = 'none';
  resultadoInformacion.style.display = 'none';
  textoResultado.style.display = 'block';
  botonCopiar.style.display = 'block';
}

