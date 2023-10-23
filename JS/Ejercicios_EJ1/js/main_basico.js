// Entrada-salida sencilla


/* let msgEntrada = prompt("Escribe algo...");

let msgSalida = `Lo que has escrito en el cuadro de texto es:\n${msgEntrada}`

alert(msgSalida) */


// Podemos usar este mecanismo y guardar todas las variables que queramos mientras no se refresque la página
// \n es un caracter de control que introduce un retorno de carro

// -------------------------------------

// Uso de funciones para todo. Podemos (y debemos) uar funciones siempre que podamos. Nos permite tener un código más legible
// ojo!! esto que sigue es un caso extremo ;)


function recogeEntrada() {

    let msgEntrada = prompt("Escribe un número cualquiera...");
    return msgEntrada

}

function elaboraSalida(texto) {

    if (compruebaNumero(msgEntrada)) {

        let txtElaborado = `Estupendo!! has escrito el número: \n${texto}`

    }

    
    return txtElaborado;

}

// --------------------------------------------

function compruebaNumero(texto) {

    if (isNaN(texto)) {
        return false;
    } else {
        return true;
    }
    
}


// La función que soporta el flujo principal del programa suele denominarse 'main', aunque ello no es obligatorio

// -------------------------------------

// Con el esquema anterior podemos hacer muchas cosas, aunque la entrada y la salida son 'rudimentarias'

/* function main () {

    let msgEntrada = recogeEntrada();
    let msgSalida = elaboraSalida(msgEntrada);
    
    alert(msgSalida)
    
}; */


function main() {

    var msgEntrada = recogeEntrada();

    if (compruebaNumero(msgEntrada)) {
        var msgSalida = `Perfecto!!, has escrito el número ${msgEntrada}`;
    } else {
        var msgSalida = `Lo siento... ${msgEntrada} no es un número...`;
    }

    alert(msgSalida);
}

main();



