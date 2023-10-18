function calculaLetraDNI(dni) {

    let restoDNI = dni % 23;
    let cadenaDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let letraDNI = cadenaDNI.slice(restoDNI, 1);
    return letraDNI;

}

const miFormulario = document.getElementById("formulario")

console.log(miFormulario)







