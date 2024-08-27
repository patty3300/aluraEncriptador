function encriptar() {
    let texto = document.getElementById("texto").value;
    let mensajeEncriptado = document.getElementById("mensajeEncriptado");
    let parrafo = document.getElementById("parrafo");
    let pic = document.getElementById("pic");

    let textoCifrado = texto
        . replace(/e/gi, "enter")
        . replace(/i/gi, "imes")
        . replace(/a/gi, "ai")
        . replace(/o/gi, "ober")
        . replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        mensajeEncriptado.textContent = "Texto encriptado con éxito"
        parrafo.textContent = "";
        pic.src = "./img/encriptado.png";
    } else {
        pic.src = "./img/surr-waiting.png";
        mensajeEncriptado.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let mensajeEncriptado = document.getElementById("mensajeEncriptado");
    let parrafo = document.getElementById("parrafo");
    let pic = document.getElementById("pic");

    let textoCifrado = texto
        . replace(/enter/gi, "e")
        . replace(/imes/gi, "i")
        . replace(/ai/gi, "a")
        . replace(/ober/gi, "o")
        . replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        mensajeEncriptado.textContent = "Texto desencriptado con éxito"
        parrafo.textContent = "";
        pic.src = "./img/desencriptado.png";
    } else {
        pic.src = "./img/surr-waiting.png";
        mensajeEncriptado.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }

}