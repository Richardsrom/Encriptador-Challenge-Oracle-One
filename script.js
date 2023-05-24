let botonEncriptar = document.querySelector(".button-encriptar");
let botonDesencriptar = document.querySelector(".button-desencriptar");
let doll = document.querySelector(".doll");
let content = document.querySelector(".rightContent-msj");
let result = document.querySelector(".textoResult");
let rightContent1 = document.querySelector(".rightContent1");
let botonCopy = document.querySelector(".buttons-copy");

botonEncriptar.onclick = encriptar; 
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    ocultarBotonCopy();
    let cajatexto = recuperarTexto();
    result.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    ocultarBotonCopy();
    let cajatexto = recuperarTexto();
    result.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    let texto = document.querySelector(".texto");
    return texto.value; 
}

function ocultarAdelante() {
    rightContent1.classList.add("hide");
}

function ocultarBotonCopy() {
    botonCopy.classList.add("reveal");
}

function mostrarTextResult() {
    let textResultado = document.querySelector(".textoResult");
    textResultado.style.display = "block";
}

botonEncriptar.addEventListener("click", mostrarTextResult);
botonDesencriptar.addEventListener("click", mostrarTextResult);

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        } else if(texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        } else if(texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }else if(texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }else if(texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        } else {
            textoFinal = textoFinal + texto[i]
        }
    }   
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i+1;
        } 
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i+4;
        } 
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i+3;
        } 
        else {
            textoFinal = textoFinal + texto[i]
        }
    }   
    return textoFinal;
}

const btnCopiar = document.querySelector(".buttons-copy");
      btnCopiar.addEventListener("click", copiar = () => {
        let content = document.querySelector(".textoResult").textContent;
        navigator.clipboard.writeText(content);
      })