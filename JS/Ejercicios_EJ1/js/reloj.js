function seleccionaDOM() {

    const div = document.getElementById("reloj");
    return div;
    
}


function avanzaReloj() {

    
    
    
    let date = new Date();

    let fecha = date.toDateString();
    // let diaMes = date.getDate();
    // let mes = date.getMonth();
    // let agno = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    return [fecha, hora, minutos, segundos]
    
}

function main() {

    const reloj = seleccionaDOM();


    temporizador = setInterval(() => {

        [fecha, hora, minutos, segundos] = avanzaReloj()
        segundos = ('00' + segundos).slice(-2) // justifica con ceros las dos cifras del segundero
        reloj.innerHTML = `Hoy es ${fecha}, - ${hora}:${minutos}:${segundos}`

    }, 1000);

    [fecha, hora, minutos, segundos] = avanzaReloj()

    reloj.innerHTML = `Hoy es ${fecha} - ${hora}:${minutos}:${segundos}`

}



main();



