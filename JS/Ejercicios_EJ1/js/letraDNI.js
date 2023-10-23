function seleccionaDOM() {

    const form = document.getElementById("formDNI");
    const dniNumero = document.getElementById("entradaDNI");
    const divSalida = document.getElementById("salidaDNI");

    return [form, dniNumero, divSalida];

}


function calculaLetra(dni) {

    let posicionLetra = dni % 23;
    let letraDNI = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(posicionLetra);
    return letraDNI;
    
}



function main() {


    let [form, dniNumero, divSalida] = seleccionaDOM();


    form.addEventListener("submit", (ev) => {

        let letra = calculaLetra(dniNumero.value);
        console.log(dniNumero.value);

        divSalida.innerHTML = (dniNumero.value) || (!isNaN(dniNumero.value)) ? `${dniNumero.value}-${letra}` : `Introduce un DNI válido`;
        dniNumero.value = "";

        ev.preventDefault();
    });

}

main();



