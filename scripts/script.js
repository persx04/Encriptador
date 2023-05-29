const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const customAlert = document.getElementById('customAlert');
const texto = document.getElementById('encriptation');
const resultado = document.getElementById('resultado');
const copiar = document.getElementById('copiar');
const customAlertText = document.getElementById('customAlertText');
const reset = document.getElementById('reset')
var alertPerso='iniciado'

function validacion(texto) {
    const textoMin = texto.toLowerCase()
    const regex = /[^a-zA-Z\s]/g;
    const textoSinCar = texto.replace(regex, '');

    
    return texto == textoSinCar && texto == textoMin;

}
encriptar.onclick = function clickeado() {
    if (validacion(texto.value) && !!texto.value) {
        resultado.value=encriptacion_2(texto.value)
        copiar.style.display = 'block';
        texto.value = ''
    } else {
        activeAlert(!!texto.value?"Campo no valido":"Campo vacio")
    }

}


desencriptar.onclick = function clickead() {
    if (validacion(texto.value) && !!texto.value) {
        resultado.value = desencriptacion_2(texto.value)
        copiar.style.display = 'block';
        texto.value = resultado.value
    } else {
        activeAlert(!!texto.value?"Campo no valido":"Campo vacio")
    }

}




function encriptacion_2(texto) {
    textoEncriptado = texto.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    return textoEncriptado;
}

function desencriptacion_2(texto) {
    textoLimpio = texto.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")
    return textoLimpio
}

function activeAlert(mensaje){
    customAlertText.textContent=mensaje
    customAlert.style.display = 'block';
    setTimeout(function(){
        customAlert.style.display = 'none';
    },1500)
}

copiar.onclick = function copiarResultados(){
    navigator.clipboard.writeText(resultado.value).then(function(){
        if (!!resultado.value) {
            activeAlert("Copiado con exito")
        }else{
            activeAlert("El campo esta vacio")
        }

    })
    .catch(function(error) {
        console.error("Error al copiar el contenido: ", error);
      });
}

reset.onclick = function reset(){
    texto.value = null;
    resultado.value = null;
    copiar.style.display = 'none';
}





